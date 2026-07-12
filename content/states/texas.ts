import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "texas",
  name: "Texas",
  abbr: "TX",
  headline: "Texas Home Loans — VA, DSCR, and Purchase Financing Across DFW, San Antonio, and Houston",
  subheadline:
    "No state income tax. Two of the largest military installations in the country. The most active DSCR investor market in the Sun Belt. Texas handles a lot of what we do.",
  niche: "VA military lending · DSCR investor financing · First-time buyer purchase",
  programs: ["va", "dscr"],
  featuredPostSlugs: [],
  dscr: true,
  stats: [
    { label: "DFW median asking rent (July 2026)", value: "$2,350/mo" },
    { label: "DFW gross rental yield", value: "8.55%" },
    { label: "Fort Cavazos E-5 BAH w/dep (2026)", value: "$1,776/mo" },
    { label: "JBSA E-5 BAH w/dep (2026)", value: "$1,974/mo" },
  ],
  sections: [
    {
      heading: "Why Texas is a full-spectrum mortgage market",
      paragraphs: [
        "Texas is licensed territory for us because the mortgage demand here is genuinely diverse. The DFW metroplex is the most active DSCR investor market in the Sun Belt — the combination of no state income tax, corporate relocation momentum, and suburban rent-to-price ratios that still support standard DSCR qualification makes it one of the few major metros where cash-flow investing at scale remains viable in 2026. Fort Cavazos and Joint Base San Antonio together represent roughly 200,000 active-duty service members, their families, and a constant rotation of PCS buyers who need VA loans from a lender who understands military income documentation. These two markets — investor and military — drive the majority of our Texas volume.",
        "Texas property taxes are the most important number to internalize before running any deal. Effective rates range from 1.5 to 2.5 percent of assessed value depending on county. That range covers a lot of ground: Bell County near Fort Cavazos runs about 1.82 percent, while some Dallas-area suburban counties run 2.0 to 2.3 percent. On a DSCR deal, the tax line goes directly into PITIA and directly into the ratio calculation. Getting the tax estimate wrong by even a modest amount can push a borderline deal below the qualifying threshold. Get the county appraisal district's current assessed value on the specific property before running numbers.",
      ],
    },
    {
      heading: "DFW: the DSCR investor's anchor market",
      paragraphs: [
        "Dallas-Fort Worth is ranked the number one real estate investment market in the United States by PwC and the Urban Land Institute for the second consecutive year in 2026. The structural reasons are durable: over 100 corporate headquarters relocated to DFW between 2018 and 2024, the metro projects to add more than a million residents by 2030, and no state income tax continues to attract business formation and executive-tier relocation at a rate no Texas competitor can match. These factors drive the professional rental demand that makes DFW DSCR deals underwritable.",
        "The submarket picture matters as much as the metro headline. Central Dallas and Uptown properties at $500,000 and above compress DSCR ratios significantly — the math works in appreciation scenarios, not cash-flow scenarios. The deals that produce 1.10 to 1.30 DSCR ratios in DFW are in the workforce housing suburban belt: Mesquite and Garland on the east side of Dallas, Grand Prairie and Irving in the mid-cities, and Fort Worth itself. Entry prices in these submarkets run $220,000 to $380,000 with rents of $1,700 to $2,400 — the math that produces standard DSCR qualification at current rates and current Texas property taxes.",
      ],
    },
    {
      heading: "Military lending: Fort Cavazos and JBSA",
      paragraphs: [
        "Fort Cavazos — renamed from Fort Hood in 2023 — is one of the largest active-duty installations in the world. The surrounding Killeen-Harker Heights corridor is a consistently high-volume VA purchase market driven by PCS cycles and the affordability math that makes buying genuinely competitive with renting. Killeen median home prices sit around $241,000 in 2026, and an E-5 with dependents receiving $1,776 in BAH can typically own a Killeen home at or near BAH coverage once the Texas homestead exemption is applied post-closing.",
        "Joint Base San Antonio is a different market. Three sub-installations — Lackland, Fort Sam Houston, and Randolph — under a single BAH zone produce rates from $1,728 for an E-1 with dependents up to $2,475 for an O-6. San Antonio is meaningfully more affordable than Austin or Houston, which means mid-grade BAH covers full mortgage payments in most off-base neighborhoods including Converse, Live Oak, Schertz, and the Stone Oak corridor. Texas has no state income tax, which adds effective purchasing power for military buyers PCSing from California or Virginia.",
      ],
    },
  ],
  faq: [
    {
      q: "Do Texas property taxes affect VA loan qualification?",
      a: "Yes, directly. Texas property taxes are factored into the monthly housing obligation used to calculate your debt-to-income ratio and residual income requirement. Effective rates range from 1.5 to 2.5 percent depending on county. At Bell County's 1.82 percent rate, a $241,000 Killeen home generates about $365 per month in property tax. Veterans rated 100 percent disabled by the VA qualify for the Texas full homestead property tax exemption, which eliminates property tax on a primary residence entirely.",
    },
    {
      q: "Can I use a VA loan at both Fort Cavazos and JBSA?",
      a: "Yes. VA entitlement is not installation-specific. If you have remaining entitlement — either because you have never used it or because a prior VA loan was paid off — you can use it at any Texas installation. Bonus entitlement rules allow simultaneous VA loans under specific conditions. Your certificate of eligibility documents your available entitlement.",
    },
    {
      q: "What DSCR ratios are realistic in DFW in 2026?",
      a: "In the workforce housing suburban belt — Mesquite, Garland, Grand Prairie, Irving, and much of Fort Worth — well-selected properties produce DSCR ratios of 1.10 to 1.35 at current rates and current property taxes. Central Dallas and Uptown properties at premium price points typically compress to 0.90 to 1.05 range. Texas property taxes are the most important variable — an inaccurate tax estimate can shift a deal from qualifying to non-qualifying without any change to the purchase price or rent.",
    },
    {
      q: "Is Derek Huit licensed in Texas?",
      a: "Yes. Derek Huit, NMLS #203980, holds a Texas-SML Mortgage Loan Originator license. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "DSCR loan program details", href: "/programs/dscr" },
    { label: "VA loan program details", href: "/programs/va" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
