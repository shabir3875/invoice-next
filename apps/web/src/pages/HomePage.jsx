import React from 'react';
import { Helmet } from 'react-helmet';
import MarketingPage from '@/features/marketing/MarketingPage';

export default function HomePage({ routePath = '/' }) {
  return (
    <>
      <Helmet>
        <title>Invonxt | Professional Invoicing Software for Freelancers &amp; Businesses</title>
        <meta
          name="description"
          content="Create professional invoices with customizable templates, manage estimates, track payments, organize expenses, and simplify business billing with Invonxt."
        />
      </Helmet>
      <MarketingPage routePath={routePath} />
    </>
  );
}
