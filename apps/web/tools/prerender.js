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
	} finally {
		await vite.close();
	}
}

prerender().catch((err) => {
	console.error('❌ Prerender error:', err);
	process.exit(1);
});

