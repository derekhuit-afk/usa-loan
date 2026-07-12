/* ------------------------------------------------------------------ */
/*  Content types for usa.loan                                         */
/*  Post type mirrors akmilitaryhomeloans.com exactly.                 */
/*  State and Program types are new.                                   */
/* ------------------------------------------------------------------ */

/* ---- Shared ---- */
export type FAQ = { q: string; a: string };
export type RelatedLink = { label: string; href: string };
export type Section = { heading: string; paragraphs: string[] };

/* ---- Post (blog / learn) ---- */
export type Post = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;           // YYYY-MM-DD — gate logic uses this
  states: string[];              // e.g. ["florida"] — linter requires ≥1
  cluster: string;               // content cluster label
  dscr?: boolean;                // true = DSCR disclosure required on this post
  readMinutes: number;
  keywords: {
    primary: string;
    secondary: string[];
    longtail: string[];
  };
  hook: string[];
  sections: Section[];
  comparison?: {
    heading: string;
    intro: string;
    columns: [string, string];
    rows: [string, string, string][];
  };
  faq: FAQ[];
  related: RelatedLink[];
};

/* ---- State landing page ---- */
export type StatePage = {
  slug: string;                  // "florida" | "washington" | "alaska"
  name: string;                  // "Florida"
  abbr: string;                  // "FL"
  headline: string;
  subheadline: string;
  niche: string;                 // one-line niche angle shown in hero badge
  programs: string[];            // program slugs featured on this page
  featuredPostSlugs: string[];   // post slugs featured on this page
  stats: { label: string; value: string }[];   // 3–4 market numbers
  sections: Section[];
  dscr?: boolean;                // true = DSCR disclosure required on this page
  faq: FAQ[];
  related: RelatedLink[];
};

/* ---- Program depth page ---- */
export type Program = {
  slug: string;                  // "dscr" | "va" | "wshfc" | "first-time-buyer"
  name: string;                  // "DSCR Investor Loans"
  states: string[];              // state slugs where this program appears
  headline: string;
  subheadline: string;
  dscr?: boolean;                // true = DSCR disclosure required
  sections: Section[];
  requirements: { label: string; value: string }[];  // quick-ref table rows
  faq: FAQ[];
  related: RelatedLink[];
};
