import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Seo from '../../components/Seo';
import { APP_ROUTES } from './data';
import ScreenshotFreelancePage from './ScreenshotFreelancePage';
import MarketingHeader from './MarketingHeader';

export const templatePages = {
  '/templates/consulting': {
    name: 'Consulting',
    eyebrow: 'Consulting invoice template',
    headline: 'Professional invoices for every client engagement',
    description: 'Present strategy, advisory and project work clearly with a polished consulting invoice built for retainers, milestones and hourly services.',
    features: ['Itemize advisory services and project phases', 'Add hourly rates, retainers and milestone fees', 'Keep payment terms and client details clear'],
    accent: 'from-blue-600 to-cyan-500',
  },
  '/templates/freelance': {
    name: 'Freelance',
    seoTitle: 'Freelance Invoice Templates | Free Invoice Maker | Invoice Next',
    seoDescription: 'Create a professional freelance invoice with six polished templates and an easy invoice maker for freelancers and self-employed professionals.',
    trailingSlash: true,
    faq: [
      ['What is a freelance invoice used for?', 'A freelance invoice gives your client a clear record of the services or deliverables provided, the amount due, the payment deadline, and your payment instructions.'],
      ['How do I write a freelance invoice?', 'Add your business and client details, a unique invoice number, issue and due dates, an itemized description of the work, rates, totals, and clear payment instructions.'],
      ['What should a freelance invoice template include?', 'Include contact details for both parties, invoice dates and number, itemized services, subtotal and total, payment terms, and space for notes.'],
    ],
    eyebrow: 'Freelance invoice template',
    headline: 'A simpler way to invoice your freelance work',
    description: 'Turn completed projects into clear, professional invoices that make your scope, pricing and payment expectations easy to understand.',
    features: ['Bill fixed-price or hourly projects', 'Show deposits, discounts and remaining balances', 'Reuse client and service details'],
    accent: 'from-violet-600 to-blue-500',
  },
  '/templates/law-firm': {
    name: 'Law Firm',
    eyebrow: 'Law firm invoice template',
    headline: 'Clear billing for legal services and matters',
    description: 'Organize professional fees and reimbursable costs in a structured invoice designed for legal practices and client matters.',
    features: ['Separate professional fees and expenses', 'Describe services with dates and matter details', 'Present totals and payment terms professionally'],
    accent: 'from-slate-800 to-blue-700',
  },
  '/templates/small-businesses': {
    name: 'Small Businesses',
    eyebrow: 'Small business invoice template',
    headline: 'Reliable invoices for everyday business',
    description: 'Create branded, easy-to-read invoices for products and services without spending valuable time formatting documents from scratch.',
    features: ['Add products, services, taxes and discounts', 'Keep customer information organized', 'Download or share professional invoices'],
    accent: 'from-emerald-600 to-cyan-500',
  },
};

function Brand() {
  return <a href="/" className="flex items-center gap-2.5 text-xl font-black tracking-[-.04em] text-slate-950"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/20">IN</span>Invoice <span className="text-blue-500">Next</span></a>;
}

function InvoicePreview({ accent }) {
  return <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,.16)]"><div className="rounded-2xl border border-slate-200 p-7 sm:p-10"><div className={`h-2 w-24 rounded-full bg-gradient-to-r ${accent}`}/><div className="mt-7 flex items-start justify-between gap-6"><div><div className="text-2xl font-black text-slate-950">INVOICE</div><div className="mt-2 text-xs text-slate-400">#INV-2048</div></div><div className="text-right"><div className="font-black text-slate-900">Your Business</div><div className="mt-1 text-xs leading-5 text-slate-400">business@example.com<br/>+1 234 567 890</div></div></div><div className="mt-10 grid grid-cols-2 gap-8 border-y border-slate-100 py-6 text-xs"><div><div className="font-extrabold uppercase tracking-wider text-slate-400">Bill to</div><div className="mt-2 font-bold text-slate-800">Client Company</div><div className="mt-1 text-slate-500">client@example.com</div></div><div className="text-right"><div className="font-extrabold uppercase tracking-wider text-slate-400">Amount due</div><div className="mt-2 text-2xl font-black text-slate-950">$2,450.00</div><div className="mt-1 text-slate-500">Due in 14 days</div></div></div><div className="mt-7 space-y-4">{[['Professional services','1','$2,000.00'],['Project expenses','1','$450.00']].map(row=><div key={row[0]} className="grid grid-cols-[1fr_40px_100px] border-b border-slate-100 pb-4 text-sm"><span className="font-semibold text-slate-700">{row[0]}</span><span className="text-center text-slate-400">{row[1]}</span><span className="text-right font-bold text-slate-900">{row[2]}</span></div>)}</div><div className={`mt-7 flex items-center justify-between rounded-xl bg-gradient-to-r ${accent} px-5 py-4 text-white`}><span className="font-bold">Total due</span><span className="text-xl font-black">$2,450.00</span></div></div></div>;
}

const freelanceTemplates = [
  ['Modern Template', 'bg-blue-600', 'border-blue-600'],
  ['Letterhead Style Template', 'bg-indigo-700', 'border-indigo-700'],
  ['Classic', 'bg-slate-800', 'border-slate-800'],
  ['Printer Friendly', 'bg-slate-500', 'border-slate-500'],
  ['Wide Margin Template', 'bg-cyan-600', 'border-cyan-600'],
  ['Modern II', 'bg-violet-600', 'border-violet-600'],
];

function MiniTemplate({ title, color, border }) {
  return <article><div className="overflow-hidden rounded-sm border border-slate-200 bg-white p-4 shadow-[0_8px_30px_rgba(15,23,42,.08)]"><div className={`h-2 w-full ${color}`}/><div className="mt-5 flex justify-between"><div className="text-lg font-black tracking-wide text-slate-800">INVOICE</div><div className="space-y-1 text-right"><div className="ml-auto h-1.5 w-16 bg-slate-300"/><div className="ml-auto h-1.5 w-11 bg-slate-200"/></div></div><div className="mt-5 grid grid-cols-2 gap-8"><div className="space-y-1.5"><div className="h-1.5 w-9 bg-slate-300"/><div className="h-1.5 w-20 bg-slate-200"/><div className="h-1.5 w-14 bg-slate-200"/></div><div className="space-y-1.5"><div className="ml-auto h-1.5 w-10 bg-slate-300"/><div className="ml-auto h-1.5 w-16 bg-slate-200"/><div className="ml-auto h-1.5 w-12 bg-slate-200"/></div></div><div className={`mt-6 grid grid-cols-[1fr_40px_70px] border-b-2 ${border} pb-2 text-[7px] font-bold uppercase text-slate-500`}><span>Description</span><span>Qty</span><span className="text-right">Amount</span></div>{[1,2,3,4].map(i=><div key={i} className="grid grid-cols-[1fr_40px_70px] border-b border-slate-100 py-2"><span className="h-1.5 w-20 bg-slate-200"/><span className="h-1.5 w-3 bg-slate-200"/><span className="ml-auto h-1.5 w-10 bg-slate-300"/></div>)}<div className="mt-4 ml-auto w-32 space-y-2"><div className="flex justify-between"><span className="h-1.5 w-10 bg-slate-200"/><span className="h-1.5 w-12 bg-slate-300"/></div><div className={`flex justify-between px-2 py-2 ${color}`}><span className="h-1.5 w-8 bg-white/70"/><span className="h-1.5 w-10 bg-white"/></div></div></div><h3 className="mt-5 text-xl font-extrabold text-slate-900">{title}</h3><div className="mt-3 flex gap-4 text-sm font-bold"><a href={APP_ROUTES.signup} className="text-blue-700 hover:underline">Excel</a><a href={APP_ROUTES.signup} className="text-blue-700 hover:underline">Word</a><a href={APP_ROUTES.signup} className="text-blue-700 hover:underline">PDF</a></div></article>;
}

function BlueCta({ heading = 'Create your first invoice free with our Online Invoice Generator.' }) {
  return <section className="relative overflow-hidden bg-[#0b65d8] py-14 text-white"><div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#fff_1.2px,transparent_1.2px)] [background-size:17px_17px]"/><div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 px-5 text-center md:flex-row md:text-left"><h2 className="max-w-3xl text-3xl font-black leading-tight sm:text-4xl">{heading}</h2><a href={APP_ROUTES.signup} className="shrink-0 rounded-md bg-white px-7 py-4 text-sm font-extrabold text-blue-700 shadow-lg">Try It Free</a></div></section>;
}

function FreelanceReferencePage({ routePath }) {
  const title = 'Free Freelance Invoice Templates | Invoice Next';
  const faqs = [
    ['What is a freelance invoice used for?', 'A freelance invoice records the work you completed, the amount your client owes, the payment deadline and the methods they can use to pay.'],
    ['How do I write a freelance invoice?', 'Add your contact details, your client, a unique invoice number, dates, an itemized list of services, rates, totals and clear payment terms.'],
    ['What should a freelance invoice template include?', 'Include the work performed, hours or quantity, your rate, taxes or discounts, the total due and instructions for payment.'],
    ['How can I create professional self-employed invoices?', 'Use a consistent branded template, describe each deliverable clearly and keep customer and payment records organized in one place.'],
  ];
  return <div className="min-h-screen bg-white text-slate-900"><Helmet><title>{title}</title><meta name="description" content="Create, customize and send professional freelance invoice templates for free with Invoice Next."/></Helmet><Seo title={title} description="Create, customize and send professional freelance invoice templates for free with Invoice Next." url={`https://invonxt.com${routePath}`} image="https://invonxt.com/og-image.png" siteName="Invoice Next"/><MarketingHeader/><main><section className="relative overflow-hidden bg-[#f5f8fc] py-20 sm:py-28"><div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle,#a8bdd7_1.2px,transparent_1.2px)] [background-size:20px_20px]"/><div className="relative mx-auto max-w-4xl px-5 text-center"><div className="text-sm font-extrabold uppercase tracking-[.18em] text-blue-700">Free invoice templates</div><h1 className="mt-5 text-4xl font-black tracking-[-.04em] text-slate-950 sm:text-6xl">Freelance Invoice Templates</h1><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Freelancers need an easy, professional way to bill for completed work. Create a freelance invoice that fits your services, clearly communicates what is due, and helps you get paid faster.</p><a href={APP_ROUTES.signup} className="mt-9 inline-flex rounded-md bg-blue-600 px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20">Create Custom Invoice</a></div></section><section className="py-20 sm:py-28"><div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="text-center"><h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Downloadable Freelance Invoice Templates</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Choose a design, customize it with your details, and send a polished invoice to your client.</p></div><div className="mt-14 grid gap-x-9 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">{freelanceTemplates.map(template=><MiniTemplate key={template[0]} title={template[0]} color={template[1]} border={template[2]}/>)}</div><p className="mx-auto mt-16 max-w-4xl text-center text-base leading-8 text-slate-600">Use any of these flexible layouts as a starting point, or open the Invoice Next invoice generator to build a custom invoice for your freelance business.</p></div></section><BlueCta/><section className="py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr]"><div><div className="sticky top-8 rounded-2xl bg-blue-50 p-8"><div className="text-sm font-extrabold uppercase tracking-wider text-blue-700">Built for independents</div><h2 className="mt-4 text-3xl font-black text-slate-950">Benefits of a Self-Employed Invoice Template</h2></div></div><div><p className="text-lg leading-8 text-slate-600">A reusable invoice template gives your freelance business a professional, consistent billing process. It saves time and keeps your records easier to understand.</p><ul className="mt-8 space-y-5">{['Save time by reusing the same professional layout.','Stay organized for expenses and taxes.','Give every client a polished, trustworthy experience.','Outline services and deliverables clearly.','Build a reliable foundation as your business grows.'].map(item=><li key={item} className="flex gap-4 text-base font-semibold text-slate-700"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-600 text-white"><Check size={15}/></span>{item}</li>)}</ul><h2 className="mt-16 text-3xl font-black text-slate-950">Why should I use a freelance invoice template?</h2><p className="mt-5 text-base leading-8 text-slate-600">Freelance invoicing is more than sending a payment address. A well-designed invoice protects the professional impression you created through your communication and your work. It also makes the scope, price and due date easy for your client to verify.</p><h2 className="mt-16 text-3xl font-black text-slate-950">How are freelancer templates different?</h2><p className="mt-5 text-base leading-8 text-slate-600">Freelancers may charge by the hour, project, deliverable or milestone. These templates leave room for the billing details that matter without adding fields you do not need.</p></div></div></section><section className="bg-slate-50 py-20 sm:py-28"><div className="mx-auto max-w-5xl px-5 sm:px-8"><h2 className="text-center text-4xl font-black text-slate-950">How can I get paid?</h2><div className="mt-12 grid gap-6 md:grid-cols-3">{[['1','Choose a payment method','Select the bank, card or online payment options that work for your business.'],['2','Set clear payment terms','State the due date, accepted methods and any necessary payment details.'],['3','Send and follow up','Share the invoice promptly and keep track of outstanding balances.']].map(([num,heading,text])=><article key={num} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><span className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-lg font-black text-white">{num}</span><h3 className="mt-6 text-xl font-black">{heading}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section><section className="py-20 sm:py-28"><div className="mx-auto max-w-4xl px-5 sm:px-8"><h2 className="text-center text-4xl font-black text-slate-950">FAQ</h2><div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question,answer])=><details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-slate-900">{question}<span className="text-2xl text-blue-600 group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{answer}</p></details>)}</div></div></section><BlueCta heading="Get Started for Free"/></main><footer className="bg-[#07172c] px-5 py-12 text-center text-sm text-slate-400"><Brand/><p className="mt-5">Professional invoicing for freelancers and small businesses.</p><p className="mt-8">© {new Date().getFullYear()} Invoice Next. All rights reserved.</p></footer></div>;
}

export default function TemplatePage({ routePath }) {
  if (routePath === '/templates/freelance') return <ScreenshotFreelancePage/>;
  const page = templatePages[routePath];
  const title = `${page.name} Invoice Template | Invoice Next`;
  return <div className="min-h-screen bg-white text-slate-900"><Helmet><title>{title}</title><meta name="description" content={page.description}/></Helmet><Seo title={title} description={page.description} url={`https://invonxt.com${routePath}`} image="https://invonxt.com/og-image.png" siteName="Invoice Next"/><MarketingHeader/><main><section className="overflow-hidden bg-[radial-gradient(circle_at_80%_10%,#dbeafe_0,transparent_35%),linear-gradient(180deg,#f8fbff,#fff)] py-20 sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2"><div><a href="/#templates" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700"><ArrowLeft size={16}/>All templates</a><div className="mt-8 text-xs font-extrabold uppercase tracking-[.18em] text-blue-600">{page.eyebrow}</div><h1 className="mt-4 text-4xl font-black leading-tight tracking-[-.045em] text-slate-950 sm:text-6xl">{page.headline}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{page.description}</p><ul className="mt-7 space-y-3">{page.features.map(feature=><li key={feature} className="flex items-center gap-3 text-sm font-bold text-slate-700"><span className="grid h-7 w-7 place-items-center rounded-full bg-blue-50 text-blue-600"><Check size={15}/></span>{feature}</li>)}</ul><a href={APP_ROUTES.signup} className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-extrabold text-white shadow-lg shadow-blue-600/20">Use this template<ArrowRight size={18}/></a></div><InvoicePreview accent={page.accent}/></div></section><section className="bg-[#f7f9fc] py-20"><div className="mx-auto max-w-4xl px-5 text-center sm:px-8"><h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Ready to create your {page.name.toLowerCase()} invoice?</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">Start with this layout, add your business details, and create a polished invoice in minutes.</p><a href={APP_ROUTES.signup} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-extrabold text-white">Get Started Free<ArrowRight size={17}/></a></div></section></main><footer className="bg-[#07172c] px-5 py-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Invoice Next. All rights reserved.</footer></div>;
}
