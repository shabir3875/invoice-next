#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

function pageSchema({ title, description, url, breadcrumbs = [] }) {
	const graph = [
		{ '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, isPartOf: { '@id': 'https://invonxt.com/#website' }, inLanguage: 'en' },
	];
	if (breadcrumbs.length) {
		graph.push({
			'@type': 'BreadcrumbList',
			itemListElement: breadcrumbs.map(([name, item], index) => ({ '@type': 'ListItem', position: index + 1, name, item })),
		});
	}
	return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

async function prerender() {
	const webRoot = process.cwd();
	const vite = await createServer({
		root: webRoot,
		logLevel: 'error',
		server: { middlewareMode: true },
		appType: 'custom',
	});

	try {
		const { default: HomePage } = await vite.ssrLoadModule('/src/pages/HomePage.jsx');
		const { default: FeatureDetailPage, FEATURE_SLUGS, getFeature, getFeatureSeoTitle } = await vite.ssrLoadModule('/src/features/marketing/FeatureDetailPage.jsx');
		const { default: PublicPage, PUBLIC_ROUTES, getPublicRoute } = await vite.ssrLoadModule('/src/features/marketing/PublicPage.jsx');
		const { default: TemplatePage, templatePages } = await vite.ssrLoadModule('/src/features/marketing/TemplatePage.jsx');
		const { default: SeoLandingPage } = await vite.ssrLoadModule('/src/features/marketing/SeoLandingPage.jsx');
		const { SEO_PAGES, SEO_ROUTES } = await vite.ssrLoadModule('/src/features/marketing/seo-pages.js');
		const { default: BlogPage } = await vite.ssrLoadModule('/src/features/marketing/BlogPage.jsx');
		const { default: ForBusinessesPage } = await vite.ssrLoadModule('/src/features/marketing/ForBusinessesPage.jsx');
		const { default: BusinessDetailPage } = await vite.ssrLoadModule('/src/features/marketing/BusinessDetailPage.jsx');
		const { BUSINESS_CATEGORIES } = await vite.ssrLoadModule('/src/features/marketing/businessCategoriesData.js');
		const { ARTICLES, ARTICLE_ROUTES } = await vite.ssrLoadModule('/src/features/marketing/blog-data.js');
		const appHtml = renderToString(React.createElement(HomePage));

		if (!appHtml || !appHtml.includes('<h1')) {
			throw new Error('Prerendered HTML did not contain expected <h1 heading.');
		}

		const targets = [
			path.resolve(webRoot, '../../dist/apps/web/index.html'),
		];

		for (const filePath of targets) {
			if (!fs.existsSync(filePath)) continue;
			const html = fs.readFileSync(filePath, 'utf8');
			const updated = html.replace(
				/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/,
				`<div id="root">${appHtml}</div>\n\t\t`
			);
			fs.writeFileSync(filePath, updated, 'utf8');
			console.log(`✅ Prerendered static HTML injected into ${path.relative(webRoot, filePath)}`);
		}

		// Generate static route entrypoints (/about, /contact, /privacy, /terms) with route-specific metadata & canonical URLs
		const routeMetaMap = {
			about: {
				title: 'About Invoice Next — Online Invoicing for Small Businesses',
				description: 'Learn how Invoice Next helps freelancers and small businesses create, send, and organize invoices, expenses, and documents in three simple steps.',
				url: 'https://invonxt.com/about',
			},
			contact: {
				title: 'Contact & Get Started — Invoice Next Invoicing Platform',
				description: 'Get started with Invoice Next or reach out to our team. Create and send professional invoices online with no credit card required.',
				url: 'https://invonxt.com/contact',
			},
			privacy: {
				title: 'Privacy & Data Security — Invoice Next',
				description: 'Discover how Invoice Next protects your business and client billing data with bank-grade 256-bit AES encryption, secure cloud storage, and reliable cloud access.',
				url: 'https://invonxt.com/privacy',
			},
			terms: {
				title: 'Terms & Pricing Plans — Invoice Next',
				description: 'Review Invoice Next subscription terms, flexible monthly and annual pricing plans, unlimited invoicing features, and clear cancellation policy.',
				url: 'https://invonxt.com/terms',
			},
		};
		const distAppDir = path.resolve(webRoot, '../../dist/apps/web');
		const distIndexHtmlPath = path.join(distAppDir, 'index.html');
		if (fs.existsSync(distIndexHtmlPath)) {
			const distIndexHtml = fs.readFileSync(distIndexHtmlPath, 'utf8');
			for (const [routeName, meta] of Object.entries(routeMetaMap)) {
				const routeDir = path.join(distAppDir, routeName);
				fs.mkdirSync(routeDir, { recursive: true });
				const routeHtml = distIndexHtml
					.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
					.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${meta.description}" data-react-helmet="true" />`)
					.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${meta.url}" data-react-helmet="true" />`)
					.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:title" content="${meta.title}" data-react-helmet="true" />`)
					.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:description" content="${meta.description}" data-react-helmet="true" />`)
					.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:url" content="${meta.url}" data-react-helmet="true" />`)
					.replace(/<meta name="twitter:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="twitter:title" content="${meta.title}" data-react-helmet="true" />`)
					.replace(/<meta name="twitter:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="twitter:description" content="${meta.description}" data-react-helmet="true" />`)
					.replace(
						/"@type":\s*"WebPage",\s*"@id":\s*"https:\/\/invonxt\.com\/#webpage",\s*"url":\s*"https:\/\/invonxt\.com\/",\s*"name":\s*".*?",\s*"description":\s*".*?"/,
						`"@type": "WebPage",\n\t\t\t\t\t\t"@id": "${meta.url}#webpage",\n\t\t\t\t\t\t"url": "${meta.url}",\n\t\t\t\t\t\t"name": "${meta.title}",\n\t\t\t\t\t\t"description": "${meta.description}"`
					);
				fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
				fs.writeFileSync(path.join(distAppDir, `${routeName}.html`), routeHtml, 'utf8');
			}
			for (const slug of FEATURE_SLUGS) {
				const feature = getFeature(slug);
				const featureHtml = renderToString(React.createElement(FeatureDetailPage, { slug }));
				const title = getFeatureSeoTitle(feature);
				const url = `https://invonxt.com/features/${slug}`;
				const routeDir = path.join(distAppDir, 'features', slug);
				fs.mkdirSync(routeDir, { recursive: true });
				const routeHtml = distIndexHtml
					.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${featureHtml}</div>\n\t\t`)
					.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
					.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${feature.description}" data-react-helmet="true" />`)
					.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${url}" data-react-helmet="true" />`)
					.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:title" content="${title}" data-react-helmet="true" />`)
					.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:description" content="${feature.description}" data-react-helmet="true" />`)
					.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:url" content="${url}" data-react-helmet="true" />`)
					.replace(/<meta name="twitter:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="twitter:title" content="${title}" data-react-helmet="true" />`)
					.replace(/<meta name="twitter:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="twitter:description" content="${feature.description}" data-react-helmet="true" />`);
				const featureRouteHtml = routeHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, pageSchema({ title, description: feature.description, url, breadcrumbs: [['Home','https://invonxt.com/'],['Features','https://invonxt.com/features'],[feature.short,url]] }));
				fs.writeFileSync(path.join(routeDir, 'index.html'), featureRouteHtml, 'utf8');
			}
			for (const routePath of PUBLIC_ROUTES) {
				const meta = getPublicRoute(routePath);
				if (!meta) continue;
				const publicHtml = renderToString(React.createElement(PublicPage, { kind: meta.kind, slug: meta.slug }));
				const title = `${meta.title} | Invoice Next`;
				const url = `https://invonxt.com${routePath}`;
				const routeDir = path.join(distAppDir, ...routePath.split('/').filter(Boolean));
				fs.mkdirSync(routeDir, { recursive: true });
				const routeHtml = distIndexHtml
					.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${publicHtml}</div>\n\t\t`)
					.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
					.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${meta.description}" data-react-helmet="true" />`)
					.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${url}" data-react-helmet="true" />`)
					.replace(/<meta name="robots" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" data-react-helmet="true" />`)
					.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:title" content="${title}" data-react-helmet="true" />`)
					.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:description" content="${meta.description}" data-react-helmet="true" />`)
					.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:url" content="${url}" data-react-helmet="true" />`);
				const publicRouteHtml = routeHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, pageSchema({ title, description: meta.description, url, breadcrumbs: [['Home','https://invonxt.com/'],[meta.title,url]] }));
				fs.writeFileSync(path.join(routeDir, 'index.html'), publicRouteHtml, 'utf8');
				if (routePath.split('/').filter(Boolean).length === 1) {
					fs.writeFileSync(path.join(distAppDir, `${routePath.slice(1)}.html`), publicRouteHtml, 'utf8');
				}
			}
			const notFoundHtml = renderToString(React.createElement(PublicPage, { kind: 'not-found' }));
			for (const [routePath, template] of Object.entries(templatePages)) {
				const pageHtml = renderToString(React.createElement(TemplatePage, { routePath }));
				const title = template.seoTitle || `${template.name} Invoice Templates | Invoice Next`;
				const description = template.seoDescription || template.description;
				const url = `https://invonxt.com${routePath}${template.trailingSlash ? '/' : ''}`;
				const routeDir = path.join(distAppDir, ...routePath.split('/').filter(Boolean));
				fs.mkdirSync(routeDir, { recursive: true });
				const routeHtml = distIndexHtml
					.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${pageHtml}</div>\n\t\t`)
					.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
					.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${description}" data-react-helmet="true" />`)
					.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${url}" data-react-helmet="true" />`)
					.replace(/<meta property="og:url" content=".*?"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
					.replace(/<meta property="og:title" content=".*?"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
					.replace(/<meta property="og:description" content=".*?"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
					.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`)
					.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`);
				const templateRouteHtml = routeHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, pageSchema({ title, description, url, breadcrumbs: [['Home','https://invonxt.com/'],['Invoice Templates','https://invonxt.com/invoice-templates'],[template.name,url]] }));
				fs.writeFileSync(path.join(routeDir, 'index.html'), templateRouteHtml, 'utf8');
			}
			for (const routePath of SEO_ROUTES) {
				const page = SEO_PAGES[routePath];
				const pageHtml = renderToString(React.createElement(SeoLandingPage, { routePath }));
				const url = `https://invonxt.com${routePath}`;
				const routeDir = path.join(distAppDir, ...routePath.split('/').filter(Boolean));
				fs.mkdirSync(routeDir, { recursive: true });
				const routeHtml = distIndexHtml
					.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${pageHtml}</div>\n\t\t`)
					.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
					.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${page.description}" data-react-helmet="true" />`)
					.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${url}" data-react-helmet="true" />`)
					.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:title" content="${page.title}" data-react-helmet="true" />`)
					.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:description" content="${page.description}" data-react-helmet="true" />`)
					.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:url" content="${url}" data-react-helmet="true" />`)
					.replace(/<meta name="twitter:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="twitter:title" content="${page.title}" data-react-helmet="true" />`)
					.replace(/<meta name="twitter:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="twitter:description" content="${page.description}" data-react-helmet="true" />`);
				fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
			}
			for (const routePath of ['/blog', ...ARTICLE_ROUTES]) {
				const slug = routePath === '/blog' ? undefined : routePath.split('/').at(-1);
				const article = slug ? ARTICLES[slug] : null;
				const title = article ? `${article.title} | Invoice Next` : 'Invoicing Guides, Templates & Business Finance Blog | Invoice Next';
				const description = article ? article.description : 'Expert guides on how to create an invoice, choose payment terms, convert estimates to invoices, track business expenses, manage inventory, and get paid faster.';
				const url = `https://invonxt.com${routePath}`;
				const pageHtml = renderToString(React.createElement(BlogPage, { slug }));
				const routeDir = path.join(distAppDir, ...routePath.split('/').filter(Boolean));
				fs.mkdirSync(routeDir, { recursive: true });
				const breadcrumbs = article
					? [['Home', 'https://invonxt.com/'], ['Blog', 'https://invonxt.com/blog'], [article.title, url]]
					: [['Home', 'https://invonxt.com/'], ['Blog', url]];
				const routeHtml = distIndexHtml
					.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, () => `<div id="root">${pageHtml}</div>\n\t\t`)
					.replace(/<title>.*?<\/title>/, () => `<title>${title}</title>`)
					.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, () => `<meta name="description" content="${description}" data-react-helmet="true" />`)
					.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, () => `<link rel="canonical" href="${url}" data-react-helmet="true" />`)
					.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, () => `<meta property="og:title" content="${title}" data-react-helmet="true" />`)
					.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, () => `<meta property="og:description" content="${description}" data-react-helmet="true" />`)
					.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, () => `<meta property="og:url" content="${url}" data-react-helmet="true" />`)
					.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, () => pageSchema({ title, description, url, breadcrumbs }));
				fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
			}
			const forBusinessesHtml = renderToString(React.createElement(ForBusinessesPage));
			const fbTitle = 'Businesses | Invoicing & Expense Management by Invoice Next';
			const fbDescription = 'Explore how Invoice Next supports freelancers, legal firms, contractors, consultants, healthcare professionals, and small businesses with invoicing and expense management.';
			const fbUrl = 'https://invonxt.com/for-businesses';
			const fbRouteDir = path.join(distAppDir, 'for-businesses');
			const businessesRouteDir = path.join(distAppDir, 'businesses');
			fs.mkdirSync(fbRouteDir, { recursive: true });
			fs.mkdirSync(businessesRouteDir, { recursive: true });
			const fbRouteHtml = distIndexHtml
				.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${forBusinessesHtml}</div>\n\t\t`)
				.replace(/<title>.*?<\/title>/, `<title>${fbTitle}</title>`)
				.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${fbDescription}" data-react-helmet="true" />`)
				.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${fbUrl}" data-react-helmet="true" />`)
				.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:title" content="${fbTitle}" data-react-helmet="true" />`)
				.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:description" content="${fbDescription}" data-react-helmet="true" />`)
				.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:url" content="${fbUrl}" data-react-helmet="true" />`)
				.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, pageSchema({ title: fbTitle, description: fbDescription, url: fbUrl, breadcrumbs: [['Home','https://invonxt.com/'],['Businesses',fbUrl]] }));
			fs.writeFileSync(path.join(fbRouteDir, 'index.html'), fbRouteHtml, 'utf8');
			fs.writeFileSync(path.join(distAppDir, 'for-businesses.html'), fbRouteHtml, 'utf8');
			fs.writeFileSync(path.join(businessesRouteDir, 'index.html'), fbRouteHtml, 'utf8');
			fs.writeFileSync(path.join(distAppDir, 'businesses.html'), fbRouteHtml, 'utf8');
			console.log('✅ Generated static route HTML for /for-businesses and /businesses');

			for (const category of BUSINESS_CATEGORIES) {
				for (const sub of category.subcategories) {
					const detailHtml = renderToString(
						React.createElement(BusinessDetailPage, {
							categorySlug: category.slug,
							businessSlug: sub.slug,
						})
					);
					const subTitle = `${sub.name} Invoicing & Expense Management | Invoice Next`;
					const subDesc = `${sub.description} See how Invoice Next helps ${sub.name.toLowerCase()} professionals manage invoices, estimates, clients, and expenses.`;
					const subUrl = `https://invonxt.com${sub.url}`;
					const subDir = path.join(distAppDir, 'businesses', category.slug, sub.slug);
					fs.mkdirSync(subDir, { recursive: true });
					const subRouteHtml = distIndexHtml
						.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${detailHtml}</div>\n\t\t`)
						.replace(/<title>.*?<\/title>/, `<title>${subTitle}</title>`)
						.replace(/<meta name="description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta name="description" content="${subDesc}" data-react-helmet="true" />`)
						.replace(/<link rel="canonical" href=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<link rel="canonical" href="${subUrl}" data-react-helmet="true" />`)
						.replace(/<meta property="og:title" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:title" content="${subTitle}" data-react-helmet="true" />`)
						.replace(/<meta property="og:description" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:description" content="${subDesc}" data-react-helmet="true" />`)
						.replace(/<meta property="og:url" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, `<meta property="og:url" content="${subUrl}" data-react-helmet="true" />`)
						.replace(
							/<script type="application\/ld\+json">[\s\S]*?<\/script>/,
							pageSchema({
								title: subTitle,
								description: subDesc,
								url: subUrl,
								breadcrumbs: [
									['Home', 'https://invonxt.com/'],
									['Businesses', fbUrl],
									[category.name, fbUrl],
									[sub.name, subUrl],
								],
							})
						);
					fs.writeFileSync(path.join(subDir, 'index.html'), subRouteHtml, 'utf8');
				}
			}
			fs.writeFileSync(path.join(distAppDir, '404.html'), distIndexHtml
				.replace(/<div id="root">[\s\S]*?<\/div>\s*(?=<script|<\/body>)/, `<div id="root">${notFoundHtml}</div>\n\t\t`)
				.replace(/<title>.*?<\/title>/, '<title>Page Not Found | Invoice Next</title>')
				.replace(/<meta name="robots" content=".*?"(\s+data-react-helmet="true")?\s*\/?>/, '<meta name="robots" content="noindex, follow" data-react-helmet="true" />'), 'utf8');
			console.log('✅ Generated static route HTML files for /about, /contact, /privacy, /terms');
			console.log(`✅ Generated ${FEATURE_SLUGS.length} static feature detail pages`);
		}

		// Build the sitemap from the same route inventories used to generate pages.
		// Source-file modification dates prevent every URL from receiving a fabricated
		// new date merely because a deployment was rebuilt.
		const sourceDate = (relativePath) => fs.statSync(path.join(webRoot, relativePath)).mtime.toISOString().slice(0, 10);
		const sitemapEntries = [
			{ route: '/', lastmod: sourceDate('src/features/marketing/MarketingPage.jsx') },
			...FEATURE_SLUGS.map((slug) => ({ route: `/features/${slug}`, lastmod: sourceDate('src/features/marketing/FeatureDetailPage.jsx') })),
			...PUBLIC_ROUTES
				.map((route) => ({ route, meta: getPublicRoute(route) }))
				.filter(({ meta }) => meta && !meta.noindex)
				.map(({ route }) => ({ route, lastmod: sourceDate('src/features/marketing/PublicPage.jsx') })),
			...Object.keys(templatePages)
				.filter((route) => route.startsWith('/templates/'))
				.map((route) => ({ route: `${route}${templatePages[route].trailingSlash ? '/' : ''}`, lastmod: sourceDate('src/features/marketing/TemplatePage.jsx') })),
			...SEO_ROUTES.map((route) => ({ route, lastmod: sourceDate('src/features/marketing/seo-pages.js') })),
			{ route: '/for-businesses', lastmod: sourceDate('src/features/marketing/ForBusinessesPage.jsx') },
			{ route: '/blog', lastmod: sourceDate('src/features/marketing/blog-data.js') },
			...ARTICLE_ROUTES.map((route) => ({ route, lastmod: sourceDate('src/features/marketing/blog-data.js') })),
		];
		const seenRoutes = new Set();
		const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries
			.filter(({ route }) => !seenRoutes.has(route) && seenRoutes.add(route))
			.map(({ route, lastmod }) => `  <url><loc>https://invonxt.com${route === '/' ? '/' : route}</loc><lastmod>${lastmod}</lastmod></url>`)
			.join('\n')}\n</urlset>\n`;
		const sitemapTargets = [
			path.join(webRoot, 'public', 'sitemap.xml'),
			path.resolve(webRoot, '../../dist/apps/web/sitemap.xml'),
		];
		for (const sitemapPath of sitemapTargets) {
			fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
		}

		// Mirror dist/apps/web/* to root dist/* AND repo root (../../*) so Hostinger works seamlessly whether Output Directory is `none`, `dist`, or `dist/apps/web`
		const rootDistDir = path.resolve(webRoot, '../../dist');
		const repoRootDir = path.resolve(webRoot, '../..');
		if (fs.existsSync(distAppDir)) {
			// Remove retired prerendered routes before mirroring so old deploy artifacts
			// cannot survive a build simply because recursive copying merges folders.
			const retiredDeployEntries = [
				'features.html',
				path.join('features', 'index.html'),
				path.join('features', 'professional-invoices'),
				path.join('features', 'invoice-templates'),
				path.join('features', 'expense-management'),
				path.join('features', 'business-reports'),
				path.join('features', 'create-estimates-invoices'),
				'recurring-invoices',
				'invoice-generator',
			];
			for (const destinationRoot of [rootDistDir, repoRootDir]) {
				for (const retiredEntry of retiredDeployEntries) {
					fs.rmSync(path.join(destinationRoot, retiredEntry), { recursive: true, force: true });
				}
			}
			for (const entry of fs.readdirSync(distAppDir)) {
				if (entry === 'apps') continue;
				const srcEntry = path.join(distAppDir, entry);
				const destDistEntry = path.join(rootDistDir, entry);
				const destRepoRootEntry = path.join(repoRootDir, entry);
				fs.cpSync(srcEntry, destDistEntry, { recursive: true, force: true });
				fs.cpSync(srcEntry, destRepoRootEntry, { recursive: true, force: true });
			}
			console.log('✅ Mirrored build artifacts to root dist/ and repository root directory');
		}
	} finally {
		await vite.close();
	}
}

prerender().catch((err) => {
	console.error('❌ Prerender error:', err);
	process.exit(1);
});

