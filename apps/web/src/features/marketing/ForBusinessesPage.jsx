import React, { useId, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import Seo from '../../components/Seo';
import MarketingHeader from './MarketingHeader';
import SiteFooter from './SiteFooter';
import { APP_ROUTES } from './data';
import { BUSINESS_CATEGORIES } from './businessCategoriesData';
import './for-businesses.css';

const PAGE_TITLE = 'For Businesses | Invoice Templates & Business Guidance | Invonxt';
const PAGE_DESCRIPTION =
  'Explore professional invoice templates, invoicing guidance and business tools for freelancers, trades, legal firms, consultants, healthcare providers and small businesses.';
const CANONICAL_URL = 'https://invonxt.com/for-businesses';

function Schema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${CANONICAL_URL}#webpage`,
        url: CANONICAL_URL,
        name: 'Solutions for Every Business — Invonxt',
        description: PAGE_DESCRIPTION,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://invonxt.com/#website',
          name: 'Invoice Next',
          url: 'https://invonxt.com/',
        },
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://invonxt.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'For Businesses',
            item: CANONICAL_URL,
          },
        ],
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
}

export default function ForBusinessesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState(() => new Set(['trades']));
  const searchInputId = useId();

  const query = searchQuery.trim().toLowerCase();

  // Filter categories and their subcategories based on the search query
  const filteredCategories = useMemo(() => {
    if (!query) {
      return BUSINESS_CATEGORIES.map(category => ({
        ...category,
        matchingSubcategories: category.subcategories,
        isDirectMatch: false,
      }));
    }

    return BUSINESS_CATEGORIES.map(category => {
      const categoryNameMatch = category.name.toLowerCase().includes(query);
      const categoryDescMatch = category.description.toLowerCase().includes(query);

      const matchingSubcategories = category.subcategories.filter(sub => {
        return (
          sub.name.toLowerCase().includes(query) ||
          sub.description.toLowerCase().includes(query) ||
          categoryNameMatch
        );
      });

      const matches = categoryNameMatch || categoryDescMatch || matchingSubcategories.length > 0;

      return {
        ...category,
        matchingSubcategories: matches ? (matchingSubcategories.length ? matchingSubcategories : category.subcategories) : [],
        isDirectMatch: categoryNameMatch || categoryDescMatch,
        hasMatch: matches,
      };
    }).filter(cat => cat.hasMatch);
  }, [query]);

  // Total matching subcategories count
  const totalSubcategories = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.matchingSubcategories.length, 0);
  }, [filteredCategories]);

  // Toggle card expansion
  const toggleCategory = id => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="fb-page">
      <Helmet>
        <title>For Businesses | Invoice Templates & Business Guidance | Invonxt</title>
        <meta name="description" content="Explore professional invoice templates, invoicing guidance and business tools for freelancers, trades, legal firms, consultants, healthcare providers and small businesses." />
      </Helmet>

      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={CANONICAL_URL}
        siteName="Invoice Next"
      />

      <Schema />

      <MarketingHeader currentPath="/for-businesses" />

      <main>
        {/* Hero Section */}
        <header className="fb-hero">
          <div className="fb-hero-container">
            <div className="fb-eyebrow">
              <span className="fb-eyebrow-dot" aria-hidden="true" />
              <span>Solutions for Every Business</span>
            </div>

            <h1 className="fb-title">
              Solutions for <span>Every Business</span>
            </h1>

            <p className="fb-description">
              Discover professional invoice templates, practical business guidance, and invoicing tools tailored to your industry.
            </p>

            <div className="fb-highlights">
              <span className="fb-highlight-item">
                <CheckCircle2 size={16} aria-hidden="true" /> 7 Primary Industries
              </span>
              <span className="fb-highlight-item">
                <CheckCircle2 size={16} aria-hidden="true" /> Tailored Invoice Formats
              </span>
              <span className="fb-highlight-item">
                <CheckCircle2 size={16} aria-hidden="true" /> Streamlined Client Billing
              </span>
            </div>

            {/* Search Bar */}
            <div className="fb-search-wrap">
              <div className="fb-search-inner">
                <Search className="fb-search-icon" aria-hidden="true" />
                <label htmlFor={searchInputId} className="sr-only">
                  Search for your business or profession
                </label>
                <input
                  id={searchInputId}
                  type="search"
                  className="fb-search-input"
                  placeholder="Search for your business or profession..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoComplete="off"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="fb-search-clear"
                    onClick={handleClearSearch}
                    aria-label="Clear search input"
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                )}
              </div>

              <div className="fb-search-meta" aria-live="polite">
                {query ? (
                  <span>
                    Found {filteredCategories.length} {filteredCategories.length === 1 ? 'industry' : 'industries'} ({totalSubcategories} {totalSubcategories === 1 ? 'profession' : 'professions'})
                  </span>
                ) : (
                  <span>Explore all 7 business categories and specialized professions</span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Categories Section */}
        <section className="fb-content-section" aria-label="Business categories">
          {filteredCategories.length > 0 ? (
            <div className="fb-grid">
              {filteredCategories.map(category => {
                const IconComponent = category.icon;
                // Automatically expand matching categories when searching
                const isExpanded = query ? true : expandedIds.has(category.id);
                const subcategoriesToShow = category.matchingSubcategories;

                return (
                  <article
                    key={category.id}
                    className={`fb-card accent-${category.accent} ${isExpanded ? 'is-expanded' : ''}`}
                  >
                    <button
                      type="button"
                      className="fb-card-trigger"
                      onClick={() => toggleCategory(category.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`subcategories-${category.id}`}
                    >
                      <div className="fb-card-top">
                        <span className={`fb-card-icon-wrap fb-icon-${category.accent}`}>
                          <IconComponent size={24} aria-hidden="true" />
                        </span>
                        <span className="fb-badge-count">
                          {subcategoriesToShow.length} {subcategoriesToShow.length === 1 ? 'Profession' : 'Professions'}
                        </span>
                      </div>

                      <div className="fb-card-body">
                        <div className="fb-card-title">
                          <span>{category.name}</span>
                          <span className="fb-chevron" aria-hidden="true">
                            <ChevronDown size={18} />
                          </span>
                        </div>
                        <p className="fb-card-desc">{category.description}</p>
                      </div>

                      <div className="fb-card-footer">
                        <span>{isExpanded ? 'Hide professions' : 'View professions'}</span>
                        <span className="text-xs font-semibold text-slate-400">
                          {isExpanded ? 'Click to collapse' : 'Click to expand'}
                        </span>
                      </div>
                    </button>

                    <div
                      id={`subcategories-${category.id}`}
                      className="fb-drawer"
                      role="region"
                      aria-label={`${category.name} professions`}
                      hidden={!isExpanded}
                    >
                      <div className="fb-drawer-heading">
                        <Layers size={13} aria-hidden="true" />
                        <span>Specialized {category.name} Professions</span>
                      </div>

                      <div className="fb-sub-list">
                        {subcategoriesToShow.map(sub => (
                          <div
                            key={sub.id}
                            className="fb-sub-card"
                          >
                            <div className="fb-sub-head">
                              <h3 className="fb-sub-title">{sub.name}</h3>
                              <ArrowRight size={14} className="fb-sub-arrow" aria-hidden="true" />
                            </div>
                            <p className="fb-sub-desc">{sub.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="fb-empty-state" role="status">
              <span className="fb-empty-icon" aria-hidden="true">
                <Search size={26} />
              </span>
              <h2 className="fb-empty-title">No businesses or professions found</h2>
              <p className="fb-empty-desc">
                We couldn&apos;t find any results matching &ldquo;<strong>{searchQuery}</strong>&rdquo;. Try searching for another profession or clear your search to explore all categories.
              </p>
              <button
                type="button"
                className="fb-empty-btn"
                onClick={handleClearSearch}
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* Bottom CTA Section */}
        <section className="fb-bottom-cta">
          <div className="fb-bottom-cta-inner">
            <h2 className="fb-bottom-cta-title">
              Ready to Simplify Invoicing for Your Business?
            </h2>
            <p className="fb-bottom-cta-desc">
              Whether you are an independent contractor, growing medical clinic, or creative studio, Invonxt delivers the invoice tools and records your business needs.
            </p>
            <div className="fb-bottom-cta-actions">
              <a href={APP_ROUTES.signup} className="fb-cta-btn-primary">
                Get Started Free <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={APP_ROUTES.login} className="fb-cta-btn-secondary">
                Login to Your Workspace
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
