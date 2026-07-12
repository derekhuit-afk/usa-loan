import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "indiana",
  name: "Indiana",
  abbr: "IN",
  headline: "Indiana Home Loans — DSCR Investor Financing and VA Loans in Indianapolis and Beyond",
  subheadline:
    "Indianapolis ranks as one of the top cash-flow markets in the country. Low acquisition prices, strong tenant demand, and DSCR ratios that work. VA lending for Fort Benjamin Harrison and Camp Atterbury veterans.",
  niche: "DSCR investor financing · VA military lending · First-time buyer purchase",
  programs: ["dscr", "va", "first-time-buyer"],
  featuredPostSlugs: [],
  dscr: true,
  stats: [
    { label: "Indianapolis median SFR price (2026)", value: "~$245K" },
    { label: "Indianapolis median asking rent (2026)", value: "~$1,650/mo" },
    { label: "Indianapolis gross rental yield", value: "~9.8%" },
    { label: "Indiana effective property tax rate", value: "~0.85%" },
  ],
  sections: [
    {
      heading: "Why Indianapolis is one of the best DSCR markets in the country",
      paragraphs: [
        "Indianapolis consistently appears on institutional investor screening lists for a structural reason: the price-to-rent relationship produces DSCR ratios that standard programs approve without heroic assumptions about rent growth or appreciation. Median acquisition prices around $245,000, median SFR rents approaching $1,650 per month, and Indiana's effective property tax rate of roughly 0.85 percent combine to produce gross yields near 10 percent. After taxes, insurance, and debt service at current rates, well-selected properties produce DSCR ratios of 1.10 to 1.30 — comfortably within standard program guidelines.",
        "Indiana also carries one of the most landlord-neutral legal environments in the Midwest. Eviction timelines are shorter than Illinois or Michigan, small claims limits are sufficient to recover security deposits, and the courts process housing cases without significant backlog. For portfolio builders who manage remotely, Indiana's legal framework is a real operational advantage over neighboring states.",
        "The DSCR opportunity in Indiana is not limited to Indianapolis. Fort Wayne in the northeast, Evansville in the southwest, and the Lafayette corridor near Purdue University each carry acquisition prices between $140,000 and $220,000 with rents that support positive DSCR ratios. Indianapolis is the anchor market, but Indiana as a state offers investable geography beyond the capital.",
      ],
    },
    {
      heading: "Indianapolis submarkets: where DSCR math works in 2026",
      paragraphs: [
        "Indianapolis neighborhoods are not uniformly investable at current rates. The eastside — Irvington, Warren Township, and the 38th Street corridor — carries acquisition prices of $150,000 to $230,000 with SFR rents of $1,200 to $1,700, producing the strongest gross yields but requiring more active property management. The north side and Hamilton County suburbs — Fishers, Carmel, Noblesville — carry prices of $300,000 to $450,000 with rents of $1,900 to $2,500; yields are compressed and DSCR ratios approach breakeven on standard programs. The northwest corridor — Pike Township, Eagle Creek, Ben Davis — hits the productive middle: $200,000 to $280,000 acquisition prices, $1,500 to $1,900 rents, DSCR ratios of 1.10 to 1.25.",
        "Short-term rental operators targeting Indianapolis event traffic — Indiana Pacers, Indiana Fever, IndyCar racing, Big Ten athletic events, the Indianapolis 500 — concentrate in Broad Ripple, Fountain Square, and the Mass Ave corridor. These properties carry higher acquisition costs but produce event-season gross revenues that meaningfully exceed long-term rent comparables. DSCR lenders underwriting short-term rental income use market rent surveys or AirDNA data rather than actual receipts — the methodology matters when you are qualifying on STR income.",
      ],
    },
    {
      heading: "VA lending in Indiana: Fort Benjamin Harrison and the Guard base",
      paragraphs: [
        "Fort Benjamin Harrison, now operating as a Reserve and National Guard installation in Lawrence on Indianapolis's northeast side, generates VA loan demand from veterans and guardsmen in the surrounding Marion and Hamilton County corridors. Lawrence, Fishers, and Castleton carry median home prices of $240,000 to $320,000, within VA financing reach for most Indiana-based veterans.",
        "Indiana's National Guard has a significant residential footprint spread across the state's 92 counties. Guard members activated on federal orders are eligible for VA loan benefits during and after service. Indiana also has an active veterans community from multiple conflicts with strong VA utilization rates. The state's affordable home prices mean VA entitlement stretches further here than in high-cost states — a $300,000 purchase requires no down payment and no PMI.",
      ],
    },
  ],
  faq: [
    {
      q: "What makes Indianapolis a strong DSCR market?",
      a: "Indianapolis combines three factors that produce favorable DSCR ratios: acquisition prices that remain accessible (median around $245,000), rents that have grown faster than prices over the past four years, and a state property tax effective rate near 0.85 percent — one of the lowest in the Midwest. The combination produces gross yields near 10 percent, which at standard DSCR qualification thresholds means well-selected properties qualify without requiring optimistic rent projections.",
    },
    {
      q: "Can I qualify for DSCR without showing my personal income?",
      a: "Yes. DSCR loans qualify on the rental income the property generates, not on your personal tax returns, W-2s, or pay stubs. The lender calculates the monthly rent (using a market rent appraisal or executed lease) divided by the total monthly housing obligation — principal, interest, taxes, insurance, and HOA if applicable. A ratio of 1.0 or higher meets standard guidelines. Your personal income documentation is not part of the file.",
    },
    {
      q: "Is Indiana a good state for out-of-state real estate investors?",
      a: "Yes, for several reasons. Indiana's landlord-tenant law is among the most operationally predictable in the Midwest — eviction timelines are clear and courts process housing cases efficiently. Property taxes are low. Cash-flow math works without heroic assumptions. Many Indiana investors manage properties remotely through local property managers. The combination of strong yield, low taxes, and workable legal environment makes Indiana consistently attractive to out-of-state portfolio buyers.",
    },
    {
      q: "Is Derek Huit licensed in Indiana?",
      a: "Yes. Derek Huit, NMLS #203980, holds an Indiana Mortgage Loan License. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "DSCR loan program details", href: "/programs/dscr" },
    { label: "VA loan program details", href: "/programs/va" },
    { label: "First-time buyer program details", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
