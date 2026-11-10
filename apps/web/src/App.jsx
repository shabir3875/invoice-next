import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

const AppShell = React.lazy(() => import('./features/app-components').then(module => ({ default: module.AppShell })));
const FeatureDetailPage = React.lazy(() => import('./features/marketing/FeatureDetailPage'));
const PublicPage = React.lazy(() => import('./features/marketing/PublicPage'));
const TemplatePage = React.lazy(() => import('./features/marketing/TemplatePage'));
const SeoLandingPage = React.lazy(() => import('./features/marketing/SeoLandingPage'));
const BlogPage = React.lazy(() => import('./features/marketing/BlogPage'));
const ForBusinessesPage = React.lazy(() => import('./features/marketing/ForBusinessesPage'));
const BusinessDetailPage = React.lazy(() => import('./features/marketing/BusinessDetailPage'));
import { SEO_ROUTES } from './features/marketing/seo-pages';

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
            <React.Suspense fallback={<div className="min-h-screen bg-white" aria-busy="true" />}>
            <HashRouteHandler>
                <Routes>
                    <Route path="/" element={<HomePage routePath="/" />} />
                    <Route path="/features" element={<Navigate to="/#features" replace />} />
                    <Route path="/for-businesses" element={<ForBusinessesPage />} />
                    <Route path="/businesses" element={<ForBusinessesPage />} />
                    <Route path="/businesses/:categorySlug/:businessSlug" element={<BusinessDetailPage />} />
                    <Route path="/for-businesses/:categorySlug/:businessSlug" element={<BusinessDetailPage />} />
                    <Route path="/solutions/businesses" element={<Navigate to="/solutions/small-businesses" replace />} />
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
                    <Route path="/disclaimer" element={<PublicPage kind="disclaimer" />} />
                    <Route path="/templates/consulting" element={<TemplatePage routePath="/templates/consulting" />} />
                    <Route path="/templates/freelance" element={<TemplatePage routePath="/templates/freelance" />} />
                    <Route path="/template/freeluncer" element={<Navigate to="/templates/freelance" replace />} />
                    <Route path="/templates/law-firm" element={<TemplatePage routePath="/templates/law-firm" />} />
                    <Route path="/templates/small-businesses" element={<TemplatePage routePath="/templates/small-businesses" />} />
                    <Route path="/features/:slug" element={<FeatureDetailPage />} />
                    {SEO_ROUTES.map(path => <Route key={path} path={path} element={<SeoLandingPage routePath={path} />} />)}
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogRoute />} />
                    <Route path="/premium" element={<AppShell initialPage="premium" />} />
                    <Route path="*" element={<PublicPage kind="not-found" />} />
                </Routes>
            </HashRouteHandler>
            </React.Suspense>
        </Router>
    );
}

function BlogRoute() {
    const { slug } = useParams();
    return <BlogPage slug={slug} />;
}

export default App;
