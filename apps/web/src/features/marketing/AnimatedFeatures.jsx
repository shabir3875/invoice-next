import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight, BarChart3, Boxes, CalendarDays, Check, CircleDollarSign,
  FileSpreadsheet, FileText, RefreshCw, ReceiptText, Send, SlidersHorizontal,
  WalletCards, Zap,
} from 'lucide-react';
import { APP_ROUTES } from './data';
import './animated-features.css';
import './animated-features-green.css';

const FEATURES = [
  { title: 'Lightning-Fast Invoicing', text: 'Create and send professional invoices in under 60 seconds—no training required.', icon: Zap, tone: 'orange', route: '/features/lightning-fast-invoicing', scene: 'invoice', availability: 'Available' },
  { title: 'Automate Recurring Invoices', text: 'Schedule invoices monthly, quarterly, or annually—ideal for retainers, recurring services, and renewals.', icon: RefreshCw, tone: 'blue', route: '/features/recurring-invoices', scene: 'recurring', availability: 'Planned' },
  { title: 'Track Inventory Accurately', text: 'Automatically monitor products, services, and stock levels to help prevent overselling.', icon: Boxes, tone: 'purple', route: '/features/inventory-tracking', scene: 'clients', availability: 'Available' },
  { title: 'Get Paid Faster', text: 'Send clear invoices, record full or partial payments, and keep every outstanding balance visible with color-coded tracking.', icon: WalletCards, tone: 'green', route: '/features/payment-tracking', scene: 'statement', availability: 'Available' },
  { title: 'Streamline Payment Follow-Ups', text: 'Select overdue customers, personalize reminders, and send multiple follow-ups at once.', icon: Send, tone: 'orange', route: '/features/batch-payment-reminders', scene: 'statement', availability: 'Planned' },
  { title: 'Understand Sales and Stock', text: 'Review daily product sales, compare net and gross values, monitor inventory, and identify top-performing items and customers.', icon: BarChart3, tone: 'blue', route: '/features/sales-stock-reports', scene: 'insights', availability: 'Available' },
  { title: 'Import and Export with Confidence', text: 'Export supported records to Excel or PDF, and prepare CSV or Excel files for a planned validation-first import workflow.', icon: FileSpreadsheet, tone: 'purple', route: '/features/import-export-records', scene: 'convert', availability: 'Partial' },
  { title: 'Customize Documents with Ease', text: 'Apply fixed or percentage discounts, rearrange line items, and convert or duplicate documents with less repetitive data entry.', icon: SlidersHorizontal, tone: 'green', route: '/features/document-customization', scene: 'invoice', availability: 'Available' },
];

function MiniScene({ type }) {
  if (type === 'invoice') return <div className="af-mini af-invoice-mini"><span className="af-logo">IN</span><i/><i/><i/><b>$2,450</b><em><Check size={10}/></em></div>;
  if (type === 'insights') return <div className="af-mini af-insights-mini"><ReceiptText/><div className="af-bars"><i/><i/><i/><i/></div><b>+18.4%</b></div>;
  if (type === 'clients') return <div className="af-mini af-clients-mini"><span>AM</span><span>SK</span><span>+</span><i><ArrowRight size={13}/></i><FileText/></div>;
  if (type === 'convert') return <div className="af-mini af-convert-mini"><span>ESTIMATE</span><ArrowRight/><span>INVOICE</span><b><Check size={10}/></b></div>;
  if (type === 'recurring') return <div className="af-mini af-calendar-mini"><CalendarDays/><div><span>APR</span><b>15</b></div><RefreshCw/></div>;
  return <div className="af-mini af-statement-mini"><span>STATEMENT</span><i/><i/><i/><div><b>Paid</b><strong>$1,250</strong></div><FileText/></div>;
}

function FeatureCard({ feature, index, active, onActivate }) {
  const Icon = feature.icon;
  return <article className={`af-card af-${feature.tone} ${active ? 'is-active' : ''}`} onMouseEnter={() => onActivate(index)} onFocus={() => onActivate(index)}>
    <div className="af-card-top"><span className="af-icon"><Icon size={19}/></span><MiniScene type={feature.scene}/></div>
    <h3>{feature.title}</h3><p>{feature.text}</p>
    <a href={feature.route}>Learn More <ArrowRight size={14}/></a>
  </article>;
}

function DocumentOrbit() {
  return <div className="af-orbit" aria-hidden="true">
    <div className="af-doc af-doc-quote"><span>ESTIMATE</span><b>Northstar Legal</b><i/><i/><i/><strong>$2,450</strong></div>
    <div className="af-doc-arrow"><ArrowRight size={20}/></div>
    <div className="af-doc af-doc-invoice"><span>INVOICE</span><b>Northstar Legal</b><i/><i/><i/><strong>$2,450</strong><em><Check size={11}/> Created</em></div>
    <div className="af-doc-tags"><span>Estimate</span><span>Sales order</span><span>Proforma</span></div>
  </div>;
}

function LaptopDashboard() {
  return <div className="af-laptop-wrap" aria-label="Illustration of the Invoice Next dashboard showing sample financial data">
    <div className="af-laptop">
      <div className="af-camera"/><div className="af-screen">
        <aside><b>IN</b>{[0,1,2,3,4].map(x => <i key={x}/>)}</aside>
        <div className="af-dash">
          <header><div><small>Overview</small><strong>Good morning, Alex</strong></div><span>+ New invoice</span></header>
          <div className="af-stats">
            <div><CircleDollarSign/><small>Revenue</small><b>$24,680</b><em>+12.8%</em></div>
            <div><Check/><small>Paid</small><b>$18,240</b><em>32 invoices</em></div>
            <div><FileText/><small>Outstanding</small><b>$5,320</b><em>8 invoices</em></div>
            <div><ReceiptText/><small>Overdue</small><b>$1,120</b><em>2 invoices</em></div>
          </div>
          <div className="af-dash-grid"><div className="af-chart"><div><b>Cash flow</b><span>Last 6 months</span></div><svg viewBox="0 0 280 105" preserveAspectRatio="none"><defs><linearGradient id="afFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff7a45" stopOpacity=".28"/><stop offset="1" stopColor="#ff7a45" stopOpacity="0"/></linearGradient></defs><path className="af-area" d="M0 88 C25 72,40 80,62 58 S100 70,125 42 S160 53,184 30 S224 38,280 10 L280 105 L0 105Z"/><path className="af-line" d="M0 88 C25 72,40 80,62 58 S100 70,125 42 S160 53,184 30 S224 38,280 10"/></svg><div className="af-chart-labels"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div></div>
          <div className="af-activity"><b>Recent activity</b>{[['AM','Acme Studio','Paid'],['NL','Northstar Legal','Sent'],['RS','Riverside Co.','Draft']].map(x => <div key={x[1]}><span>{x[0]}</span><p><strong>{x[1]}</strong><small>Invoice updated</small></p><em>{x[2]}</em></div>)}</div></div>
        </div>
      </div>
    </div><div className="af-laptop-base"><i/></div>
  </div>;
}

export default function AnimatedFeatures() {
  const rootRef = useRef(null); const timeoutRef = useRef(null); const [visible, setVisible] = useState(false); const [active, setActive] = useState(0); const [manual, setManual] = useState(false);
  useEffect(() => { const node = rootRef.current; const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .18 }); if (node) observer.observe(node); return () => observer.disconnect(); }, []);
  useEffect(() => { if (!visible || manual) return undefined; const timer = window.setInterval(() => setActive(v => (v + 1) % FEATURES.length), 2000); return () => window.clearInterval(timer); }, [visible, manual]);
  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);
  const activate = index => { setActive(index); setManual(true); window.clearTimeout(timeoutRef.current); timeoutRef.current = window.setTimeout(() => setManual(false), 5000); };
  return <section ref={rootRef} id="features" className={`af-section ${visible ? 'is-visible' : ''}`} aria-labelledby="af-title">
    <div className="af-glow af-glow-one"/><div className="af-glow af-glow-two"/>
    <div className="af-container">
      <div className="af-heading"><span className="!border-emerald-200 !bg-emerald-50 !text-emerald-700">ONE SIMPLE BUSINESS WORKSPACE</span><h2 id="af-title">Everything You Need to Invoice, Get Paid, and Grow</h2><p>Create professional invoices, convert estimates, manage payments, track expenses, and stay organized — all in one simple platform.</p></div>
      <div className="af-layout" data-active={active}>
        <div className="af-column af-left">{FEATURES.slice(0,4).map((f,i) => <FeatureCard key={f.title} feature={f} index={i} active={active===i} onActivate={activate}/>)}</div>
        <div className="af-center"><DocumentOrbit/><LaptopDashboard/><div className="af-live"><i/><span>Live dashboard preview</span><b>Sample data</b></div></div>
        <div className="af-column af-right">{FEATURES.slice(4).map((f,i) => <FeatureCard key={f.title} feature={f} index={i+4} active={active===i+4} onActivate={activate}/>)}</div>
      </div>
      <div className="af-actions"><a className="af-primary" href={APP_ROUTES.signup}>Start Invoicing Free <ArrowRight size={17}/></a></div>
    </div>
  </section>;
}
