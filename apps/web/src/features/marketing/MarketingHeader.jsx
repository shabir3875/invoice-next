import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { APP_ROUTES } from './data';
import './marketing-header.css';

export const MARKETING_NAVIGATION = [
  { label: 'Features', href: '/#features' },
  {
    label: 'Invoice Templates',
    href: '/templates/freelance',
    children: [
      ['Consulting', '/templates/consulting'],
      ['Freelance', '/templates/freelance'],
      ['Law Firm', '/templates/law-firm'],
      ['Small Businesses', '/templates/small-businesses'],
    ],
  },
  { label: 'Invoice Generator', href: '/invoice-generator' },
  { label: 'Pricing', href: '/pricing' },
];

export function MarketingBrand({ dark = false }) {
  return <a href="/" aria-label="Invonxt home" className={`marketing-brand flex items-center gap-2.5 text-xl font-black tracking-[-.04em] ${dark ? 'text-white' : 'text-slate-950'}`}><span className="grid h-10 w-10 place-items-center rounded-xl text-white">IN</span>Invo<span>Nxt</span></a>;
}

export default function MarketingHeader() {
  const [open, setOpen] = useState(false);
  return <header className="marketing-header"><div className="marketing-header__inner"><MarketingBrand/><nav className="marketing-header__nav" aria-label="Primary navigation">{MARKETING_NAVIGATION.map(item => <div key={item.label} className="marketing-header__item"><a href={item.href} className="marketing-header__link">{item.label}{item.children && <ChevronDown size={14}/>}</a>{item.children && <div className="marketing-header__dropdown">{item.children.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>}</div>)}</nav><div className="marketing-header__actions"><a href={APP_ROUTES.login} className="marketing-header__login">Login</a><a href={APP_ROUTES.signup} className="marketing-header__cta">Try It Free</a></div><button type="button" onClick={() => setOpen(value => !value)} className="marketing-header__toggle" aria-expanded={open} aria-controls="marketing-mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X/> : <Menu/>}</button></div>{open && <div id="marketing-mobile-navigation" className="marketing-header__mobile"><nav aria-label="Mobile navigation">{MARKETING_NAVIGATION.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav><div className="marketing-header__mobile-actions"><a href={APP_ROUTES.login} className="marketing-header__login">Login</a><a href={APP_ROUTES.signup} className="marketing-header__cta">Try It Free</a></div></div>}</header>;
}
