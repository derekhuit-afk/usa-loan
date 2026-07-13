import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Texas Consumer Complaint and Recovery Fund Notice | USA.loan",
  description:
    "Required disclosure for Texas consumers under 7 TAC §81.200(c): how to file a complaint with the Texas Department of Savings and Mortgage Lending and information about the recovery fund.",
  robots: { index: true, follow: true },
};

export default function TexasComplaintNoticePage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-widest text-gold">
          Required Texas Disclosure
        </p>
        <h1 className="font-display text-4xl font-medium leading-tight text-ink md:text-5xl">
          Texas Consumer Complaint and Recovery Fund Notice
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-ink/60">
          The following notice is provided pursuant to Figure: 7 TAC §81.200(c) and applies to
          residential mortgage loan origination activity in the State of Texas. Derek Huit
          (NMLS #203980) originates Texas residential mortgage loans as a licensed residential
          mortgage loan originator sponsored by Cardinal Financial Company, Limited Partnership
          (NMLS #66247), a registered Texas mortgage banker.
        </p>
        <div className="mt-8 border border-navy/20 bg-cream/40 p-6 md:p-8">
          <p className="text-sm font-medium uppercase leading-relaxed tracking-wide text-ink">
            CONSUMERS WISHING TO FILE A COMPLAINT AGAINST A MORTGAGE BANKER OR A LICENSED
            MORTGAGE BANKER RESIDENTIAL MORTGAGE LOAN ORIGINATOR SHOULD COMPLETE AND SEND A
            COMPLAINT FORM TO THE TEXAS DEPARTMENT OF SAVINGS AND MORTGAGE LENDING, 2601 NORTH
            LAMAR, SUITE 201, AUSTIN, TEXAS 78705. COMPLAINT FORMS AND INSTRUCTIONS MAY BE
            OBTAINED FROM THE DEPARTMENT&apos;S WEBSITE AT WWW.SML.TEXAS.GOV. A TOLL-FREE
            CONSUMER HOTLINE IS AVAILABLE AT 1-877-276-5550.
          </p>
          <p className="mt-4 text-sm font-medium uppercase leading-relaxed tracking-wide text-ink">
            THE DEPARTMENT MAINTAINS A RECOVERY FUND TO MAKE PAYMENTS OF CERTAIN ACTUAL OUT OF
            POCKET DAMAGES SUSTAINED BY BORROWERS CAUSED BY ACTS OF LICENSED MORTGAGE BANKER
            RESIDENTIAL MORTGAGE LOAN ORIGINATORS. A WRITTEN APPLICATION FOR REIMBURSEMENT FROM
            THE RECOVERY FUND MUST BE FILED WITH AND INVESTIGATED BY THE DEPARTMENT PRIOR TO
            THE PAYMENT OF A CLAIM. FOR MORE INFORMATION ABOUT THE RECOVERY FUND, PLEASE
            CONSULT THE DEPARTMENT&apos;S WEBSITE AT WWW.SML.TEXAS.GOV.
          </p>
        </div>
        <p className="mt-8 text-xs leading-relaxed text-ink/40">
          Complaint forms and instructions:{" "}
          <a
            href="https://www.sml.texas.gov/consumers/complaints/"
            className="underline hover:text-ink/70"
            rel="noopener noreferrer"
            target="_blank"
          >
            sml.texas.gov/consumers/complaints
          </a>
          . Equal Housing Opportunity. This page is a required regulatory disclosure and is not
          a commitment to lend.
        </p>
      </div>
    </main>
  );
}
