import React from 'react';
import { openCookiePreferences } from '../../lib/cookieConsent';

export const FOOTER_GROUPS = [
  ['Product', [
    ['Fast Invoicing', '/features/lightning-fast-invoicing'], ['Recurring Invoices', '/features/recurring-invoices'],
    ['Inventory Tracking', '/features/inventory-tracking'], ['Payment Follow-Ups', '/features/batch-payment-reminders'],
    ['Sales & Stock Reports', '/features/sales-stock-reports'], ['Import & Export', '/features/import-export-records'],
    ['Document Customization', '/features/document-customization'],
    ['Clients & Services', '/client-management'],
    ['Free Templates', '/invoice-templates'], ['Products & Inventory', '/features/client-management'],
  ]],
  ['Solutions', [
    ['For Businesses', '/for-businesses'],
    ['Freelance Templates', '/templates/freelance'],
  ]],
  ['Company', [
    ['About Invoice Next', '/about'], ['Pricing', '/pricing'], ['Blog & Guides', '/blog'], ['Contact Us', '/contact'],
    ['Help & Support', '/support'], ['FAQs', '/faq'],
  ]],
  ['Legal', [
    ['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms'],
    ['Cookie Policy', '/cookie-policy'], ['Cancellation & Refund Policy', '/refund-policy'], ['Disclaimer', '/disclaimer'],
  ]],
];

export function SiteBrand({ light = false }) {
  return <a href="/" className={`marketing-brand inline-flex items-center gap-2 text-xl font-black tracking-tight ${light ? 'text-white' : 'text-slate-950'}`} aria-label="Invoice Next home"><span className="grid h-9 w-9 place-items-center rounded-xl text-xs text-white">IN</span>Invoice <span>Next</span></a>;
}

export default function SiteFooter() {
  return <footer id="resources" className="bg-[#021a15] text-slate-400">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.45fr_repeat(4,1fr)]">
      <div><SiteBrand light/><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Invoice Next helps freelancers, small businesses, consultants, and professionals create invoices, manage payments, and keep business records organized.</p></div>
      {FOOTER_GROUPS.map(([heading, links]) => <nav key={heading} aria-label={`${heading} footer navigation`}><h2 className="text-sm font-extrabold text-white">{heading}</h2><ul className="mt-5 space-y-3">{links.map(([label, href]) => <li key={href}><a href={href} className="text-sm transition hover:text-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#10b981]">{label}</a></li>)}</ul></nav>)}
    </div>
    <div className="border-t border-emerald-950/60"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs sm:px-8 md:flex-row md:items-center md:justify-between"><span className="text-slate-400">© {new Date().getFullYear()} Invoice Next. All rights reserved.</span><div className="flex flex-wrap gap-5"><a href="/privacy" className="text-slate-400 hover:text-emerald-300 transition-colors">Privacy</a><a href="/terms" className="text-slate-400 hover:text-emerald-300 transition-colors">Terms</a><button type="button" onClick={openCookiePreferences} className="text-slate-400 hover:text-emerald-300 transition-colors">Cookie settings</button></div></div></div>
  </footer>;
}
