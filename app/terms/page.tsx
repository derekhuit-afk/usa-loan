import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use — USA.loan',
  description: 'Terms governing use of USA.loan.',
};

export default function TermsPage() {
  return (
    <main className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link href="/" className="text-[11px] font-semibold uppercase tracking-trackout text-navy/60 hover-underline">
          ← Back to USA.loan
        </Link>
        <h1 className="mt-8 font-display text-5xl font-medium text-navy">Terms of Use</h1>
        <p className="mt-3 text-sm text-navy/60">Last updated: April 2026</p>

        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-ink/80">
          <p>
            Welcome to USA.loan. These Terms of Use (&quot;Terms&quot;) govern your use of this website, operated by Huitai LLC in connection with mortgage services offered by Derek Huit, NMLS #203980, through Cardinal Financial Company, Limited Partnership, NMLS #66247. By using this site, you agree to these Terms.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Not a Commitment to Lend</h2>
          <p>
            Content on this site is for general information. Nothing on this site constitutes a commitment to lend or a guarantee of any specific loan term, rate, or approval. Loans are subject to credit approval, underwriting, appraisal, and program availability. Rates, terms, and programs are subject to change at any time without notice.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Eligibility</h2>
          <p>
            You must be at least 18 years old and legally able to enter a binding contract. This site is directed to U.S. residents outside of New York. <strong>No mortgage applications for properties located in the state of New York will be accepted through this site.</strong>
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Accuracy of Information</h2>
          <p>
            You agree that any information you provide (including identity, income, employment, and contact details) will be truthful and complete. Providing false or misleading information in connection with a mortgage application may be a federal crime.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Third-Party Links and Services</h2>
          <p>
            This site links to third-party services, including Cardinal Financial Company&apos;s application portal. Those services have their own terms and privacy policies. We are not responsible for the content, accuracy, or practices of third-party sites.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Intellectual Property</h2>
          <p>
            All content on this site — copy, design, photographs, and downloadable guides — is owned by Huitai LLC or used under license. You may view and download content for personal use, but may not republish, redistribute, or create derivative works without written permission.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Electronic Communications</h2>
          <p>
            By submitting your contact information, you consent to receive electronic communications from us relating to your inquiry, your application (if any), and our services. You may withdraw consent at any time by following the opt-out instructions in any message, or by contacting us directly.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Disclaimer of Warranties</h2>
          <p>
            This site is provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, express or implied, to the fullest extent permitted by law. We do not warrant that the site will be error-free, uninterrupted, or secure.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, in no event will Huitai LLC or its officers, employees, or affiliates be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of this site.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Alaska, without regard to its conflict-of-laws rules. Any dispute shall be brought in the state or federal courts located in Anchorage, Alaska, and you consent to the personal jurisdiction of those courts.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The &quot;last updated&quot; date at the top reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the revised Terms.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Contact</h2>
          <p>
            For questions about these Terms, contact Derek Huit, NMLS #203980, through the application link on this site. Licensing details:{' '}
            <a className="underline" href="https://www.cardinalfinancial.com/nmls-licensing" target="_blank" rel="noopener">cardinalfinancial.com/nmls-licensing</a>.
          </p>

          <p className="text-xs text-ink/50">
            Powered by Cardinal Financial Company, Limited Partnership | NMLS #66247. Equal Housing Opportunity. Not a commitment to lend.
          </p>
        </div>
      </div>
    </main>
  );
}
