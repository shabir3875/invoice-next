import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<HomePage />} />
                <Route path="/contact" element={<HomePage />} />
                <Route path="/privacy" element={<HomePage />} />
                <Route path="/terms" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
