import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navigate = useNavigate();

    // Intercept internal <a href="/..."> clicks for instant SPA navigation without full-page FOUC reloads
    useEffect(() => {
        const handleDocumentClick = (event) => {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const anchor = event.target instanceof Element ? event.target.closest('a') : null;
            if (!anchor) return;
            if (anchor.target && anchor.target !== '_self') return;
            if (anchor.hasAttribute('download')) return;

            const rawHref = anchor.getAttribute('href');
            if (!rawHref) return;

            // Same-page anchor link (e.g. "#section-0" or "#features")
            if (rawHref.startsWith('#') && !rawHref.startsWith('#/')) {
                const targetId = rawHref.slice(1);
                const targetEl = targetId ? document.getElementById(targetId) : null;
                if (targetEl) {
                    event.preventDefault();
                    window.history.pushState(null, '', rawHref);
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                return;
            }

            // Internal route link (e.g. "/for-businesses", "/blog", "/#features")
            if (rawHref.startsWith('/') && !rawHref.startsWith('//')) {
                event.preventDefault();
                navigate(rawHref);
            }
        };

        document.addEventListener('click', handleDocumentClick);
        return () => document.removeEventListener('click', handleDocumentClick);
    }, [navigate]);

    useLayoutEffect(() => {
        const routeSectionMap = {
            '/about': 'about',
            '/contact': 'contact',
            '/privacy': 'security',
            '/terms': 'pricing',
        };
        const normalizedPath = pathname.replace(/\/+$/, '') || '/';
        const targetId = hash ? hash.slice(1) : routeSectionMap[normalizedPath];

        if (targetId) {
            const target = document.getElementById(targetId);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;

export { ScrollToTop };
