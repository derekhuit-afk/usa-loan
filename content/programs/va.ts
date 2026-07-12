import type { Program } from "../../lib/content";

export const program: Program = {
  slug: "va",
  name: "VA Home Loans",
  states: ["alaska", "florida", "washington"],
  headline: "VA Loans — Zero Down, No PMI, for Veterans and Active Military",
  subheadline:
    "The VA loan benefit is the most powerful home financing tool available to eligible service members and veterans. Here is what it actually covers.",
  sections: [
    {
      heading: "What VA loans cover — and what they don't",
      paragraphs: [
        "VA loans are guaranteed by the Department of Veterans Affairs and originated through VA-approved lenders. The core benefit: eligible borrowers can finance 100 percent of the purchase price with no down payment, and the loan carries no private mortgage insurance. On a $400,000 purchase, eliminating the 20 percent conventional down payment requirement means keeping $80,000 in your pocket — or your investment accounts.",
        "VA loans are available for primary residences only. They cannot be used for investment properties, vacation homes, or second homes. The property must pass a VA appraisal that establishes both the market value and the property's compliance with VA Minimum Property Requirements — a set of standards covering safety, structural soundness, and basic sanitation.",
        "Eligibility is based on service history. Active duty service members, veterans with honorable discharge, National Guard and Reserve members with qualifying service, and surviving spouses of veterans who died in service or from service-connected disability may be eligible. Your Certificate of Eligibility (COE) confirms eligibility and your available entitlement — it can typically be obtained online through the VA portal or through your lender.",
      ],
    },
    {
      heading: "VA funding fee: what it costs and when it is waived",
      paragraphs: [
        "The VA funding fee is a one-time upfront charge that partially offsets the cost of the VA guarantee to taxpayers. For most first-time VA users purchasing with zero down, the fee is 2.15 percent of the loan amount. For subsequent use, it is 3.3 percent. The fee can be financed into the loan rather than paid at closing — it is not required out of pocket.",
        "Veterans rated 10 percent or more service-connected disabled by the VA are exempt from the funding fee entirely. Surviving spouses receiving Dependency and Indemnity Compensation are also exempt. The exemption is automatic once your lender receives documentation of the rating — it does not require a separate application.",
        "Sellers can contribute up to 4 percent of the purchase price in seller concessions on VA transactions, in addition to standard closing costs. In balanced markets, this means VA buyers can often negotiate a transaction where the seller covers the funding fee, prepaid items, and closing costs — resulting in a true zero-out-of-pocket purchase.",
      ],
    },
    {
      heading: "Using VA benefits more than once",
      paragraphs: [
        "VA entitlement is not a one-time benefit. When you sell a VA-financed home and pay off the loan, your full entitlement is restored and you can use it again on a future purchase. In some circumstances — such as a PCS relocation before selling — it is possible to have two active VA loans simultaneously using remaining and bonus entitlement.",
        "Veterans who used their VA benefit years ago and have since paid off the loan or sold the property may have full entitlement available without realizing it. Checking your current entitlement status through the VA portal or through a lender who can request your COE takes a few minutes and often reveals more available benefit than the veteran expected.",
      ],
    },
  ],
  requirements: [
    { label: "Down payment", value: "0% for eligible borrowers with full entitlement" },
    { label: "Mortgage insurance", value: "None" },
    { label: "Funding fee (first use, 0% down)", value: "2.15% of loan amount (waived for 10%+ disabled vets)" },
    { label: "Occupancy requirement", value: "Primary residence only" },
    { label: "Property type", value: "SFR, condo (VA-approved project), 2–4 unit (owner-occupied)" },
    { label: "Seller concessions allowed", value: "Up to 4% of purchase price" },
    { label: "Loan limit (full entitlement)", value: "No limit — up to lender approval" },
    { label: "Credit score", value: "Varies by lender; typically 580–620 minimum" },
  ],
  faq: [
    {
      q: "Can I use a VA loan if I used one before?",
      a: "Yes. VA entitlement restores when you sell the home and pay off the loan. You can also have two VA loans simultaneously in some circumstances, such as PCS relocation. Check your current entitlement through the VA portal or through your lender.",
    },
    {
      q: "Is the VA funding fee waived for disabled veterans?",
      a: "Yes. Veterans with a VA service-connected disability rating of 10 percent or higher are exempt from the VA funding fee. Surviving spouses receiving DIC are also exempt. Provide your rating documentation to your lender — the exemption applies automatically.",
    },
    {
      q: "Can a seller pay closing costs on a VA loan?",
      a: "Yes. Sellers can pay up to 4 percent of the purchase price in concessions on VA transactions — this is in addition to typical closing costs. In balanced markets, this can result in a true zero-out-of-pocket purchase.",
    },
    {
      q: "What is a VA Minimum Property Requirement?",
      a: "VA MPRs are standards the property must meet for the loan to be guaranteed — covering safety, structural soundness, and basic sanitation. Common MPR issues include roofing condition, heating system adequacy, water and septic system function, and electrical safety. The VA appraiser evaluates the property against these standards as part of the appraisal.",
    },
  ],
  related: [
    { label: "Alaska military home loans", href: "https://www.akmilitaryhomeloans.com" },
    { label: "Washington state home loans", href: "/states/washington" },
    { label: "Florida home loans", href: "/states/florida" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
