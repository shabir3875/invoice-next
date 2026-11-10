import {
  BarChart3, BriefcaseBusiness, Calculator, ClipboardCheck, CreditCard,
  FileCheck2, FileClock, FileMinus2, FileText, GraduationCap, Hammer,
  Layers3, Receipt, RefreshCw, ShieldCheck, Users, WalletCards, Zap,
} from 'lucide-react';

export const APP_URL = 'https://app.invonxt.com/';
export const APP_ROUTES = {
  login: APP_URL,
  signup: APP_URL,
  dashboard: `${APP_URL}#/dashboard`,
  invoices: `${APP_URL}#/invoices`,
  customers: `${APP_URL}#/customers`,
  expenses: `${APP_URL}#/expenses`,
  documents: `${APP_URL}#/documents`,
  pricing: '/premium',
  settings: `${APP_URL}#/settings`,
};

export const benefits = [
  { icon: Zap, title: 'Easy Invoice Creation', text: 'Build accurate invoices in minutes.' },
  { icon: Layers3, title: 'Professional Templates', text: 'Create customizable templates your way.' },
  { icon: CreditCard, title: 'Faster Payments', text: 'Keep payment details clear and accessible.' },
  { icon: BriefcaseBusiness, title: 'Business Management', text: 'Organize clients, items and documents.' },
  { icon: ShieldCheck, title: 'Secure Data', text: 'Access business records from the cloud.' },
];

export const productFeatures = [
  { icon: FileText, title: 'Invoice Management', description: 'Create polished invoices, revise details, export documents and follow every status from one workspace.', bullets: ['Create and edit invoices', 'Download PDF documents', 'Track paid, pending and overdue status'], visual: 'invoice' },
  { icon: ClipboardCheck, title: 'Estimate Management', description: 'Send clear estimates, manage approvals and move accepted work into invoicing without starting again.', bullets: ['Create and send estimates', 'Keep quote details organized', 'Convert estimates into invoices'], visual: 'estimate' },
  { icon: Users, title: 'Client Management', description: 'Keep customer information and billing history together, so every new document starts with the right details.', bullets: ['Save customer details', 'Review customer history', 'Access customer invoice records'], visual: 'clients' },
  { icon: Receipt, title: 'Expense Management', description: 'Capture business costs as they happen and turn scattered receipts into useful records.', bullets: ['Record and categorize expenses', 'Upload receipt references', 'Review expense summaries'], visual: 'expense' },
  { icon: RefreshCw, title: 'Invoice Audit History', description: 'Review invoice changes and payment-linked activity from a traceable business record.', bullets: ['Review invoice activity', 'Track payment changes', 'Keep billing history connected'], visual: 'payment' },
  { icon: WalletCards, title: 'Payment Tracking', description: 'Record full or partial payments and always know which balances still need attention.', bullets: ['Record customer payments', 'Support partial payments', 'Review balances and payment history'], visual: 'payments' },
  { icon: FileMinus2, title: 'Credit & Debit Notes', description: 'Document billing adjustments with a clear audit trail connected to your business records.', bullets: ['Generate credit notes', 'Generate debit notes', 'Track invoice adjustments'], visual: 'notes' },
  { icon: BarChart3, title: 'Business Reports', description: 'Turn invoice and expense activity into a practical view of business performance.', bullets: ['Revenue and expense reports', 'Outstanding invoice visibility', 'Business performance overview'], visual: 'reports' },
];

export const templates = [
  { id: 'professional', name: 'Professional', accent: '#2563eb', layout: 'classic' },
  { id: 'modern', name: 'Modern', accent: '#0f766e', layout: 'split' },
  { id: 'minimal', name: 'Minimal', accent: '#334155', layout: 'minimal' },
  { id: 'accountant', name: 'Accountant', accent: '#4f46e5', layout: 'classic' },
  { id: 'consultant', name: 'Consultant', accent: '#0369a1', layout: 'split' },
  { id: 'education-consultant', name: 'Education Consultant', accent: '#7c3aed', layout: 'classic' },
  { id: 'freelancer', name: 'Freelancer', accent: '#ea580c', layout: 'minimal' },
  { id: 'contractor', name: 'Contractor', accent: '#b45309', layout: 'split' },
  { id: 'small-business', name: 'Small Business', accent: '#059669', layout: 'classic' },
  { id: 'pakistan', name: 'Pakistan', accent: '#047857', layout: 'split' },
  { id: 'international', name: 'International', accent: '#1d4ed8', layout: 'minimal' },
];

export const solutions = [
  { icon: Hammer, title: 'Trades', route: '/solutions/contractors', text: 'Turn estimates into invoices, document materials and labor, and keep customer records accessible on the go.' },
  { icon: FileCheck2, title: 'Legal', route: '/solutions/legal-firms', text: 'Create clear client invoices and keep matters, services, expenses, and billing records organized.' },
  { icon: BriefcaseBusiness, title: 'Business', route: '/solutions/small-businesses', text: 'Bring documents, customers, products, payments, and expenses into one straightforward workspace.' },
  { icon: ShieldCheck, title: 'Health', route: '/for-businesses', text: 'Create professional invoices for appointments, treatments, and other health and wellness services.' },
  { icon: Calculator, title: 'Services', route: '/solutions/consultants', text: 'Reuse service items, manage client details, and move smoothly from estimates to invoices.' },
  { icon: FileClock, title: 'Creative', route: '/solutions/freelancers', text: 'Invoice projects and retainers, record partial payments, and keep outstanding balances visible.' },
  { icon: FileText, title: 'General', route: '/for-businesses', text: 'Build a polished invoice for any type of work with flexible line items, terms, and payment details.' },
];

export const demoTestimonials = [
  { quote: 'The dashboard is easy to understand and gives me a much clearer view of what is still unpaid.', name: 'Demo — Independent consultant', role: 'Illustrative feedback' },
  { quote: 'Reusable customers and service items would save our team time on every repeat invoice.', name: 'Demo — Small agency owner', role: 'Illustrative feedback' },
  { quote: 'I like being able to manage invoices and expenses from the same business workspace.', name: 'Demo — Freelance designer', role: 'Illustrative feedback' },
];
