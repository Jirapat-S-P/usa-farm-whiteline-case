#!/usr/bin/env node
// Converts a Markdown report into a styled standalone HTML page.
// Usage: node scripts/build-report.js <report.md> [output.html]

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.resolve(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'report-template.html');

const srcArg = process.argv[2] || 'usa-farm-whiteline-case-report.md';
const srcPath = path.isAbsolute(srcArg) ? srcArg : path.join(ROOT, srcArg);
const outArg = process.argv[3] || srcArg.replace(/\.md$/, '.html');
const outPath = path.isAbsolute(outArg) ? outArg : path.join(ROOT, outArg);

marked.setOptions({ gfm: true, breaks: false });

function wrapTables(html) {
  return html
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>');
}

// marked v18 no longer auto-assigns heading ids, so TOC anchors written in the
// source Markdown (e.g. "[Section](#1-section-name)") need matching ids added
// back onto the corresponding <h2> tags, in document order.
function fixHeadingIds(html) {
  const olMatch = html.match(/<ol>[\s\S]*?<\/ol>/);
  const hrefs = [];
  if (olMatch) {
    const re = /<a href="([^"]+)">/g;
    let m;
    while ((m = re.exec(olMatch[0]))) {
      hrefs.push(decodeURIComponent(m[1]).replace(/^#/, ''));
    }
  }

  let h2count = 0;
  return html.replace(/<h2>([\s\S]*?)<\/h2>/g, (full, inner) => {
    h2count++;
    if (h2count === 1) return full; // the "Table of Contents" heading itself
    const idx = h2count - 2;
    if (idx < hrefs.length) {
      return `<h2 id="${hrefs[idx]}">${inner}</h2>`;
    }
    return full;
  });
}

function extractTitle(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : path.basename(srcPath, '.md');
}

const md = fs.readFileSync(srcPath, 'utf8');
let bodyHtml = marked.parse(md);
bodyHtml = fixHeadingIds(bodyHtml);
bodyHtml = wrapTables(bodyHtml);

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
const title = extractTitle(md);
const footerNote = `รายงานฉบับ HTML แปลงจาก ${path.basename(srcPath)} · อัปเดตอัตโนมัติเมื่อไฟล์ Markdown เปลี่ยน`;

const finalHtml = template
  .replace('{{TITLE}}', title)
  .replace('{{CONTENT}}', bodyHtml)
  .replace('{{FOOTER_NOTE}}', footerNote);

fs.writeFileSync(outPath, finalHtml, 'utf8');
console.log(`Built ${path.relative(ROOT, outPath)} from ${path.relative(ROOT, srcPath)} (${finalHtml.length} bytes)`);
