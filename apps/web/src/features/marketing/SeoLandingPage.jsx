import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Check } from 'lucide-react';
import Seo from '../../components/Seo';
import MarketingHeader from './MarketingHeader';
import SiteFooter from './SiteFooter';
import { APP_ROUTES } from './data';
import { SEO_PAGES } from './seo-pages';

export default function SeoLandingPage({ routePath }) {
  const page = SEO_PAGES[routePath];
  if (!page) return null;
  const url = `https://invonxt.com${routePath}`;
  const schema = {'@context':'https://schema.org','@graph':[
    {'@type':'WebPage','@id':`${url}#webpage`,url,name:page.title,description:page.description,isPartOf:{'@id':'https://invonxt.com/#website'},inLanguage:'en'},
    {'@type':'BreadcrumbList',itemListElement:[['Home','https://invonxt.com/'],[page.h1,url]].map(([name,item],i)=>({'@type':'ListItem',position:i+1,name,item}))},
  ]};
  const faqs = [
    [`What should this page's invoice include?`, 'Include your business and client details, a unique invoice number, issue and due dates, itemized products or services, applicable taxes or discounts, the total due, and clear payment instructions.'],
    ['Can I use Invonxt for repeat clients?', 'Yes. Invonxt is designed to keep reusable client, product, and service details organized for future documents.'],
    ['Does Invonxt process client payments?', 'No. Add the external payment method agreed with your client, then record received payments in your invoicing workflow.'],
  ];
  return <div className="min-h-screen bg-white text-slate-900"><Helmet><title>{page.title}</title><meta name="description" content={page.description}/><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet><Seo title={page.title} description={page.description} url={url} siteName="Invonxt"/><MarketingHeader/><main>
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-7 text-sm text-slate-500 sm:px-8"><a href="/" className="hover:text-blue-700">Home</a><span aria-hidden="true"> / </span><span>{page.h1}</span></nav>
    <section className="py-16 sm:py-24"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-[.18em] text-blue-700">Professional invoicing resource</p><h1 className="mt-4 text-4xl font-black tracking-[-.045em] text-slate-950 sm:text-6xl">{page.h1}</h1><p className="mt-6 text-lg leading-8 text-slate-600">{page.intro}</p><a data-analytics-event="cta_click" data-analytics-label={routePath} href={APP_ROUTES.signup} className="mt-8 inline-flex min-h-13 items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-extrabold text-white">Create Invoice<ArrowRight size={17}/></a></div><img src="/invonxt-invoice-creation-workspace-green.webp" width="1200" height="800" loading="eager" fetchpriority="high" alt={`Invonxt workspace illustrating ${page.h1.toLowerCase()}`} className="w-full rounded-3xl border border-slate-200 shadow-xl"/></div></section>
    <section className="bg-slate-50 py-16 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="text-3xl font-black text-slate-950">Benefits for a practical billing workflow</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{page.benefits.map(x=><article key={x} className="rounded-2xl border border-slate-200 bg-white p-6"><Check className="text-blue-600"/><h3 className="mt-4 text-lg font-black">{x}</h3><p className="mt-3 text-sm leading-7 text-slate-600">Use a consistent process that keeps invoice information clear for both your business and your client.</p></article>)}</div></div></section>
    <section className="py-16 sm:py-20"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2"><div><h2 className="text-3xl font-black">When to use it</h2><ul className="mt-6 space-y-4">{page.uses.map(x=><li key={x} className="flex gap-3 text-slate-700"><Check className="shrink-0 text-blue-600" size={20}/><span>{x}</span></li>)}</ul><h2 className="mt-12 text-3xl font-black">Before you send an invoice</h2><p className="mt-5 leading-8 text-slate-600">Confirm the client name, invoice number, dates, currency, line items, calculations, tax treatment, payment instructions, and terms. Requirements vary by location and business type, so check the rules that apply to your transaction.</p></div><img src="/invonxt-invoice-workflow-infographic-green.webp" width="1200" height="800" loading="lazy" alt="Invoice workflow from document creation to external payment record" className="w-full rounded-3xl border border-slate-200"/></div></section>
    <section className="bg-slate-50 py-16"><div className="mx-auto max-w-4xl px-5 sm:px-8"><h2 className="text-3xl font-black">Frequently asked questions</h2><div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-extrabold">{q}</summary><p className="mt-3 leading-7 text-slate-600">{a}</p></details>)}</div></div></section>
    <section className="py-16"><div className="mx-auto max-w-7xl px-5 sm:px-8"><h2 className="text-3xl font-black">Related invoicing resources</h2><div className="mt-7 grid gap-4 md:grid-cols-3">{page.related.map(([label,href])=><a key={href} href={href} className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 font-extrabold hover:border-blue-400">{label}<ArrowRight size={18}/></a>)}</div></div></section>
    <section className="bg-blue-700 py-16 text-center text-white"><div className="mx-auto max-w-3xl px-5"><h2 className="text-3xl font-black sm:text-4xl">Create your next invoice with Invonxt</h2><p className="mt-4 text-blue-100">Add your real business and client information, review the document, and keep the invoice record organized.</p><a data-analytics-event="cta_click" data-analytics-label={`${routePath}:final`} href={APP_ROUTES.signup} className="mt-7 inline-flex rounded-xl bg-white px-7 py-3 font-extrabold text-blue-800">Create Invoice</a></div></section>
  </main><SiteFooter/></div>;
}
