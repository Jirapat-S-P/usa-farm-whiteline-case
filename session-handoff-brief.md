# Handoff Brief — Usa Farm White Line Case Investigation

*Vet student coursework, dairy hoof health. Last rewritten 2026-09-03 (end of session) to start a
new session cold. Supersedes the 2026-09-01 version of this file (that content — hoof exam
fundamentals, A/B/C/D dimensions, sole ulcer trimming protocol — now lives in `CLAUDE.md`'s
domain-knowledge section; nothing lost, just moved).*

**Read `CLAUDE.md` first** — it holds the durable standing conventions (provenance-labeling
discipline, verified reference sources with exact table numbers and page numbers, environment/
tooling notes, domain knowledge). This file is the *current-state snapshot*: what's done, what's
open, what to pick up next.

## 1. Where the project actually is right now

The active thread since 2026-09-02 is **the Usa Farm (อุษาฟาร์ม) white line abscess case** —
everything in `ข้อมูลอุษาฟาร์ม/`. This is now a **public GitHub repo with an automated build
pipeline**, not a folder of local files:

- **Repo:** https://github.com/Jirapat-S-P/usa-farm-whiteline-case — **public** (deliberately
  switched from private on 2026-09-03 so GitHub Pages could serve a live URL — see below; this
  means the farm-critical findings, e.g. GAP non-compliance, no footbath/trimming, are publicly
  readable). Excludes the two large reference PDFs (`ThaiNRC.pdf`, the Blowey textbook) via
  `.gitignore` — copyright/size reasons.
- **Report source:** `usa-farm-whiteline-case-report.md` — full bilingual (Thai narrative, English
  technical terms) investigation report, 13 numbered sections + appendix.
- **Live HTML rendering:** https://jirapat-s-p.github.io/usa-farm-whiteline-case/usa-farm-whiteline-case-report.html
  — **auto-built**, do not hand-edit `usa-farm-whiteline-case-report.html` directly. It's generated
  by `scripts/build-report.js` (uses `marked`, wraps tables, fixes heading-id anchors, injects into
  `templates/report-template.html`) and rebuilt automatically by
  `.github/workflows/build-report.yml` on every push that touches the `.md`, the template, or the
  build script. GitHub Pages then redeploys automatically. Local workflow when editing the report:
  edit the `.md` → (optional local check: `npm install --no-save marked@18.0.11`, then
  `node scripts/build-report.js usa-farm-whiteline-case-report.md`, then `rm -rf node_modules`) →
  commit + push. The Action is a safety net either way.
- **Release:** https://github.com/Jirapat-S-P/usa-farm-whiteline-case/releases/tag/v1.0 — first
  tagged version, HTML attached as a downloadable asset. Not re-tagged since; consider a v1.1 tag
  if a new stable checkpoint is wanted after the changes below.
- **Repo description/website field** on GitHub already points at the live report URL.

**Stopped using the Claude Artifact tool for this project's deliverables** — per explicit user
instruction (2026-09-03). The old Artifact page (v3, `9489846a-3f52-437a-b669-bf4621b50519`) is
stale; don't republish to it.

## 2. Revision history (so a new session knows which numbers are current)

1. **2026-09-02, first pass:** built the report from the raw farm files (`case ที่เจอ.txt`,
   `ผลการตรวจสอบฟาร์ม.txt`, the PSPS xlsx). Used WTSR (2551, beef) for feed composition and
   NASEM (2021) for requirements, because no Thai numeric dairy standard could be found online.
2. **2026-09-02, same day:** user supplied `ThaiNRC.pdf` — the real official Thai numeric dairy
   standard. Rewrote §4.2, §5, §6.3 etc. to use it as the primary standard (WTSR/NASEM demoted to
   secondary/cross-check). Table numbers are in `CLAUDE.md`'s "Verified reference sources".
3. **2026-09-03, early session:** committed to กากเบียร์สด (brewer's grain, fresh) as the working
   value for กากวิสกี้ (dropped the old 3-scenario sensitivity range); confirmed via direct user
   statement that **the farm has no footbath program and no routine/scheduled hoof trimming at
   all** (moved this to differential #2, 🟠 สูง).
4. **2026-09-03, mid session — moved off Claude Artifact:** per explicit user instruction, stopped
   publishing to the Artifact tool; built a standalone HTML rendering instead (`marked` + a styled
   template). Then pushed the whole project to a new GitHub repo (`Jirapat-S-P/usa-farm-whiteline-case`),
   which was switched from private to public specifically so **GitHub Pages** could serve the HTML
   at a live URL (Pages has no private mode on this account tier). Created release `v1.0`. Then
   **automated the HTML build**: extracted the ad-hoc conversion into `scripts/build-report.js` +
   `templates/report-template.html`, added `.github/workflows/build-report.yml` so the HTML
   regenerates and commits itself on every relevant push — manual conversion is no longer part of
   the workflow.
5. **2026-09-03, later session — Blowey textbook mined for content improvements:** extracted the
   full text of `cattle-lameness-and-hoofcare-an-illustrated-guide.pdf` with
   `pdftotext -enc UTF-8 -layout` (it's text-based, unlike ThaiNRC's image tables) and confirmed
   its **edition from the copyright page**: 1st ed. (1993, reprinted with alterations 1998),
   Farming Press, Ipswich, ISBN 0-85236-252-8 — resolving the old "edition not yet verified" flag.
   Wove 9 findings into the report (§8 anatomy definition, §8.2 severity-ranked infection sites and
   3 new mechanical-pathway citations, §8.4 a hoof-specific concentrate:forage safety threshold,
   §9 differential #5 mineral-evidence caveat, and — most substantively — §8.1's heifer/calving
   correction: Blowey ties calving itself to white line weakening via laminitis, so the report's
   "a heifer case argues against the metabolic pathway" argument only holds if she's confirmed
   nulliparous; this is now tracked as limitation items 29-30 and data-gap item 1.13, not silently
   kept as a strong claim). Full page map is in `CLAUDE.md`'s Blowey bullet under "Verified
   reference sources".
6. **2026-09-03, same session — new farm fact: floor repair confirmed:** user reported that the
   concrete floor in the **lactating-cow pen (คอกโครีด)** broke down into potholes with heavy
   gravel accumulation **~2 weeks before this was reported, and has since been repaired**. This
   resolves the "ไม่ทราบแหล่งที่มาของหิน" gap in differential #1 and is a near-verbatim match to
   Blowey's own description (p. 73: damaged/pitted concrete → loose stones → white line
   impaction). Added to §2 (provenance table item 16), §7.1, §8.2, §9 row 1, a new §10 subsection
   ช (limitation items 31-34), §11 (new item 1.14, updated item 2.2 and item 3.3), §12
   (recommendation #1 reframed), and ภาคผนวก ก. **New open questions this raised** (see §4 below):
   whether the affected heifer was ever exposed to this specific pen's floor, whether other pens
   have the same damage, whether the 4 cases' onset dates fall inside the ~2-week pothole window,
   and whether the repair removed the embedded gravel or just resurfaced over it.

Everything above is fully reflected in the report and in `CLAUDE.md`'s standing conventions.

## 3. Numbers to know at a glance

| Value | Current number |
|---|---|
| Cases | 4 (3 lactating cows + 1 heifer), white line abscess |
| PSPS TMR top screen | 16.4% (target 2–8%) — the clearest sorting-risk signal |
| DMI, working case | 12.29 kg/cow/day vs. ThaiNRC requirement 13.1 kg (at 12 kg milk/day) |
| CP, working case | 13.0% DM vs. ThaiNRC requirement 14.3–15.3% |
| NDF, estimated | ~53.3% DM — well above both the Zebeli peNDF and ThaiNRC (>33%) floors |
| peNDF>8, estimated | ~23.1% — clears Zebeli's 18.5% threshold |
| Concentrate:forage | ~26:73 — well under Blowey's 60:40 hoof-safety threshold (new citation) |
| Differential #1 | Pen floor (gravel + slurry) — 🔴 สูงมาก. **Gravel source now confirmed: broken/pitted concrete in the lactating pen, ~2 weeks before repair, since fixed** |
| Differential #2 | No footbath/no routine trimming — 🟠 สูง (confirmed 2026-09-03) |
| Differential #3 | TMR particle size → sorting — 🟠 สูง |

Full differential table (10 rows) is in report §9.

## 4. Open items — what a new session should pick up

Highest-value remaining gaps, in the order they'd actually move the report forward (also listed
in report §11 with more detail):

1. **Get exact onset/treatment dates for the 4 cases and compare against the ~2-week floor-pothole
   window** (report §11 item 1.14). Cheapest, fastest item now on the list — pure interview/records,
   no measurement — and it upgrades the floor evidence from cross-sectional association to
   temporal evidence if the dates line up.
2. **Confirm whether the affected heifer was ever exposed to the specific lactating-pen floor that
   failed**, and whether other pens have similar damage (§11 item 1.14, §10 items 31-32). This
   directly affects how much of the "4 cases" the floor mechanism can actually explain.
3. **Confirm the repair's thoroughness** — did it remove the embedded gravel, or just resurface
   over it? (§10 item 34). Matters for whether the mechanical risk is actually gone.
4. **Confirm the affected heifer's calving status** (nulliparous vs. first-calved) — from the
   Blowey update, this determines whether "she got sick too" still argues against the metabolic
   pathway (§10 items 29-30, §11 item 1.13).
5. **Measure real %DM of กากวิสกี้.** The กากเบียร์สด value is the committed working figure; a
   direct measurement would *refine* it, not flip anything.
6. **Whole-herd locomotion scoring.** The 4 cases are detected cases, not a prevalence estimate.
7. **Confirm whether the 4 treated cases got corrective trimming**, and take baseline A/B/C/D hoof
   measurements on a herd sample.
8. **ThaiNRC tables 14.2–14.10** are images in the PDF — `pdftotext` (even `-layout`) returns them
   blank. Open the PDF visually or request source tables from the publisher if ever needed.
9. Everything else in the tiered data-collection plan (report §11, levels 1–3) is unchanged.

## 5. Things NOT to redo

- Don't re-search for a Thai numeric dairy nutrient standard — it's `ThaiNRC.pdf`, already fully
  extracted and cited by table number in `CLAUDE.md`.
- Don't rebuild the 3-scenario กากวิสกี้ sensitivity table — deliberately removed, per explicit
  user instruction.
- Don't treat "no footbath/trimming" as an open data gap — it's confirmed (differential #2).
- Don't re-verify the Blowey PDF edition — confirmed 2026-09-03 from its own copyright page (1st
  ed., 1993/1998, ISBN 0-85236-252-8); page map for everything already cited is in `CLAUDE.md`.
  Don't re-extract it with `pdftotext` either — already done, it's a clean text-based scan.
- Don't hand-edit `usa-farm-whiteline-case-report.html` — it's auto-generated by
  `scripts/build-report.js` / the GitHub Action. Edit the `.md` and let the pipeline rebuild it.
- Don't re-publish to the Claude Artifact tool for this project — discontinued 2026-09-03.
- Don't treat "gravel source unknown" as an open gap anymore (differential #1) — it's confirmed
  (broken/pitted concrete, lactating pen, ~2 weeks before repair). The open questions narrowed to
  the four listed in revision-history item 6 / §4 above — don't silently drop those either.
- Don't flip the repo back to private without flagging the tradeoff to the user again the same way
  it was flagged before going public (see `CLAUDE.md`'s GitHub bullet).
