#!/usr/bin/env node
// Builds usa-farm-whiteline-case-presentation.pptx as a native PowerPoint deck,
// mirroring usa-farm-whiteline-case-presentation.html (17 slides). Diagrams are
// rebuilt as native PPTX shapes/text (not images) so they stay editable.

const path = require('path');
const pptxgen = require('pptxgenjs');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'usa-farm-whiteline-case-presentation.pptx');

const C = {
  bg: 'FAF8F4',
  card: 'FFFFFF',
  text: '2A2420',
  muted: '6B6058',
  border: 'E4DDD2',
  accent: '8A6D3B',
  accentStrong: '6B4F26',
  red: 'B3452F',
  orange: 'C07A2A',
  yellow: 'B99A2A',
  green: '4A8A5A',
  calloutBg: 'FDF3E0',
  calloutBorder: 'E0B366'
};
const FONT = 'Leelawadee UI';

const pres = new pptxgen();
pres.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 });
pres.layout = 'WIDE';

function newSlide() {
  const s = pres.addSlide();
  s.background = { color: C.bg };
  return s;
}

function addCard(s) {
  s.addShape(pres.ShapeType.roundRect, {
    x: 0.4, y: 0.35, w: 12.53, h: 6.8,
    rectRadius: 0.12,
    fill: { color: C.card },
    line: { color: C.border, width: 1 }
  });
}

function addTitle(s, text) {
  s.addText(text, {
    x: 0.75, y: 0.55, w: 12.0, h: 0.7,
    fontFace: FONT, fontSize: 24, bold: true, color: C.accentStrong
  });
  s.addShape(pres.ShapeType.line, {
    x: 0.75, y: 1.2, w: 11.8, h: 0,
    line: { color: C.accent, width: 2 }
  });
}

function addBullets(s, items, opts) {
  const paras = items.map((t) => ({
    text: t,
    options: { bullet: { code: '2022', indent: 18 }, breakLine: true }
  }));
  s.addText(paras, Object.assign({
    x: 0.9, y: 1.5, w: 11.3, h: 5.2,
    fontFace: FONT, fontSize: 16, color: C.text, valign: 'top',
    lineSpacingMultiple: 1.35
  }, opts || {}));
}

function addCallout(s, text, opts) {
  const o = Object.assign({ x: 0.9, y: 5.9, w: 11.3, h: 0.9 }, opts || {});
  s.addShape(pres.ShapeType.roundRect, {
    x: o.x, y: o.y, w: o.w, h: o.h, rectRadius: 0.08,
    fill: { color: C.calloutBg }, line: { color: C.calloutBorder, width: 1 }
  });
  s.addText(text, {
    x: o.x + 0.2, y: o.y, w: o.w - 0.4, h: o.h,
    fontFace: FONT, fontSize: 14, color: C.text, valign: 'middle'
  });
}

function addSubtle(s, text, y) {
  s.addText(text, {
    x: 0.9, y: y || 6.6, w: 11.3, h: 0.4,
    fontFace: FONT, fontSize: 11, color: C.muted, italic: true
  });
}

// ---------- Slide 0: Title ----------
{
  const s = newSlide();
  s.addShape(pres.ShapeType.roundRect, {
    x: 1.5, y: 2.2, w: 10.33, h: 0.5, rectRadius: 0.25,
    fill: { color: C.calloutBg }, line: { color: C.calloutBorder, width: 1 }
  });
  s.addText('Herd-level case investigation · hypothesis-generating, ไม่ใช่การพิสูจน์สาเหตุ', {
    x: 1.5, y: 2.2, w: 10.33, h: 0.5, align: 'center', valign: 'middle',
    fontFace: FONT, fontSize: 12, bold: true, color: C.accent
  });
  s.addText('White Line Abscess ที่อุษาฟาร์ม', {
    x: 1, y: 3.0, w: 11.33, h: 1.2, align: 'center',
    fontFace: FONT, fontSize: 40, bold: true, color: C.accentStrong
  });
  s.addText('การสอบสวนโรคระดับฝูง — โครีดนม 3 ตัว + โคสาว 1 ตัว · 2 กันยายน 2569', {
    x: 1, y: 4.2, w: 11.33, h: 0.6, align: 'center',
    fontFace: FONT, fontSize: 16, color: C.muted
  });
}

// ---------- Slide 1: เคสที่พบ ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '1. เคสที่พบ');
  const tiles = [
    ['3', 'โครีดนม (lactating)'],
    ['1', 'โคสาว (heifer)'],
    ['4', 'รวม — white line abscess']
  ];
  const tw = 3.6, gap = 0.3, startX = 0.9;
  tiles.forEach((t, i) => {
    const x = startX + i * (tw + gap);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 1.6, w: tw, h: 1.3, rectRadius: 0.08,
      fill: { color: C.bg }, line: { color: C.border, width: 1 }
    });
    s.addText(t[0], { x, y: 1.68, w: tw, h: 0.7, align: 'center', fontFace: FONT, fontSize: 34, bold: true, color: C.accentStrong });
    s.addText(t[1], { x, y: 2.35, w: tw, h: 0.5, align: 'center', fontFace: FONT, fontSize: 13, color: C.muted });
  });
  addCallout(s, '⚠️ 4 ตัวคือเคสที่สังเกตพบ (detected) ไม่ใช่ความชุก (prevalence) — ยังไม่ได้ทำ locomotion scoring ทั้งฝูง (40 ตัว)', { y: 3.4, h: 0.9 });
}

// ---------- Slide 2: คำถามของการสอบสวน ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '2. คำถามของการสอบสวน');
  addBullets(s, [
    'ข้อมูลอาหาร/PSPS/สภาพคอก อธิบายการเกิด white line abscess ได้อย่างไร',
    'สูตรอาหารเพียงพอต่อความต้องการโภชนะหรือไม่ เทียบมาตรฐานไทย (ThaiNRC)',
    'สาเหตุใดเป็นตัวขับหลัก สาเหตุใดเป็นเพียงปัจจัยโน้มนำ',
    'ต้องเก็บข้อมูลอะไรเพิ่ม จึงจะยืนยันสาเหตุที่แท้จริงได้'
  ]);
}

// ---------- Slide 3: ข้อมูลที่มี ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '3. ข้อมูลที่มี');
  const rows = [
    ['🟢', 'สูตร TMR รายวัน (ชั่ง/นับจากฟาร์ม)'],
    ['🟢', 'ผล PSPS ของ TMR (1 ซ้ำ)'],
    ['🟢', 'สภาพคอก: โคลน/อุจจาระหมักหมม + เศษหินกรวด'],
    ['🟢', 'ยืนยันแล้ว: ไม่มีโปรแกรมแต่งกีบป้องกัน/footbath เลย'],
    ['🟢', 'ยืนยันแล้ว: พื้นคอกโครีดพังเป็นหลุมเมื่อ ~2 สัปดาห์ก่อน (ซ่อมแล้ว)'],
    ['🟡', 'องค์ประกอบอาหาร — จากตาราง ThaiNRC (ไม่ได้วิเคราะห์ตัวอย่างฟาร์มนี้)'],
    ['🔴', 'BCS / DIM / parity / น้ำหนักตัว — ไม่มีข้อมูล']
  ];
  let y = 1.5;
  rows.forEach((r) => {
    s.addText(r[0], { x: 0.9, y, w: 0.5, h: 0.5, fontSize: 16 });
    s.addText(r[1], { x: 1.45, y, w: 10.6, h: 0.5, fontFace: FONT, fontSize: 15, color: C.text, valign: 'middle' });
    s.addShape(pres.ShapeType.line, { x: 0.9, y: y + 0.5, w: 11.15, h: 0, line: { color: C.border, width: 0.75 } });
    y += 0.62;
  });
}

// ---------- Slide 4: สูตรอาหาร: ได้รับเทียบความต้องการ ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '4. สูตรอาหาร: ได้รับเทียบความต้องการ');
  s.addChart(pres.ChartType.bar, [
    { name: 'ได้รับจริง', labels: ['DMI (กก./วัน)'], values: [12.29] },
    { name: 'ThaiNRC ต้องการ', labels: ['DMI (กก./วัน)'], values: [13.1] }
  ], {
    x: 0.8, y: 1.5, w: 5.6, h: 3.6, barDir: 'col', barGapWidthPct: 40,
    chartColors: [C.orange, C.red], showLegend: true, legendPos: 'b',
    showValue: true, dataLabelFontSize: 12, catAxisLabelFontSize: 12, valAxisLabelFontSize: 11,
    fontFace: FONT
  });
  s.addChart(pres.ChartType.bar, [
    { name: 'ได้รับจริง', labels: ['CP (% DM)'], values: [13.0] },
    { name: 'ThaiNRC ต้องการ', labels: ['CP (% DM)'], values: [14.3] }
  ], {
    x: 6.7, y: 1.5, w: 5.6, h: 3.6, barDir: 'col', barGapWidthPct: 40,
    chartColors: [C.orange, C.red], showLegend: true, legendPos: 'b',
    showValue: true, dataLabelFontSize: 12, catAxisLabelFontSize: 12, valAxisLabelFontSize: 11,
    fontFace: FONT
  });
  addCallout(s, '✅ NDF ประมาณการ ~53.3% (เกณฑ์ >33%) และ peNDF>8 ~23.1% (เกณฑ์ Zebeli 18.5%) — ผ่านสบาย', { y: 5.35, h: 0.7 });
  addSubtle(s, 'เกณฑ์: ThaiNRC (2563) ตาราง 14.13, โครีด 450 กก., นม 12 กก./วัน', 6.15);
}

// ---------- Slide 5: ผล PSPS ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '5. ผล PSPS — ขนาดอนุภาค TMR');
  const layers = [
    { label: 'ชั้นบน >19มม.', target: '2–8%', val: 16.4, pass: false },
    { label: 'ชั้นกลาง >8มม.', target: '30–50%', val: 26.9, pass: false },
    { label: 'ชั้นล่าง >4มม.', target: '10–20%', val: 22.5, pass: false },
    { label: 'ถาดล่าง <4มม.', target: '30–40%', val: 33.3, pass: true }
  ];
  let y = 1.55;
  const barMaxW = 7.0, barX = 4.3, scale = barMaxW / 40; // scale 0-40% to bar width
  layers.forEach((l) => {
    s.addText(`${l.label} (เกณฑ์ ${l.target})`, { x: 0.9, y, w: 3.3, h: 0.5, fontFace: FONT, fontSize: 13, color: C.text, valign: 'middle' });
    s.addShape(pres.ShapeType.rect, { x: barX, y: y + 0.05, w: barMaxW, h: 0.4, fill: { color: C.bg }, line: { color: C.border, width: 0.5 } });
    s.addShape(pres.ShapeType.rect, { x: barX, y: y + 0.05, w: Math.max(l.val * scale, 0.05), h: 0.4, fill: { color: l.pass ? C.green : C.red } });
    s.addText(`${l.val}% ${l.pass ? '✅' : '❌'}`, { x: barX + barMaxW + 0.15, y, w: 1.4, h: 0.5, fontFace: FONT, fontSize: 13, bold: true, color: l.pass ? C.green : C.red, valign: 'middle' });
    y += 0.68;
  });
  addCallout(s, '⟹ ชั้นบนสูงกว่าเกณฑ์ 2 เท่า = ความเสี่ยงคัดกิน (sorting) สูงมาก', { y: 4.6, h: 0.7 });
  addSubtle(s, 'ค่าที่วัดได้จริง n=1 (คู่มือ PSPS กำหนดให้ทำ ≥3 ซ้ำ — ยังไม่ทำ)', 5.5);
}

// ---------- Slide 6: สภาพคอก vs. มกษ. 6402 ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '6. สภาพคอก vs. มกษ. 6402-2562');
  addCallout(s, '"หลังการตรวจสอบพื้นที่คอกพบว่ามีการหมักหมมของโคลนและอุจจาระ มีเศษหินกรวดปะปน"', { y: 1.55, h: 0.9 });
  addBullets(s, [
    '❌ ข้อ 1.3.3 — พื้นต้องเรียบ ไม่ลื่น ระบายน้ำได้ดี — ผิดครบทั้ง 4 ประเด็นในข้อเดียว',
    '❌ ข้อ 1.3.1 — ห้ามมีวัสดุแหลมคมในโรงเรือน — เศษหินกรวดคือวัสดุแข็งคมที่โคเหยียบทุกวัน'
  ], { y: 2.75, h: 1.6 });
  addSubtle(s, 'นี่คือหลักฐานที่แข็งแรงที่สุดในรายงาน — การสังเกตโดยตรง เทียบข้อกำหนดทางการของไทย', 4.5);
}

// ---------- Slide 7: ข้อมูลใหม่ พื้นพัง ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '⭐ 7. ข้อมูลใหม่: พื้นคอกโครีดพังเป็นหลุม');
  const py = 2.4, x1 = 1.5, x2 = 6.6, x3 = 11.3;
  s.addShape(pres.ShapeType.line, { x: x1, y: py, w: x3 - x1, h: 0, line: { color: C.border, width: 3 } });
  [[x1, C.red, 'พื้นพังเป็นหลุม', 'หินกรวดในหลุมจำนวนมาก'],
   [x2, C.orange, '~2 สัปดาห์', ''],
   [x3, C.green, 'ซ่อมพื้นแล้ว', '(ปัจจุบัน)']
  ].forEach((n) => {
    s.addShape(pres.ShapeType.ellipse, { x: n[0] - 0.12, y: py - 0.12, w: 0.24, h: 0.24, fill: { color: n[1] } });
    s.addText(n[2], { x: n[0] - 1.3, y: py - 0.75, w: 2.6, h: 0.5, align: 'center', fontFace: FONT, fontSize: 14, bold: true, color: n[1] });
    if (n[3]) s.addText(n[3], { x: n[0] - 1.3, y: py + 0.2, w: 2.6, h: 0.5, align: 'center', fontFace: FONT, fontSize: 11, color: C.muted });
  });
  addCallout(s, 'ตรงกับกลไกที่ตำรามาตรฐาน Blowey (1993/1998, หน้า 73) อธิบายไว้แทบคำต่อคำ: "damaged and pitted concrete...give rise to small stones which can become impacted in the white line"', { y: 3.6, h: 1.1 });
  addSubtle(s, '⚠️ ยังไม่ยืนยัน: โคสาวที่ป่วยเคยเข้าคอกนี้หรือไม่ · 4 เคสเกิดในช่วงนี้พอดีหรือไม่', 5.0);
}

// ---------- Slide 8: กายวิภาคของ White Line ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '8. กายวิภาคของ White Line');
  // simplified hoof cross-section: outer wall arc (rect+rounded) + sole strip + white-line highlight
  s.addShape(pres.ShapeType.roundRect, { x: 1.0, y: 1.7, w: 3.6, h: 4.0, rectRadius: 0.9, fill: { color: C.bg }, line: { color: C.accent, width: 2.5 } });
  s.addShape(pres.ShapeType.rect, { x: 1.0, y: 5.0, w: 3.6, h: 0.35, fill: { color: C.red } });
  s.addText('ผนังกีบ (Wall)', { x: 1.0, y: 2.1, w: 3.6, h: 0.4, align: 'center', fontFace: FONT, fontSize: 13, bold: true, color: C.text });
  s.addText('พื้นกีบ (Sole)', { x: 1.0, y: 4.55, w: 3.6, h: 0.4, align: 'center', fontFace: FONT, fontSize: 13, bold: true, color: C.text });
  s.addText('White line', { x: 0.3, y: 5.45, w: 2.0, h: 0.4, fontFace: FONT, fontSize: 12, bold: true, color: C.red });
  s.addShape(pres.ShapeType.line, { x: 1.6, y: 5.35, w: 0.6, h: -0.2, line: { color: C.red, width: 1.25 } });

  addBullets(s, [
    'Cemented junction ระหว่าง horn ของผนังกีบกับพื้นกีบ',
    'ไม่มี pigment (จึงขาว) · ไม่มี horn tubules · keratinize ไม่สมบูรณ์',
    '⟹ จุดอ่อนโดยธรรมชาติของกีบทุกกีบ ไม่ใช่แค่กีบผิดปกติ',
    '(อ้างอิง: Blowey 1993/1998, หน้า 7-8, 39)'
  ], { x: 5.1, y: 2.0, w: 7.0 });
}

// ---------- Slide 9: กลไกเชิงกล ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '9. กลไกเชิงกล (Mechanical Pathway)');
  const steps = [
    'หินกรวด + โคลน/อุจจาระหมักหมม บนพื้นคอก',
    'ความชื้นสะสม → เขากีบอ่อนตัว · พื้นลื่น → แรงเฉือนที่กีบเพิ่มขึ้น',
    'White line แยกตัว จากแรงกด/แรงเฉือนของหินกรวด',
    'สิ่งสกปรก + เชื้อแบคทีเรียแทรกเข้ารอยแยก',
    'ติดเชื้อลุกลาม → หนองสะสม (abscess) → LAME'
  ];
  let y = 1.55;
  const stepH = 0.72;
  steps.forEach((t, i) => {
    s.addShape(pres.ShapeType.ellipse, { x: 0.9, y, w: 0.42, h: 0.42, fill: { color: C.accent } });
    s.addText(String(i + 1), { x: 0.9, y, w: 0.42, h: 0.42, align: 'center', valign: 'middle', fontFace: FONT, fontSize: 14, bold: true, color: 'FFFFFF' });
    s.addText(t, { x: 1.5, y: y - 0.05, w: 10.6, h: 0.55, fontFace: FONT, fontSize: 14.5, color: C.text, valign: 'middle' });
    if (i < steps.length - 1) {
      s.addShape(pres.ShapeType.line, { x: 1.11, y: y + 0.42, w: 0, h: stepH - 0.42, line: { color: C.border, width: 2, endArrowType: 'triangle' } });
    }
    y += stepH;
  });
  addSubtle(s, 'ซ้ำเติมด้วย: ไม่มีการแต่งกีบป้องกัน (กีบผิดรูปสะสม) + ไม่มี footbath (ไม่มีการฆ่าเชื้อเป็นระยะ)', 6.0);
}

// ---------- Slide 10: ทำไมไม่ใช่ SARA ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '10. ทำไมไม่ใช่ SARA');
  addBullets(s, [
    'อาหารหยาบสูงถึง ~73% ของ DMI (SARA มักเกิดจากอาหารข้นสูง)',
    'ถาดล่าง PSPS 33.3% ผ่านเกณฑ์ (เกณฑ์เตือน SARA คือ >40%)',
    'NDF ประมาณการ ~53% สูงกว่าเกณฑ์ ThaiNRC (>33%) มาก',
    'Concentrate:forage ~26:73 — ต่ำกว่าเกณฑ์อันตรายของ Blowey (60:40) มาก',
    'ไม่มีการวัด rumen pH หรือ milk fat:protein ratio เลย'
  ], { h: 3.6 });
  addCallout(s, 'หลักฐานชี้ไปทาง under-nutrition + sorting มากกว่า SARA', { y: 5.4, h: 0.7 });
}

// ---------- Slide 11: การจัดลำดับสาเหตุ ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '11. การจัดลำดับสาเหตุ (Differential)');
  const items = [
    ['1. พื้นคอกมีหินกรวด (mechanical)', 1.0, C.red, '🔴 สูงมาก'],
    ['2. ไม่มีแต่งกีบ/footbath ป้องกัน', 0.8, C.orange, '🟠 สูง'],
    ['3. TMR particle size → sorting', 0.8, C.orange, '🟠 สูง'],
    ['4. DM/CP ไม่พอ (under-nutrition)', 0.65, C.orange, '🟠 ปานกลาง-สูง'],
    ['5. บัฟเฟอร์/แร่ธาตุไม่พอ', 0.5, C.yellow, '🟡 ปานกลาง']
  ];
  let y = 1.6;
  const barMaxW = 6.5, barX = 5.3;
  items.forEach((it) => {
    s.addText(it[0], { x: 0.9, y, w: 4.3, h: 0.55, fontFace: FONT, fontSize: 14, color: C.text, valign: 'middle' });
    s.addShape(pres.ShapeType.rect, { x: barX, y: y + 0.08, w: barMaxW * it[1], h: 0.35, fill: { color: it[2] } });
    s.addText(it[3], { x: barX + barMaxW + 0.15, y, w: 1.7, h: 0.55, fontFace: FONT, fontSize: 13, bold: true, color: it[2], valign: 'middle' });
    y += 0.75;
  });
  addSubtle(s, 'ความยาวแท่ง = น้ำหนักหลักฐานเชิงคุณภาพ (ไม่ใช่ตัวเลขสถิติ) · เต็ม 10 อันดับในรายงาน §9', 5.9);
}

// ---------- Slide 12: แผนภาพเชื่อมโยง ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '12. แผนภาพเชื่อมโยง: จากสาเหตุถึงผลลัพธ์');
  const causes = [
    ['พื้นคอกหินกรวด + ความชื้น (คอนกรีตแตกเป็นหลุม)', C.red, '🔴 สูงมาก'],
    ['ไม่มีแต่งกีบ + ไม่มี footbath ป้องกันเลย', C.orange, '🟠 สูง'],
    ['TMR ชั้นบน 16.4% → การคัดกิน (sorting)', C.orange, '🟠 สูง'],
    ['DMI/CP ไม่พอ (under-nutrition)', C.orange, '🟠 ปานกลาง-สูง'],
    ['บัฟเฟอร์/แร่ธาตุไม่พอ (หลักฐานอ่อน)', C.yellow, '🟡 ปานกลาง']
  ];
  let y = 1.55;
  causes.forEach((c) => {
    s.addShape(pres.ShapeType.rect, { x: 0.9, y: y + 0.05, w: 0.12, h: 0.55, fill: { color: c[1] } });
    s.addText(c[0], { x: 1.15, y, w: 4.6, h: 0.65, fontFace: FONT, fontSize: 12, color: C.text, valign: 'middle' });
    s.addText(c[2], { x: 1.15, y: y + 0.4, w: 4.6, h: 0.3, fontFace: FONT, fontSize: 10, bold: true, color: c[1] });
    y += 0.82;
  });
  s.addShape(pres.ShapeType.line, { x: 6.0, y: 3.7, w: 1.0, h: 0, line: { color: C.accent, width: 4, endArrowType: 'triangle' } });
  s.addShape(pres.ShapeType.roundRect, { x: 7.1, y: 2.9, w: 2.5, h: 1.6, rectRadius: 0.1, fill: { color: C.calloutBg }, line: { color: C.accent, width: 2 } });
  s.addText('White line\nอ่อนแอ + แยกตัว\n→ ติดเชื้อ', { x: 7.2, y: 2.9, w: 2.3, h: 1.6, align: 'center', valign: 'middle', fontFace: FONT, fontSize: 13, bold: true, color: C.accentStrong });
  s.addShape(pres.ShapeType.line, { x: 9.7, y: 3.7, w: 0.55, h: 0, line: { color: C.accentStrong, width: 5, endArrowType: 'triangle' } });
  s.addShape(pres.ShapeType.roundRect, { x: 10.35, y: 2.9, w: 2.2, h: 1.6, rectRadius: 0.1, fill: { color: C.accentStrong } });
  s.addText('Abscess → LAME\n4 เคส\n(3 โครีด + 1 โคสาว)', { x: 10.4, y: 2.9, w: 2.1, h: 1.6, align: 'center', valign: 'middle', fontFace: FONT, fontSize: 12, bold: true, color: 'FFFFFF' });
  addSubtle(s, 'ความหนาของเส้น/ความกว้างแถบ = น้ำหนักหลักฐานเชิงคุณภาพ ไม่ใช่สัดส่วนเชิงปริมาณ · สรุปจากรายงาน §8-9', 6.9);
}

// ---------- Slide 13: ข้อจำกัดสำคัญ ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '13. ข้อจำกัดสำคัญ');
  addBullets(s, [
    'PSPS ทำเพียง 1 ซ้ำ (คู่มือกำหนด ≥3) — ยังไม่มีค่าความแปรปรวน',
    'ไม่มีผลวิเคราะห์อาหารจริงจากห้องแล็บแม้แต่ค่าเดียว — ทุกค่าอิงตารางมาตรฐาน',
    'ไม่ได้ทำ locomotion scoring ทั้งฝูง — 4 เคสยังไม่ใช่ความชุกที่แท้จริง',
    'Cross-sectional เยี่ยมฟาร์มครั้งเดียว ไม่มีกลุ่มเปรียบเทียบ — บอกได้แค่ association ไม่ใช่ causation'
  ]);
}

// ---------- Slide 14: ข้อเสนอแนะ ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '14. ข้อเสนอแนะเชิงปฏิบัติ');
  const steps = [
    'ตรวจสอบว่าการซ่อมพื้นคอกโครีดเอาหินกรวดออกหมดจริงหรือไม่ + ตรวจคอกอื่น',
    'เริ่มโปรแกรม footbath สม่ำเสมอ (ปัจจุบันไม่มีเลย)',
    'จัดตารางแต่งกีบป้องกันอย่างน้อยปีละ 2 ครั้ง',
    'สับฟางให้สั้นลง 2.5–5 ซม. เพื่อลด PSPS ชั้นบนและการคัดกิน'
  ];
  let y = 1.6;
  steps.forEach((t, i) => {
    s.addShape(pres.ShapeType.ellipse, { x: 0.9, y, w: 0.42, h: 0.42, fill: { color: C.accent } });
    s.addText(String(i + 1), { x: 0.9, y, w: 0.42, h: 0.42, align: 'center', valign: 'middle', fontFace: FONT, fontSize: 14, bold: true, color: 'FFFFFF' });
    s.addText(t, { x: 1.5, y: y - 0.05, w: 10.6, h: 0.6, fontFace: FONT, fontSize: 15, color: C.text, valign: 'middle' });
    y += 0.85;
  });
}

// ---------- Slide 15: สรุป ----------
{
  const s = newSlide(); addCard(s); addTitle(s, '15. สรุป');
  addBullets(s, [
    'พื้นคอกที่มีหินกรวด (ตอนนี้ทราบสาเหตุแล้ว: คอนกรีตแตกเป็นหลุม) คือหลักฐานที่แข็งแรงที่สุด',
    'ซ้ำเติมด้วยการไม่มีโปรแกรมดูแลกีบป้องกันเลย',
    'ขนาดอนุภาค TMR และแนวโน้ม under-nutrition เป็นปัจจัยโน้มนำ — ไม่ใช่ SARA'
  ], { h: 2.6 });
  addCallout(s, 'ทั้งหมดนี้ยังเป็นสมมติฐาน จนกว่าจะมี locomotion scoring ทั้งฝูงและติดตามอุบัติการณ์หลังซ่อมพื้น', { y: 4.3, h: 0.9 });
}

// ---------- Slide 16: Thank you ----------
{
  const s = newSlide();
  s.addText('ขอบคุณครับ/ค่ะ', {
    x: 1, y: 3.0, w: 11.33, h: 1.0, align: 'center',
    fontFace: FONT, fontSize: 36, bold: true, color: C.accentStrong
  });
  s.addText('คำถาม?', {
    x: 1, y: 4.0, w: 11.33, h: 0.6, align: 'center',
    fontFace: FONT, fontSize: 18, color: C.muted
  });
}

pres.writeFile({ fileName: OUT }).then(() => {
  console.log(`Built ${path.relative(ROOT, OUT)}`);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
