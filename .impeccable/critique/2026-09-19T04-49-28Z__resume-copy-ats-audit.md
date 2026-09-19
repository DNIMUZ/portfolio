---
target: resume copy + ATS audit (resume.html, index.html projects tab, DinieMuzaffar_Resume_2026.docx)
target_identity: "file:D:\\Dinie_Project\\portfolio"
timestamp: 2026-09-19T04:49:28Z
slug: resume-copy-ats-audit
scope: final check prior to PR for feature/meko-lily-project-and-links
---

# Copy Quality + ATS Audit — Resume & Portfolio Projects Copy

Method: direct copy pass over the changed surfaces (resume.html, index.html Things I've Built, and the .docx),
plus a structural ATS interrogation of the DOCX binary and the resume HTML print path.

## 1. Copy quality — Wording / Sentence / Grammar / AI-sound

### What was reviewed
- New Meko & Lily Classifier entry (index.html grid card, resume.html, docx PERSONAL PROJECTS).
- New aria-labels + external link icons on Lip-Reading (FYP) and Student Enrollment Analytics cards.
- The full resume.html + docx text as context (unchanged copy read through for drift).

### Sentence / grammar
- Fixed during pass: "to tell my two cats from any other cat" -> "to tell my two cats **apart** from any other cat" (index.html card). The only real grammar defect found.
- Metric phrasing is consistent across all three surfaces: "0.994 validation accuracy / 0.984 macro recall", "5,166 privacy-stripped images", "holdout 3/7 to 5/7", "two-stage", "macro-recall early stopping + occlusion augmentation".
- Web/docx drift introduced by PR #22 was aligned: resume.html FYP bullet now matches docx/portfolio wording ("Designed a lip-reading prediction system using CNN/LSTM; it reached high accuracy on test data without long training runs.").

### AI-sounding / buzzword scan (regex over full resume.html + index.html)
- Flagged words were all **legitimate, non-buzzword uses**: "enhanced" (BNM SQL iteration), "diverse systems" (hardware role), "stakeholder engagement" (event role), "surface clear business insights", "passionate" (portfolio About, human voice, not ATS copy).
- No "leverage / robust / seamless / delve / unlock / empower / showcase / harness / synergy / game-changer / state-of-the-art" hits. The new copy is factual and metric-led, matching the existing critique's "honest, precisely-scoped copy" bar.

### Verdict
**Pass.** Copy is specific, numbers-first, and free of filler. No further rewrites needed.

## 2. ATS-friendliness audit (modern + popular parsers)

Target parsers: Greenhouse, Lever, Workable, iCIMS, Oracle Taleo, Bullhorn, JazzHR, Freshteam, Ashby + common checker tools (Jobscan, beamjobs, SampleTape).

### DOCX structural interrogation (`DinieMuzaffar_Resume_2026.docx`)
| Check | Result |
|---|---|
| Tables (`w:tbl`) | 0 — single column |
| Text boxes / drawings | 0 — no text-in-image |
| Header/footer references | 0 — contact lives in body flow |
| Smart quotes / en-dashes | 0 / 0 |
| Em-dashes | 4 — only the "Job Title — Company" separators (pre-existing, ATS-safe) |
| Font | Calibri (theme minorHAnsi) 11pt, en-US |
| URLs | Plain-text, visible (`github.com/DNIMUZ/...`) |
| Dates | Consistent `MMMM YYYY - Present` format |
| Section headers | PROFESSIONAL SUMMARY / WORK EXPERIENCE / EDUCATION / PERSONAL PROJECTS / TECHNICAL SKILLS / LICENSES & CERTS / LANGUAGES — all parse as standard sections |
| Filename | `DinieMuzaffar_Resume_2026.docx` — clear, no underscores-wedge/spaces issue |
| New addition | Meko & Lily entry adds valuable keywords (TensorFlow, MobileNetV2, YOLOv8, OpenCV, Streamlit) to PERSONAL PROJECTS |

### resume.html (web / print-to-PDF)
| Check | Result |
|---|---|
| Layout | Single column (`.skills-grid` collapses to 1fr under `@media print`) |
| Toolbar | `display:none` in print — not exported |
| Images / tables in print | None |
| Headings | Standard uppercase section titles |
| Bullets | Plain `<li>` text; print CSS prefixes `•` |
| Links | Visible URL text inside anchors |
| Lean HTML | `script.js` include removed (dead weight in a print/ATS document — previously flagged P1 by the design critique) |

### Notes / non-blocking
- "Personal Projects" is recognized by all major ATS parsers; optional rename to "Projects" would buy nothing measurable.
- Placeholder `*.docx` gitignore means the resume DOCX is a local working artifact, not version-controlled in this repo (by design — matches existing repo intent).

### Verdict
**Pass.** Both web and DOCX are ATS-clean by structure and content conventions; the Meko & Lily entry strengthens semantic relevance for Data Science / ML roles.

## 3. Remaining Observations
- LRT card external link aria-label fixed ("Live dashboard" instead of a duplicate "GitHub repo") — a P1 from the prior design critique, fixed here opportunistically.
- No new copy between docx and resume.html beyond format conventions ("GitHub: ..." inside the last bullet in the docx vs. a separate links row on the web).
- The two LinkedIn overlay links render as external-link icons with explicit aria-labels ("Lip-reading FYP on LinkedIn", "Student enrollment analytics on LinkedIn") — accessible and unambiguous.