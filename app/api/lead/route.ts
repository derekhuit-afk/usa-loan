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
    const state = (body.state || null)?.toString().slice(0, 40) || null;
    const program = (body.program || null)?.toString().slice(0, 40) || null;
    const tcpa_consent = body.tcpa_consent === true;
    const terms_consent = body.terms_consent === true;

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
    if (!tcpa_consent || !terms_consent) {
      return NextResponse.json({ error: 'Please check both consent boxes to continue.' }, { status: 400 });
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
        state,
        program,
        tcpa_consent,
        terms_consent,
        consent_timestamp: new Date().toISOString(),
      });
      if (error) {
        console.error('[lead] Supabase insert error:', error.message);
      } else {
        supabaseOk = true;
      }
    } catch (err) {
      console.error('[lead] Supabase error:', err);
    }

    // Fire SMS alert via Twilio when configured
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

    // Forward to Relcu (Cardinal CRM) — non-blocking, Supabase record is source of truth.
    // Activates when env vars are set: RELCU_INTAKE_EMAIL (email delivery via Resend)
    // and/or RELCU_POST_URL [+ RELCU_API_KEY] (direct JSON POST). Silent no-op otherwise.
    let relcuOk = false;
    const relcuPayload = {
      firstName: name.split(' ')[0],
      lastName: name.split(' ').slice(1).join(' ') || name,
      name,
      email,
      phone,
      zip,
      loanType: loan_type,
      state,
      program,
      source,
      leadSource: 'usa.loan',
      tcpaConsent: tcpa_consent,
      consentTimestamp: new Date().toISOString(),
      ipAddress: ip,
    };
    if (process.env.RELCU_POST_URL) {
      try {
        const res = await fetch(process.env.RELCU_POST_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(process.env.RELCU_API_KEY ? { Authorization: `Bearer ${process.env.RELCU_API_KEY}` } : {}),
          },
          body: JSON.stringify(relcuPayload),
        });
        relcuOk = res.ok;
        if (!res.ok) console.error('[lead] Relcu POST failed:', res.status, await res.text().catch(() => ''));
      } catch (err) {
        console.error('[lead] Relcu POST error:', err);
      }
    }
    if (process.env.RELCU_INTAKE_EMAIL && process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: process.env.LEAD_FROM_EMAIL || 'leads@usa.loan',
          to: process.env.RELCU_INTAKE_EMAIL,
          subject: `New Lead: ${name} · ${loan_type}${state ? ' · ' + state.toUpperCase() : ''} · usa.loan`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `ZIP: ${zip}`,
            `Loan Type: ${loan_type}`,
            state ? `State: ${state}` : null,
            program ? `Program: ${program}` : null,
            `Source: ${source}`,
            `TCPA Consent: yes (${relcuPayload.consentTimestamp})`,
            `Lead Source: usa.loan`,
          ].filter(Boolean).join('\n'),
        });
        relcuOk = true;
      } catch (err) {
        console.error('[lead] Relcu email error:', err);
      }
    }
    void relcuOk;

    // If persistence failed, surface it — a silently dropped lead is worse than a retry prompt
    if (!supabaseOk) {
      return NextResponse.json(
        { error: 'We could not save your request. Please try again or email derekhuit@gmail.com directly.' },
        { status: 500 }
      );
    }

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
