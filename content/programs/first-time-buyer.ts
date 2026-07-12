import type { Program } from "../../lib/content";

export const program: Program = {
  slug: "first-time-buyer",
  name: "First-Time Buyer Programs",
  states: ["washington", "florida"],
  headline: "First-Time Home Buyer Programs — Federal, State, and Local Assistance",
  subheadline:
    "Most first-time buyers leave assistance on the table. FHA, USDA, HomeReady, and state programs each reduce what you need to close.",
  sections: [
    {
      heading: "Federal programs: FHA, USDA, and HomeReady",
      paragraphs: [
        "FHA loans require a minimum 3.5 percent down payment with a credit score of 580 or above, and as little as 10 percent down with scores between 500 and 579. FHA is the most widely used first-time buyer program because the underwriting is forgiving on credit history, debt-to-income ratios, and the source of down payment funds — gift funds from family are fully acceptable. FHA mortgage insurance includes an upfront premium of 1.75 percent of the loan amount and an annual premium that persists for the life of the loan if you put less than 10 percent down.",
        "Fannie Mae's HomeReady and Freddie Mac's Home Possible are conventional programs with 3 percent down payment options and income limits based on area median income. Both programs offer reduced mortgage insurance costs compared to standard PMI, and mortgage insurance cancels automatically when equity reaches 20 percent — unlike FHA's lifetime MIP on low-down purchases. HomeReady also allows income from non-borrower household members, which is useful for multi-generational households.",
        "USDA guaranteed loans offer zero down payment for buyers in eligible rural and semi-rural areas. Income limits apply based on household size and county. USDA is available only as a 30-year fixed rate — no adjustable options. The USDA annual fee runs approximately 0.35 percent of the outstanding balance, which is lower than FHA MIP for most loan amounts.",
      ],
    },
    {
      heading: "What 'first-time buyer' actually means",
      paragraphs: [
        "For most federal and state programs, 'first-time buyer' means you have not owned a primary residence in the past three years — it is not a lifetime restriction. This definition means buyers who owned a home years ago, sold it, and have been renting since may qualify again as first-time buyers under program guidelines.",
        "Several exceptions expand access further. VA loan programs have no first-time buyer requirement at all — veterans and active military can use VA financing regardless of prior homeownership. WSHFC programs in Washington waive the first-time buyer requirement for veterans and active military, and for all buyers purchasing in federally designated targeted areas. Florida Hometown Heroes and similar state programs have their own eligibility definitions that may differ from the standard federal definition.",
      ],
    },
  ],
  requirements: [
    { label: "FHA minimum down payment", value: "3.5% (580+ credit score)" },
    { label: "HomeReady / Home Possible down payment", value: "3%" },
    { label: "USDA down payment", value: "0% in eligible rural areas" },
    { label: "VA down payment", value: "0% for eligible veterans and military" },
    { label: "First-time buyer definition", value: "No primary residence ownership in past 3 years" },
    { label: "Gift funds allowed", value: "Yes on FHA, USDA, HomeReady, and VA" },
  ],
  faq: [
    {
      q: "I owned a home ten years ago. Am I a first-time buyer?",
      a: "Yes, under most program definitions. The standard federal definition of first-time buyer is having no primary residence ownership in the past three years. Owning a home a decade ago does not disqualify you from first-time buyer programs today.",
    },
    {
      q: "Which program is better for me — FHA or conventional?",
      a: "It depends on your credit score, down payment, and how long you plan to stay in the home. FHA has more forgiving underwriting and better pricing for credit scores below 680. Conventional (HomeReady/Home Possible) typically has lower long-term cost if you have a 680+ score and plan to stay long enough to cancel mortgage insurance. Your lender should run both side-by-side for your specific situation.",
    },
    {
      q: "Can first-time buyer programs be stacked with state assistance?",
      a: "Often yes. FHA, USDA, VA, and conventional programs can all be paired with state DPA programs like WSHFC in Washington. The DPA typically covers the down payment or closing costs as a second mortgage, while the primary loan handles the main financing. Stacking eligibility and program sequencing requires a lender familiar with the specific state programs involved.",
    },
  ],
  related: [
    { label: "Washington state programs", href: "/states/washington" },
    { label: "WSHFC down payment assistance", href: "/programs/wshfc" },
    { label: "VA loan program", href: "/programs/va" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
