#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const webRoot = process.cwd();
const distRoot = path.resolve(webRoot, '../../dist/apps/web');
const sitemapPath = path.join(distRoot, 'sitemap.xml');
const reportDir = path.resolve(webRoot, '../../reports');
const decode = (value = '') => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const text = (value = '') => decode(value.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const match = (html, expression) => decode(html.match(expression)?.[1]?.trim() || '');

if (!fs.existsSync(sitemapPath)) throw new Error('Build output is missing sitemap.xml. Run npm run build first.');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((item) => item[1]);
const routeToFile = (url) => {
  const route = new URL(url).pathname;
  return route === '/' ? path.join(distRoot, 'index.html') : path.join(distRoot, ...route.split('/').filter(Boolean), 'index.html');
};
const pages = urls.map((url) => {
  const file = routeToFile(url);
  if (!fs.existsSync(file)) return { url, status: 'missing', issues: ['Sitemap URL has no generated HTML file'] };
  const html = fs.readFileSync(file, 'utf8');
  const title = match(html, /<title>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = match(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const robots = match(html, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const h1 = text(match(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
  const h1Count = [...html.matchAll(/<h1\b/gi)].length;
  const visibleText = text(match(html, /<body[^>]*>([\s\S]*?)<\/body>/i));
  const issues = [];
  if (!title) issues.push('Missing title');
  if (!description) issues.push('Missing meta description');
  if (!h1) issues.push('Missing H1');
  if (h1Count !== 1) issues.push(`Expected one H1; found ${h1Count}`);
  if (canonical !== url) issues.push(`Canonical mismatch: ${canonical || 'missing'}`);
  if (/noindex/i.test(robots)) issues.push('Noindex URL included in sitemap');
  const schemaBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (!schemaBlocks.length) issues.push('Missing JSON-LD');
  for (const block of schemaBlocks) {
    try { JSON.parse(block[1]); } catch { issues.push('Invalid JSON-LD'); }
  }
  const missingAltCount = [...html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/gi)].length;
  if (missingAltCount) issues.push(`${missingAltCount} image(s) missing alt text`);
  return { url, file, html, status: 200, title, description, h1, h1Count, canonical, robots, wordCount: visibleText.split(/\s+/).filter(Boolean).length, missingAltCount, issues };
});

const publicPaths = new Set(urls.map((url) => new URL(url).pathname.replace(/\/$/, '') || '/'));
for (const page of pages) {
  if (!page.html) continue;
  const broken = [...page.html.matchAll(/href="(\/[^"#?]*)/g)]
    .map((item) => item[1].replace(/\/$/, '') || '/')
    .filter((href) => !publicPaths.has(href) && !fs.existsSync(path.join(distRoot, href.slice(1))) && href !== '/premium');
  page.brokenInternalLinks = [...new Set(broken)];
  if (page.brokenInternalLinks.length) page.issues.push(`Broken internal links: ${page.brokenInternalLinks.join(', ')}`);
}

const titleOwners = new Map();
for (const page of pages) {
  if (!page.title) continue;
  const owners = titleOwners.get(page.title) || [];
  owners.push(page.url);
  titleOwners.set(page.title, owners);
}
for (const page of pages) {
  if ((titleOwners.get(page.title) || []).length > 1) page.issues.push('Duplicate title');
  const targetPath = new URL(page.url).pathname;
  page.internalLinkCount = pages.reduce((count, source) => {
    if (source.status === 'missing') return count;
    const sourceHtml = fs.readFileSync(routeToFile(source.url), 'utf8');
    return count + [...sourceHtml.matchAll(/href="([^"]+)"/g)].filter((item) => item[1] === targetPath || item[1] === page.url).length;
  }, 0);
  if (page.internalLinkCount === 0 && targetPath !== '/') page.issues.push('No internal links found in generated public pages');
}

fs.mkdirSync(reportDir, { recursive: true });
const reportPath = path.join(reportDir, 'seo-url-inventory.json');
const cleanPages = pages.map(({ html, file, ...page }) => page);
const summary = {
  totalPublicPages: pages.length,
  indexablePages: pages.filter((page) => !/noindex/i.test(page.robots)).length,
  missingMetadata: pages.filter((page) => !page.title || !page.description).length,
  duplicateTitles: [...titleOwners.values()].filter((owners) => owners.length > 1).length,
  missingDescriptions: pages.filter((page) => !page.description).length,
  brokenInternalLinks: pages.reduce((count, page) => count + (page.brokenInternalLinks?.length || 0), 0),
  sitemapStatus: pages.every((page) => page.status === 200) ? 'All generated sitemap files present' : 'Missing generated sitemap files',
  canonicalIssues: pages.filter((page) => page.canonical !== page.url).length,
  structuredDataIssues: pages.filter((page) => page.issues.some((issue) => /JSON-LD/.test(issue))).length,
};
const generatedAt = new Date().toISOString();
fs.writeFileSync(reportPath, `${JSON.stringify({ generatedAt, summary, pages: cleanPages }, null, 2)}\n`, 'utf8');
const dashboardDir = path.join(distRoot, 'admin', 'seo');
fs.mkdirSync(dashboardDir, { recursive: true });
const cards = Object.entries(summary).map(([key,value]) => `<article><span>${key.replace(/([A-Z])/g, ' $1')}</span><strong>${value}</strong></article>`).join('');
fs.writeFileSync(path.join(dashboardDir, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>SEO Audit Dashboard | Invonxt Admin</title><style>body{margin:0;background:#f8fafc;color:#0f172a;font:16px system-ui}main{max-width:1100px;margin:auto;padding:48px 24px}h1{font-size:36px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px;margin-top:28px}article{background:white;border:1px solid #e2e8f0;border-radius:16px;padding:22px}span{display:block;color:#64748b;text-transform:capitalize}strong{display:block;margin-top:12px;font-size:25px;overflow-wrap:anywhere}p{color:#475569}</style></head><body><main><h1>Measured SEO audit</h1><p>Generated ${generatedAt}. This page reports build-output measurements only; it does not claim Google indexing or live traffic data.</p><div class="grid">${cards}</div></main></body></html>`, 'utf8');
const issueCount = pages.reduce((total, page) => total + page.issues.length, 0);
console.log(`Audited ${pages.length} sitemap URLs. ${issueCount} issue(s).`);
console.log(`Report: ${reportPath}`);
if (issueCount) {
  for (const page of pages.filter((item) => item.issues.length)) console.log(`- ${page.url}: ${page.issues.join('; ')}`);
  process.exitCode = 1;
}
