import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, BarChart3, CalendarDays, Check, ChevronDown,
  CircleDollarSign, FileCheck2, FileText, Layers3, Menu, PackageCheck,
  ReceiptText, RefreshCw, Search, ShieldCheck, Tags, Users, WalletCards,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { APP_ROUTES } from './data';
import SiteFooter from './SiteFooter';
import './feature-detail.css';

const FEATURES = [
  {
    slug: 'professional-invoices', short: 'Professional Invoices', category: 'INVOICE CREATION', icon: FileText,
    title: 'Create Professional Invoices That Reflect Your Business',
    description: 'Create branded invoices with customizable templates, your logo, items, taxes, and payment terms. Give every client a polished, professional billing experience.',
    intro: 'Build a complete invoice from reusable business details, then review its totals and prepare a professional PDF for your customer.',
    visual: 'invoice', accent: '#2563eb', appRoute: APP_ROUTES.invoices,
    steps: [['Choose a template','Start with a polished layout designed for clear client billing.'],['Add billing details','Select a customer, products or services, taxes, discounts, and payment terms.'],['Review the totals','Confirm line items, due dates, invoice numbering, and the outstanding amount.'],['Prepare and share','Generate a professional PDF and use your preferred customer communication workflow.']],
    capabilities: [['Customizable templates','Create a consistent invoice presentation for your business.',Layers3],['Business branding','Add company details and your logo to professional documents.',ShieldCheck],['Items, taxes, and discounts','Build clear totals from reusable products and services.',Tags],['Payment tracking','Record full or partial payments and review remaining balances.',WalletCards],['Invoice status','Monitor paid, unpaid, and overdue invoice records.',FileCheck2],['PDF documents','Prepare a printable invoice for customer delivery.',FileText]],
    audiences: [['Freelancers','Create polished invoices for design, writing, development, and other client work.'],['Small businesses','Invoice products and services while keeping customer billing records together.'],['Consultants','Present professional service fees, project terms, and due dates clearly.'],['Legal firms','Create itemized legal-service invoices with client and billing details.']],
    faqs: [['Can I add my business logo?','The invoice workflow supports branded business details and a company logo.'],['Can invoices include taxes and discounts?','Yes. Line items can be presented with applicable taxes, discounts, and calculated totals.'],['Can I record partial payments?','The existing marketing configuration describes recording full and partial payments and reviewing the remaining balance.'],['Can I create a PDF?','The current invoice workflow includes professional printable PDF generation.']],
  },
  {
    slug: 'estimates-to-invoices', short: 'Estimates to Invoices', category: 'DOCUMENT CONVERSION', icon: FileCheck2,
    title: 'Turn Estimates Into Professional Invoices Instantly',
    description: 'Convert estimates, sales orders, and proforma documents into invoice drafts without entering the same information twice. Supported customer details, line items, prices, and terms carry into the draft.',
    intro: 'Move an approved sales document into invoicing while keeping the supported information organized and editable.',
    visual: 'conversion', accent: '#7c3aed', appRoute: APP_ROUTES.documents,
    steps: [['Create the estimate','Add the customer, services, quantities, prices, and terms.'],['Review with your customer','Keep the sales document organized while the work is being considered.'],['Convert the document','Create an editable invoice draft from the supported document details.'],['Review before invoicing','Confirm transferred information and complete the invoice workflow.']],
    capabilities: [['Estimate creation','Prepare clear customer estimates with item and pricing details.',FileText],['Document conversion','Move supported estimates, sales orders, or proformas into invoice drafts.',RefreshCw],['Detail transfer','Reuse supported customer, line-item, price, and term information.',PackageCheck],['Editable drafts','Review and revise the resulting invoice before completion.',FileCheck2],['Status visibility','Keep document and invoice records easier to follow.',Search],['Conversion safeguards','Use the application workflow to avoid unnecessary repeat entry.',ShieldCheck]],
    audiences: [['Freelancers','Convert an approved project estimate into a client invoice draft.'],['Small businesses','Move customer estimates or supported sales documents into invoicing.'],['Consultants','Reuse service details and pricing when a proposal becomes billable.'],['Legal firms','Convert supported legal-service estimates without implying case-management functionality.']],
    faqs: [['Which documents can be converted?','The existing website describes conversion from estimates, sales orders, and proforma documents.'],['Does the original information carry over?','Supported customer, item, price, quantity, and term details can be reused in the invoice draft.'],['Can I edit the invoice afterward?','Yes. The result is described as an editable invoice draft that should be reviewed before completion.'],['What terminology does the workflow use?','Estimate is used consistently for the primary conversion workflow.']],
  },
  {
    slug: 'invoice-templates', short: 'Invoice Templates', category: 'PROFESSIONAL BRANDING', icon: Layers3,
    title: 'Customizable Invoice Templates for Every Business',
    description: 'Choose a professional invoice layout and present your business logo, details, line items, taxes, notes, and payment terms clearly.',
    intro: 'Use the template choices already represented in Invonxt to create a consistent, recognizable customer document.',
    visual: 'invoice', accent: '#2563eb', appRoute: APP_ROUTES.invoices,
    steps: [['Choose a layout','Start with a professional template suited to the document.'],['Add business details','Include your logo, identity, customer information, and document number.'],['Complete invoice fields','Add items, taxes, notes, terms, and due-date information.'],['Review the document','Check the final presentation before generating the supported output.']],
    capabilities: [['Template selection','Choose from the layouts available in the application.',Layers3],['Business identity','Present your logo and company information consistently.',ShieldCheck],['Structured line items','Keep products, services, quantities, and prices readable.',Tags],['Tax and payment fields','Show calculated totals and agreed payment information.',CircleDollarSign],['Invoice notes','Add relevant customer-facing document details.',FileText],['Reusable presentation','Maintain a consistent look across business documents.',FileCheck2]],
    audiences: [['Freelancers','Present creative and professional services consistently.'],['Small businesses','Use recognizable billing documents across products and services.'],['Consultants','Keep project scope, fees, and terms easy to review.'],['Legal firms','Prepare restrained, itemized legal-service invoice layouts.']],
    faqs: [['Can I add a logo?','The invoice workflow supports business branding and logo details.'],['Can I change every part of the layout?','Use the customization controls available in the active application; this page does not claim unrestricted design editing.'],['Can templates include taxes and notes?','The supported invoice structure includes tax, payment, and document-detail fields.'],['Are templates mobile-friendly?','The public preview is responsive, while generated document output should be reviewed before sending.']],
  },
  {
    slug: 'payment-tracking', short: 'Payment Tracking', category: 'INVOICE BALANCES', icon: WalletCards,
    title: 'Track Invoice Payments and Outstanding Balances',
    description: 'Record full or partial payments, review payment history, and keep paid, unpaid, partial, and overdue invoice balances visible.',
    intro: 'Payment tracking records money received against invoices; it does not claim built-in online card processing.',
    visual: 'statements', accent: '#0f766e', appRoute: APP_ROUTES.invoices,
    steps: [['Open the invoice','Select the invoice connected to the payment.'],['Record the amount','Enter the supported payment details and received amount.'],['Update the balance','Review the remaining amount after a full or partial payment.'],['Monitor status','Keep paid, partial, unpaid, and overdue records visible.']],
    capabilities: [['Full payments','Record when the complete invoice balance is received.',CircleDollarSign],['Partial payments','Apply a received amount while preserving the remainder.',WalletCards],['Payment history','Review payment entries connected to billing records.',Layers3],['Outstanding balances','See which customer amounts still require attention.',BarChart3],['Status updates','Keep invoice payment states understandable.',FileCheck2],['Overdue visibility','Identify invoices beyond their due date.',CalendarDays]],
    audiences: [['Freelancers','Monitor client deposits and final project payments.'],['Small businesses','Review customer receipts and outstanding balances.'],['Consultants','Track staged or partial consulting payments.'],['Legal firms','Maintain clear payment records against client invoices.']],
    faqs: [['Can I record partial payments?','Yes. The verified marketing configuration includes full and partial payment records.'],['Does Invonxt process card payments?','This website does not claim built-in online card processing.'],['Can I see the remaining balance?','Payment records are presented with the outstanding invoice balance.'],['Can I review overdue invoices?','The application messaging includes paid, unpaid, partial, and overdue status visibility.']],
  },
  {
    slug: 'expense-management', short: 'Expenses & Insights', category: 'BUSINESS INSIGHTS', icon: BarChart3,
    title: 'Understand Your Expenses. Stay in Control of Your Business.',
    description: 'Track expenses, manage categories, and view revenue, profit, and financial trends in one clear dashboard.',
    intro: 'Turn day-to-day expense records into a clearer view of business costs and overall performance.',
    visual: 'expenses', accent: '#0f766e', appRoute: APP_ROUTES.expenses,
    steps: [['Record an expense','Capture the supplier, category, amount, date, and available reference details.'],['Keep costs organized','Use categories and supplier records to make expenses easier to review.'],['Review business totals','Compare expense activity with revenue and outstanding invoice information.'],['Use the reporting view','Filter activity by date and review the available business summaries.']],
    capabilities: [['Expense recording','Keep business cost records together in one workspace.',ReceiptText],['Categories','Organize expenses into useful business groupings.',Tags],['Supplier records','Associate costs with reusable supplier information.',Users],['Revenue summaries','Review invoice activity alongside business expenses.',CircleDollarSign],['Performance overview','Use dashboard summaries to understand business direction.',BarChart3],['Date-based review','Focus financial activity on the period that matters.',CalendarDays]],
    audiences: [['Freelancers','Monitor project tools, travel, subscriptions, and other business costs.'],['Small businesses','Keep operating expenses and revenue information more organized.'],['Consultants','Review professional income and the costs required to deliver client work.'],['Legal firms','Organize firm expenditure and review high-level financial summaries.']],
    faqs: [['Can expenses be categorized?','The existing site describes recording and categorizing business expenses.'],['Can I manage suppliers?','Supplier records are included in the business-record workflow described by the site.'],['Does the dashboard show profit?','The marketing dashboard presents revenue, expense, balance, and business-performance summaries using demonstration data.'],['Are the figures on this page real?','No. All preview values are fictional demonstration data.']],
  },
  {
    slug: 'recurring-invoices', short: 'Recurring Invoices', category: 'REPEAT BILLING', icon: RefreshCw,
    title: 'Make Repeat Billing Simple and Predictable',
    description: 'Prepare repeat billing details for ongoing services, monthly retainers, and repeat clients. Spend less time rebuilding the same invoice information.',
    intro: 'The repository presents recurring billing records and configurable frequencies. This page does not claim automatic charging or automatic email delivery.',
    visual: 'recurring', accent: '#2563eb', appRoute: APP_ROUTES.invoices, notice: 'Capability note: automatic payment collection and automatic sending are not advertised because they are not verified in this repository.',
    steps: [['Choose a repeat customer','Start with an existing customer and reusable service details.'],['Set the billing frequency','Configure the recurring period shown in the application workflow.'],['Maintain the record','Review active or paused recurring invoice information.'],['Continue invoicing','Use the stored details as part of your repeat billing process.']],
    capabilities: [['Recurring records','Keep repeat billing information organized for ongoing work.',RefreshCw],['Billing frequency','Define the billing period represented by the current application UI.',CalendarDays],['Reusable details','Reuse customer, service, and price information.',Layers3],['Customer history','Keep recurring invoice records connected to customer activity.',Users],['Status management','Review recurring records shown as active or paused.',FileCheck2],['No charging claim','Automatic customer charging is not represented as a verified capability.',ShieldCheck]],
    audiences: [['Freelancers','Prepare repeat details for ongoing monthly clients.'],['Small businesses','Organize recurring service billing records.'],['Consultants','Reuse details for consulting retainers and ongoing engagements.'],['Legal firms','Prepare repeat billing records for supported retainer workflows.']],
    faqs: [['Does Invonxt automatically charge customers?','Automatic charging is not verified in this repository and is not claimed on this page.'],['Does it automatically email every invoice?','Automatic recurring email delivery is not verified here. Use only the sending options available in your active application.'],['Can billing frequency be configured?','The existing product messaging describes setting a billing frequency and managing recurring invoice records.'],['Can recurring records be paused?','The current marketing UI depicts active and paused recurring billing records.']],
  },
  {
    slug: 'client-management', short: 'Clients, Services & More', category: 'BUSINESS RECORDS', icon: Users,
    title: 'Keep Your Clients, Products, and Services Organized',
    description: 'Manage clients, suppliers, products, and services, reuse details, and keep all your business records in one place.',
    intro: 'Build reusable business records so new invoices start with consistent customer, service, and pricing details.',
    visual: 'clients', accent: '#4f46e5', appRoute: APP_ROUTES.customers,
    steps: [['Add a customer','Save contact and billing information for future documents.'],['Create services or products','Keep reusable item names, descriptions, and prices organized.'],['Select saved details','Choose the customer and items when preparing an invoice.'],['Review billing history','Return to customer invoice records and account activity.']],
    capabilities: [['Customer records','Save reusable customer contact and billing information.',Users],['Supplier records','Keep supplier details accessible with other business records.',PackageCheck],['Products and services','Maintain reusable item descriptions and prices.',Tags],['Payment terms','Use consistent billing terms where supported.',CalendarDays],['Billing history','Review customer invoice and payment records.',WalletCards],['Search and filtering','Find the business record needed for the current workflow.',Search]],
    audiences: [['Freelancers','Maintain client contacts and reusable service details.'],['Small businesses','Organize customers, suppliers, products, and services.'],['Consultants','Reuse consulting descriptions, prices, and customer information.'],['Legal firms','Maintain billing contacts and legal-service entries without implying case management.']],
    faqs: [['Can I save customer details?','Yes. The current site describes saved customer information and customer invoice records.'],['Can products and services be reused?','The business-record workflow is designed to keep reusable item and service details available.'],['Does this include legal case management?','No. Invonxt is presented here as a billing and business-record platform, not a legal case-management system.'],['Can I review customer billing history?','The existing product messaging includes customer invoice records and payment history.']],
  },
  {
    slug: 'customer-statements', short: 'Customer Statements', category: 'ACCOUNT ACTIVITY', icon: WalletCards,
    title: 'Professional Customer Statements, Without the Extra Work',
    description: 'Generate professional account statements showing invoices, recorded payments, credits, and outstanding balances. Give clients a clear view of their account activity.',
    intro: 'Bring a customer’s billing records together in a clear account summary prepared for review or printing.',
    visual: 'statements', accent: '#0369a1', appRoute: APP_ROUTES.customers,
    steps: [['Select a customer','Open the customer whose account activity you need to review.'],['Choose the period','Focus the statement on the relevant billing dates where filtering is available.'],['Review account activity','Check invoice entries, recorded payments, credits, and remaining balances.'],['Prepare the statement','Create a professional printable or PDF-ready account summary.']],
    capabilities: [['Account statements','Summarize customer billing activity professionally.',FileText],['Invoice history','Present customer invoices within the selected account view.',Layers3],['Recorded payments','Show payment activity already recorded in the application.',WalletCards],['Outstanding balances','Make remaining customer balances clear.',CircleDollarSign],['Date filtering','Focus statement activity on a useful reporting period.',CalendarDays],['Printable output','Prepare a clear statement for printing or PDF workflow.',FileCheck2]],
    audiences: [['Freelancers','Share account summaries with established repeat clients.'],['Small businesses','Review customer invoices, payments, and remaining balances.'],['Consultants','Summarize consulting invoices and recorded retainer payments.'],['Legal firms','Prepare professional client billing statements and account histories.']],
    faqs: [['What appears on a customer statement?','Statements can summarize customer invoices, recorded payments, supported credits, and outstanding balances.'],['Can statements be filtered by date?','The requested statement workflow includes date-based review where supported by the active application.'],['Can I create a PDF statement?','The page describes printable, PDF-ready statements; use the export options available in your active application.'],['Does a statement change invoice data?','A statement is presented as an account summary of existing billing records.']],
  },
  {
    slug: 'business-reports', short: 'Business Reports', category: 'FINANCIAL VISIBILITY', icon: BarChart3,
    title: 'Understand Your Business with Financial Reports',
    description: 'Review revenue, expenses, invoice status, tax summaries, receivables, and financial trends using clear business reporting views.',
    intro: 'Turn existing invoice, payment, and expense records into useful summaries without presenting Invonxt as a complete accounting platform.',
    visual: 'expenses', accent: '#0f766e', appRoute: APP_ROUTES.dashboard,
    steps: [['Choose a reporting period','Focus on the dates relevant to the business question.'],['Review invoice activity','Compare revenue, receivables, and invoice status.'],['Include business costs','Use recorded expenses and categories in the available summaries.'],['Export where supported','Prepare available spreadsheet data for further review.']],
    capabilities: [['Revenue reports','Review billed and recorded revenue activity.',BarChart3],['Expense reports','Understand categorized business costs.',ReceiptText],['Invoice reports','Monitor statuses and outstanding receivables.',FileText],['Tax summaries','Review supported tax totals from business records.',CircleDollarSign],['Financial charts','See trends using clear dashboard visuals.',Layers3],['Spreadsheet exports','Use supported export options for further analysis.',FileCheck2]],
    audiences: [['Freelancers','Compare invoiced income with project and operating costs.'],['Small businesses','Review revenue, expenses, taxes, and receivables.'],['Consultants','Understand client billing and professional expenses.'],['Accountants','Use available summaries and exports without treating Invonxt as tax-filing software.']],
    faqs: [['Which reports are represented?','The verified product messaging includes invoice, revenue, expense, tax, and receivable summaries.'],['Can data be exported?','The requested and existing reporting workflows include spreadsheet export where supported.'],['Is this full accounting software?','No such claim is made. Invonxt provides invoicing, expense, and business-record summaries.'],['Are preview figures real?','No. Every figure shown on this marketing page is fictional demonstration data.']],
  },
];

export const FEATURE_SLUGS = FEATURES.map(feature => feature.slug);
export const getFeature = slug => FEATURES.find(feature => feature.slug === slug);
const FEATURE_SEO_TITLES = {
  'professional-invoices': 'Professional Invoice Software for Freelancers & Small Businesses',
  'invoice-templates': 'Customizable Invoice Templates for Every Business',
  'estimates-to-invoices': 'Convert Estimates to Invoices in One Click',
  'payment-tracking': 'Track Invoice Payments and Outstanding Balances',
  'expense-management': 'Business Expense Tracking Made Simple',
  'customer-statements': 'Create Professional Customer Account Statements',
  'business-reports': 'Business Financial Reports for Revenue and Expenses',
  'client-management': 'Organize Customers, Products, and Services',
  'recurring-invoices': 'Recurring Invoice Records for Repeat Billing',
};
export const getFeatureSeoTitle = feature => `${FEATURE_SEO_TITLES[feature.slug] || feature.short} | Invonxt`;

function Brand(){return <a href="/" className="fd-brand"><span>IN</span>Invo<b>Nxt</b></a>}

function FeatureHeader(){const[open,setOpen]=React.useState(false);return <header className="fd-header"><div className="fd-nav"><Brand/><nav aria-label="Feature page navigation"><a href="/features">All Features</a><a href="/features/invoice-templates">Templates</a><a href="/pricing">Pricing</a></nav><div className="fd-nav-actions"><a href={APP_ROUTES.login}>Login</a><a href={APP_ROUTES.signup}>Get Started Free</a></div><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label="Toggle navigation"><Menu/></button></div>{open&&<div className="fd-mobile-nav"><a href="/features">All Features</a><a href="/features/invoice-templates">Templates</a><a href={APP_ROUTES.login}>Login</a><a href={APP_ROUTES.signup}>Get Started Free</a></div>}</header>}

function FeatureVisual({type}){
  if(type==='conversion')return <div className="fd-visual fd-conversion"><Document label="ESTIMATE"/><span className="fd-convert-arrow"><ArrowRight/></span><Document label="INVOICE" paid/><div className="fd-visual-note"><Check/> Invoice draft created</div></div>;
  if(type==='expenses')return <div className="fd-visual fd-expenses"><div className="fd-expense-receipt"><ReceiptText/><b>Office supplies</b><span>$184.50</span></div><div className="fd-insight-panel"><header><span>Business overview</span><b>+$8,420</b></header><div className="fd-kpis"><span>Revenue<b>$24.8k</b></span><span>Expenses<b>$7.4k</b></span><span>Profit<b>$17.4k</b></span></div><div className="fd-bars">{[35,52,43,66,59,82,73,94].map((v,i)=><i key={i} style={{height:`${v}%`,'--i':i}}/>)}</div></div></div>;
  if(type==='recurring')return <div className="fd-visual fd-recurring"><div className="fd-calendar"><header><CalendarDays/> Billing calendar</header>{['APR','MAY','JUN'].map((m,i)=><div key={m}><span>{m}<b>{i===0?15:14}</b></span><p>Monthly retainer<small>Northstar Studio</small></p><em>{i===2?'Planned':'Recorded'}</em></div>)}</div><span className="fd-cycle"><RefreshCw/></span></div>;
  if(type==='clients')return <div className="fd-visual fd-clients"><div className="fd-contact-panel"><header><b>Customers</b><span>+ Add</span></header>{[['NS','Northstar Studio'],['AL','Alder Legal'],['HC','Harbor Consulting']].map(x=><div key={x[1]}><span>{x[0]}</span><p><b>{x[1]}</b><small>Billing record</small></p><Check/></div>)}</div><span className="fd-client-arrow"><ArrowRight/></span><div className="fd-service-card"><Tags/><b>Strategy consulting</b><span>$150 / hour</span><em>Added to invoice</em></div></div>;
  if(type==='statements')return <div className="fd-visual fd-statements"><div className="fd-statement"><header><span>IN</span><div><b>ACCOUNT STATEMENT</b><small>Northstar Studio</small></div></header>{[['INV-2018','$1,800','Paid'],['INV-2024','$2,450','Partial'],['PAY-0092','-$1,200','Recorded']].map(x=><div className="fd-statement-row" key={x[0]}><b>{x[0]}</b><span>{x[2]}</span><strong>{x[1]}</strong></div>)}<footer><span>Outstanding balance</span><b>$1,250</b></footer></div><div className="fd-pdf"><FileText/>PDF ready</div></div>;
  return <div className="fd-visual fd-invoice"><Document label="INVOICE" paid/><div className="fd-build-steps"><span><Check/> Logo added</span><span><Check/> Customer selected</span><span><Check/> Totals calculated</span><span><FileText/> PDF ready</span></div></div>;
}

function Document({label,paid=false}){return <div className="fd-document"><header><span>IN</span><div><b>{label}</b><small>#2048 · Northstar Studio</small></div></header><section><div><b>Bill to</b><span>Acme Corporation</span></div><div><b>Due date</b><span>30 Nov 2026</span></div></section><div className="fd-doc-table"><b>Description</b><b>Qty</b><b>Amount</b>{[['Strategy session','1','$1,400'],['Implementation','4','$600']].flatMap((x,i)=>x.map((v,j)=><span key={`${i}-${j}`}>{v}</span>))}</div><footer><span>Total</span><b>$2,000</b></footer>{paid&&<em><Check/> {label==='INVOICE'?'Ready':'Approved'}</em>}</div>}

function FeatureFooter(){return <SiteFooter/>}

export default function FeatureDetailPage({slug:slugProp}){
  const params=useParams();const feature=getFeature(slugProp||params.slug);if(!feature)return <div className="fd-not-found"><h1>Feature not found</h1><a href="/#features">Explore all features</a></div>;
  const index=FEATURES.findIndex(item=>item.slug===feature.slug);const prev=FEATURES[(index-1+FEATURES.length)%FEATURES.length];const next=FEATURES[(index+1)%FEATURES.length];const Icon=feature.icon;
  const canonical=`https://invonxt.com/features/${feature.slug}`;
  const seoTitle=getFeatureSeoTitle(feature);
  return <div className="fd-page"><Helmet><title>{seoTitle}</title><meta name="description" content={feature.description}/></Helmet><Seo title={seoTitle} description={feature.description} url={canonical} image="https://invonxt.com/og-image.png" siteName="Invonxt"/><FeatureHeader/><main>
    <section className="fd-hero"><div className="fd-shell fd-hero-grid"><Reveal className="fd-hero-copy"><a className="fd-back" href="/#features"><ArrowLeft/>All features</a><div className="fd-label"><Icon/>{feature.category}</div><h1>{feature.title}</h1><p>{feature.description}</p>{feature.notice&&<div className="fd-notice"><ShieldCheck/>{feature.notice}</div>}<div className="fd-actions"><a href={APP_ROUTES.signup}>Get Started Free<ArrowRight/></a><a href="/#features">Explore All Features</a></div><div className="fd-trust"><span><Check/>No credit card required</span><span><Check/>Works on every device</span></div></Reveal><Reveal delay={.12} className="fd-hero-visual"><FeatureVisual type={feature.visual}/></Reveal></div></section>
    <section className="fd-section fd-work"><div className="fd-shell"><Reveal className="fd-heading"><span>HOW IT WORKS</span><h2>A clear workflow from start to finish</h2><p>{feature.intro}</p></Reveal><div className="fd-steps">{feature.steps.map(([title,text],i)=><Reveal as="article" delay={i*.08} key={title}><b>{String(i+1).padStart(2,'0')}</b><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="fd-section"><div className="fd-shell"><Reveal className="fd-heading"><span>KEY CAPABILITIES</span><h2>Everything you need for this workflow</h2></Reveal><div className="fd-capabilities">{feature.capabilities.map(([title,text,CardIcon],i)=><Reveal as="article" delay={(i%3)*.06} key={title}><span><CardIcon/></span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
    <section className="fd-section fd-audience-section"><div className="fd-shell fd-audience-grid"><Reveal className="fd-heading fd-heading-left"><span>BUILT FOR YOUR BUSINESS</span><h2>Useful across professional service workflows</h2><p>See how {feature.short.toLowerCase()} supports the way different businesses work.</p></Reveal><div className="fd-audiences">{feature.audiences.map(([title,text],i)=><Reveal as="article" delay={i*.06} key={title}><span>{title[0]}</span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div></div></section>
    <section className="fd-section fd-preview-section"><div className="fd-shell fd-preview-grid"><Reveal><span className="fd-kicker">REALISTIC PRODUCT PREVIEW</span><h2>See the workflow at a glance</h2><p>{feature.intro} All names and financial values shown are fictional demonstration data.</p><ul>{feature.capabilities.slice(0,4).map(([title])=><li key={title}><Check/>{title}</li>)}</ul></Reveal><Reveal delay={.1}><FeatureVisual type={feature.visual}/></Reveal></div></section>
    <section className="fd-section fd-faq"><div className="fd-shell fd-faq-grid"><Reveal className="fd-heading fd-heading-left"><span>FREQUENTLY ASKED QUESTIONS</span><h2>Questions about {feature.short.toLowerCase()}</h2></Reveal><div>{feature.faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>
    <section className="fd-more"><div className="fd-shell"><h2>Explore more InvoNxt features</h2><div><a href={`/features/${prev.slug}`}><ArrowLeft/><span>Previous feature<b>{prev.short}</b></span></a><a href={`/features/${next.slug}`}><span>Next feature<b>{next.short}</b></span><ArrowRight/></a></div></div></section>
    <section className="fd-cta"><div className="fd-shell"><h2>Ready to simplify your invoicing?</h2><p>Create professional invoices, manage clients, and organize your business with InvoNxt.</p><div className="fd-actions"><a href={APP_ROUTES.signup}>Get Started Free<ArrowRight/></a><a href="/#features">Explore More Features</a></div></div></section>
  </main><FeatureFooter/></div>;
}
