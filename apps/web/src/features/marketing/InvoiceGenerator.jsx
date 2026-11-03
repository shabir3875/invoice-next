import React, { useMemo, useState } from 'react';
import { Download, Eye, ImagePlus, Plus, Printer, ShieldCheck, Trash2, X } from 'lucide-react';
import { APP_ROUTES } from './data';

const money = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(value) || 0);
const blankItem = () => ({ id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`, description: '', quantity: 1, price: 0, tax: 0, discount: 0 });
const control = 'mt-2 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10';

function Preview({ form, totals, logo }) {
  return (
    <article className="invoice-print mx-auto w-full max-w-[760px] overflow-hidden bg-white text-slate-900 shadow-[0_20px_70px_-30px_rgba(15,23,42,.35)]">
      <div className="h-2 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400" />
      <div className="p-7 sm:p-11">
        <header className="flex items-start justify-between gap-8 border-b border-slate-200 pb-8">
          <div className="min-w-0">
            {logo ? <img src={logo} alt="Business logo" className="mb-5 max-h-14 max-w-44 object-contain" /> : <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-slate-950 text-sm font-black tracking-tight text-white">IN</div>}
            <h3 className="text-xl font-extrabold tracking-tight text-slate-950">{form.businessName || 'Your Business'}</h3>
            <p className="mt-1.5 max-w-[280px] whitespace-pre-line text-[11px] leading-5 text-slate-500">{form.businessDetails || 'Business address and contact details'}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-[10px] font-extrabold uppercase tracking-[.25em] text-blue-600">Invoice</div>
            <div className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">{form.invoiceNumber}</div>
            <div className="mt-5 grid grid-cols-[auto_auto] gap-x-5 gap-y-1.5 text-[11px]">
              <span className="text-slate-400">Issue date</span><span className="font-semibold text-slate-700">{form.invoiceDate}</span>
              <span className="text-slate-400">Due date</span><span className="font-semibold text-slate-700">{form.dueDate}</span>
            </div>
          </div>
        </header>

        <section className="grid gap-6 py-8 sm:grid-cols-2">
          <div><div className="text-[9px] font-extrabold uppercase tracking-[.2em] text-slate-400">Billed to</div><div className="mt-2 text-sm font-bold text-slate-900">{form.customerName || 'Customer name'}</div><p className="mt-1 whitespace-pre-line text-[11px] leading-5 text-slate-500">{form.customerDetails || 'Customer address and contact details'}</p></div>
          <div className="sm:text-right"><div className="text-[9px] font-extrabold uppercase tracking-[.2em] text-slate-400">Payment details</div><p className="mt-2 whitespace-pre-line text-[11px] font-medium leading-5 text-slate-600">{form.paymentDetails || 'Payment terms: Due within 14 days'}</p></div>
        </section>

        <div className="overflow-hidden rounded-lg border border-slate-200">
          <div className="grid grid-cols-[1fr_48px_82px_92px] bg-slate-950 px-4 py-3 text-[9px] font-extrabold uppercase tracking-wider text-slate-300"><span>Description</span><span>Qty</span><span>Rate</span><span className="text-right">Amount</span></div>
          {form.items.map((item) => { const base = (Number(item.quantity) || 0) * (Number(item.price) || 0); const amount = base + base * (Number(item.tax) || 0) / 100 - base * (Number(item.discount) || 0) / 100; return <div key={item.id} className="grid grid-cols-[1fr_48px_82px_92px] border-b border-slate-100 px-4 py-4 text-[11px] last:border-0"><span className="pr-3 font-semibold text-slate-800">{item.description || 'Item or service'}</span><span className="text-slate-500">{item.quantity}</span><span className="text-slate-500">{money(item.price)}</span><span className="text-right font-bold text-slate-900">{money(amount)}</span></div>; })}
        </div>

        <div className="mt-7 grid gap-8 sm:grid-cols-[1fr_260px]">
          <div>{form.notes && <><div className="text-[9px] font-extrabold uppercase tracking-[.2em] text-slate-400">Notes</div><p className="mt-2 whitespace-pre-line text-[11px] leading-5 text-slate-500">{form.notes}</p></>}</div>
          <div className="text-[11px]"><div className="flex justify-between py-2 text-slate-500"><span>Subtotal</span><span className="font-semibold text-slate-700">{money(totals.subtotal)}</span></div><div className="flex justify-between py-2 text-slate-500"><span>Tax</span><span className="font-semibold text-slate-700">{money(totals.tax)}</span></div><div className="flex justify-between py-2 text-slate-500"><span>Discount</span><span className="font-semibold text-slate-700">−{money(totals.discount)}</span></div><div className="mt-2 flex justify-between rounded-lg bg-blue-50 px-4 py-3.5 text-base font-extrabold text-blue-950"><span>Total due</span><span>{money(totals.grand)}</span></div></div>
        </div>
        <footer className="mt-10 flex items-center justify-between border-t border-slate-100 pt-5 text-[9px] text-slate-400"><span>Thank you for your business.</span><span className="font-bold uppercase tracking-wider">Generated with InvoNxt</span></footer>
      </div>
    </article>
  );
}

function Field({ label, children, className = '' }) { return <label className={`block text-xs font-bold text-slate-700 ${className}`}>{label}{children}</label>; }

export default function InvoiceGenerator() {
  const today = new Date().toISOString().slice(0, 10);
  const due = new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10);
  const [form, setForm] = useState({ businessName: '', businessDetails: '', customerName: '', customerDetails: '', invoiceNumber: 'INV-1001', invoiceDate: today, dueDate: due, paymentDetails: 'Payment terms: Due within 14 days', notes: 'We appreciate your business. Please include the invoice number with your payment.', items: [{ ...blankItem(), description: 'Professional services', quantity: 1, price: 500, tax: 0, discount: 0 }] });
  const [logo, setLogo] = useState('');
  const [preview, setPreview] = useState(false);
  const totals = useMemo(() => form.items.reduce((acc, item) => { const base = (Number(item.quantity) || 0) * (Number(item.price) || 0); const tax = base * (Number(item.tax) || 0) / 100; const discount = base * (Number(item.discount) || 0) / 100; return { subtotal: acc.subtotal + base, tax: acc.tax + tax, discount: acc.discount + discount, grand: acc.grand + base + tax - discount }; }, { subtotal: 0, tax: 0, discount: 0, grand: 0 }), [form.items]);
  const field = (key, value) => setForm((v) => ({ ...v, [key]: value }));
  const itemField = (id, key, value) => setForm((v) => ({ ...v, items: v.items.map((item) => item.id === id ? { ...item, [key]: value } : item) }));
  const remove = (id) => setForm((v) => ({ ...v, items: v.items.length === 1 ? v.items : v.items.filter((item) => item.id !== id) }));
  const uploadLogo = (event) => { const file = event.target.files?.[0]; if (!file) return; const reader = new FileReader(); reader.onload = () => setLogo(String(reader.result)); reader.readAsDataURL(file); };
  const print = () => { setPreview(true); window.setTimeout(() => window.print(), 120); };

  return <section id="generator" className="scroll-mt-24 bg-slate-50 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8">
    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.16em] text-blue-700"><ShieldCheck size={13}/>Free invoice builder</span><h2 className="mt-5 text-3xl font-black tracking-[-.04em] text-slate-950 sm:text-5xl">Create a polished invoice in minutes</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">Add your business and client details, itemize the work, then preview or save a print-ready PDF.</p></div><div className="flex items-center gap-2 text-xs font-semibold text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Your data stays in this browser</div></div>
    <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.02fr_.98fr]">
      <form className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm" onSubmit={(e) => e.preventDefault()}>
        <div className="border-b border-slate-100 px-5 py-5 sm:px-7"><h3 className="text-base font-extrabold text-slate-950">Invoice details</h3><p className="mt-1 text-xs text-slate-500">Fields update the preview instantly.</p></div>
        <div className="space-y-8 p-5 sm:p-7">
          <fieldset><legend className="mb-4 text-[10px] font-extrabold uppercase tracking-[.18em] text-blue-600">From</legend><div className="grid gap-4 sm:grid-cols-2"><Field label="Business name"><input value={form.businessName} onChange={(e) => field('businessName', e.target.value)} placeholder="Your business name" className={`${control} h-11`}/></Field><Field label="Business logo"><span className={`${control} flex h-11 cursor-pointer items-center justify-center gap-2 border-dashed text-slate-500 hover:text-blue-600`}><ImagePlus size={16}/>{logo ? 'Replace logo' : 'Upload logo'}<input type="file" accept="image/*" onChange={uploadLogo} className="sr-only"/></span></Field><Field label="Business details" className="sm:col-span-2"><textarea value={form.businessDetails} onChange={(e) => field('businessDetails', e.target.value)} placeholder="Address, email and phone" className={`${control} min-h-20 py-3`}/></Field></div></fieldset>
          <fieldset className="border-t border-slate-100 pt-7"><legend className="mb-4 text-[10px] font-extrabold uppercase tracking-[.18em] text-blue-600">Bill to</legend><div className="grid gap-4 sm:grid-cols-2"><Field label="Customer name"><input value={form.customerName} onChange={(e) => field('customerName', e.target.value)} placeholder="Customer or company" className={`${control} h-11`}/></Field><Field label="Customer details"><input value={form.customerDetails} onChange={(e) => field('customerDetails', e.target.value)} placeholder="Address or email" className={`${control} h-11`}/></Field></div></fieldset>
          <fieldset className="border-t border-slate-100 pt-7"><legend className="mb-4 text-[10px] font-extrabold uppercase tracking-[.18em] text-blue-600">Reference</legend><div className="grid gap-4 sm:grid-cols-3"><Field label="Invoice number"><input value={form.invoiceNumber} onChange={(e) => field('invoiceNumber', e.target.value)} className={`${control} h-11`}/></Field><Field label="Issue date"><input type="date" value={form.invoiceDate} onChange={(e) => field('invoiceDate', e.target.value)} className={`${control} h-11`}/></Field><Field label="Due date"><input type="date" value={form.dueDate} onChange={(e) => field('dueDate', e.target.value)} className={`${control} h-11`}/></Field></div></fieldset>
          <fieldset className="border-t border-slate-100 pt-7"><div className="flex items-center justify-between"><legend className="text-[10px] font-extrabold uppercase tracking-[.18em] text-blue-600">Line items</legend><button type="button" onClick={() => setForm((v) => ({ ...v, items: [...v.items, blankItem()] }))} className="flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100"><Plus size={14}/>Add item</button></div><div className="mt-4 space-y-3">{form.items.map((item, index) => <div key={item.id} className="rounded-xl border border-slate-200 p-4"><div className="flex items-center justify-between"><b className="text-[10px] uppercase tracking-wider text-slate-400">Item {index + 1}</b><button type="button" onClick={() => remove(item.id)} disabled={form.items.length === 1} className="text-slate-400 hover:text-rose-600 disabled:opacity-30" aria-label={`Remove item ${index + 1}`}><Trash2 size={15}/></button></div><input value={item.description} onChange={(e) => itemField(item.id, 'description', e.target.value)} placeholder="Description of work or product" className={`${control} h-10`}/><div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">{[['quantity', 'Quantity'], ['price', 'Rate'], ['tax', 'Tax %'], ['discount', 'Discount %']].map(([key, label]) => <Field key={key} label={label}><input type="number" min="0" step={key === 'quantity' ? '1' : '0.01'} value={item[key]} onChange={(e) => itemField(item.id, key, e.target.value)} className={`${control} h-10`}/></Field>)}</div></div>)}</div></fieldset>
          <fieldset className="grid gap-4 border-t border-slate-100 pt-7 sm:grid-cols-2"><Field label="Payment details"><textarea value={form.paymentDetails} onChange={(e) => field('paymentDetails', e.target.value)} className={`${control} min-h-20 py-3`}/></Field><Field label="Notes"><textarea value={form.notes} onChange={(e) => field('notes', e.target.value)} className={`${control} min-h-20 py-3`}/></Field></fieldset>
        </div>
        <div className="grid gap-3 border-t border-slate-100 bg-slate-50 px-5 py-5 sm:grid-cols-3 sm:px-7"><button type="button" onClick={() => setPreview(true)} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:border-slate-300"><Eye size={16}/>Preview</button><button type="button" onClick={print} className="flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50"><Download size={16}/>Save PDF</button><button type="button" onClick={() => { window.location.href = APP_ROUTES.invoices; }} className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">Create invoice</button></div>
      </form>
      <aside className="sticky top-28 hidden rounded-2xl border border-slate-200 bg-slate-200/60 p-5 shadow-inner lg:block"><div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-slate-500">Live preview</span><span className="text-[10px] font-semibold text-slate-400">A4 ready</span></div><Preview form={form} totals={totals} logo={logo}/></aside>
    </div>
  </div>
  {preview && <div className="preview-overlay fixed inset-0 z-[110] overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label="Invoice preview"><div className="mx-auto max-w-[850px]"><div className="preview-controls mb-3 flex justify-end gap-2"><button type="button" onClick={() => setPreview(false)} className="grid h-11 w-11 place-items-center rounded-xl bg-white text-slate-700" aria-label="Close invoice preview"><X size={19}/></button><button type="button" onClick={() => window.print()} className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white"><Printer size={16}/>Print / Save PDF</button></div><Preview form={form} totals={totals} logo={logo}/></div></div>}
  </section>;
}
