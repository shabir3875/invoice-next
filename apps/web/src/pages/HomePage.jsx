import React from 'react';
import { Helmet } from 'react-helmet';
import MarketingPage from '@/features/marketing/MarketingPage';

export default function HomePage({ routePath = '/' }) {
  return (
    <>
      <Helmet>
        <title>InvoNxt — Professional Invoicing Made Simple</title>
        <meta
          name="description"
          content="Create professional invoices, manage estimates, track expenses and payments, and organize your business with InvoNxt."
        />
      </Helmet>
      <MarketingPage routePath={routePath} />
    </>
  );
}
