import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('apps/web/out');
const copy = JSON.parse(readFileSync('content/site-copy.json', 'utf8'));
const routes = ['/', ...copy.home.cards.map(x => x.href), '/about', '/privacy', '/editorial-standards', '/contact'];
const file = path => join(root, path === '/' ? 'index.html' : `${path.slice(1)}/index.html`);
const read = path => readFileSync(file(path), 'utf8');

test('production export contains six independent canonical journeys', () => {
  const home = read('/');
  for (const card of copy.home.cards) {
    assert.ok(home.includes(card.title), `missing pathway ${card.id}`);
    assert.match(home, new RegExp(`href="${card.href}/?"`));
    assert.ok(existsSync(file(card.href)), `unbuilt route ${card.href}`);
  }
});
test('every navigation and footer destination resolves inside the public export', () => {
  for (const path of routes) {
    const html = read(path);
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = match[1];
      if (href.startsWith('#')) continue;
      assert.ok(href.startsWith('/') && !href.startsWith('//'), `unexpected external link ${href}`);
      assert.ok(existsSync(file(href.replace(/\/$/, '') || '/')), `broken ${href} on ${path}`);
    }
  }
});
test('public shell has landmarks, a skip link, one heading and no collection controls', () => {
  for (const path of routes) {
    const html = read(path);
    assert.match(html, /<html[^>]*lang="en"/);
    assert.match(html, /href="#main"/);
    assert.match(html, /<main[^>]*id="main"/);
    assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path}: heading structure`);
    assert.doesNotMatch(html, /<(?:form|input|textarea|select|iframe)\b/i);
    assert.match(html, /Engineering preview:/);
    assert.match(html, /Do not share personal or sensitive information/);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
  }
});
test('availability and privacy limits are visible in the rendered pages', () => {
  for (const path of routes.filter(x => x !== '/')) assert.match(read(path), /This service is being built/);
  assert.match(read('/privacy'), /No submission protection, anonymity or end-to-end encryption is claimed/);
  assert.match(read('/rights'), /Jurisdiction-specific guides, sources and review dates are not available/);
  assert.ok(existsSync(join(root, '404.html')), 'missing not-found artifact');
});
