import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "florida",
  name: "Florida",
  abbr: "FL",
  headline: "Florida Investment Property Loans — Qualify on Rental Income, Not Tax Returns",
  subheadline:
    "DSCR loans for Florida real estate investors. No W-2s, no pay stubs. If the rent covers the payment, you qualify.",
  niche: "DSCR investor lending · Self-employed & portfolio buyers",
  programs: ["dscr", "va"],
  featuredPostSlugs: [],
  dscr: true,
  stats: [
    { label: "Florida population growth (2024)", value: "+400K residents" },
    { label: "Jacksonville median SFR price", value: "~$300K" },
    { label: "Min DSCR ratio (standard)", value: "1.0x" },
    { label: "Typical DSCR close time", value: "21–30 days" },
  ],
  sections: [
    {
      heading: "Why Florida investors choose DSCR loans",
      paragraphs: [
        "Florida has one of the highest concentrations of self-employed individuals and small business owners in the country. Entrepreneurs who write off expenses to lower taxable income face a serious problem with conventional mortgage qualification — strong real cash flow, weak reported income. DSCR loans eliminate that problem entirely. The lender looks at the rental income the property generates against the monthly housing obligation. Your tax returns don't enter the file.",
        "The Florida rental market supports DSCR qualification across a range of property types: long-term single-family rentals in Jacksonville, Tampa, and Orlando suburbs; short-term vacation rentals in the Keys, 30A, and Gulf Coast markets; duplexes and small multifamily in workforce housing corridors. Each of these property types has different income math, and DSCR lenders active in Florida understand how to underwrite them correctly.",
        "Florida also carries a specific insurance complexity that out-of-state lenders underestimate. Property insurance premiums are factored directly into the DSCR calculation — inaccurate estimates cause deals to underperform on paper or fail underwriting late in the process. Working with a lender who understands Florida's insurance market from the start prevents late-stage surprises.",
      ],
    },
    {
      heading: "Jacksonville: Florida's most consistent DSCR market",
      paragraphs: [
        "Among Florida's major metros, Jacksonville produces standard DSCR qualification more consistently than any other city. The reason is price-to-rent ratio: Jacksonville's workforce housing markets haven't experienced the same price compression as Miami or Tampa coastal segments. Purchase prices remain accessible enough that market rent covers the housing obligation at standard loan-to-value ratios.",
        "Jacksonville also benefits from the stabilizing presence of NAS Jacksonville and Naval Station Mayport — combined military and civilian employment in the tens of thousands. Military households are stable, professional tenants who pay on time, maintain properties carefully, and sign multi-year leases. For investors prioritizing predictable cash flow over peak-season assumptions, Jacksonville's military-adjacent rental market is one of the most reliable in the state.",
        "Duval County's effective property tax rate is also the lowest of Florida's major investment markets, which directly improves DSCR math. When you compare the same deal at Jacksonville versus Tampa or Orlando with current insurance and tax rates factored in, Jacksonville's net coverage is meaningfully stronger at similar purchase prices.",
      ],
    },
    {
      heading: "What DSCR underwriting actually looks at",
      paragraphs: [
        "The DSCR ratio is the single number that drives approval. It is calculated as monthly rental income divided by the total monthly housing obligation — principal, interest, taxes, insurance, and HOA if applicable. A ratio of 1.0 means rent exactly covers the payment. Most standard programs require 1.0 or higher. Some programs allow ratios as low as 0.75 with compensating factors such as higher credit scores or lower loan-to-value.",
        "For vacant properties or new acquisitions with no lease in place, the appraiser completes a rent schedule — Form 1007 for single-family — which establishes market rent. That figure is used in the DSCR calculation. For short-term rentals, experienced DSCR lenders use market data from services that aggregate actual booking history and nightly rate trends to project income. This is where a Florida-experienced lender matters: the methodology needs to be defensible in underwriting, not just optimistic.",
        "Documentation for a DSCR loan is substantially lighter than conventional financing: property purchase contract or appraisal, evidence of rental income or a rent schedule, credit report, bank statements for reserves, and entity documents if purchasing through an LLC. Most Florida investors close DSCR loans in 21 to 30 days from a complete file.",
      ],
    },
  ],
  faq: [
    {
      q: "What is a DSCR loan and who is it for?",
      a: "A DSCR loan qualifies you based on the rental income a property generates — not your personal tax returns, W-2s, or employment history. It is designed for real estate investors, self-employed borrowers, and anyone whose personal income documentation doesn't reflect their actual financial position. DSCR loans are for investment properties only and are not available for primary residences.",
    },
    {
      q: "What is the minimum DSCR ratio to qualify in Florida?",
      a: "Most standard programs require a minimum DSCR of 1.0 — meaning projected rent covers the full monthly housing obligation including taxes and insurance. Some programs allow ratios as low as 0.75 with compensating factors such as a higher credit score or lower LTV. The specific threshold depends on the program, property type, and your overall borrower profile.",
    },
    {
      q: "Do I need a Florida LLC to get a DSCR loan?",
      a: "No. DSCR loans are available to individual borrowers and to LLCs, partnerships, or other entities. Many Florida investors choose to hold investment properties in an LLC for liability protection — DSCR lenders accommodate this structure with standard entity documentation. Purchasing in your personal name is equally acceptable.",
    },
    {
      q: "How does Florida property insurance affect DSCR qualification?",
      a: "Insurance premiums are included in the monthly housing obligation used to calculate your DSCR ratio. Florida insurance costs are higher than most of the country — and vary significantly by location, flood zone, age of roof, and construction type. An inaccurate insurance estimate built into your initial pro forma can cause a deal to fail underwriting late in the process. Get an accurate insurance quote for the specific property before submitting the file.",
    },
    {
      q: "Can I use a DSCR loan for a short-term rental in Florida?",
      a: "Yes, in many cases. DSCR lenders experienced in the Florida market can use market data to project short-term rental income for properties in established vacation markets. The methodology is more complex than long-term rental underwriting, and the result is more sensitive to the specific property and location. Short-term rental regulations also vary significantly by Florida county and municipality — verify that the property can legally operate as a short-term rental before pursuing DSCR financing on it.",
    },
    {
      q: "Is Derek Huit licensed in Florida?",
      a: "Yes. Derek Huit, NMLS #203980, is licensed to originate mortgage loans in Florida, among other states. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both licenses can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "DSCR loan program details", href: "/programs/dscr" },
    { label: "VA loans in Florida", href: "/programs/va" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
