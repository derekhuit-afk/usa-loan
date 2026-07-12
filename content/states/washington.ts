import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "washington",
  name: "Washington",
  abbr: "WA",
  headline: "Washington State Home Loans — WSHFC Programs, VA Benefits, and Down Payment Stacking",
  subheadline:
    "Most Washington buyers leave thousands in assistance on the table. WSHFC programs stack with VA and FHA. Here's how to use all of it.",
  niche: "WSHFC DPA stacking · Military buyers near JBLM",
  programs: ["wshfc", "va", "first-time-buyer"],
  featuredPostSlugs: [],
  stats: [
    { label: "Washington median home price (March 2026)", value: "$644,300" },
    { label: "WSHFC income limit (most counties)", value: "up to $180K" },
    { label: "WSHFC DPA (Home Advantage)", value: "up to 5%" },
    { label: "Seattle DPA (Office of Housing)", value: "up to $90K" },
  ],
  sections: [
    {
      heading: "The WSHFC stack: what most buyers don't know",
      paragraphs: [
        "The Washington State Housing Finance Commission administers several programs that can be layered on top of conventional, FHA, VA, or USDA loans. The Home Advantage program offers a below-market 30-year fixed rate combined with down payment assistance up to 5 percent of the loan amount as a deferred 0 percent second mortgage — no monthly payment, repaid when you sell or refinance. Income limits reach up to $180,000 in most counties, which covers most moderate-income Washington buyers.",
        "The stacking potential is what sets Washington apart from most states. A VA buyer near Joint Base Lewis-McChord who also qualifies for WSHFC Home Advantage can access zero-down VA financing with WSHFC assistance covering closing costs. A first-time buyer in Seattle can potentially combine WSHFC Home Advantage DPA with the Seattle Office of Housing grant — which provides up to $90,000 for three-bedroom properties for eligible buyers in Seattle city limits. These combinations are real and achievable with a lender who knows how to structure the file.",
        "The catch is that most out-of-state lenders and many local lenders don't regularly close WSHFC-layered files. The program has approval requirements, homebuyer education course mandates, and purchase price caps that vary by county. A lender who has actually closed these files — not just one who has the WSHFC approval — makes a meaningful difference in whether the assistance actually materializes.",
      ],
    },
    {
      heading: "Military buyers near JBLM and Bremerton",
      paragraphs: [
        "Joint Base Lewis-McChord is one of the largest military installations in the country, with a combined population of tens of thousands of service members, civilians, and families. VA loans are the default financing tool for most JBLM buyers — zero down payment, no PMI, and the ability to finance the full purchase price up to the conforming loan limit in Pierce County without a down payment. Washington's 2026 conforming limit in high-cost King and Snohomish counties reaches $1,063,750 — meaning VA buyers in those markets can finance well into the mid-seven figures without a down payment.",
        "The WSHFC Veterans DPA program adds another layer specifically for Washington veterans, active military, National Guard, reservists, and surviving spouses with dependent children: up to $10,000 in DPA as a deferred second mortgage, paired with a Home Advantage or House Key first mortgage. This is separate from VA entitlement and can be used alongside VA financing to cover closing costs that the VA funding fee and seller concessions don't fully absorb.",
        "For military buyers, the first-time buyer requirement on WSHFC programs is waived if you have served in the military — you don't need to have been without homeownership for the past three years to qualify. This matters for service members who owned a home at a previous duty station and are PCS'ing to Washington.",
      ],
    },
    {
      heading: "USDA eligibility in Washington: more areas than buyers expect",
      paragraphs: [
        "USDA guaranteed loans are available in a wider range of Washington communities than most buyers assume. Towns like Buckley, Darrington, Gold Bar, Index, Startup, Sultan, and Silvana fall within USDA-eligible zones. Even some areas closer to the Puget Sound corridor — parts of Granite Falls, Monroe, and Snohomish — may qualify depending on the specific address. Eastern Washington has extensive USDA-eligible geography across agricultural and rural communities.",
        "USDA loans offer zero down payment, no PMI, and typically lower interest rates than FHA for eligible borrowers. Income limits apply based on household size and county. For buyers who are open to communities outside the immediate urban core and want to minimize upfront costs, USDA is one of the most underused programs in Washington — primarily because buyers assume they won't qualify without verifying the specific address.",
      ],
    },
  ],
  faq: [
    {
      q: "What is the WSHFC Home Advantage program?",
      a: "WSHFC Home Advantage is Washington's primary first-time home buyer program. It provides a below-market 30-year fixed rate paired with down payment assistance of up to 5 percent of the loan amount as a deferred 0 percent second mortgage. Income limits reach up to $180,000 in most counties. The program works with FHA, VA, USDA, and conventional loans. A WSHFC-approved homebuyer education course is required.",
    },
    {
      q: "Can VA loans be stacked with WSHFC programs in Washington?",
      a: "Yes. VA loans can be paired with WSHFC Home Advantage or House Key programs, giving eligible buyers zero-down VA financing with WSHFC assistance covering closing costs or providing additional down payment support. Veterans and active military also qualify for WSHFC programs without the standard first-time buyer requirement, meaning prior homeownership doesn't disqualify you.",
    },
    {
      q: "What is the Seattle DPA and who qualifies?",
      a: "The Seattle Office of Housing provides down payment assistance up to $90,000 for three-bedroom properties and up to $70,000 for smaller units for eligible first-time buyers within Seattle city limits. Income limits generally fall at 80 to 100 percent of area median income. Program specifics and current funding availability require direct verification — call the Office of Housing at (206) 684-0721 or ask your loan officer.",
    },
    {
      q: "Does Derek Huit originate loans in Washington state?",
      a: "Yes. Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Washington. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
    {
      q: "Are there USDA-eligible areas near Seattle or Tacoma?",
      a: "Some areas in the broader Puget Sound region qualify for USDA eligibility depending on the specific address — parts of Granite Falls, Monroe, Snohomish, and several Pierce County communities may qualify. USDA eligibility is verified address-by-address through the USDA's online map. Many buyers in outer suburbs are surprised to find their target area qualifies.",
    },
  ],
  related: [
    { label: "WSHFC program details", href: "/programs/wshfc" },
    { label: "VA loans in Washington", href: "/programs/va" },
    { label: "First-time buyer programs", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
