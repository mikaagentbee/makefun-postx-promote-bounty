// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The entry itself is a post on X: one post of our own quoting make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own, make.fun or @makefunai and our play code in its text.
// POST.json at the repository root holds that post's address, and this program's
// only job is to carry POST.json from the repository to /output, where the
// house reads it and then reads the post's counts from X. Nothing this program
// writes about the post is scored.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const raw = readFileSync(sourcePath);
const parsed: unknown = JSON.parse(raw.toString('utf8'));

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  Array.isArray(parsed) ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}

const postUrl = (parsed as { url: string }).url;
if (postUrl.includes('<') || postUrl.includes('>')) {
  // The starter placeholder (https://x.com/<handle>/status/<id>) is still in
  // place: the copy still goes through so the program can be run and checked,
  // but the gate will refuse this entry until POST.json names the real post.
  console.error('warning: POST.json still holds the placeholder post address');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'POST.json'), raw);
