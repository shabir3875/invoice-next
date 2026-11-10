import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowLeft, ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp,
  BarChart3, Boxes, Facebook, FileCheck2, FileSpreadsheet, FileText, Instagram,
  Linkedin, Mail, Plus, ReceiptText, RefreshCw, Send, SlidersHorizontal,
  Smartphone, Twitter, WalletCards, Zap,
} from 'lucide-react';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import { PREMIUM_FEATURES, PREMIUM_PLANS } from '@/features/app-components/plans';
import { APP_ROUTES, benefits, demoTestimonials, solutions } from './data';
import { BUSINESS_CATEGORIES } from './businessCategoriesData';
import SiteFooter from './SiteFooter';
import { DashboardMockup } from './ProductVisuals';
import AnimatedFeatures from './AnimatedFeatures';
import TemplateGallery from './TemplateGallery';
import InvoiceGenerator from './InvoiceGenerator';
import MarketingHeader, { MarketingBrand } from './MarketingHeader';
import './homepage-intro.css';
import './daily-business-tools.css';

const SHOW_MOBILE_SHOWCASE = false;

const Brand = MarketingBrand;
function PrimaryLink({href=APP_ROUTES.signup,children,className=''}){return <a href={href} className={`home-primary-link inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-extrabold text-white transition focus:outline-none ${className}`}>{children}</a>}

const Header = MarketingHeader;

function Hero(){return <section className="home-hero"><div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.86fr_1.14fr]"><div className="home-hero-copy"><div className="home-eyebrow"><span/>Invoicing and business management, in one place</div><h1>Professional Invoicing <span>Made Simple.</span></h1><div className="home-hero-intro"><p>Create professional invoices, manage expenses, track payments, and keep your business organized—all in one simple, powerful platform.</p><p>Invoice Next is modern invoicing and business management software designed to make everyday financial tasks easier, faster, and more efficient. Create and customize invoices, generate estimates, manage customers and products, organize expenses and receipts, record payments, and monitor outstanding balances from one intuitive workspace.</p><p>Say goodbye to complicated paperwork, scattered spreadsheets, and time-consuming manual processes. With flexible templates, streamlined workflows, and clear financial insights, Invoice Next helps you stay in control of your business finances while saving valuable time.</p><p>Less paperwork. Better organization. More time to grow your business.</p></div><div className="home-hero-actions"><PrimaryLink className="!min-h-14 !px-8 !text-base">Get Started Free<ArrowRight size={18}/></PrimaryLink></div><div className="home-trust">{['No credit card required','Works on every device','Secure cloud workspace'].map(x=><span key={x}><Check size={15}/>{x}</span>)}</div></div><div className="home-dashboard-stage"><span className="home-sample-label">Illustrative product preview · sample data</span><DashboardMockup/></div></div></section>}

function Benefits(){return <section className="border-y border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 md:grid-cols-5">{benefits.map((x,i)=><div key={x.title} className={`flex items-center gap-3 py-7 md:px-4 ${i<benefits.length-1?'md:border-r':''}`}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600"><x.icon size={19}/></span><div><b className="block text-xs text-slate-950 sm:text-sm">{x.title}</b><span className="hidden text-[11px] leading-4 text-slate-500 lg:block">{x.text}</span></div></div>)}</div></section>}

const FEATURE_HIGHLIGHTS = [
  [Zap, 'Lightning Fast', 'Create and send professional invoices in under 60 seconds. No learning curve required.'],
  [RefreshCw, 'Automate Repeat Invoices', 'Schedule invoices monthly, every three months, or yearly for retainers, quarterly services, and annual renewals.'],
  [Boxes, 'Inventory Tracking', 'Automatically track products and services, monitor available stock, and reduce the risk of overselling.'],
  [WalletCards, 'Track Payments Clearly', 'Record full or partial payments, review payment activity, and keep each outstanding balance visible.'],
  [Send, 'Email Documents and Statements', 'Send supported business documents and customer statements by email with attachments.'],
  [BarChart3, 'See Sales and Stock Clearly', 'Review daily sales by product, compare net and gross values, check inventory value, and identify top-selling items and customers.'],
  [FileSpreadsheet, 'Export Business Records', 'Download supported reports and business records in PDF or Excel formats for review and reconciliation.'],
  [SlidersHorizontal, 'Customize Documents as You Work', 'Apply fixed or percentage discounts, rearrange line items, and convert or duplicate supported business documents.'],
];

function FeatureHighlights(){return <section className="bg-slate-50 py-20 sm:py-28" aria-labelledby="feature-highlights-title"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-600">More ways to work efficiently</span><h2 id="feature-highlights-title" className="mt-4 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-5xl">Powerful Invoicing and Business Features</h2><p className="mt-5 text-base leading-8 text-slate-600">Create documents faster, automate repeat work, track stock, follow up on balances, and move business records without disconnected tools.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{FEATURE_HIGHLIGHTS.map(([Icon,title,text])=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"><span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon size={22}/></span><h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></article>)}</div></div></section>}

const DAILY_BUSINESS_TOOLS = [
  { code:'INV', title:'Invoicing and repeat billing', text:'Create unlimited invoices, quotes, and expenses. Automated monthly, quarterly, and yearly invoice schedules are planned.', status:'Core available', tone:'from-blue-600 to-cyan-500', route:'/features/lightning-fast-invoicing' },
  { code:'REM', title:'Batch payment reminders', text:'Group overdue customers and send tailored payment follow-ups together instead of contacting each customer separately.', status:'Planned', tone:'from-amber-500 to-orange-500', route:'/features/customer-statements' },
  { code:'STK', title:'Inventory and customer records', text:'Track products, current stock, projected availability, and reorder levels alongside customer and supplier activity.', status:'Available', tone:'from-emerald-600 to-teal-500', route:'/features/client-management' },
  { code:'RPT', title:'Business performance reports', text:'Review product sales, net and gross values, inventory value, receivables, tax, and leading products and customers.', status:'Available', tone:'from-violet-600 to-indigo-500', route:'/features/sales-stock-reports' },
  { code:'REP', title:'Sales reps and commissions', text:'Assign supported sales documents to representatives, review attributed sales, and calculate commission reports.', status:'Planned', tone:'from-rose-600 to-pink-500', route:'/features' },
];

function DailyToolVisual({code}){if(code==='INV')return <div className="dbt-visual dbt-invoice"><div className="dbt-paper"><span>INVOICE</span><i/><i/><i/><b>$2,450</b></div><div className="dbt-cycle"><RefreshCw/></div></div>;if(code==='REM')return <div className="dbt-visual dbt-reminders">{['AL','NS','HC'].map((x,i)=><span key={x} style={{'--dbt-i':i}}>{x}<i/></span>)}<Send/></div>;if(code==='STK')return <div className="dbt-visual dbt-stock"><Boxes/><div><span style={{'--dbt-w':'82%'}}/><span style={{'--dbt-w':'58%'}}/><span style={{'--dbt-w':'28%'}}/></div><em>Low</em></div>;if(code==='RPT')return <div className="dbt-visual dbt-report"><div>{[38,64,48,83,71].map((height,i)=><i key={i} style={{'--dbt-h':`${height}%`,'--dbt-i':i}}/>)}</div><span><BarChart3/>+18.4%</span></div>;return <div className="dbt-visual dbt-reps"><span>AM</span><span>SK</span><span>JL</span><div><b>$8.4k</b><small>Commission</small></div></div>}

function DailyToolCard({tool,index}){return <Reveal as="a" delay={index*.08} y={22} href={tool.route} className="dbt-card group"><div className="dbt-card-head"><span className={`dbt-code bg-gradient-to-br ${tool.tone}`}>{tool.code}</span><span className={`dbt-status ${tool.status==='Available'?'is-live':tool.status==='Core available'?'is-core':'is-planned'}`}>{tool.status}</span></div><DailyToolVisual code={tool.code}/><h3>{tool.title}</h3><p>{tool.text}</p><span className="dbt-link">Learn more <ArrowRight/></span></Reveal>}

function DailyBusinessTools(){return <section className="dbt-section" aria-labelledby="daily-tools-title"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal className="dbt-heading"><span>One connected workspace</span><h2 id="daily-tools-title">The tools to run day-to-day business</h2><p>One straightforward subscription for getting paid, managing stock, serving customers, and seeing how business is going.</p></Reveal><div className="dbt-simple-grid">{DAILY_BUSINESS_TOOLS.map((tool,index)=><Reveal as="a" href={tool.route} className="dbt-simple-card" delay={index*.06} y={16} key={tool.code}><div className="dbt-simple-title"><span>{tool.code}</span><h3>{tool.title}</h3></div><p>{tool.text}</p></Reveal>)}</div><Reveal className="dbt-cta"><a href={APP_ROUTES.signup}>Start invoicing free<ArrowRight/></a></Reveal></div></section>}

function StepVisual({type}){if(type==='create')return <div className="hi-visual hi-create"><div className="hi-paper"><header><span>IN</span><b>INVOICE</b></header><i/><i/><i/><div><span>Design services</span><b>$1,400</b></div><div><span>Consulting</span><b>$600</b></div><strong>Total&nbsp; $2,000</strong></div></div>;if(type==='share')return <div className="hi-visual hi-share"><div className="hi-paper hi-share-paper"><FileText/><b>INV-2048</b><i/><i/></div><span className="hi-send-path"/><span className="hi-mail"><Mail size={25}/><em><Check size={10}/></em></span></div>;return <div className="hi-visual hi-payment"><div className="hi-balance"><small>Outstanding</small><b>$2,000</b></div><div className="hi-payment-row"><span><ReceiptText size={16}/></span><p><b>Payment recorded</b><small>$2,000 · Bank transfer</small></p><em>PAID</em></div><div className="hi-paid"><FileCheck2 size={18}/><span>Balance updated</span><b>$0.00</b></div></div>}

function HowItWorks(){const steps=[['01','Create Your Invoice','Add customers, products, services, taxes, discounts, and payment terms using customizable invoice templates.','create'],['02','Share With Your Customer','Download a professional PDF, send an invoice through email, or share it using a secure link.','share'],['03','Track Your Payments','Record full or partial payments and monitor paid, unpaid, and overdue invoice balances.','payment']];return <section id="how-it-works" className="home-how"><div className="mx-auto max-w-7xl px-5 sm:px-8"><Reveal className="home-section-heading"><span>HOW IT WORKS</span><h2>From Details to Paid in Three Simple Steps</h2><p>A clear invoicing workflow that keeps every detail organized from creation through payment.</p></Reveal><div className="home-steps">{steps.map(([num,title,text,type],i)=><Reveal as="article" key={num} delay={i*.12} y={20} className="home-step"><div className="home-step-number">{num}</div><StepVisual type={type}/><h3>{title}</h3><p>{text}</p>{i<2&&<span className="home-step-connector" aria-hidden="true"><ArrowRight size={16}/></span>}</Reveal>)}</div></div></section>}

function Solutions() {
  const [openIds, setOpenIds] = useState(() => new Set());

  const toggleOpen = id => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="solutions" className="scroll-mt-24 bg-[#f8fafc] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#047857]">For businesses</span>
          <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-4xl">Explore Business Categories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">Discover how Invoice Next helps professionals and businesses simplify invoicing, manage expenses, organize clients, and maintain better financial records.</p>
        </div>

        <div className="space-y-4">
          {BUSINESS_CATEGORIES.map(category => {
            const Icon = category.icon;
            const isOpen = openIds.has(category.id);
            const pills = category.subcategories.slice(0, 4);

            return (
              <article key={category.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-slate-300">
                <button
                  type="button"
                  onClick={() => toggleOpen(category.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-slate-50/60 sm:px-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#edfcf6] text-[#047857] border border-[#ccece0]">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>
                    <div>
                      <span className="block text-base font-bold text-slate-900 sm:text-lg">{category.name}</span>
                      <span className="hidden text-xs text-slate-500 sm:block">{category.description}</span>
                    </div>
                  </div>
                  <span className="text-slate-500">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 bg-white p-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 sm:gap-4">
                      {pills.map(sub => (
                        <a
                          key={sub.id}
                          href={sub.url || '/for-businesses'}
                          className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-center text-sm font-semibold text-slate-800 transition hover:border-[#a7d9c9] hover:bg-[#edfcf6] hover:text-[#047857]"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                    <div className="mt-5 text-center sm:mt-6">
                      <a
                        href="/for-businesses"
                        className="group inline-flex items-center gap-1.5 text-sm font-bold text-[#047857] transition hover:text-[#065f46]"
                      >
                        <span>Explore all {category.name} businesses</span>
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MobileShowcase(){return <section className="overflow-hidden bg-[#0b1f3a] py-20 text-white sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr]"><div><span className="text-xs font-extrabold uppercase tracking-[.18em] text-cyan-300">Responsive web application</span><h2 className="mt-4 text-3xl font-black tracking-[-.04em] sm:text-5xl">Your business, available wherever work happens</h2><p className="mt-6 text-base leading-8 text-slate-300">The Invoice Next web app adapts across mobile, tablet and desktop so you can review the dashboard, create invoices, access customer records and track payments from a modern browser.</p><p className="mt-4 text-sm font-semibold text-cyan-200">Native app-store downloads are not shown because this repository does not provide verified publication links.</p><PrimaryLink href={APP_ROUTES.signup} className="mt-8 !bg-white !text-[#0b1f3a] !shadow-none">Open Invoice Next<ArrowRight size={17}/></PrimaryLink></div><div className="relative min-h-[520px]"><div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl"/><div className="absolute left-[6%] top-20 w-[210px] -rotate-6 rounded-[32px] border-[8px] border-slate-900 bg-white p-3 shadow-2xl"><PhoneScreen title="Customers" color="blue"/></div><div className="absolute left-1/2 top-3 z-10 w-[230px] -translate-x-1/2 rounded-[34px] border-[9px] border-slate-900 bg-white p-3 shadow-2xl"><PhoneScreen title="Dashboard" color="cyan"/></div><div className="absolute right-[4%] top-24 w-[210px] rotate-6 rounded-[32px] border-[8px] border-slate-900 bg-white p-3 shadow-2xl"><PhoneScreen title="Invoice" color="emerald"/></div></div></div></section>}
function PhoneScreen({title,color}){return <div className="min-h-[380px] rounded-[22px] bg-slate-50 p-3 text-slate-900"><div className="mx-auto mb-4 h-3 w-16 rounded-full bg-slate-900"/><div className="flex items-center justify-between"><b className="text-xs">{title}</b><span className="grid h-7 w-7 place-items-center rounded-full bg-slate-200 text-[9px] font-bold">SN</span></div><div className={`mt-4 rounded-xl p-4 text-white ${color==='blue'?'bg-blue-600':color==='cyan'?'bg-cyan-600':'bg-emerald-600'}`}><span className="text-[9px] opacity-75">Total revenue</span><div className="mt-1 text-xl font-black">$18,640</div></div><div className="mt-3 grid grid-cols-2 gap-2">{[1,2,3,4].map(i=><div key={i} className="rounded-lg bg-white p-3 shadow-sm"><div className="h-2 w-10 rounded bg-slate-200"/><div className="mt-2 h-3 w-14 rounded bg-slate-300"/></div>)}</div><div className="mt-3 space-y-2">{[1,2,3].map(i=><div key={i} className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm"><span className="h-7 w-7 rounded-lg bg-blue-100"/><span className="h-2 flex-1 rounded bg-slate-200"/></div>)}</div></div>}

function Testimonials(){const[index,setIndex]=useState(0);useEffect(()=>{const timer=setInterval(()=>setIndex(v=>(v+1)%demoTestimonials.length),6000);return()=>clearInterval(timer)},[]);const item=demoTestimonials[index];return <section id="testimonials" className="scroll-mt-24 bg-[#f7f9fc] py-20 sm:py-28"><div className="mx-auto max-w-5xl px-5 sm:px-8"><div className="text-center"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-600">Demo testimonials</span><h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-5xl">The workflow businesses are looking for</h2><p className="mt-4 text-sm text-slate-500">The statements below are clearly marked illustrative examples, not verified customer reviews.</p></div><div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-12"><div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-2xl font-black text-blue-600">“</div><blockquote className="mx-auto mt-6 max-w-3xl text-xl font-bold leading-9 text-slate-800 sm:text-2xl">{item.quote}</blockquote><div className="mt-7 text-sm font-extrabold text-slate-950">{item.name}</div><div className="mt-1 text-xs text-slate-500">{item.role}</div><div className="mt-8 flex items-center justify-center gap-3"><button type="button" onClick={()=>setIndex((index-1+demoTestimonials.length)%demoTestimonials.length)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-300" aria-label="Previous testimonial"><ChevronLeft size={18}/></button>{demoTestimonials.map((_,i)=><button key={i} type="button" onClick={()=>setIndex(i)} className={`h-2.5 rounded-full transition-all ${i===index?'w-7 bg-blue-600':'w-2.5 bg-slate-300'}`} aria-label={`Show testimonial ${i+1}`}/>) }<button type="button" onClick={()=>setIndex((index+1)%demoTestimonials.length)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-300" aria-label="Next testimonial"><ChevronRight size={18}/></button></div></div></div></section>}

function Pricing(){return <section id="pricing" className="scroll-mt-24 bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-600">Existing Invoice Next plans</span><h2 className="mt-4 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-5xl">Choose the billing period that fits your business</h2><p className="mt-5 text-base leading-8 text-slate-600">These prices and included features come directly from the project’s existing subscription configuration.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{PREMIUM_PLANS.map(plan=><article key={plan.id} className={`relative flex flex-col rounded-2xl bg-white p-7 ${plan.popular?'border-2 border-blue-600 shadow-xl shadow-blue-900/10':'border border-slate-200 shadow-sm'}`}>{plan.popular&&<span className="absolute right-5 top-0 -translate-y-1/2 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Most popular</span>}<span className="text-xs font-extrabold uppercase tracking-[.15em] text-blue-600">{plan.label}</span><h3 className="mt-2 text-2xl font-black text-slate-950">{plan.name}</h3><p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-500">{plan.description}</p><div className="mt-6 flex items-end"><span className="mb-2 text-xl font-black">$</span><strong className="text-5xl font-black tracking-tight">{plan.price}</strong><span className="mb-2 ml-2 text-sm font-bold text-slate-500">/ month</span></div><p className="mt-2 text-xs text-slate-400">{plan.billingNote}</p><div className="my-6 h-px bg-slate-100"/><ul className="space-y-3">{PREMIUM_FEATURES.map(x=><li key={x} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Check size={16} className="text-blue-600"/>{x}</li>)}</ul><a href={`/premium?plan=${plan.id}`} className={`mt-8 rounded-xl py-3 text-center text-sm font-extrabold ${plan.popular?'bg-blue-600 text-white':'border border-blue-300 text-blue-700'}`}>Choose {plan.name}</a></article>)}</div></div></section>}

function FinalCta(){return <section className="bg-white pb-20 sm:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0b1f3a] via-[#12345d] to-blue-700 px-6 py-16 text-center text-white sm:px-12 sm:py-20"><div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[45px] border-cyan-400/10"/><div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border-[55px] border-blue-300/10"/><h2 className="relative text-3xl font-black tracking-[-.04em] sm:text-5xl">Ready to Simplify Your Invoicing?</h2><p className="relative mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100">Manage your business invoices, estimates, expenses and payments with Invoice Next.</p><div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"><PrimaryLink href={APP_ROUTES.signup} className="!bg-white !text-[#0b1f3a] !shadow-none">Start for Free<ArrowRight size={17}/></PrimaryLink><a href={APP_ROUTES.login} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/40 px-7 text-sm font-extrabold text-white hover:bg-white/10">Login</a></div></div></section>}

function Footer(){const cols=[['Product',['Invoices',APP_ROUTES.invoices],['Estimates',APP_ROUTES.documents],['Templates','#templates'],['Expenses',APP_ROUTES.expenses],['Reports',APP_ROUTES.dashboard]],['Solutions',['For Businesses','/for-businesses']],['Company',['About Us','/about'],['Contact Us','/contact'],['Pricing','#pricing'],['Support','/contact']],['Legal',['Privacy Policy','/privacy'],['Terms and Conditions','/terms']]];return <footer id="resources" className="bg-[#07172c] pt-16 text-slate-400"><div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)]"><div><Brand/><p className="mt-5 max-w-xs text-sm leading-7">Professional invoicing, estimates, expenses and business records in one straightforward platform.</p><div className="mt-6 flex gap-3">{[[Facebook,'https://facebook.com/'],[Twitter,'https://x.com/'],[Linkedin,'https://linkedin.com/'],[Instagram,'https://instagram.com/']].map(([Icon,href],i)=><a key={i} href={href} target="_blank" rel="noopener noreferrer" aria-label="Social media" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-slate-300 hover:bg-blue-600 hover:text-white"><Icon size={16}/></a>)}</div></div>{cols.map(col=><div key={col[0]}><h3 className="font-extrabold text-white">{col[0]}</h3>{col.slice(1).map(([label,href])=><a key={label} href={href} className="mt-3 block text-sm hover:text-white">{label}</a>)}</div>)}</div><div className="border-t border-white/10 px-5 py-6 text-center text-xs sm:px-8">© {new Date().getFullYear()} Invoice Next. All rights reserved.</div></footer>}

function LegalPage({routePath}){const pages={about:['About Invoice Next','Invoice Next is designed to help freelancers and small businesses manage invoices, estimates, expenses, customers and documents from one cloud workspace.'],contact:['Contact Invoice Next','For product help, account questions or business enquiries, use the support options available inside the Invoice Next application.'],privacy:['Privacy Policy','Invoice Next is committed to handling business and customer information responsibly. The production application should provide the complete policy governing collection, storage and processing.'],terms:['Terms and Conditions','These terms describe the general use of Invoice Next. The production application should provide the complete service terms and subscription conditions.']};const key=routePath.slice(1);const[heading,body]=pages[key]||pages.about;return <div className="min-h-screen bg-slate-50"><Header/><main className="mx-auto max-w-3xl px-5 py-24 sm:px-8"><a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700"><ArrowLeft size={16}/>Back to home</a><h1 className="mt-8 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{heading}</h1><p className="mt-6 text-lg leading-9 text-slate-600">{body}</p><a href={routePath==='/contact'?APP_ROUTES.login:APP_ROUTES.signup} className="mt-9 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white">{routePath==='/contact'?'Open support':'Get Started Free'}</a></main><Footer/></div>}

export default function MarketingPage({routePath='/'}){const title='Invoice Next | Professional Invoicing Software for Freelancers & Businesses';const description='Create professional invoices with customizable templates, manage estimates, track payments, organize expenses, and simplify business billing with Invoice Next.';const keywords='invoicing software, invoice generator, professional invoices, encrypted invoicing, PDF invoice, invoice template builder, freelancer invoicing, small business invoicing, online invoicing, Next Invoice';if(routePath!=='/')return <LegalPage routePath={routePath}/>;return <div className="min-h-screen bg-white text-slate-900"><Helmet><title>{title}</title><meta name="description" content={description}/><meta name="keywords" content={keywords}/></Helmet><Seo title={title} description={description} url="https://invonxt.com/" image="https://invonxt.com/og-image.png" siteName="Invoice Next"/><Header/><main><Hero/><Benefits/><AnimatedFeatures/><DailyBusinessTools/><TemplateGallery/><InvoiceGenerator/><Solutions/>{SHOW_MOBILE_SHOWCASE&&<MobileShowcase/>}<Testimonials/><Pricing/><FinalCta/></main><SiteFooter/></div>}
