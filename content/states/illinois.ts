import type { StatePage } from "../../lib/content";

export const state: StatePage = {
  slug: "illinois",
  name: "Illinois",
  abbr: "IL",
  headline: "Illinois Home Loans — FHA, VA, and DSCR Financing in Chicago and the Suburbs",
  subheadline:
    "IHDA down payment assistance. VA loans for Great Lakes and Scott AFB. DSCR investor financing in Cook County's south and west suburbs where rent-to-price math still works.",
  niche: "First-time buyer · VA military lending · DSCR investor financing",
  programs: ["va", "first-time-buyer", "dscr"],
  featuredPostSlugs: [],
  dscr: true,
  stats: [
    { label: "IHDA Access Forgivable down payment assistance", value: "4% of purchase price" },
    { label: "Chicago metro E-5 BAH w/dep (2026)", value: "$2,727/mo" },
    { label: "South suburb median SFR price range", value: "$180K–$280K" },
    { label: "South suburb gross rental yield range", value: "9–12%" },
  ],
  sections: [
    {
      heading: "Illinois as a mortgage market: three distinct demand drivers",
      paragraphs: [
        "Illinois generates mortgage volume from three different buyer profiles. The first is the first-time buyer in the Chicago metropolitan statistical area who needs down payment help — Illinois Housing Development Authority programs, particularly IHDA Access Forgivable, provide 4 percent of the purchase price as a forgivable grant layered on top of FHA or conventional financing. For a $280,000 home that is $11,200 toward down payment and closing costs without repayment obligation if the buyer stays for four years. In a market where the median listing price in Chicago proper sits above $350,000, that gap-filling function is not marginal — it is the difference between qualified and not.",
        "The second buyer profile is military. Naval Station Great Lakes in Lake County is the Navy's only boot camp facility in the country, generating a constant rotation of first-assignment sailors and a stable resident population of permanent-party personnel. Scott Air Force Base in St. Clair County is home to USTRANSCOM and Air Mobility Command — a predominantly officer and senior NCO population with stronger purchasing power. Both installations drive VA loan demand in their respective corridors.",
        "The third profile is the DSCR investor. Chicago's south and southwest suburbs — Harvey, Lansing, Calumet City, Oak Lawn, Evergreen Park — carry acquisition prices between $150,000 and $280,000 with SFR rents of $1,400 to $2,100. At those price points the DSCR math produces ratios that standard programs accept. Chicago proper at $400,000 and above does not pencil at current rates. The investor opportunity in Illinois is a suburban story, not a city story.",
      ],
    },
    {
      heading: "IHDA programs: how down payment assistance layers in Illinois",
      paragraphs: [
        "The Illinois Housing Development Authority operates several down payment assistance programs that layer on top of FHA, conventional, and VA base financing. The most useful for our borrowers is IHDA Access Forgivable: 4 percent of the purchase price provided as a grant, forgivable if the borrower remains in the property for four years. The program requires a minimum 640 credit score, household income at or below area median income limits (which vary by county and household size), and a contribution of at least $1,000 or 1 percent of purchase price from the borrower's own funds.",
        "Illinois also offers the SmartBuy program for borrowers with outstanding student loan balances, providing up to 15 percent of purchase price (capped at $40,000) toward student debt retirement alongside home purchase. The eligibility structure differs from Access Forgivable and the program has income and purchase price caps that limit its geographic applicability. For most Chicago-area first-time buyers without student debt, Access Forgivable is the more accessible option.",
      ],
    },
    {
      heading: "Great Lakes and Scott AFB: VA loan demand in Illinois",
      paragraphs: [
        "Naval Station Great Lakes sits in Lake County north of Chicago, about 40 miles from the Loop. The base generates significant first-assignment housing demand — junior enlisted personnel who complete boot camp and proceed to A-schools are often buying homes in North Chicago, Waukegan, Gurnee, and Libertyville rather than renting. VA loan BAH at the Chicago metro rate ($2,727 per month for E-5 with dependents in 2026) covers the total housing obligation on homes priced $280,000 to $380,000 in the Great Lakes corridor at current rates.",
        "Scott Air Force Base in the Metro East region serves a different population. Senior enlisted and officer personnel assigned to USTRANSCOM and AMC face a more favorable price environment in St. Clair and Monroe Counties — median home prices in O'Fallon, Shiloh, and Mascoutah run $240,000 to $340,000. Scott AFB also borders Missouri, and some personnel buy across state lines in St. Louis County or St. Charles County. Illinois licensing covers the Illinois-side purchase volume.",
      ],
    },
  ],
  faq: [
    {
      q: "Does IHDA down payment assistance work with FHA loans?",
      a: "Yes. IHDA Access Forgivable layers on top of FHA financing, providing 4 percent of the purchase price as a forgivable grant. The FHA base loan handles the 3.5 percent down payment requirement, and IHDA grant funds can cover the down payment plus closing costs depending on the purchase price. The grant is forgiven after four years of owner-occupancy. Income limits and purchase price caps apply by county.",
    },
    {
      q: "Can I use a VA loan at Naval Station Great Lakes?",
      a: "Yes. Active-duty personnel and veterans with available VA entitlement can use VA financing to purchase anywhere within commuting range of Great Lakes. The Chicago metro BAH rate applies. VA loans in Illinois carry no funding fee for veterans rated 10 percent or more service-connected disabled. Cook, Lake, and DuPage County properties are all eligible.",
    },
    {
      q: "What DSCR ratios are achievable in Chicago's south suburbs?",
      a: "In the south and southwest suburban belt — Harvey, Lansing, Calumet City, Matteson, and Oak Lawn — acquisition prices of $180,000 to $280,000 paired with SFR rents of $1,400 to $2,000 produce DSCR ratios of 1.05 to 1.30 at current rates. Cook County property taxes are the most significant variable in Illinois DSCR math. Effective rates in south Cook County run 2.5 to 3.5 percent of assessed value — factoring these correctly before running ratios is essential.",
    },
    {
      q: "Is Derek Huit licensed in Illinois?",
      a: "Yes. Derek Huit, NMLS #203980, holds an Illinois Residential Mortgage License. Cardinal Financial Company, Limited Partnership, NMLS #66247, is the lender. Both can be verified at NMLS Consumer Access.",
    },
  ],
  related: [
    { label: "First-time buyer program details", href: "/programs/first-time-buyer" },
    { label: "VA loan program details", href: "/programs/va" },
    { label: "DSCR loan program details", href: "/programs/dscr" },
    { label: "Start your pre-qualification", href: "https://online.cardinalfinancial.com/#/p/apply/derekhuit" },
  ],
};
