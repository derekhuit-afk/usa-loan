import type { Program } from "../../lib/content";

export const program: Program = {
  slug: "dscr",
  name: "DSCR Investor Loans",
  states: ["florida"],
  headline: "DSCR Loans — Qualify on What the Property Earns, Not What You Report",
  subheadline:
    "Investment property financing without W-2s, tax returns, or employment verification. If the rent covers the payment, you qualify.",
  dscr: true,
  sections: [
    {
      heading: "How DSCR qualification works",
      paragraphs: [
        "DSCR stands for Debt Service Coverage Ratio — the relationship between a property's rental income and its monthly housing obligation. The calculation is straightforward: monthly rental income divided by total monthly housing cost (principal, interest, taxes, insurance, and HOA if applicable). A ratio of 1.0 means rent exactly covers the payment. A ratio of 1.25 means rent covers 125 percent of the payment, which lenders view as a comfortable cushion.",
        "Your personal income, tax returns, W-2s, and employment history are not part of the underwriting equation. The property qualifies based on its own economics. This is particularly valuable for self-employed borrowers whose tax returns reflect aggressive deductions rather than actual cash flow, for investors with complex income from multiple entities, and for anyone who has hit the conventional loan limit of 10 financed properties.",
        "For vacant properties or new acquisitions with no existing lease, the appraiser completes a rent schedule establishing market rent for that property type in that location. That figure substitutes for actual lease income in the DSCR calculation. This means you can qualify a DSCR loan before the property has a tenant in place.",
      ],
    },
    {
      heading: "Property types and eligible use cases",
      paragraphs: [
        "DSCR loans are available for residential investment properties: single-family homes, condominiums (subject to project review), duplexes, triplexes, and quadplexes. The property must be held for investment — it cannot be the borrower's primary residence or a second home. Properties held in an LLC or other entity are eligible with standard entity documentation.",
        "Short-term rentals are eligible in many programs when the market supports a documented income projection. The appraiser or an approved third-party data source establishes the projected income figure. Lenders active in Florida vacation markets understand how to handle Airbnb and VRBO income — lenders less familiar with short-term rental underwriting often decline deals that qualified borrowers and viable properties could support.",
        "Portfolio investors benefit from DSCR's lack of loan count restrictions. Unlike conventional financing, which caps borrowers at ten financed properties under Fannie Mae and Freddie Mac guidelines, DSCR programs have no such ceiling. A borrower with fifteen existing rentals can add a sixteenth on DSCR without the conventional count constraint.",
      ],
    },
    {
      heading: "What to prepare before applying",
      paragraphs: [
        "The DSCR file is significantly lighter than conventional investment property financing. Core documentation includes: the property purchase contract or appraisal, evidence of rental income (existing lease) or an appraiser rent schedule for vacant properties, credit report (most programs require 640 minimum, with better pricing at 700 and above), bank statements demonstrating reserves (typically three to six months of housing obligation), and entity documents if purchasing through an LLC.",
        "Reserve requirements are non-negotiable in DSCR underwriting. The lender needs to see that you can sustain the property through a vacancy or a repair without defaulting. Reserves are verified from bank statements — seasoned funds in checking, savings, or investment accounts. Retirement accounts typically count at 60 to 70 percent of face value.",
        "Down payment minimums run 20 to 25 percent on purchase transactions. Cash-out refinances require 20 to 25 percent equity. The down payment cannot be gifted — DSCR lenders require borrower-sourced funds for the equity contribution, reflecting the investment property risk profile.",
      ],
    },
  ],
  requirements: [
    { label: "Property type", value: "Investment only — SFR, condo, 2–4 unit" },
    { label: "Minimum DSCR", value: "1.0x (some programs 0.75x with compensating factors)" },
    { label: "Minimum credit score", value: "640 (700+ for best pricing)" },
    { label: "Down payment", value: "20–25% borrower-sourced" },
    { label: "Reserves", value: "3–6 months housing obligation" },
    { label: "Income docs required", value: "None — property income only" },
    { label: "LLC eligible", value: "Yes — standard entity docs required" },
    { label: "Typical close time", value: "21–30 days from complete file" },
    { label: "Loan count limit", value: "None" },
  ],
  faq: [
    {
      q: "Can I use a DSCR loan for my primary residence?",
      a: "No. DSCR loans are for investment properties only. They are not available for primary residences or second homes. The property must be held for rental income generation.",
    },
    {
      q: "Do I need a property management company to qualify?",
      a: "No. Self-managed properties qualify for DSCR financing. You are not required to use a property management company.",
    },
    {
      q: "What happens if my DSCR ratio is below 1.0?",
      a: "Some programs allow ratios as low as 0.75 with compensating factors — typically a higher credit score (720+), lower loan-to-value, or significant reserves. These are called no-ratio or sub-1.0 programs. Approval is less certain and pricing reflects the additional lender risk.",
    },
    {
      q: "Can I refinance an existing rental property with a DSCR loan?",
      a: "Yes. Rate-and-term refinances and cash-out refinances of existing investment properties are both eligible for DSCR financing. Cash-out refinances typically require 20 to 25 percent equity remaining after the cash-out.",
    },
  ],
  related: [
    { label: "Florida investor lending overview", href: "/states/florida" },
    { label: "VA loan program", href: "/programs/va" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
