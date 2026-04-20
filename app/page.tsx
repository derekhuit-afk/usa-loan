'use client';

import { useState } from 'react';
import Link from 'next/link';

const APPLY_URL = 'https://online.cardinalfinancial.com/#/p/apply/derekhuit';

/* ------------------------ NY ZIP detection ------------------------ */
// NY ZIP codes span 005xx, 06390, 10xxx–14xxx. Quick range check.
function isNYZip(zip: string): boolean {
  const z = zip.trim();
  if (!/^\d{5}$/.test(z)) return false;
  const n = parseInt(z, 10);
  if (z === '06390') return true; // Fishers Island, NY
  if (n >= 10001 && n <= 14975) return true;
  if (n >= 501 && n <= 544) return true; // 005xx, Holtsville IRS range
  return false;
}

/* ------------------------ Hero ------------------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-cream">
      <div className="grain pointer-events-none absolute inset-0 opacity-20" />
      {/* Gold accent line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gold/30 hidden md:block" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 md:px-10 md:pt-14 md:pb-36">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-16 md:pb-24">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold text-cream">USA</span>
            <span className="font-display text-2xl font-light text-gold">.loan</span>
          </div>
          <a href={APPLY_URL} className="text-[11px] font-semibold uppercase tracking-trackout text-cream/80 hover-underline">
            Apply →
          </a>
        </div>

        {/* Eyebrow */}
        <p className="rise rise-1 mb-6 text-[11px] font-semibold uppercase tracking-trackout text-gold">
          Direct Mortgage Lending · Licensed in 49 states
        </p>

        {/* Headline */}
        <h1 className="rise rise-2 display-hero font-display text-[56px] leading-[1.02] tracking-tight text-cream md:text-[84px]">
          Get pre-approved<br />
          <span className="italic text-gold">in minutes.</span><br />
          Close in 30 days.
        </h1>

        <p className="rise rise-3 mt-8 max-w-2xl text-lg leading-relaxed text-cream/80 md:text-xl">
          Straightforward home loans from a lender who's actually closed a billion dollars of them. No callback games.
          No bait-and-switch. Just real numbers, fast answers, and a process built for humans.
        </p>

        {/* Dual CTA */}
        <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">
            Start my application
          </a>
          <a href="#guide" className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-navy">
            Get the free buyer guide
          </a>
        </div>

        {/* Meta */}
        <div className="rise rise-4 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/10 pt-8 text-xs text-cream/60">
          <span>Derek Huit · NMLS <span className="text-cream">#203980</span></span>
          <span className="hidden sm:inline">·</span>
          <span>18 Years Experience</span>
          <span className="hidden sm:inline">·</span>
          <span>$1B+ Loans Originated</span>
          <span className="hidden sm:inline">·</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Trust Strip ------------------------ */
function TrustStrip() {
  const stats = [
    { n: '18', l: 'Years in the industry' },
    { n: '$1B+', l: 'In home loans originated' },
    { n: '49', l: 'States licensed (not NY)' },
    { n: '24h', l: 'Pre-approval turnaround' },
  ];
  return (
    <section className="border-y border-navy/10 bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-navy/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="px-6 py-8 text-center md:py-10">
            <p className="font-display text-4xl font-semibold text-navy md:text-5xl">{s.n}</p>
            <p className="mt-2 text-[11px] font-medium uppercase tracking-trackout text-navy/60">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------ Loan Paths ------------------------ */
function LoanPaths() {
  const paths = [
    {
      n: '01',
      t: 'Purchase',
      d: 'First home, move-up, or investment. FHA, Conventional 97, VA, and USDA programs. Down payments from 0% to 20%.',
    },
    {
      n: '02',
      t: 'Refinance',
      d: 'Lower your rate, shorten your term, or pull equity to eliminate high-interest debt. Break-even analysis first — no waste.',
    },
    {
      n: '03',
      t: 'VA & Military',
      d: 'Zero down, no PMI, and seller-paid closing costs. Active duty, veterans, and qualifying surviving spouses. No funding fee for disabled vets.',
    },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-gold-600">Ways to Work Together</p>
        <h2 className="mb-14 max-w-2xl font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
          Whatever kind of loan you need — I've probably closed hundreds of them.
        </h2>

        <div className="grid gap-px bg-navy/10 md:grid-cols-3">
          {paths.map((p) => (
            <div key={p.n} className="flex flex-col bg-cream p-8 transition-colors hover:bg-white md:p-10">
              <span className="mb-8 font-display text-xs font-medium tracking-trackout text-gold-600">{p.n}</span>
              <h3 className="font-display text-2xl font-medium text-navy md:text-3xl">{p.t}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{p.d}</p>
              <a href={APPLY_URL} className="mt-8 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-trackout text-navy hover-underline">
                Apply for {p.t.toLowerCase()} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Lead Magnet (PDF opt-in) ------------------------ */
function LeadMagnet() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', zip: '', loan_type: 'purchase' });
  const [consent, setConsent] = useState({ terms: false, tcpa: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'ny_blocked'>('idle');
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
        body: JSON.stringify({ ...form, source: 'usa.loan/lead-magnet' }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  return (
    <section id="guide" className="bg-navy py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5 md:px-10 md:gap-16">
        {/* Left: pitch */}
        <div className="md:col-span-2">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-gold">Free Guide</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            The First-Time Homebuyer Playbook.
          </h2>
          <p className="mt-5 text-cream/70">
            14 pages. No fluff. Everything you need to go from curious to closed — credit prep, pre-approval docs, the 28/36 rule, loan program comparison, real costs, the 30-day checklist.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-cream/80">
            <li className="flex gap-3"><span className="text-gold">→</span>The exact docs to gather before applying</li>
            <li className="flex gap-3"><span className="text-gold">→</span>FHA vs Conventional vs VA vs USDA — side by side</li>
            <li className="flex gap-3"><span className="text-gold">→</span>Real closing costs for a $350k home (every line item)</li>
            <li className="flex gap-3"><span className="text-gold">→</span>The 5 mistakes that kill first-time buyer deals</li>
            <li className="flex gap-3"><span className="text-gold">→</span>A printable 30-day pre-approval checklist</li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="md:col-span-3">
          {status === 'success' ? (
            <div className="bg-cream p-8 text-ink md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-trackout text-gold-600">Delivered</p>
              <h3 className="mt-3 font-display text-3xl font-medium text-navy">Your guide is on the way.</h3>
              <p className="mt-4 text-ink/70">
                Check your email — the PDF link is in your inbox. I'll be in touch personally within 1 business hour.
              </p>
              <a href="/guide.pdf" target="_blank" rel="noopener" className="btn-primary mt-6">
                Or download it directly
              </a>
            </div>
          ) : status === 'ny_blocked' ? (
            <div className="bg-cream p-8 text-ink md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-trackout text-gold-600">Important Notice</p>
              <h3 className="mt-3 font-display text-3xl font-medium text-navy">We can't serve New York from this site.</h3>
              <p className="mt-4 text-ink/70">
                This site is not authorized by the New York State Department of Financial Services. No mortgage loan applications for properties located in the state of New York will be accepted through this site.
              </p>
              <button onClick={() => { setStatus('idle'); setForm({ ...form, zip: '' }); }} className="btn-outline mt-6">
                Update ZIP code
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-cream p-6 text-ink md:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="field" type="text" placeholder="Full name" required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className="field" type="email" placeholder="Email address" required
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="field" type="tel" placeholder="Phone number" required
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  className="field" type="text" inputMode="numeric" pattern="\d{5}" maxLength={5} placeholder="Property ZIP" required
                  value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                />
              </div>

              <select
                className="field mt-4"
                value={form.loan_type}
                onChange={(e) => setForm({ ...form, loan_type: e.target.value })}
              >
                <option value="purchase">I'm buying a home</option>
                <option value="refi">I'm refinancing</option>
                <option value="va">I'm using VA benefits</option>
                <option value="exploring">Just exploring / not sure yet</option>
              </select>

              {/* Consent block */}
              <div className="mt-6 space-y-3 text-[12px] leading-relaxed text-ink/70">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-navy"
                    checked={consent.terms}
                    onChange={(e) => setConsent({ ...consent, terms: e.target.checked })}
                  />
                  <span>
                    I agree to the <Link href="/privacy" className="underline">Privacy Policy</Link> and <Link href="/terms" className="underline">Terms of Use</Link>.
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 accent-navy"
                    checked={consent.tcpa}
                    onChange={(e) => setConsent({ ...consent, tcpa: e.target.checked })}
                  />
                  <span>
                    By submitting, I agree to receive calls, texts (including autodialed and prerecorded messages), and emails from Derek Huit and Cardinal Financial Company, Limited Partnership regarding mortgage products at the number and email provided. Consent is not a condition of any purchase. Message and data rates may apply. Reply STOP to opt out.
                  </span>
                </label>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full" disabled={!canSubmit || status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send me the guide'}
              </button>

              {status === 'error' && (
                <p className="mt-4 text-sm text-red-700">{errorMsg || 'Something went wrong. Please try again.'}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ How It Works ------------------------ */
function HowItWorks() {
  const steps = [
    { n: '01', t: 'Apply', d: 'Ten-minute online application. Soft credit pull, secure document upload.' },
    { n: '02', t: 'Review', d: 'I personally review every file — same day. You get a real pre-approval letter within 24 business hours.' },
    { n: '03', t: 'Close', d: 'Cardinal Financial underwriting on the Octane platform. Most purchases close in 21–30 days.' },
  ];
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-trackout text-gold-600">The Process</p>
        <h2 className="mb-14 max-w-2xl font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
          Three steps. One loan officer. Zero runaround.
        </h2>
        <div className="grid gap-10 md:grid-cols-3 md:gap-16">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < 2 && <div className="absolute left-0 top-6 hidden h-px w-full bg-navy/20 md:block" />}
              <div className="relative flex items-center gap-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-navy bg-cream font-display text-sm font-medium text-navy">{s.n}</span>
                <h3 className="font-display text-2xl font-medium text-navy">{s.t}</h3>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Final CTA ------------------------ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-cream md:py-32">
      <div className="grain pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-trackout text-gold">Ready when you are</p>
        <h2 className="font-display text-4xl font-medium leading-tight md:text-6xl">
          Start your application<br />
          <span className="italic text-gold">in the next ten minutes.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-cream/70 md:text-lg">
          Soft credit pull. Real pre-approval. No obligation. If I can't get you qualified, I'll tell you exactly what to work on and when to come back.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={APPLY_URL} className="btn-gold">
            Start my application
          </a>
          <a href="#guide" className="text-[12px] font-semibold uppercase tracking-trackout text-cream/80 hover-underline">
            Or grab the free guide first →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Footer (compliance) ------------------------ */
function Footer() {
  return (
    <footer className="bg-ink py-14 text-cream/70">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-semibold text-cream">USA</span>
              <span className="font-display text-2xl font-light text-gold">.loan</span>
            </div>
            <p className="mt-4 text-xs leading-relaxed">
              Direct mortgage lending from a 18-year industry veteran. Straightforward terms, fast closings, no bait-and-switch.
            </p>
          </div>

          <div className="text-xs leading-relaxed">
            <p className="mb-2 font-semibold uppercase tracking-trackout text-cream">Derek Huit · NMLS #203980</p>
            <p>Powered by <strong className="text-cream/90">Cardinal Financial Company, Limited Partnership</strong></p>
            <p>Company NMLS #66247</p>
            <p>3701 Arco Corporate Drive, Suite 200</p>
            <p>Charlotte, NC 28273</p>
            <p className="mt-3">
              <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247" target="_blank" rel="noopener" className="underline">
                NMLS Consumer Access →
              </a>
            </p>
            <p className="mt-1">
              <a href="https://www.cardinalfinancial.com/nmls-licensing" target="_blank" rel="noopener" className="underline">
                State licensing information →
              </a>
            </p>
          </div>

          <div className="text-xs leading-relaxed">
            <p className="mb-2 font-semibold uppercase tracking-trackout text-cream">Legal</p>
            <ul className="space-y-1.5">
              <li><Link href="/privacy" className="hover:text-cream">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cream">Terms of Use</Link></li>
              <li><a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980" target="_blank" rel="noopener" className="hover:text-cream">Verify my NMLS ID →</a></li>
            </ul>
          </div>
        </div>

        {/* Compliance block */}
        <div className="mt-12 border-t border-cream/10 pt-8 text-[11px] leading-relaxed text-cream/60">
          <p className="mb-3">
            <span className="inline-flex items-center gap-2">
              <span className="inline-block h-4 w-4 border border-cream/60 bg-transparent" title="Equal Housing Opportunity">⌂</span>
              Equal Housing Opportunity.
            </span>{' '}
            Cardinal Financial Company, Limited Partnership holds state licenses as described at{' '}
            <a href="https://www.cardinalfinancial.com/nmls-licensing" target="_blank" rel="noopener" className="underline">cardinalfinancial.com/nmls-licensing</a>.
          </p>
          <p className="mb-3">
            <strong className="text-cream/80">This site is not authorized by the New York State Department of Financial Services.</strong> No mortgage loan applications for properties located in the state of New York will be accepted through this site.
          </p>
          <p className="mb-3">
            This is not a commitment to lend. All loans subject to credit approval, underwriting, and appraisal. Rates, terms, and programs are subject to change without notice. Not all applicants will qualify. Loan programs, rates, and terms are subject to change at any time without notice.
          </p>
          <p>© {new Date().getFullYear()} Huitai LLC. All rights reserved. USA.loan is a marketing site operated by Huitai LLC.</p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------ Page ------------------------ */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <LoanPaths />
      <LeadMagnet />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}
