# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project: Dairy Cow Hoof Health — Sole Ulcer & White Line Disease Investigation

Vet student coursework project. Folder: "checklist soleulcer". Last updated: 2026-09-03.

**This is not a software codebase.** There is no build, lint, or test step. The deliverables are
Markdown reports, fillable Excel workbooks, and published Artifact pages. "Correctness" here means
*every number traces to a named source*, not that a suite passes.

## Purpose

Build the knowledge base and field tools needed to investigate herd-level lameness in dairy
cattle, with a specific focus on two non-infectious claw lesions: **sole ulcer** and
**white line disease/ulcer**. Work spans two threads: (1) learning the clinical/anatomical
material, and (2) producing fillable Excel tools for real farm visits and the data they
generate — and, since 2026-09-02, (3) analysing data from a real farm visit.

## Files in this folder

| File | What it is |
|---|---|
| `sole-abscess-farm-investigation-checklist.md` / `.xlsx` | First deliverable: full 46-item, 7-section herd-level investigation checklist (A. Farm records, B. Animal exam, C. Housing/environment, D. Nutrition, E. Hoof care mgmt, F. Concurrent disease, G. Analysis summary). Generic scope — any cause of high lameness/sole abscess incidence, not lesion-specific. 16 of the 46 items are highlighted yellow in the xlsx as the highest-priority subset. |
| `sole-ulcer-whiteline-ulcer-checklist.xlsx` | Scoped-down checklist built from just the 16 yellow-highlighted items above, retitled and tagged with a "Lesion Focus" column (Sole Ulcer / White Line Ulcer / ทั้งสอง) per item, based on underlying mechanism. |
| `farm-data-analysis-template.xlsx` | A more elaborate relational data-analysis workbook (Farm_Risk_Factors + Animal_Case_Data linked by Farm_ID with INDEX/MATCH lookups, plus an auto-computing Analysis_Summary sheet). **User found this too complicated** for routine use — kept as an option for later if formal cause-vs-presentation analysis (with real statistics) is wanted, but not the day-to-day tool. |
| `farm-problem-list-lameness-whiteline.xlsx` | **Current working field tool**, 2 simple sheets, no cross-sheet formulas: (1) "รายการปัญหาในฟาร์ม" — farm info fields, a "ค่าที่วัดได้" measured-values table with reference targets, and a 19-item Yes/No/N/A problem checklist grouped by floor/housing, nutrition, hoof care, body condition, concurrent disease. (2) "รายชื่อสัตว์ป่วย" — flat sick-animal log with one transparent formula: incidence % = count of logged animals ÷ herd size. Intended as the data-collection instrument for the case-control study described below. |
| `session-handoff-brief.md` | **Current-state snapshot, rewritten 2026-09-03** — revision history, current numbers, and open items for the Usa Farm case specifically. Read this alongside `CLAUDE.md` (this file) at the start of a new session: `CLAUDE.md` holds durable conventions/sources, the handoff brief holds where things stand right now. Its original 2026-09-01 content (hoof exam fundamentals etc.) was folded into this file's domain-knowledge section below, not lost. |
| `ข้อมูลอุษาฟาร์ม/` | **Real farm data + the analysis built from it.** See next section. |

### `ข้อมูลอุษาฟาร์ม/` — the Usa Farm case

| File | What it is |
|---|---|
| `case ที่เจอ.txt` | One line. The case: โครีด 3 ตัว + โคสาว 1 ตัว, lame, treated for **white line abscess**. |
| `ผลการตรวจสอบฟาร์ม.txt` | Farm visit findings: full TMR ration as-fed (weights per day for 40 cows), feeding pattern, and the pen inspection — **มีการหมักหมมของโคลนและอุจจาระ มีเศษหินกรวดปะปน**, manure score 2–3. |
| `Copy of Copy of PSPS_roughage_evaluation_TH-1.xlsx` | Penn State Particle Separator workbook. **Only the "TMR 1" sheet holds real farm data** (750 g sample, 744 g recovered, 99.2%): top 16.4% / middle 26.9% / lower 22.5% / pan 33.3%; pef>8 = 43.3%. |
| `cattle-lameness-and-hoofcare-an-illustrated-guide.pdf` | Blowey reference text (17 MB). **Edition confirmed 2026-09-03**: 1st ed. (first published 1993, reprinted with alterations 1998), Farming Press, Ipswich, ISBN 0-85236-252-8 — read directly off the PDF's own copyright page. See "Verified reference sources" below for pages already extracted and cited. |
| `ThaiNRC.pdf` | **The real official Thai numeric dairy standard** (19 MB) — added 2026-09-02, mid-session. See sources section below; this superseded the report's earlier (wrong) claim that no such document exists. |
| `usa-farm-whiteline-case-report.md` | The main analytical deliverable (2026-09-02, revised same day after `ThaiNRC.pdf` was added, revised again 2026-09-03): links the case to the ration, PSPS result, and pen condition; compares feed to official standards (ThaiNRC primary, NASEM cross-check); ranks differentials (now led by the floor and by confirmed absent hoof care); states limitations and the tiered data-collection plan. |
| `usa-farm-whiteline-case-report.html` | **Standalone HTML rendering of the same report, added 2026-09-03.** Generated by converting the `.md` with `marked` (Node) and wrapping it in a styled, theme-aware local page (Sarabun font, styled tables/callouts/code blocks, working TOC anchors). This replaced the Artifact page as the presentation deliverable — see convention below. Regenerate by re-running the same conversion whenever the `.md` changes; there is no live/auto-sync between the two. |

## Standing conventions for this project (learned the hard way — do not re-litigate)

- **Do not publish this project's deliverables as Claude Artifacts — per explicit user instruction,
  2026-09-03.** The presentation format is a local standalone `.html` file sitting next to the
  `.md` source (see `usa-farm-whiteline-case-report.html` above), not a hosted Artifact page. The
  old Artifact URL (v3, `9489846a-...`) is now stale/abandoned — don't republish to it. If a new
  report needs an HTML rendering, generate it the same way (Node + `marked`, styled template) and
  write it to a local file, not the Artifact tool.
- **This project is pushed to GitHub at `Jirapat-S-P/usa-farm-whiteline-case` — and the repo is
  PUBLIC, not private.** It started private (2026-09-03, first push), then was deliberately
  switched to public the same day so GitHub Pages could serve the HTML report at a live URL
  (`https://jirapat-s-p.github.io/usa-farm-whiteline-case/usa-farm-whiteline-case-report.html`) —
  GitHub Pages has no private mode on this account tier. **This means the farm-critical findings
  in the report (GAP non-compliance, no footbath/trimming program, etc.) are now publicly
  readable.** The two reference PDFs (ThaiNRC, Blowey textbook) stay excluded via `.gitignore`
  regardless of visibility. If privacy needs to be restored, that means either disabling Pages and
  reverting to private, or removing/redacting identifying details first — don't silently re-flip
  visibility without flagging the tradeoff again, the same way it was flagged before this switch.
- **Label every number's provenance.** Each figure must be visibly marked as one of: *measured at
  this farm*, *from a standard table*, or *assumed*. This is the single thing that makes the work
  defensible in a coursework presentation, and it is the first thing an examiner attacks.
- **The corn-silage sheet in the PSPS workbook is practice data, not farm data.** The user
  confirmed this. Values 50/700/100/150 g on a 1000 g sample. **Exclude it from all analysis**
  and record its absence as a limitation.
- **Do not conclude SARA for this farm.** Forage is ~73% of DMI, rice straw alone ~41%, the PSPS
  bottom pan is *within* target, and concentrate is only 1–2 kg/cow. Now reinforced by a
  ThaiNRC-derived NDF estimate (~53% of DM, well above the 33% floor) — see below. The evidence
  points to **under-nutrition + sorting**, not acidosis. Contradicting evidence must be reported,
  not skipped. Conclusion status: unconfirmed either way — no rumen pH, no milk fat:protein ratio.
- **กากวิสกี้'s composition is now a committed working value, not a bracketed sensitivity range.**
  Neither WTSR nor ThaiNRC has a direct "กากวิสกี้" entry — WTSR's only near-match is *dehydrated*
  DDGS (87.2% DM), clearly wrong for a wet by-product sold by the sack. **As of 2026-09-03, per an
  explicit user instruction, the report/artifact use ThaiNRC table 15.1's กากเบียร์สด (brewer's
  grain, fresh) values directly for กากวิสกี้ throughout: DM 21.88% ± 3.41, CP 33.31%, NDF 55.28%,
  ADF 25.31% (n=47).** The old 3-row sensitivity table (10% / 21.88% analog / 87.2% DM) was
  deliberately removed — do not reintroduce it unless asked. Keep exactly one caveat sentence
  wherever the value is used: it's a same-country wet-fermentation analog (different base grain —
  barley for beer vs. rice/molasses for Thai whisky), not a direct measurement of this farm's
  กากวิสกี้. Measuring the real %DM (still item 1.1 in the report's data-to-collect list) now
  *refines* the working figure, it does not flip the conclusion.
- **This farm has no footbath program and no routine/scheduled hoof trimming at all** — confirmed
  by the user directly (2026-09-03), not from the original farm-visit txt files. **Reactive/ad-hoc
  trimming may still happen when a cow is visibly lame** (the 4 treated cases may have gotten
  corrective trimming as part of treatment) — don't claim hooves have literally never been
  touched, only that no *preventive* program exists. This resolved the report's former
  differential #6 ("ไม่มีข้อมูลเลย") into a confirmed finding and moved it up to **differential #2**
  (🟠 สูง): no trimming lets claws overgrow uncorrected, shifting weight-bearing and increasing
  shear at the white line independent of floor condition; no footbath means no periodic
  disinfection/hardening while claws sit in the gravelly wet pen documented separately. Report
  §12 now opens with starting a footbath program and a preventive trimming schedule as the two
  highest-priority, lowest-cost recommendations, ahead of the diet changes.
- **The gravel's source is now confirmed: the concrete floor in the lactating-cow pen (คอกโครีด)
  broke down into potholes ~2 weeks before this fact was reported (2026-09-03), with a large
  amount of gravel sitting in the holes — the farm has since repaired the floor.** User-supplied,
  not in the original farm-visit files. This resolves the report's "ไม่ทราบแหล่งที่มาของหิน" gap
  (differential #1, §9) and is a near-verbatim match to Blowey's own description of the mechanism
  (p. 73: "damaged and pitted concrete...can give rise to small stones which can become impacted
  in the white line"). **Open questions this raises — don't silently drop them:** (1) the damage
  is specific to the lactating-cow pen; unknown whether the affected heifer (โคสาว) was ever
  exposed to that specific floor, which matters because the report leans on "she got sick too" as
  evidence the cause affects all groups equally; (2) unknown whether other pens have similar
  damage; (3) unknown whether the 4 cases' onset dates fall inside the ~2-week pothole window
  (would be strong temporal evidence, not just cross-sectional association); (4) unknown whether
  the repair removed the embedded gravel or just resurfaced over it. All four are now tracked as
  limitation items 31-34 and data-collection item 1.14 in the report. The already-completed repair
  is also flagged in §11 item 3.3 and §12 recommendation #1 as an accidental natural-experiment
  opportunity — get before/after incidence data if at all possible.
- **Prefer converting a missing measurement into a testable threshold, then firm it up with a
  same-country analog if one exists** — don't stop at the threshold if better data turns up.
  Worked example: pef>8 = 43.3% measured → TMR needs NDF ≥ 42.7% DM to clear Zebeli's
  peNDF>8 ≥ 18.5% (threshold, no data needed). Once ThaiNRC ingredient NDF values were available,
  this became an actual estimate: NDF ≈ 53.3% DM, peNDF>8 ≈ 23.1% — comfortably clears both the
  Zebeli and the ThaiNRC (>33%) floors. This is a *formulated-ration* estimate, not consumed
  intake — it downgrades "send TMR for NDF analysis" and upgrades "measure sorting/orts" as the
  next priority, since the ration's fiber adequacy is no longer the open question.
- **Distinguish detected cases from prevalence.** 4 cases ÷ 40 cows is *not* 10% prevalence; no
  whole-herd locomotion scoring has been done, so ascertainment bias is uncontrolled.

## Verified reference sources (checked online / from supplied files; reuse rather than re-searching)

- **ThaiNRC (2563/2020)** — *ความต้องการโภชนะของโคนมในประเทศไทย (Nutrient Requirements of Dairy
  Cattle in Thailand)*, คณะกรรมการความต้องการโภชนะโคนมในประเทศไทย, พิมพ์ครั้งที่ 1, สำนักพัฒนา
  อาหารสัตว์ กรมปศุสัตว์ (funded by สวก. — ARDA), Khon Kaen University Press, 260 pp,
  ISBN 9786163584724. Supplied as `ข้อมูลอุษาฟาร์ม/ThaiNRC.pdf` (not found online during search —
  user provided the file directly). **This is the numeric Thai dairy standard; it is the primary
  source for the case report, with NASEM (2021) now only a cross-check.** It corrects the report's
  earlier claim (still visible in old drafts/backups) that no such document exists.
  - **Extraction caveat:** table 14.1 and 14.11–14.14 (worked ration examples) and all of chapter
    15 (feedstuff composition) extract cleanly as text via `pdftotext -enc UTF-8 -layout`. **Tables
    14.2–14.10** (lactating-cow requirement by week postpartum × heat-stress level) **are images —
    `pdftotext` returns blank cells.** Don't re-attempt extracting them the same way; either read
    the PDF visually or request the tables from the publisher.
  - **Table 14.13** (worked ration, 450 kg cow, 12 wk postpartum, 3.5% fat / 3.0% protein, at 12
    and 18 kg milk/d) is the closest match to this farm and the one actually used: DMI 13.1 kg
    (12 kg milk) / 15.2 kg (18 kg milk); CP 14.3–15.3% / 17.2–18.1% DM; NDF > 33%; ADF > 21%;
    Ca 0.62%; P 0.32%. Its example rations use **กากเบียร์สด (wet brewer's grain) at 20–25% as-fed**
    — the direct precedent for treating it as a กากวิสกี้ analog.
  - **Table 15.1** (dairy-specific feedstuff composition, Livestock Region 19 field samples,
    large n) values in use: corn silage (ข้าวโพดสำหรับหมัก) DM 26.09 / CP 8.43% / NDF 61.83% /
    ADF 34.31% (n=224–235) · rice straw DM 91.88 / CP 4.14% / NDF 68.49% / ADF 43.34% (n≈100) ·
    soybean meal DM 88.47 / CP 47.23% / NDF 14.32% / ADF 10.56% (n≈190) · **กากเบียร์สด
    (brewer's grain, fresh) DM 21.88 ± 3.41 / CP 33.31% / NDF 55.28% / ADF 25.31% (n=47)** — the
    กากวิสกี้ analog. No molasses entry exists in ThaiNRC's 27-item table — WTSR (2551) still
    supplies that one value.
  - **Table 7.1** (mineral requirements) is explicitly sourced by ThaiNRC itself to NRC (2001) —
    the document states Thailand lacks its own mineral-requirement data. Zn 30 mg/kg, Cu 10 mg/kg,
    Mn 20 mg/kg DM. This is a citable justification for using NRC/NASEM on micromineral questions.
  - **Chapter 2** gives the DMI equations actually behind the chapter-14 tables: Kearl (1982)
    DMI = 0.105·BW^0.75 (dry cow), 0.108·BW^0.75 (heifer, +3%); NRC (2001) FCM-based equation for
    lactating cows. Chapter 14's tables are also split by heat-stress level (low/high) — ThaiNRC
    accounts for tropical heat stress in a way NASEM does not, worth citing even though the
    per-table numbers behind that split are the ones lost to the image-table extraction issue.
- **WTSR (2551/2008)** — *ความต้องการโภชนะของโคเนื้อในประเทศไทย*, คณะทำงานจัดทำมาตรฐานอาหารสัตว์
  เคี้ยวเอื้องของประเทศไทย, กรมปศุสัตว์.
  <https://nutrition.dld.go.th/images/knowledge/NRCthai2008.pdf> — **beef cattle**, kept in the
  report only for molasses (the one ingredient ThaiNRC's table doesn't cover). No longer the
  primary feed-composition source — superseded by ThaiNRC table 15.1 wherever both overlap.
- **มกษ. 6402-2562 (TAS 6402-2019)** GAP ฟาร์มโคนม, มกอช. — ราชกิจจานุเบกษา เล่ม 137 ตอนพิเศษ 12 ง,
  15 มกราคม 2563. Clauses used: **1.3.3** (พื้นต้องเรียบ ไม่ลื่น ระบายน้ำได้ดี — the farm fails all
  four parts), 1.3.1 (no sharp protrusions), 1.3.2 (space per animal), 2.2.1 (adequate feed per
  stage), 5 (welfare of sick animals), 6.1 (manure/waste management), 7.1–7.2 (records, keep 3 yr).
- NASEM (2021) values currently cited came via the MSD Veterinary Manual summary, **not** the
  original — verify against the source before final presentation. Now cross-check only.
- Zebeli et al. (2012) *J. Dairy Sci.* 95:1041–1056 (peNDF>8 ≥ 18.5% DM) and Heinrichs & Kononoff,
  Penn State Extension (PSPS bands) — both are already cited inside the PSPS workbook itself.
- **Blowey, R.** *Cattle Lameness and Hoofcare: An Illustrated Guide.* 1st edition (first published
  1993, reprinted with alterations 1998), Farming Press, Ipswich, ISBN 0-85236-252-8. Supplied as
  `cattle-lameness-and-hoofcare-an-illustrated-guide.pdf`. **Edition confirmed 2026-09-03** from
  the PDF's own copyright page — it's a straight text-based scan, `pdftotext -enc UTF-8 -layout`
  extracts it cleanly (unlike ThaiNRC's image-only tables 14.2–14.10). Pages already mined and
  cited in `usa-farm-whiteline-case-report.md` §8: pp. 7-8 (white line anatomy: non-pigmented
  cemented junction, no horn tubules, incompletely keratinized), pp. 14-17 (laminitis → pedal bone
  sinks → corium displaced laterally → white line enlarged/weakened → increased WLD risk — this is
  a *metabolic* pathway to WLD, not just to sole ulcer), pp. 39-44 (WLD chapter: 4 infection
  entry-point sites ranked heel < abaxial-1st-third < toe < axial by severity, Figure 5.1;
  treatment), pp. 62-65 (concentrate:forage should not exceed 60:40, NDF <40% = risk — independent
  hoof-specific benchmark), pp. 66-67 (Zn/Cu/biotin evidence explicitly called "often
  contradictory" by the author, effect "likely limited" vs. other factors), pp. 72-74 (damaged
  concrete/flint aggregate → WLD + sole penetration; sharp turns/pivoting expand and weaken the
  white line; wet conditions nearly double hoof moisture; "soft sole syndrome" in heifers newly
  introduced to concrete/cubicle housing, sometimes with WLD at the toe). Reuse these page numbers
  rather than re-extracting — this book does not have the ThaiNRC image-table problem.

## Domain knowledge covered so far (lives in chat history, not in any file)

- **Hoof exam sequence**: locomotion scoring → interdigital space → heel → sole → wall →
  overall shape → coronary band. Frameworks: ICAR Claw Health Atlas (lesion scoring) + Dutch
  5-step method (Toussaint-Raven, functional trimming).
- **A/B/C/D standard hoof dimensions**: A = toe length (75mm classic, 83–90mm recommended per
  Archer et al. 2015); B = toe height (~60–67mm, derived); C = heel height (~45–49mm post-trim,
  32–49mm range across studies); D = toe/foot angle (45–52° optimal). Min sole thickness 5mm at
  toe tip, ~8mm average wall thickness. Coronary band assessed clinically, not by a numeric target.
- **Sole ulcer therapeutic trimming protocol**: functional trim both claws → debride ulcer →
  thin sole around (not under) the lesion → offload weight via hoof block on the healthy claw →
  NSAID, no bandaging → recheck ~35 days. Trim+block+NSAID ≈ 4.5x higher healing success vs. trim alone.
- **Sole ulcer vs. white line ulcer — key distinction** (illustrated with a diagram in-chat):
  - *Sole ulcer*: site = sole/heel junction, abaxial, lateral hind claw. Mechanism = P3
    compression/rotation from digital cushion thinning + suspensory apparatus laxity
    (peripartum relaxin effect, SARA-driven laminitis). Peaks 60–120 DIM. Linked risk factors:
    transition/fresh-cow management, overconditioning in the dry period, metritis/mastitis.
  - *White line ulcer/disease*: site = along the white line, abaxial wall. Mechanism = mechanical
    shearing force (turning, slipping, hard/sharp flooring) separating the white line, which then
    tracks infection upward to abscess/erupt. Not tied to a specific DIM window; driven by flooring
    and cow-flow rather than metabolic status. **A case in a heifer argues for this mechanism over
    sole ulcer**, since heifers have not been through full transition-period metabolic stress.

## Environment notes (Windows) — non-obvious tooling facts

- **`python` / `python3` are the Windows Store stubs and will fail.** Do not reach for Python.
- **`node` is available** (`C:\Program Files\nodejs\node.exe`) — use it for arithmetic checks and
  data transforms.
- **`pdftotext` is available; `pdftoppm` is NOT.** So `pdftotext -enc UTF-8 in.pdf out.txt` works
  for text extraction, but the Read tool cannot render PDF pages (it needs pdftoppm) — that is why
  the Blowey PDF edition is still unverified.
- **For any PDF with tables, always also try `pdftotext -enc UTF-8 -layout in.pdf out.txt`.**
  Plain `pdftotext` collapses wide tables into blank/jumbled lines (numbers present in the PDF but
  lost); `-layout` preserves column position and recovered ThaiNRC's chapter 14/15 tables that
  plain mode returned empty. Some tables are still genuinely images with no text layer at all
  (ThaiNRC tables 14.2–14.10) — `-layout` won't fix that; check the actual character count of the
  output before concluding a table is unreadable.
- **To read `.xlsx` without Python**, open the zip in-memory from PowerShell and parse the sheet
  XML — avoids extracting files and works with the Thai paths:
  `[System.IO.Compression.ZipFile]::OpenRead($path)`, then read `xl/sharedStrings.xml`,
  `xl/workbook.xml`, and `xl/worksheets/sheetN.xml`. Cell `t="s"` means the value indexes into
  sharedStrings.
- **Thai filenames and folder names are used throughout.** Quote every path. Long heredocs through
  the Bash tool can fail with `ENAMETOOLONG` — use the Write tool for large documents instead.

## Next steps (open)

- Detailed step-by-step walkthrough of the Dutch 5-step trimming method — not yet covered in depth.
- Deeper dive into digital dermatitis, if wanted (white line disease deep dive is done).
- **Confirm the Usa Farm data gaps** before the presentation — highest value first: %DM of
  กากวิสกี้ (now has a Thai analog via ThaiNRC's กากเบียร์สด, but still needs a direct measurement
  to settle feed adequacy for certain), whole-herd locomotion scoring (settles prevalence), and
  ICAR lesion recording at trimming (confirms the diagnosis and zone).
- **If more precision on lactating-cow requirements is needed**, the numbers behind ThaiNRC tables
  14.2–14.10 (by week postpartum × heat-stress level) are still inaccessible as text — worth
  opening the PDF visually or asking the instructor for the source tables if the presentation
  needs a DIM- or heat-stress-matched figure more exact than table 14.13 already gives.
- If real farm data gets collected with `farm-problem-list-lameness-whiteline.xlsx`, revisit
  `farm-data-analysis-template.xlsx` (or export to CSV for R/Python) once formal statistical
  testing of risk factors (chi-square, logistic regression / odds ratios) is needed.
