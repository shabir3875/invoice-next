#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const SITE_ORIGIN = 'https://invonxt.com';
const APP_URL = 'https://app.invonxt.com/';

const CLEAN_CONTENT_REGEX = {
	comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
	templateLiterals: /`[\s\S]*?`/g,
	strings: /'[^']*'|"[^"]*"/g,
	jsxExpressions: /\{.*?\}/g,
	htmlEntities: {
		quot: /&quot;/g,
		amp: /&amp;/g,
		lt: /&lt;/g,
		gt: /&gt;/g,
		apos: /&apos;/g
	}
};

const EXTRACTION_REGEX = {
	route: /<Route\s+(?:[^>{]|\{[^}]*\})*\/?>/g,
	path: /path=["']([^"']+)["']/,
	element: /element=\{([\s\S]*)\}/,
	elementComponent: /<(\w+)/g,
	helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
	helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
	title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
	description: /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i
};

function cleanContent(content) {
	return content
		.replace(CLEAN_CONTENT_REGEX.comments, '')
		.replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
		.replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
	if (!text) return text;

	return text
		.replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
		.replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
		.trim();
}

function extractRoutes(appJsxPath) {
	if (!fs.existsSync(appJsxPath)) return new Map();

	try {
		const content = fs.readFileSync(appJsxPath, 'utf8');
		const routes = new Map();
		const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];

		for (const match of routeMatches) {
			const routeTag = match[0];
			const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
			const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
			const isIndex = routeTag.includes('index');

			if (elementMatch) {
				const componentNames = [...elementMatch[1].matchAll(EXTRACTION_REGEX.elementComponent)];
				const componentName = componentNames.at(-1)?.[1];

				if (!componentName) continue;

				let routePath;

				if (isIndex) {
					routePath = '/';
				} else if (pathMatch) {
					routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
				}

				routes.set(componentName, routePath);
			}
		}

		return routes;
	} catch {
		return new Map();
	}
}

function findReactFiles(dir) {
	return fs.readdirSync(dir).map(item => path.join(dir, item));
}

function extractHelmetData(content, filePath, routes) {
	const cleanedContent = cleanContent(content);

	if (!EXTRACTION_REGEX.helmetTest.test(cleanedContent)) {
		return null;
	}

	const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
	if (!helmetMatch) return null;

	const helmetContent = helmetMatch[1];
	const titleMatch = helmetContent.match(EXTRACTION_REGEX.title);
	const descMatch = helmetContent.match(EXTRACTION_REGEX.description);

	const title = cleanText(titleMatch?.[1]);
	const description = cleanText(descMatch?.[1]);

	const fileName = path.basename(filePath, path.extname(filePath));
	const url = routes.size && routes.has(fileName)
		? routes.get(fileName)
		: generateFallbackUrl(fileName);

	return {
		url,
		title: title || 'Invoice Next — Simple Invoicing for Small Businesses',
		description: description || 'Invoice Next helps freelancers and small businesses create professional invoices, accept online payments, and manage billing faster with simple tools.'
	};
}

function generateFallbackUrl(fileName) {
	const cleanName = fileName.replace(/Page$/, '').toLowerCase();
	return cleanName === 'app' ? '/' : `/${cleanName}`;
}

function toAbsoluteUrl(routeUrl) {
	if (!routeUrl) return `${SITE_ORIGIN}/`;
	if (routeUrl.startsWith('http://') || routeUrl.startsWith('https://')) return routeUrl;
	return `${SITE_ORIGIN}${routeUrl.startsWith('/') ? routeUrl : `/${routeUrl}`}`;
}

function generateLlmsTxt(pages) {
	const sortedPages = pages.sort((a, b) => a.title.localeCompare(b.title));
	const pageEntries = sortedPages.map(page =>
		`- [${page.title}](${toAbsoluteUrl(page.url)}): ${page.description}`
	).join('\n');

	return [
		'# Invoice Next',
		'',
		'> Invoice Next is an online invoicing and small business billing platform that helps freelancers, agencies, and small businesses create and send professional invoices in 60 seconds, track expenses, manage documents, partners, and items, and get paid faster.',
		'',
		'Invoice Next runs on the web, iOS, and Android. Every plan includes unlimited invoices, unlimited expenses, unlimited quotes, unlimited stock documents, unlimited clients and products, and 256-bit encrypted cloud storage.',
		'',
		'## Pages',
		pageEntries,
		'',
		'## Key Sections & Resources',
		`- [Homepage](${SITE_ORIGIN}/): Overview of Invoice Next online invoicing software, live dashboard preview, and key platform metrics.`,
		`- [About & How It Works](${SITE_ORIGIN}/#about): Three-step workflow to create, send, and organize invoices online.`,
		`- [Features](${SITE_ORIGIN}/#features): Dashboard, Invoices, Expenses, Documents, Partners, Items, and Settings.`,
		`- [Security & Reliability](${SITE_ORIGIN}/#security): 256-bit encryption, cross-platform web/mobile support, and 99.9% uptime.`,
		`- [Customer Reviews](${SITE_ORIGIN}/#reviews): Feedback from freelancers, agency founders, and small business owners.`,
		`- [Pricing Plans](${SITE_ORIGIN}/#pricing): Flexible monthly ($5/mo), annual ($4/mo billed $48/12 months), and 24-month ($3/mo billed $72/24 months) plans with a 30-day money-back guarantee.`,
		`- [Frequently Asked Questions](${SITE_ORIGIN}/#faq): Answers about the free trial, included features, cancellation policy, browser/mobile access, and data security.`,
		`- [Web Application & Contact Portal](${APP_URL}): Log in, start free, or contact support via the Invoice Next application.`,
		''
	].join('\n');
}

function ensureDirectoryExists(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function processPageFile(filePath, routes) {
	try {
		const content = fs.readFileSync(filePath, 'utf8');
		return extractHelmetData(content, filePath, routes);
	} catch (error) {
		console.error(`❌ Error processing ${filePath}:`, error.message);
		return null;
	}
}

function main() {
	const pagesDir = path.join(process.cwd(), 'src', 'pages');
	const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');

	let pages = [];

	if (!fs.existsSync(pagesDir)) {
		pages.push(processPageFile(appJsxPath, new Map()));
		pages = pages.filter(Boolean);
	} else {
		const routes = extractRoutes(appJsxPath);
		const reactFiles = findReactFiles(pagesDir);

		pages = reactFiles
			.map(filePath => processPageFile(filePath, routes))
			.filter(Boolean);
	}

	if (pages.length === 0) {
		console.error('❌ No pages with Helmet components found!');
		process.exit(1);
	}

	const llmsTxtContent = generateLlmsTxt(pages);
	const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

	ensureDirectoryExists(path.dirname(outputPath));
	fs.writeFileSync(outputPath, llmsTxtContent, 'utf8');
}

const isMainModule = process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isMainModule) {
	main();
}
