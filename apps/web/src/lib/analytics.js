import { CookieConsentCategory, isConsentGranted } from './cookieConsent';

const measurementId = import.meta.env.VITE_GA4_ID;
let loaded = false;

export function loadAnalytics() {
  if (loaded || !measurementId || !isConsentGranted(CookieConsentCategory.Analytics) || typeof document === 'undefined') return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip:true, send_page_view:true });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

export function trackEvent(name, parameters = {}) {
  if (!loaded || typeof window.gtag !== 'function') return;
  const safe = Object.fromEntries(Object.entries(parameters).filter(([,value]) => ['string','number','boolean'].includes(typeof value)));
  window.gtag('event', name, safe);
}

export function installAnalytics() {
  loadAnalytics();
  const onConsent = () => loadAnalytics();
  const onClick = (event) => {
    const target = event.target.closest('[data-analytics-event]');
    if (target) trackEvent(target.dataset.analyticsEvent, { link_text: target.dataset.analyticsLabel || target.textContent.trim().slice(0, 80), link_url: target.href || '' });
  };
  window.addEventListener('cc:onConsent', onConsent);
  window.addEventListener('cc:onChange', onConsent);
  document.addEventListener('click', onClick);
}
