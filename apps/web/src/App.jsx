import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import { AppShell } from './features/app-components';

function HashRouteHandler({ children }) {
    const [hash, setHash] = React.useState(() => (typeof window !== 'undefined' ? window.location.hash : ''));

    React.useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    if (hash === '#/premium' || hash.startsWith('#/premium')) {
        return <AppShell initialPage="premium" />;
    }

    if (hash === '#/dashboard' || hash.startsWith('#/app')) {
        return <AppShell initialPage="dashboard" />;
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
                    <Route path="/app" element={<AppShell initialPage="dashboard" />} />
                    <Route path="/app/premium" element={<AppShell initialPage="premium" />} />
                </Routes>
            </HashRouteHandler>
        </Router>
    );
}

export default App;
