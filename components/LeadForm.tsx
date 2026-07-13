'use client';

import { useState } from 'react';
import Link from 'next/link';

const APPLY_URL = 'https://online.cardinalfinancial.com/#/p/apply/derekhuit';

function isNYZip(zip: string): boolean {
  const z = (zip || '').trim();
  if (!/^\d{5}$/.test(z)) return false;
  const n = parseInt(z, 10);
  if (z === '06390') return true;
  if (n >= 10001 && n <= 14975) return true;
  if (n >= 501 && n <= 544) return true;
  return false;
}

type Status = 'idle' | 'sending' | 'success' | 'error' | 'ny_blocked';

export default function LeadForm({
  state,
  stateName,
  program,
  source,
  heading,
  sub,
}: {
  state?: string;
  stateName?: string;
  program?: string;
  source: string;
  heading?: string;
  sub?: string;
}) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', loan_type: 'buying' });
  const [consent, setConsent] = useState({ terms: false, tcpa: false });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const canSubmit =
    consent.terms &&
    consent.tcpa &&
    form.name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    /^\d{10,}$/.test(form.phone.replace(/\D/g, '')) &&
    /^\d{5}$/.test(form.zip);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (isNYZip(form.zip)) {
      setStatus('ny_blocked');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source,
          state: state || null,
          program: program || null,
          tcpa_consent: consent.tcpa,
          terms_consent: consent.terms,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  const LOAN_TYPES = [
    { v: 'buying', l: "I'm buying a home" },
    { v: 'refinancing', l: "I'm refinancing" },
    { v: 'va', l: "I'm using VA benefits" },
    ...(program === 'section-184' ? [{ v: 'section184', l: 'Section 184 / tribal member' }] : []),
    ...(program === 'dscr' ? [{ v: 'dscr', l: 'Investment property / DSCR' }] : []),
    { v: 'exploring', l: 'Just exploring / not sure yet' },
  ];

  return (
    <section id="prequalify" className="bg-navy py-16 text-cream md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-gold">
          {stateName ? `${stateName} · Pre-qualification` : 'Pre-qualification'}
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
          {heading || 'Talk to a licensed loan officer — before you apply anywhere.'}
        </h2>
        <p className="mt-5 max-w-2xl text-cream/70">
          {sub ||
            'Tell me what you are working on and I will reach out personally within one business hour. No hard credit pull, no obligation — if I cannot get you qualified, I will tell you exactly what to work on and when to come back.'}
        </p>

        <div className="mt-10">
          {status === 'success' ? (
            <div className="rounded-2xl bg-cream p-8 text-ink md:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-gold-600">Received</p>
              <h3 className="mt-3 font-display text-3xl font-medium text-navy">Got it.</h3>
              <p className="mt-4 text-ink/70">
                I&rsquo;ll reach out personally within one business hour. Want to move faster?
              </p>
              <a href={APPLY_URL} className="btn-primary mt-6 inline-block">
                Start my application now
              </a>
            </div>
          ) : status === 'ny_blocked' ? (
            <div className="rounded-2xl bg-cream p-8 text-ink md:p-10">
              <h3 className="font-display text-2xl font-medium text-navy">We can&rsquo;t serve New York.</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                This site is not authorized by the New York State Department of Financial Services. No mortgage loan
                applications for properties located in the state of New York will be accepted through this site.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-outline mt-6 border-navy/30 text-navy hover:bg-navy hover:text-cream"
              >
                Back
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="rounded-2xl bg-cream/[0.04] p-6 backdrop-blur-sm md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="field-dark" placeholder="Full name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
                <input className="field-dark" placeholder="Email" type="email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
                <input className="field-dark" placeholder="Phone" type="tel" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" />
                <input className="field-dark" placeholder="Property ZIP" inputMode="numeric" maxLength={5} value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value.replace(/\D/g, '') })} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {LOAN_TYPES.map((t) => (
                  <button
                    key={t.v}
                    type="button"
                    onClick={() => setForm({ ...form, loan_type: t.v })}
                    className={`rounded-full border px-4 py-2 font-mono text-xs transition-colors ${
                      form.loan_type === t.v
                        ? 'border-gold bg-gold text-navy'
                        : 'border-cream/25 text-cream/70 hover:border-cream/50'
                    }`}
                  >
                    {t.l}
                  </button>
                ))}
              </div>

              <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-cream/70">
                <input type="checkbox" checked={consent.terms} onChange={(e) => setConsent({ ...consent, terms: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A962]" />
                <span>
                  I agree to the <Link href="/privacy" className="underline">Privacy Policy</Link> and{' '}
                  <Link href="/terms" className="underline">Terms of Use</Link>.
                </span>
              </label>
              <label className="mt-3 flex items-start gap-3 text-xs leading-relaxed text-cream/70">
                <input type="checkbox" checked={consent.tcpa} onChange={(e) => setConsent({ ...consent, tcpa: e.target.checked })}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-[#C9A962]" />
                <span>
                  By submitting, I agree to receive calls, texts (including autodialed and prerecorded messages), and
                  emails from Derek Huit and Cardinal Financial Company, Limited Partnership regarding mortgage products
                  at the number and email provided. Consent is not a condition of any purchase. Message and data rates
                  may apply. Reply STOP to opt out.
                </span>
              </label>

              {status === 'error' && <p className="mt-4 text-sm text-red-300">{errorMsg}</p>}

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" disabled={!canSubmit || status === 'sending'}
                  className="btn-gold disabled:cursor-not-allowed disabled:opacity-40">
                  {status === 'sending' ? 'Sending…' : 'Request my callback'}
                </button>
                <a href={APPLY_URL} className="font-mono text-xs text-cream/60 underline-offset-4 hover:text-cream hover:underline">
                  Prefer to skip ahead? Start the full application →
                </a>
              </div>
            </form>
          )}
        </div>

        <p className="mt-8 font-mono text-xs text-cream/40">
          Derek Huit · NMLS #203980 · Cardinal Financial Company, Limited Partnership · NMLS #66247
          {stateName ? ` · Licensed in ${stateName}` : ''}
        </p>
      </div>
    </section>
  );
}
