import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { PremiumPage } from './PremiumPage';

/**
 * AppShell Component
 * Full application layout shell uniting the collapsible Sidebar and content area,
 * supporting client-side routing, plan selection, and state persistence.
 */
export function AppShell({ initialPage = 'premium' }) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handleChoosePlan = (planId) => {
    try {
      localStorage.setItem('invoxa.subscription.selectedPlan', planId);
    } catch (e) {
      console.error('Failed to save selected plan', e);
    }
    // Direct user to real subscription checkout on live application
    if (typeof window !== 'undefined') {
      window.location.href = 'https://app.invonxt.com/#/settings';
    }
  };

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = 'https://app.invonxt.com/#/dashboard';
      }
    }
  };

  const handleSidebarNavigate = (page) => {
    if (page === 'premium') {
      setCurrentPage('premium');
    } else if (typeof window !== 'undefined') {
      window.location.href = `https://app.invonxt.com/#/${page}`;
    }
  };

  return (
    <div className="app-shell min-h-screen bg-slate-50 flex flex-row">
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleSidebarNavigate}
        onLogout={() => {
          if (typeof window !== 'undefined') {
            window.location.href = 'https://app.invonxt.com/';
          }
        }}
      />
      <section className="app-content min-w-0 flex-1 overflow-x-hidden">
        <PremiumPage onBack={handleBack} onChoosePlan={handleChoosePlan} />
      </section>
    </div>
  );
}

export default AppShell;
