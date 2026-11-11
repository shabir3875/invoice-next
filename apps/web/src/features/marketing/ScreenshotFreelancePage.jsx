import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileSpreadsheet,
  FileText,
  FolderKanban,
  Layers,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import Seo from '../../components/Seo';
import Reveal from '../../components/Reveal';
import { APP_ROUTES } from './data';
import MarketingHeader from './MarketingHeader';
import SiteFooter from './SiteFooter';
import './freelance-page.css';

const LOGIN_URL = APP_ROUTES.login;
const Header = MarketingHeader;
const PAGE_URL = 'https://invonxt.com/templates/freelance/';

const templates = [
  {
    name: 'Modern',
    badge: 'Most Popular',
    badgeTone: 'emerald',
    src: '/images/templates/freelance-template-1.svg',
    alt: 'Modern freelance invoice template with an emerald executive header, itemized project hours, and balance due summary',
    summary: 'Clean executive header with itemized hours, hourly rates, retainer discount, and ACH payment instructions.',
    bestFor: 'UX/UI designers, product consultants & creative studios',
  },
  {
    name: 'Letterhead Style',
    badge: 'Editorial',
    badgeTone: 'amber',
    src: '/images/templates/freelance-template-2.svg',
    alt: 'Letterhead-style freelance invoice template with a warm amber studio header and deliverable breakdown',
    summary: 'Full-width studio letterhead banner designed for fixed-fee deliverables, retainers, and editorial packages.',
    bestFor: 'Copywriters, content strategists & marketing specialists',
  },
  {
    name: 'Classic',
    badge: 'Traditional',
    badgeTone: 'blue',
    src: '/images/templates/freelance-template-3.svg',
    alt: 'Classic freelance invoice template in royal blue with a structured left sidebar and dual signature lines',
    summary: 'Structured left-sidebar layout featuring dedicated client/project columns and formal contractor signature lines.',
    bestFor: 'Software developers, engineers & technical contractors',
  },
  {
    name: 'Printer Friendly',
    badge: 'Ink-Saving',
    badgeTone: 'slate',
    src: '/images/templates/freelance-template-4.svg',
    alt: 'Monochrome printer-friendly freelance invoice template with crisp borders and high-contrast typography',
    summary: 'High-contrast monochrome layout with crisp rules and zero heavy color blocks for effortless black-and-white printing.',
    bestFor: 'Print designers, editorial freelancers & on-site specialists',
  },
  {
    name: 'Wide Margin',
    badge: 'Agency Style',
    badgeTone: 'indigo',
    src: '/images/templates/freelance-template-5.svg',
    alt: 'Wide-margin freelance invoice template in indigo with spacious agency typography and milestone totals',
    summary: 'Generous whitespace and balanced proportions that highlight brand identity packages and multi-phase milestones.',
    bestFor: 'Brand designers, art directors & independent agencies',
  },
  {
    name: 'Modern II',
    badge: 'Creative',
    badgeTone: 'sky',
    src: '/images/templates/freelance-template-6.svg',
    alt: 'Contemporary freelance invoice template with a vertical side invoice number and ocean-blue line item table',
    summary: 'Distinctive vertical invoice number callout paired with a scannable project sprint table and discount line.',
    bestFor: 'Digital marketers, SEO consultants & media creators',
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Save Time on Routine Billing',
    text: 'Start from a proven layout instead of formatting tables, totals, and payment terms from scratch after every project.',
  },
  {
    icon: FolderKanban,
    title: 'Keep Financial Records Organized',
    text: 'Consistent invoice numbers, issue dates, and line items make tax preparation and monthly bookkeeping straightforward.',
  },
  {
    icon: ShieldCheck,
    title: 'Present a Trusted Brand Image',
    text: 'Deliver crisp, well-structured billing documents that reinforce the professionalism of your independent business.',
  },
  {
    icon: Layers,
    title: 'Clarify Scope & Deliverables',
    text: 'Break work down by hours, milestones, or fixed deliverables so clients can approve and process payments without delay.',
  },
  {
    icon: Sparkles,
    title: 'Build a Repeatable Workflow',
    text: 'Reuse saved client profiles, standard service rates, and payment instructions across every new engagement.',
  },
];

const relatedTemplates = [
  {
    label: 'Contractor Invoice Templates',
    description: 'Itemize labor, materials, and project milestones for independent trade and construction work.',
    href: '/businesses/trades/contractor',
  },
  {
    label: 'Consulting Invoice Templates',
    description: 'Bill strategy retainers, advisory hours, and executive project phases with clarity.',
    href: '/consultant-invoice-template',
  },
  {
    label: 'Graphic Design Invoice Templates',
    description: 'Present brand identity packages, revision rounds, and licensing deliverables cleanly.',
    href: '/businesses/creative/graphic-design',
  },
  {
    label: 'Web Development Invoice Templates',
    description: 'Structure sprint billing, API integrations, and maintenance retainers for technical clients.',
    href: '/businesses/creative/web-development',
  },
  {
    label: 'Photography Invoice Templates',
    description: 'Detail shoot day rates, post-production editing, equipment rentals, and usage rights.',
    href: '/businesses/creative/photography',
  },
  {
    label: 'Explore All Business Categories',
    description: 'Browse invoicing and expense workflows tailored to 216+ specialized industries.',
    href: '/for-businesses',
  },
];

const faq = [
  ['What is a freelance invoice used for?', 'A freelance invoice gives your client a clear record of the services or deliverables provided, the amount due, the payment deadline, and your payment instructions. It also gives you a consistent document for your own business records.'],
  ['How do I write a freelance invoice?', 'Add your business and client details, a unique invoice number, issue and due dates, an itemized description of the work, quantities or hours, rates, any applicable tax or discount, the total due, and clear payment instructions.'],
  ['What should a freelance invoice template include?', 'A useful template includes contact details for both parties, invoice dates and number, an itemized services table, subtotal and total, payment terms, and space for notes. Only include tax fields or late-payment terms that apply to your business and location.'],
  ['How can I create professional self-employed invoices?', 'Use one consistent layout, write specific service descriptions, check every total, and make the due date easy to find. Adding your business name, logo, and contact details can make the invoice easier for clients to recognize.'],
  ['How can I create invoices while away from my desk?', 'Open Invoice Next in a supported browser, sign in, and create or review your invoice from your device. Check the final layout before sharing it with your client, especially on a smaller screen.'],
  ['Can I edit a spreadsheet invoice template?', 'Yes. If you use a spreadsheet template, open it in compatible spreadsheet software and replace the sample details with your own. Verify formulas, currency, tax, dates, and print settings before sending the finished invoice.'],
  ['Are there additional invoice templates for freelancers?', 'Yes. Freelancers can also start from consulting, contractor, Word-style, spreadsheet-style, or other professional layouts. Choose the structure that best matches how you price and describe your work.'],
];

function Cta({ final = false }) {
  return (
    <Reveal
      as="section"
      className={`freelance-cta relative overflow-hidden rounded-3xl px-6 py-12 text-white sm:px-12 sm:py-14 ${
        final ? 'bg-slate-950 text-center' : 'bg-gradient-to-r from-orange-600 to-orange-500'
      }`}
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div
        className={`relative ${
          final
            ? 'mx-auto max-w-2xl'
            : 'flex flex-col items-start justify-between gap-8 md:flex-row md:items-center'
        }`}
      >
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
            <Sparkles size={13} />
            {final ? 'Ready when you are' : 'Online Invoice Generator'}
          </span>
          <h2 className="mt-4 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
            {final
              ? 'Get Started for Free with Invoice Next'
              : 'Create your first invoice with our online invoice generator.'}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
            {final
              ? 'Create clear, professional freelancer invoices, track client payments, and keep your business records organized in one place.'
              : 'Build a customized freelance invoice using your own business logo, client details, itemized rates, and payment terms in minutes.'}
          </p>
        </div>
        <div className={`mt-6 flex flex-wrap items-center gap-3 ${final ? 'justify-center' : 'md:mt-0'}`}>
          <a
            href={LOGIN_URL}
            className="freelance-focus inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
          >
            {final ? 'Get Started for Free' : 'Try It Free'}
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function TemplateCard({ item, index, onPreview }) {
  const templateNumber = index + 1;
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="template-card group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div>
        <div className="flex items-center justify-between gap-2 pb-3.5">
          <span className={`template-badge template-badge-${item.badgeTone}`}>
            {item.badge}
          </span>
          <span className="text-xs font-bold text-slate-400">Template #{templateNumber}</span>
        </div>

        <div
          className="template-preview-frame relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 p-3"
          onClick={() => onPreview(index)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onPreview(index);
            }
          }}
          aria-label={`Preview the ${item.name} freelance invoice template`}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5">
            <img
              src={item.src}
              alt={item.alt}
              width="600"
              height="750"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div className="template-preview-overlay">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-4 py-2 text-xs font-extrabold text-white shadow-lg backdrop-blur-sm">
              <Eye size={14} />
              Click to Preview
            </span>
          </div>
        </div>

        <div className="px-1 pt-5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-extrabold text-slate-950">{item.name}</h3>
            <button
              type="button"
              onClick={() => onPreview(index)}
              className="freelance-focus inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
            >
              <Eye size={13} />
              Preview
            </button>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600">{item.summary}</p>
          <p className="mt-2.5 text-[11px] font-semibold text-slate-500">
            <strong className="text-slate-700">Best for:</strong> {item.bestFor}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 sm:grid-cols-3">
        <a
          href={`/downloads/freelance-invoice-template-${templateNumber}.docx`}
          download={`Freelance-Invoice-Template-${templateNumber}.docx`}
          className="freelance-focus inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-center text-xs font-extrabold text-slate-700 transition"
          aria-label={`Download the ${item.name} template as a Word document`}
        >
          <FileText size={13} className="shrink-0" />
          Word
        </a>
        <a
          href={`/downloads/freelance-invoice-template-${templateNumber}.xlsx`}
          download={`Freelance-Invoice-Template-${templateNumber}.xlsx`}
          className="freelance-focus inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-center text-xs font-extrabold text-slate-700 transition"
          aria-label={`Download the ${item.name} template as an Excel spreadsheet`}
        >
          <FileSpreadsheet size={13} className="shrink-0" />
          Excel
        </a>
        <a
          href={LOGIN_URL}
          className="freelance-focus col-span-2 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-orange-600 px-3 text-center text-xs font-extrabold text-white transition hover:bg-orange-700 sm:col-span-1"
          aria-label={`Customize the ${item.name} template in Invoice Next`}
        >
          Customize
          <ArrowRight size={13} />
        </a>
      </div>
    </Reveal>
  );
}

function TemplatePreviewModal({ activeIndex, onClose, onSelect }) {
  useEffect(() => {
    if (activeIndex === null) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelect((activeIndex + 1) % templates.length);
      if (e.key === 'ArrowLeft') onSelect((activeIndex - 1 + templates.length) % templates.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, onClose, onSelect]);

  if (activeIndex === null) return null;
  const item = templates[activeIndex];
  const templateNumber = activeIndex + 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.name} Freelance Invoice Template Preview`}
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Document Preview Column */}
        <div className="relative flex flex-1 items-center justify-center bg-slate-100 p-4 sm:p-8">
          <button
            type="button"
            onClick={() => onSelect((activeIndex - 1 + templates.length) % templates.length)}
            className="freelance-focus absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 text-slate-700 shadow-md transition hover:bg-white"
            aria-label="Previous template"
          >
            <ChevronLeft size={18} />
          </button>
          <img
            src={item.src}
            alt={item.alt}
            width="600"
            height="750"
            className="max-h-[72vh] w-auto rounded-xl border border-slate-200 bg-white object-contain shadow-lg"
          />
          <button
            type="button"
            onClick={() => onSelect((activeIndex + 1) % templates.length)}
            className="freelance-focus absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 text-slate-700 shadow-md transition hover:bg-white"
            aria-label="Next template"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Details & Download Sidebar */}
        <div className="flex w-full flex-col justify-between border-t border-slate-200 p-6 md:w-80 md:border-l md:border-t-0">
          <div>
            <div className="flex items-center justify-between gap-2">
              <span className={`template-badge template-badge-${item.badgeTone}`}>
                {item.badge}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="freelance-focus rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close preview"
              >
                <X size={18} />
              </button>
            </div>
            <h3 className="mt-4 text-2xl font-black text-slate-950">{item.name}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
            <div className="mt-5 rounded-xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
              <div className="font-extrabold uppercase tracking-wider text-slate-400">Recommended For</div>
              <div className="mt-1 font-semibold text-slate-800">{item.bestFor}</div>
            </div>
            <ul className="mt-5 space-y-2.5 text-xs font-semibold text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                Editable line items, hours &amp; rates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                Automatic tax &amp; discount totals
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                Print-ready A4 &amp; US Letter sizing
              </li>
            </ul>
          </div>

          <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
            <a
              href={LOGIN_URL}
              className="freelance-focus flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 text-xs font-extrabold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Customize Online in Invoice Next
              <ArrowRight size={15} />
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`/downloads/freelance-invoice-template-${templateNumber}.docx`}
                download={`Freelance-Invoice-Template-${templateNumber}.docx`}
                className="freelance-focus inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-xs font-extrabold text-slate-700 transition hover:bg-slate-50"
              >
                <Download size={13} />
                Word (.docx)
              </a>
              <a
                href={`/downloads/freelance-invoice-template-${templateNumber}.xlsx`}
                download={`Freelance-Invoice-Template-${templateNumber}.xlsx`}
                className="freelance-focus inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-xs font-extrabold text-slate-700 transition hover:bg-slate-50"
              >
                <Download size={13} />
                Excel (.xlsx)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const sectionLinks = {
  'Why Should I Use a Self-Employed Invoice Template?': ['well-structured invoice', 'reusable template'],
  'How Are Templates Specifically Designed for Freelancers Better?': ['freelancer-focused layout', 'create an invoice'],
  'How Can I Get Paid?': ['payment method', 'invoicing workflow'],
};

function LinkedParagraph({ children, phrases }) {
  if (typeof children !== 'string' || !phrases) return children;
  const pattern = new RegExp(`(${phrases.join('|')})`, 'gi');
  return children.split(pattern).map((part, index) =>
    phrases.some((phrase) => phrase.toLowerCase() === part.toLowerCase()) ? (
      <a key={`${part}-${index}`} href={LOGIN_URL} className="freelance-inline-link">
        {part}
      </a>
    ) : (
      part
    )
  );
}

function InfoSection({
  eyebrow,
  image,
  alt,
  captionTitle,
  captionSubtitle,
  title,
  highlights = [],
  children,
  reverse = false,
  delay = 0,
}) {
  const linkedChildren = React.Children.map(children, (child) =>
    React.isValidElement(child) && typeof child.props.children === 'string'
      ? React.cloneElement(
          child,
          {},
          <LinkedParagraph phrases={sectionLinks[title]}>{child.props.children}</LinkedParagraph>
        )
      : child
  );

  return (
    <section className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal delay={delay} className={`info-image-wrap relative ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={image}
          alt={alt}
          width="1000"
          height="750"
          loading="lazy"
          decoding="async"
          className="info-image aspect-[4/3] w-full object-cover"
        />
        {captionTitle && (
          <div className="info-image-badge">
            <span className="info-image-badge-icon">
              <Check size={15} />
            </span>
            <div>
              <div className="text-xs font-extrabold text-slate-900">{captionTitle}</div>
              {captionSubtitle && (
                <div className="text-[11px] font-medium text-slate-500">{captionSubtitle}</div>
              )}
            </div>
          </div>
        )}
      </Reveal>

      <Reveal delay={delay + 80} className={reverse ? 'lg:order-1' : ''}>
        {eyebrow && (
          <p className="text-xs font-black uppercase tracking-[.16em] text-orange-700">{eyebrow}</p>
        )}
        <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">{linkedChildren}</div>
        {highlights.length > 0 && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3.5 py-2.5 text-xs font-bold text-slate-700"
              >
                <CheckCircle2 size={15} className="shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </section>
  );
}

export default function ScreenshotFreelancePage() {
  const [previewIndex, setPreviewIndex] = useState(null);

  const title = 'Freelance Invoice Templates | Free Invoice Maker | Invoice Next';
  const description =
    'Create a professional freelance invoice with six polished templates and an easy invoice maker for freelancers and self-employed professionals.';
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url: PAGE_URL,
      isPartOf: { '@type': 'WebSite', name: 'Invoice Next', url: 'https://invonxt.com/' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invonxt.com/' },
        { '@type': 'ListItem', position: 2, name: 'Freelance Invoice Templates', item: PAGE_URL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ];

  return (
    <div className="freelance-page min-h-screen overflow-x-clip bg-white text-slate-900">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Seo
        title={title}
        description={description}
        url={PAGE_URL}
        image="https://invonxt.com/og-image.png"
        imageAlt="Invoice Next freelance invoice templates and invoice maker"
        siteName="Invoice Next"
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="freelance-hero relative overflow-hidden border-b border-slate-200">
          <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-bold text-slate-500">
              <a href="/" className="transition hover:text-emerald-700">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/invoice-templates" className="transition hover:text-emerald-700">Invoice Templates</a>
              <span aria-hidden="true">/</span>
              <span className="text-slate-800">Freelance Invoice Templates</span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-3.5 py-1.5 text-xs font-black uppercase tracking-[.14em] text-orange-700 shadow-sm">
                  <Sparkles size={13} />
                  Made for Independent Professionals
                </div>

                <h1 className="mt-5 text-4xl font-black leading-[1.06] tracking-[-.04em] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
                  Freelance Invoice Templates
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Use a polished freelance invoice template to present completed work, hourly or milestone pricing, and payment terms clearly. Download a ready-to-edit layout below or create a custom branded invoice in Invoice Next.
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
                  {[
                    'Hourly & Milestone Billing',
                    'Free Word & Excel Files',
                    'Instant Online Customizer',
                  ].map((pill) => (
                    <li
                      key={pill}
                      className="flex items-center gap-2 rounded-xl border border-emerald-900/10 bg-white/85 px-3.5 py-2.5 text-xs font-extrabold text-slate-800 shadow-sm"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check size={12} />
                      </span>
                      <span>{pill}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <a
                    href={LOGIN_URL}
                    className="freelance-focus inline-flex min-h-13 items-center gap-2 rounded-xl bg-orange-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-700"
                  >
                    Create Custom Invoice
                    <ArrowRight size={17} />
                  </a>
                  <a
                    href="#templates-grid"
                    className="freelance-focus inline-flex min-h-13 items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-extrabold text-slate-800 shadow-sm transition hover:border-emerald-600 hover:text-emerald-800"
                  >
                    Browse 6 Free Templates
                  </a>
                </div>
              </div>

              {/* Right Visual Showcase */}
              <div className="freelance-hero-visual relative">
                <div className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-3 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85"
                    alt="Independent freelancer reviewing client project deliverables and preparing an invoice on a laptop"
                    width="1000"
                    height="720"
                    loading="eager"
                    decoding="async"
                    className="aspect-[16/11] w-full rounded-2xl object-cover"
                  />
                </div>

                {/* Floating Live Invoice Summary Card */}
                <div className="freelance-hero-float-card">
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">
                        Freelance Invoice #INV-104
                      </div>
                      <div className="text-xs font-extrabold text-slate-900">
                        Northstar Creative Studio
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold text-emerald-700 ring-1 ring-emerald-600/20">
                      Net 14 • Ready
                    </span>
                  </div>
                  <div className="mt-2.5 flex items-baseline justify-between gap-4">
                    <span className="text-xs font-semibold text-slate-500">Total Balance Due</span>
                    <span className="text-base font-black text-slate-950">$3,249.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
          {/* Templates Grid Section */}
          <section id="templates-grid" className="py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[.16em] text-orange-700">
                Downloadable &amp; Customizable Layouts
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
                Choose Your Freelance Invoice Template
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Select from six high-resolution invoice designs built for independent work. Click any template to preview it in full detail, download it as a Word or Excel file, or customize it online in Invoice Next.
              </p>
            </div>

            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {templates.map((item, index) => (
                <TemplateCard
                  key={item.name}
                  item={item}
                  index={index}
                  onPreview={setPreviewIndex}
                />
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-7 text-slate-600">
              These layouts provide a structured starting point for any self-employed professional. Always verify your business details, hourly or flat-rate calculations, applicable taxes, and payment terms before sending an invoice to your client.
            </p>
          </section>

          <Cta />

          {/* Benefits + Alternating Info Sections */}
          <section className="py-20 sm:py-24">
            <Reveal className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-black uppercase tracking-[.16em] text-orange-700">
                  A Consistent Billing Workflow
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                  Benefits of Using a Self-Employed Invoice Template
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  A standardized freelancer invoice layout eliminates repetitive formatting and keeps your client billing organized all year round.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <Reveal
                      key={benefit.title}
                      delay={index * 55}
                      className="benefit-card flex flex-col rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-orange-700">
                        <IconComponent size={19} />
                      </span>
                      <h3 className="mt-4 text-sm font-extrabold text-slate-950">{benefit.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-600">{benefit.text}</p>
                    </Reveal>
                  );
                })}
              </div>
            </Reveal>

            {/* 3 Alternating Real-Photography Feature Sections */}
            <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-28">
              <InfoSection
                eyebrow="Professional Client Experience"
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85"
                alt="Freelancer reviewing a project proposal and client invoice on a laptop at a bright modern desk"
                captionTitle="Clear Scope & Faster Client Sign-Off"
                captionSubtitle="Itemized services, dates, and payment terms in one view"
                title="Why Should I Use a Self-Employed Invoice Template?"
                highlights={[
                  'Consistent business branding',
                  'Itemized service descriptions',
                  'Clear issue & payment due dates',
                  'Organized tax-time documentation',
                ]}
              >
                <p>
                  When you work for yourself, a well-structured invoice helps clients understand what they are paying for and when payment is due. It also supports a consistent, professional experience from project delivery through billing.
                </p>
                <p>
                  A reusable template saves formatting time and gives you a dependable place for client details, services, prices, dates, and payment instructions without rebuilding documents from scratch.
                </p>
              </InfoSection>

              <InfoSection
                reverse
                delay={70}
                eyebrow="Tailored for Independent Work"
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                alt="Freelance designer and consultant reviewing project milestones and billing rates on a laptop workspace"
                captionTitle="Flexible Billing Structures"
                captionSubtitle="Supports hourly rates, fixed-fee projects, and retainers"
                title="How Are Templates Specifically Designed for Freelancers Better?"
                highlights={[
                  'Hourly & time-tracked billing',
                  'Fixed-price project milestones',
                  'Retainer & deposit deductions',
                  'Reimbursable expense lines',
                ]}
              >
                <p>
                  Freelancers may bill by hour, project, milestone, or deliverable. A freelancer-focused layout leaves room for those details without crowding the document with shipping or warehouse fields that do not fit independent work.
                </p>
                <p>
                  Choose a design that makes the scope, rate, total, and terms easy to scan. Invoice Next lets you create an invoice using your own business and client information after you sign in.
                </p>
              </InfoSection>

              <InfoSection
                delay={110}
                eyebrow="Streamlined Payment Tracking"
                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85"
                alt="Independent professional reviewing financial payment records and paid client invoices at an organized desk"
                captionTitle="Organized Payment Records"
                captionSubtitle="Track unpaid, partial, and settled client balances"
                title="How Can I Get Paid?"
                highlights={[
                  'State accepted payment methods clearly',
                  'Set unambiguous Net 7, 14, or 30 terms',
                  'Record full or partial external payments',
                  'Generate client account statements',
                ]}
              >
                <p>
                  Add the payment method and instructions you have agreed with your client, then send the invoice through your preferred communication channel. After payment arrives, keep your records up to date.
                </p>
                <p>
                  Invoice Next does not process client payments directly. Payments are received through your chosen external method—such as bank transfer, ACH, wire, PayPal, or check—and can be recorded in your invoicing workflow.
                </p>

                <div className="mt-6 grid gap-3 pt-2 sm:grid-cols-3">
                  {[
                    ['Step 1', 'Specify Payment Method', 'Include bank/ACH details or external payment instructions on the invoice.'],
                    ['Step 2', 'Share With Your Client', 'Export a crisp PDF or share the finished invoice directly with your client.'],
                    ['Step 3', 'Record & Track Status', 'Log received payments in Invoice Next to monitor paid and outstanding balances.'],
                  ].map(([step, heading, desc]) => (
                    <div key={step} className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                      <span className="inline-block rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                        {step}
                      </span>
                      <div className="mt-2 text-xs font-extrabold text-slate-900">{heading}</div>
                      <p className="mt-1 text-[11px] leading-5 text-slate-500">{desc}</p>
                    </div>
                  ))}
                </div>
              </InfoSection>
            </div>
          </section>

          {/* Additional Invoice Templates for Freelancers */}
          <section className="border-t border-slate-200 py-20 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[.16em] text-orange-700">
                Industry-Specific Starting Points
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Additional Invoice Templates for Freelancers
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Explore specialized invoicing guides and templates tailored to different freelance professions and service models.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTemplates.map((item, index) => (
                <Reveal key={item.label} delay={index * 45}>
                  <a
                    href={item.href}
                    className="freelance-focus related-card group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-800">
                          {item.label}
                        </h3>
                        <ArrowRight
                          className="shrink-0 text-orange-600 transition-transform group-hover:translate-x-1"
                          size={18}
                        />
                      </div>
                      <p className="mt-2.5 text-xs leading-6 text-slate-600">{item.description}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                      Explore workflow
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="border-t border-slate-200 py-20 sm:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-xs font-black uppercase tracking-[.16em] text-orange-700">
                  Helpful Answers
                </p>
                <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                  Freelance Invoice Template FAQ
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Common questions about creating, customizing, and managing self-employed invoices.
                </p>
              </div>
              <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm sm:px-8">
                {faq.map(([question, answer]) => (
                  <details key={question} className="faq-item group">
                    <summary className="freelance-focus flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-extrabold text-slate-900">
                      {question}
                      <ChevronDown
                        className="shrink-0 text-orange-600 transition duration-300 group-open:rotate-180"
                        size={19}
                      />
                    </summary>
                    <div className="faq-answer">
                      <p className="max-w-3xl pb-6 text-sm leading-7 text-slate-600">{answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <div className="pb-20">
            <Cta final />
          </div>
        </div>
      </main>

      <TemplatePreviewModal
        activeIndex={previewIndex}
        onClose={() => setPreviewIndex(null)}
        onSelect={setPreviewIndex}
      />

      <SiteFooter />
    </div>
  );
}
