import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage routePath="/" />} />
                <Route path="/about" element={<HomePage routePath="/about" />} />
                <Route path="/contact" element={<HomePage routePath="/contact" />} />
                <Route path="/privacy" element={<HomePage routePath="/privacy" />} />
                <Route path="/terms" element={<HomePage routePath="/terms" />} />
            </Routes>
        </Router>
    );
}

export default App;
