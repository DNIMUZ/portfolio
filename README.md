# Dinie Muzaffar — Portfolio

A personal portfolio landing page for **Dinie Muzaffar** (Data & ML Engineer, Kuala Lumpur).

Built with pure **HTML / CSS / JavaScript** — zero build tools, zero dependencies. Designed to be deployed instantly to **Cloudflare Pages** (or any static host).

## Sections

- **Hero** — name, tagline, intro
- **About** — bio, skills, photo
- **Experience** — professional timeline (Etiqa / AMLA)
- **Projects** — featured (F1 dashboard, LRT monitor, etc.) + in-progress (ClaimFlow, Claw3D, Java & Linux tracks)
- **Contact** — email + social links

## Features

- Responsive (desktop → mobile)
- Dark / light theme toggle (persisted)
- Scroll-reveal animations
- Smooth-scroll navigation
- Experience tab switcher
- Progress bars on in-progress projects

## Run locally

```powershell
# from this folder, serve it with any static server, e.g. Python:
python -m http.server 8000
# open http://localhost:8000
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare Pages → **Create a project** → connect the repo.
3. Framework preset: **None** (static). Build command: empty. Output dir: `/portfolio`.
4. Deploy → free `diniemuzaffar.pages.dev` URL.

---

© 2026 Dinie Muzaffar · Loosely inspired by [brittanychiang.com](https://brittanychiang.com)
