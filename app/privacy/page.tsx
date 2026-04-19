import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — USA.loan',
  description: 'How USA.loan collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link href="/" className="text-[11px] font-semibold uppercase tracking-trackout text-navy/60 hover-underline">
          ← Back to USA.loan
        </Link>
        <h1 className="mt-8 font-display text-5xl font-medium text-navy">Privacy Policy</h1>
        <p className="mt-3 text-sm text-navy/60">Last updated: April 2026</p>

        <div className="prose-content mt-10 space-y-6 text-[15px] leading-relaxed text-ink/80">
          <p>
            USA.loan (&quot;we,&quot; &quot;us&quot;) is operated by Huitai LLC in connection with mortgage services provided through Derek Huit, NMLS #203980, and Cardinal Financial Company, Limited Partnership, NMLS #66247. This Privacy Policy explains what information we collect, how we use it, and your choices.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Information We Collect</h2>
          <p>When you request our free homebuyer guide or otherwise interact with this site, we may collect:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name, email address, phone number, and ZIP code you submit.</li>
            <li>Your stated loan intent (purchase, refinance, VA, etc.).</li>
            <li>IP address, browser user agent, referrer, and pages viewed (logged via standard web analytics).</li>
            <li>Time and date of submissions and your consent choices.</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-navy">How We Use Your Information</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Deliver the free guide or other resources you requested.</li>
            <li>Contact you about mortgage products and services by email, phone, or SMS, consistent with your consent.</li>
            <li>Process any mortgage application you choose to submit through Cardinal Financial Company.</li>
            <li>Comply with applicable legal, regulatory, and licensing obligations.</li>
            <li>Improve site performance and security.</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-navy">SMS and Call Consent (TCPA)</h2>
          <p>
            If you check the TCPA consent box and submit the form, you agree to receive calls and text messages (including autodialed or prerecorded messages) and emails from Derek Huit and Cardinal Financial Company, Limited Partnership at the number and address provided. Consent is not a condition of any purchase. Message and data rates may apply. You can reply STOP to opt out of SMS at any time, or contact us to opt out of email or calls.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Sharing of Information</h2>
          <p>We do not sell your personal information. We share information only with:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cardinal Financial Company, Limited Partnership, to process any application you initiate.</li>
            <li>Service providers who help us operate this site and its communication tools (e.g., database, SMS, email delivery vendors), under confidentiality obligations.</li>
            <li>Law enforcement or regulators where required by law.</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-navy">Data Security</h2>
          <p>
            We use reasonable technical and organizational safeguards to protect your information. No system is perfectly secure, and you acknowledge the inherent risk of transmitting information over the internet.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Your Choices</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Opt out of SMS:</strong> reply STOP to any message.</li>
            <li><strong>Opt out of email:</strong> click the unsubscribe link in any email, or email us directly.</li>
            <li><strong>Request deletion or correction:</strong> contact us and we will respond consistent with applicable law.</li>
          </ul>

          <h2 className="font-display text-2xl font-medium text-navy">State Disclosures</h2>
          <p>
            This site is <strong>not authorized</strong> by the New York State Department of Financial Services. No mortgage loan applications for properties located in the state of New York will be accepted through this site. California, Texas, and other state residents may have additional rights; those rights are honored as required by applicable law.
          </p>

          <h2 className="font-display text-2xl font-medium text-navy">Contact</h2>
          <p>
            Questions about this policy? Contact Derek Huit, NMLS #203980, through the application link on this site, or review licensing at{' '}
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
