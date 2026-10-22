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

            // If navigating to core app hash routes on the marketing domain, safely redirect to the live app
            if (h && (h.startsWith('#/dashboard') || h.startsWith('#/invoices') || h.startsWith('#/customers') || h.startsWith('#/expenses') || h.startsWith('#/documents') || h.startsWith('#/settings'))) {
                window.location.href = `https://app.invonxt.com/${h}`;
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
