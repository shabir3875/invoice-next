# Invonxt SEO growth implementation report

Date: 2026-11-08

## Scope and architecture

Invonxt's marketing repository is a React 18/Vite static site. React Router handles navigation and the build prerenders every indexable route to route-specific HTML. The authenticated product is hosted separately at `app.invonxt.com`; this repository contains no product backend or database. The canonical marketing origin is `https://invonxt.com` because the existing server policy permanently redirects `www` to the apex host.

## Audit baseline

- 29 canonical indexable pages existed before this implementation.
- Requested generator, exact template, feature landing, blog, and measured SEO dashboard routes were absent.
- Coolify's Nginx SPA fallback returned the homepage with status 200 for unknown paths, creating soft 404s.
- The Apache legacy typo redirect was not implemented in the Coolify Nginx image.
- Existing indexed pages generally had titles, descriptions, canonicals, one H1, social metadata, and prerendered copy.
- FAQPage markup was present even though Google retired FAQ rich results in 2026.
- Analytics consent primitives existed, but GA4 and conversion events were not implemented.
- No test suite existed. A build-time SEO auditor covered only part of the required checks.

## Implemented changes

- Added and prerendered all 15 requested commercial landing pages.
- Added responsive breadcrumb navigation, semantic sections, one H1, useful unique copy, visible FAQs, illustrations with dimensions and alt text, contextual links, and CTAs.
- Added a six-category blog hub, a transparent 30-topic editorial plan, and five original cornerstone articles.
- Added Article and BreadcrumbList JSON-LD to published guides. Retained Organization, WebSite, SoftwareApplication, WebPage, and breadcrumb markup elsewhere.
- Removed FAQPage generation while retaining useful visible FAQ content.
- Added consent-gated GA4 loading through `VITE_GA4_ID` and labeled `cta_click` events without collecting invoice or client data.
- Added a generated, noindex admin SEO dashboard at `/admin/seo/`. It reports build measurements only.
- Expanded the build audit to check one H1, image alt text, broken internal links, metadata, duplicates, canonicals, sitemap files, and JSON-LD validity.
- Added every canonical public route to the generated sitemap.
- Fixed Coolify Nginx to return real 404 responses and permanently redirect the misspelled legacy template URL.
- Improved header/footer links to point at crawlable generator, template, client, and recurring-invoice pages.

## Keyword-to-URL map

No search volume, difficulty, traffic, or ranking values are asserted because no authenticated keyword provider or Search Console property was available.

| Primary intent | Canonical URL |
|---|---|
| Free invoice templates | `/invoice-templates` |
| Free invoice generator | `/free-invoice-generator` |
| Online invoice maker / PDF invoice generator / create invoice online | `/invoice-generator` |
| Freelancer invoice template | `/freelancer-invoice-template` |
| Self-employed invoice template | `/self-employed-invoice-template` |
| Consultant invoice template | `/consultant-invoice-template` |
| Accountant invoice template | `/accountant-invoice-template` |
| Business invoice template | `/business-invoice-template` |
| Contractor invoice template | `/contractor-invoice-template` |
| Recurring invoices | `/recurring-invoices` |
| Client management | `/client-management` |
| Invoice customization | `/invoice-customization` |
| Multi-currency invoicing | `/multi-currency-invoicing` |
| Invoice management | `/invoice-management` |
| Invoice reports | `/invoice-reports` |
| How to create an invoice | `/blog/how-to-create-an-invoice` |
| How to write an invoice | `/blog/how-to-write-an-invoice` |
| Invoice vs receipt | `/blog/invoice-vs-receipt` |
| Invoice payment terms | `/blog/invoice-payment-terms` |
| How to invoice international clients | `/blog/how-to-invoice-international-clients` |

Existing feature and solution pages continue targeting professional invoices, estimate conversion, payment tracking, expenses, statements, business reports, freelancers, consultants, accountants, legal firms, contractors, and small businesses.

## Competitor strategy

Invoice Simple combines a usable generator with substantial instructional content and a broad template taxonomy. Invonxt should not copy that execution. Its defensible content clusters should instead demonstrate verified workflows: saved clients/items, estimate conversion, partial-payment records, customer statements, recurring billing, multi-currency documents, expenses, and reporting. Next Invoice was not accessible to the controlled research client, so no claims are made about its current implementation.

## Performance report

- Production entry JavaScript: 375.05 kB raw / 119.97 kB gzip.
- Main CSS: 152.00 kB raw / 28.48 kB gzip.
- New landing chunk: 6.46 kB raw / 2.18 kB gzip.
- New blog chunk: 14.93 kB raw / 5.23 kB gzip.
- Existing route-level code splitting is preserved.
- New below-fold illustrations use lazy loading; the hero illustration is prioritized and all added images have intrinsic dimensions.
- Existing WebP assets are reused. Several legacy PNG assets remain between roughly 1.5 MB and 2.1 MB and should be converted after visual regression review.
- No laboratory or field LCP, INP, or CLS values are claimed. Measure these on the deployed origin with PageSpeed Insights and Search Console Core Web Vitals.

## Verification results

- Production build: passed.
- Prerender: passed for 49 sitemap routes.
- SEO audit: passed with 0 issues.
- Missing metadata: 0.
- Duplicate titles: 0.
- Missing descriptions: 0.
- Broken internal links: 0.
- Canonical mismatches: 0.
- Structured-data parse failures: 0.
- Missing image alt text in sitemap pages: 0.
- Sitemap generated: 49 canonical URLs.
- Scoped and repository lint: blocked by the managed Windows filesystem because the existing ESLint import resolver attempts to scan `C:\Users\ABC` outside the workspace. Production compilation still passed.
- Backend tests: not applicable; no backend is present in this repository.
- Automated browser/mobile visual testing: no browser test framework exists; responsive behavior is implemented with the existing Tailwind breakpoints and should receive device QA after deployment.

## Search Console and GA4 handoff

1. Deploy and verify that representative public routes return their own HTML and status 200.
2. Verify a random unknown URL returns 404 and `/template/freeluncer` returns 301.
3. Add the production GA4 measurement ID as `VITE_GA4_ID`, rebuild, and verify consent behavior in DebugView.
4. Submit `https://invonxt.com/sitemap.xml` in the verified Search Console property.
5. Inspect the homepage, generator, template hub, one commercial landing page, blog hub, and one article.
6. Monitor Page Indexing, sitemap processing, Search performance, and Core Web Vitals. Do not interpret sitemap submission as an indexing guarantee.

## Remaining recommendations

- Complete expert review and full drafting for the remaining 25 editorial topics before making them individual indexable URLs.
- Add Playwright route/status, metadata, structured-data, and mobile viewport tests.
- Convert remaining oversized PNGs to responsive AVIF/WebP sources after visual QA.
- Protect `/admin/seo/` at the hosting layer if operational access must be restricted; it is currently noindex and contains only non-sensitive build measurements.
- Connect Search Console and GA4 only after ownership, consent, and data-retention settings are confirmed.
- Validate live JSON-LD with Google's Rich Results Test after deployment; local validation confirms syntactically valid JSON only.
