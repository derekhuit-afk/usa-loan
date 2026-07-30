export default function ComplianceFooter({ extra }: { extra?: string }) {
  return (
    <div className="border-t border-navy/10 bg-white px-6 py-8 md:px-10">
      <div className="mx-auto max-w-6xl text-xs leading-relaxed text-ink/40">
        <p>
          Derek Huit, NMLS #203980 (
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/203980"
            className="underline hover:text-ink/70"
            target="_blank"
            rel="noopener noreferrer"
          >
            NMLS Consumer Access
          </a>
          ), is licensed to originate mortgage loans in Alaska, Florida, Georgia, Illinois, Indiana, Michigan,
          Montana, Oklahoma, Texas, and Washington. Cardinal Financial Company, Limited Partnership, NMLS #66247 (
          <a
            href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/66247"
            className="underline hover:text-ink/70"
            target="_blank"
            rel="noopener noreferrer"
          >
            NMLS Consumer Access
          </a>
          ), holds state licenses as described at{" "}
          <a
            href="https://www.cardinalfinancial.com/nmls-licensing"
            className="underline hover:text-ink/70"
            target="_blank"
            rel="noopener noreferrer"
          >
            cardinalfinancial.com/nmls-licensing
          </a>
          . Equal Housing Opportunity.
        </p>
        <p className="mt-3">
          USA.loan is a private website operated by a licensed mortgage loan originator and is not a government
          agency. It is not affiliated with, endorsed by, or sponsored by the U.S. government, the Department of
          Veterans Affairs, HUD, FHA, USDA, or any other federal or state agency. Texas consumers:{" "}
          <a href="/texas-complaint-notice" className="underline hover:text-ink/70">
            Texas Consumer Complaint and Recovery Fund Notice
          </a>
          .
        </p>
        <p className="mt-3">
          This is not a commitment to lend. All loans subject to credit approval, underwriting, and appraisal.
          Rates, terms, and programs are subject to change at any time without notice. Not all applicants will
          qualify. This site is not authorized by the New York State Department of Financial Services. No mortgage
          loan applications for properties located in the state of New York will be accepted through this site.
          {extra ? " " + extra : ""}
        </p>
        <p className="mt-3">
          <a href="/privacy" className="underline hover:text-ink/70">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms" className="underline hover:text-ink/70">
            Terms of Use
          </a>
          {" | "}
          <a href="/texas-complaint-notice" className="underline hover:text-ink/70">
            Texas Complaint Notice
          </a>
        </p>
      </div>
    </div>
  );
}
