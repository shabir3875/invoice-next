import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { AppShell } from './features/app-components';
import FeatureDetailPage from './features/marketing/FeatureDetailPage';
import PublicPage from './features/marketing/PublicPage';

function HashRouteHandler({ children }) {
    const [hash, setHash] = React.useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));

    React.useEffect(() => {
        const handleHashChange = () => {
            const h = window.location.hash;
            setHash(h);

            // If navigating to core app hash routes on the marketing domain, safely redirect to the live app
            if (typeof window !== 'undefined' && (window.location.hostname === 'invonxt.com' || window.location.hostname === 'www.invonxt.com')) {
                if (h && (h.startsWith('#/dashboard') || h.startsWith('#/invoices') || h.startsWith('#/customers') || h.startsWith('#/expenses') || h.startsWith('#/documents') || h.startsWith('#/settings') || h.startsWith('#/premium'))) {
                    window.location.href = `https://app.invonxt.com/${h}`;
                }
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Render the responsive Premium Plans shell if requested via hash
    if (hash === '#/premium' || hash.startsWith('#/premium')) {
        return <AppShell initialPage="premium" />;
    }

    return children;
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <HashRouteHandler>
                <Routes>
                    <Route path="/" element={<HomePage routePath="/" />} />
                    <Route path="/features" element={<PublicPage kind="features" />} />
                    <Route path="/solutions/:slug" element={<PublicPage kind="solution" />} />
                    <Route path="/pricing" element={<PublicPage kind="pricing" />} />
                    <Route path="/about" element={<PublicPage kind="about" />} />
                    <Route path="/contact" element={<PublicPage kind="contact" />} />
                    <Route path="/support" element={<PublicPage kind="support" />} />
                    <Route path="/faq" element={<PublicPage kind="faq" />} />
                    <Route path="/privacy" element={<PublicPage kind="privacy" />} />
                    <Route path="/terms" element={<PublicPage kind="terms" />} />
                    <Route path="/cookie-policy" element={<PublicPage kind="cookie-policy" />} />
                    <Route path="/refund-policy" element={<PublicPage kind="refund-policy" />} />
                    <Route path="/templates/consulting" element={<HomePage routePath="/templates/consulting" />} />
                    <Route path="/templates/freelance" element={<HomePage routePath="/templates/freelance" />} />
                    <Route path="/template/freeluncer" element={<HomePage routePath="/template/freeluncer" />} />
                    <Route path="/templates/law-firm" element={<HomePage routePath="/templates/law-firm" />} />
                    <Route path="/templates/small-businesses" element={<HomePage routePath="/templates/small-businesses" />} />
                    <Route path="/features/:slug" element={<FeatureDetailPage />} />
                    <Route path="/premium" element={<AppShell initialPage="premium" />} />
                    <Route path="*" element={<PublicPage kind="not-found" />} />
                </Routes>
            </HashRouteHandler>
        </Router>
    );
}

export default App;
