import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { PremiumPage } from './PremiumPage';

/**
 * AppShell Component
 * Full application layout shell uniting the collapsible Sidebar and content area,
 * supporting client-side routing, plan selection, and state persistence.
 */
export function AppShell({ initialPage = 'premium' }) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [selectedPlan, setSelectedPlan] = useState(() => {
    try {
      return localStorage.getItem('invoxa.subscription.selectedPlan') || 'two-year';
    } catch {
      return 'two-year';
    }
  });

  // Sync with hash if hash changes
  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash;
      if (hash.includes('premium')) setCurrentPage('premium');
      else if (hash.includes('dashboard')) setCurrentPage('dashboard');
      else if (hash.includes('settings')) setCurrentPage('settings');
    };

    window.addEventListener('hashchange', updateFromHash);
    return () => window.removeEventListener('hashchange', updateFromHash);
  }, []);

  const handleChoosePlan = (planId) => {
    try {
      localStorage.setItem('invoxa.subscription.selectedPlan', planId);
    } catch (e) {
      console.error('Failed to save selected plan', e);
    }
    setSelectedPlan(planId);
    setCurrentPage('settings');
  };

  const handleBack = () => {
    setCurrentPage('dashboard');
  };

  return (
    <div className="app-shell min-h-screen bg-slate-50 flex flex-row">
      <Sidebar
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onLogout={() => console.log('Logged out')}
      />
      <section className="app-content min-w-0 flex-1 overflow-x-hidden">
        {currentPage === 'premium' ? (
          <PremiumPage onBack={handleBack} onChoosePlan={handleChoosePlan} />
        ) : (
          <main className="p-6 md:p-8 max-w-4xl">
            <h1 className="text-2xl font-black text-slate-900 capitalize">{currentPage}</h1>
            <p className="mt-2 text-slate-600">
              Active Subscription Tier:{' '}
              <span className="font-bold text-[#00856f] uppercase">{selectedPlan}</span>
            </p>
            <div className="mt-6 flex gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage('premium')}
                className="inline-flex items-center gap-2 rounded-lg bg-[#00856f] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#00705e]"
              >
                Change Subscription Plan
              </button>
            </div>
          </main>
        )}
      </section>
    </div>
  );
}

export default AppShell;
