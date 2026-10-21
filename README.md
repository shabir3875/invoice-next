# Invoice Next — Simple Invoicing for Small Businesses

[![Website](https://img.shields.io/badge/Website-invonxt.com-FF5500?style=for-the-badge)](https://invonxt.com/)
[![Web App](https://img.shields.io/badge/Launch_App-app.invonxt.com-10B981?style=for-the-badge)](https://app.invonxt.com/)

**Invoice Next** ([invonxt.com](https://invonxt.com/)) is a simple online invoicing software and small business billing platform designed for freelancers, agencies, and small businesses to create, send, and track professional invoices in under 60 seconds.

---

## Key Features

- **Dashboard Overview:** Real-time visibility into paid totals, pending balances, overdue invoices, and revenue trends.
- **Online Invoicing:** Create and send invoices online via email or shareable payment links in 60 seconds.
- **Expense Tracking:** Record and categorize business expenses alongside client billing.
- **Document & Quote Management:** Manage unlimited invoices, quotes, and stock documents in one place.
- **Partners & Items:** Organize client contacts, partner companies, and reusable product/service catalogs.
- **Cross-Platform & Secure:** Works across Web, iOS, and Android with bank-grade 256-bit encryption and 99.9% uptime.

---

## Tech Stack & Architecture

- **Frontend:** React 18, Vite 8, Tailwind CSS 3, Radix UI, Framer Motion, Lucide Icons
- **SEO & GEO Optimization:**
  - Build-time Static Site Prerendering (SSG) via [`apps/web/tools/prerender.js`](apps/web/tools/prerender.js)
  - Automated `llms.txt` machine-readable index generation via [`apps/web/tools/generate-llms.js`](apps/web/tools/generate-llms.js)
  - Unified JSON-LD `@graph` (`Organization`, `WebSite`, `WebPage`, `SoftwareApplication`, `FAQPage`)
  - Open Graph (`1200×630` social preview) & Twitter/X Card metadata
  - Automated `sitemap.xml` `<lastmod>` synchronization

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Run production build + llms.txt generation + static SSR prerendering
npm run build

# Preview production build locally
npm start
```

---

## Official Links

- **Marketing Website:** [https://invonxt.com/](https://invonxt.com/)
- **Web Application:** [https://app.invonxt.com/](https://app.invonxt.com/)
- **Machine-Readable Index:** [https://invonxt.com/llms.txt](https://invonxt.com/llms.txt)
- **XML Sitemap:** [https://invonxt.com/sitemap.xml](https://invonxt.com/sitemap.xml)
