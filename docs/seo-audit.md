# Invonxt SEO audit and implementation record

Audit date: 2026-11-07

## Production findings before deployment

The controlled live check followed `robots.txt` and requested only public marketing URLs.

| URL | Live status | Live canonical | Finding |
|---|---:|---|---|
| `/` | 200 | `/` | Homepage was crawlable, but its head contained outdated claims and metadata. |
| `/features` | 200 | `/` | Returned homepage HTML and created a canonical duplicate. |
| `/features/professional-invoices` | 200 | `/` | Returned homepage HTML and created a canonical duplicate. |
| `/about` | 200 | `/about` | Route-specific title existed, but the initial H1 was still the homepage H1. |
| `/pricing` | 200 | `/` | Returned homepage HTML and created a canonical duplicate. |
| `/this-page-should-not-exist-seo-audit` | 200 | `/` | Soft 404: an unknown URL returned the homepage with HTTP 200. |

The live sitemap contained only `https://invonxt.com/`. The live `robots.txt` allowed crawling and referenced the correct sitemap URL.

These live findings require deployment of the generated `dist/apps/web` output before Google can observe the fixes.

## Canonical indexable inventory

| Group | Canonical routes | Primary intent | Indexing |
|---|---|---|---|
| Homepage | `/` | Professional invoicing software | Index |
| Feature directory | `/features` | Invonxt product features | Index |
| Feature pages | `/features/professional-invoices`, `/features/invoice-templates`, `/features/estimates-to-invoices`, `/features/payment-tracking`, `/features/expense-management`, `/features/customer-statements`, `/features/business-reports`, `/features/client-management`, `/features/recurring-invoices` | Feature-specific commercial investigation | Index |
| Solutions | `/solutions/freelancers`, `/solutions/small-businesses`, `/solutions/consultants`, `/solutions/legal-firms`, `/solutions/accountants`, `/solutions/contractors` | Audience-specific invoicing software | Index |
| Company/help | `/pricing`, `/about`, `/contact`, `/support`, `/faq` | Pricing, company, support, and product questions | Index |
| Templates | `/templates/consulting`, `/templates/freelance`, `/templates/law-firm`, `/templates/small-businesses` | Audience-specific invoice templates | Index |
| Legal | `/privacy`, `/terms` | Service policies | Index |
| Review-required drafts | `/cookie-policy`, `/refund-policy` | Draft legal notices | Noindex; excluded from sitemap |
| Typo duplicate | `/template/freeluncer` | Misspelled legacy template URL | Redirect to `/templates/freelance` |
| Private application | `https://app.invonxt.com/*` | Authenticated product workflows | Not included in marketing sitemap |
| Unknown routes | Any ungenerated path | Not found | Real 404 with noindex page |

The machine-readable build inventory is generated at `reports/seo-url-inventory.json` by `npm run audit:seo`.

## Keyword-to-page map

No search volume or difficulty numbers are asserted because no authenticated keyword-data provider or Search Console account was available.

| Page | Primary query theme | Supporting themes |
|---|---|---|
| `/` | professional invoicing software | invoice software for freelancers and small businesses |
| `/features/professional-invoices` | professional invoice software | invoice maker, PDF invoices, branded invoices |
| `/features/invoice-templates` | customizable invoice templates | business invoice templates, branded invoice layout |
| `/features/estimates-to-invoices` | convert estimate to invoice | estimate-to-invoice workflow |
| `/features/payment-tracking` | invoice payment tracking | partial payments, unpaid invoices, outstanding balance |
| `/features/expense-management` | business expense tracking | expense categories, supplier expenses |
| `/features/customer-statements` | customer account statement software | invoice and payment statement |
| `/features/business-reports` | business financial reports | revenue, expense, tax, receivables reports |
| `/features/client-management` | customer and service management | reusable products, services, and client records |
| `/solutions/freelancers` | invoice software for freelancers | freelance client invoicing |
| `/solutions/small-businesses` | small business invoicing software | invoice and expense software |
| `/solutions/consultants` | invoice software for consultants | consulting estimates and invoices |
| `/solutions/legal-firms` | invoice software for law firms | legal-service invoices and statements |
| `/solutions/accountants` | invoicing and expense tools for accountants | client statements and exports |
| `/solutions/contractors` | estimate and invoice software for contractors | project estimates and partial payments |
| `/templates/freelance` | freelancer invoice template | self-employed invoice template |
| `/templates/consulting` | consulting invoice template | consultant billing template |
| `/templates/law-firm` | legal services invoice template | lawyer invoice template |

## Competitor and intent observations

A limited check of official competitor landing pages showed that Zoho Invoice, Invoice Ninja, and Wave lead with simple invoicing outcomes and small-business relevance. Invonxt should compete through specific, verifiable workflows rather than broad unsupported claims: estimate conversion, customer statements, partial-payment records, expense organization, and reusable client/service data.

Recommended original content priorities:

1. `/guides/convert-estimate-to-invoice` — explain what carries over, what should be reviewed, and how duplicate conversion is avoided.
2. `/guides/track-partial-invoice-payments` — explain partial-payment records and remaining balances without implying payment processing.
3. `/guides/create-customer-account-statement` — explain invoice, payment, credit, and balance entries.
4. `/guides/organize-small-business-expenses` — explain categories, suppliers, reporting periods, and exports.

These are recommendations only; thin articles were not automatically published.

## Technical changes implemented

- Route-specific static HTML, metadata, canonicals, and H1 content for every sitemap URL.
- Build-time sitemap generation from the canonical route inventories.
- Source modification dates used for sitemap `lastmod` values.
- Real static 404 document and Apache rules that do not rewrite every unknown URL to the homepage.
- Corrected the misspelled freelance-template route with a canonical redirect.
- Removed unsupported online-payment claims, fabricated article dates, unverified social handles, and invisible FAQ schema.
- Removed unconditional Google Analytics loading; tracking must be added only behind verified consent controls.
- Page-specific WebPage and BreadcrumbList JSON-LD in prerendered HTML.
- Route-level code splitting for feature, public, template, and application-shell pages.
- Crawlable header, footer, related-feature, and solution links.
- A repeatable local SEO audit command covering sitemap files, titles, descriptions, H1s, canonicals, robots directives, JSON-LD, duplicate titles, and internal-link discovery.

## Search Console status and deployment checklist

The repository contains a Google site-verification token, but no authenticated Search Console API/session was available. Therefore no clicks, impressions, CTR, positions, coverage data, or sitemap submission status were claimed.

After deploying the current build:

1. Verify that `/features`, `/pricing`, and a feature-detail URL return their own initial HTML and canonical.
2. Verify that a random nonexistent path returns HTTP 404.
3. Submit `https://invonxt.com/sitemap.xml` in Search Console.
4. Inspect the homepage, `/features`, `/features/professional-invoices`, `/solutions/freelancers`, `/pricing`, and `/templates/freelance`.
5. Request indexing manually for those priority URLs after live inspection succeeds.
6. Review Page Indexing and Core Web Vitals reports after Google recrawls the deployment.

Google's standard URL Inspection workflow must be used for ordinary marketing pages; the Indexing API must not be used for these URLs.
