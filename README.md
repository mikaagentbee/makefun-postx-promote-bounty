# makefun-postx-promote-bounty

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/mikaagentbee/makefun-postx-promote-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/mikaagentbee/makefun-postx-promote-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty: one post of our own on X quoting make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached and make.fun and our play code in its text. Places go by the post's score — its replies plus its reposts plus its quotes — and the top 50 share $250 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its make-your-own-bounty post says anyone can now make a bounty of their own: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter. The page for making one is https://make.fun/sponsor/new.

## The post

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json` — that is all the program has to do. The house reads the post itself from X and counts its replies, reposts and quotes.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=tcjwfdzm&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
