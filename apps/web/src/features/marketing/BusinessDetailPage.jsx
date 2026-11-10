import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import Seo from '../../components/Seo';
import MarketingHeader from './MarketingHeader';
import SiteFooter from './SiteFooter';
import { APP_ROUTES } from './data';
import {
  getSubcategoryBySlugs,
  INVONXT_FEATURE_MAP,
} from './businessCategoriesData';
import { BusinessCategoryCard, SmartBusinessImage } from './ForBusinessesPage';
import './for-businesses.css';

export default function BusinessDetailPage({
  categorySlug: categorySlugProp,
  businessSlug: businessSlugProp,
}) {
  const params = useParams();
  const categorySlug = categorySlugProp || params.categorySlug;
  const businessSlug = businessSlugProp || params.businessSlug;

  const match = getSubcategoryBySlugs(categorySlug, businessSlug);

  if (!match) {
    return (
      <div className="fb-page">
        <Helmet>
          <title>Business Category Not Found | Invoice Next</title>
          <meta
            name="description"
            content="Explore how Invoice Next supports businesses and professionals with invoicing, estimates, and expense management."
          />
        </Helmet>
        <MarketingHeader currentPath="/for-businesses" />
        <main className="fb-content-section">
          <div className="fb-empty-state">
            <h1 className="fb-empty-title">Business category not found</h1>
            <p className="fb-empty-desc">
              The requested business guide could not be found. Explore all business
              categories below.
            </p>
            <a href="/for-businesses" className="fb-empty-btn">
              <ArrowLeft size={16} aria-hidden="true" /> Back to Businesses
            </a>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  const { category, subcategory } = match;
  const SubIcon = subcategory.icon || category.icon;
  const pageTitle = `${subcategory.name} Invoicing & Expense Management | Invoice Next`;
  const pageDescription = `${subcategory.description} See how Invoice Next helps ${subcategory.name.toLowerCase()} professionals manage invoices, estimates, clients, and expenses.`;
  const canonicalUrl = `https://invonxt.com${subcategory.url}`;

  const challenges = subcategory.challenges || category.defaultChallenges;
  const benefits = subcategory.benefits || category.defaultBenefits;
  const guidance = subcategory.guidance || category.defaultGuidance;
  const featurePaths = subcategory.features || category.defaultFeatures;
  const peerSubcategories = category.subcategories
    .filter(item => item.id !== subcategory.id)
    .slice(0, 4);

  return (
    <div className="fb-page">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <Seo
        title={pageTitle}
        description={pageDescription}
        url={canonicalUrl}
        siteName="Invoice Next"
      />

      <MarketingHeader currentPath="/for-businesses" />

      <main>
        {/* Breadcrumb Navigation */}
        <nav className="bd-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <ChevronRight size={14} aria-hidden="true" />
          <a href="/for-businesses">Businesses</a>
          <ChevronRight size={14} aria-hidden="true" />
          <a href="/for-businesses">{category.name}</a>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="bd-breadcrumbs-current" aria-current="page">
            {subcategory.name}
          </span>
        </nav>

        {/* Hero Section */}
        <section className="fb-hero" aria-labelledby="bd-hero-heading">
          <div className="fb-hero-inner">
            <div>
              <div className="fb-eyebrow">
                <span className="fb-eyebrow-dot" aria-hidden="true" />
                <span>
                  {category.name} · {subcategory.name}
                </span>
              </div>

              <h1 id="bd-hero-heading" className="fb-hero-title">
                Invoicing &amp; Expense Management for{' '}
                <span>{subcategory.name}</span>
              </h1>

              <p className="fb-hero-desc">{subcategory.description}</p>

              <ul className="fb-hero-benefits" aria-label="Key workflow highlights">
                <li className="fb-hero-benefit-item">
                  <span className="fb-hero-benefit-icon" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Professional Invoices &amp; Quotes</span>
                </li>
                <li className="fb-hero-benefit-item">
                  <span className="fb-hero-benefit-icon" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Client &amp; Expense Records</span>
                </li>
                <li className="fb-hero-benefit-item">
                  <span className="fb-hero-benefit-icon" aria-hidden="true">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Clear Payment Tracking</span>
                </li>
              </ul>

              <div className="fb-hero-actions">
                <a href={APP_ROUTES.signup} className="fb-btn-primary">
                  Get Started Free <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a href="/for-businesses" className="fb-btn-secondary">
                  <ArrowLeft size={16} aria-hidden="true" /> All Business Categories
                </a>
              </div>
            </div>

            <div className="fb-hero-media">
              <div className="fb-hero-image-frame">
                <SmartBusinessImage
                  src={subcategory.image}
                  alt={subcategory.imageAlt}
                  width={1000}
                  height={680}
                  eager
                  className="fb-hero-image"
                  FallbackIcon={SubIcon}
                />
                <div className="fb-hero-caption-card">
                  <span className="fb-hero-caption-badge" aria-hidden="true">
                    <SubIcon size={20} />
                  </span>
                  <div className="fb-hero-caption-text">
                    <strong>Tailored for {subcategory.name} Workflows</strong>
                    <span>Streamlined quotes, invoices, expenses &amp; statements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Operational & Invoicing Challenges */}
        <section className="bd-section" aria-labelledby="bd-challenges-heading">
          <div className="bd-section-header">
            <span className="bd-section-eyebrow">Operational Challenges</span>
            <h2 id="bd-challenges-heading" className="bd-section-title">
              Common Billing Challenges for {subcategory.name}
            </h2>
            <p className="bd-section-desc">
              Running a {subcategory.name.toLowerCase()} operation requires keeping client
              work, billing details, and operating costs organized without spending hours
              on manual paperwork.
            </p>
          </div>

          <div className="bd-cards-grid-3">
            {challenges.map((challenge, index) => (
              <article key={challenge} className="bd-info-card">
                <span className="bd-info-card-num">0{index + 1}</span>
                <h3>{challenge}</h3>
                <p>
                  Invoice Next replaces disconnected notes and spreadsheets with structured
                  customer, item, invoice, and payment records.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How Invoice Next Helps */}
        <section
          className="bd-section"
          style={{ paddingTop: 0 }}
          aria-labelledby="bd-helps-heading"
        >
          <div className="bd-section-header">
            <span className="bd-section-eyebrow">How Invoice Next Helps</span>
            <h2 id="bd-helps-heading" className="bd-section-title">
              Built for Everyday {subcategory.name} Workflows
            </h2>
            <p className="bd-section-desc">
              Move smoothly from initial client estimate to final payment and expense
              reconciliation in one unified workspace.
            </p>
          </div>

          <div className="bd-cards-grid-2">
            {benefits.map(benefit => (
              <article key={benefit} className="bd-info-card">
                <span className="bd-info-card-num" aria-hidden="true">
                  <ShieldCheck size={18} />
                </span>
                <h3>{benefit}</h3>
                <p>
                  Access your business records from desktop, tablet, or mobile so you can
                  prepare documents and review balances wherever work happens.
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Practical Business Guidance */}
        <section
          className="bd-section"
          style={{ paddingTop: 0 }}
          aria-labelledby="bd-guidance-heading"
        >
          <div className="bd-guidance-box">
            <span className="bd-section-eyebrow">Practical Business Guidance</span>
            <h2 id="bd-guidance-heading" className="bd-section-title">
              Best Practices for {subcategory.name} Invoicing &amp; Records
            </h2>
            <ul className="bd-guidance-list">
              {guidance.map(tip => (
                <li key={tip} className="bd-guidance-item">
                  <span className="bd-guidance-check" aria-hidden="true">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Relevant Invoice Next Features */}
        <section
          className="bd-section"
          style={{ paddingTop: 0 }}
          aria-labelledby="bd-features-heading"
        >
          <div className="bd-section-header">
            <span className="bd-section-eyebrow">Relevant Features</span>
            <h2 id="bd-features-heading" className="bd-section-title">
              Invoice Next Tools for {subcategory.name}
            </h2>
          </div>

          <div className="bd-cards-grid-2">
            {featurePaths.map(path => {
              const feature = INVONXT_FEATURE_MAP[path];
              if (!feature) return null;
              return (
                <a key={path} href={path} className="bd-feature-link-card">
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.summary}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="fb-sub-arrow"
                    style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 4 }}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        </section>

        {/* Related Businesses in Same Category */}
        {peerSubcategories.length > 0 && (
          <section
            className="bd-section"
            style={{ paddingTop: 0 }}
            aria-labelledby="bd-related-heading"
          >
            <div className="bd-section-header">
              <span className="bd-section-eyebrow">Explore Related Businesses</span>
              <h2 id="bd-related-heading" className="bd-section-title">
                More in {category.name}
              </h2>
            </div>

            <div className="fb-sub-grid">
              {peerSubcategories.map(peer => (
                <BusinessCategoryCard
                  key={peer.id}
                  subcategory={peer}
                  CategoryIcon={category.icon}
                />
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="fb-bottom-cta" aria-labelledby="bd-cta-heading">
          <div className="fb-bottom-cta-inner">
            <h2 id="bd-cta-heading" className="fb-bottom-cta-title">
              Start Managing Your {subcategory.name} Finances with Invoice Next
            </h2>
            <p className="fb-bottom-cta-desc">
              Create professional invoices, track expenses, organize clients, and keep
              every balance clear in one modern platform.
            </p>
            <div className="fb-bottom-cta-actions">
              <a href={APP_ROUTES.signup} className="fb-btn-primary">
                Get Started Free <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="/for-businesses" className="fb-btn-secondary">
                Explore All Business Categories
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
