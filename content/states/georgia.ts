import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "georgia",
  name: "Georgia",
  abbr: "GA",
  headline: "Georgia Home Loans — VA Purchase Financing Near Fort Stewart, Hunter AAF, and Fort Moore",
  subheadline:
    "Georgia's military installations generate consistent VA purchase demand. Fort Stewart and Hunter AAF anchor the Savannah corridor. Fort Moore anchors Columbus. Both markets have BAH rates that make buying competitive with renting.",
  niche: "VA military lending · First-time buyer purchase",
  programs: ["va", "first-time-buyer"],
  featuredPostSlugs: [],
  dscr: false,
  stats: [
    { label: "Fort Stewart E-5 BAH w/dep (2026)", value: "$2,310/mo" },
    { label: "Hinesville median home price", value: "$209K–$270K" },
    { label: "Chatham County VA loan limit (2026)", value: "$832,750" },
    { label: "BAH increase at Fort Stewart (2026)", value: "+7.3%" },
  ],
  sections: [
    {
      heading: "Georgia military housing: two distinct corridors",
      paragraphs: [
        "Georgia's military mortgage market organizes around two corridors that are geographically far apart but structurally similar. Fort Stewart and Hunter Army Airfield serve the Savannah coastal area — Fort Stewart is in Hinesville roughly 40 miles inland, Hunter AAF sits directly inside Savannah's city limits. Fort Moore, renamed from Fort Benning, anchors Columbus on the Alabama border. Both corridors have BAH rates that produce positive buy-versus-rent math when VA financing is used correctly, and both have access to Georgia's state-level veteran property tax benefits that meaningfully reduce the monthly housing cost for disabled veterans.",
        "Georgia has state income tax — unlike Texas, Florida, or Washington — which is a planning consideration for military families comparing duty station options. BAH remains tax-free regardless, and Georgia's relatively low property tax rates (compared to Texas particularly) partially offset the income tax impact. The state also has a substantial partial property tax exemption for veterans with service-connected disability ratings, scaling from a partial exemption at lower ratings to full exemption for veterans rated 100 percent disabled.",
      ],
    },
    {
      heading: "Fort Stewart and Hunter AAF: the Savannah corridor",
      paragraphs: [
        "Fort Stewart's 2026 BAH increased 7.3 percent from 2025 — one of the larger increases among Army installations this cycle. An E-5 with dependents receives $2,310 per month. Against Hinesville median home prices of $209,000 to $270,000, that BAH rate supports mortgage payments that frequently come in at or below local rent, particularly when the VA loan's zero down and no PMI structure is applied. This is the fundamental buying argument near any military installation: why pay rent when the mortgage payment is equivalent or lower and you're building equity.",
        "The neighborhood decision near Stewart and Hunter is the most consequential housing choice military families make in this corridor. Fort Stewart is in Hinesville — closest and most affordable, but a 40-minute drive from Hunter AAF. Richmond Hill in Bryan County splits the distance at roughly 25 minutes to each installation, has the best-rated schools in the region, and comes with median prices of $396,000 to $436,000. Savannah and Pooler serve Hunter AAF families who want urban access or newer master-planned communities. Rincon and Guyton in Effingham County offer more land and lower property taxes at 35 to 45 minutes from Hunter.",
      ],
    },
    {
      heading: "Georgia first-time buyer programs that layer with VA",
      paragraphs: [
        "Georgia Dream is the state's primary homebuyer assistance program, administered by the Georgia Department of Community Affairs. The program offers down payment assistance of up to $10,000 for standard buyers and higher amounts for specific qualifying categories including veterans and public service borrowers. Georgia Dream layers on top of FHA, VA, USDA, and conventional loans — the combination of VA's zero-down structure with Georgia Dream's closing cost assistance is particularly effective for buyers who have minimal reserves but full VA entitlement.",
        "The veteran-specific advantage in Georgia's property tax system is substantial. Veterans rated 100 percent service-connected disabled are exempt from property taxes on their primary residence — a meaningful ongoing savings in any Georgia market. Partial exemptions apply at lower disability ratings on a sliding scale. The exemption is filed with the county tax assessor after closing and is not automatic — buyers should confirm the process with their county before closing.",
      ],
    },
  ],
  faq: [
    {
      q: "What is the VA loan limit in Chatham County for 2026?",
      a: "The 2026 VA loan limit in Chatham County, which includes Savannah and the surrounding area, is $832,750. Veterans with full entitlement can finance up to this amount with zero down payment and no PMI. Veterans with partial entitlement may need a down payment on amounts above the calculated entitlement ceiling.",
    },
    {
      q: "Do Georgia veterans get property tax benefits?",
      a: "Yes. Georgia offers a substantial property tax exemption for veterans with service-connected disability ratings. Veterans rated 100 percent disabled receive a full homestead property tax exemption on their primary residence. Partial exemptions apply at lower ratings. The exemption is filed with the county tax assessor after closing and applies annually.",
    },
    {
      q: "Is there a meaningful difference in buying near Fort Stewart versus Hunter AAF?",
      a: "The key difference is commute. Fort Stewart is in Hinesville — closest and most affordable but a 40-minute drive from Hunter AAF. If you're assigned to Hunter, buying in Savannah or Pooler keeps that commute under 15 minutes. Richmond Hill serves both installations reasonably and has the strongest schools in the region. Know your duty installation before you select a neighborhood.",
    },
    {
      q: "Is Derek Huit licensed in Georgia?",
      a: "Yes. Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Georgia. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "VA loan program details", href: "/programs/va" },
    { label: "First-time buyer programs", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
