'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';

const APPLY_URL = 'https://online.cardinalfinancial.com/#/p/apply/derekhuit';

/* ------------------------ Licensing data ------------------------ */
const LO_STATES: { abbr: string; name: string }[] = [
  { abbr: 'AK', name: 'Alaska' },
  { abbr: 'FL', name: 'Florida' },
  { abbr: 'GA', name: 'Georgia' },
  { abbr: 'IL', name: 'Illinois' },
  { abbr: 'IN', name: 'Indiana' },
  { abbr: 'MI', name: 'Michigan' },
  { abbr: 'MT', name: 'Montana' },
  { abbr: 'OK', name: 'Oklahoma' },
  { abbr: 'TX', name: 'Texas' },
  { abbr: 'WA', name: 'Washington' },
];
const LO_ABBRS = LO_STATES.map((s) => s.abbr);

/* ------------------------ State markets ------------------------ */
const STATE_MARKETS: { slug: string; abbr: string; name: string; niche: string }[] = [
  { slug: 'alaska',     abbr: 'AK', name: 'Alaska',     niche: 'VA & military lending · JBER · Fort Wainwright · Eielson' },
  { slug: 'florida',    abbr: 'FL', name: 'Florida',    niche: 'DSCR investor lending · Self-employed & portfolio buyers' },
  { slug: 'georgia',    abbr: 'GA', name: 'Georgia',    niche: 'VA military lending · First-time buyer purchase' },
  { slug: 'illinois',   abbr: 'IL', name: 'Illinois',   niche: 'IHDA first-time buyer · Great Lakes VA lending' },
  { slug: 'indiana',    abbr: 'IN', name: 'Indiana',    niche: 'DSCR investor financing · Indianapolis VA lending' },
  { slug: 'michigan',   abbr: 'MI', name: 'Michigan',   niche: 'MSHDA first-time buyer DPA · DSCR investor financing' },
  { slug: 'montana',    abbr: 'MT', name: 'Montana',    niche: 'Malmstrom AFB VA lending · USDA rural financing' },
  { slug: 'oklahoma',   abbr: 'OK', name: 'Oklahoma',   niche: 'Tinker AFB & Fort Sill VA · DSCR investor financing' },
  { slug: 'texas',      abbr: 'TX', name: 'Texas',      niche: 'Fort Cavazos & JBSA VA · DFW DSCR investor financing' },
  { slug: 'washington', abbr: 'WA', name: 'Washington', niche: 'WSHFC DPA stacking · Military buyers near JBLM' },
];

const ALL_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
  'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
  'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

/* ------------------------ NY ZIP detection ------------------------ */
function isNYZip(zip: string): boolean {
  const z = zip.trim();
  if (!/^\d{5}$/.test(z)) return false;
  const n = parseInt(z, 10);
  if (z === '06390') return true; // Fishers Island, NY
  if (n >= 10001 && n <= 14975) return true;
  if (n >= 501 && n <= 544) return true;
  return false;
}

/* ------------------------ Scroll reveal ------------------------ */
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out-quart will-change-transform ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------ Top bar ------------------------ */
function TopBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-baseline gap-1.5">
          <span className="font-display text-xl font-semibold text-cream">USA</span>
          <span className="font-display text-xl font-light text-gold">.loan</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-trackout text-cream/70 md:flex">
          <a href="#programs" className="hover-underline hover:text-cream">Programs</a>
          <a href="#states" className="hover-underline hover:text-cream">States</a>
          <a href="#licensing" className="hover-underline hover:text-cream">Licensing</a>
          <a href="#guide" className="hover-underline hover:text-cream">Free guide</a>
        </nav>
        <a
          href={APPLY_URL}
          className="rounded-full border border-gold/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-trackout text-gold transition-colors hover:bg-gold hover:text-navy"
        >
          Apply
        </a>
      </div>
    </header>
  );
}

/* ------------------------ Hero ------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream">
      <div className="grain pointer-events-none absolute inset-0 opacity-20" />
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-gold/[0.07] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-16 md:grid-cols-12 md:px-10 md:pb-28 md:pt-24">
        {/* Left: headline */}
        <div className="md:col-span-7">
          <p className="rise rise-1 mb-6 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold">
            Direct mortgage lending · Personally licensed in 10 states
          </p>

          <h1 className="rise rise-2 font-display text-[52px] leading-[1.02] tracking-tight text-cream md:text-[80px]">
            Get pre-approved
            <br />
            <span className="italic text-gold">in minutes.</span>
            <br />
            Close in 30 days.
          </h1>

          <p className="rise rise-3 mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            Straightforward home loans from a lender who&rsquo;s actually closed hundreds of millions in volume. No callback
            games. No bait-and-switch. Just real numbers, fast answers, and a process built for humans.
          </p>

          <div className="rise rise-4 mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={APPLY_URL} className="btn-gold">
              Start my application
            </a>
            <a href="#guide" className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-navy">
              Get the free buyer guide
            </a>
          </div>
        </div>

        {/* Right: credential card */}
        <div className="rise rise-4 md:col-span-5">
          <div className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-trackout text-cream/50">Your loan officer</p>
            <p className="mt-2 font-display text-2xl font-medium text-cream">Derek Huit</p>
            <p className="mt-1 font-mono text-sm text-gold">NMLS #203980</p>

            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-cream/10 pt-6">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-trackout text-cream/50">Experience</dt>
                <dd className="mt-1 font-display text-2xl text-cream">18 yrs</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-trackout text-cream/50">Originated</dt>
                <dd className="mt-1 font-display text-lg leading-snug text-cream">Hundreds of millions</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-trackout text-cream/50">Licensed states</dt>
                <dd className="mt-1 font-display text-2xl text-cream">10</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-trackout text-cream/50">Pre-approval</dt>
                <dd className="mt-1 font-display text-2xl text-cream">24 hrs</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-cream/10 pt-6">
              {LO_ABBRS.map((s) => (
                <span key={s} className="rounded-md bg-gold/15 px-2 py-1 font-mono text-[11px] font-medium text-gold">
                  {s}
                </span>
              ))}
            </div>
            <a href="#licensing" className="hover-underline mt-4 inline-block text-xs text-cream/60 hover:text-cream">
              Full licensing breakdown →
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 font-mono text-[11px] text-cream/50 md:px-10">
          <span>Derek Huit · NMLS #203980</span>
          <span>Cardinal Financial · NMLS #66247</span>
          <span>Equal Housing Opportunity</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Programs ------------------------ */
const PROGRAMS = [
  {
    k: 'Purchase',
    d: 'First home, move-up, or investment. FHA, Conventional 97, VA, and USDA programs. Down payments from 0% to 20%.',
  },
  {
    k: 'Refinance',
    d: 'Lower your rate, shorten your term, or pull equity to eliminate high-interest debt. Break-even analysis first — no waste.',
  },
  {
    k: 'VA & Military',
    d: 'Zero down, no PMI, and seller-paid closing costs. Active duty, veterans, and qualifying surviving spouses. No funding fee for disabled vets.',
  },
];

function Programs() {
  return (
    <section id="programs" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold-600">
            Ways to work together
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Whatever kind of loan you need — I&rsquo;ve probably closed hundreds of them.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 md:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.k} delay={i * 90}>
              <a
                href={APPLY_URL}
                className="group flex h-full flex-col justify-between gap-10 bg-cream p-8 transition-colors hover:bg-white md:p-10"
              >
                <div>
                  <h3 className="font-display text-2xl font-medium text-navy">{p.k}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{p.d}</p>
                </div>
                <span className="font-mono text-xs font-medium uppercase tracking-trackout text-gold-600 transition-transform group-hover:translate-x-1">
                  Apply for {p.k.toLowerCase()} →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ State markets board ------------------------ */
function StateMarkets() {
  return (
    <section id="states" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold-600">
            Where I lend
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Ten states. A local playbook for each one.
          </h2>
          <p className="mt-5 max-w-2xl text-ink/70">
            Every state below has its own guide — the down payment assistance that actually stacks, the
            military bases I lend around, and the programs that fit that market. Pick yours.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2">
          {STATE_MARKETS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 90}>
              <Link
                href={`/states/${s.slug}`}
                className="group flex h-full items-center gap-5 bg-white p-6 transition-colors hover:bg-cream md:p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy font-mono text-sm font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  {s.abbr}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl font-medium text-navy">{s.name}</span>
                  <span className="mt-1 block truncate text-[13px] leading-snug text-ink/60">{s.niche}</span>
                </span>
                <span
                  aria-hidden
                  className="font-mono text-gold-600 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-ink/50">
          Derek Huit NMLS #203980 · Cardinal Financial Company, LP NMLS #66247 ·{' '}
          <a href="#licensing" className="hover-underline text-ink/70">
            Verify every license below
          </a>
        </p>
      </div>
    </section>
  );
}

/* ------------------------ Licensing ledger (signature) ------------------------ */
function Licensing() {
  return (
    <section id="licensing" className="border-y border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold-600">
            Licensing, in plain sight
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Who&rsquo;s licensed where — exactly.
          </h2>
          <p className="mt-5 max-w-2xl text-ink/70">
            Two licenses matter on every loan: your loan officer&rsquo;s and the lender&rsquo;s. Here are both of mine,
            state by state, with links to verify each one at NMLS Consumer Access.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Loan officer card */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-cream p-7 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-trackout text-ink/50">Loan officer</p>
              <p className="mt-2 font-display text-2xl font-medium text-navy">Derek Huit</p>
              <p className="mt-1 font-mono text-sm text-gold-600">NMLS #203980</p>
              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                Personally licensed to originate mortgage loans in <strong className="text-navy">10 states</strong>:
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                {LO_STATES.map((s) => (
                  <li key={s.abbr}>
                    <Link
                      href={`/states/${s.name.toLowerCase()}`}
                      className="group flex items-center gap-2.5 text-sm text-ink"
                    >
                      <span className="rounded bg-gold/20 px-1.5 py-0.5 font-mono text-[11px] font-semibold text-gold-600">
                        {s.abbr}
                      </span>
                      <span className="hover-underline group-hover:text-navy">{s.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980"
                target="_blank"
                rel="noopener"
                className="hover-underline mt-auto pt-6 font-mono text-xs font-medium uppercase tracking-trackout text-navy"
              >
                Verify #203980 on NMLS →
              </a>
            </div>
          </Reveal>

          {/* Lender card + state grid */}
          <Reveal className="lg:col-span-3" delay={90}>
            <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-navy p-7 text-cream md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-trackout text-cream/50">Lender</p>
              <p className="mt-2 font-display text-2xl font-medium">Cardinal Financial Company, LP</p>
              <p className="mt-1 font-mono text-sm text-gold">NMLS #66247</p>
              <p className="mt-5 text-sm leading-relaxed text-cream/70">
                Licensed in <strong className="text-cream">49 states</strong> — every U.S. state except New York. Loans
                I originate are funded and serviced through Cardinal.
              </p>

              <div className="mt-6 grid grid-cols-10 gap-1.5">
                {ALL_STATES.map((s) => {
                  const isNY = s === 'NY';
                  const isMine = LO_ABBRS.includes(s);
                  return (
                    <span
                      key={s}
                      title={
                        isNY
                          ? 'New York — not licensed'
                          : isMine
                          ? `${s} — Cardinal licensed · Derek personally licensed`
                          : `${s} — Cardinal licensed`
                      }
                      className={`flex items-center justify-center rounded-md py-1.5 font-mono text-[10px] font-medium ${
                        isNY
                          ? 'bg-transparent text-cream/25 line-through decoration-cream/40'
                          : isMine
                          ? 'bg-gold text-navy'
                          : 'border border-cream/20 text-cream/70'
                      }`}
                    >
                      {s}
                    </span>
                  );
                })}
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-cream/60">
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm bg-gold" /> Derek + Cardinal
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-sm border border-cream/30" /> Cardinal only
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-cream/40 line-through">NY</span> Not licensed
                </span>
              </div>

              <div className="mt-auto flex flex-wrap gap-x-8 gap-y-2 pt-6">
                <a
                  href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247"
                  target="_blank"
                  rel="noopener"
                  className="hover-underline font-mono text-xs font-medium uppercase tracking-trackout text-cream"
                >
                  Verify #66247 on NMLS →
                </a>
                <a
                  href="https://www.cardinalfinancial.com/nmls-licensing"
                  target="_blank"
                  rel="noopener"
                  className="hover-underline font-mono text-xs font-medium uppercase tracking-trackout text-cream/70"
                >
                  Cardinal state licensing →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-ink/50">
            I personally originate loans in the 10 states listed above. This site is not authorized by the New York
            State Department of Financial Services, and no mortgage loan applications for properties located in New
            York will be accepted through this site.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Guide + lead form ------------------------ */
type Status = 'idle' | 'sending' | 'success' | 'error' | 'ny_blocked';

function Guide() {
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
          source: 'usa.loan/lead-magnet',
          tcpa_consent: consent.tcpa,
          terms_consent: consent.terms,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      track('lead_submitted', { source: 'usa.loan/lead-magnet', loan_type: form.loan_type || 'exploring' });
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
    { v: 'exploring', l: 'Just exploring / not sure yet' },
  ];

  return (
    <section id="guide" className="bg-navy py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5 md:gap-16 md:px-10">
        <Reveal className="md:col-span-2">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold">Free guide</p>
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            The First-Time Homebuyer Playbook.
          </h2>
          <p className="mt-5 text-cream/70">
            14 pages. No fluff. Everything you need to go from curious to closed — credit prep, pre-approval docs, the
            28/36 rule, loan program comparison, real costs, the 30-day checklist.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-cream/80">
            <li className="flex gap-3"><span className="text-gold">→</span>The exact docs to gather before applying</li>
            <li className="flex gap-3"><span className="text-gold">→</span>FHA vs Conventional vs VA vs USDA — side by side</li>
            <li className="flex gap-3"><span className="text-gold">→</span>Real closing costs for a $350k home (every line item)</li>
            <li className="flex gap-3"><span className="text-gold">→</span>The 5 mistakes that kill first-time buyer deals</li>
            <li className="flex gap-3"><span className="text-gold">→</span>A printable 30-day pre-approval checklist</li>
          </ul>
        </Reveal>

        <Reveal className="md:col-span-3" delay={90}>
          {status === 'success' ? (
            <div className="rounded-2xl bg-cream p-8 text-ink md:p-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-trackout text-gold-600">Delivered</p>
              <h3 className="mt-3 font-display text-3xl font-medium text-navy">Your guide is ready.</h3>
              <p className="mt-4 text-ink/70">
                Download it below. I&rsquo;ll be in touch personally within one business hour.
              </p>
              <a href="/guide.pdf" target="_blank" rel="noopener" className="btn-primary mt-6">
                Download the playbook
              </a>
            </div>
          ) : status === 'ny_blocked' ? (
            <div className="rounded-2xl bg-cream p-8 text-ink md:p-10">
              <h3 className="font-display text-2xl font-medium text-navy">We can&rsquo;t serve New York.</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                This site is not authorized by the New York State Department of Financial Services. No mortgage loan
                applications for properties located in the state of New York will be accepted through this site.
              </p>
              <button onClick={() => setStatus('idle')} className="btn-outline mt-6 border-navy/30 text-navy hover:bg-navy hover:text-cream">
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

              <button type="submit" disabled={!canSubmit || status === 'sending'} className="btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto">
                {status === 'sending' ? 'Sending…' : 'Send me the guide'}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Process ------------------------ */
const STEPS = [
  { t: 'Apply', d: 'Ten-minute online application. Soft credit pull, secure document upload.' },
  { t: 'Review', d: 'I personally review every file — same day. You get a real pre-approval letter within 24 business hours.' },
  { t: 'Close', d: 'Cardinal Financial underwriting on the Octane platform. Most purchases close in 21–30 days.' },
];

function Process() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold-600">The process</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Three steps. One loan officer. Zero runaround.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <div className="border-t-2 border-navy pt-6">
                <span className="font-mono text-xs font-medium text-gold-600">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-medium text-navy">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Final CTA ------------------------ */
function FinalCTA() {
  return (
    <section className="border-t border-navy/10 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-trackout text-gold-600">Ready when you are</p>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-medium leading-tight text-navy md:text-6xl">
            Start your application in the next ten minutes.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink/70">
            Soft credit pull. Real pre-approval. No obligation. If I can&rsquo;t get you qualified, I&rsquo;ll tell you
            exactly what to work on and when to come back.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={APPLY_URL} className="btn-primary">Start my application</a>
            <a href="#guide" className="hover-underline text-sm font-medium text-navy">Or grab the free guide first →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ Footer ------------------------ */
function Footer() {
  return (
    <footer className="bg-navy py-16 text-cream">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold">USA</span>
              <span className="font-display text-xl font-light text-gold">.loan</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Direct mortgage lending from an 18-year industry veteran. Straightforward terms, fast closings, no
              bait-and-switch.
            </p>
            <p className="mt-5 font-mono text-xs text-cream/70">Derek Huit · NMLS #203980</p>
            <p className="mt-1 font-mono text-xs text-cream/50">
              Licensed in: AK · FL · GA · IL · IN · MI · MT · OK · TX · WA
            </p>
          </div>
          <div className="text-sm text-cream/60">
            <p className="font-mono text-[10px] uppercase tracking-trackout text-cream/40">Lender</p>
            <p className="mt-3 text-cream/80">Cardinal Financial Company, Limited Partnership</p>
            <p className="mt-1 font-mono text-xs">Company NMLS #66247 · Licensed in 49 states (not NY)</p>
            <p className="mt-3">3701 Arco Corporate Drive, Suite 200<br />Charlotte, NC 28273</p>
            <div className="mt-4 flex flex-col gap-1.5">
              <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247" target="_blank" rel="noopener" className="hover-underline w-fit text-cream/70 hover:text-cream">NMLS Consumer Access →</a>
              <a href="https://www.cardinalfinancial.com/nmls-licensing" target="_blank" rel="noopener" className="hover-underline w-fit text-cream/70 hover:text-cream">State licensing information →</a>
            </div>
          </div>
          <div className="text-sm text-cream/60">
            <p className="font-mono text-[10px] uppercase tracking-trackout text-cream/40">Legal</p>
            <div className="mt-3 flex flex-col gap-1.5">
              <Link href="/privacy" className="hover-underline w-fit hover:text-cream">Privacy Policy</Link>
              <Link href="/terms" className="hover-underline w-fit hover:text-cream">Terms of Use</Link>
              <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980" target="_blank" rel="noopener" className="hover-underline w-fit hover:text-cream">Verify my NMLS ID →</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-xs leading-relaxed text-cream/40">
          <p>
            ⌂ Equal Housing Opportunity. USA.loan is a private website operated by a licensed mortgage loan originator and is not a government agency. It is not affiliated with, endorsed by, or sponsored by the U.S. government, the Department of Veterans Affairs, HUD, FHA, USDA, or any other federal or state agency. Texas consumers: <a href="/texas-complaint-notice" className="underline hover:text-ink/70">Texas Consumer Complaint and Recovery Fund Notice</a>. Derek Huit, NMLS #203980, is licensed in Alaska, Florida, Georgia, Illinois, Indiana,
            Michigan, Montana, Oklahoma, Texas, and Washington. Cardinal Financial Company, Limited Partnership, NMLS
            #66247, holds state licenses as described at cardinalfinancial.com/nmls-licensing. This site is not
            authorized by the New York State Department of Financial Services. No mortgage loan applications for
            properties located in the state of New York will be accepted through this site.
          </p>
          <p className="mt-4">
            This is not a commitment to lend. All loans subject to credit approval, underwriting, and appraisal. Rates,
            terms, and programs are subject to change at any time without notice. Not all applicants will qualify.
          </p>
          <p className="mt-4">© 2026 Huitai LLC. All rights reserved. USA.loan is a marketing site operated by Huitai LLC.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <TopBar />
      <Hero />
      <Programs />
      <StateMarkets />
      <Licensing />
      <Guide />
      <Process />
      <FinalCTA />
      <Footer />
    </main>
  );
}
