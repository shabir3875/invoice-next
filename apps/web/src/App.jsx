import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { AppShell } from './features/app-components';

function HashRouteHandler({ children }) {
    const [hash, setHash] = React.useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));

    React.useEffect(() => {
        const handleHashChange = () => {
            const h = window.location.hash;
            setHash(h);

            // If navigating to core app hash routes, safely redirect to local or production SaaS app
            if (typeof window !== 'undefined') {
                const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
                const isLive = window.location.hostname === 'invonxt.com' || window.location.hostname === 'www.invonxt.com';
                if (isLive || isLocal) {
                    const base = isLocal ? (import.meta.env.VITE_APP_URL || 'http://localhost:5173') : 'https://app.invonxt.com';
                    if (h && (h.startsWith('#/dashboard') || h.startsWith('#/invoices') || h.startsWith('#/customers') || h.startsWith('#/expenses') || h.startsWith('#/documents') || h.startsWith('#/settings'))) {
                        window.location.href = `${base}/${h}`;
                    }
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
                    <Route path="/about" element={<HomePage routePath="/about" />} />
                    <Route path="/contact" element={<HomePage routePath="/contact" />} />
                    <Route path="/privacy" element={<HomePage routePath="/privacy" />} />
                    <Route path="/terms" element={<HomePage routePath="/terms" />} />
                    <Route path="/premium" element={<AppShell initialPage="premium" />} />
                </Routes>
            </HashRouteHandler>
        </Router>
    );
}

export default App;
