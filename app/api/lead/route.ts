import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Basic NY-ZIP guard mirrored from client side (defense in depth)
function isNYZip(zip: string): boolean {
  const z = (zip || '').trim();
  if (!/^\d{5}$/.test(z)) return false;
  const n = parseInt(z, 10);
  if (z === '06390') return true;
  if (n >= 10001 && n <= 14975) return true;
  if (n >= 501 && n <= 544) return true;
  return false;
}

function sanitizePhone(raw: string): string {
  const digits = (raw || '').replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return digits ? `+${digits}` : '';
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = (body.name || '').toString().trim().slice(0, 200);
    const email = (body.email || '').toString().trim().slice(0, 200).toLowerCase();
    const phoneRaw = (body.phone || '').toString();
    const zip = (body.zip || '').toString().trim();
    const loan_type = (body.loan_type || 'exploring').toString().slice(0, 40);
    const source = (body.source || 'usa.loan').toString().slice(0, 120);

    // Validation
    if (!name || name.length < 2) {
      return NextResponse.json({ error: 'Name required.' }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
    }
    const phone = sanitizePhone(phoneRaw);
    if (!phone || phone.length < 11) {
      return NextResponse.json({ error: 'Valid phone required.' }, { status: 400 });
    }
    if (!/^\d{5}$/.test(zip)) {
      return NextResponse.json({ error: 'Valid 5-digit ZIP required.' }, { status: 400 });
    }
    if (isNYZip(zip)) {
      return NextResponse.json(
        {
          error:
            'This site is not authorized by the New York State Department of Financial Services. No mortgage loan applications for properties located in the state of New York will be accepted through this site.',
        },
        { status: 400 }
      );
    }

    // Collect request metadata
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || null;
    const userAgent = req.headers.get('user-agent') || null;

    // Store in Supabase
    let supabaseOk = false;
    try {
      const supa = supabaseAdmin();
      const { error } = await supa.from('usa_loan_leads').insert({
        name,
        email,
        phone,
        zip,
        loan_type,
        source,
        ip_address: ip,
        user_agent: userAgent,
        tcpa_consent: true,
        terms_consent: true,
      });
      if (error) {
        console.error('[lead] Supabase insert error:', error.message);
      } else {
        supabaseOk = true;
      }
    } catch (err) {
      console.error('[lead] Supabase error:', err);
    }

    // Fire SMS alert to Derek via Twilio
    let smsOk = false;
    const smsEnabled = !!(
      process.env.TWILIO_ACCOUNT_SID &&
      process.env.TWILIO_AUTH_TOKEN &&
      process.env.TWILIO_FROM_NUMBER &&
      process.env.LEAD_ALERT_TO_NUMBER
    );
    if (smsEnabled) {
      try {
        const twilioMod = await import('twilio');
        const client = twilioMod.default(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);
        await client.messages.create({
          from: process.env.TWILIO_FROM_NUMBER!,
          to: process.env.LEAD_ALERT_TO_NUMBER!,
          body: `🏡 USA.loan lead\n${name} · ${phone}\n${email}\nZIP ${zip} · ${loan_type}`,
        });
        smsOk = true;
      } catch (err) {
        console.error('[lead] Twilio error:', err);
      }
    }

    // Always succeed to user if validation passed — delivery is ops concern
    return NextResponse.json({
      ok: true,
      guide_url: '/guide.pdf',
      delivered: { supabase: supabaseOk, sms: smsOk },
    });
  } catch (err) {
    console.error('[lead] unexpected:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
