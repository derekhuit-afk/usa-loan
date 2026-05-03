import type { Metadata } from 'next';
import { Fraunces, IBM_Plex_Sans } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://usa.loan'),
  title: 'USA.loan — Get Pre-Approved in Minutes | Derek Huit, NMLS #203980',
  description:
    'Mortgage applications made simple. 18 years of experience, $800M+ in loans originated. Powered by Cardinal Financial Company, Limited Partnership (NMLS #66247). Get your free first-time homebuyer playbook.',
  keywords: ['mortgage', 'home loan', 'first-time homebuyer', 'pre-approval', 'refinance', 'VA loan', 'FHA', 'Derek Huit', 'Cardinal Financial'],
  openGraph: {
    title: 'USA.loan — Get Pre-Approved in Minutes',
    description: '18 years. $800M+ originated. Straightforward home loans from Derek Huit, NMLS #203980.',
    url: 'https://usa.loan',
    siteName: 'USA.loan',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
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
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
