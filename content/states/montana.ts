import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "montana",
  name: "Montana",
  abbr: "MT",
  headline: "Montana Home Loans — VA Loans for Malmstrom AFB and USDA Rural Financing Statewide",
  subheadline:
    "Malmstrom Air Force Base in Great Falls drives consistent VA loan demand. Low-density rural markets across Montana qualify for USDA zero-down financing. Low inventory, high-intent buyers.",
  niche: "VA military lending · USDA rural financing · Purchase lending",
  programs: ["va", "first-time-buyer"],
  featuredPostSlugs: [],
  stats: [
    { label: "Malmstrom AFB E-5 BAH w/dep (2026)", value: "$1,422/mo" },
    { label: "Great Falls median home price (2026)", value: "~$278K" },
    { label: "Montana counties USDA-eligible", value: "Majority of the state" },
    { label: "Montana effective property tax rate", value: "~0.74%" },
  ],
  sections: [
    {
      heading: "Montana's mortgage market: small volume, high-intent buyers",
      paragraphs: [
        "Montana is not a high-volume mortgage state. The total population sits below 1.2 million across a land area larger than Japan. What Montana does produce is high-intent buyers who have specific, non-negotiable needs: VA buyers PCSing to or separating near Malmstrom, rural buyers purchasing acreage or small-town homes outside USDA income and population limits, and buyers relocating from higher-cost western states — California, Washington, Oregon — who are working with significant equity and looking for Montana's combination of low property taxes, no income tax, and land availability.",
        "Montana has no state income tax. Property taxes are among the lowest effective rates in the country at roughly 0.74 percent. For buyers relocating from California's 13.3 percent marginal rate or Oregon's 9.9 percent, Montana's tax structure is a material financial consideration, not just a lifestyle one. These buyers often carry substantial assets and are making deliberate purchasing decisions — they are not typical first-time buyers and do not need basic financing education.",
        "Rural financing in Montana centers on USDA Rural Development loans. The majority of Montana's geography outside Billings, Missoula, Great Falls, and Bozeman falls within USDA eligible areas. USDA provides zero-down financing for owner-occupied primary residences within income limits — for a family of four in most Montana counties, the moderate income limit runs above $110,000. Combined with Montana's low acquisition prices outside the resort markets, USDA is a highly viable option for buyers throughout the state.",
      ],
    },
    {
      heading: "Malmstrom Air Force Base: VA lending in Great Falls",
      paragraphs: [
        "Malmstrom Air Force Base is home to the 341st Missile Wing and is the sole operator of the Minuteman III ICBM in the Air Force's arsenal. The base maintains a significant permanent party population of officers and enlisted personnel plus DoD civilians. Great Falls, with a metro population around 82,000, is the primary housing market for Malmstrom personnel.",
        "Great Falls median home prices sit near $278,000 in 2026. An E-5 with dependents receives $1,422 per month in BAH at the Great Falls rate — sufficient to cover the housing obligation on homes priced $200,000 to $260,000 at current rates. Officers and senior enlisted personnel at higher BAH rates cover purchases up to $380,000 without out-of-pocket mortgage expense above their housing allowance. VA loans in Montana carry Montana's low effective property tax, which improves qualification math relative to higher-tax states.",
        "VA buyers at Malmstrom face an inventory challenge rather than a financing challenge. Great Falls is a low-turnover market with limited new construction. VA appraisals on older Great Falls homes — many built in the 1950s and 1960s — sometimes require negotiation on minimum property requirements. Working with a lender who understands VA minimum property requirement timelines and appraiser communication protocols matters more in a thin inventory market than in a deep one.",
      ],
    },
    {
      heading: "USDA rural development: the right tool for most of Montana",
      paragraphs: [
        "Outside Montana's four primary metros, USDA Rural Development Section 502 Direct and Guaranteed loans are the most accessible zero-down financing option for owner-occupied purchases. USDA-eligible areas in Montana include Havre, Glasgow, Wolf Point, Miles City, Lewistown, Livingston, and dozens of smaller communities where home prices are dramatically lower than the national median.",
        "USDA eligibility requires the property to be in an eligible rural area (determined by census data, not by ZIP code), the borrower to meet moderate income limits (which in Montana run higher than many borrowers expect), and the property to be owner-occupied as a primary residence. Investment properties, vacation homes, and acreage-heavy rural properties may not qualify under USDA guidelines regardless of location. Properties with income-producing outbuildings require specific underwriting treatment.",
      ],
    },
  ],
  faq: [
    {
      q: "Can I use a VA loan to buy land in Montana?",
      a: "VA loans are for the purchase of residential properties with existing structures — a home on the land. VA does not finance raw land purchases or construction-only transactions without an existing permanent structure. If you are purchasing a home that sits on acreage in Montana, the VA loan can finance the home and its associated land up to a reasonable amount. VA appraisers in rural Montana are familiar with acreage properties and will establish value parameters for the loan amount.",
    },
    {
      q: "What areas of Montana qualify for USDA rural loans?",
      a: "The majority of Montana's geography qualifies, including most communities outside Billings, Missoula, Great Falls, and Bozeman. Specific USDA eligibility is determined at the property address level using the USDA's eligibility mapping tool — income limits and area eligibility must both be satisfied. A property on the edge of an ineligible metro may be USDA-eligible even if it feels suburban. Eligibility maps are updated periodically based on census data.",
    },
    {
      q: "Does Montana have a property tax exemption for veterans?",
      a: "Yes. Montana provides a property tax exemption of up to $1,500 of taxable value for honorably discharged veterans who served during specific wartime periods or received an expeditionary medal. Veterans rated 100 percent permanently and totally disabled by the VA qualify for a full property tax exemption on their primary residence. The application is filed with the county assessor.",
    },
    {
      q: "Is Derek Huit licensed in Montana?",
      a: "Yes. Derek Huit, NMLS #203980, holds a Montana Mortgage Broker License. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "VA loan program details", href: "/programs/va" },
    { label: "First-time buyer program details", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
