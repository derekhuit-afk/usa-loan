import Link from "next/link";
import { getPublishedPosts } from "@/content/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mortgage Guides | Derek Huit · NMLS #203980",
  description:
    "In-depth home loan guides for buyers and investors in Florida, Washington, Alaska, and across Derek Huit's licensed states.",
};

export default function LearnIndex() {
  const posts = getPublishedPosts();

  return (
    <main className="bg-white text-ink">
      <section className="bg-navy py-20 text-cream md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-widest text-gold">
            Guides & resources
          </p>
          <h1 className="font-display text-5xl font-medium leading-tight md:text-7xl">
            The mortgage library.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
            In-depth guides for home buyers, veterans, and real estate investors. Florida DSCR.
            Washington WSHFC stacking. Alaska VA. Written by a loan officer who has actually closed these loans.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {posts.length === 0 ? (
            <p className="text-ink/50">Guides coming soon.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/learn/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-navy/10 bg-cream p-6 transition-colors hover:bg-white hover:shadow-sm"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.states.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-gold/15 px-2 py-0.5 font-mono text-[10px] font-medium capitalize text-gold-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-lg font-medium leading-snug text-navy">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="font-mono text-[10px] text-ink/40">{post.readMinutes} min read</span>
                    <span className="font-mono text-xs font-medium uppercase tracking-widest text-gold-600 transition-transform group-hover:translate-x-1">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="border-t border-navy/10 bg-white px-6 py-8 md:px-10">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-ink/40">
          Derek Huit, NMLS #203980. Cardinal Financial Company, Limited Partnership, NMLS #66247.
          Equal Housing Opportunity. This is not a commitment to lend.
        </p>
      </div>
    </main>
  );
}
