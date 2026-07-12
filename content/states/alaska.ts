import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "alaska",
  name: "Alaska",
  abbr: "AK",
  headline: "Alaska VA & Military Home Loans",
  subheadline:
    "Derek Huit originates VA loans in Alaska with 18 years of in-market experience. Full Alaska-specific guidance lives at akmilitaryhomeloans.com.",
  niche: "VA & military lending · JBER · Fort Wainwright · Eielson",
  programs: ["va"],
  featuredPostSlugs: [],
  stats: [
    { label: "JBER BAH (E-5 w/ dep, 2026)", value: "$2,874" },
    { label: "VA appraisal turn time (Anchorage)", value: "12 business days" },
    { label: "Alaska state income tax", value: "None" },
    { label: "Licensed in Alaska since", value: "18 years active" },
  ],
  sections: [
    {
      heading: "Alaska VA loans: full depth at akmilitaryhomeloans.com",
      paragraphs: [
        "Derek Huit has originated VA loans at JBER, Fort Wainwright, Eielson AFB, and across the Mat-Su Valley for 18 years. Alaska VA transactions have specific complexity — frozen-ground appraisal holdbacks, Interior turn times of 21 business days, thin comparable markets in rural areas, and the June 2026 MPR updates — that require lender-side Alaska experience to navigate cleanly.",
        "The full Alaska-specific content library is at akmilitaryhomeloans.com: duty-station guides for JBER, Fort Wainwright, Eielson, Fort Greely, and Kodiak; the VA appraisal holdback process; 2026 DFAS pay and BAH tables for Alaska installations; the disabled veteran benefit stack; and a military pay-to-mortgage qualification calculator. Everything Alaska-specific lives there.",
      ],
    },
  ],
  faq: [
    {
      q: "Is Derek Huit licensed in Alaska?",
      a: "Yes. Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Alaska. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender.",
    },
    {
      q: "Where can I find Alaska-specific VA loan content?",
      a: "Full Alaska VA loan guidance — JBER, Fort Wainwright, Eielson, Fort Greely, Kodiak, VA appraisal process, 2026 pay and BAH tables, and more — is at akmilitaryhomeloans.com.",
    },
  ],
  related: [
    { label: "Alaska military home loans (full site)", href: "https://www.akmilitaryhomeloans.com" },
    { label: "VA loan program details", href: "/programs/va" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
