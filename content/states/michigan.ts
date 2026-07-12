import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "michigan",
  name: "Michigan",
  abbr: "MI",
  headline: "Michigan Home Loans — MSHDA Down Payment Assistance and DSCR Investor Financing",
  subheadline:
    "MSHDA's MI Home Loan puts $10,000 in down payment assistance within reach for first-time buyers statewide. Detroit trades at cap rates the Sun Belt hasn't seen in years. Michigan is two very different mortgage opportunities in one state.",
  niche: "MSHDA first-time buyer DPA · DSCR investor financing",
  programs: ["dscr", "first-time-buyer"],
  featuredPostSlugs: [],
  dscr: true,
  stats: [
    { label: "MSHDA DPA available (2026)", value: "Up to $10,000" },
    { label: "MSHDA sales price cap (June 2026)", value: "$566,355" },
    { label: "Detroit inner-ring gross yield", value: "7%–10%" },
    { label: "Grand Rapids median home price", value: "~$325K" },
  ],
  sections: [
    {
      heading: "Michigan's two distinct mortgage markets",
      paragraphs: [
        "Michigan organizes into two borrower profiles that have almost nothing in common. The first is the first-time buyer using MSHDA's MI Home Loan — a state-backed mortgage program that delivers up to $10,000 in zero-interest, deferred-payment down payment assistance statewide. For buyers who have stable income but limited cash reserves, MSHDA is one of the strongest DPA programs in the Midwest and it stacks on top of FHA, VA, USDA, and conventional loans. The second profile is the DSCR investor who understands that Detroit and its surrounding market trades at cap rates that the Sun Belt and coastal markets simply cannot replicate — gross yields of 7 to 15 percent depending on submarket and property tier.",
        "These two profiles rarely overlap but they represent complementary demand. Michigan's population is essentially flat statewide, but the Grand Rapids and Ann Arbor metros are growing, Detroit has genuinely stabilized after its bankruptcy-era decline, and the state's economic diversification — away from pure automotive and toward healthcare, life sciences, and tech — is producing a more durable rental base than existed a decade ago.",
      ],
    },
    {
      heading: "MSHDA: Michigan's DPA program in plain terms",
      paragraphs: [
        "The MI Home Loan is MSHDA's primary first mortgage. It carries a competitive rate and is the vehicle that unlocks down payment assistance. As of June 2026, the statewide sales price cap is $566,355 — well above what most first-time buyers in Michigan are targeting. The MI 10K DPA Loan provides up to $10,000 as a zero-interest second mortgage with no monthly payments. Repayment occurs only when the borrower sells, refinances, or pays off the first mortgage. The minimum credit score for FHA, VA, and USDA loans paired with MSHDA is 640. Conventional MSHDA loans require 660.",
        "Income limits vary by county and household size and are updated periodically by MSHDA — they run roughly $84,600 to $121,000 for most Michigan counties in 2026, with higher limits in Washtenaw County and other higher-cost areas. First-time buyer status is required for non-targeted areas — meaning you have not owned a primary residence in the past three years. Buyers in targeted areas can be repeat buyers and still qualify. Every MI Home Loan requires completion of a Michigan homebuyer education course regardless of whether DPA is taken.",
      ],
    },
    {
      heading: "Detroit and Grand Rapids: Michigan's DSCR investment thesis",
      paragraphs: [
        "Detroit is a cash-flow market, not an appreciation market. That distinction drives everything. The inner-ring stable neighborhoods — East English Village, West Village, Rosedale Park, Grandmont-Rosedale — trade at $145,000 to $295,000 with rents of $1,400 to $1,800 producing gross yields of 7 to 10 percent. These are the deals where DSCR underwriting works cleanly: properties with substantial square footage, stable tenant pools, and insurance markets that remain functional. Detroit's effective property tax rate of approximately 2.8 percent is the highest of any major Michigan city — it goes directly into PITIA and directly into the DSCR ratio. Model it accurately before contracting.",
        "Grand Rapids is structurally different from Detroit. It is a growth market with a diversified economic base — Corewell Health, Meijer, Herman Miller, Gentex, and a rapidly expanding life sciences corridor. Cap rates are lower than Detroit at 3 to 5 percent in established neighborhoods, but the risk profile is also lower: stable appreciation, professional tenant pools, lower turnover, and an insurance market that doesn't carry the Detroit premium. Wyoming and Kentwood on Grand Rapids' southwest edge produce the metro's best DSCR math — acquisition prices of $150,000 to $240,000 with rents of $1,350 to $1,750 supporting DSCR ratios of 1.25 to 1.45 consistently.",
      ],
    },
  ],
  faq: [
    {
      q: "Does MSHDA DPA work with VA loans?",
      a: "Yes. MSHDA's MI Home Loan and 10K DPA program layer on top of VA loans. For veterans who have VA entitlement and qualify under MSHDA income limits, the combination eliminates the down payment through VA's zero-down benefit while MSHDA's assistance covers closing costs and prepaid items. The minimum credit score is 640 for VA loans paired with MSHDA.",
    },
    {
      q: "What are the MSHDA income limits in 2026?",
      a: "Income limits vary by county and household size. For most Michigan counties in 2026, the limits run approximately $84,600 to $121,000. Washtenaw County has higher limits. MSHDA updates these periodically — always verify the current limit for your specific county and household size with a participating lender before assuming eligibility.",
    },
    {
      q: "What Detroit neighborhoods work for DSCR deals?",
      a: "The inner-ring stable neighborhoods are where DSCR underwriting works most predictably: East English Village, West Village, Rosedale Park, Grandmont-Rosedale, Sherwood Forest, and Palmer Woods. These areas have cleared most of the distressed inventory cycle and operate as stable rental markets with properties priced $145,000 to $295,000 and rents supporting gross yields of 7 to 10 percent. Avoid higher-yield but higher-variance C-class neighborhoods for a first Michigan DSCR deal.",
    },
    {
      q: "Is Derek Huit licensed in Michigan?",
      a: "Yes. Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Michigan. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "DSCR loan program details", href: "/programs/dscr" },
    { label: "First-time buyer programs", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
