import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        const routeSectionMap = {
            '/about': 'about',
            '/contact': 'contact',
            '/privacy': 'security',
            '/terms': 'pricing',
        };
        const targetId = hash ? hash.slice(1) : routeSectionMap[pathname];

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
}

export default ScrollToTop;

export { ScrollToTop };
