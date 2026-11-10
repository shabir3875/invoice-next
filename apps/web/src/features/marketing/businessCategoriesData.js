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
        id: 'demolition',
        name: 'Demolition',
        slug: 'demolition',
        icon: Hammer,
        description:
          'Quote structural demolition, interior strip-outs, heavy equipment hours, debris haul-away fees, and dump permits.',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Heavy site demolition and structural clearing operation',
        url: '/businesses/trades/demolition',
      },
      {
        id: 'landscaping-quote-templates',
        name: 'Landscaping Quote Templates',
        slug: 'landscaping-quote-templates',
        icon: Trees,
        description:
          'Prepare itemized landscaping estimates covering grading, sod installation, plantings, hardscape pavers, and crew labor.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Landscaped garden pathway and manicured lawn maintained by professionals',
        url: '/businesses/trades/landscaping-quote-templates',
      },
      {
        id: 'painting',
        name: 'Painting',
        slug: 'painting',
        icon: Palette,
        description:
          'Bill interior and exterior painting jobs, surface preparation, primer and paint gallons, and decorator labor hours.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Freshly painted modern residential interior',
        url: '/businesses/trades/painting',
      },
      {
        id: 'repair',
        name: 'Repair',
        slug: 'repair',
        icon: Wrench,
        description:
          'Issue fast on-site repair invoices for diagnostic service calls, replacement components, warranty work, and technician hours.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Technician performing equipment repair and diagnostics',
        url: '/businesses/trades/repair',
      },
      {
        id: 'electrical',
        name: 'Electrical',
        slug: 'electrical',
        icon: Zap,
        description:
          'Bill residential and commercial electrical installations, panel upgrades, wiring materials, and emergency call-outs.',
        image:
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Licensed electrician inspecting commercial electrical switchgear safely',
        url: '/businesses/trades/electrical',
      },
      {
        id: 'lawn-care',
        name: 'Lawn Care',
        slug: 'lawn-care',
        icon: Trees,
        description:
          'Manage recurring lawn mowing schedules, fertilization treatments, seasonal aeration, and property maintenance statements.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Well-maintained green lawn and residential grounds',
        url: '/businesses/trades/lawn-care',
      },
      {
        id: 'painting-quote-templates',
        name: 'Painting Quote Templates',
        slug: 'painting-quote-templates',
        icon: Palette,
        description:
          'Send room-by-room or exterior square-footage painting quotes with coat counts, paint brand specs, and prep labor.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional painting estimator reviewing interior wall finishes',
        url: '/businesses/trades/painting-quote-templates',
      },
      {
        id: 'restoration',
        name: 'Restoration',
        slug: 'restoration',
        icon: ShieldCheck,
        description:
          'Document water, fire, and storm damage mitigation, drying equipment rentals, and structural rebuild line items.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Property restoration specialist reviewing structural plans',
        url: '/businesses/trades/restoration',
      },
      {
        id: 'electrical-quotes-templates',
        name: 'Electrical Quotes Templates',
        slug: 'electrical-quotes-templates',
        icon: Zap,
        description:
          'Create accurate electrical project quotes covering conduit runs, breaker panels, lighting fixtures, and licensed labor.',
        image:
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Electrical contractor preparing a commercial wiring estimate',
        url: '/businesses/trades/electrical-quotes-templates',
      },
      {
        id: 'lawn-care-quotes-templates',
        name: 'Lawn Care Quotes Templates',
        slug: 'lawn-care-quotes-templates',
        icon: Trees,
        description:
          'Build clear seasonal lawn care proposals covering weekly mowing, edging, weed control, and mulch installation.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Lawn care professional inspecting turf and garden beds',
        url: '/businesses/trades/lawn-care-quotes-templates',
      },
      {
        id: 'pest-control',
        name: 'Pest Control',
        slug: 'pest-control',
        icon: ShieldCheck,
        description:
          'Invoice residential extermination visits, quarterly commercial pest prevention contracts, and termite inspection reports.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Field service technician preparing protective treatment equipment',
        url: '/businesses/trades/pest-control',
      },
      {
        id: 'roofing',
        name: 'Roofing',
        slug: 'roofing',
        icon: Home,
        description:
          'Bill full roof replacements, shingle squares, underlayment, flashing repairs, tear-off disposal, and progress deposits.',
        image:
          'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Roofing and exterior construction crew working on a building',
        url: '/businesses/trades/roofing',
      },
      {
        id: 'estimate-template-new',
        name: 'Estimate Template NEW',
        slug: 'estimate-template-new',
        icon: FileText,
        description:
          'Create fast, itemized job estimates with material quantities, labor rates, tax calculations, and instant invoice conversion.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Contractor preparing a formal project estimate document',
        url: '/businesses/trades/estimate-template-new',
      },
      {
        id: 'lawn-mowing-quote-templates',
        name: 'Lawn Mowing Quote Templates',
        slug: 'lawn-mowing-quote-templates',
        icon: Trees,
        description:
          'Quote per-cut or monthly residential and commercial lawn mowing, string trimming, and blowing packages.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Freshly mowed lawn and landscaped residential yard',
        url: '/businesses/trades/lawn-mowing-quote-templates',
      },
      {
        id: 'plumbing',
        name: 'Plumbing',
        slug: 'plumbing',
        icon: Droplets,
        description:
          'Create fast on-site quotes and invoices for pipe repairs, water heater installations, drain clearing, and plumbing parts.',
        image:
          'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional plumber repairing a water pipe fitting with a wrench',
        url: '/businesses/trades/plumbing',
      },
      {
        id: 'roofing-quote-templates',
        name: 'Roofing Quote Templates',
        slug: 'roofing-quote-templates',
        icon: ClipboardCheck,
        description:
          'Present clear roofing proposals detailing pitch, roofing squares, ventilation, gutter work, and warranty terms.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Roofing estimator reviewing building plans and material specs',
        url: '/businesses/trades/roofing-quote-templates',
      },
      {
        id: 'fence-quote-templates',
        name: 'Fence Quote Templates',
        slug: 'fence-quote-templates',
        icon: Ruler,
        description:
          'Estimate linear footage, post-hole concrete, wood or vinyl panels, gate hardware, and fence installation labor.',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Craftsperson measuring timber posts and fencing materials',
        url: '/businesses/trades/fence-quote-templates',
      },
      {
        id: 'lawn-service-quotes-templates',
        name: 'Lawn Service Quotes Templates',
        slug: 'lawn-service-quotes-templates',
        icon: Trees,
        description:
          'Send comprehensive turf care and grounds maintenance quotes with recurring visit schedules and seasonal add-ons.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional lawn service grounds and garden pathway',
        url: '/businesses/trades/lawn-service-quotes-templates',
      },
      {
        id: 'plumbing-quote-templates',
        name: 'Plumbing Quote Templates',
        slug: 'plumbing-quote-templates',
        icon: Droplets,
        description:
          'Prepare upfront plumbing estimates for rough-in piping, bathroom remodels, fixture upgrades, and emergency repairs.',
        image:
          'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Plumber inspecting pipe fittings for a repair quote',
        url: '/businesses/trades/plumbing-quote-templates',
      },
      {
        id: 'snow-removal-quote-templates',
        name: 'Snow Removal Quote Templates',
        slug: 'snow-removal-quote-templates',
        icon: Wind,
        description:
          'Quote commercial snow plowing contracts by depth triggers, per-push rates, walkway shoveling, and salt applications.',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Commercial site crew preparing outdoor equipment',
        url: '/businesses/trades/snow-removal-quote-templates',
      },
      {
        id: 'fencing',
        name: 'Fencing',
        slug: 'fencing',
        icon: Ruler,
        description:
          'Bill residential privacy fences, commercial chain-link enclosures, automated gates, and post-repair services.',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Timber and fencing materials prepared in a workshop',
        url: '/businesses/trades/fencing',
      },
      {
        id: 'limo-service',
        name: 'Limo Service',
        slug: 'limo-service',
        icon: KeyRound,
        description:
          'Invoice luxury limousine charters, airport transfers, hourly event packages, fuel surcharges, and driver gratuities.',
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Executive chauffeur and limousine transport service',
        url: '/businesses/trades/limo-service',
      },
      {
        id: 'pool-service',
        name: 'Pool Service',
        slug: 'pool-service',
        icon: Droplets,
        description:
          'Bill weekly pool skimming and chemical balancing, filter and pump repairs, seasonal openings, and liner replacements.',
        image:
          'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Pool technician inspecting water circulation and plumbing valves',
        url: '/businesses/trades/pool-service',
      },
      {
        id: 'tile-installation',
        name: 'Tile Installation',
        slug: 'tile-installation',
        icon: Layers,
        description:
          'Quote ceramic, porcelain, and natural stone tile jobs covering backer board, thin-set mortar, grouting, and square-foot labor.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern tiled interior finished by a professional installer',
        url: '/businesses/trades/tile-installation',
      },
      {
        id: 'flooring-quote-templates',
        name: 'Flooring Quote Templates',
        slug: 'flooring-quote-templates',
        icon: Layers,
        description:
          'Create itemized flooring estimates for hardwood, LVP, carpet, subfloor leveling, trim transitions, and old floor removal.',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Hardwood and timber flooring materials measured for installation',
        url: '/businesses/trades/flooring-quote-templates',
      },
      {
        id: 'locksmith',
        name: 'Locksmith',
        slug: 'locksmith',
        icon: KeyRound,
        description:
          'Issue instant mobile invoices for emergency lockouts, rekeying, smart lock installations, and commercial master key systems.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Locksmith holding keys and security hardware',
        url: '/businesses/trades/locksmith',
      },
      {
        id: 'pressure-washing-quote-templates',
        name: 'Pressure Washing Quote Templates',
        slug: 'pressure-washing-quote-templates',
        icon: Sparkles,
        description:
          'Prepare exterior soft-wash and pressure-washing quotes for roofs, driveways, commercial storefronts, and decks.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Exterior surface cleaning and pressure washing equipment',
        url: '/businesses/trades/pressure-washing-quote-templates',
      },
      {
        id: 'towing',
        name: 'Towing',
        slug: 'towing',
        icon: Wrench,
        description:
          'Bill hookup fees, loaded mileage rates, roadside winch-outs, impound lot storage days, and commercial fleet calls.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Automotive roadside recovery and workshop service',
        url: '/businesses/trades/towing',
      },
      {
        id: 'handyman-quote-templates',
        name: 'Handyman Quote Templates',
        slug: 'handyman-quote-templates',
        icon: Hammer,
        description:
          'Combine punch-list home repairs, fixture installations, hardware supplies, and hourly labor into one clear customer quote.',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Handyman preparing tools and repair estimate on site',
        url: '/businesses/trades/handyman-quote-templates',
      },
      {
        id: 'masonry',
        name: 'Masonry',
        slug: 'masonry',
        icon: HardHat,
        description:
          'Quote bricklaying, stone veneer, chimney repointing, concrete block walls, mortar materials, and mason crew hours.',
        image:
          'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Masonry and structural construction crew on site',
        url: '/businesses/trades/masonry',
      },
      {
        id: 'quote-templates-new',
        name: 'Quote Templates NEW',
        slug: 'quote-templates-new',
        icon: FileSpreadsheet,
        description:
          'Send polished trade and contractor price quotes with customizable line items, deposits, and one-click invoice creation.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Trade professional reviewing a commercial price quote template',
        url: '/businesses/trades/quote-templates-new',
      },
      {
        id: 'tradesman',
        name: 'Tradesman',
        slug: 'tradesman',
        icon: Hammer,
        description:
          'Manage on-site quotes, material markups, call-out fees, progress payments, and tool expenses for independent tradesmen.',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Skilled tradesman working at an active job site',
        url: '/businesses/trades/tradesman',
      },
      {
        id: 'hvac',
        name: 'HVAC',
        slug: 'hvac',
        icon: Wind,
        description:
          'Invoice heating, ventilation, and air-conditioning installations, seasonal tune-ups, refrigerant, and replacement units.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'HVAC technician inspecting climate control equipment with diagnostic tools',
        url: '/businesses/trades/hvac',
      },
      {
        id: 'mechanic-quote-templates',
        name: 'Mechanic Quote Templates',
        slug: 'mechanic-quote-templates',
        icon: Wrench,
        description:
          'Provide vehicle owners with clear repair estimates detailing VIN/mileage, OEM parts, shop fees, and book labor hours.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Automotive mechanic preparing a vehicle repair estimate',
        url: '/businesses/trades/mechanic-quote-templates',
      },
      {
        id: 'reinstatement-quote-template',
        name: 'Reinstatement Quote Template',
        slug: 'reinstatement-quote-template',
        icon: Building2,
        description:
          'Prepare end-of-lease commercial reinstatement quotes covering partition removal, M&E make-good, and repainting.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Commercial office interior prepared for reinstatement works',
        url: '/businesses/trades/reinstatement-quote-template',
      },
      {
        id: 'tree-removal-quote-templates',
        name: 'Tree Removal Quote Templates',
        slug: 'tree-removal-quote-templates',
        icon: Trees,
        description:
          'Itemize tree felling, rigging, crane assistance, stump grinding, wood chipping, and haul-away costs clearly.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Arborist inspecting trees and grounds for a removal estimate',
        url: '/businesses/trades/tree-removal-quote-templates',
      },
      {
        id: 'hvac-quote-templates',
        name: 'HVAC Quote Templates',
        slug: 'hvac-quote-templates',
        icon: Wind,
        description:
          'Present good-better-best HVAC system replacement proposals covering SEER ratings, ductwork, thermostats, and warranties.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'HVAC specialist preparing an equipment installation quote',
        url: '/businesses/trades/hvac-quote-templates',
      },
      {
        id: 'moving-company',
        name: 'Moving Company',
        slug: 'moving-company',
        icon: PackageCheck,
        description:
          'Bill residential and office relocations, packing supplies, crew loading hours, transit mileage, and storage-in-transit.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Moving company team organizing packed cartons for transport',
        url: '/businesses/trades/moving-company',
      },
      {
        id: 'remodeling-quote-templates',
        name: 'Remodeling Quote Templates',
        slug: 'remodeling-quote-templates',
        icon: Home,
        description:
          'Break down kitchen, bathroom, and basement remodeling estimates into demolition, rough-ins, finishes, and draw schedules.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Remodeled residential kitchen and interior living space',
        url: '/businesses/trades/remodeling-quote-templates',
      },
      {
        id: 'trucking',
        name: 'Trucking',
        slug: 'trucking',
        icon: PackageCheck,
        description:
          'Invoice freight hauls, per-mile rates, detention hours, lumper reimbursements, and fuel surcharges while tracking rig expenses.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Commercial trucking and freight loading dock',
        url: '/businesses/trades/trucking',
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
        url: '/businesses/trades/landscaping',
      },
      {
        id: 'paint-quote-templates',
        name: 'Paint Quote Templates',
        slug: 'paint-quote-templates',
        icon: Palette,
        description:
          'Quote residential and commercial paint jobs with surface prep, trim and ceiling lines, primer, and finish coats.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Clean painted walls and trim in a modern building',
        url: '/businesses/trades/paint-quote-templates',
      },
      {
        id: 'renovation-quote-template',
        name: 'Renovation Quote Template',
        slug: 'renovation-quote-template',
        icon: ClipboardCheck,
        description:
          'Structure whole-home or commercial renovation proposals with architectural allowances, trade breakdowns, and milestone payments.',
        image:
          'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Contractor reviewing renovation blueprints on site',
        url: '/businesses/trades/renovation-quote-template',
      },
      {
        id: 'woodworking',
        name: 'Woodworking',
        slug: 'woodworking',
        icon: Ruler,
        description:
          'Quote custom furniture, architectural millwork, hardwood lumber, joinery hardware, and shop fabrication hours.',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Woodworker measuring and shaping timber in a workshop',
        url: '/businesses/trades/woodworking',
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
        id: 'travel-agency',
        name: 'Travel Agency',
        slug: 'travel-agency',
        icon: Globe,
        description:
          'Manage custom travel packages, flight and hotel bookings, group tour deposits, and client itinerary statements.',
        image:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Travel agency consultant reviewing tour itineraries with clients',
        url: '/businesses/services/travel-agency',
      },
      {
        id: 'cleaning',
        name: 'Cleaning',
        slug: 'cleaning',
        icon: Sparkles,
        description:
          'Bill residential deep cleans, recurring weekly housekeeping, move-out sanitation, and cleaning supply costs effortlessly.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional cleaner sanitizing surfaces in a modern space',
        url: '/businesses/services/cleaning',
      },
      {
        id: 'tutoring',
        name: 'Tutoring',
        slug: 'tutoring',
        icon: Brain,
        description:
          'Invoice 1-on-1 academic tutoring sessions, exam prep bundles, study materials, and monthly student billing summaries.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Private tutor reviewing study materials at a desk',
        url: '/businesses/services/tutoring',
      },
      {
        id: 'guest-speaker',
        name: 'Guest Speaker',
        slug: 'guest-speaker',
        icon: Megaphone,
        description:
          'Quote keynote speaking engagements, panel appearances, booking deposits, and travel and lodging reimbursements.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional conference auditorium prepared for a keynote guest speaker',
        url: '/businesses/services/guest-speaker',
      },
      {
        id: 'piano-lesson',
        name: 'Piano Lesson',
        slug: 'piano-lesson',
        icon: Activity,
        description:
          'Bill private piano lessons, monthly music tuition packages, sheet music books, and student recital fees.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Studio workspace prepared for private music and piano instruction',
        url: '/businesses/services/piano-lesson',
      },
      {
        id: 'translation-quote-templates',
        name: 'Translation Quote Templates',
        slug: 'translation-quote-templates',
        icon: FileText,
        description:
          'Prepare structured translation price quotes by word count, source/target language pair, certification, and rush turnaround.',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Translator preparing a document translation quote at a desk',
        url: '/businesses/services/translation-quote-templates',
      },
      {
        id: 'cleaning-quote-templates',
        name: 'Cleaning Quote Templates',
        slug: 'cleaning-quote-templates',
        icon: ClipboardCheck,
        description:
          'Send itemized residential and commercial cleaning estimates by square footage, room count, and deep-cleaning add-ons.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Cleaning service supervisor preparing an on-site job estimate',
        url: '/businesses/services/cleaning-quote-templates',
      },
      {
        id: 'hair-salon',
        name: 'Hair Salon',
        slug: 'hair-salon',
        icon: Sparkles,
        description:
          'Manage bridal styling packages, salon chair rentals, retail hair care inventory, and vendor supply expenses.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Salon reception counter managing client appointments and billing',
        url: '/businesses/services/hair-salon',
      },
      {
        id: 'piano-teacher',
        name: 'Piano Teacher',
        slug: 'piano-teacher',
        icon: Users,
        description:
          'Organize term lesson schedules, recurring family tuition statements, makeup session credits, and studio expenses.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Independent music teacher organizing student lesson plans',
        url: '/businesses/services/piano-teacher',
      },
      {
        id: 'transportation',
        name: 'Transportation',
        slug: 'transportation',
        icon: PackageCheck,
        description:
          'Invoice passenger shuttles, corporate commuter routes, charter bookings, mileage rates, and fleet maintenance expenses.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Transportation operations team coordinating commercial vehicle dispatch',
        url: '/businesses/services/transportation',
      },
      {
        id: 'coaching',
        name: 'Coaching',
        slug: 'coaching',
        icon: UserCheck,
        description:
          'Bill executive coaching retainers, career discovery packages, group mastermind programs, and workshop sessions.',
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional coach leading a strategy session with clients',
        url: '/businesses/services/coaching',
      },
      {
        id: 'home-repair',
        name: 'Home Repair',
        slug: 'home-repair',
        icon: Home,
        description:
          'Quote residential repairs, drywall and fixture replacements, hardware materials, and handyman service hours.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Well-maintained home interior after professional repair work',
        url: '/businesses/services/home-repair',
      },
      {
        id: 'preschool',
        name: 'Preschool',
        slug: 'preschool',
        icon: Smile,
        description:
          'Issue monthly preschool tuition invoices, enrollment deposit receipts, after-care add-ons, and family account statements.',
        image:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Early childhood educators organizing classroom programs',
        url: '/businesses/services/preschool',
      },
      {
        id: 'commercial-cleaning-quote-templates',
        name: 'Commercial Cleaning Quote Templates',
        slug: 'commercial-cleaning-quote-templates',
        icon: Building2,
        description:
          'Create comprehensive office, medical, and retail facility cleaning proposals with service frequencies and supply breakdowns.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Clean commercial office building interior maintained by a facility crew',
        url: '/businesses/services/commercial-cleaning-quote-templates',
      },
      {
        id: 'janitorial-quote-templates',
        name: 'Janitorial Quote Templates',
        slug: 'janitorial-quote-templates',
        icon: Sparkles,
        description:
          'Prepare recurring janitorial contract bids covering nightly sanitation, floor care, consumable restocking, and staffing hours.',
        image:
          'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Janitorial specialist maintaining a commercial facility',
        url: '/businesses/services/janitorial-quote-templates',
      },
      {
        id: 'pressure-washing',
        name: 'Pressure Washing',
        slug: 'pressure-washing',
        icon: Droplets,
        description:
          'Quote driveway, exterior siding, deck, and commercial fleet power washing jobs with fast on-site estimates and invoices.',
        image:
          'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Technician operating high-pressure water equipment on site',
        url: '/businesses/services/pressure-washing',
      },
      {
        id: 'tree-service',
        name: 'Tree Service',
        slug: 'tree-service',
        icon: Trees,
        description:
          'Estimate tree trimming, hazardous limb removal, stump grinding, crane haul-away fees, and storm cleanup jobs.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional arborist and tree care grounds maintenance',
        url: '/businesses/services/tree-service',
      },
      {
        id: 'counseling',
        name: 'Counseling',
        slug: 'counseling',
        icon: HeartHandshake,
        description:
          'Manage private counseling session invoices, sliding-scale fee schedules, client statements, and office overhead.',
        image:
          'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Counselor in a calm, supportive private consultation office',
        url: '/businesses/services/counseling',
      },
      {
        id: 'jewelry',
        name: 'Jewelry',
        slug: 'jewelry',
        icon: Sparkles,
        description:
          'Bill custom jewelry commissions, ring resizing and stone-setting repairs, appraisal certificates, and precious metal inventory.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Boutique showroom displaying fine retail merchandise',
        url: '/businesses/services/jewelry',
      },
      {
        id: 'private-investigator',
        name: 'Private Investigator',
        slug: 'private-investigator',
        icon: ShieldCheck,
        description:
          'Itemize investigative retainers, surveillance hours, background research fees, mileage logs, and case disbursements.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Investigator reviewing case documentation and research reports',
        url: '/businesses/services/private-investigator',
      },
      {
        id: 'courier',
        name: 'Courier',
        slug: 'courier',
        icon: PackageCheck,
        description:
          'Bill same-day parcel dispatches, medical and legal courier routes, rush delivery surcharges, and corporate B2B accounts.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Courier sorting express parcels for local delivery',
        url: '/businesses/services/courier',
      },
      {
        id: 'limousine',
        name: 'Limousine',
        slug: 'limousine',
        icon: KeyRound,
        description:
          'Quote executive black-car transfers, wedding limousine charters, hourly wait times, airport tolls, and chauffeur gratuities.',
        image:
          'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Executive chauffeur and corporate transport professional',
        url: '/businesses/services/limousine',
      },
      {
        id: 'professional-services',
        name: 'Professional Services',
        slug: 'professional-services',
        icon: Briefcase,
        description:
          'Deliver polished proposals, milestone and retainer invoices, and transparent account statements for client engagements.',
        image:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional services team reviewing project deliverables with a client',
        url: '/businesses/services/professional-services',
      },
      {
        id: 'university',
        name: 'University',
        slug: 'university',
        icon: Building2,
        description:
          'Document continuing education fees, research lab service billings, campus facility rentals, and departmental expenses.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern academic and institutional administration building',
        url: '/businesses/services/university',
      },
      {
        id: 'daycare',
        name: 'Daycare',
        slug: 'daycare',
        icon: Smile,
        description:
          'Automate weekly or monthly childcare billing, sibling discounts, registration fees, and parent payment receipts.',
        image:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Daycare staff coordinating family schedules and care programs',
        url: '/businesses/services/daycare',
      },
      {
        id: 'maintenance',
        name: 'Maintenance',
        slug: 'maintenance',
        icon: Wrench,
        description:
          'Invoice commercial facility upkeep, preventative maintenance contracts, replacement parts, and emergency repair call-outs.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Maintenance technician inspecting building equipment',
        url: '/businesses/services/maintenance',
      },
      {
        id: 'security',
        name: 'Security',
        slug: 'security',
        icon: ShieldCheck,
        description:
          'Bill commercial patrol contracts, alarm and CCTV installation packages, event security staffing, and monitoring retainers.',
        image:
          'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Security systems specialist inspecting access control equipment',
        url: '/businesses/services/security',
      },
      {
        id: 'upholstery',
        name: 'Upholstery',
        slug: 'upholstery',
        icon: Ruler,
        description:
          'Quote custom furniture reupholstery, fabric yardage, foam replacement, antique restoration labor, and pickup/delivery.',
        image:
          'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Craftsperson measuring materials in an upholstery and woodworking studio',
        url: '/businesses/services/upholstery',
      },
      {
        id: 'delivery',
        name: 'Delivery',
        slug: 'delivery',
        icon: PackageCheck,
        description:
          'Track last-mile delivery routes, per-drop fees, white-glove assembly charges, and fuel expenses in one workspace.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Delivery specialist preparing customer packages for dispatch',
        url: '/businesses/services/delivery',
      },
      {
        id: 'makeup-artist',
        name: 'Makeup Artist',
        slug: 'makeup-artist',
        icon: Palette,
        description:
          'Invoice bridal makeup trials, wedding party bookings, editorial shoot day rates, kit fees, and travel retainers.',
        image:
          'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Creative beauty and styling team preparing for a client session',
        url: '/businesses/services/makeup-artist',
      },
      {
        id: 'security-guard',
        name: 'Security Guard',
        slug: 'security-guard',
        icon: ShieldCheck,
        description:
          'Itemize uniformed guard shifts, holiday and overnight rates, site supervision hours, and corporate security statements.',
        image:
          'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Security professional managing site access and shift logs',
        url: '/businesses/services/security-guard',
      },
      {
        id: 'veterinary',
        name: 'Veterinary',
        slug: 'veterinary',
        icon: HeartPulse,
        description:
          'Provide pet owners with clear, itemized veterinary invoices covering wellness exams, diagnostics, medications, and surgery.',
        image:
          'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern veterinary and clinical care facility',
        url: '/businesses/services/veterinary',
      },
      {
        id: 'delivery-service',
        name: 'Delivery Service',
        slug: 'delivery-service',
        icon: PackageCheck,
        description:
          'Manage recurring merchant delivery contracts, scheduled route billing, proof-of-delivery references, and fleet costs.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Delivery service hub organizing commercial parcels',
        url: '/businesses/services/delivery-service',
      },
      {
        id: 'moving-company-quote-templates',
        name: 'Moving Company Quote Templates',
        slug: 'moving-company-quote-templates',
        icon: Home,
        description:
          'Prepare binding and non-binding moving estimates covering crew hours, truck size, packing boxes, and long-distance mileage.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Moving company crew packing and staging boxes for relocation',
        url: '/businesses/services/moving-company-quote-templates',
      },
      {
        id: 'service-quote-templates',
        name: 'Service Quote Templates',
        slug: 'service-quote-templates',
        icon: FileText,
        description:
          'Build clear, professional service price quotes with labor rates, material line items, terms, and one-click invoice conversion.',
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Service manager reviewing a formal price quote with a customer',
        url: '/businesses/services/service-quote-templates',
      },
      {
        id: 'wedding-cake',
        name: 'Wedding Cake',
        slug: 'wedding-cake',
        icon: Sparkles,
        description:
          'Quote custom multi-tier wedding cakes, tasting consultations, booking deposits, venue delivery, and cake stand rentals.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Elegant reception venue prepared for a wedding celebration',
        url: '/businesses/services/wedding-cake',
      },
      {
        id: 'dog-walking',
        name: 'Dog Walking',
        slug: 'dog-walking',
        icon: HeartHandshake,
        description:
          'Bill weekly dog walking packs, solo or group walks, puppy drop-in visits, and recurring pet owner statements.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Outdoor park pathway used for professional dog walking services',
        url: '/businesses/services/dog-walking',
      },
      {
        id: 'music-teacher',
        name: 'Music Teacher',
        slug: 'music-teacher',
        icon: Users,
        description:
          'Manage private instrument instruction billing, semester tuition packages, ensemble workshops, and sheet music expenses.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Music instructor preparing lesson materials and student invoices',
        url: '/businesses/services/music-teacher',
      },
      {
        id: 'snow-removal',
        name: 'Snow Removal',
        slug: 'snow-removal',
        icon: Wind,
        description:
          'Invoice seasonal snow plowing retainers, per-push commercial lot clearing, de-icing salt applications, and equipment costs.',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Outdoor commercial property maintenance crew on site',
        url: '/businesses/services/snow-removal',
      },
      {
        id: 'wedding-planner',
        name: 'Wedding Planner',
        slug: 'wedding-planner',
        icon: CalendarCheck,
        description:
          'Organize full-service wedding planning retainers, day-of coordination packages, vendor deposits, and client budget tracking.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Wedding planner coordinating table layouts and event design',
        url: '/businesses/services/wedding-planner',
      },
      {
        id: 'driver',
        name: 'Driver',
        slug: 'driver',
        icon: KeyRound,
        description:
          'Issue clean invoices and receipts for private driving shifts, contract haulage, mileage reimbursements, and fuel logs.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional vehicle inspection and commercial driving service',
        url: '/businesses/services/driver',
      },
      {
        id: 'nanny',
        name: 'Nanny',
        slug: 'nanny',
        icon: HeartHandshake,
        description:
          'Track weekly childcare hours, overtime rates, family errand reimbursements, and clear payment statements.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Warm, organized family home environment for private childcare',
        url: '/businesses/services/nanny',
      },
      {
        id: 'software-services',
        name: 'Software Services',
        slug: 'software-services',
        icon: Code2,
        description:
          'Quote cloud migration projects, custom software implementation, technical support SLAs, and developer consulting hours.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Software services engineer configuring cloud systems on a laptop',
        url: '/businesses/services/software-services',
      },
      {
        id: 'welding',
        name: 'Welding',
        slug: 'welding',
        icon: Hammer,
        description:
          'Bill structural and mobile welding repairs, custom metal fabrication, steel materials, and shop labor hours.',
        image:
          'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Skilled metalworker and fabrication specialist on site',
        url: '/businesses/services/welding',
      },
      {
        id: 'education',
        name: 'Education',
        slug: 'education',
        icon: Brain,
        description:
          'Manage course enrollment invoices, corporate training workshops, curriculum development fees, and educational materials.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Educators collaborating on training programs in a modern learning space',
        url: '/businesses/services/education',
      },
      {
        id: 'personal-assistant',
        name: 'Personal Assistant',
        slug: 'personal-assistant',
        icon: UserCheck,
        description:
          'Invoice executive support retainers, calendar and travel management hours, and reimbursable client concierge purchases.',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Personal assistant organizing executive schedules and client records',
        url: '/businesses/services/personal-assistant',
      },
      {
        id: 'taxi',
        name: 'Taxi',
        slug: 'taxi',
        icon: KeyRound,
        description:
          'Generate corporate account transfer statements, airport voucher invoices, and track vehicle fuel and maintenance expenses.',
        image:
          'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Private hire and taxi dispatch keys and booking records',
        url: '/businesses/services/taxi',
      },
      {
        id: 'window-cleaning',
        name: 'Window Cleaning',
        slug: 'window-cleaning',
        icon: Sparkles,
        description:
          'Quote residential and high-rise commercial window washing, gutter clearing, screen repairs, and recurring route billing.',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Sunlit glass facade of a modern commercial office building',
        url: '/businesses/services/window-cleaning',
      },
      {
        id: 'florist',
        name: 'Florist',
        slug: 'florist',
        icon: Trees,
        description:
          'Prepare floral design proposals for weddings and corporate events, track stem inventory, and bill hotel and lobby subscriptions.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Botanical and floral greenery arranged by a professional studio',
        url: '/businesses/services/florist',
      },
      {
        id: 'personal-chef',
        name: 'Personal Chef',
        slug: 'personal-chef',
        icon: Store,
        description:
          'Itemize weekly meal-prep services, private dinner party menus, grocery receipts, and kitchen staffing fees.',
        image:
          'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Culinary professional organizing custom dining orders and ingredients',
        url: '/businesses/services/personal-chef',
      },
      {
        id: 'teaching',
        name: 'Teaching',
        slug: 'teaching',
        icon: Users,
        description:
          'Invoice independent teaching contracts, workshop facilitation, guest lectures, and classroom resource expenses.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Teacher preparing instructional workshops and student records',
        url: '/businesses/services/teaching',
      },
      {
        id: 'windshield-repair',
        name: 'Windshield Repair',
        slug: 'windshield-repair',
        icon: Wrench,
        description:
          'Bill mobile auto glass chip repairs, full windshield replacements, ADAS calibration fees, and fleet service accounts.',
        image:
          'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Automotive technician servicing a vehicle in a repair bay',
        url: '/businesses/services/windshield-repair',
      },
      {
        id: 'funeral',
        name: 'Funeral',
        slug: 'funeral',
        icon: HeartHandshake,
        description:
          'Provide families with compassionate, transparent itemized statements covering funeral director services, merchandise, and cash advances.',
        image:
          'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional advisor reviewing formal arrangement documents with care',
        url: '/businesses/services/funeral',
      },
      {
        id: 'pet-sitting',
        name: 'Pet-Sitting',
        slug: 'pet-sitting',
        icon: Smile,
        description:
          'Quote overnight pet-sitting stays, holiday care surcharges, medication administration, and repeat client packages.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Comfortable home setting for in-home pet sitting care',
        url: '/businesses/services/pet-sitting',
      },
      {
        id: 'translation',
        name: 'Translation',
        slug: 'translation',
        icon: Globe,
        description:
          'Invoice document localization, live interpretation hours, certified legal translations, and agency retainers.',
        image:
          'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional linguist working on multilingual translation projects',
        url: '/businesses/services/translation',
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
        id: 'photography',
        name: 'Photography',
        slug: 'photography',
        icon: Camera,
        description:
          'Bill booking deposits, shoot day rates, equipment rentals, retouching packages, and commercial usage licenses.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional camera lens and photography equipment in a studio',
        url: '/businesses/creative/photography',
      },
      {
        id: 'graphic-design',
        name: 'Graphic Design',
        slug: 'graphic-design',
        icon: PenTool,
        description:
          'Quote brand identity packages, print and digital design deliverables, licensing fees, and milestone payments.',
        image:
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Graphic designer working on brand identity visuals at a studio workstation',
        url: '/businesses/creative/graphic-design',
      },
      {
        id: 'dj',
        name: 'DJ',
        slug: 'dj',
        icon: Activity,
        description:
          'Invoice wedding and club DJ bookings, sound and lighting rig rentals, overtime hours, and non-refundable event retainers.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Event stage lighting and sound setup prepared for a live performance',
        url: '/businesses/creative/dj',
      },
      {
        id: 'entertainment',
        name: 'Entertainment',
        slug: 'entertainment',
        icon: Sparkles,
        description:
          'Manage live performance contracts, corporate entertainment bookings, production crew expenses, and deposit schedules.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Live event venue and entertainment stage setup',
        url: '/businesses/creative/entertainment',
      },
      {
        id: 'illustrator',
        name: 'Illustrator',
        slug: 'illustrator',
        icon: PenTool,
        description:
          'Quote editorial illustrations, book cover commissions, character concept art, revision rounds, and commercial buyout rights.',
        image:
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Illustrator sketching and refining digital artwork at a studio desk',
        url: '/businesses/creative/illustrator',
      },
      {
        id: 'web-design',
        name: 'Web Design',
        slug: 'web-design',
        icon: Laptop,
        description:
          'Bill UI/UX wireframes, Figma design systems, responsive landing page builds, and ongoing website care plans.',
        image:
          'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Web designers reviewing responsive interface layouts in a studio',
        url: '/businesses/creative/web-design',
      },
      {
        id: 'fashion',
        name: 'Fashion',
        slug: 'fashion',
        icon: Palette,
        description:
          'Manage runway styling fees, bespoke garment commissions, showroom wholesale orders, and fabric sourcing expenses.',
        image:
          'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Fashion studio and curated apparel collection display',
        url: '/businesses/creative/fashion',
      },
      {
        id: 'influencer',
        name: 'Influencer',
        slug: 'influencer',
        icon: Megaphone,
        description:
          'Invoice sponsored social posts, brand ambassadorships, UGC video deliverables, exclusivity windows, and paid usage rights.',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Content creator and digital media team planning a brand campaign',
        url: '/businesses/creative/influencer',
      },
      {
        id: 'photography-quote-templates',
        name: 'Photography Quote Templates',
        slug: 'photography-quote-templates',
        icon: Camera,
        description:
          'Send detailed photography estimates covering pre-production, shoot hours, assistant fees, post-processing, and usage tiers.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Photography gear prepared for a commercial shoot quote',
        url: '/businesses/creative/photography-quote-templates',
      },
      {
        id: 'web-design-quote-templates',
        name: 'Web Design Quote Templates',
        slug: 'web-design-quote-templates',
        icon: FileText,
        description:
          'Structure website design proposals with discovery, UX prototyping, CMS integration, SEO setup, and milestone draw schedules.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Web design proposal and digital project scope on a laptop',
        url: '/businesses/creative/web-design-quote-templates',
      },
      {
        id: 'film-production',
        name: 'Film Production',
        slug: 'film-production',
        icon: Camera,
        description:
          'Track above- and below-the-line production budgets, location permits, cinema gear rentals, crew day rates, and post-production.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Cinema camera and film production equipment in a studio',
        url: '/businesses/creative/film-production',
      },
      {
        id: 'interior-designer',
        name: 'Interior Designer',
        slug: 'interior-designer',
        icon: Home,
        description:
          'Bill spatial planning consultations, 3D rendering packages, FF&E procurement markups, and contractor coordination retainers.',
        image:
          'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Thoughtfully styled modern interior designed by a professional',
        url: '/businesses/creative/interior-designer',
      },
      {
        id: 'studio',
        name: 'Studio',
        slug: 'studio',
        icon: Building2,
        description:
          'Invoice hourly or daily creative studio bookings, cyclorama wall painting, lighting grip packages, and client catering add-ons.',
        image:
          'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Modern creative studio workspace and collaborative desk',
        url: '/businesses/creative/studio',
      },
      {
        id: 'web-development',
        name: 'Web Development',
        slug: 'web-development',
        icon: Code2,
        description:
          'Manage full-stack sprint billing, custom web application milestones, API integrations, and monthly hosting and maintenance retainers.',
        image:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Web developer writing application code on a laptop at a clean desk',
        url: '/businesses/creative/web-development',
      },
      {
        id: 'florist-quote-templates',
        name: 'Florist Quote Templates',
        slug: 'florist-quote-templates',
        icon: Trees,
        description:
          'Present itemized wedding and event floral proposals covering bridal bouquets, centerpieces, arch installations, and strike fees.',
        image:
          'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Lush botanical and floral greenery prepared for an event quote',
        url: '/businesses/creative/florist-quote-templates',
      },
      {
        id: 'media',
        name: 'Media',
        slug: 'media',
        icon: Globe,
        description:
          'Organize digital media production invoices, ad placement orders, editorial content packages, and cross-platform syndication.',
        image:
          'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Media production team reviewing digital content strategy',
        url: '/businesses/creative/media',
      },
      {
        id: 'video-production',
        name: 'Video Production',
        slug: 'video-production',
        icon: Camera,
        description:
          'Bill commercial video shoots, scripting, multi-cam filming, color grading, motion graphics, and final cut deliveries.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Professional video production camera and studio lens',
        url: '/businesses/creative/video-production',
      },
      {
        id: 'music-studio',
        name: 'Music Studio',
        slug: 'music-studio',
        icon: Activity,
        description:
          'Invoice recording booth lockouts, tracking and mixing engineer hours, analog mastering, and session musician fees.',
        image:
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Creative studio workspace for audio and music production',
        url: '/businesses/creative/music-studio',
      },
      {
        id: 'video-quote-templates',
        name: 'Video Quote Templates',
        slug: 'video-quote-templates',
        icon: FileSpreadsheet,
        description:
          'Create transparent video production estimates itemizing pre-production storyboards, shoot days, drone footage, and editing rounds.',
        image:
          'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Producer preparing an itemized video production quote',
        url: '/businesses/creative/video-quote-templates',
      },
      {
        id: 'graphic-design-quote-templates',
        name: 'Graphic Design Quote Templates',
        slug: 'graphic-design-quote-templates',
        icon: PenTool,
        description:
          'Send clear graphic design quotes detailing logo concepts, brand guidelines, packaging dielines, and source file handoff.',
        image:
          'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Graphic design studio workstation with brand identity concepts',
        url: '/businesses/creative/graphic-design-quote-templates',
      },
      {
        id: 'musician',
        name: 'Musician',
        slug: 'musician',
        icon: Users,
        description:
          'Bill live gig guarantees, session recording tracks, composition royalties, private event performances, and travel per diems.',
        image:
          'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Live performance hall prepared for professional musicians',
        url: '/businesses/creative/musician',
      },
      {
        id: 'videography',
        name: 'Videography',
        slug: 'videography',
        icon: Camera,
        description:
          'Quote wedding and event videography packages, highlight reels, raw footage archival drives, and second-shooter day rates.',
        image:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80',
        imageAlt: 'Videographer preparing camera rig and lenses for a shoot',
        url: '/businesses/creative/videography',
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
  trades: {
    electrician: 'electrical',
    plumber: 'plumbing',
    carpenter: 'woodworking',
    'hvac-technician': 'hvac',
  },
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
  services: {
    'cleaning-services': 'cleaning',
    landscaping: 'tree-service',
    'event-planning': 'wedding-planner',
    'home-maintenance': 'home-repair',
    'real-estate-services': 'professional-services',
  },
  creative: {
    'graphic-designer': 'graphic-design',
    photographer: 'photography',
    'content-writer': 'media',
    'web-developer': 'web-development',
    'marketing-agency': 'media',
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
