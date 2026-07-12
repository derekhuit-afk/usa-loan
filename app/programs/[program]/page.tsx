import { notFound } from "next/navigation";
import Link from "next/link";
import { getProgram, PROGRAMS } from "@/content/programs";
import type { Metadata } from "next";

const APPLY_URL = "https://online.cardinalfinancial.com/#/p/apply/derekhuit";
const DSCR_DISCLOSURE =
  "DSCR loans are for investment properties only and are not available for primary residences or second homes. All loans subject to credit approval, underwriting, and appraisal.";

export const revalidate = 3600;

export async function generateStaticParams() {
  return PROGRAMS.map((p) => ({ program: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { program: string };
}): Promise<Metadata> {
  const p = getProgram(params.program);
  if (!p) return {};
  return {
    title: `${p.name} | Derek Huit · NMLS #203980`,
    description: p.subheadline,
  };
}

export default function ProgramPage({ params }: { params: { program: string } }) {
  const p = getProgram(params.program);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://usa.loan" },
          { "@type": "ListItem", position: 2, name: p.name, item: `https://usa.loan/programs/${p.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="bg-white text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-widest text-gold">
            Loan program
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight md:text-6xl">
            {p.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">{p.subheadline}</p>
          <div className="mt-10">
            <a href={APPLY_URL} className="btn-gold">
              Start pre-qualification
            </a>
          </div>
        </div>
      </section>

      {/* ── DSCR disclosure ── */}
      {p.dscr && (
        <div className="bg-amber-50 border-l-4 border-amber-400 mx-auto max-w-6xl px-6 py-4 mt-8 md:px-10 text-sm text-amber-900 rounded">
          <strong>Investment property notice:</strong> {DSCR_DISCLOSURE}
        </div>
      )}

      {/* ── Content + requirements ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {p.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="font-display text-2xl font-medium text-navy md:text-3xl">
                    {sec.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {sec.paragraphs.map((para, i) => (
                      <p key={i} className="text-[15px] leading-relaxed text-ink/75">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Requirements quick-ref ── */}
            <div>
              <div className="rounded-xl border border-navy/10 bg-cream p-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
                  Quick reference
                </p>
                <dl className="space-y-3">
                  {p.requirements.map((req) => (
                    <div key={req.label} className="border-b border-navy/10 pb-3 last:border-0 last:pb-0">
                      <dt className="font-mono text-[11px] text-ink/50">{req.label}</dt>
                      <dd className="mt-0.5 font-display text-sm font-medium text-navy">{req.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-xl bg-navy p-6 text-cream mt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-cream/50">
                  Ready to start?
                </p>
                <p className="mt-2 font-display text-lg font-medium">
                  Pre-qualification takes about ten minutes.
                </p>
                <a
                  href={APPLY_URL}
                  className="mt-5 inline-block rounded-full bg-gold px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-navy transition-opacity hover:opacity-90"
                >
                  Apply now
                </a>
                <p className="mt-4 font-mono text-[10px] text-cream/40">
                  Derek Huit · NMLS #203980<br />
                  Cardinal Financial · NMLS #66247
                </p>
              </div>

              {/* ── Available states ── */}
              <div className="mt-4 rounded-xl border border-navy/10 bg-white p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-3">
                  Available in
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.states.map((slug) => (
                    <Link
                      key={slug}
                      href={`/states/${slug}`}
                      className="rounded-md bg-gold/15 px-3 py-1 font-mono text-xs font-medium capitalize text-gold-700 hover:bg-gold/25"
                    >
                      {slug}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-navy/10 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
            {p.name} — frequently asked questions
          </h2>
          <div className="mt-10 divide-y divide-navy/10">
            {p.faq.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="font-display text-lg font-medium text-navy">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-ink/40">Related</p>
          <div className="flex flex-wrap gap-3">
            {p.related.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy hover:border-navy/40 transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer compliance ── */}
      <div className="border-t border-navy/10 bg-white px-6 py-8 md:px-10">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-ink/40">
          Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Alaska, Georgia, Illinois, Indiana,
          Michigan, Montana, Oklahoma, Texas, Florida, and Washington. Cardinal Financial Company, Limited Partnership,
          NMLS #66247. Equal Housing Opportunity. This is not a commitment to lend. All loans subject to credit
          approval, underwriting, and appraisal.
          {p.dscr && " " + DSCR_DISCLOSURE}
        </p>
      </div>
    </main>
  );
}
