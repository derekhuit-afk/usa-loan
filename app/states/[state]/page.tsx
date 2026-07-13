import { notFound } from "next/navigation";
import Link from "next/link";
import { getState, STATES } from "@/content/states";
import { getProgram } from "@/content/programs";
import { getPostsByState } from "@/content/posts";
import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

const APPLY_URL = "https://online.cardinalfinancial.com/#/p/apply/derekhuit";

const DSCR_DISCLOSURE =
  "DSCR loans are for investment properties only and are not available for primary residences or second homes. All loans subject to credit approval, underwriting, and appraisal.";

export const revalidate = 3600;

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { state: string };
}): Promise<Metadata> {
  const s = getState(params.state);
  if (!s) return {};
  return {
    title: `${s.name} Home Loans | Derek Huit · NMLS #203980`,
    description: s.subheadline,
  };
}

export default function StatePage({ params }: { params: { state: string } }) {
  const s = getState(params.state);
  if (!s) notFound();

  const programs = s.programs
    .map((slug) => getProgram(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProgram>>[];

  const posts = getPostsByState(s.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: s.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://usa.loan" },
          { "@type": "ListItem", position: 2, name: `${s.name} Home Loans`, item: `https://usa.loan/states/${s.slug}` },
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
            {s.niche}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-tight md:text-6xl">
            {s.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            {s.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={APPLY_URL} className="btn-gold">
              Start pre-qualification
            </a>
            <Link href="#guide" className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-navy">
              Get the free guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      {s.stats.length > 0 && (
        <section className="border-b border-navy/10 bg-cream py-8">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-10">
            {s.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{stat.label}</p>
                <p className="mt-1 font-display text-2xl font-medium text-navy">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── DSCR disclosure ── */}
      {s.dscr && (
        <div className="bg-amber-50 border-l-4 border-amber-400 mx-auto max-w-6xl px-6 py-4 mt-8 md:px-10 text-sm text-amber-900 rounded">
          <strong>Investment property notice:</strong> {DSCR_DISCLOSURE}
        </div>
      )}

      {/* ── Content sections ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-12">
              {s.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="font-display text-2xl font-medium text-navy md:text-3xl">
                    {sec.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {sec.paragraphs.map((p, i) => (
                      <p key={i} className="text-[15px] leading-relaxed text-ink/75">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* ── Sidebar: programs ── */}
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                Programs available in {s.name}
              </p>
              {programs.map((prog) => (
                <Link
                  key={prog.slug}
                  href={`/programs/${prog.slug}`}
                  className="group flex flex-col rounded-xl border border-navy/10 bg-cream p-5 transition-colors hover:bg-white hover:shadow-sm"
                >
                  <span className="font-display text-lg font-medium text-navy">{prog.name}</span>
                  <span className="mt-2 text-sm text-ink/60 leading-relaxed">{prog.subheadline}</span>
                  <span className="mt-4 font-mono text-xs font-medium uppercase tracking-widest text-gold-600 transition-transform group-hover:translate-x-1">
                    Learn more →
                  </span>
                </Link>
              ))}

              <div className="rounded-xl bg-navy p-6 text-cream mt-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured posts ── */}
      {posts.length > 0 && (
        <section className="border-t border-navy/10 bg-cream py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-gold-600">
              {s.name} guides
            </p>
            <h2 className="font-display text-3xl font-medium text-navy">
              In-depth resources for {s.name} buyers
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/learn/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition-colors hover:shadow-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    {post.readMinutes} min read
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium leading-snug text-navy">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="mt-5 font-mono text-xs font-medium uppercase tracking-widest text-gold-600 transition-transform group-hover:translate-x-1">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="font-display text-3xl font-medium text-navy md:text-4xl">
            {s.name} home loan questions
          </h2>
          <div className="mt-10 divide-y divide-navy/10">
            {s.faq.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="font-display text-lg font-medium text-navy">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead form ── */}
      <LeadForm
        state={s.slug}
        stateName={s.name}
        source={`usa.loan/states/${s.slug}`}
        heading={`Ready to get started in ${s.name}?`}
      />

      {/* ── Footer compliance ── */}
      <div className="border-t border-navy/10 bg-white px-6 py-8 md:px-10">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-ink/40">
          Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Alaska, Georgia, Illinois, Indiana,
          Michigan, Montana, Oklahoma, Texas, Florida, and Washington. Cardinal Financial Company, Limited Partnership,
          NMLS #66247. Equal Housing Opportunity. USA.loan is a private website operated by a licensed mortgage loan originator and is not a government agency. It is not affiliated with, endorsed by, or sponsored by the U.S. government, the Department of Veterans Affairs, HUD, FHA, USDA, or any other federal or state agency. This is not a commitment to lend. All loans subject to credit
          approval, underwriting, and appraisal.
          {s.dscr && " " + DSCR_DISCLOSURE}
        </p>
      </div>
    </main>
  );
}
