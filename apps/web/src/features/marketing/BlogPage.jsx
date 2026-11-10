import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  Search,
  Sparkles,
  Tag,
  X,
} from 'lucide-react';
import Seo from '../../components/Seo';
import MarketingHeader from './MarketingHeader';
import SiteFooter from './SiteFooter';
import { APP_ROUTES } from './data';
import { ARTICLES, BLOG_CATEGORIES } from './blog-data';
import './blog-page.css';

const QUICK_TOOL_LINKS = [
  ['Fast Online Invoicing', '/features/lightning-fast-invoicing'],
  ['Freelance Invoice Templates', '/templates/freelance'],
  ['Explore 200+ Business Industries', '/for-businesses'],
  ['Estimates to Invoices Workflow', '/features/estimates-to-invoices'],
  ['Inventory & Stock Tracking', '/features/inventory-tracking'],
  ['Sales & Financial Reports', '/features/sales-stock-reports'],
];

export default function BlogPage({ slug }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const articleEntries = useMemo(() => Object.entries(ARTICLES), []);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return articleEntries.filter(([, item]) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      const searchable = [
        item.title,
        item.description,
        item.category,
        ...(item.keywords || []),
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(query);
    });
  }, [articleEntries, selectedCategory, searchQuery]);

  if (!slug) {
    const title = 'Invoicing Guides, Templates & Business Finance Blog | Invoice Next';
    const description =
      'Expert guides on how to create an invoice, choose payment terms, convert estimates to invoices, track business expenses, manage inventory, and get paid faster.';
    const url = 'https://invonxt.com/blog';
    const featuredEntry =
      articleEntries.find(([, item]) => item.featured) || articleEntries[0];
    const [featuredSlug, featuredArticle] = featuredEntry;

    const blogHubSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Blog',
          '@id': 'https://invonxt.com/blog#blog',
          url,
          name: title,
          description,
          publisher: {
            '@type': 'Organization',
            name: 'Invoice Next',
            url: 'https://invonxt.com/',
          },
          blogPost: articleEntries.map(([entrySlug, entry]) => ({
            '@type': 'BlogPosting',
            headline: entry.title,
            description: entry.description,
            url: `https://invonxt.com/blog/${entrySlug}`,
            datePublished: entry.publishedDate || '2026-11-08',
            dateModified: entry.updatedDate || '2026-11-10',
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://invonxt.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: url },
          ],
        },
      ],
    };

    return (
      <div className="blog-page">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <script type="application/ld+json">{JSON.stringify(blogHubSchema)}</script>
        </Helmet>
        <Seo
          title={title}
          description={description}
          url={url}
          siteName="Invoice Next"
        />
        <MarketingHeader currentPath="/blog" />

        <main>
          {/* Editorial Hero */}
          <section className="blog-hero">
            <div className="blog-hero__container">
              <span className="blog-hero__eyebrow">
                <BookOpen size={14} />
                Invoice Next Editorial &amp; Resource Hub
              </span>
              <h1 className="blog-hero__title">
                Invoicing Guides, Templates &amp; Business Finance Insights
              </h1>
              <p className="blog-hero__subtitle">
                Practical, step-by-step guides to help freelancers, contractors, consultants,
                and small businesses create professional invoices, convert quotes, track
                deductible expenses, and maintain healthy cash flow.
              </p>

              {/* Search & Category Filter */}
              <div className="blog-controls">
                <div className="blog-search">
                  <Search size={18} className="blog-search__icon" />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search guides by topic or keyword (e.g., Net 30, receipt, estimate, freelance)..."
                    aria-label="Search invoicing guides"
                    className="blog-search__input"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      aria-label="Clear search"
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div
                  className="blog-categories"
                  role="tablist"
                  aria-label="Filter articles by category"
                >
                  {['All', ...BLOG_CATEGORIES].map(category => {
                    const count =
                      category === 'All'
                        ? articleEntries.length
                        : articleEntries.filter(([, a]) => a.category === category).length;
                    const active = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        onClick={() => setSelectedCategory(category)}
                        className={`blog-category-pill ${active ? 'is-active' : ''}`}
                      >
                        <span>{category === 'All' ? 'All Guides' : category}</span>
                        <span className="opacity-70">({count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <div className="blog-container">
            {/* Flagship Featured Guide */}
            {selectedCategory === 'All' && !searchQuery && featuredArticle && (
              <article className="blog-featured" aria-label="Featured guide">
                <a
                  href={`/blog/${featuredSlug}`}
                  className="blog-featured__media"
                >
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.imageAlt || featuredArticle.title}
                  />
                  <span className="blog-featured__badge">
                    <Sparkles size={13} />
                    Featured Essential Guide
                  </span>
                </a>
                <div className="blog-featured__body">
                  <div className="blog-meta-row">
                    <span className="blog-meta-category">
                      {featuredArticle.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={13} />
                      {featuredArticle.readTime || '8 min read'}
                    </span>
                    <span>Updated {featuredArticle.updatedDate || '2026-11-10'}</span>
                  </div>
                  <h2 className="blog-featured__title">
                    <a href={`/blog/${featuredSlug}`}>{featuredArticle.title}</a>
                  </h2>
                  <p className="blog-featured__desc">
                    {featuredArticle.description}
                  </p>
                  {featuredArticle.keyTakeaways && (
                    <ul className="blog-featured__points">
                      {featuredArticle.keyTakeaways.slice(0, 3).map(point => (
                        <li key={point}>
                          <CheckCircle2 size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={`/blog/${featuredSlug}`}
                    className="blog-featured__cta"
                  >
                    Read Complete Guide
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            )}

            {/* Section Header */}
            <div className="blog-section-header">
              <div>
                <h2>
                  {selectedCategory === 'All'
                    ? 'All Invoicing & Business Finance Guides'
                    : `${selectedCategory} (${filteredArticles.length})`}
                </h2>
                <p>
                  Actionable billing playbooks written for small business owners,
                  freelancers, contractors, and finance teams.
                </p>
              </div>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-sm font-extrabold text-emerald-700 hover:underline"
                >
                  Reset filters ({articleEntries.length} total guides)
                </button>
              )}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center">
                <p className="text-lg font-extrabold text-slate-900">
                  No guides matched &ldquo;{searchQuery}&rdquo; in {selectedCategory}.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Try searching for another billing topic like &ldquo;invoice&rdquo;,
                  &ldquo;estimate&rdquo;, &ldquo;Net 30&rdquo;, or &ldquo;expenses&rdquo;.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-emerald-600"
                >
                  Show All Guides
                </button>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredArticles.map(([articleSlug, item]) => (
                  <article key={articleSlug} className="blog-card">
                    <a
                      href={`/blog/${articleSlug}`}
                      className="blog-card__image-link"
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        loading="lazy"
                      />
                    </a>
                    <div className="blog-card__content">
                      <div className="blog-meta-row">
                        <span className="blog-meta-category">{item.category}</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock size={13} />
                          {item.readTime || '7 min read'}
                        </span>
                      </div>
                      <h2 className="blog-card__title">
                        <a href={`/blog/${articleSlug}`}>{item.title}</a>
                      </h2>
                      <p className="blog-card__desc">{item.description}</p>
                      {item.keywords && item.keywords.length > 0 && (
                        <div className="blog-card__keywords" aria-label="Article topics">
                          {item.keywords.slice(0, 3).map(kw => (
                            <span key={kw} className="blog-keyword-chip">
                              {kw}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="blog-card__footer">
                        <span className="text-xs font-semibold text-slate-400">
                          Invoice Next Editorial
                        </span>
                        <a
                          href={`/blog/${articleSlug}`}
                          className="blog-card__link"
                        >
                          Read guide
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Popular Invoicing Tools & Industry Solutions Strip */}
            <section className="blog-tools-strip" aria-labelledby="blog-tools-heading">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    Free Tools &amp; Product Workflows
                  </p>
                  <h2
                    id="blog-tools-heading"
                    className="mt-1 text-2xl font-black tracking-tight text-slate-950"
                  >
                    Turn These Billing Guides Into Daily Workflow
                  </h2>
                </div>
                <a
                  href={APP_ROUTES.signup}
                  className="inline-flex items-center gap-2 self-start rounded-xl bg-slate-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-emerald-600"
                >
                  Start Free with Invoice Next
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="blog-tools-strip__grid">
                {QUICK_TOOL_LINKS.map(([label, href]) => (
                  <a key={href} href={href} className="blog-tools-strip__link">
                    <span>{label}</span>
                    <ArrowRight size={15} />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </main>

        <SiteFooter />
      </div>
    );
  }

  /* ========================================================================
     Individual Blog Article View (/blog/:slug)
     ======================================================================== */
  const article = ARTICLES[slug];
  if (!article) return null;

  const url = `https://invonxt.com/blog/${slug}`;
  const published = article.publishedDate || '2026-11-08';
  const modified = article.updatedDate || published;

  const relatedArticles = articleEntries
    .filter(([key]) => key !== slug)
    .sort(([, a], [, b]) => {
      const aSame = a.category === article.category ? 0 : 1;
      const bSame = b.category === article.category ? 0 : 1;
      return aSame - bSame;
    })
    .slice(0, 3);

  const schemaGraph = [
    {
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      image: article.image ? [article.image] : undefined,
      keywords: (article.keywords || []).join(', '),
      articleSection: article.category,
      datePublished: published,
      dateModified: modified,
      author: {
        '@type': 'Organization',
        name: article.author || 'Invoice Next Editorial Team',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Invoice Next',
        url: 'https://invonxt.com/',
      },
      mainEntityOfPage: url,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        ['Home', 'https://invonxt.com/'],
        ['Blog', 'https://invonxt.com/blog'],
        [article.title, url],
      ].map(([name, item], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item,
      })),
    },
  ];

  if (article.faqs && article.faqs.length > 0) {
    schemaGraph.push({
      '@type': 'FAQPage',
      mainEntity: article.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': schemaGraph,
  };

  return (
    <div className="blog-page">
      <Helmet>
        <title>{article.title} | Invoice Next</title>
        <meta name="description" content={article.description} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Seo
        title={`${article.title} | Invoice Next`}
        description={article.description}
        url={url}
        type="article"
        siteName="Invoice Next"
      />
      <MarketingHeader currentPath={`/blog/${slug}`} />

      <main>
        <article>
          {/* Article Hero Header */}
          <header className="article-header">
            <div className="article-header__inner">
              <nav aria-label="Breadcrumb" className="article-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <a href="/blog">Blog</a>
                <span>/</span>
                <span className="text-slate-800">{article.category}</span>
              </nav>

              <div className="article-header__meta">
                <span className="blog-meta-category">{article.category}</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                  <Clock size={14} />
                  {article.readTime || '7 min read'}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Updated <time dateTime={modified}>{modified}</time>
                </span>
              </div>

              <h1 className="article-header__title">{article.title}</h1>
              <p className="article-header__lead">{article.description}</p>

              <div className="article-author-bar">
                <div className="article-author-badge">
                  <div className="article-author-avatar" aria-hidden="true">
                    IN
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">
                      {article.author || 'Invoice Next Editorial Team'}
                    </div>
                    <div className="text-xs text-slate-500">
                      {article.authorRole ||
                        'Small Business Billing & Accounting Specialists'}
                    </div>
                  </div>
                </div>
                <a
                  href={APP_ROUTES.signup}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-emerald-600"
                >
                  Create Free Invoice
                  <ArrowRight size={14} />
                </a>
              </div>

              {article.image && (
                <figure className="article-hero-figure">
                  <img
                    src={article.image}
                    alt={article.imageAlt || article.title}
                  />
                </figure>
              )}
            </div>
          </header>

          {/* Two-Column Article Content + Sticky Sidebar */}
          <div className="article-layout">
            <div className="article-main">
              {/* Key Takeaways Box */}
              {article.keyTakeaways && article.keyTakeaways.length > 0 && (
                <aside
                  className="article-takeaways"
                  aria-label="Key takeaways from this guide"
                >
                  <div className="article-takeaways__title">
                    <Sparkles size={16} />
                    Key Takeaways
                  </div>
                  <ul className="article-takeaways__list">
                    {article.keyTakeaways.map(item => (
                      <li key={item}>
                        <CheckCircle2 size={17} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}

              {/* Main Content Sections */}
              {article.sections.map(([heading, body, checklist], idx) => (
                <section
                  key={heading}
                  id={`section-${idx}`}
                  className="article-section"
                >
                  <h2>{heading}</h2>
                  <p>{body}</p>
                  {Array.isArray(checklist) && checklist.length > 0 && (
                    <ul className="article-checklist">
                      {checklist.map(point => (
                        <li key={point}>
                          <CheckCircle2 size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Contextual Product Callout */}
              <div className="article-product-tip">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                  <FileText size={14} />
                  Put This Guide Into Practice
                </div>
                <h3>
                  {article.productTip?.heading ||
                    'Streamline Your Billing & Record-Keeping with Invoice Next'}
                </h3>
                <p>
                  {article.productTip?.body ||
                    'Use Invoice Next to create professional PDF invoices, convert approved estimates, track partial payments, log deductible expenses, and keep your customer records organized.'}
                </p>
                <div className="article-product-tip__actions">
                  <a
                    data-analytics-event="cta_click"
                    data-analytics-label={`article:${slug}`}
                    href={APP_ROUTES.signup}
                    className="article-btn-primary"
                  >
                    Start Free with Invoice Next
                    <ArrowRight size={16} />
                  </a>
                  {article.productTip?.ctaHref && (
                    <a
                      href={article.productTip.ctaHref}
                      className="article-btn-secondary"
                    >
                      {article.productTip.ctaLabel || 'Explore Feature'}
                    </a>
                  )}
                </div>
              </div>

              {/* Frequently Asked Questions */}
              {article.faqs && article.faqs.length > 0 && (
                <section
                  id="article-faq"
                  className="article-faqs"
                  aria-labelledby="article-faq-heading"
                >
                  <h2 id="article-faq-heading">Frequently Asked Questions</h2>
                  <div className="article-faq-list">
                    {article.faqs.map(faq => (
                      <div key={faq.q} className="article-faq-item">
                        <h3>{faq.q}</h3>
                        <p>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Topic Tags & Related Resources Footer */}
              <footer className="mt-10 border-t border-slate-200 pt-8">
                {article.keywords && article.keywords.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      <Tag size={13} />
                      Related Topics &amp; Keywords
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {article.keywords.map(kw => (
                        <span key={kw} className="blog-keyword-chip">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <nav aria-label="Related resources">
                  <h2 className="text-lg font-black text-slate-900">
                    Related Invoice Next Tools &amp; Solutions
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {(
                      article.relatedLinks || [
                        ['Fast Invoicing', '/features/lightning-fast-invoicing'],
                        ['Invoice Templates', '/invoice-templates'],
                        ['Invoice Management', '/invoice-management'],
                      ]
                    ).map(([label, href]) => (
                      <a
                        key={href}
                        href={href}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-bold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
                      >
                        <span>{label}</span>
                        <ArrowRight size={14} />
                      </a>
                    ))}
                  </div>
                </nav>
              </footer>
            </div>

            {/* Sticky Sidebar */}
            <aside className="article-sidebar" aria-label="Article navigation and tools">
              <div className="article-sidebar-card">
                <div className="article-sidebar-card__title">In This Guide</div>
                <ul className="article-toc-list">
                  {article.sections.map(([heading], idx) => (
                    <li key={heading}>
                      <a href={`#section-${idx}`}>{heading}</a>
                    </li>
                  ))}
                  {article.faqs && article.faqs.length > 0 && (
                    <li>
                      <a href="#article-faq">Frequently Asked Questions</a>
                    </li>
                  )}
                </ul>
              </div>

              <div className="article-sidebar-card bg-slate-950 text-white">
                <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-extrabold text-emerald-300">
                  Invoice Next Cloud
                </span>
                <h2 className="mt-3 text-xl font-black text-white">
                  Create Your Next Invoice in Under 60 Seconds
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Unlimited invoices, quotes, expense tracking, inventory management, and
                  customer statements in one secure workspace.
                </p>
                <a
                  href={APP_ROUTES.signup}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-emerald-400"
                >
                  Try It Free
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="article-sidebar-card">
                <div className="article-sidebar-card__title">
                  Explore Product Workflows
                </div>
                <ul className="article-related-links">
                  {(
                    article.relatedLinks || [
                      ['Fast Invoicing', '/features/lightning-fast-invoicing'],
                      ['Invoice Templates', '/invoice-templates'],
                      ['For Businesses', '/for-businesses'],
                    ]
                  ).map(([label, href]) => (
                    <li key={href}>
                      <a href={href}>
                        <span>{label}</span>
                        <ArrowRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          <section
            className="border-t border-slate-200 bg-white py-16"
            aria-labelledby="related-guides-heading"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-emerald-700">
                    Continue Reading
                  </p>
                  <h2
                    id="related-guides-heading"
                    className="mt-1 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
                  >
                    More Invoicing &amp; Business Finance Guides
                  </h2>
                </div>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-emerald-700 hover:underline"
                >
                  View all {articleEntries.length} guides
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="blog-grid mt-8">
                {relatedArticles.map(([relSlug, relItem]) => (
                  <article key={relSlug} className="blog-card">
                    <a
                      href={`/blog/${relSlug}`}
                      className="blog-card__image-link"
                    >
                      <img
                        src={relItem.image}
                        alt={relItem.imageAlt || relItem.title}
                        loading="lazy"
                      />
                    </a>
                    <div className="blog-card__content">
                      <div className="blog-meta-row">
                        <span className="blog-meta-category">
                          {relItem.category}
                        </span>
                        <span>{relItem.readTime || '7 min read'}</span>
                      </div>
                      <h3 className="blog-card__title">
                        <a href={`/blog/${relSlug}`}>{relItem.title}</a>
                      </h3>
                      <p className="blog-card__desc">{relItem.description}</p>
                      <div className="blog-card__footer">
                        <a href={`/blog/${relSlug}`} className="blog-card__link">
                          Read guide
                          <ArrowRight size={15} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
