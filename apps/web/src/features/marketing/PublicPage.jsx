import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, BarChart3, Check, ChevronDown, ReceiptText, Users } from 'lucide-react';
import Seo from '../../components/Seo';
import { APP_ROUTES } from './data';
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

export const PUBLIC_ROUTES = ['/about','/contact','/support','/faq','/privacy','/terms','/cookie-policy','/refund-policy','/disclaimer'];
export function getPublicRoute(path){
  if(path==='/faq')return {kind:'faq',title:'Invoice Next Frequently Asked Questions',description:'Get clear answers about Invoice Next invoices, estimates, payments, expenses, statements, reports, inventory, and account access.'};
  if(path==='/disclaimer')return {kind:'disclaimer',title:'Disclaimer',description:'Read the Invoice Next website disclaimer covering informational content, external links, professional advice, and use at your own risk.'};
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

function CompanyPage({kind}){const d=COMPANY[kind];return <><Meta title={d.title} description={d.description} path={`/${kind}`}/><Hero eyebrow="INVOICE NEXT" title={d.title} description={d.description}/><main className="pp-main"><section><Cards items={d.sections}/>{kind==='contact'&&<div className="pp-contact"><h2>Open verified support</h2><p>No public email address, phone number, or office address is published because none was verified in the repository.</p><a href={APP_ROUTES.login}>Open Invoice Next support <ArrowRight/></a></div>}</section></main><CTA/></>}
function FAQBlock({items=FAQS}){return <section className="pp-faq"><div className="pp-shell"><div className="pp-heading"><span>FREQUENTLY ASKED QUESTIONS</span><h2>Clear answers before you get started</h2></div><div>{items.map(([q,a])=><details key={q}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></div></section>}
function FAQPage(){return <><Meta title="Invoice Next Frequently Asked Questions" description="Get clear answers about Invoice Next invoices, estimates, payments, expenses, statements, reports, inventory, and account access." path="/faq"/><Hero eyebrow="HELP CENTER" title="Invoice Next Frequently Asked Questions" description="Search the most common product questions and follow links to the relevant workflow."/><FAQBlock/><CTA/></>}
function LegalPage({kind}){const d=LEGAL[kind];const path=kind==='privacy'?'/privacy':kind==='terms'?'/terms':`/${kind}`;const draft=kind==='cookie-policy'||kind==='refund-policy';return <><Meta title={d.title} description={d.description} path={path} noindex={draft}/><main className="pp-legal pp-shell"><span>LEGAL NOTICE {draft?'· REVIEW REQUIRED':''}</span><h1>{d.title}</h1><p className="pp-lead">{d.description}</p>{d.body.map((x,i)=><section key={x}><h2>{i===0?'Important status':i===1?'How this applies':'Questions and requests'}</h2><p>{x}</p></section>)}</main></>}
function NotFound(){return <><Meta title="Page Not Found" description="The requested Invoice Next page could not be found." path="/404" noindex/><main className="pp-not-found"><h1>Page not found</h1><p>The page may have moved or the address may be incorrect.</p><a href="/">Return to Invoice Next</a></main></>}

export default function PublicPage({kind}){let content;if(kind==='privacy')content=<PrivacyPolicy/>;else if(kind==='disclaimer')content=<DisclaimerPage/>;else if(kind==='faq')content=<FAQPage/>;else if(COMPANY[kind])content=<CompanyPage kind={kind}/>;else if(LEGAL[kind])content=<LegalPage kind={kind}/>;else content=<NotFound/>;return <div className="pp-page"><MarketingHeader/>{content}<SiteFooter/></div>}
