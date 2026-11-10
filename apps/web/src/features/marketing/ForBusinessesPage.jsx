import React, { useId, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronsDownUp,
  ChevronsUpDown,
  Search,
  ShieldCheck,
  X,
} from 'lucide-react';
import Seo from '../../components/Seo';
import MarketingHeader from './MarketingHeader';
import SiteFooter from './SiteFooter';
import { APP_ROUTES } from './data';
import {
  BUSINESS_CATEGORIES,
  BUSINESS_HERO_DATA,
} from './businessCategoriesData';
import './for-businesses.css';

const PAGE_TITLE = 'Businesses | Invoicing & Expense Management by Invoice Next';
const PAGE_DESCRIPTION =
  'Explore how Invoice Next supports freelancers, legal firms, contractors, consultants, healthcare professionals, and small businesses with invoicing and expense management.';
const CANONICAL_URL = 'https://invonxt.com/for-businesses';

function Schema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${CANONICAL_URL}#webpage`,
        url: CANONICAL_URL,
        name: PAGE_TITLE,
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
            name: 'Businesses',
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

/**
 * Resilient image component with graceful fallback to prevent broken images or layout shift.
 */
export function SmartBusinessImage({
  src,
  alt,
  className = '',
  width = 640,
  height = 400,
  eager = false,
  FallbackIcon,
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className={`fb-img-fallback ${className}`} role="img" aria-label={alt}>
        {FallbackIcon ? <FallbackIcon size={28} aria-hidden="true" /> : null}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

/**
 * Reusable Hero Section for the Businesses Page.
 */
export function BusinessHero() {
  const totalBusinesses = BUSINESS_CATEGORIES.reduce(
    (sum, cat) => sum + cat.subcategories.length,
    0
  );

  return (
    <section className="fb-hero" aria-labelledby="fb-hero-heading">
      <div className="fb-hero-inner">
        <div>
          <div className="fb-eyebrow">
            <span className="fb-eyebrow-dot" aria-hidden="true" />
            <span>{BUSINESS_HERO_DATA.eyebrow}</span>
          </div>

          <h1 id="fb-hero-heading" className="fb-hero-title">
            Explore <span>Business Categories</span>
          </h1>

          <p className="fb-hero-desc">{BUSINESS_HERO_DATA.description}</p>

          <ul className="fb-hero-benefits" aria-label="Key platform benefits">
            {BUSINESS_HERO_DATA.benefits.map(benefit => (
              <li key={benefit} className="fb-hero-benefit-item">
                <span className="fb-hero-benefit-icon" aria-hidden="true">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="fb-hero-actions">
            <a href={APP_ROUTES.signup} className="fb-btn-primary">
              Get Started Free <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#business-categories-directory" className="fb-btn-secondary">
              Browse Categories
            </a>
          </div>
        </div>

        <div className="fb-hero-media">
          <div className="fb-hero-image-frame">
            <SmartBusinessImage
              src={BUSINESS_HERO_DATA.image}
              alt={BUSINESS_HERO_DATA.imageAlt}
              width={1200}
              height={825}
              eager
              className="fb-hero-image"
            />
            <div className="fb-hero-caption-card">
              <span className="fb-hero-caption-badge" aria-hidden="true">
                <ShieldCheck size={20} />
              </span>
              <div className="fb-hero-caption-text">
                <strong>Built for {totalBusinesses}+ Industries &amp; Professions</strong>
                <span>Invoices, estimates, expenses, client records &amp; statements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Search & Accordion Controls Toolbar.
 */
export function BusinessSearch({
  searchQuery,
  onSearchChange,
  onClearSearch,
  onExpandAll,
  onCollapseAll,
  allExpanded,
  allCollapsed,
  categoryCount,
  businessCount,
  isSearching,
}) {
  const searchInputId = useId();

  return (
    <section
      id="business-categories-directory"
      className="fb-search-section"
      aria-label="Search and filter business categories"
    >
      <div className="fb-toolbar">
        <div className="fb-search-box">
          <Search className="fb-search-icon" aria-hidden="true" />
          <label htmlFor={searchInputId} className="sr-only">
            Search your business type
          </label>
          <input
            id={searchInputId}
            type="search"
            className="fb-search-input"
            placeholder="Search your business type (e.g., mechanic, lawyer, consultant...)"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            autoComplete="off"
          />
          {searchQuery && (
            <button
              type="button"
              className="fb-search-clear"
              onClick={onClearSearch}
              aria-label="Clear search query"
            >
              <X size={14} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="fb-toolbar-actions">
          <span className="fb-toolbar-meta" aria-live="polite">
            {isSearching
              ? `${categoryCount} ${categoryCount === 1 ? 'category' : 'categories'} · ${businessCount} ${businessCount === 1 ? 'business' : 'businesses'}`
              : `${categoryCount} categories · ${businessCount} business types`}
          </span>

          <div className="fb-toolbar-btns" role="group" aria-label="Accordion controls">
            <button
              type="button"
              className={`fb-control-btn ${allExpanded ? 'is-active' : ''}`}
              onClick={onExpandAll}
              aria-label="Expand all business categories"
            >
              <ChevronsUpDown size={15} aria-hidden="true" />
              <span>Expand All</span>
            </button>
            <button
              type="button"
              className={`fb-control-btn ${allCollapsed ? 'is-active' : ''}`}
              onClick={onCollapseAll}
              aria-label="Collapse all business categories"
            >
              <ChevronsDownUp size={15} aria-hidden="true" />
              <span>Collapse All</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Subcategory Card with realistic photography and clear clickable target.
 */
export function BusinessCategoryCard({ subcategory, CategoryIcon }) {
  const SubIcon = subcategory.icon || CategoryIcon;

  return (
    <a href={subcategory.url} className="fb-sub-card">
      <div className="fb-sub-image-wrap">
        <SmartBusinessImage
          src={subcategory.image}
          alt={subcategory.imageAlt || `${subcategory.name} workplace`}
          width={640}
          height={400}
          className="fb-sub-image"
          FallbackIcon={SubIcon}
        />
        {SubIcon && (
          <span className="fb-sub-icon-pill" aria-hidden="true">
            <SubIcon size={16} strokeWidth={2.2} />
          </span>
        )}
      </div>

      <div className="fb-sub-body">
        <h3 className="fb-sub-title">{subcategory.name}</h3>
        <p className="fb-sub-desc">{subcategory.description}</p>
        <div className="fb-sub-footer">
          <span>Explore business workflow</span>
          <ArrowRight size={14} className="fb-sub-arrow" aria-hidden="true" />
        </div>
      </div>
    </a>
  );
}

/**
 * Reusable Expandable Category Accordion Component.
 */
export function CategoryAccordion({
  categories,
  expandedIds,
  onToggleCategory,
  isSearching,
}) {
  return (
    <div className="fb-accordion-stack">
      {categories.map(category => {
        const CategoryIcon = category.icon;
        const isExpanded = isSearching ? true : expandedIds.has(category.id);
        const subcategoriesToShow = category.matchingSubcategories || category.subcategories;

        return (
          <article
            key={category.id}
            className={`fb-acc-card ${isExpanded ? 'is-expanded' : ''}`}
          >
            <button
              type="button"
              className="fb-acc-header"
              onClick={() => onToggleCategory(category.id)}
              aria-expanded={isExpanded}
              aria-controls={`category-panel-${category.id}`}
            >
              <div className="fb-acc-header-main">
                <div className="fb-acc-thumb-wrap">
                  <SmartBusinessImage
                    src={category.thumbnail}
                    alt={category.thumbnailAlt || `${category.name} category`}
                    width={160}
                    height={120}
                    className="fb-acc-thumb"
                    FallbackIcon={CategoryIcon}
                  />
                </div>

                <span className="fb-acc-icon-badge" aria-hidden="true">
                  <CategoryIcon size={20} strokeWidth={2.2} />
                </span>

                <div className="fb-acc-text">
                  <div className="fb-acc-title-row">
                    <h2 className="fb-acc-title">{category.name}</h2>
                    <span className="fb-acc-count">
                      {subcategoriesToShow.length}{' '}
                      {subcategoriesToShow.length === 1 ? 'Business' : 'Businesses'}
                    </span>
                  </div>
                  <p className="fb-acc-desc">{category.description}</p>
                </div>
              </div>

              <div className="fb-acc-right">
                <span className="fb-acc-toggle-label">
                  {isExpanded ? 'Hide businesses' : 'View businesses'}
                </span>
                <span className="fb-acc-chevron" aria-hidden="true">
                  <ChevronDown size={19} />
                </span>
              </div>
            </button>

            <div
              id={`category-panel-${category.id}`}
              className="fb-acc-drawer"
              role="region"
              aria-label={`${category.name} business types`}
              hidden={!isExpanded}
            >
              <div className="fb-sub-grid">
                {subcategoriesToShow.map(sub => (
                  <BusinessCategoryCard
                    key={sub.id}
                    subcategory={sub}
                    CategoryIcon={CategoryIcon}
                  />
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function ForBusinessesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  // Expand the Trades, Business, Health, and Services categories by default to introduce the layout
  const [expandedIds, setExpandedIds] = useState(
    () => new Set(['trades', 'business', 'health', 'services'])
  );

  const query = searchQuery.trim().toLowerCase();

  // Filter categories and subcategories based on search query
  const filteredCategories = useMemo(() => {
    if (!query) {
      return BUSINESS_CATEGORIES.map(category => ({
        ...category,
        matchingSubcategories: category.subcategories,
      }));
    }

    return BUSINESS_CATEGORIES.map(category => {
      const categoryNameMatch = category.name.toLowerCase().includes(query);
      const categoryDescMatch = category.description.toLowerCase().includes(query);

      const matchingSubcategories = category.subcategories.filter(
        sub =>
          sub.name.toLowerCase().includes(query) ||
          sub.description.toLowerCase().includes(query) ||
          categoryNameMatch
      );

      const hasMatch =
        categoryNameMatch || categoryDescMatch || matchingSubcategories.length > 0;

      return {
        ...category,
        matchingSubcategories: hasMatch
          ? matchingSubcategories.length > 0
            ? matchingSubcategories
            : category.subcategories
          : [],
        hasMatch,
      };
    }).filter(category => category.hasMatch);
  }, [query]);

  const totalMatchingBusinesses = useMemo(
    () =>
      filteredCategories.reduce(
        (sum, cat) => sum + cat.matchingSubcategories.length,
        0
      ),
    [filteredCategories]
  );

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

  const handleExpandAll = () => {
    setExpandedIds(new Set(BUSINESS_CATEGORIES.map(cat => cat.id)));
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const allExpanded =
    !query && expandedIds.size === BUSINESS_CATEGORIES.length;
  const allCollapsed = !query && expandedIds.size === 0;

  return (
    <div className="fb-page">
      <Helmet>
        <title>Businesses | Invoicing &amp; Expense Management by Invoice Next</title>
        <meta
          name="description"
          content="Explore how Invoice Next supports freelancers, legal firms, contractors, consultants, healthcare professionals, and small businesses with invoicing and expense management."
        />
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
        <BusinessHero />

        <BusinessSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={handleClearSearch}
          onExpandAll={handleExpandAll}
          onCollapseAll={handleCollapseAll}
          allExpanded={allExpanded}
          allCollapsed={allCollapsed}
          categoryCount={filteredCategories.length}
          businessCount={totalMatchingBusinesses}
          isSearching={Boolean(query)}
        />

        <section
          className="fb-content-section"
          aria-label="Business categories directory"
        >
          {filteredCategories.length > 0 ? (
            <CategoryAccordion
              categories={filteredCategories}
              expandedIds={expandedIds}
              onToggleCategory={toggleCategory}
              isSearching={Boolean(query)}
            />
          ) : (
            <div className="fb-empty-state" role="status">
              <span className="fb-empty-icon" aria-hidden="true">
                <Search size={26} />
              </span>
              <h2 className="fb-empty-title">No matching business types found</h2>
              <p className="fb-empty-desc">
                We couldn&apos;t find any categories or professions matching &ldquo;
                <strong>{searchQuery}</strong>&rdquo;. Try searching for another term
                (such as mechanic, attorney, clinic, or freelancer) or reset your search.
              </p>
              <button
                type="button"
                className="fb-empty-btn"
                onClick={handleClearSearch}
              >
                Reset Search
              </button>
            </div>
          )}
        </section>

        <section className="fb-bottom-cta" aria-labelledby="fb-cta-heading">
          <div className="fb-bottom-cta-inner">
            <h2 id="fb-cta-heading" className="fb-bottom-cta-title">
              Ready to Simplify Invoicing &amp; Expenses for Your Business?
            </h2>
            <p className="fb-bottom-cta-desc">
              Create professional invoices, convert estimates, organize client and
              supplier records, and track payments from one reliable workspace.
            </p>
            <div className="fb-bottom-cta-actions">
              <a href={APP_ROUTES.signup} className="fb-btn-primary">
                Get Started Free <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={APP_ROUTES.login} className="fb-btn-secondary">
                Log In to Invoice Next
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
