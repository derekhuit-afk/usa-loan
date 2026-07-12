/**
 * usa.loan compliance linter
 * Blocks build on any violation.
 *
 * Rules:
 *  1. Word count: 1,200–2,600 per post
 *  2. Reg Z: no "$X per month" patterns in prose
 *  3. Forbidden: AHFC, AnnieMac, rate digits
 *  4. NMLS: #203980 and #66247 required
 *  5. Internal links: ≥4 per post
 *  6. States field: required, ≥1 value
 *  7. Licensed states only
 *  8. DSCR disclosure if DSCR mentioned
 */
import { readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const LICENSED = ["alaska","florida","washington","georgia","illinois","indiana","michigan","montana","oklahoma","texas"];
const violations = [];

function fail(file, rule, excerpt = "") {
  violations.push({ file, rule, excerpt: excerpt.slice(0, 120) });
}
function prose(src) {
  return (src.match(/"([^"\\]{20,})"/g) || []).map(m => m.slice(1,-1)).join(" ");
}
function words(t) { return t.trim().split(/\s+/).filter(Boolean).length; }

let postFiles = [];
try { postFiles = readdirSync(join(ROOT,"content","posts")).filter(f=>f.endsWith(".ts")&&f!=="index.ts"); } catch {}

for (const file of postFiles) {
  const src = readFileSync(join(ROOT,"content","posts",file),"utf8");
  const p = prose(src);
  const wc = words(p);
  const tag = `content/posts/${file}`;

  if (wc < 1200 || wc > 2600) fail(tag, `Word count ${wc} outside 1,200–2,600 window`);

  for (const re of [/\$[\d,]+\s+per\s+month/gi, /\$[\d,.]+\s+monthly/gi, /\$[\d,.]+\s*\/\s*mo(nth)?\b/gi, /\$[\d,.]+\s+a\s+month/gi]) {
    const m = p.match(re);
    if (m) fail(tag, "Reg Z trigger: payment amount advertised", m[0]);
  }

  if (/AHFC/i.test(src)) fail(tag, "Forbidden: AHFC reference");
  if (/AnnieMac/i.test(src)) fail(tag, "Forbidden: AnnieMac reference");
  // Any decimal % with the symbol is forbidden; spelled-out "X.X percent" is
  // forbidden only in a finance-charge context (interest / APR / mortgage-rate).
  if (/\b\d+\.\d+\s*%/.test(p)) fail(tag, "Forbidden: rate/APR percentage in prose");
  // Proximity match: a decimal figure stated AS an interest rate/APR.
  // (Funding fees, property tax, income tax percentages are not trigger terms.)
  // Limitation: regex guardrail only — bare "rates near X.X percent" without an
  // interest/APR/mortgage qualifier is not caught; human review still applies.
  const rateNear = /(interest|APR|note\s+rate|mortgage\s+rate)[^.]{0,30}\b\d+\.\d+\s*percent\b|\b\d+\.\d+\s*percent\b[^.]{0,8}(interest|APR)/i;
  const proseStrings = (src.match(/"([^"\\]{20,})"/g) || []).map(m => m.slice(1,-1));
  for (const str of proseStrings) {
    if (rateNear.test(str)) {
      fail(tag, "Forbidden: decimal interest/APR percentage in prose", str);
    }
  }
  if (!src.includes("203980")) fail(tag, "Missing NMLS #203980");
  if (!src.includes("66247")) fail(tag, "Missing NMLS #66247");

  const links = (src.match(/href:\s*["']\//g)||[]).length;
  if (links < 4) fail(tag, `Fewer than 4 internal href: links (found ${links})`);

  if (!/states:\s*\[/.test(src)) {
    fail(tag, "Missing required states: [] field");
  } else {
    const m = src.match(/states:\s*\[([^\]]+)\]/);
    if (m) {
      const declared = (m[1].match(/"([^"]+)"/g)||[]).map(s=>s.replace(/"/g,"").toLowerCase());
      if (declared.length === 0) fail(tag, "states: [] field is empty — must declare ≥1 state");
      for (const s of declared) {
        if (!LICENSED.includes(s)) fail(tag, `Unlicensed state declared: "${s}"`);
      }
    }
  }

  if (/DSCR/i.test(p)) {
    if (!/dscr:\s*true/.test(src) && !/investment propert/i.test(p) && !/not available for primary/i.test(p)) {
      fail(tag, "DSCR mentioned without dscr flag or investment property disclosure");
    }
  }
}

if (violations.length === 0) {
  console.log(`✔ Compliance lint passed — ${postFiles.length} post(s) checked.`);
  process.exit(0);
} else {
  console.error(`\n${violations.length} violation(s). Nothing ships until these are fixed.\n`);
  for (const v of violations) {
    console.error(`  ${v.file} — ${v.rule}`);
    if (v.excerpt) console.error(`\n    ${v.excerpt}\n`);
  }
  console.error("\n✖ COMPLIANCE LINT FAILED — build blocked\n");
  process.exit(1);
}
