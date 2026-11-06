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
  const visibleText = text(match(html, /<body[^>]*>([\s\S]*?)<\/body>/i));
  const issues = [];
  if (!title) issues.push('Missing title');
  if (!description) issues.push('Missing meta description');
  if (!h1) issues.push('Missing H1');
  if (canonical !== url) issues.push(`Canonical mismatch: ${canonical || 'missing'}`);
  if (/noindex/i.test(robots)) issues.push('Noindex URL included in sitemap');
  const schemaBlocks = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  if (!schemaBlocks.length) issues.push('Missing JSON-LD');
  for (const block of schemaBlocks) {
    try { JSON.parse(block[1]); } catch { issues.push('Invalid JSON-LD'); }
  }
  return { url, status: 200, title, description, h1, canonical, robots, wordCount: visibleText.split(/\s+/).filter(Boolean).length, issues };
});

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
fs.writeFileSync(reportPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), pages }, null, 2)}\n`, 'utf8');
const issueCount = pages.reduce((total, page) => total + page.issues.length, 0);
console.log(`Audited ${pages.length} sitemap URLs. ${issueCount} issue(s).`);
console.log(`Report: ${reportPath}`);
if (issueCount) {
  for (const page of pages.filter((item) => item.issues.length)) console.log(`- ${page.url}: ${page.issues.join('; ')}`);
  process.exitCode = 1;
}
