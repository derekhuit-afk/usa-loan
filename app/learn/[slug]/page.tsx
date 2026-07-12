import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getPublishedPosts, POSTS } from "@/content/posts";
import type { Metadata } from "next";

export const revalidate = 3600; // re-evaluate publish gate hourly

const APPLY_URL = "https://online.cardinalfinancial.com/#/p/apply/derekhuit";
const DSCR_DISCLOSURE =
  "DSCR loans are for investment properties only and are not available for primary residences or second homes. All loans subject to credit approval, underwriting, and appraisal.";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Derek Huit · NMLS #203980`,
    description: post.description,
    alternates: { canonical: `https://usa.loan/learn/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://usa.loan/learn/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
      images: ["/og.png"],
    },
  };
}

export default function LearnPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  // Gate: don't render future-dated posts
  const today = new Date().toISOString().slice(0, 10);
  if (post.publishDate > today) notFound();

  const isDscr = post.dscr === true;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.publishDate,
        mainEntityOfPage: `https://usa.loan/learn/${post.slug}`,
        author: {
          "@type": "Person",
          name: "Derek Huit",
          identifier: "NMLS #203980",
          url: "https://usa.loan",
        },
        publisher: { "@type": "Organization", name: "USA.loan", url: "https://usa.loan" },
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://usa.loan" },
          { "@type": "ListItem", position: 2, name: "Guides", item: "https://usa.loan/learn" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://usa.loan/learn/${post.slug}` },
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
      {/* ── Header ── */}
      <section className="border-b border-navy/10 bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.states.map((s) => (
              <Link
                key={s}
                href={`/states/${s}`}
                className="rounded-md bg-gold/15 px-2.5 py-1 font-mono text-[11px] font-medium capitalize text-gold-700 hover:bg-gold/25"
              >
                {s}
              </Link>
            ))}
            <span className="rounded-md border border-navy/10 px-2.5 py-1 font-mono text-[11px] text-ink/50">
              {post.readMinutes} min read
            </span>
          </div>
          <h1 className="font-display text-3xl font-medium leading-tight text-navy md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/70 max-w-2xl">{post.description}</p>
        </div>
      </section>

      {/* ── DSCR disclosure ── */}
      {isDscr && (
        <div className="bg-amber-50 border-l-4 border-amber-400 mx-auto max-w-4xl px-6 py-4 mt-6 md:px-10 text-sm text-amber-900 rounded">
          <strong>Investment property notice:</strong> {DSCR_DISCLOSURE}
        </div>
      )}

      {/* ── Body ── */}
      <article className="mx-auto max-w-4xl px-6 py-12 md:px-10 md:py-16">
        {/* Hook */}
        <div className="space-y-5 mb-12">
          {post.hook.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink/80">{p}</p>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {post.sections.map((sec) => (
            <section key={sec.heading}>
              <h2 className="font-display text-2xl font-medium text-navy md:text-3xl mb-5">
                {sec.heading}
              </h2>
              <div className="space-y-4">
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="text-[15px] leading-relaxed text-ink/75">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Comparison table */}
        {post.comparison && (
          <section className="mt-14">
            <h2 className="font-display text-2xl font-medium text-navy mb-2">{post.comparison.heading}</h2>
            <p className="text-sm text-ink/60 mb-6">{post.comparison.intro}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy text-cream">
                    <th className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-widest font-medium"></th>
                    {post.comparison.columns.map((col) => (
                      <th key={col} className="px-4 py-3 text-left font-mono text-[11px] uppercase tracking-widest font-medium">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {post.comparison.rows.map(([label, ...cells], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-cream" : "bg-white"}>
                      <td className="px-4 py-3 font-medium text-navy text-[13px]">{label}</td>
                      {cells.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-ink/70">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-medium text-navy mb-8">Frequently asked questions</h2>
          <div className="divide-y divide-navy/10">
            {post.faq.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="font-display text-lg font-medium text-navy">{item.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mt-14 border-t border-navy/10 pt-10">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-ink/40">Related</p>
          <div className="flex flex-wrap gap-3">
            {post.related.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-navy/15 px-4 py-2 text-sm text-navy hover:border-navy/40 transition-colors"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </section>
      </article>

      {/* ── CTA ── */}
      <section className="bg-navy py-16 text-cream md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="font-display text-4xl font-medium">Ready to apply?</h2>
          <p className="mt-4 text-cream/70 max-w-md mx-auto">
            Ten minutes to apply. Real pre-approval within 24 hours.
          </p>
          <a href={APPLY_URL} className="btn-gold mt-8 inline-block">
            Start my application
          </a>
          <p className="mt-5 font-mono text-xs text-cream/40">
            Derek Huit · NMLS #203980 · Cardinal Financial · NMLS #66247
          </p>
        </div>
      </section>

      <div className="border-t border-navy/10 bg-white px-6 py-8 md:px-10">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-ink/40">
          Derek Huit, NMLS #203980. Cardinal Financial Company, Limited Partnership, NMLS #66247.
          Equal Housing Opportunity. This is not a commitment to lend. All loans subject to credit approval,
          underwriting, and appraisal.
          {isDscr && " " + DSCR_DISCLOSURE}
        </p>
      </div>
    </main>
  );
}
