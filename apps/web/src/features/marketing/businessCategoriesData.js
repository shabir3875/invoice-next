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
  eyebrow: 'Invonxt for Businesses',
  heading: 'Explore Business Categories',
  description:
    'Discover how Invonxt helps professionals and businesses simplify invoicing, manage expenses, organize clients, and maintain better financial records.',
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
        id: 'freelancer',
        name: 'Freelancer',
        slug: 'freelancer',
        icon: Laptop,
        description:
          'Send polished project invoices, prepare estimates, track client payments, and organize deductible business expenses.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Freelance professional working on a laptop in a bright modern studio',
        url: '/businesses/business/freelancer',
        existingSolutionSlug: 'freelancers',
      },
      {
        id: 'small-business',
        name: 'Small Business',
        slug: 'small-business',
        icon: Store,
        description:
          'Unify customer billing, supplier expenses, product catalogs, payments, and profit-and-loss reporting in one workspace.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Small business owner managing customer orders and operations at a counter',
        url: '/businesses/business/small-business',
        existingSolutionSlug: 'small-businesses',
      },
      {
        id: 'consultant',
        name: 'Consultant',
        slug: 'consultant',
        icon: UserCheck,
        description:
          'Deliver executive-ready proposals, convert approved scopes into invoices, and track retainers and project milestones.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Business consultant presenting strategic analysis to clients in a meeting room',
        url: '/businesses/business/consultant',
        existingSolutionSlug: 'consultants',
      },
      {
        id: 'accountant',
        name: 'Accountant',
        slug: 'accountant',
        icon: Calculator,
        description:
          'Organize client billing, expense records, tax summaries, customer statements, and XLSX-ready financial exports.',
        image:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Accountant reviewing financial reports and calculator at an office desk',
        url: '/businesses/business/accountant',
        existingSolutionSlug: 'accountants',
      },
      {
        id: 'retail-store',
        name: 'Retail Store',
        slug: 'retail-store',
        icon: ShoppingBag,
        description:
          'Track product inventory, manage wholesale and customer invoices, monitor reorder levels, and review daily sales.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Clean, well-organized boutique retail store interior',
        url: '/businesses/business/retail-store',
      },
      {
        id: 'online-seller',
        name: 'Online Seller',
        slug: 'online-seller',
        icon: PackageCheck,
        description:
          'Manage SKU stock availability, generate commercial invoices and packing documents, and track supplier inventory costs.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Online seller organizing inventory boxes inside a fulfillment warehouse',
        url: '/businesses/business/online-seller',
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
        id: 'medical-clinic',
        name: 'Medical Clinic',
        slug: 'medical-clinic',
        icon: Building2,
        description:
          'Streamline outpatient consultation billing, procedure itemization, payment receipts, and clinic supply expense tracking.',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern medical clinic interior and patient care environment',
        url: '/businesses/health/medical-clinic',
      },
      {
        id: 'doctor',
        name: 'Doctor',
        slug: 'doctor',
        icon: Stethoscope,
        description:
          'Create clear private-practice consultation invoices, medical examination receipts, and organized financial records.',
        image:
          'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Doctor in a medical clinic wearing a white coat and stethoscope',
        url: '/businesses/health/doctor',
      },
      {
        id: 'dentist',
        name: 'Dentist',
        slug: 'dentist',
        icon: Smile,
        description:
          'Prepare treatment cost estimates, itemize dental procedures, and track staged orthodontic or restorative payments.',
        image:
          'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Dentist in a modern dental clinic examination room',
        url: '/businesses/health/dentist',
      },
      {
        id: 'therapist',
        name: 'Therapist',
        slug: 'therapist',
        icon: Brain,
        description:
          'Manage session billing, recurring appointment statements, and private practice expenses with minimal admin overhead.',
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Therapist in a calm, welcoming private consultation office',
        url: '/businesses/health/therapist',
      },
      {
        id: 'physiotherapist',
        name: 'Physiotherapist',
        slug: 'physiotherapist',
        icon: Activity,
        description:
          'Bill rehabilitation sessions, physical therapy packages, and mobility equipment while tracking patient account balances.',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Physiotherapist working with a patient in a rehabilitation clinic',
        url: '/businesses/health/physiotherapist',
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

export function getCategoryBySlug(categorySlug) {
  if (!categorySlug) return null;
  return BUSINESS_CATEGORIES.find(c => c.slug === categorySlug.toLowerCase()) || null;
}

export function getSubcategoryBySlugs(categorySlug, businessSlug) {
  const category = getCategoryBySlug(categorySlug);
  if (!category || !businessSlug) return null;
  const sub = category.subcategories.find(s => s.slug === businessSlug.toLowerCase());
  if (!sub) return null;
  return { category, subcategory: sub };
}
