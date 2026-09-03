# Handoff Brief — Usa Farm White Line Case Investigation

*Vet student coursework, dairy hoof health. Written at the end of the 2026-09-03 session to
start a new session cold. Supersedes the 2026-09-01 version of this file (that content — hoof
exam fundamentals, A/B/C/D dimensions, sole ulcer trimming protocol — now lives in `CLAUDE.md`'s
domain-knowledge section; nothing lost, just moved).*

**Read `CLAUDE.md` first** — it holds the durable standing conventions (provenance-labeling
discipline, verified reference sources with exact table numbers, environment/tooling notes,
domain knowledge). This file is the *current-state snapshot*: what's done, what's open, what to
pick up next.

## 1. Where the project actually is right now

The active thread since 2026-09-02 is **the Usa Farm (อุษาฟาร์ม) white line abscess case** —
everything in `ข้อมูลอุษาฟาร์ม/`. Two deliverables, both current:

- **Report:** `ข้อมูลอุษาฟาร์ม/usa-farm-whiteline-case-report.md` — full bilingual (Thai
  narrative, English technical terms) investigation report, 13 numbered sections + appendix.
- **HTML rendering:** `ข้อมูลอุษาฟาร์ม/usa-farm-whiteline-case-report.html` — standalone local
  file, generated 2026-09-03 by converting the `.md` with `marked` (Node) into a styled,
  theme-aware page (Sarabun font, styled tables/callouts/code blocks, working TOC anchors).

**2026-09-03, later in the session: stopped using the Claude Artifact tool for this project's
deliverables, per explicit user instruction.** The old Artifact page (v3,
`9489846a-3f52-437a-b669-bf4621b50519`) is now stale — don't republish to it. The HTML file above
is the presentation deliverable going forward. When the `.md` changes, regenerate the `.html` by
re-running the same conversion (there is no live sync between the two — it's a manual rebuild).

## 2. Revision history (so a new session knows which numbers are current)

1. **2026-09-02, first pass:** built the report from the raw farm files (`case ที่เจอ.txt`,
   `ผลการตรวจสอบฟาร์ม.txt`, the PSPS xlsx). Used WTSR (2551, beef) for feed composition and
   NASEM (2021) for requirements, because no Thai numeric dairy standard could be found online.
2. **2026-09-02, same day:** user supplied `ThaiNRC.pdf` — the real official Thai numeric dairy
   standard, which *does* exist and had just been missed. Rewrote §4.2, §5, §6.3 etc. to use it
   as the primary standard (WTSR/NASEM demoted to secondary/cross-check). Full details and every
   extracted table number are in `CLAUDE.md`'s "Verified reference sources" section — don't
   re-derive them, they're already there with table numbers cited.
3. **2026-09-03 (this session), two more changes, both by explicit user instruction:**
   - **Committed to กากเบียร์สด (brewer's grain, fresh) as the working value for กากวิสกี้.**
     Previously the report bracketed a 10% / 21.88% (analog) / 87.2% DM sensitivity range and
     hedged every downstream conclusion on it. That's gone now — DM 21.88%, CP 33.31%,
     NDF 55.28%, ADF 25.31% (ThaiNRC table 15.1, n=47) are used directly as กากวิสกี้'s
     composition throughout. One caveat sentence survives per location (it's a same-country
     analog — different base grain — not a direct measurement of this farm's กากวิสกี้), not a
     multi-scenario hedge. The two sensitivity bar charts in the artifact were deleted and
     replaced with a 3-tile stat block.
   - **Confirmed: this farm has no footbath program and no routine/scheduled hoof trimming at
     all.** User-supplied fact, not from the original farm-visit txt files — labeled 🟢 in the
     provenance table with that source note. **Important nuance the user confirmed:** this means
     no *preventive* program exists; reactive/ad-hoc trimming may still happen when a cow is
     visibly lame, so don't claim hooves have literally never been touched — the 4 treated cases
     may have gotten corrective trimming as part of treatment. This resolved the report's old
     differential #6 ("no data") into a confirmed finding and **moved it up to differential #2**
     (🟠 สูง), with two independent mechanisms added to §8.2 (overgrown claws shift weight-bearing
     at the white line regardless of floor condition; no footbath means no periodic
     disinfection while claws sit in the already-documented wet, gravelly pen). §12's
     recommendation table now opens with starting a footbath program and a preventive trimming
     schedule, ahead of the diet-related recommendations.

Both changes are fully reflected in the report, the artifact, and `CLAUDE.md`'s standing
conventions — cross-checked for consistency (see verification notes at the end of the
2026-09-03 session transcript if the reasoning needs to be re-traced).

## 3. Numbers to know at a glance (current, as of v3)

| Value | Current number |
|---|---|
| Cases | 4 (3 lactating cows + 1 heifer), white line abscess |
| PSPS TMR top screen | 16.4% (target 2–8%) — the clearest sorting-risk signal |
| DMI, working case | 12.29 kg/cow/day vs. ThaiNRC requirement 13.1 kg (at 12 kg milk/day) |
| CP, working case | 13.0% DM vs. ThaiNRC requirement 14.3–15.3% |
| NDF, estimated | ~53.3% DM — well above both the Zebeli peNDF and ThaiNRC (>33%) floors |
| peNDF>8, estimated | ~23.1% — clears Zebeli's 18.5% threshold |
| Differential #1 | Pen floor (gravel + slurry) — 🔴 สูงมาก, strongest single piece of evidence |
| Differential #2 | No footbath/no routine trimming — 🟠 สูง (confirmed 2026-09-03) |
| Differential #3 | TMR particle size → sorting — 🟠 สูง |

Full differential table (10 rows) is in report §9 / artifact section 08.

## 4. Open items — what a new session should pick up

Highest-value remaining gaps, in the order they'd actually move the report forward (also listed
in report §11 with more detail):

1. **Measure real %DM of กากวิสกี้.** The กากเบียร์สด value is now the committed working figure,
   but a direct measurement would *refine* it, not flip anything. Cheap (microwave/oven), still
   the single most informative missing number.
2. **Whole-herd locomotion scoring.** The 4 cases are detected cases, not a prevalence estimate —
   this is still the report's biggest unaddressed epidemiological gap.
3. **Confirm whether the 4 treated cases got corrective trimming**, and take baseline A/B/C/D
   hoof measurements on a herd sample — the natural follow-up now that "no preventive program"
   is confirmed but "how overgrown are hooves right now" isn't.
4. **ThaiNRC tables 14.2–14.10** (lactating-cow requirements by week postpartum × heat-stress
   level) are images in the PDF — `pdftotext` (even with `-layout`) returns them blank. If more
   precision than table 14.13's worked example is ever needed, someone has to open the PDF
   visually or request the source tables from the publisher. Don't re-attempt extraction the
   same way; it won't work.
5. Everything else in the tiered data-collection plan (report §11, levels 1–3) is unchanged from
   the 2026-09-02 revision.

## 5. Things NOT to redo

- Don't re-search for a Thai numeric dairy nutrient standard — it's `ThaiNRC.pdf`, already fully
  extracted and cited by table number in `CLAUDE.md`.
- Don't rebuild the 3-scenario กากวิสกี้ sensitivity table — it was deliberately removed on
  2026-09-03 per explicit user instruction. If the user asks for a sensitivity view again later,
  that's a new instruction to build one, not a bug to fix.
- Don't treat "no footbath/trimming" as an open data gap anymore — it's confirmed. The open
  question narrowed to reactive-trimming history and current hoof measurements (see §4 above).
- Don't re-verify the Blowey PDF edition or the NASEM-via-MSD-summary values unless actually
  citing them in a way that matters — both are flagged as unverified in the report's own
  references section already; no need to chase them speculatively.
