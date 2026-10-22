#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

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
		const appHtml = renderToString(React.createElement(HomePage));

		if (!appHtml || !appHtml.includes('<h1')) {
			throw new Error('Prerendered HTML did not contain expected <h1 heading.');
		}

		const targets = [
			path.join(webRoot, 'index.html'),
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
			console.log('✅ Generated static route HTML files for /about, /contact, /privacy, /terms');
		}

		// Update sitemap.xml lastmod date automatically
		const today = new Date().toISOString().slice(0, 10);
		const sitemapTargets = [
			path.join(webRoot, 'public', 'sitemap.xml'),
			path.resolve(webRoot, '../../dist/apps/web/sitemap.xml'),
		];
		for (const sitemapPath of sitemapTargets) {
			if (!fs.existsSync(sitemapPath)) continue;
			const sm = fs.readFileSync(sitemapPath, 'utf8');
			const updatedSm = sm.replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${today}</lastmod>`);
			fs.writeFileSync(sitemapPath, updatedSm, 'utf8');
		}

		// Mirror dist/apps/web/* to root dist/* AND repo root (../../*) so Hostinger works seamlessly whether Output Directory is `none`, `dist`, or `dist/apps/web`
		const rootDistDir = path.resolve(webRoot, '../../dist');
		const repoRootDir = path.resolve(webRoot, '../..');
		if (fs.existsSync(distAppDir)) {
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

