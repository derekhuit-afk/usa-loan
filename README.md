# USA.loan

Mortgage marketing landing page for Derek Huit, NMLS #203980.
Powered by Cardinal Financial Company, Limited Partnership, NMLS #66247.

- **Production:** https://usa.loan
- **Apply URL:** https://online.cardinalfinancial.com/#/p/apply/derekhuit

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (navy + gold + cream palette, Fraunces + IBM Plex)
- Supabase (CRMEX project) for lead storage
- Twilio for SMS lead alerts
- Vercel for hosting

## Environment variables

Set these in Vercel → Project → Settings → Environment Variables.

```
NEXT_PUBLIC_SUPABASE_URL=https://vvkdnzqgtajeouxlliuk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<CRMEX anon>
SUPABASE_SERVICE_ROLE_KEY=<CRMEX service role>
TWILIO_ACCOUNT_SID=<twilio sid>
TWILIO_AUTH_TOKEN=<twilio token>
TWILIO_FROM_NUMBER=<twilio sender e.g. +19075551234>
LEAD_ALERT_TO_NUMBER=<Derek's phone e.g. +19075550000>
LEAD_ALERT_EMAIL=derekhuit@gmail.com
```

## Supabase schema

Run this in the CRMEX SQL editor:

```sql
create table if not exists public.usa_loan_leads (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  name          text not null,
  email         text not null,
  phone         text not null,
  zip           text not null,
  loan_type     text not null default 'exploring',
  source        text,
  ip_address    text,
  user_agent    text,
  tcpa_consent  boolean not null default false,
  terms_consent boolean not null default false,
  contacted_at  timestamptz,
  notes         text
);

create index if not exists usa_loan_leads_created_idx on public.usa_loan_leads (created_at desc);
create index if not exists usa_loan_leads_email_idx   on public.usa_loan_leads (email);

-- Lock down: service role only (no public inserts)
alter table public.usa_loan_leads enable row level security;
-- No policies means nothing except service_role can read/write.
```

## Compliance

Every page includes the required disclosures:

- Derek Huit, NMLS #203980
- Cardinal Financial Company, Limited Partnership, NMLS #66247
- 3701 Arco Corporate Drive, Suite 200, Charlotte, NC 28273
- NMLS Consumer Access link
- State licensing link (cardinalfinancial.com/nmls-licensing)
- Equal Housing Opportunity
- **New York disclaimer:** "Not authorized by the New York State Department of Financial Services. No NY applications accepted."
- "Not a commitment to lend."

The lead form enforces TCPA consent + Privacy/Terms consent (two separate checkboxes, submit disabled until both ticked) and blocks NY ZIPs client-side + server-side.

## Local development

```bash
npm install
cp .env.example .env.local
# fill in the env vars
npm run dev
```

## Rebuild the lead-magnet PDF

```bash
pip install reportlab --break-system-packages
npm run build:pdf
# output → public/guide.pdf
```

## Deploy

Vercel auto-deploys on push to `main`. Domain wired to `usa.loan` via Vercel Domains.

---

© 2026 Huitai LLC. All rights reserved.
