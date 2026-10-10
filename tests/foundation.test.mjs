import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (path) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const copy = JSON.parse(read('content/site-copy.json'));

test('six independent pathways are present and link to distinct places', () => {
  assert.deepEqual(copy.home.cards.map((card) => card.title), [
    'Know your rights',
    'Ask a question',
    'Find support',
    'Share an experience',
    'Help someone else',
    'Explore stories',
  ]);
  assert.equal(new Set(copy.home.cards.map((card) => card.href)).size, 6);
});

test('HEARD has one public positioning line', () => {
  assert.equal(copy.brand.tagline, copy.home.headline);
  assert.ok(read('README.md').includes(copy.brand.tagline));
  assert.ok(read('docs/DEVELOPMENT_PLAN.md').includes(copy.brand.tagline));
});

test('introductory copy explains the product without conversational qualifications', () => {
  const publicIntro = [copy.home.headline, copy.home.introduction, copy.brand.shortDescription, copy.brand.mission].join(' ');
  assert.doesNotMatch(publicIntro, /pleaded guilty|criminal record|consider themselves victims|legal commitment|don't need to|do not need to/i);
  assert.doesNotMatch(read('README.md'), /Visitors do \*\*not\*\* need/);
  assert.match(publicIntro, /rights/);
  assert.match(publicIntro, /support/);
});

test('copy distinguishes an archive account from verified findings', () => {
  assert.match(copy.pages.stories.intro, /independently verified/);
});

test('safety and production limitations are not hidden', () => {
  assert.match(copy.pages.privacy.intro, /limits/);
  assert.match(read('README.md'), /There is no live HEARD service/i);
  assert.match(read('docs/CROSS_ACCOUNT_HANDOFF.md'), /not.*established/i);
});

test('plan and independent handoff are present', () => {
  assert.ok(read('docs/DEVELOPMENT_PLAN.md').length > 60000);
  assert.match(read('docs/CROSS_ACCOUNT_HANDOFF.md'), /independent-account handoff/i);
});
