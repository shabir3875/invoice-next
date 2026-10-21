import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowRight, Users, Clock, Check, Star, Menu, X,
  LayoutDashboard, Receipt, Settings, Search, Bell, Plus, TrendingUp,
  ShieldCheck, Globe, Sparkles, Wallet, FolderOpen, Package,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const APP_URL = 'https://app.invonxt.com/';

function PrimaryButton({ href = APP_URL, children, className = '', onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-xl bg-gradient-primary text-white font-semibold text-sm shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
    >
      {children}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3">
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-border/80 shadow-card">
          <a href="/" className="flex items-center gap-2 font-display text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-primary text-white shadow-glow">
              <Receipt className="w-4 h-4" aria-hidden />
            </span>
            Invoice Next
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <a href={APP_URL} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors px-3 py-2">
              Log in
            </a>
            <PrimaryButton className="!min-h-10 !px-5 !text-sm">Start free</PrimaryButton>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 rounded-xl text-foreground hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div id="mobile-nav" className="md:hidden mt-2 rounded-2xl border border-border bg-white p-4 shadow-soft flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-foreground/85 hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <PrimaryButton className="mt-2 w-full" onClick={() => setOpen(false)}>
              Start free
            </PrimaryButton>
          </div>
        )}
      </div>
    </header>
  );
}

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Receipt, label: 'Invoices' },
  { icon: Wallet, label: 'Expenses' },
  { icon: FolderOpen, label: 'Documents' },
  { icon: Users, label: 'Partners' },
  { icon: Package, label: 'Items' },
];

const INVOICES = [
  { id: 'INV-2041', client: 'Northwind Co.', amount: '$1,240.00', status: 'Paid' },
  { id: 'INV-2040', client: 'Lumina Studio', amount: '$2,150.00', status: 'Paid' },
  { id: 'INV-2039', client: 'Vertex Labs', amount: '$840.00', status: 'Pending' },
  { id: 'INV-2038', client: 'Helios Inc.', amount: '$3,420.00', status: 'Overdue' },
];

const BARS = [42, 58, 49, 70, 63, 82, 76, 95];

function StatusBadge({ status }) {
  const map = {
    Paid: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
    Pending: 'bg-amber-50 text-amber-700 ring-amber-600/20',
    Overdue: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${map[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-2xl" aria-hidden />
      {/* floating receipt card */}
      <div className="hidden sm:block absolute -left-6 lg:-left-10 bottom-16 z-20 w-56 rounded-2xl border border-border bg-white p-4 shadow-float">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Payment received</span>
          <span className="grid place-items-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600">
            <Check className="w-3.5 h-3.5" aria-hidden />
          </span>
        </div>
        <div className="font-display text-2xl font-extrabold text-foreground">$2,150.00</div>
        <div className="mt-1 text-xs text-muted-foreground">from Lumina Studio · INV-2040</div>
        <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-full bg-gradient-primary" />
        </div>
      </div>
      {/* floating stat card */}
      <div className="hidden sm:block absolute -right-5 lg:-right-8 top-20 z-20 w-44 rounded-2xl border border-border bg-white p-4 shadow-float">
        <div className="flex items-center gap-2 mb-2">
          <span className="grid place-items-center w-7 h-7 rounded-lg bg-primary/10 text-primary">
            <TrendingUp className="w-4 h-4" aria-hidden />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">This month</span>
        </div>
        <div className="font-display text-xl font-extrabold text-foreground">$48,250</div>
        <div className="mt-1 text-xs font-medium text-emerald-600">▲ 12.4% vs last month</div>
      </div>

      {/* browser window */}
      <div className="relative rounded-2xl border border-border/70 bg-white p-2 shadow-float">
        <div className="rounded-xl overflow-hidden border border-border/60">
          {/* chrome bar */}
          <div className="flex items-center gap-2 px-4 h-10 bg-muted/60 border-b border-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md bg-white border border-border px-3 py-1 text-[11px] text-muted-foreground">
              <span className="w-3 h-3 rounded-full border border-emerald-500/40 grid place-items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </span>
              app.invonxt.com/dashboard
            </div>
          </div>

          {/* app body */}
          <div className="flex bg-white">
            {/* sidebar */}
            <aside className="hidden sm:flex flex-col w-52 shrink-0 border-r border-border bg-muted/30 py-4">
              <div className="flex items-center gap-2 px-5 mb-4">
                <span className="grid place-items-center w-7 h-7 rounded-lg bg-gradient-primary text-white">
                  <Receipt className="w-3.5 h-3.5" aria-hidden />
                </span>
                <span className="font-display text-sm font-extrabold text-foreground">Invoice Next</span>
              </div>
              <div className="px-5 mb-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Menu</div>
              <nav className="flex flex-col gap-0.5 px-2" aria-label="App menu">
                {MENU_ITEMS.map((item) => (
                  <span
                    key={item.label}
                    className={`relative flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[12px] font-medium ${
                      item.active ? 'bg-white text-foreground shadow-card' : 'text-muted-foreground'
                    }`}
                  >
                    {item.active && <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-primary" aria-hidden />}
                    <item.icon className="w-3.5 h-3.5" aria-hidden />
                    {item.label}
                  </span>
                ))}
              </nav>
              <div className="px-5 mt-3 mb-1 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Admin Menu</div>
              <div className="px-2">
                <span className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-[12px] font-medium text-muted-foreground">
                  <Settings className="w-3.5 h-3.5" aria-hidden />
                  Settings
                </span>
              </div>
            </aside>

            {/* main */}
            <div className="flex-1 min-w-0">
              {/* topbar */}
              <div className="flex items-center justify-between gap-3 px-4 sm:px-5 h-12 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Search className="w-3.5 h-3.5" aria-hidden />
                  <span className="text-[12px]">Search invoices, clients…</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="grid place-items-center w-7 h-7 rounded-lg text-muted-foreground hover:bg-muted">
                    <Bell className="w-3.5 h-3.5" aria-hidden />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-gradient-primary text-white text-[11px] font-semibold px-2.5 py-1.5">
                    <Plus className="w-3 h-3" aria-hidden /> New invoice
                  </span>
                </div>
              </div>

              {/* content */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-base font-bold text-foreground">Overview</div>
                    <div className="text-[11px] text-muted-foreground">Welcome back, Sarah</div>
                  </div>
                </div>

                {/* stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Total paid', value: '$48,250', trend: '+12.4%', up: true },
                    { label: 'Pending', value: '$12,840', trend: '+4.1%', up: true },
                    { label: 'Overdue', value: '$1,240', trend: '-2.3%', up: false },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-white p-3">
                      <div className="text-[10px] font-medium text-muted-foreground">{s.label}</div>
                      <div className="font-display text-sm sm:text-base font-extrabold text-foreground mt-1">{s.value}</div>
                      <div className={`text-[10px] font-semibold mt-0.5 ${s.up ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {s.trend}
                      </div>
                    </div>
                  ))}
                </div>

                {/* chart */}
                <div className="rounded-xl border border-border bg-white p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[12px] font-semibold text-foreground">Revenue</div>
                    <div className="text-[10px] text-muted-foreground">Last 8 weeks</div>
                  </div>
                  <div className="flex items-end justify-between gap-1.5 h-20">
                    {BARS.map((h, i) => (
                      <div key={i} className="flex-1 flex items-end h-full">
                        <div
                          className={`w-full rounded-t ${i === BARS.length - 1 ? 'bg-gradient-primary' : 'bg-primary/20'}`}
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* invoices table */}
                <div className="rounded-xl border border-border bg-white overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                    <div className="text-[12px] font-semibold text-foreground">Recent invoices</div>
                    <div className="text-[10px] font-medium text-primary">View all</div>
                  </div>
                  <div className="divide-y divide-border">
                    {INVOICES.map((inv) => (
                      <div key={inv.id} className="flex items-center justify-between gap-2 px-4 py-2.5">
                        <div className="min-w-0">
                          <div className="text-[12px] font-semibold text-foreground truncate">{inv.id}</div>
                          <div className="text-[10px] text-muted-foreground truncate">{inv.client}</div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[12px] font-semibold text-foreground">{inv.amount}</span>
                          <StatusBadge status={inv.status} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-hero">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-primary mb-6">
              <Sparkles className="w-3.5 h-3.5" aria-hidden />
              Trusted by 200,000+ businesses
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display text-[2.4rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-foreground mb-5">
              Send invoices in{' '}
              <span className="text-gradient">60 seconds</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-9 leading-relaxed">
              The simple online invoicing software to create, send, and track invoices. Built for freelancers and small businesses to get paid faster — no spreadsheets, no stress.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <PrimaryButton className="min-h-14 px-8 text-base">Start free</PrimaryButton>
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center min-h-14 px-8 rounded-xl border border-border bg-white text-foreground font-semibold text-base hover:border-primary/40 hover:bg-secondary transition-all"
              >
                Log in
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" aria-hidden /> Free to start</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" aria-hidden /> No credit card required</span>
              <span className="inline-flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" aria-hidden /> 30-day money-back</span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.24} y={36}>
          <div className="mt-14 md:mt-20 mx-auto max-w-5xl">
            <DashboardMockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LogoStrip() {
  return (
    <section className="py-10 md:py-12 border-y border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground/70 mb-6">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {['Northwind', 'Acme Co', 'Lumina', 'Vertex', 'Quanta', 'Helios'].map((b) => (
            <span key={b} className="font-display text-lg font-bold text-foreground/70">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 200, suffix: 'K+', label: 'Businesses' },
    { value: 3, suffix: 'M+', label: 'Invoices sent' },
    { value: 99.9, suffix: '%', label: 'Uptime', decimals: 1 },
    { value: 60, suffix: 's', label: 'To send an invoice' },
  ];
  return (
    <section className="py-14 md:py-20 bg-background" aria-label="Key metrics">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center md:text-left md:pl-6 md:border-l md:border-border first:md:border-l-0 first:md:pl-0">
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-1">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: '1', title: 'Create your invoice', text: 'Pick a template, add your client and items. Done in under a minute.' },
    { n: '2', title: 'Send it instantly', text: 'Email your invoice directly or share a payment link your client can click.' },
    { n: '3', title: 'Keep it organized', text: 'Track invoices, expenses, documents, partners, and items from the same menu.' },
  ];
  return (
    <section id="about" className="py-20 md:py-28 bg-muted/40 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm mb-3">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-foreground leading-tight mb-4">
            Three steps to paid
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            No training needed. Our invoice generator for small businesses and freelancers lets you create and send invoices online in three simple steps.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-7 sm:p-8 shadow-card text-center">
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-primary text-white flex items-center justify-center mb-5 font-display text-lg font-extrabold shadow-glow">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: LayoutDashboard, title: 'Dashboard', text: 'Open on a clear overview of your studio, with paid totals and recent activity in one place.' },
    { icon: Receipt, title: 'Invoices', text: 'Create, search, and keep track of the invoices you send.' },
    { icon: Wallet, title: 'Expenses', text: 'Record business expenses alongside the work you bill.' },
    { icon: FolderOpen, title: 'Documents', text: 'Keep business documents together so they are easy to find.' },
    { icon: Users, title: 'Partners', text: 'Manage the people and companies you work with.' },
    { icon: Package, title: 'Items', text: 'Keep a list of the products and services you add to invoices.' },
    { icon: Settings, title: 'Settings', text: 'Update your account from the admin menu when you need to.' },
  ];
  return (
    <section id="features" className="py-20 md:py-28 bg-background scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm mb-3">Features</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-foreground leading-tight mb-4">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Complete small business billing software and online invoice management — dashboard, invoices, expenses, documents, partners, items, and settings in one simple tool.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLAN_FEATURES = [
  'Unlimited Invoices',
  'Unlimited Expenses',
  'Unlimited Quotes',
  'Unlimited Stock Documents',
  'Unlimited Clients & Products',
  'Secure Data Storage Cloud',
  'More Premium Features',
];

function Testimonials() {
  const items = [
    {
      quote: 'Invoice Next cut my billing time from hours to minutes. I sent my first invoice in under a minute and got paid the same day.',
      name: 'Sarah Mitchell',
      role: 'Freelance Designer',
      initials: 'SM',
    },
    {
      quote: 'Invoices, expenses, and documents finally live in one place. I open the dashboard and I know where everything is.',
      name: 'David Okafor',
      role: 'Agency Founder',
      initials: 'DO',
    },
    {
      quote: 'Clean, fast, and exactly what I needed. No clutter, no learning curve. My whole team picked it up on day one.',
      name: 'Elena Rossi',
      role: 'Small Business Owner',
      initials: 'ER',
    },
  ];
  return (
    <section id="reviews" className="py-20 md:py-28 bg-muted/40 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm mb-3">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-foreground leading-tight mb-4">
            Loved by 200,000+ businesses
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Freelancers, agencies, and small teams trust Invoice Next to get paid on time.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <figure className="h-full flex flex-col rounded-2xl border border-border bg-white p-7 sm:p-8 shadow-card">
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-primary fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-foreground/90 text-[0.95rem] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary text-white flex items-center justify-center font-display text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      eyebrow: 'Flexible',
      name: '1 Month',
      desc: 'The freedom to upgrade your business one month at a time.',
      oldPrice: '10.00',
      price: '5.00',
      billing: '$5 billed every month. Cancel anytime.',
      save: null,
      popular: false,
    },
    {
      eyebrow: 'Best value',
      name: '24 Months',
      desc: 'Maximum savings for businesses ready to grow for the long term.',
      oldPrice: '5.00',
      price: '3.00',
      billing: '$72 billed every 24 months.',
      save: 'SAVE $48',
      popular: true,
    },
    {
      eyebrow: 'Annual',
      name: '12 Months',
      desc: 'A simple annual plan with meaningful savings built in.',
      oldPrice: '8.00',
      price: '4.00',
      billing: '$48 billed every 12 months.',
      save: 'SAVE $48',
      popular: false,
    },
  ];
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <Sparkles className="w-3.5 h-3.5" aria-hidden />
            Invoice Next Premium
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-foreground mb-3">
            Choose the plan that works for you
          </h2>
          <p className="text-muted-foreground">Every option includes the complete Invoice Next toolkit, secure cloud storage, and unlimited documents.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 sm:p-8 transition-shadow ${
                  p.popular
                    ? 'border-primary shadow-glow ring-1 ring-primary/20 md:-translate-y-2'
                    : 'border-border shadow-card'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-current" aria-hidden /> Most popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{p.eyebrow}</p>
                    {p.save && (
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary whitespace-nowrap">
                        {p.save}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-extrabold text-foreground">{p.name}</h3>
                  <p className="text-muted-foreground text-sm min-h-[2.5rem] leading-relaxed mt-2">{p.desc}</p>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-rose-600">3 month offer</div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-lg text-muted-foreground line-through decoration-2">${p.oldPrice}</span>
                    <span className="font-display text-5xl font-extrabold tracking-tight text-foreground">${p.price}</span>
                    <span className="text-muted-foreground text-sm">/ month</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{p.billing}</p>
                </div>
                <ul className="space-y-3 border-t border-border pt-6 mb-8 flex-1">
                  {PLAN_FEATURES.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
                      <span className="text-foreground/90">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className={`inline-flex w-full items-center justify-center min-h-12 rounded-xl font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                    p.popular
                      ? 'bg-gradient-primary text-white shadow-glow hover:scale-[1.01] active:scale-[0.99]'
                      : 'border border-border bg-white text-foreground hover:border-primary/40 hover:bg-secondary'
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-10">
          30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: 'Bank-grade security', text: '256-bit encryption' },
    { icon: Globe, label: 'Works everywhere', text: 'Web, iOS & Android' },
    { icon: Clock, label: '99.9% uptime', text: 'Always available' },
  ];
  return (
    <section id="security" className="py-12 md:py-16 bg-muted/40 border-y border-border scroll-mt-28" aria-label="Security and reliability">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.08} className="flex items-center gap-4">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-white border border-border text-primary shrink-0">
                <it.icon className="w-5 h-5" aria-hidden />
              </span>
              <div>
                <div className="font-display text-sm font-bold text-foreground">{it.label}</div>
                <div className="text-xs text-muted-foreground">{it.text}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary px-6 py-14 sm:px-12 sm:py-16 text-center shadow-glow">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-black/10 blur-2xl" />
            </div>
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                Ready to get paid?
              </h2>
              <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed">
                Join 200,000+ businesses using Invoice Next. Start free today — no credit card required.
              </p>
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center gap-2 min-h-14 px-8 rounded-xl bg-white text-primary font-bold text-base shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Start free
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    { q: 'Is there a free trial?', a: 'Yes. You can start free with no credit card required and try every feature. When you are ready, pick a plan that fits you.' },
    { q: 'What is included in every plan?', a: 'Every plan includes the same features: unlimited invoices, expenses, quotes, stock documents, clients and products, secure cloud storage, and more premium features.' },
    { q: 'Can I cancel anytime?', a: 'Yes. The monthly plan has no commitment — cancel whenever you want. Every plan also comes with a 30-day money-back guarantee.' },
    { q: 'Do I need to install anything?', a: 'No. Invoice Next works in your browser. You can also download the mobile app to send invoices on the go.' },
    { q: 'How does online invoice management and payment tracking work?', a: 'Invoice Next lets you create and send invoices online via email or a direct payment link. You can monitor paid, pending, and overdue balances in real time from your dashboard alongside expenses, quotes, partners, and items.' },
    { q: 'How is my business and client billing data protected?', a: 'All account and billing data is protected with bank-grade 256-bit encryption, stored in secure cloud storage, and backed by 99.9% platform uptime across web, iOS, and Android.' },
  ];
  return (
    <section id="faq" className="py-20 md:py-28 bg-muted/40 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full rounded-2xl border border-border bg-white px-5 sm:px-6 shadow-card">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display font-bold text-foreground text-base py-5 hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Contact', href: APP_URL },
        { label: 'Support', href: '#faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#security' },
        { label: 'Terms of Service', href: '#pricing' },
      ],
    },
  ];
  return (
    <footer className="bg-[hsl(215_28%_12%)] text-white/65 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-white">
              <span className="grid place-items-center w-8 h-8 rounded-lg bg-gradient-primary text-white">
                <Receipt className="w-4 h-4" aria-hidden />
              </span>
              Invoice Next
            </a>
            <p className="mt-3 text-sm max-w-xs leading-relaxed">
              Simple online invoicing software for freelancers and small businesses.
            </p>
            <PrimaryButton className="mt-6 !min-h-11 !text-sm">Start free</PrimaryButton>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display font-bold text-white mb-3 text-xs uppercase tracking-wider">{c.title}</h3>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span>© {new Date().getFullYear()} Invoice Next. All rights reserved.</span>
          <span>30-day money-back guarantee.</span>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const pageTitle = 'Invoice Next — Simple Invoicing for Small Businesses';
  const pageDescription = 'Invoice Next helps freelancers and small businesses create professional invoices, accept online payments, and manage billing faster with simple tools.';

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Helmet>
        <title>Invoice Next — Simple Invoicing for Small Businesses</title>
        <meta
          name="description"
          content="Invoice Next helps freelancers and small businesses create professional invoices, accept online payments, and manage billing faster with simple tools."
        />
      </Helmet>
      <Seo
        title={pageTitle}
        description={pageDescription}
        url="https://invonxt.com/"
        image="https://invonxt.com/og-image.png"
        siteName="Invoice Next"
      />
      <Header />
      <main>
        <Hero />
        <LogoStrip />
        <Stats />
        <HowItWorks />
        <Features />
        <TrustBar />
        <Testimonials />
        <Pricing />
        <Cta />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
