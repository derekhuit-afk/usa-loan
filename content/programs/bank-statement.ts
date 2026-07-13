import type { Program } from "../../lib/content";

export const program: Program = {
  slug: "bank-statement",
  name: "Bank Statement Loans",
  states: ["texas", "florida"],
  headline: "Bank Statement Loans — Qualify on Your Deposits, Not Your Tax Returns",
  subheadline:
    "Self-employed borrowers write off expenses to lower taxable income. That is smart tax strategy — and it wrecks conventional mortgage qualification. Bank statement programs qualify you on what actually flows through your accounts.",
  sections: [
    {
      heading: "How bank statement qualification works",
      paragraphs: [
        "A bank statement loan replaces tax returns, W-2s, and pay stubs with 12 or 24 months of your actual bank statements. The underwriter reviews your deposit history to establish qualifying income. If you use personal statements, deposits are generally counted in full. If you use business statements, an expense factor is applied — a percentage of deposits set aside to represent business operating costs — and the remainder becomes your qualifying income.",
        "This solves the central problem for self-employed borrowers: your Schedule C or K-1 shows income after every legitimate deduction, depreciation schedule, and write-off your CPA can find. A business owner depositing strong revenue every month can show modest taxable income on paper. Conventional underwriting only sees the paper. Bank statement underwriting sees the deposits.",
        "These are non-QM (non-qualified mortgage) products, which means they sit outside Fannie Mae and Freddie Mac guidelines. They are not looser on ability-to-repay — federal ATR rules still apply and the underwriter still has to document that you can afford the loan. The difference is the documentation path, not the existence of underwriting.",
      ],
    },
    {
      heading: "Who this program actually fits",
      paragraphs: [
        "The classic fit is a business owner with at least two years of self-employment history whose tax returns understate real cash flow: contractors, agency owners, medical and dental practice owners, e-commerce operators, consultants, and real estate professionals. Gig workers and 1099 earners with consistent deposit patterns can also qualify, and dedicated 1099 and P&L-statement programs exist as alternatives when bank statements alone do not tell the full story.",
        "It is not the right tool for everyone. If your tax returns already support the loan you want, an agency loan will almost always price better — non-QM rates run somewhat higher than conventional because there is no government-sponsored backing behind them. The correct sequence is to price the conventional path first and move to bank statement qualification only when the tax returns genuinely cap you below your real buying power.",
        "Down payment expectations are higher than agency minimums. Depending on credit profile and program, self-employed borrowers commonly see minimum down payments in the 10 to 20 percent range on a purchase, with stronger credit unlocking the lower end. Reserves — verified savings after closing — carry real weight in non-QM underwriting.",
      ],
    },
    {
      heading: "What to prepare before applying",
      paragraphs: [
        "Gather 12 to 24 consecutive months of statements from the accounts where your income actually lands, every page, including blank pages. Large irregular deposits will draw questions — a transfer from your own savings, a one-time equipment sale, and a client payment all look identical on a statement until documented, so be ready to paper the unusual items.",
        "Keep business and personal finances separated for at least the statement period. Commingled accounts force the underwriter toward the business-statement path with its expense factor, which usually produces lower qualifying income than clean personal deposits would have. If you are planning a purchase 12 or more months out, opening a dedicated deposit account now is one of the highest-leverage moves available.",
        "Expect the file to be reviewed by a human underwriter rather than an automated engine. Turn times are competitive when the statement package is complete and organized on day one. The single biggest cause of delay in bank statement lending is a statement gap — one missing month restarts the income analysis.",
      ],
    },
  ],
  requirements: [
    { label: "Income documentation", value: "12 or 24 months personal or business bank statements" },
    { label: "Tax returns required", value: "No" },
    { label: "Self-employment history", value: "Typically 2+ years" },
    { label: "Down payment", value: "Commonly 10–20% depending on credit profile" },
    { label: "Occupancy", value: "Primary, second home, or investment" },
    { label: "Backing", value: "Non-QM — not Fannie Mae / Freddie Mac" },
    { label: "Alternatives", value: "1099 programs, CPA-prepared P&L programs" },
    { label: "Underwriting", value: "Manual review; ATR rules fully apply" },
  ],
  faq: [
    {
      q: "Are bank statement loans riskier or 'subprime'?",
      a: "No. Non-QM is a documentation category, not a credit-quality category. Federal ability-to-repay rules apply in full — the underwriter must still verify you can afford the payment. The borrower profile in these programs is typically a business owner with strong deposits whose tax strategy, not credit, blocks conventional qualification.",
    },
    {
      q: "Will the rate be higher than a conventional loan?",
      a: "Generally somewhat higher, because there is no agency backing. The honest comparison is not bank-statement-versus-conventional at the same loan amount — it is the loan you can actually get. When tax returns cap your qualifying income, the conventional 'lower rate' attaches to a loan amount that does not buy the house.",
    },
    {
      q: "Who originates these loans?",
      a: "Derek Huit (NMLS #203980) originates through Cardinal Financial Company, Limited Partnership (NMLS #66247). Program terms, pricing, and final eligibility are set at the product level and determined on the full application file.",
    },
  ],
  related: [
    { label: "Texas home loans overview", href: "/states/texas" },
    { label: "Florida home loans overview", href: "/states/florida" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
