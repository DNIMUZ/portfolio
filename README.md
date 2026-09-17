# Dinie Muzaffar — Portfolio

[![Live](https://img.shields.io/badge/live-online-brightgreen)](https://portfolio.diniemuzaffar.workers.dev)
[![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-red)](https://github.com/DNIMUZ/portfolio)
[![Host](https://img.shields.io/badge/host-Cloudflare%20Workers-orange)](https://workers.cloudflare.com/)

A personal portfolio landing page for **Dinie Muzaffar** — Data Developer & Oracle PL/SQL Developer (Maybank Ageas Holding Berhad), based in Kuala Lumpur, Malaysia. This repository behind the live site at [portfolio.diniemuzaffar.workers.dev](https://portfolio.diniemuzaffar.workers.dev).

Built with pure **HTML / CSS / JavaScript** — zero build tools, zero dependencies. Designed to be deployed instantly to **Cloudflare Workers** via `wrangler.jsonc` (any static host also works).

## Sections

- **Hero** — name, tagline: "I turn data into reliable pipelines, models, dashboards, and insights."
- **About** — bio, skills, photo
- **Experience** — career timeline: Maybank Ageas (MAHB), Etiqa internship, UiTM event manager, One Tech technician
- **Projects** — F1 race-pace dashboard · LRT Kelana Jaya monitor · Samsung S10+ repair case study · Meko & Lily classifier · Lip-reading FYP · Student enrollment analytics
- **Education & Certifications** — UiTM B.Sc., UiTM Diploma, APU ACDSP + Google / Microsoft / Coursera certs
- **Contact** — email + social links
- **Resume** — `resume.html`, an ATS-friendly, printable resume (download as PDF via browser Print). No phone number — LinkedIn & email only.
- **Cover Letter** — `cover-letter.html`, a form-driven letter that live-updates and prints to PDF.

## Features

- Responsive (desktop → mobile)
- Dark / light theme toggle (persisted)
- Scroll-reveal animations
- Smooth-scroll navigation
- Experience tab switcher
- Status badges on projects

## Tech Stack

- **HTML / CSS / JavaScript** — no frameworks, no build step, no dependencies
- **Cloudflare Workers** — static assets served via `wrangler.jsonc`
- **Python** (optional) — local dev server via `http.server`

## Repository structure

```text
.
├── index.html          # portfolio landing page
├── resume.html         # ATS-friendly, printable resume
├── cover-letter.html   # form-driven cover letter (live-updates + print)
├── script.js           # theme toggle, tabs, scroll-reveal
├── styles.css          # all styling
├── wrangler.jsonc      # Cloudflare Workers config
└── variations/         # alternate design directions
```

## Run locally

```powershell
# from this folder, serve it with any static server, e.g. Python:
python -m http.server 8000
# open http://localhost:8000
```

## Deploy to Cloudflare Workers

1. Push this folder to a GitHub repo.
2. From this folder: `npx wrangler deploy` — `wrangler.jsonc` serves the folder as static assets.
3. Live at `portfolio.diniemuzaffar.workers.dev` (see site footer).

Cloudflare Pages also works: Framework preset **None**, build command empty, output dir `/`.

## Contact

- Live site — https://portfolio.diniemuzaffar.workers.dev
- GitHub — https://github.com/DNIMUZ
- LinkedIn — https://www.linkedin.com/in/diniemuzaffar/
- Email — diniemuzaffar@gmail.com

---

© 2026 Dinie Muzaffar · Loosely inspired by [brittanychiang.com](https://brittanychiang.com)
