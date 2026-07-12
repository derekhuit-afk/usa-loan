import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

const LO_STATES = ['Alaska', 'Florida', 'Georgia', 'Illinois', 'Indiana', 'Michigan', 'Montana', 'Oklahoma', 'Texas', 'Washington'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FinancialService',
      '@id': 'https://usa.loan/#service',
      name: 'USA.loan',
      url: 'https://usa.loan',
      description:
        'Direct mortgage lending from Derek Huit, NMLS #203980, personally licensed in 10 states. Loans originated through Cardinal Financial Company, Limited Partnership, NMLS #66247.',
      areaServed: LO_STATES.map((s) => ({ '@type': 'State', name: s })),
      provider: {
        '@type': 'Person',
        name: 'Derek Huit',
        identifier: 'NMLS #203980',
        jobTitle: 'Loan Officer',
        worksFor: {
          '@type': 'Organization',
          name: 'Cardinal Financial Company, Limited Partnership',
          identifier: 'NMLS #66247',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '3701 Arco Corporate Drive, Suite 200',
            addressLocality: 'Charlotte',
            addressRegion: 'NC',
            postalCode: '28273',
            addressCountry: 'US',
          },
        },
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://usa.loan'),
  title: 'USA.loan — Get Pre-Approved in Minutes | Derek Huit, NMLS #203980',
  description:
    'Direct mortgage lending from Derek Huit, NMLS #203980, personally licensed in AK, FL, GA, IL, IN, MI, MT, OK, TX & WA. 18 years, hundreds of millions closed. Loans through Cardinal Financial, NMLS #66247, licensed in 49 states.',
  keywords: [
    'mortgage',
    'home loan',
    'first-time homebuyer',
    'pre-approval',
    'refinance',
    'VA loan',
    'FHA',
    'Derek Huit',
    'Cardinal Financial',
  ],
  openGraph: {
    title: 'USA.loan — Get Pre-Approved in Minutes',
    description:
      '18 years. Hundreds of millions closed. Direct home loans from Derek Huit, NMLS #203980, personally licensed in 10 states.',
    url: 'https://usa.loan',
    siteName: 'USA.loan',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'USA.loan — Derek Huit, NMLS #203980' }],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A2540',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
