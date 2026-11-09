import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import { ArrowRight, BarChart3, Check, ChevronDown, ReceiptText, Users } from 'lucide-react';
import Seo from '../../components/Seo';
import { APP_ROUTES } from './data';
import { PREMIUM_FEATURES, PREMIUM_PLANS } from '../app-components/plans';
import SiteFooter from './SiteFooter';
import MarketingHeader from './MarketingHeader';
import PrivacyPolicy from './PrivacyPolicy';
import DisclaimerPage from './DisclaimerPage';
import './public-pages.css';
import './verified-features.css';

const FEATURE_LINKS = [
  ['Fast Invoicing','/features/lightning-fast-invoicing','Create and deliver professional invoices through one focused workflow.'],
  ['Repeat Invoices','/features/recurring-invoices','Understand repeat billing and the planned scheduling workflow.'],
  ['Document Customization','/features/document-customization','Present consistent business details with reusable layouts.'],
  ['Estimates to Invoices','/features/estimates-to-invoices','Reuse supported estimate details in an editable invoice draft.'],
  ['Payment Tracking','/features/payment-tracking','Record full or partial payments and review outstanding balances.'],
  ['Batch Payment Reminders','/features/batch-payment-reminders','Understand the planned batch follow-up workflow and available statement tools.'],
  ['Inventory Tracking','/features/inventory-tracking','Monitor stock, projected availability, and reorder levels.'],
  ['Sales and Stock Reports','/features/sales-stock-reports','Review product sales, inventory value, and leading records.'],
  ['Import and Export','/features/import-export-records','Move supported business data and understand planned imports.'],
  ['Document Customization','/features/document-customization','Adjust line items, discounts, taxes, fees, and supported documents.'],
  ['Customer Statements','/features/customer-statements','Summarize invoices, recorded payments, and balances.'],
  ['Clients & Services','/features/client-management','Reuse customer, supplier, product, and service details.'],
  ['Products & Inventory','/features/client-management','Manage reusable items, stock levels, reorder points, and availability.'],
];

const VERIFIED_FEATURE_GROUPS = [
  ['Dashboard & reporting', 'Understand performance, cash flow, tax, and customer activity.', [
    'Business performance overview with preset and custom reporting periods',
    'Income, expense, and profit-margin analysis',
    'Cash-basis and accrual-basis profit-and-loss reports',
    'Tax statistics, itemized tax totals, destination tax, and sales-exposure reports',
    'Outstanding receivables and partner balances',
    'Top products, items, customers, partners, and quotes',
    'PDF tax and profit-and-loss exports plus XLSX invoiced-versus-received export',
    'Customer statements that can be emailed with attachments',
  ]],
  ['Invoices', 'Create the document, share it securely, and follow its complete payment history.', [
    'Create, edit, list, filter, sort, and delete invoices',
    'Custom invoice numbers, prefixes, numbering rules, and yearly restart behavior',
    'Saved customers and products, multiple line items, quantities, prices, taxes, fees, and discounts',
    'Item-level or subtotal discounts, payment terms, due dates, notes, and conditions',
    'Create, update, and remove partial or complete payment entries',
    'Draft, unpaid, partially paid, paid, overdue, and void status handling',
    'Email delivery with attachments and visible email status information',
    'Secure public links, customer-facing shared views, PDF downloads, and printing',
    'Invoice audit history and payment-linked activity records',
    'Inventory availability checks, low-stock warnings, and stock adjustment from invoiced quantities',
    'Selectable invoice templates with saved active-template configuration',
  ]],
  ['Expenses', 'Keep supplier costs, payment activity, and exports connected.', [
    'Create, view, update, filter, and delete expenses with supplier and line-item details',
    'Taxes, totals, payment status, due dates, discounts, and receipt references',
    'Create, edit, and remove expense payments or mark an expense paid',
    'Duplicate or void an expense',
    'Print expenses and export an individual expense as PDF',
    'Export filtered expense records to XLSX',
    'Convert an expense into an invoice',
  ]],
  ['Business documents', 'Manage commercial documents before and alongside invoicing.', [
    'Create and manage quotes, orders, delivery documents, purchase documents, and custom categories',
    'Add line items, quantities, taxes, discounts, fees, dates, and notes',
    'Update document status, including fulfilled workflows',
    'Convert supported documents into invoices',
    'Create secure sharing links and download or print shared PDFs',
    'Create and remove custom document categories',
  ]],
  ['Customers & suppliers', 'Keep partner details, balances, documents, and account history together.', [
    'Manage customers and suppliers with detailed contacts, addresses, tax IDs, payment methods, and notes',
    'Assign custom partner categories',
    'Search, filter, sort, and paginate partner records',
    'Review partner details, transactions, overdue amounts, and outstanding balances',
    'Generate statements filtered by status and date',
    'Export partner data and account statements',
    'Archive and restore partner records',
    'Create a partner without leaving invoice preparation',
  ]],
  ['Products, services & inventory', 'Reuse item details while keeping stock implications visible.', [
    'Manage products and services with sale and purchase prices',
    'Units, categories, images, tax rates, weights, descriptions, and notes',
    'Optional inventory management per item',
    'Opening stock, current stock, reorder levels, and projected availability',
    'Low-stock and negative projected-inventory detection',
    'Search, sort, filter, and paginate item records',
    'XLSX item export plus archive and restore workflows',
    'Custom units and multi-level item categories',
  ]],
  ['Taxes & payment methods', 'Configure how tax and payment choices appear across business records.', [
    'Create custom tax rates and combined tax groups',
    'Configure net or gross tax display and tax-registration details',
    'Enable or disable expense taxes',
    'Create and edit payment methods',
    'Configure automatic-payment behavior and default due periods',
  ]],
  ['Company, localization & setup', 'Adapt documents and defaults to the company operating the workspace.', [
    'Company profile, identity, contact, and registration details',
    'Country, language, currency, and zero-to-four decimal places',
    'Invoice numbering, yearly restart, and voucher-number behavior',
    'Invoice templates, branding, item, partner, and document settings',
    'Guided setup for company details, partners, items, templates, and the first invoice',
    'Optional starter customers, suppliers, services, and images for a new account',
  ]],
  ['Team & access control', 'Invite coworkers and limit access by business area.', [
    'Invite users by email and accept invitations through secure tokens',
    'Resend pending invitations and remove workspace users',
    'Control access to invoices, expenses, settings, reports, and other areas',
    'Account profile and password management',
  ]],
  ['Authentication & security', 'Protect account onboarding and authenticated application access.', [
    'Registration and password login',
    'Email verification with one-time codes',
    'Email-based password reset',
    'Google and Microsoft OAuth sign-in',
    'JWT-authenticated API sessions, logout, and profile controls',
    'Subscription and permission middleware around protected business routes',
  ]],
  ['Subscriptions & administration', 'Track access periods and review manual subscription payments.', [
    'Monthly, annual, and two-year plans with free-trial status',
    'Manual subscription-payment submission and payment history',
    'Cancellation and subscription-status handling',
    'Administrative review queue',
    'Verify, activate, reject, expire, or cancel subscriptions',
    'Super-administrator review workspace',
  ]],
  ['Data management & usability', 'Work efficiently across large record sets and different devices.', [
    'XLSX exports, PDF generation, printing, and browser downloads',
    'Search, filters, sorting, date ranges, and pagination across major records',
    'Responsive collapsible navigation with keyboard shortcut and saved preference',
    'Notifications, account controls, and persistent workspace navigation',
    'Import/export settings areas and guided starter data',
  ]],
];

const SOLUTIONS = {
  freelancers: { title:'Invoicing Software Built for Freelancers', description:'Create professional client invoices, prepare project estimates, record payments, and organize business expenses without relying on disconnected spreadsheets.', challenges:['Turning completed work into a clear, professional invoice','Keeping client details and reusable services organized','Knowing which project balances are still outstanding'], benefits:['Branded PDF-ready invoices','Project estimates and invoice drafts','Full and partial payment records','Client and expense organization'], example:'A freelance designer selects a saved client, adds a reusable design service, applies the agreed payment terms, and produces a client-ready invoice.', related:['/features/lightning-fast-invoicing','/features/document-customization','/features/payment-tracking'] },
  'small-businesses': { title:'Simple Invoicing and Business Management for Small Businesses', description:'Bring customers, suppliers, products, invoices, expenses, and financial summaries into one practical business workspace.', challenges:['Maintaining accurate customer and supplier records','Keeping sales documents and expenses organized','Understanding revenue and outstanding invoice balances'], benefits:['Customer and supplier records','Product and service catalog','Invoices, estimates, and expenses','Business reports and account statements'], example:'A small service business reuses a customer and catalog item, creates an invoice, records a partial payment, and reviews the remaining balance.', related:['/features/client-management','/features/inventory-tracking','/features/sales-stock-reports'] },
  consultants: { title:'Professional Invoicing Software for Consultants', description:'Prepare service estimates, create polished consulting invoices, reuse service details, and keep client balances visible.', challenges:['Presenting service scope and pricing clearly','Converting approved work into billing documents','Summarizing longer client billing relationships'], benefits:['Consulting estimates','Estimate-to-invoice conversion','Reusable services and payment terms','Customer statements and payment records'], example:'A consultant converts an approved service estimate into an editable invoice draft, confirms the carried-over terms, and shares the completed document.', related:['/features/estimates-to-invoices','/features/customer-statements','/features/payment-tracking'] },
  'legal-firms': { title:'Professional Invoicing and Client Billing for Legal Firms', description:'Create itemized legal-service invoices, maintain client billing records, record payments, and produce clear account statements.', challenges:['Presenting legal-service charges professionally','Keeping client billing contacts and records accessible','Explaining invoices, payments, and outstanding balances'], benefits:['Itemized professional invoices','Client billing records','Recorded payment history','Customer account statements'], example:'A legal-services firm selects a client, adds supported service entries, creates an itemized invoice, and later generates an account statement.', related:['/features/lightning-fast-invoicing','/features/client-management','/features/customer-statements'], note:'Invoice Next is presented here as invoicing software, not case-management, trust-accounting, or legal-compliance software.' },
  accountants: { title:'Professional Invoicing and Expense Tools for Accountants', description:'Organize client invoices, expense records, statements, tax summaries, and spreadsheet-ready reports in one workspace.', challenges:['Keeping billing and expense records consistent','Reviewing client balances and payment history','Preparing useful summaries without overstating accounting scope'], benefits:['Invoice and expense records','Customer statements','Revenue and tax summaries','Data export workflows'], example:'An accountant reviews a client’s invoice activity, recorded payments, categorized expenses, and available financial summaries before export.', related:['/features/sales-stock-reports','/features/import-export-records','/features/customer-statements'], note:'Invoice Next is not described as a complete accounting or tax-filing platform.' },
  contractors: { title:'Estimate and Invoice Software for Contractors', description:'Create project estimates, convert approved details into invoice drafts, reuse products and services, and monitor payment status.', challenges:['Preparing clear project estimates','Avoiding duplicate entry after customer approval','Tracking deposits, partial payments, and remaining balances'], benefits:['Project estimates','Estimate-to-invoice conversion','Taxes, discounts, products, and services','Payment and customer records'], example:'A contractor prepares a project estimate, converts it to an invoice draft, verifies materials and service pricing, and records the customer’s payment.', related:['/features/estimates-to-invoices','/features/payment-tracking','/features/client-management'] },
};

const COMPANY = {
  about:{title:'About Invoice Next',description:'Invoice Next is a professional invoicing and business-record workspace built for freelancers, small businesses, consultants, contractors, and professional service providers.',sections:[['What Invoice Next helps you do','Create invoices and estimates, organize customers and services, record expenses and payments, and review useful business summaries.'],['Designed to stay straightforward','The interface brings common billing records together so users can move from customer details to a completed document with less repeated entry.'],['Built for professional presentation','Reusable business information, structured documents, PDF-ready outputs, and status tracking help businesses communicate clearly with customers.']]},
  contact:{title:'Contact Invoice Next',description:'Get product and account assistance through the verified support entry point in the Invoice Next application.',sections:[['Product and account support','Open the Invoice Next application to access the support options associated with your account.'],['Before contacting support','Include the affected workflow, document type, and a clear description of what happened. Do not send passwords or sensitive payment credentials.']]},
  support:{title:'Invoice Next Help & Support',description:'Find clear starting points for the most common Invoice Next workflows.',sections:[['Getting started','Set up your business details, customers, products, services, taxes, and document preferences.'],['Invoices and estimates','Create documents, review totals and terms, generate supported outputs, and convert eligible business documents.'],['Payments and expenses','Record full or partial invoice payments, review balances, and categorize supplier expenses.'],['Statements and settings','Generate customer account summaries and keep business and document settings current.']]},
};

const FAQS = [
  ['What can I manage in Invoice Next?','Invoice Next brings invoices, estimates, supported business documents, customers, suppliers, products, services, expenses, payments, statements, and reports into one workspace.'],
  ['Can I convert an estimate into an invoice?','Yes. Supported estimate information can be reused in an editable invoice draft so it can be reviewed before completion.'],
  ['Can I record a partial payment?','The application advertises full and partial payment records and shows the remaining invoice balance.'],
  ['Does Invoice Next process card payments?','This website does not claim built-in online card processing. Payment tracking refers to recording and monitoring payments.'],
  ['Can I download invoice documents?','The invoicing workflow supports professional PDF-ready documents and available sharing options.'],
  ['Does Invoice Next create recurring invoices automatically?','No recurring-invoice scheduler was verified in the audited application repository. Saved customers, products, services, terms, and templates still reduce repeat data entry.'],
];

const LEGAL = {
  privacy:{title:'Privacy Policy',description:'Review the current Invoice Next privacy notice and how privacy questions should be handled.',body:['This public page is a review-required policy notice. The service owner must confirm the final production data practices, processors, retention periods, international transfers, and user-rights process before treating it as finalized legal advice.','Invoice Next necessarily processes account and business information entered by users to provide invoicing and record-management functionality. Access controls—not search-engine directives—must protect private application information.','For verified privacy requests, use the support options available within the Invoice Next application.']},
  terms:{title:'Terms & Conditions',description:'Review the current Invoice Next service-terms notice.',body:['This is a review-required service-terms draft, not a substitute for owner and legal approval. Final terms must reflect the operating entity, governing law, payment provider, service availability, acceptable use, liability, and termination procedures.','Users remain responsible for checking their business documents, taxes, prices, customer information, and applicable professional obligations before issuing documents.']},
  'cookie-policy':{title:'Cookie Policy',description:'Understand the cookie controls currently represented in the Invoice Next website.',body:['This review-required notice reflects the repository’s consent mechanism. A consent cookie stores selected categories, while analytics or advertising scripts must remain gated behind the relevant consent category.','The production owner must confirm the exact analytics, advertising, session, and infrastructure cookies in use before publication. Visitors can reopen cookie settings from the footer.']},
  'refund-policy':{title:'Cancellation & Refund Policy',description:'Review the current Invoice Next cancellation and refund policy notice.',body:['This page is intentionally marked for owner and legal review. The repository verifies monthly, 12-month, and 24-month subscription periods, but it does not provide enough authoritative information to publish a binding refund policy.','The final policy must be aligned with the payment provider, checkout disclosures, applicable consumer law, renewal behavior, and the actual cancellation process.']},
};

export const PUBLIC_ROUTES = ['/pricing','/about','/contact','/support','/faq','/privacy','/terms','/cookie-policy','/refund-policy','/disclaimer',...Object.keys(SOLUTIONS).map(x=>`/solutions/${x}`)];
export function getPublicRoute(path){
  if(path==='/pricing')return {kind:'pricing',title:'Invoice Next Pricing',description:'Compare verified Invoice Next monthly, annual, and 24-month subscription options and included premium features.'};
  if(path==='/faq')return {kind:'faq',title:'Invoice Next Frequently Asked Questions',description:'Get clear answers about Invoice Next invoices, estimates, payments, expenses, statements, reports, inventory, and account access.'};
  if(path==='/disclaimer')return {kind:'disclaimer',title:'Disclaimer',description:'Read the Invoice Next website disclaimer covering informational content, external links, professional advice, and use at your own risk.'};
  if(path.startsWith('/solutions/')){const slug=path.split('/').pop();const d=SOLUTIONS[slug];return d?{kind:'solution',slug,title:d.title,description:d.description}:null}
  const key=path.slice(1);if(COMPANY[key])return {kind:key,title:COMPANY[key].title,description:COMPANY[key].description};
  if(LEGAL[key])return {kind:key,title:LEGAL[key].title,description:LEGAL[key].description,noindex:key==='cookie-policy'||key==='refund-policy'};
  return null;
}

function Schema({title,description,url,type='WebPage'}){const data={'@context':'https://schema.org','@type':type,name:title,description,url,isPartOf:{'@type':'WebSite',name:'Invoice Next',url:'https://invonxt.com/'}};return <Helmet><script type="application/ld+json">{JSON.stringify(data)}</script></Helmet>}
function Meta({title,description,path,noindex=false}){const full=`${title} | Invoice Next`;const url=`https://invonxt.com${path}`;return <><Helmet><title>{full}</title><meta name="description" content={description}/></Helmet><Seo title={full} description={description} url={url} siteName="Invoice Next" robots={noindex?'noindex, follow':'index, follow, max-image-preview:large'}/><Schema title={title} description={description} url={url}/></>}
function Hero({eyebrow,title,description,note}){return <section className="pp-hero"><div className="pp-shell pp-hero-grid"><div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p>{note&&<small>{note}</small>}<div className="pp-hero-actions"><a href={APP_ROUTES.signup}>Get Started Free <ArrowRight/></a></div></div><WorkflowVisual/></div></section>}
function WorkflowVisual(){return <div className="pp-workflow" aria-label="Illustrative Invoice Next workflow"><div className="pp-kpis"><span><small>Revenue</small><b>$18,640</b></span><span><small>Outstanding</small><b>$2,450</b></span></div><div className="pp-document"><header><span>IN</span><b>INVOICE</b></header><i/><i/><div><span>Professional services</span><b>$2,000</b></div><footer><span>Total</span><b>$2,000</b></footer></div><div className="pp-status"><Check/>Payment recorded</div></div>}
function Cards({items}){return <div className="pp-cards">{items.map((item,i)=><article key={item[0]} style={{'--delay':`${i*.05}s`}}><span>{i+1}</span><h3>{item[0]}</h3><p>{item[1]}</p>{item[2]&&<a href={item[1]}>Learn more <ArrowRight/></a>}</article>)}</div>}
function CTA(){return <section className="pp-cta"><h2>Ready to simplify your business records?</h2><p>Create professional documents, organize customers, and keep invoice activity clear with Invoice Next.</p><div><a href={APP_ROUTES.signup}>Get Started Free</a></div></section>}

function SolutionPage({slug}){const d=SOLUTIONS[slug];if(!d)return <NotFound/>;return <><Meta title={d.title} description={d.description} path={`/solutions/${slug}`}/><Hero eyebrow="SOLUTIONS" title={d.title} description={d.description} note={d.note}/><main className="pp-main"><section className="pp-two"><div className="pp-heading"><span>BUSINESS CHALLENGES</span><h2>Keep everyday billing work under control</h2></div><Cards items={d.challenges.map(x=>[x,'Use a clear, reusable workflow to reduce repeated entry and keep the related record accessible.'])}/></section><section className="pp-tint"><div className="pp-heading"><span>HOW INVONXT HELPS</span><h2>Relevant tools for this workflow</h2></div><Cards items={d.benefits.map(x=>[x,'Use the supported Invoice Next record and document tools from the same business workspace.'])}/></section><section className="pp-example"><div><span>WORKFLOW EXAMPLE</span><h2>A realistic path from details to a clear record</h2><p>{d.example}</p></div><WorkflowVisual/></section><section><div className="pp-heading"><span>RELATED FEATURES</span><h2>Continue exploring</h2></div><div className="pp-related">{d.related.map(path=>{const f=FEATURE_LINKS.find(x=>x[1]===path);return <a href={path} key={path}>{f?.[0]||'Invoice Next feature'}<ArrowRight/></a>})}</div></section></main><FAQBlock items={FAQS.slice(0,4)}/><CTA/></>}
function PricingPage(){return <><Meta title="Invoice Next Pricing" description="Compare verified Invoice Next monthly, annual, and 24-month subscription options and included premium features." path="/pricing"/><Hero eyebrow="VERIFIED PRICING" title="Choose the Billing Period That Fits Your Business" description="The prices below come directly from the project’s existing subscription configuration."/><main className="pp-main"><div className="pp-pricing">{PREMIUM_PLANS.map(p=><article key={p.id} className={p.popular?'popular':''}><span>{p.label}</span><h2>{p.name}</h2><p>{p.description}</p><div><b>${p.price}</b><small>/month</small></div><em>{p.billingNote}</em><ul>{PREMIUM_FEATURES.map(x=><li key={x}><Check/>{x}</li>)}</ul><a href={`/premium?plan=${p.id}`}>Choose {p.name}</a></article>)}</div></main><FAQBlock items={[['Are these the current plans?','These values are read from the subscription configuration in this project. Confirm production checkout totals before purchase.'],['Is there a separate annual total?','The annual plan is listed as $48 billed every 12 months.'],['Can I cancel the monthly plan?','The verified monthly-plan configuration states “Cancel anytime.” Refund terms remain subject to the reviewed production policy.']]}/><CTA/></>}
function CompanyPage({kind}){const d=COMPANY[kind];return <><Meta title={d.title} description={d.description} path={`/${kind}`}/><Hero eyebrow="INVONXT" title={d.title} description={d.description}/><main className="pp-main"><section><Cards items={d.sections}/>{kind==='contact'&&<div className="pp-contact"><h2>Open verified support</h2><p>No public email address, phone number, or office address is published because none was verified in the repository.</p><a href={APP_ROUTES.login}>Open Invoice Next support <ArrowRight/></a></div>}</section></main><CTA/></>}
function FAQBlock({items=FAQS}){return <section className="pp-faq"><div className="pp-shell"><div className="pp-heading"><span>FREQUENTLY ASKED QUESTIONS</span><h2>Clear answers before you get started</h2></div><div>{items.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>}
function FAQPage(){return <><Meta title="Invoice Next Frequently Asked Questions" description="Get clear answers about Invoice Next invoices, estimates, payments, expenses, statements, reports, inventory, and account access." path="/faq"/><Hero eyebrow="HELP CENTER" title="Invoice Next Frequently Asked Questions" description="Search the most common product questions and follow links to the relevant workflow."/><FAQBlock/><CTA/></>}
function LegalPage({kind}){const d=LEGAL[kind];const path=kind==='privacy'?'/privacy':kind==='terms'?'/terms':`/${kind}`;const draft=kind==='cookie-policy'||kind==='refund-policy';return <><Meta title={d.title} description={d.description} path={path} noindex={draft}/><main className="pp-legal pp-shell"><span>LEGAL NOTICE {draft?'· REVIEW REQUIRED':''}</span><h1>{d.title}</h1><p className="pp-lead">{d.description}</p>{d.body.map((x,i)=><section key={x}><h2>{i===0?'Important status':i===1?'How this applies':'Questions and requests'}</h2><p>{x}</p></section>)}</main></>}
function NotFound(){return <><Meta title="Page Not Found" description="The requested Invoice Next page could not be found." path="/404" noindex/><main className="pp-not-found"><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><a href="/">Return to Invoice Next</a></main></>}

export default function PublicPage({kind,slug:slugProp}){const params=useParams();const slug=slugProp||params.slug;let content;if(kind==='privacy')content=<PrivacyPolicy/>;else if(kind==='disclaimer')content=<DisclaimerPage/>;else if(kind==='solution')content=<SolutionPage slug={slug}/>;else if(kind==='pricing')content=<PricingPage/>;else if(kind==='faq')content=<FAQPage/>;else if(COMPANY[kind])content=<CompanyPage kind={kind}/>;else if(LEGAL[kind])content=<LegalPage kind={kind}/>;else content=<NotFound/>;return <div className="pp-page"><MarketingHeader/>{content}<SiteFooter/></div>}
