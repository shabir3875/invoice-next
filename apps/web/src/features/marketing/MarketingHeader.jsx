import React, { useEffect, useState } from 'react';
import { useInRouterContext, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { APP_ROUTES } from './data';
import './marketing-header.css';

export const MARKETING_NAVIGATION = [
  { label: 'Features', href: '/#features' },
  { label: 'For Businesses', href: '/for-businesses' },
  {
    label: 'Invoice Templates',
    href: '/templates/freelance',
    children: [
      ['Freelance', '/templates/freelance'],
    ],
  },
  { label: 'Invoice Generator', href: APP_ROUTES.login },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export function MarketingBrand({ dark = false }) {
  return <a href="/" aria-label="Invoice Next home" className={`marketing-brand flex items-center gap-2.5 text-xl font-black tracking-[-.04em] ${dark ? 'text-white' : 'text-slate-950'}`}><span className="grid h-10 w-10 place-items-center rounded-xl text-white">IN</span>Invoice <span>Next</span></a>;
}

function RouterAwareMarketingHeader({ currentPath = '' }) {
  const location = useLocation();
  return <MarketingHeaderContent activePath={currentPath || location.pathname} />;
}

function MarketingHeaderContent({ activePath = '' }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [activePath]);

  const isItemActive = (href) => {
    if (!activePath) return false;
    if (href === activePath) return true;
    if (
      href === '/for-businesses' &&
      (activePath.startsWith('/for-businesses') || activePath.startsWith('/businesses'))
    ) {
      return true;
    }
    if (
      href === '/blog' &&
      (activePath === '/blog' || activePath.startsWith('/blog/'))
    ) {
      return true;
    }
    if (href !== '/' && !href.startsWith('/#') && activePath === href) return true;
    return false;
  };

  return (
    <header className="marketing-header">
      <div className="marketing-header__inner">
        <MarketingBrand />
        <nav className="marketing-header__nav" aria-label="Primary navigation">
          {MARKETING_NAVIGATION.map(item => {
            const active = isItemActive(item.href);
            return (
              <div key={item.label} className="marketing-header__item">
                <a
                  href={item.href}
                  className={`marketing-header__link ${active ? 'is-active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </a>
                {item.children && (
                  <div className="marketing-header__dropdown">
                    {item.children.map(([label, href]) => (
                      <a key={href} href={href}>
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <div className="marketing-header__actions">
          <a href={APP_ROUTES.login} className="marketing-header__login">Login</a>
          <a href={APP_ROUTES.signup} className="marketing-header__cta">Try It Free</a>
        </div>
        <button
          type="button"
          onClick={() => setOpen(value => !value)}
          className="marketing-header__toggle"
          aria-expanded={open}
          aria-controls="marketing-mobile-navigation"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div id="marketing-mobile-navigation" className="marketing-header__mobile">
          <nav aria-label="Mobile navigation">
            {MARKETING_NAVIGATION.map(item => {
              const active = isItemActive(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={active ? 'is-active' : ''}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="marketing-header__mobile-actions">
            <a href={APP_ROUTES.login} className="marketing-header__login">Login</a>
            <a href={APP_ROUTES.signup} className="marketing-header__cta">Try It Free</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default function MarketingHeader({ currentPath = '' }) {
  const inRouter = useInRouterContext();
  if (inRouter) {
    return <RouterAwareMarketingHeader currentPath={currentPath} />;
  }
  const fallbackPath =
    currentPath || (typeof window !== 'undefined' ? window.location.pathname : '');
  return <MarketingHeaderContent activePath={fallbackPath} />;
}
