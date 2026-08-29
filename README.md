# Dinie Muzaffar — Portfolio

A personal portfolio landing page for **Dinie Muzaffar** — Data Developer & Oracle PL/SQL Developer (Maybank Ageas Holding Berhad), based in Kuala Lumpur, Malaysia.

Built with pure **HTML / CSS / JavaScript** — zero build tools, zero dependencies. Designed to be deployed instantly to **Cloudflare Pages** (or any static host).

## Sections

- **Hero** — name, tagline: "Turning large-scale banking & insurance data into reliable pipelines, models, and insights"
- **About** — bio, skills, photo
- **Experience** — career timeline: Maybank Ageas (MAHB), Etiqa internship, UiTM event manager, One Tech technician
- **Projects** — featured (F1 dashboard · LRT monitor · Meko classifier · Lip-reading FYP · Enrollment analytics) + in-progress (ClaimFlow · Claw3D · Java & Linux tracks)
- **Education & Certifications** — UiTM B.Sc., UiTM Diploma, APU ACDSP + Google / Microsoft / Coursera certs
- **Contact** — email + social links
- **Resume** — `resume.html`, an ATS-friendly, printable resume (download as PDF via browser Print). No phone number — LinkedIn & email only.

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
3. Framework preset: **None** (static). Build command: empty. Output dir: `/`.
4. Deploy → free `diniemuzaffar.pages.dev` URL.

---

© 2026 Dinie Muzaffar · Loosely inspired by [brittanychiang.com](https://brittanychiang.com)
