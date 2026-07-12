import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "oklahoma",
  name: "Oklahoma",
  abbr: "OK",
  headline: "Oklahoma Home Loans — VA Loans for Tinker AFB, Fort Sill, and Altus, Plus DSCR Investor Financing",
  subheadline:
    "Three major installations. One of the most affordable major metros in the country. DSCR ratios that work at Oklahoma City acquisition prices. VA entitlement goes a long way in Oklahoma.",
  niche: "VA military lending · DSCR investor financing · First-time buyer purchase",
  programs: ["va", "dscr", "first-time-buyer"],
  featuredPostSlugs: [],
  dscr: true,
  stats: [
    { label: "Oklahoma City median SFR price (2026)", value: "~$212K" },
    { label: "Tinker AFB E-5 BAH w/dep (2026)", value: "$1,512/mo" },
    { label: "OKC gross rental yield range", value: "10–13%" },
    { label: "Oklahoma effective property tax rate", value: "~0.90%" },
  ],
  sections: [
    {
      heading: "Oklahoma: three installations and one of the most affordable major metros in the country",
      paragraphs: [
        "Oklahoma's mortgage market runs on two parallel tracks. The first is military: Tinker Air Force Base in Midwest City, Fort Sill near Lawton, and Altus Air Force Base in southwestern Oklahoma collectively represent one of the highest concentrations of active-duty personnel per capita in the country. Each installation produces steady VA loan demand from PCS buyers, first-time homebuyers, and separating service members who choose to stay in Oklahoma after service — a high percentage given Oklahoma's cost of living, no state tax on military retirement pay, and genuine community investment in veterans.",
        "The second track is investor. Oklahoma City's median home price sits around $212,000 in 2026 — the lowest median among major metros of comparable economic size. OKC rents have grown steadily, with SFR asking rents ranging from $1,400 to $1,900 for three-bedroom homes in established neighborhoods. The gross yields that combination produces — 10 to 13 percent in the right submarkets — are among the highest for any metro with genuine economic diversification. Energy sector, aviation maintenance (Tinker is one of the largest aircraft maintenance depots in the world), and healthcare anchor the tenant base.",
      ],
    },
    {
      heading: "VA lending across Oklahoma's three installations",
      paragraphs: [
        "Tinker Air Force Base in Midwest City drives the majority of Oklahoma VA volume. Tinker is home to the Oklahoma City Air Logistics Complex — one of the Air Force's three remaining ALCs — and employs roughly 26,000 military and civilian personnel. The surrounding communities of Midwest City, Del City, Choctaw, and Harrah carry median home prices of $180,000 to $280,000, making VA entitlement highly effective at zero down with no PMI. An E-5 with dependents receives $1,512 in BAH at the OKC rate — sufficient to cover total housing obligations on homes priced $195,000 to $240,000 at current rates.",
        "Fort Sill near Lawton is the Army's home of Field Artillery and hosts the Air Defense Artillery Center. Lawton median prices run $140,000 to $200,000 — VA financing reaches further here per dollar of entitlement than almost anywhere in the country. Separating soldiers from Fort Sill who choose to remain in Lawton-Comanche County are buying homes outright within BAH coverage. Altus AFB in Altus is a smaller installation with a B-52 associate unit and pilot training, producing lower but consistent VA volume in Jackson County.",
      ],
    },
    {
      heading: "Oklahoma City DSCR: the math that works in 2026",
      paragraphs: [
        "Oklahoma City's DSCR opportunity is concentrated in established suburban neighborhoods where acquisition prices remain below $220,000 and three-bedroom SFR rents hold in the $1,350 to $1,750 range. The northwest Oklahoma City corridor — Bethany, Warr Acres, Yukon — hits this window reliably. South Oklahoma City in the Moore and Norman school districts produces slightly higher rents ($1,500 to $1,900) at acquisition prices of $200,000 to $270,000.",
        "Oklahoma's property tax structure benefits DSCR investors. The effective rate statewide runs near 0.90 percent, and Oklahoma caps assessed value increases at 3 percent per year for homestead properties — which does not apply to investor-owned property, but newly purchased investment properties reset to current market value rather than carrying legacy assessments. The practical effect is predictable tax math from year one rather than uncertainty about assessment catch-up.",
        "Tulsa is a secondary DSCR market with similar yield characteristics to Oklahoma City and a distinct economic base — Williams Companies, ONEOK, and a growing aerospace manufacturing cluster. Tulsa's midtown and east side neighborhoods carry acquisition prices of $150,000 to $240,000 with rents of $1,200 to $1,700.",
      ],
    },
  ],
  faq: [
    {
      q: "Does Oklahoma tax military retirement pay?",
      a: "No. Oklahoma exempts all military retirement pay from state income tax. This is a material financial benefit for veterans who retire at Fort Sill, Tinker AFB, or Altus AFB and remain in Oklahoma. Combined with Oklahoma's generally low cost of living and affordable home prices, the after-tax financial picture for military retirees in Oklahoma is among the strongest in the country.",
    },
    {
      q: "What DSCR ratios are achievable in Oklahoma City?",
      a: "In the established suburban belt — Bethany, Warr Acres, Yukon, Moore, and south OKC — acquisition prices of $180,000 to $240,000 paired with SFR rents of $1,350 to $1,750 produce DSCR ratios of 1.10 to 1.35 at current rates and Oklahoma's 0.90 percent effective property tax. These are among the most consistently achievable ratios of any major metro in the country. Premium OKC neighborhoods and urban core properties compress ratios significantly.",
    },
    {
      q: "Can I use VA financing at Tinker AFB if I am a civilian DoD employee?",
      a: "VA loan eligibility is based on military service, not civilian employment. DoD civilian employees at Tinker are not eligible for VA financing unless they have qualifying prior military service. Civilian employees at Tinker with no military service would use conventional, FHA, or USDA financing depending on the property location and their financial profile.",
    },
    {
      q: "Is Derek Huit licensed in Oklahoma?",
      a: "Yes. Derek Huit, NMLS #203980, holds an Oklahoma Mortgage Loan Originator License. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "VA loan program details", href: "/programs/va" },
    { label: "DSCR loan program details", href: "/programs/dscr" },
    { label: "First-time buyer program details", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
