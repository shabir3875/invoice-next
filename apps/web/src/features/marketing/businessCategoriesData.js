import {
  Activity,
  Brain,
  Briefcase,
  Building2,
  Calculator,
  CalendarCheck,
  Camera,
  ClipboardCheck,
  Code2,
  Droplets,
  FileEdit,
  FileSpreadsheet,
  FileText,
  Gavel,
  Globe,
  Hammer,
  Handshake,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Home,
  KeyRound,
  Laptop,
  Layers,
  Megaphone,
  PackageCheck,
  Palette,
  PenTool,
  Ruler,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Smile,
  Sparkles,
  Stamp,
  Stethoscope,
  Store,
  Trees,
  User,
  UserCheck,
  Users,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react';

export const BUSINESS_HERO_DATA = {
  eyebrow: 'Invoice Next for Businesses',
  heading: 'Explore Business Categories',
  description:
    'Discover how Invoice Next helps professionals and businesses simplify invoicing, manage expenses, organize clients, and maintain better financial records.',
  benefits: [
    'Simple Business Invoicing',
    'Expense & Client Management',
    'Professional Business Guidance',
  ],
  image:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85',
  imageAlt:
    'Small business owners reviewing client invoices and project plans together in a modern workspace',
};

export const INVONXT_FEATURE_MAP = {
  '/features/lightning-fast-invoicing': {
    title: 'Fast Invoicing',
    summary: 'Create, customize, and deliver professional PDF-ready invoices in seconds.',
  },
  '/features/estimates-to-invoices': {
    title: 'Estimates to Invoices',
    summary: 'Prepare detailed project quotes and convert approved estimates into invoice drafts.',
  },
  '/features/payment-tracking': {
    title: 'Payment Tracking',
    summary: 'Record full or partial payments and keep every outstanding balance clearly visible.',
  },
  '/features/client-management': {
    title: 'Client & Item Management',
    summary: 'Save customer profiles, supplier contacts, and reusable products or services.',
  },
  '/features/customer-statements': {
    title: 'Customer Statements',
    summary: 'Generate clear account statements summarizing billed work, payments, and balances.',
  },
  '/features/inventory-tracking': {
    title: 'Inventory Tracking',
    summary: 'Track stock quantities, projected availability, and low-stock reorder thresholds.',
  },
  '/features/sales-stock-reports': {
    title: 'Sales & Financial Reports',
    summary: 'Review income, expenses, profit margins, tax summaries, and top-performing items.',
  },
  '/features/document-customization': {
    title: 'Document Customization',
    summary: 'Tailor line items, tax rates, discounts, payment terms, and company branding.',
  },
  '/features/import-export-records': {
    title: 'Import & Export Records',
    summary: 'Export invoices, expenses, and financial summaries in PDF and XLSX formats.',
  },
};

export const BUSINESS_CATEGORIES = [
  {
    id: 'trades',
    name: 'Trades',
    slug: 'trades',
    description:
      'Practical estimate-to-invoice workflows, parts and labor itemization, and job payment tracking for skilled tradespeople and field contractors.',
    icon: Hammer,
    thumbnail:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Skilled tradesperson inspecting work at an active commercial site',
    defaultChallenges: [
      'Separating material costs, replacement parts, and hourly labor clearly on client quotes and invoices',
      'Converting approved job estimates into final invoices without re-typing line items',
      'Tracking upfront deposits, progress payments, and remaining balances across multiple active job sites',
    ],
    defaultBenefits: [
      'Convert approved estimates directly into editable invoice drafts',
      'Save reusable catalog items for common parts, materials, and labor rates',
      'Record deposits and partial payments while keeping remaining balances clear',
      'Log supplier material purchases and job-site expenses in one workspace',
    ],
    defaultGuidance: [
      'Itemize parts and labor separately so clients can see exact material quantities alongside technician service hours.',
      'Set clear deposit and milestone payment terms before beginning on-site work.',
      'Record material receipts and supplier bills as expenses immediately to protect job profit margins.',
    ],
    defaultFeatures: [
      '/features/estimates-to-invoices',
      '/features/payment-tracking',
      '/features/client-management',
      '/features/inventory-tracking',
    ],
    subcategories: [
      {
        id: 'auto-repair-mechanic',
        name: 'Auto Repair & Mechanic',
        slug: 'auto-repair-mechanic',
        icon: Wrench,
        description:
          'Itemize diagnostic fees, replacement auto parts, shop supplies, and mechanic labor hours with clear repair invoices.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Mechanic repairing a vehicle engine inside a professional automotive workshop',
        url: '/businesses/trades/auto-repair-mechanic',
        challenges: [
          'Breaking down OEM or aftermarket parts, shop consumables, and diagnostic labor on a single readable repair bill',
          'Getting customer approval on repair estimates before ordering parts or starting bay work',
          'Keeping vehicle service history and repeat customer billing records organized',
        ],
      },
      {
        id: 'construction',
        name: 'Construction',
        slug: 'construction',
        icon: HardHat,
        description:
          'Manage phase-by-phase progress billing, building material costs, and subcontractor expenses across construction projects.',
        image:
          'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Construction workers collaborating at an active building construction site',
        url: '/businesses/trades/construction',
        challenges: [
          'Managing staged progress billing across foundation, framing, and finishing phases',
          'Tracking partial payments, mobilization deposits, and outstanding contract balances',
          'Monitoring building material expenses alongside client billing to maintain project profitability',
        ],
      },
      {
        id: 'contractor',
        name: 'Contractor',
        slug: 'contractor',
        icon: ClipboardCheck,
        description:
          'Prepare detailed project estimates, convert approved scopes into invoices, and track client deposits and expenses.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'General contractor reviewing architectural blueprints on site',
        url: '/businesses/trades/contractor',
        existingSolutionSlug: 'contractors',
      },
      {
        id: 'electrician',
        name: 'Electrician',
        slug: 'electrician',
        icon: Zap,
        description:
          'Bill residential and commercial electrical installations, panel upgrades, wiring materials, and emergency call-outs.',
        image:
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Licensed electrician inspecting commercial electrical switchgear safely',
        url: '/businesses/trades/electrician',
      },
      {
        id: 'plumber',
        name: 'Plumber',
        slug: 'plumber',
        icon: Droplets,
        description:
          'Create fast on-site quotes and invoices for pipe repairs, fixture installations, service calls, and plumbing parts.',
        image:
          'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional plumber repairing a water pipe fitting with a wrench',
        url: '/businesses/trades/plumber',
      },
      {
        id: 'carpenter',
        name: 'Carpenter',
        slug: 'carpenter',
        icon: Ruler,
        description:
          'Quote custom woodwork, cabinetry, timber materials, and finish carpentry labor with polished client documents.',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Carpenter measuring and shaping timber in a woodworking workshop',
        url: '/businesses/trades/carpenter',
      },
      {
        id: 'hvac-technician',
        name: 'HVAC Technician',
        slug: 'hvac-technician',
        icon: Wind,
        description:
          'Invoice heating, ventilation, and air-conditioning installations, seasonal maintenance plans, and replacement units.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'HVAC technician inspecting climate control equipment with diagnostic tools',
        url: '/businesses/trades/hvac-technician',
      },
    ],
  },
  {
    id: 'legal',
    name: 'Legal',
    slug: 'legal',
    description:
      'Structured fee itemization, consultation billing, disbursement tracking, and clear client account statements for legal professionals.',
    icon: Scale,
    thumbnail:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Professional legal office desk with law books and scales of justice',
    defaultChallenges: [
      'Presenting legal consultation hours, flat-fee services, and reimbursable filing costs clearly to clients',
      'Keeping client billing records, payment histories, and outstanding balances organized across matters',
      'Producing professional account statements when clients request a summary of billed work and payments',
    ],
    defaultBenefits: [
      'Create clear, itemized invoices for hourly consultations, flat-fee filings, and legal research',
      'Generate customer account statements showing all invoices, recorded payments, and remaining balances',
      'Record filing fees and third-party disbursements as structured expense entries',
      'Maintain detailed client contact profiles, tax IDs, and billing notes in one place',
    ],
    defaultGuidance: [
      'Separate professional legal service fees from reimbursable court, filing, or courier disbursements on every invoice.',
      'Include clear due dates and reference numbers so corporate and individual clients can process payments promptly.',
      'Use periodic customer statements to give ongoing clients a transparent summary of their account activity.',
    ],
    defaultFeatures: [
      '/features/lightning-fast-invoicing',
      '/features/customer-statements',
      '/features/client-management',
      '/features/payment-tracking',
    ],
    subcategories: [
      {
        id: 'law-firm',
        name: 'Law Firm',
        slug: 'law-firm',
        icon: Building2,
        description:
          'Standardize client billing, itemized legal service invoices, expense records, and account statements across your practice.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern law firm conference room in a professional office building',
        url: '/businesses/legal/law-firm',
        existingSolutionSlug: 'legal-firms',
      },
      {
        id: 'attorney',
        name: 'Attorney',
        slug: 'attorney',
        icon: Gavel,
        description:
          'Bill legal consultations, case preparation, document drafting, and reimbursable expenses with clarity.',
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Attorney working in a professional legal office',
        url: '/businesses/legal/attorney',
      },
      {
        id: 'paralegal',
        name: 'Paralegal',
        slug: 'paralegal',
        icon: FileSpreadsheet,
        description:
          'Invoice independent paralegal research, document preparation, filing support, and contract administration.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Paralegal reviewing legal contracts and case documentation at desk',
        url: '/businesses/legal/paralegal',
      },
      {
        id: 'legal-consultant',
        name: 'Legal Consultant',
        slug: 'legal-consultant',
        icon: ShieldCheck,
        description:
          'Manage advisory proposals, compliance review billing, retainer agreements, and corporate client statements.',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Legal consultant reviewing compliance documents in an office setting',
        url: '/businesses/legal/legal-consultant',
      },
      {
        id: 'notary-public',
        name: 'Notary Public',
        slug: 'notary-public',
        icon: Stamp,
        description:
          'Issue clean receipts and invoices for notarizations, mobile signing appointments, and loan signing packages.',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional signing and verifying official legal documents at a desk',
        url: '/businesses/legal/notary-public',
      },
    ],
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    description:
      'All-in-one invoicing, expense tracking, inventory management, and financial reporting for freelancers, firms, and commercial sellers.',
    icon: Briefcase,
    thumbnail:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Business analytics and financial workspace on a modern desk',
    defaultChallenges: [
      'Replacing scattered spreadsheets with a single organized system for invoices, clients, and expenses',
      'Keeping track of unpaid invoices, partial payments, and overall cash flow',
      'Managing product catalogs, service pricing, and tax calculations accurately',
    ],
    defaultBenefits: [
      'Create professional branded invoices and quotes from saved customer and item records',
      'Track income, supplier expenses, and cash or accrual profit-and-loss summaries',
      'Monitor inventory stock levels, reorder points, and top-selling items',
      'Export financial reports and records to PDF or XLSX whenever needed',
    ],
    defaultGuidance: [
      'Save your recurring clients and standard products or services in your catalog to generate new invoices in under a minute.',
      'Review outstanding receivables weekly and send customer statements to keep cash flow predictable.',
      'Log supplier bills and operating expenses consistently so your profit-and-loss reports stay accurate.',
    ],
    defaultFeatures: [
      '/features/lightning-fast-invoicing',
      '/features/sales-stock-reports',
      '/features/inventory-tracking',
      '/features/import-export-records',
    ],
    subcategories: [
      {
        id: 'rental-invoice-template',
        name: 'Rental Invoice Template',
        slug: 'rental-invoice-template',
        icon: KeyRound,
        description:
          'Generate clear rental invoices for equipment, property, vehicles, and recurring lease periods with security deposit tracking.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Property and rental manager handing over keys with a formal rental invoice',
        url: '/businesses/business/rental-invoice-template',
      },
      {
        id: 'consulting',
        name: 'Consulting',
        slug: 'consulting',
        icon: UserCheck,
        description:
          'Deliver executive-ready consulting proposals, convert approved scopes into invoices, and track retainers and advisory milestones.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Business consultant presenting strategic analysis to clients in a meeting room',
        url: '/businesses/business/consulting',
        existingSolutionSlug: 'consultants',
      },
      {
        id: 'freelance',
        name: 'Freelance',
        slug: 'freelance',
        icon: Laptop,
        description:
          'Send polished project invoices, prepare client estimates, track partial and full payments, and organize deductible freelance expenses.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Freelance professional working on a laptop in a bright modern studio',
        url: '/businesses/business/freelance',
        existingSolutionSlug: 'freelancers',
      },
      {
        id: 'b2b',
        name: 'B2B',
        slug: 'b2b',
        icon: Handshake,
        description:
          'Manage B2B wholesale billing, purchase order references, net payment terms, volume discounts, and corporate account statements.',
        image:
          'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'B2B commercial partners shaking hands across a conference table',
        url: '/businesses/business/b2b',
      },
      {
        id: 'computer-shop',
        name: 'Computer Shop',
        slug: 'computer-shop',
        icon: Laptop,
        description:
          'Track PC hardware inventory, itemize custom builds and diagnostic repair labor, and issue warranty-ready customer invoices.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Technician testing computer hardware and laptops at a clean workbench',
        url: '/businesses/business/computer-shop',
      },
      {
        id: 'journalist',
        name: 'Journalist',
        slug: 'journalist',
        icon: FileEdit,
        description:
          'Invoice media publications for commissioned articles, investigative reporting, syndication rights, and travel reimbursements.',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Journalist drafting an investigative story and notes at an editorial desk',
        url: '/businesses/business/journalist',
      },
      {
        id: 'saas-quote-templates',
        name: 'SaaS Quote Templates',
        slug: 'saas-quote-templates',
        icon: Globe,
        description:
          'Prepare structured software subscription quotes with seat tiers, onboarding fees, annual discounts, and enterprise SLA terms.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'SaaS metrics and subscription pricing proposal on a modern laptop screen',
        url: '/businesses/business/saas-quote-templates',
      },
      {
        id: 'bakery',
        name: 'Bakery',
        slug: 'bakery',
        icon: Store,
        description:
          'Bill wholesale pastry accounts, custom cake orders, event catering deposits, and daily ingredient supplier expenses.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Small bakery owner serving customers and managing orders at the counter',
        url: '/businesses/business/bakery',
      },
      {
        id: 'lodging',
        name: 'Lodging',
        slug: 'lodging',
        icon: Home,
        description:
          'Create itemized guest folios, corporate stay invoices, room block quotes, and occupancy tax summaries for lodging properties.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Welcoming boutique lodging interior prepared for arriving guests',
        url: '/businesses/business/lodging',
      },
      {
        id: 'sales-quote-templates',
        name: 'Sales Quote Templates',
        slug: 'sales-quote-templates',
        icon: FileText,
        description:
          'Send fast, persuasive sales quotes with clear product pricing, volume discounts, validity dates, and one-click invoice conversion.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Sales team reviewing commercial price quotes and order proposals',
        url: '/businesses/business/sales-quote-templates',
      },
      {
        id: 'bank',
        name: 'Bank',
        slug: 'bank',
        icon: Building2,
        description:
          'Document financial advisory fees, commercial account servicing, transaction schedules, and institutional billing statements.',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Financial banking specialist reviewing institutional account documents',
        url: '/businesses/business/bank',
      },
      {
        id: 'copywriter',
        name: 'Copywriter',
        slug: 'copywriter',
        icon: PenTool,
        description:
          'Quote conversion copywriting packages, landing page scripts, email sequences, and monthly editorial retainers cleanly.',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Copywriter crafting brand messaging and campaign copy at a workspace',
        url: '/businesses/business/copywriter',
      },
      {
        id: 'logistics',
        name: 'Logistics',
        slug: 'logistics',
        icon: PackageCheck,
        description:
          'Invoice supply chain coordination, last-mile distribution, customs handling fees, fuel surcharges, and warehousing services.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Logistics coordinator managing distribution pallets inside a fulfillment center',
        url: '/businesses/business/logistics',
      },
      {
        id: 'seo',
        name: 'Seo',
        slug: 'seo',
        icon: Globe,
        description:
          'Bill technical SEO audits, keyword research sprints, content optimization retainers, and link-building campaign milestones.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'SEO specialist analyzing organic search performance and analytics charts',
        url: '/businesses/business/seo',
      },
      {
        id: 'bed-and-breakfast',
        name: 'Bed And Breakfast',
        slug: 'bed-and-breakfast',
        icon: Home,
        description:
          'Manage guest booking deposits, nightly room rates, dining add-ons, and housekeeping supply expenses for your B&B.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Bright, inviting guest room in a boutique bed and breakfast property',
        url: '/businesses/business/bed-and-breakfast',
      },
      {
        id: 'corporate',
        name: 'Corporate',
        slug: 'corporate',
        icon: Building2,
        description:
          'Standardize multi-department invoicing, vendor expense tracking, consolidated client statements, and executive financial reporting.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern corporate headquarters boardroom and executive workspace',
        url: '/businesses/business/corporate',
      },
      {
        id: 'manufacturing',
        name: 'Manufacturing',
        slug: 'manufacturing',
        icon: Layers,
        description:
          'Track raw material stock, bill production runs and tooling setup fees, and reconcile factory supplier expenses.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Manufacturing engineer inspecting precision production equipment',
        url: '/businesses/business/manufacturing',
      },
      {
        id: 'social-media',
        name: 'Social Media',
        slug: 'social-media',
        icon: Megaphone,
        description:
          'Invoice monthly social media management retainers, paid ad spend reimbursements, short-form video packages, and creator campaigns.',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Social media strategists planning content calendars in a creative office',
        url: '/businesses/business/social-media',
      },
      {
        id: 'bookkeeping-invoices',
        name: 'Bookkeeping Invoices',
        slug: 'bookkeeping-invoices',
        icon: Calculator,
        description:
          'Bill monthly reconciliation services, payroll administration, tax preparation, and financial cleanup projects with precision.',
        image:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Bookkeeper reviewing general ledger statements and invoices at a desk',
        url: '/businesses/business/bookkeeping-invoices',
        existingSolutionSlug: 'accountants',
      },
      {
        id: 'dance-teacher',
        name: 'Dance Teacher',
        slug: 'dance-teacher',
        icon: Users,
        description:
          'Invoice private dance lessons, group class packages, choreography fees, studio rentals, and recital costume expenses.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Instructor organizing class schedules and student billing records',
        url: '/businesses/business/dance-teacher',
      },
      {
        id: 'marketing',
        name: 'Marketing',
        slug: 'marketing',
        icon: Megaphone,
        description:
          'Create proposals and invoices for brand strategy, lead generation campaigns, media buying retainers, and performance analytics.',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Marketing team collaborating on campaign performance in a modern office',
        url: '/businesses/business/marketing',
      },
      {
        id: 'software',
        name: 'Software',
        slug: 'software',
        icon: Code2,
        description:
          'Bill custom software development, SaaS licensing, implementation milestones, and ongoing maintenance and support contracts.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Software engineer building enterprise applications on a workstation',
        url: '/businesses/business/software',
      },
      {
        id: 'broker',
        name: 'Broker',
        slug: 'broker',
        icon: Handshake,
        description:
          'Document brokerage commissions, deal advisory retainers, transaction success fees, and client settlement statements.',
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Commercial broker reviewing transaction agreements in an executive office',
        url: '/businesses/business/broker',
      },
      {
        id: 'developer',
        name: 'Developer',
        slug: 'developer',
        icon: Code2,
        description:
          'Invoice full-stack engineering sprints, API integrations, technical architecture reviews, and DevOps support retainers.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Application developer writing and testing code on a laptop',
        url: '/businesses/business/developer',
      },
      {
        id: 'party-rental',
        name: 'Party Rental',
        slug: 'party-rental',
        icon: CalendarCheck,
        description:
          'Track tent, seating, lighting, and AV inventory while billing event booking deposits, delivery fees, and damage waivers.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Event space staged with professional party rental seating and lighting',
        url: '/businesses/business/party-rental',
      },
      {
        id: 'sole-proprietor',
        name: 'Sole Proprietor',
        slug: 'sole-proprietor',
        icon: User,
        description:
          'Run your independent business with simple invoicing, expense tracking, client payment records, and tax-ready financial summaries.',
        image:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Sole proprietor managing business operations and client billing',
        url: '/businesses/business/sole-proprietor',
      },
      {
        id: 'brokerage',
        name: 'Brokerage',
        slug: 'brokerage',
        icon: Briefcase,
        description:
          'Manage multi-agent commission splits, commercial closing invoices, client trust statements, and brokerage operating expenses.',
        image:
          'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Brokerage partners finalizing a commercial agreement with clients',
        url: '/businesses/business/brokerage',
      },
      {
        id: 'dry-cleaning',
        name: 'Dry Cleaning',
        slug: 'dry-cleaning',
        icon: Sparkles,
        description:
          'Bill commercial hotel and restaurant laundry accounts, garment care packages, alterations, and pickup-and-delivery routes.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional garment and commercial cleaning service operation',
        url: '/businesses/business/dry-cleaning',
      },
      {
        id: 'pro-forma',
        name: 'Pro Forma',
        slug: 'pro-forma',
        icon: FileSpreadsheet,
        description:
          'Generate accurate pro forma invoices for customs declarations, advance payment requests, and international trade shipments.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Export specialist preparing a pro forma invoice and commercial trade documents',
        url: '/businesses/business/pro-forma',
      },
      {
        id: 'sole-trader',
        name: 'Sole Trader',
        slug: 'sole-trader',
        icon: User,
        description:
          'Create professional quotes and invoices on the go, log business receipts, and keep sole trader income and expenses organized.',
        image:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Independent sole trader reviewing client invoices and financial records',
        url: '/businesses/business/sole-trader',
      },
      {
        id: 'business',
        name: 'Business',
        slug: 'business',
        icon: Briefcase,
        description:
          'Unify customer invoicing, estimates, supplier expenses, inventory catalogs, and profit-and-loss reporting in one platform.',
        image:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Business team reviewing operational performance and client billing',
        url: '/businesses/business/business',
        existingSolutionSlug: 'small-businesses',
      },
      {
        id: 'ecommerce',
        name: 'Ecommerce',
        slug: 'ecommerce',
        icon: ShoppingBag,
        description:
          'Track SKU inventory across channels, issue B2B and wholesale order invoices, and monitor shipping and supplier unit costs.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Ecommerce fulfillment team preparing customer orders and inventory boxes',
        url: '/businesses/business/ecommerce',
      },
      {
        id: 'professional-quote-templates',
        name: 'Professional Quote Templates',
        slug: 'professional-quote-templates',
        icon: FileText,
        description:
          'Present polished service proposals with itemized deliverables, tax breakdowns, and instant conversion to final invoices.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional reviewing a formal service quote and contract proposal',
        url: '/businesses/business/professional-quote-templates',
      },
      {
        id: 'solicitor',
        name: 'Solicitor',
        slug: 'solicitor',
        icon: Scale,
        description:
          'Itemize legal advice, conveyancing fees, court disbursements, and client retainer statements with clear audit trails.',
        image:
          'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Solicitor desk with legal reference volumes and client matter files',
        url: '/businesses/business/solicitor',
      },
      {
        id: 'business-quote-templates',
        name: 'Business Quote Templates',
        slug: 'business-quote-templates',
        icon: ClipboardCheck,
        description:
          'Standardize commercial price quotes across your sales team with saved catalog items, custom terms, and branded PDF output.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Business managers reviewing commercial quote templates and pricing tables',
        url: '/businesses/business/business-quote-templates',
      },
      {
        id: 'engineering',
        name: 'Engineering',
        slug: 'engineering',
        icon: Ruler,
        description:
          'Bill civil, structural, mechanical, and electrical engineering design phases, CAD deliverables, and site inspection hours.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Engineer reviewing technical blueprints and structural drawings',
        url: '/businesses/business/engineering',
      },
      {
        id: 'project-management',
        name: 'Project Management',
        slug: 'project-management',
        icon: ClipboardCheck,
        description:
          'Align billing with project milestones, track subcontractor and material costs, and keep stakeholders updated with clear statements.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Project manager leading a milestone review meeting with team members',
        url: '/businesses/business/project-management',
      },
      {
        id: 'sound-engineer',
        name: 'Sound Engineer',
        slug: 'sound-engineer',
        icon: Activity,
        description:
          'Invoice studio recording sessions, mixing and mastering packages, live event audio engineering, and gear rental fees.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Audio and media production equipment inside a professional studio',
        url: '/businesses/business/sound-engineer',
      },
      {
        id: 'car-dealer',
        name: 'Car Dealer',
        slug: 'car-dealer',
        icon: Wrench,
        description:
          'Prepare vehicle sales invoices, trade-in adjustments, dealer documentation fees, warranty packages, and deposit receipts.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Automotive specialist preparing a vehicle for customer handover',
        url: '/businesses/business/car-dealer',
      },
      {
        id: 'event-planner',
        name: 'Event Planner',
        slug: 'event-planner',
        icon: CalendarCheck,
        description:
          'Manage event budgets, client booking deposits, vendor pass-through expenses, and staged production milestone billing.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Event planner inspecting a professionally arranged conference hall',
        url: '/businesses/business/event-planner',
      },
      {
        id: 'project-quote-templates',
        name: 'Project Quote Templates',
        slug: 'project-quote-templates',
        icon: FileSpreadsheet,
        description:
          'Break complex multi-phase projects into clear cost estimates covering discovery, execution, materials, and contingency.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Project planner preparing an itemized project cost estimate',
        url: '/businesses/business/project-quote-templates',
      },
      {
        id: 'spa',
        name: 'Spa',
        slug: 'spa',
        icon: Sparkles,
        description:
          'Bill wellness packages, massage and aesthetic memberships, corporate retreat bookings, and retail skincare inventory.',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Wellness and spa practitioner attending to a client in a serene clinic',
        url: '/businesses/business/spa',
      },
      {
        id: 'car-dealership',
        name: 'Car Dealership',
        slug: 'car-dealership',
        icon: Building2,
        description:
          'Manage fleet sales quotes, showroom vehicle billing, service department invoices, and parts inventory in one system.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Automotive dealership service and inspection bay',
        url: '/businesses/business/car-dealership',
      },
      {
        id: 'farm',
        name: 'Farm',
        slug: 'farm',
        icon: Trees,
        description:
          'Invoice wholesale produce buyers, restaurant farm-to-table accounts, CSA subscriptions, and track feed and equipment costs.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Well-tended agricultural greenery and cultivated grounds',
        url: '/businesses/business/farm',
      },
      {
        id: 'public-relations',
        name: 'Public Relations',
        slug: 'public-relations',
        icon: Megaphone,
        description:
          'Bill monthly PR retainers, press release distribution, media training workshops, crisis communications, and event press kits.',
        image:
          'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Public relations team reviewing media coverage and communications strategy',
        url: '/businesses/business/public-relations',
      },
      {
        id: 'sponsor',
        name: 'Sponsor',
        slug: 'sponsor',
        icon: HeartHandshake,
        description:
          'Issue professional sponsorship proposals and invoices for conferences, sports teams, creator partnerships, and charity galas.',
        image:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Event organizers and corporate sponsors collaborating on a community program',
        url: '/businesses/business/sponsor',
      },
      {
        id: 'car-rental',
        name: 'Car Rental',
        slug: 'car-rental',
        icon: KeyRound,
        description:
          'Itemize daily or weekly vehicle rental rates, mileage charges, insurance waivers, fuel top-ups, and security deposits.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Rental agent preparing keys and rental agreement for a customer',
        url: '/businesses/business/car-rental',
      },
      {
        id: 'finance',
        name: 'Finance',
        slug: 'finance',
        icon: Calculator,
        description:
          'Generate structured advisory invoices, portfolio management statements, valuation project quotes, and expense summaries.',
        image:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Finance professional analyzing cash flow reports and statements',
        url: '/businesses/business/finance',
      },
      {
        id: 'publisher',
        name: 'Publisher',
        slug: 'publisher',
        icon: FileEdit,
        description:
          'Manage advertising insertion orders, wholesale book distribution invoices, print run expenses, and contributor payments.',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Editorial and publishing desk with manuscripts and layout proofs',
        url: '/businesses/business/publisher',
      },
      {
        id: 'supermarket',
        name: 'Supermarket',
        slug: 'supermarket',
        icon: Store,
        description:
          'Monitor high-volume stock levels, manage B2B corporate grocery accounts, and track wholesale supplier purchase costs.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Retail checkout and customer billing counter in a busy store',
        url: '/businesses/business/supermarket',
      },
      {
        id: 'car-sales',
        name: 'Car Sales',
        slug: 'car-sales',
        icon: Handshake,
        description:
          'Create clear buyer order quotes, bill of sale invoices, deposit receipts, and balance statements for automotive sales.',
        image:
          'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Sales professional completing a vehicle purchase agreement with a buyer',
        url: '/businesses/business/car-sales',
      },
      {
        id: 'formal-quote-templates',
        name: 'Formal Quote Templates',
        slug: 'formal-quote-templates',
        icon: Stamp,
        description:
          'Produce executive-ready formal tenders and RFP price quotes with terms, signatures, tax breakdowns, and validity periods.',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Executive signing a formal commercial quote and tender document',
        url: '/businesses/business/formal-quote-templates',
      },
      {
        id: 'quote-proposal-templates',
        name: 'Quote Proposal Templates',
        slug: 'quote-proposal-templates',
        icon: FileText,
        description:
          'Combine project scope summaries with transparent line-item pricing and convert accepted proposals into invoices in one click.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Consultant preparing a detailed client quote proposal at a desk',
        url: '/businesses/business/quote-proposal-templates',
      },
      {
        id: 'supplier',
        name: 'Supplier',
        slug: 'supplier',
        icon: PackageCheck,
        description:
          'Manage wholesale trade catalogs, bulk order invoicing, reorder stock thresholds, and customer account statements.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Commercial supplier managing wholesale inventory in a distribution facility',
        url: '/businesses/business/supplier',
      },
      {
        id: 'car-storage',
        name: 'Car Storage',
        slug: 'car-storage',
        icon: ShieldCheck,
        description:
          'Bill monthly climate-controlled vehicle storage, battery tending, detailing add-ons, and long-term collector contracts.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Indoor automotive facility maintaining and storing customer vehicles',
        url: '/businesses/business/car-storage',
      },
      {
        id: 'real-estate',
        name: 'Real Estate',
        slug: 'real-estate',
        icon: KeyRound,
        description:
          'Invoice property management retainers, leasing commissions, commercial rent schedules, and maintenance expenses.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Real estate advisor reviewing property documents and keys',
        url: '/businesses/business/real-estate',
      },
      {
        id: 'travel-agency-quote-templates',
        name: 'Travel Agency Quote Templates',
        slug: 'travel-agency-quote-templates',
        icon: Globe,
        description:
          'Build itemized travel itinerary quotes covering flights, accommodations, guided tours, group deposits, and booking balances.',
        image:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Travel advisor presenting a custom itinerary and quote to clients',
        url: '/businesses/business/travel-agency-quote-templates',
      },
      {
        id: 'cargo',
        name: 'Cargo',
        slug: 'cargo',
        icon: PackageCheck,
        description:
          'Issue commercial cargo invoices, container handling bills, demurrage charges, and freight forwarding documentation.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Cargo warehouse team organizing palletized commercial shipments',
        url: '/businesses/business/cargo',
      },
      {
        id: 'freight',
        name: 'Freight',
        slug: 'freight',
        icon: Layers,
        description:
          'Bill LTL and FTL freight loads, linehaul rates, fuel surcharges, accessorial fees, and carrier settlement statements.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Freight operations supervisor checking shipping manifests in a warehouse',
        url: '/businesses/business/freight',
      },
      {
        id: 'recruitment',
        name: 'Recruitment',
        slug: 'recruitment',
        icon: UserCheck,
        description:
          'Invoice permanent placement commissions, retained executive search milestones, and contract staffing timesheets.',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Recruitment consultant interviewing and advising a professional candidate',
        url: '/businesses/business/recruitment',
      },
      {
        id: 'tuition',
        name: 'Tuition',
        slug: 'tuition',
        icon: Brain,
        description:
          'Send term tuition invoices, private tutoring statements, course material fees, and installment payment receipts.',
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Academic tutor reviewing lesson plans and tuition schedules',
        url: '/businesses/business/tuition',
      },
      {
        id: 'clothing-brand',
        name: 'Clothing Brand',
        slug: 'clothing-brand',
        icon: Palette,
        description:
          'Manage seasonal lookbook line sheets, boutique wholesale invoices, garment manufacturing costs, and SKU inventory.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Apparel collection displayed inside a modern clothing brand showroom',
        url: '/businesses/business/clothing-brand',
      },
      {
        id: 'gardening',
        name: 'Gardening',
        slug: 'gardening',
        icon: Trees,
        description:
          'Quote residential garden care, planting packages, pruning visits, green waste removal, and recurring lawn maintenance.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Lush, professionally maintained garden and outdoor greenery',
        url: '/businesses/business/gardening',
      },
      {
        id: 'warehouse',
        name: 'Warehouse',
        slug: 'warehouse',
        icon: PackageCheck,
        description:
          'Bill pallet storage fees, pick-and-pack fulfillment, receiving charges, and monitor inventory levels in real time.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern fulfillment warehouse with organized shelving and inventory',
        url: '/businesses/business/warehouse',
      },
      {
        id: 'clothing-store',
        name: 'Clothing Store',
        slug: 'clothing-store',
        icon: ShoppingBag,
        description:
          'Track apparel sizes and stock availability, bill personal styling orders, and log wholesale vendor expenses.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Well-organized clothing store racks and retail display',
        url: '/businesses/business/clothing-store',
      },
      {
        id: 'hospitality',
        name: 'Hospitality',
        slug: 'hospitality',
        icon: CalendarCheck,
        description:
          'Invoice corporate banquets, VIP hospitality suites, catering packages, venue bookings, and vendor operating costs.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Hospitality venue prepared for corporate guests and dining',
        url: '/businesses/business/hospitality',
      },
      {
        id: 'restaurant',
        name: 'Restaurant',
        slug: 'restaurant',
        icon: Store,
        description:
          'Bill private dining events, off-site catering orders, corporate meal accounts, and track food and beverage supplier bills.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Restaurant manager reviewing catering orders and customer accounts',
        url: '/businesses/business/restaurant',
      },
      {
        id: 'wine',
        name: 'Wine',
        slug: 'wine',
        icon: Sparkles,
        description:
          'Manage vineyard and distributor case inventory, restaurant trade invoices, private cellar orders, and excise tax lines.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Curated boutique retail shelves and specialty merchant interior',
        url: '/businesses/business/wine',
      },
      {
        id: 'commercial',
        name: 'Commercial',
        slug: 'commercial',
        icon: Building2,
        description:
          'Issue commercial trade invoices, service contracts, progress billings, and multi-invoice account statements.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Commercial enterprise office and conference environment',
        url: '/businesses/business/commercial',
      },
      {
        id: 'hours-worked',
        name: 'Hours Worked',
        slug: 'hours-worked',
        icon: ClipboardCheck,
        description:
          'Itemize hourly labor rates, overtime logs, consultant timesheets, and billable project hours with transparent line items.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional reviewing billable hours worked and project timesheets',
        url: '/businesses/business/hours-worked',
      },
      {
        id: 'retail',
        name: 'Retail',
        slug: 'retail',
        icon: ShoppingBag,
        description:
          'Track product inventory, manage wholesale and customer invoices, monitor reorder levels, and review daily sales margins.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Clean, well-organized boutique retail store interior',
        url: '/businesses/business/retail',
      },
      {
        id: 'company-quote-templates',
        name: 'Company Quote Templates',
        slug: 'company-quote-templates',
        icon: FileText,
        description:
          'Create consistent, branded company price quotes with saved products, tax rates, payment terms, and instant PDF sharing.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Company executive reviewing a branded commercial quote document',
        url: '/businesses/business/company-quote-templates',
      },
      {
        id: 'insurance',
        name: 'Insurance',
        slug: 'insurance',
        icon: ShieldCheck,
        description:
          'Document insurance brokerage fees, risk assessment consultations, policy renewal schedules, and claim inspection billing.',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Insurance advisor reviewing coverage documentation with a client',
        url: '/businesses/business/insurance',
      },
      {
        id: 'saas',
        name: 'Saas',
        slug: 'saas',
        icon: Globe,
        description:
          'Manage B2B SaaS subscription invoices, annual contract renewals, usage overage billing, and enterprise implementation fees.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'SaaS analytics dashboard and cloud software workspace',
        url: '/businesses/business/saas',
      },
    ],
  },
  {
    id: 'health',
    name: 'Health',
    slug: 'health',
    description:
      'Clear, professional patient billing, appointment and treatment receipts, and organized clinic expense records for healthcare providers.',
    icon: HeartPulse,
    thumbnail:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Bright, modern medical clinic hallway and consultation rooms',
    defaultChallenges: [
      'Providing patients with clear, itemized invoices and payment receipts for consultations and treatments',
      'Tracking multi-session care packages, partial payments, and outstanding patient balances',
      'Keeping clinic supply purchases and equipment expenses organized alongside revenue',
    ],
    defaultBenefits: [
      'Save standard consultation types and treatment procedures for fast, accurate billing',
      'Record full or partial patient payments and issue clean PDF receipts',
      'Generate clear account statements for multi-visit treatment plans',
      'Track medical supplies, clinic overhead, and supplier expenses in one place',
    ],
    defaultGuidance: [
      'Use standardized service descriptions and procedure codes so patients can easily understand their statements.',
      'Record payments immediately at checkout or upon receipt so patient balance records remain accurate.',
      'Keep clinic supply and equipment purchases logged under categorized expenses for straightforward financial reviews.',
    ],
    defaultFeatures: [
      '/features/lightning-fast-invoicing',
      '/features/payment-tracking',
      '/features/customer-statements',
      '/features/client-management',
    ],
    subcategories: [
      {
        id: 'personal-trainer',
        name: 'Personal Trainer',
        slug: 'personal-trainer',
        icon: Activity,
        description:
          'Bill 1-on-1 personal training packages, custom workout plans, nutrition coaching retainers, and gym session bundles.',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Personal trainer coaching a client on strength and mobility exercises',
        url: '/businesses/health/personal-trainer',
      },
      {
        id: 'psychologist',
        name: 'Psychologist',
        slug: 'psychologist',
        icon: Brain,
        description:
          'Manage psychological assessment billing, therapy session receipts, client account statements, and private practice expenses.',
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Psychologist in a calm, welcoming private consultation office',
        url: '/businesses/health/psychologist',
      },
      {
        id: 'medical',
        name: 'Medical',
        slug: 'medical',
        icon: Stethoscope,
        description:
          'Streamline outpatient consultation billing, procedure itemization, patient payment receipts, and medical clinic supply expenses.',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern medical clinic interior and patient care environment',
        url: '/businesses/health/medical',
      },
      {
        id: 'pharmacist',
        name: 'Pharmacist',
        slug: 'pharmacist',
        icon: ShieldCheck,
        description:
          'Track pharmaceutical stock and reorder levels, invoice care homes and clinic accounts, and log wholesale supplier bills.',
        image:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Healthcare pharmacist reviewing medication records in a clinical setting',
        url: '/businesses/health/pharmacist',
      },
      {
        id: 'psychotherapy',
        name: 'Psychotherapy',
        slug: 'psychotherapy',
        icon: Brain,
        description:
          'Issue confidential psychotherapy session invoices, recurring care statements, and track continuing education and room rental costs.',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Psychotherapy practitioner preparing session notes in a quiet office',
        url: '/businesses/health/psychotherapy',
      },
      {
        id: 'nurse',
        name: 'Nurse',
        slug: 'nurse',
        icon: HeartPulse,
        description:
          'Invoice independent nursing shifts, private home-care visits, agency contract hours, and reimbursable medical supplies.',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Registered nurse providing attentive patient care in a clinical setting',
        url: '/businesses/health/nurse',
      },
      {
        id: 'psychiatrist',
        name: 'Psychiatrist',
        slug: 'psychiatrist',
        icon: Stethoscope,
        description:
          'Create structured psychiatric consultation invoices, follow-up appointment receipts, and comprehensive patient account statements.',
        image:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Medical specialist in a private consultation practice',
        url: '/businesses/health/psychiatrist',
      },
      {
        id: 'therapy',
        name: 'Therapy',
        slug: 'therapy',
        icon: HeartHandshake,
        description:
          'Bill individual, couples, physical, or occupational therapy sessions while keeping client balances and practice expenses organized.',
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Therapist welcoming a client into a comfortable consultation space',
        url: '/businesses/health/therapy',
      },
      {
        id: 'dental',
        name: 'Dental',
        slug: 'dental',
        icon: Smile,
        description:
          'Prepare dental treatment cost estimates, itemize hygiene and restorative procedures, and track staged patient payments.',
        image:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Dental professional in a modern dental clinic examination room',
        url: '/businesses/health/dental',
      },
    ],
  },
  {
    id: 'services',
    name: 'Services',
    slug: 'services',
    description:
      'Streamlined quoting, recurring client management, and expense tracking for residential, commercial, and professional service providers.',
    icon: Handshake,
    thumbnail:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Professional service team member preparing equipment for a client job',
    defaultChallenges: [
      'Sending fast, accurate quotes to win service jobs before competitors respond',
      'Managing repeat residential and commercial clients with consistent pricing',
      'Tracking supplies, equipment maintenance, and travel costs against service revenue',
    ],
    defaultBenefits: [
      'Build reusable service packages and rate cards for instant quoting and invoicing',
      'Convert approved service estimates into final invoices with one click',
      'Keep detailed customer addresses, service notes, and billing histories organized',
      'Track supplies and operating costs to see real profit margins per service line',
    ],
    defaultGuidance: [
      'Create saved service items for your standard packages so your team can price jobs consistently.',
      'Collect deposits on large events or seasonal contracts and record them directly against the invoice.',
      'Use customer statements for commercial property clients who manage multiple service visits per month.',
    ],
    defaultFeatures: [
      '/features/estimates-to-invoices',
      '/features/client-management',
      '/features/payment-tracking',
      '/features/customer-statements',
    ],
    subcategories: [
      {
        id: 'cleaning-services',
        name: 'Cleaning Services',
        slug: 'cleaning-services',
        icon: Sparkles,
        description:
          'Bill residential deep cleans, recurring commercial janitorial contracts, and cleaning supply fees effortlessly.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional cleaner sanitizing surfaces in a modern commercial space',
        url: '/businesses/services/cleaning-services',
      },
      {
        id: 'landscaping',
        name: 'Landscaping',
        slug: 'landscaping',
        icon: Trees,
        description:
          'Estimate garden design projects, itemize plants and hardscape materials, and invoice seasonal grounds maintenance.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Landscaped garden pathway and manicured lawn maintained by professionals',
        url: '/businesses/services/landscaping',
      },
      {
        id: 'event-planning',
        name: 'Event Planning',
        slug: 'event-planning',
        icon: CalendarCheck,
        description:
          'Manage event proposals, vendor deposits, milestone payment schedules, and itemized client expense reconciliations.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional event venue prepared for a corporate conference',
        url: '/businesses/services/event-planning',
      },
      {
        id: 'home-maintenance',
        name: 'Home Maintenance',
        slug: 'home-maintenance',
        icon: Home,
        description:
          'Quote property repairs, preventative maintenance visits, replacement hardware, and handyman labor hours.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Well-maintained modern home interior after professional maintenance work',
        url: '/businesses/services/home-maintenance',
      },
      {
        id: 'real-estate-services',
        name: 'Real Estate Services',
        slug: 'real-estate-services',
        icon: KeyRound,
        description:
          'Invoice property management fees, staging consultations, inspection services, and real estate marketing expenses.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Real estate professional holding house keys with a modern property model',
        url: '/businesses/services/real-estate-services',
      },
    ],
  },
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    description:
      'Polished project proposals, milestone and retainer invoicing, and expense tracking for designers, creators, studios, and digital agencies.',
    icon: Palette,
    thumbnail:
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Creative team reviewing visual design layouts in a studio',
    defaultChallenges: [
      'Scoping creative deliverables, revision rounds, and usage licensing clearly before starting production',
      'Tracking 50% upfront deposits, milestone payments, and final project sign-off balances',
      'Managing software subscriptions, stock asset costs, and contractor expenses across client campaigns',
    ],
    defaultBenefits: [
      'Send branded, visually refined estimates and invoices that reflect your creative standards',
      'Convert approved project proposals directly into deposit or milestone invoices',
      'Track partial payments and retainers with full visibility into outstanding balances',
      'Organize equipment, software, and production expenses for clear profit reporting',
    ],
    defaultGuidance: [
      'Clearly define project phases, deliverable formats, and included revision rounds in your estimate notes.',
      'Bill a deposit before kickoff and record each milestone payment on the same invoice or linked statement.',
      'Track reimbursable client expenses—such as fonts, stock media, or studio rentals—so nothing goes unbilled.',
    ],
    defaultFeatures: [
      '/features/document-customization',
      '/features/estimates-to-invoices',
      '/features/payment-tracking',
      '/features/client-management',
    ],
    subcategories: [
      {
        id: 'graphic-designer',
        name: 'Graphic Designer',
        slug: 'graphic-designer',
        icon: PenTool,
        description:
          'Quote brand identity packages, print and digital design deliverables, licensing fees, and milestone payments.',
        image:
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Graphic designer working on brand identity visuals at a studio workstation',
        url: '/businesses/creative/graphic-designer',
      },
      {
        id: 'photographer',
        name: 'Photographer',
        slug: 'photographer',
        icon: Camera,
        description:
          'Bill booking deposits, shoot day rates, equipment rentals, retouching packages, and commercial usage licenses.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional camera lens and photography equipment in a studio',
        url: '/businesses/creative/photographer',
      },
      {
        id: 'content-writer',
        name: 'Content Writer',
        slug: 'content-writer',
        icon: FileEdit,
        description:
          'Invoice articles, copywriting projects, editorial retainers, and per-word or per-project deliverables cleanly.',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Content writer working on editorial copy at a desk',
        url: '/businesses/creative/content-writer',
      },
      {
        id: 'web-developer',
        name: 'Web Developer',
        slug: 'web-developer',
        icon: Code2,
        description:
          'Manage software sprint billing, website build milestones, hosting and maintenance retainers, and hourly development logs.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Web developer writing application code on a laptop at a clean desk',
        url: '/businesses/creative/web-developer',
      },
      {
        id: 'marketing-agency',
        name: 'Marketing Agency',
        slug: 'marketing-agency',
        icon: Megaphone,
        description:
          'Organize multi-channel campaign retainers, media management fees, creative production costs, and client statements.',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Marketing agency team collaborating on campaign strategy in a modern office',
        url: '/businesses/creative/marketing-agency',
      },
    ],
  },
  {
    id: 'general',
    name: 'General',
    slug: 'general',
    description:
      'Flexible, adaptable invoicing, expense organization, and financial record management for independent operators, nonprofits, and general enterprises.',
    icon: FileText,
    thumbnail:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
    thumbnailAlt: 'Professionals reviewing financial documents and business records together',
    defaultChallenges: [
      'Adapting invoices and business documents to fit unique service models, custom taxes, or multi-item billing',
      'Keeping income, receipts, and partner balances organized without complex accounting software',
      'Exporting clean financial summaries for stakeholders, board members, or year-end tax preparation',
    ],
    defaultBenefits: [
      'Customize invoice line items, tax rates, discounts, payment terms, and currencies',
      'Keep all customer, supplier, invoice, and expense records connected in one cloud workspace',
      'Review clear financial dashboards and cash or accrual profit-and-loss summaries',
      'Download or share PDF documents and export XLSX records anytime',
    ],
    defaultGuidance: [
      'Set up your company profile, default payment terms, and tax rates once so every new document is ready to send.',
      'Use custom partner categories to organize clients, donors, members, or suppliers cleanly.',
      'Export monthly or quarterly financial reports to keep your records audit-ready year-round.',
    ],
    defaultFeatures: [
      '/features/document-customization',
      '/features/lightning-fast-invoicing',
      '/features/sales-stock-reports',
      '/features/import-export-records',
    ],
    subcategories: [
      {
        id: 'sole-proprietor',
        name: 'Sole Proprietor',
        slug: 'sole-proprietor',
        icon: User,
        description:
          'Run your independent business with simple invoicing, expense tracking, payment records, and tax-ready summaries.',
        image:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Independent business owner working confidently in a modern office',
        url: '/businesses/general/sole-proprietor',
      },
      {
        id: 'nonprofit-organization',
        name: 'Nonprofit Organization',
        slug: 'nonprofit-organization',
        icon: HeartHandshake,
        description:
          'Document program service billings, sponsorship invoices, grant-related expenses, and transparent financial summaries.',
        image:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Nonprofit organization team coordinating a community initiative',
        url: '/businesses/general/nonprofit-organization',
      },
      {
        id: 'general-business',
        name: 'General Business',
        slug: 'general-business',
        icon: Layers,
        description:
          'Manage commercial quotes, invoices, customer statements, inventory items, and operating expenses in one platform.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Business professionals reviewing invoices and financial performance reports',
        url: '/businesses/general/general-business',
      },
      {
        id: 'personal-services',
        name: 'Personal Services',
        slug: 'personal-services',
        icon: Users,
        description:
          'Bill private coaching, tutoring, fitness training, and personal care appointments with clear client records.',
        image:
          'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Personal service professional meeting with a client in a welcoming office',
        url: '/businesses/general/personal-services',
      },
    ],
  },
];

const LEGACY_SLUG_ALIASES = {
  business: {
    freelancer: 'freelance',
    consultant: 'consulting',
    'small-business': 'business',
    accountant: 'bookkeeping-invoices',
    'retail-store': 'retail',
    'online-seller': 'ecommerce',
  },
  health: {
    'medical-clinic': 'medical',
    doctor: 'medical',
    dentist: 'dental',
    therapist: 'therapy',
    physiotherapist: 'therapy',
  },
};

export function getCategoryBySlug(categorySlug) {
  if (!categorySlug) return null;
  return BUSINESS_CATEGORIES.find(c => c.slug === categorySlug.toLowerCase()) || null;
}

export function getSubcategoryBySlugs(categorySlug, businessSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category || !businessSlug) return null;
  const normalized = businessSlug.toLowerCase();
  const categoryAliases = LEGACY_SLUG_ALIASES[category.slug];
  const resolvedSlug =
    categoryAliases && categoryAliases[normalized]
      ? categoryAliases[normalized]
      : normalized;
  const sub = category.subcategories.find(s => s.slug === resolvedSlug);
  if (!sub) return null;
  return { category, subcategory: sub };
}
