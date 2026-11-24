# Entry notes

Bounty: post-x-promote-make-your-own-bounty-01 — promote make.fun's
make-your-own-bounty post on X. $250 total over the top 50 places; the score
is the post's replies + reposts + quotes at the deadline (2026-11-26T18:35:00Z).

## The post (parent posts it on X)

- Quote make.fun's post https://x.com/makefunai/status/2124915864336236646
  (or a new post linking to it), from a public X account, with a photo of
  its own attached (`photo.png` in this repo).
- Text carries make.fun / @makefunai and our play code
  `makefun-turtle-nutmeg-cherub`.
- Keep the post up and the account public until the results are out.

## The repo

- `POST.json` — placeholder until the post is live; replace with the real
  `https://x.com/<handle>/status/<id>` address after posting.
- `main.ts` — copies `POST.json` to `/output/POST.json`. Run:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `photo.png` — the photo attached to the post, made in this session.
- `.makefun/owner.json` — claim file naming the payout wallet.
- MIT license (written by `makefun init` as the root commit).
