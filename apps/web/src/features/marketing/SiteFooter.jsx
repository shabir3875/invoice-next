import React from 'react';
import { openCookiePreferences } from '../../lib/cookieConsent';

export const FOOTER_GROUPS = [
  ['Product', [
    ['All Features', '/features'], ['Professional Invoices', '/features/professional-invoices'],
    ['Invoice Templates', '/features/invoice-templates'], ['Estimates to Invoices', '/features/estimates-to-invoices'],
    ['Payment Tracking', '/features/payment-tracking'], ['Expense Management', '/features/expense-management'],
    ['Customer Statements', '/features/customer-statements'], ['Business Reports', '/features/business-reports'],
    ['Clients & Services', '/client-management'], ['Invoice Generator', '/invoice-generator'],
    ['Free Templates', '/invoice-templates'], ['Products & Inventory', '/features/client-management'],
  ]],
  ['Solutions', [
    ['Freelancers', '/solutions/freelancers'], ['Small Businesses', '/solutions/small-businesses'],
    ['Consultants', '/solutions/consultants'], ['Lawyers & Legal Firms', '/solutions/legal-firms'],
    ['Accountants', '/solutions/accountants'], ['Contractors', '/solutions/contractors'],
  ]],
  ['Company', [
    ['About Invonxt', '/about'], ['Pricing', '/pricing'], ['Contact Us', '/contact'],
    ['Help & Support', '/support'], ['FAQs', '/faq'],
  ]],
  ['Legal', [
    ['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms'],
    ['Cookie Policy', '/cookie-policy'], ['Cancellation & Refund Policy', '/refund-policy'],
  ]],
];

export function SiteBrand({ light = false }) {
  return <a href="/" className={`marketing-brand inline-flex items-center gap-2 text-xl font-black tracking-tight ${light ? 'text-white' : 'text-slate-950'}`} aria-label="Invonxt home"><span className="grid h-9 w-9 place-items-center rounded-xl text-xs text-white">IN</span>Invo<span>Nxt</span></a>;
}

export default function SiteFooter() {
  return <footer id="resources" className="bg-[#07172c] text-slate-400">
    <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.45fr_repeat(4,1fr)]">
      <div><SiteBrand light/><p className="mt-5 max-w-sm text-sm leading-7">Invonxt helps freelancers, small businesses, consultants, and professionals create invoices, manage payments, and keep business records organized.</p></div>
      {FOOTER_GROUPS.map(([heading, links]) => <nav key={heading} aria-label={`${heading} footer navigation`}><h2 className="text-sm font-extrabold text-white">{heading}</h2><ul className="mt-5 space-y-3">{links.map(([label, href]) => <li key={href}><a href={href} className="text-sm transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400">{label}</a></li>)}</ul></nav>)}
    </div>
    <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs sm:px-8 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} Invonxt. All rights reserved.</span><div className="flex flex-wrap gap-5"><a href="/privacy" className="hover:text-white">Privacy</a><a href="/terms" className="hover:text-white">Terms</a><button type="button" onClick={openCookiePreferences} className="hover:text-white">Cookie settings</button></div></div></div>
  </footer>;
}
