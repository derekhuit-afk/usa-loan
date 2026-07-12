import type { Program } from "../../lib/content";

export const program: Program = {
  slug: "wshfc",
  name: "WSHFC Down Payment Assistance",
  states: ["washington"],
  headline: "WSHFC Programs — Washington's Down Payment Assistance Stack",
  subheadline:
    "The Washington State Housing Finance Commission administers multiple programs that layer with VA, FHA, USDA, and conventional loans to reduce upfront costs for qualifying buyers.",
  sections: [
    {
      heading: "Home Advantage: the primary WSHFC program",
      paragraphs: [
        "WSHFC Home Advantage combines a below-market 30-year fixed rate with down payment assistance of up to 5 percent of the loan amount as a deferred 0 percent second mortgage. The DPA has no monthly payment and is repaid only when you sell, refinance, or no longer occupy the home as your primary residence. Income limits reach up to $180,000 in most Washington counties — one of the most generous thresholds in the country.",
        "Home Advantage works with FHA, VA, USDA, and conforming conventional loans. This means VA buyers can access zero-down VA financing and use WSHFC assistance to cover closing costs, the VA funding fee, or prepaid items that aren't covered by seller concessions. Stacking VA and WSHFC together is one of the most effective strategies for Washington buyers with military eligibility.",
        "A WSHFC-approved homebuyer education course is required for most programs. The course is available online and typically takes four to six hours. Completion must be documented before loan closing.",
      ],
    },
    {
      heading: "House Key Opportunity and targeted area programs",
      paragraphs: [
        "House Key Opportunity provides competitive interest rates with DPA for buyers whose income is below 80 percent of the area median income. In higher-cost counties, this limit is lower than Home Advantage but the program often offers better rate terms for income-qualifying buyers. House Key pairs with FHA, VA, and USDA loans.",
        "Targeted area programs expand eligibility in federally designated targeted areas — typically lower-income or economically distressed communities — by removing the first-time buyer requirement for everyone and sometimes offering enhanced terms. Many rural and some suburban Washington ZIP codes qualify as targeted areas. Buyers purchasing in a targeted area can use WSHFC programs even if they have owned a home in the past three years.",
        "Veterans and active military qualify for all WSHFC programs without the standard first-time buyer requirement regardless of targeted area designation. Prior homeownership at a previous duty station does not disqualify a military buyer from Washington WSHFC assistance.",
      ],
    },
    {
      heading: "City and county programs that stack on top",
      paragraphs: [
        "Several Washington cities and counties provide additional DPA on top of WSHFC programs. Seattle's Office of Housing provides up to $90,000 for three-bedroom properties and up to $70,000 for smaller units for eligible buyers within Seattle city limits at 80 to 100 percent of area median income. Tacoma offers up to $20,000. Clark County has its own program. These city and county programs are first-come, first-served and funding can exhaust — verification of current availability is essential before structuring a purchase around them.",
        "The stacking potential across WSHFC Home Advantage, city DPA programs, and VA seller concessions means some Washington buyers can approach a purchase with minimal or zero cash required at closing. The file structure and program sequencing matters — work with a lender who regularly closes WSHFC-layered files, not one who has to figure out the mechanics in real time on your transaction.",
      ],
    },
  ],
  requirements: [
    { label: "Income limit (Home Advantage)", value: "Up to $180,000 (most counties)" },
    { label: "DPA amount (Home Advantage)", value: "Up to 5% of loan amount, deferred 0%" },
    { label: "Purchase price limit", value: "Approximately $510,400–$750,000+ (varies by county)" },
    { label: "Minimum credit score", value: "620 (640 for some programs)" },
    { label: "First-time buyer requirement", value: "Waived for veterans and military; waived in targeted areas" },
    { label: "Education course", value: "Required — WSHFC-approved, available online" },
    { label: "Compatible loan types", value: "FHA, VA, USDA, conventional" },
    { label: "DPA repayment", value: "Upon sale, refinance, or vacating primary residence" },
  ],
  faq: [
    {
      q: "Can I use WSHFC programs with a VA loan?",
      a: "Yes. WSHFC Home Advantage and House Key programs are compatible with VA loans. Veterans and active military do not need to meet the first-time buyer requirement for any WSHFC program. WSHFC assistance can cover closing costs, prepaid items, or the VA funding fee that aren't absorbed by seller concessions.",
    },
    {
      q: "Does the WSHFC DPA have to be repaid?",
      a: "The Home Advantage DPA is a deferred 0 percent second mortgage — no monthly payment, repaid only when you sell, refinance, or no longer occupy the home as your primary residence. Some WSHFC programs use different structures; verify the specific repayment terms for the program you qualify for.",
    },
    {
      q: "What is the income limit for WSHFC Home Advantage?",
      a: "Income limits reach up to $180,000 in most Washington counties. Limits vary by household size and county — verify the current limit for your specific county and household size through WSHFC or your lender.",
    },
    {
      q: "Do I need to be a first-time buyer to use WSHFC programs?",
      a: "For most WSHFC programs, you must not have owned a primary residence in the past three years. Exceptions: veterans and active military are exempt from this requirement entirely. Buyers purchasing in a federally designated targeted area are also exempt. Many rural and suburban Washington ZIP codes qualify as targeted areas.",
    },
  ],
  related: [
    { label: "Washington state overview", href: "/states/washington" },
    { label: "VA loan program", href: "/programs/va" },
    { label: "First-time buyer programs", href: "/programs/first-time-buyer" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
