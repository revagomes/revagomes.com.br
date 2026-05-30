# Side Projects UI/SEO/AEO Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the modal-based side projects thumbnail grid with 14 visible work-cards across 3 semantic categories, fully optimised for SEO and AEO with schema.org JSON-LD.

**Architecture:** Pure HTML/CSS on a static single-page site — no build step. Changes go directly to `index.html` and `style.css`. Nine new SVG illustrations follow the `assets/img/work-0N-*.svg` visual pattern. Category sub-sections use `<section>` + `<h3>` + `schema.org/ItemList` JSON-LD. All modal markup removed. Existing project images (`.png`, `.jpg`) are kept; only GitHub-only projects get new SVGs.

**Tech Stack:** HTML5, Bootstrap 3 grid, CSS3, schema.org JSON-LD, SVG, `python3 -m http.server` for local preview.

---

## File Map

| File | Action |
|---|---|
| `assets/css/style.css` | Add `.section-intro`, `.side-projects-category`, `.on-hold-badge`, `.archived-badge`; remove dead `#side-projects` portfolio rules |
| `assets/img/drupal-tdd-skill.svg` | Create |
| `assets/img/ec-europa-drupal-quality.svg` | Create |
| `assets/img/cybersecurity-skills-gateway.svg` | Create |
| `assets/img/kiro-power-autonomous-dev.svg` | Create |
| `assets/img/kiro-power-ai-agent-security.svg` | Create |
| `assets/img/sshconfig.svg` | Create |
| `assets/img/peleia-braba.svg` | Create |
| `assets/img/caminhos-para-o-futuro.svg` | Create |
| `assets/img/novos-titans-programadores.svg` | Create |
| `index.html` | Replace `#side-projects` section (lines 505–582); remove `#portfolioModal1–6` (lines 635–835) |

---

## Task 1: CSS — Add new styles

**Files:**
- Modify: `assets/css/style.css`

- [ ] **Step 1: Add new CSS rules after line 248 (after `#side-projects` responsive block)**

Open `assets/css/style.css`. After the closing brace of the `@media (min-width: 767px)` block for `#side-projects` (around line 248), insert:

```css
/* =============================================
   Side Projects — category headings & intro
   ============================================= */

.section-intro {
  color: #888;
  font-size: 14px;
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 32px;
}

.side-projects-category {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #553576;
  margin: 36px 0 18px;
  padding-left: 12px;
  border-left: 3px solid #553576;
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.on-hold-badge,
.archived-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 2px 8px;
  border-radius: 3px;
  color: #fff;
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.on-hold-badge  { background: #b8860b; }
.archived-badge { background: #aaa; }
```

- [ ] **Step 2: Verify locally**

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` — page should look unchanged (new classes unused yet). Kill server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: add CSS for side projects category headings and status badges"
```

---

## Task 2: SVG illustrations — Drupal & CMS (purple)

**Files:**
- Create: `assets/img/drupal-tdd-skill.svg`
- Create: `assets/img/ec-europa-drupal-quality.svg`

- [ ] **Step 1: Create `assets/img/drupal-tdd-skill.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#322142"/>
      <stop offset="100%" stop-color="#553576"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(50,33,66,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="720" cy="60" r="130" fill="rgba(255,255,255,0.04)"/>
  <circle cx="720" cy="60" r="80" fill="rgba(255,255,255,0.04)"/>
  <!-- Terminal -->
  <rect x="55" y="45" width="470" height="275" rx="8" fill="rgba(0,0,0,0.42)" stroke="rgba(255,255,255,0.1)" stroke-width="1.5"/>
  <rect x="55" y="45" width="470" height="34" rx="8" fill="rgba(0,0,0,0.3)"/>
  <rect x="55" y="67" width="470" height="12" fill="rgba(0,0,0,0.3)"/>
  <circle cx="80" cy="62" r="5.5" fill="rgba(255,90,90,0.65)"/>
  <circle cx="98" cy="62" r="5.5" fill="rgba(255,195,0,0.65)"/>
  <circle cx="116" cy="62" r="5.5" fill="rgba(100,220,100,0.65)"/>
  <text x="290" y="66" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="10" font-family="monospace">NodeTest.php</text>
  <!-- FAIL block -->
  <text x="82" y="104" fill="rgba(255,90,90,0.9)" font-size="11" font-family="monospace" font-weight="bold">● FAIL  NodeTest::testPublishedStatus</text>
  <text x="82" y="122" fill="rgba(255,255,255,0.3)" font-size="10" font-family="monospace">  Expected: "published"</text>
  <text x="82" y="138" fill="rgba(255,255,255,0.3)" font-size="10" font-family="monospace">  Received: null</text>
  <!-- Arrow RED → GREEN -->
  <rect x="82" y="158" width="36" height="16" rx="3" fill="rgba(255,90,90,0.25)" stroke="rgba(255,90,90,0.5)" stroke-width="1"/>
  <text x="100" y="170" text-anchor="middle" fill="rgba(255,90,90,0.9)" font-size="10" font-family="monospace" font-weight="bold">RED</text>
  <text x="138" y="170" fill="rgba(255,255,255,0.35)" font-size="14" font-family="monospace">→</text>
  <rect x="158" y="158" width="52" height="16" rx="3" fill="rgba(100,220,100,0.2)" stroke="rgba(100,220,100,0.5)" stroke-width="1"/>
  <text x="184" y="170" text-anchor="middle" fill="rgba(100,220,100,0.9)" font-size="10" font-family="monospace" font-weight="bold">GREEN</text>
  <text x="230" y="170" fill="rgba(255,255,255,0.35)" font-size="14" font-family="monospace">→</text>
  <rect x="252" y="158" width="68" height="16" rx="3" fill="rgba(150,150,255,0.15)" stroke="rgba(150,150,255,0.4)" stroke-width="1"/>
  <text x="286" y="170" text-anchor="middle" fill="rgba(150,150,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">REFACTOR</text>
  <!-- PASS block -->
  <text x="82" y="200" fill="rgba(100,220,100,0.9)" font-size="11" font-family="monospace" font-weight="bold">✓ PASS  NodeTest::testPublishedStatus</text>
  <text x="82" y="218" fill="rgba(255,255,255,0.3)" font-size="10" font-family="monospace">  Tests: 3 passed (3 assertions)</text>
  <text x="82" y="234" fill="rgba(255,255,255,0.3)" font-size="10" font-family="monospace">  Duration: 0.38s</text>
  <text x="82" y="268" fill="rgba(255,255,255,0.12)" font-size="10" font-family="monospace">$ phpunit --filter NodeTest --colors=always</text>
  <!-- Right panel -->
  <rect x="564" y="58" width="178" height="232" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="653" y="84" text-anchor="middle" fill="rgba(255,255,255,0.2)" font-size="9" font-family="monospace" letter-spacing="2">AI-AGNOSTIC</text>
  <rect x="582" y="96" width="100" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
  <text x="582" y="114" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">Claude Code ✓</text>
  <text x="582" y="130" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">Cursor ✓</text>
  <text x="582" y="146" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">Cline ✓</text>
  <text x="582" y="162" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">Copilot ✓</text>
  <text x="653" y="210" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="8" font-family="monospace">Drupal 10 · PHP 8</text>
  <text x="653" y="226" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="8" font-family="monospace">PHPUnit · Behat</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 2: Create `assets/img/ec-europa-drupal-quality.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#322142"/>
      <stop offset="100%" stop-color="#553576"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(50,33,66,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="720" cy="60" r="130" fill="rgba(255,255,255,0.04)"/>
  <circle cx="720" cy="60" r="80" fill="rgba(255,255,255,0.04)"/>
  <!-- EU 12 stars in circle -->
  <circle cx="210" cy="175" r="90" fill="rgba(0,0,80,0.35)" stroke="rgba(255,220,0,0.25)" stroke-width="1"/>
  <circle cx="210" cy="175" r="65" fill="none" stroke="rgba(255,220,0,0.12)" stroke-width="1" stroke-dasharray="4,4"/>
  <!-- 12 stars at radius 70 -->
  <text x="210" y="112" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="245" y="121" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="273" y="148" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="280" y="182" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="270" y="216" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="244" y="240" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="210" y="249" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="176" y="240" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="150" y="216" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="140" y="182" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="150" y="148" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="176" y="121" text-anchor="middle" fill="rgba(255,220,0,0.75)" font-size="11">★</text>
  <text x="210" y="183" text-anchor="middle" fill="rgba(255,255,255,0.55)" font-size="11" font-family="monospace" letter-spacing="1">OpenEuropa</text>
  <!-- Quality gates panel -->
  <rect x="345" y="68" width="390" height="242" rx="6" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  <text x="540" y="94" text-anchor="middle" fill="rgba(255,255,255,0.25)" font-size="9" font-family="monospace" letter-spacing="2">QUALITY GATES</text>
  <!-- Gate rows -->
  <rect x="368" y="108" width="344" height="28" rx="3" fill="rgba(100,220,100,0.08)"/>
  <text x="384" y="126" fill="rgba(100,220,100,0.85)" font-size="11" font-family="monospace">✓</text>
  <text x="402" y="126" fill="rgba(255,255,255,0.65)" font-size="11" font-family="monospace">PHPCS</text>
  <rect x="620" y="113" width="72" height="16" rx="2" fill="rgba(100,220,100,0.2)"/>
  <text x="656" y="125" text-anchor="middle" fill="rgba(100,220,100,0.9)" font-size="9" font-family="monospace">PASS</text>
  <rect x="368" y="144" width="344" height="28" rx="3" fill="rgba(100,220,100,0.08)"/>
  <text x="384" y="162" fill="rgba(100,220,100,0.85)" font-size="11" font-family="monospace">✓</text>
  <text x="402" y="162" fill="rgba(255,255,255,0.65)" font-size="11" font-family="monospace">PHPStan</text>
  <rect x="620" y="149" width="72" height="16" rx="2" fill="rgba(100,220,100,0.2)"/>
  <text x="656" y="161" text-anchor="middle" fill="rgba(100,220,100,0.9)" font-size="9" font-family="monospace">PASS</text>
  <rect x="368" y="180" width="344" height="28" rx="3" fill="rgba(100,220,100,0.08)"/>
  <text x="384" y="198" fill="rgba(100,220,100,0.85)" font-size="11" font-family="monospace">✓</text>
  <text x="402" y="198" fill="rgba(255,255,255,0.65)" font-size="11" font-family="monospace">PHPUnit</text>
  <rect x="620" y="185" width="72" height="16" rx="2" fill="rgba(100,220,100,0.2)"/>
  <text x="656" y="197" text-anchor="middle" fill="rgba(100,220,100,0.9)" font-size="9" font-family="monospace">PASS</text>
  <rect x="368" y="216" width="344" height="28" rx="3" fill="rgba(100,220,100,0.08)"/>
  <text x="384" y="234" fill="rgba(100,220,100,0.85)" font-size="11" font-family="monospace">✓</text>
  <text x="402" y="234" fill="rgba(255,255,255,0.65)" font-size="11" font-family="monospace">Behat</text>
  <rect x="620" y="221" width="72" height="16" rx="2" fill="rgba(100,220,100,0.2)"/>
  <text x="656" y="233" text-anchor="middle" fill="rgba(100,220,100,0.9)" font-size="9" font-family="monospace">PASS</text>
  <text x="540" y="285" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="9" font-family="monospace">Drupal · PHP 8 · EC Europa config</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 3: Verify SVGs in browser**

Open `assets/img/drupal-tdd-skill.svg` and `assets/img/ec-europa-drupal-quality.svg` directly in a browser tab. Both should show recognisable purple-gradient illustrations.

- [ ] **Step 4: Commit**

```bash
git add assets/img/drupal-tdd-skill.svg assets/img/ec-europa-drupal-quality.svg
git commit -m "feat: add SVG illustrations for Drupal TDD Skill and EC Europa Drupal Quality"
```

---

## Task 3: SVG illustrations — AI & Developer Tools (green)

**Files:**
- Create: `assets/img/cybersecurity-skills-gateway.svg`
- Create: `assets/img/kiro-power-autonomous-dev.svg`
- Create: `assets/img/kiro-power-ai-agent-security.svg`
- Create: `assets/img/sshconfig.svg`

- [ ] **Step 1: Create `assets/img/cybersecurity-skills-gateway.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#10302a"/>
      <stop offset="100%" stop-color="#1e7a5e"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(16,48,42,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="700" cy="55" r="130" fill="rgba(255,255,255,0.04)"/>
  <circle cx="700" cy="55" r="80" fill="rgba(255,255,255,0.04)"/>
  <!-- Shield shape -->
  <path d="M 200 70 L 320 70 L 320 185 Q 320 250 260 275 Q 200 250 200 185 Z" fill="rgba(30,122,94,0.25)" stroke="rgba(100,255,200,0.4)" stroke-width="2"/>
  <path d="M 215 88 L 305 88 L 305 183 Q 305 235 260 255 Q 215 235 215 183 Z" fill="rgba(30,122,94,0.15)" stroke="rgba(100,255,200,0.2)" stroke-width="1"/>
  <!-- Lock icon inside shield -->
  <rect x="240" y="158" width="40" height="32" rx="4" fill="rgba(100,255,200,0.25)" stroke="rgba(100,255,200,0.6)" stroke-width="1.5"/>
  <path d="M 248 158 L 248 146 Q 248 130 260 130 Q 272 130 272 146 L 272 158" fill="none" stroke="rgba(100,255,200,0.6)" stroke-width="2"/>
  <circle cx="260" cy="174" r="5" fill="rgba(100,255,200,0.8)"/>
  <!-- 754 label -->
  <text x="260" y="220" text-anchor="middle" fill="rgba(255,255,255,0.7)" font-size="22" font-family="monospace" font-weight="bold">754</text>
  <text x="260" y="236" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace" letter-spacing="1">SKILLS</text>
  <!-- Network nodes -->
  <circle cx="460" cy="100" r="22" fill="rgba(30,122,94,0.3)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="460" y="104" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">MCP</text>
  <circle cx="560" cy="155" r="22" fill="rgba(30,122,94,0.3)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="560" y="159" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">AI</text>
  <circle cx="460" cy="210" r="22" fill="rgba(30,122,94,0.3)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="460" y="214" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">Agent</text>
  <circle cx="650" cy="100" r="22" fill="rgba(30,122,94,0.3)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="650" y="104" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">OWASP</text>
  <circle cx="680" cy="200" r="22" fill="rgba(30,122,94,0.3)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="680" y="204" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">Pentest</text>
  <!-- Connecting lines -->
  <line x1="322" y1="160" x2="438" y2="125" stroke="rgba(100,255,200,0.15)" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="322" y1="170" x2="438" y2="195" stroke="rgba(100,255,200,0.15)" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="482" y1="110" x2="538" y2="142" stroke="rgba(100,255,200,0.12)" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="582" y1="145" x2="628" y2="112" stroke="rgba(100,255,200,0.12)" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="582" y1="165" x2="658" y2="188" stroke="rgba(100,255,200,0.12)" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="482" y1="198" x2="538" y2="168" stroke="rgba(100,255,200,0.12)" stroke-width="1" stroke-dasharray="4,4"/>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 2: Create `assets/img/kiro-power-autonomous-dev.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#10302a"/>
      <stop offset="100%" stop-color="#1e7a5e"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(16,48,42,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="700" cy="55" r="130" fill="rgba(255,255,255,0.04)"/>
  <!-- Main trunk -->
  <line x1="120" y1="190" x2="220" y2="190" stroke="rgba(100,255,200,0.6)" stroke-width="2"/>
  <!-- Branch to agent 1 -->
  <line x1="220" y1="190" x2="340" y2="110" stroke="rgba(100,255,200,0.5)" stroke-width="1.5"/>
  <!-- Branch to agent 2 -->
  <line x1="220" y1="190" x2="340" y2="190" stroke="rgba(100,255,200,0.5)" stroke-width="1.5"/>
  <!-- Branch to agent 3 -->
  <line x1="220" y1="190" x2="340" y2="270" stroke="rgba(100,255,200,0.5)" stroke-width="1.5"/>
  <!-- Agent circles -->
  <circle cx="370" cy="110" r="28" fill="rgba(16,48,42,0.7)" stroke="rgba(100,255,200,0.5)" stroke-width="1.5"/>
  <text x="370" y="106" text-anchor="middle" fill="rgba(100,255,200,0.7)" font-size="9" font-family="monospace">Agent</text>
  <text x="370" y="118" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">#1</text>
  <circle cx="370" cy="190" r="28" fill="rgba(16,48,42,0.7)" stroke="rgba(100,255,200,0.5)" stroke-width="1.5"/>
  <text x="370" y="186" text-anchor="middle" fill="rgba(100,255,200,0.7)" font-size="9" font-family="monospace">Agent</text>
  <text x="370" y="198" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">#2</text>
  <circle cx="370" cy="270" r="28" fill="rgba(16,48,42,0.7)" stroke="rgba(100,255,200,0.5)" stroke-width="1.5"/>
  <text x="370" y="266" text-anchor="middle" fill="rgba(100,255,200,0.7)" font-size="9" font-family="monospace">Agent</text>
  <text x="370" y="278" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">#3</text>
  <!-- PR arrows to merge -->
  <line x1="398" y1="110" x2="520" y2="155" stroke="rgba(100,255,200,0.35)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="398" y1="190" x2="520" y2="175" stroke="rgba(100,255,200,0.35)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="398" y1="270" x2="520" y2="195" stroke="rgba(100,255,200,0.35)" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- PR badge -->
  <rect x="520" y="148" width="56" height="36" rx="4" fill="rgba(30,122,94,0.3)" stroke="rgba(100,255,200,0.35)" stroke-width="1"/>
  <text x="548" y="163" text-anchor="middle" fill="rgba(100,255,200,0.8)" font-size="9" font-family="monospace" font-weight="bold">3 PRs</text>
  <text x="548" y="177" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">review</text>
  <!-- Review arrow to merge trunk -->
  <line x1="576" y1="166" x2="650" y2="166" stroke="rgba(100,255,200,0.5)" stroke-width="2"/>
  <!-- Merge circle -->
  <circle cx="670" cy="166" r="18" fill="rgba(16,48,42,0.8)" stroke="rgba(100,255,200,0.7)" stroke-width="2"/>
  <text x="670" y="162" text-anchor="middle" fill="rgba(100,255,200,0.9)" font-size="8" font-family="monospace">merge</text>
  <text x="670" y="174" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="9" font-family="monospace">✓</text>
  <!-- Commit dot -->
  <circle cx="120" cy="190" r="8" fill="rgba(100,255,200,0.5)" stroke="rgba(100,255,200,0.8)" stroke-width="1.5"/>
  <text x="120" y="215" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">main</text>
  <!-- Label -->
  <text x="400" y="330" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="9" font-family="monospace" letter-spacing="1">git worktrees · parallel agents · PR review</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 3: Create `assets/img/kiro-power-ai-agent-security.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#10302a"/>
      <stop offset="100%" stop-color="#1e7a5e"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(16,48,42,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="700" cy="55" r="130" fill="rgba(255,255,255,0.04)"/>
  <!-- Blocked injection arrow from left -->
  <text x="62" y="170" fill="rgba(255,90,90,0.5)" font-size="10" font-family="monospace">⚠ INJECT</text>
  <line x1="60" y1="182" x2="195" y2="182" stroke="rgba(255,90,90,0.45)" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- Blocked X -->
  <circle cx="220" cy="182" r="22" fill="rgba(255,90,90,0.15)" stroke="rgba(255,90,90,0.5)" stroke-width="2"/>
  <line x1="208" y1="170" x2="232" y2="194" stroke="rgba(255,90,90,0.8)" stroke-width="2.5"/>
  <line x1="232" y1="170" x2="208" y2="194" stroke="rgba(255,90,90,0.8)" stroke-width="2.5"/>
  <!-- Shield (large, right-centre) -->
  <path d="M 340 60 L 560 60 L 560 210 Q 560 290 450 320 Q 340 290 340 210 Z" fill="rgba(30,122,94,0.2)" stroke="rgba(100,255,200,0.35)" stroke-width="2"/>
  <path d="M 358 78 L 542 78 L 542 208 Q 542 275 450 300 Q 358 275 358 208 Z" fill="rgba(30,122,94,0.1)" stroke="rgba(100,255,200,0.15)" stroke-width="1"/>
  <!-- Lock inside shield -->
  <rect x="425" y="168" width="50" height="40" rx="5" fill="rgba(100,255,200,0.2)" stroke="rgba(100,255,200,0.55)" stroke-width="1.5"/>
  <path d="M 432 168 L 432 152 Q 432 132 450 132 Q 468 132 468 152 L 468 168" fill="none" stroke="rgba(100,255,200,0.55)" stroke-width="2"/>
  <circle cx="450" cy="188" r="6" fill="rgba(100,255,200,0.8)"/>
  <!-- Labels inside shield -->
  <text x="450" y="116" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace" letter-spacing="1">PROTECTED</text>
  <text x="450" y="228" text-anchor="middle" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">prompt injection</text>
  <text x="450" y="242" text-anchor="middle" fill="rgba(100,255,200,0.5)" font-size="9" font-family="monospace" font-weight="bold">BLOCKED ✓</text>
  <!-- Right labels -->
  <rect x="600" y="90" width="155" height="150" rx="5" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="677" y="112" text-anchor="middle" fill="rgba(255,255,255,0.2)" font-size="9" font-family="monospace" letter-spacing="1">RULES</text>
  <text x="618" y="132" fill="rgba(100,255,200,0.55)" font-size="10" font-family="monospace">✓ Protected paths</text>
  <text x="618" y="150" fill="rgba(100,255,200,0.55)" font-size="10" font-family="monospace">✓ Inject defense</text>
  <text x="618" y="168" fill="rgba(100,255,200,0.55)" font-size="10" font-family="monospace">✓ Incident resp.</text>
  <text x="618" y="186" fill="rgba(100,255,200,0.55)" font-size="10" font-family="monospace">✓ Cmd policy</text>
  <text x="618" y="204" fill="rgba(100,255,200,0.55)" font-size="10" font-family="monospace">✓ Data handling</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 4: Create `assets/img/sshconfig.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#10302a"/>
      <stop offset="100%" stop-color="#1e7a5e"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(16,48,42,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="700" cy="55" r="130" fill="rgba(255,255,255,0.04)"/>
  <!-- config.d/ folder group -->
  <text x="80" y="85" fill="rgba(255,255,255,0.4)" font-size="10" font-family="monospace">~/.ssh/config.d/</text>
  <!-- File 1 -->
  <rect x="80" y="98" width="160" height="40" rx="4" fill="rgba(30,122,94,0.25)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="100" y="114" fill="rgba(100,255,200,0.7)" font-size="10" font-family="monospace">📄 work-server</text>
  <text x="100" y="130" fill="rgba(255,255,255,0.25)" font-size="9" font-family="monospace">Host work.example.com</text>
  <!-- File 2 -->
  <rect x="80" y="148" width="160" height="40" rx="4" fill="rgba(30,122,94,0.25)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="100" y="164" fill="rgba(100,255,200,0.7)" font-size="10" font-family="monospace">📄 personal</text>
  <text x="100" y="180" fill="rgba(255,255,255,0.25)" font-size="9" font-family="monospace">Host github.com</text>
  <!-- File 3 -->
  <rect x="80" y="198" width="160" height="40" rx="4" fill="rgba(30,122,94,0.25)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="100" y="214" fill="rgba(100,255,200,0.7)" font-size="10" font-family="monospace">📄 staging</text>
  <text x="100" y="230" fill="rgba(255,255,255,0.25)" font-size="9" font-family="monospace">Host staging.srv</text>
  <!-- Converging lines to arrow -->
  <line x1="240" y1="118" x2="330" y2="175" stroke="rgba(100,255,200,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="240" y1="168" x2="330" y2="175" stroke="rgba(100,255,200,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="240" y1="218" x2="330" y2="175" stroke="rgba(100,255,200,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- sshconfig update command -->
  <rect x="330" y="155" width="130" height="40" rx="5" fill="rgba(0,0,0,0.35)" stroke="rgba(100,255,200,0.45)" stroke-width="1.5"/>
  <text x="395" y="172" text-anchor="middle" fill="rgba(100,255,200,0.9)" font-size="10" font-family="monospace" font-weight="bold">sshconfig</text>
  <text x="395" y="186" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="10" font-family="monospace">update</text>
  <!-- Arrow to result -->
  <line x1="460" y1="175" x2="520" y2="175" stroke="rgba(100,255,200,0.6)" stroke-width="2"/>
  <polygon points="520,169 532,175 520,181" fill="rgba(100,255,200,0.6)"/>
  <!-- Resulting config -->
  <text x="542" y="110" fill="rgba(255,255,255,0.4)" font-size="10" font-family="monospace">~/.ssh/config</text>
  <rect x="542" y="120" width="210" height="110" rx="4" fill="rgba(0,0,0,0.35)" stroke="rgba(100,255,200,0.3)" stroke-width="1"/>
  <text x="558" y="140" fill="rgba(100,255,200,0.55)" font-size="9" font-family="monospace">Host work.example.com</text>
  <rect x="558" y="146" width="130" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
  <rect x="558" y="156" width="100" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
  <text x="558" y="176" fill="rgba(100,255,200,0.55)" font-size="9" font-family="monospace">Host github.com</text>
  <rect x="558" y="182" width="120" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
  <text x="558" y="202" fill="rgba(100,255,200,0.55)" font-size="9" font-family="monospace">Host staging.srv</text>
  <rect x="558" y="208" width="90" height="5" rx="2" fill="rgba(255,255,255,0.1)"/>
  <text x="400" y="310" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="9" font-family="monospace" letter-spacing="1">Node.js · CLI · SSH config management</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 5: Verify SVGs in browser**

Open all 4 SVG files directly in a browser tab. Each should display a clear green-gradient illustration representing the project.

- [ ] **Step 6: Commit**

```bash
git add assets/img/cybersecurity-skills-gateway.svg assets/img/kiro-power-autonomous-dev.svg assets/img/kiro-power-ai-agent-security.svg assets/img/sshconfig.svg
git commit -m "feat: add SVG illustrations for AI and Developer Tools projects"
```

---

## Task 4: SVG illustrations — Games, Community & Social Impact (blue)

**Files:**
- Create: `assets/img/peleia-braba.svg`
- Create: `assets/img/caminhos-para-o-futuro.svg`
- Create: `assets/img/novos-titans-programadores.svg`

- [ ] **Step 1: Create `assets/img/peleia-braba.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f233d"/>
      <stop offset="100%" stop-color="#1a5491"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(15,35,61,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="700" cy="55" r="130" fill="rgba(255,255,255,0.04)"/>
  <!-- Game board (6x5 grid) -->
  <rect x="70" y="60" width="390" height="260" rx="6" fill="rgba(0,0,0,0.35)" stroke="rgba(100,180,255,0.3)" stroke-width="1.5"/>
  <!-- Grid lines vertical -->
  <line x1="135" y1="60" x2="135" y2="320" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="200" y1="60" x2="200" y2="320" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="265" y1="60" x2="265" y2="320" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="330" y1="60" x2="330" y2="320" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="395" y1="60" x2="395" y2="320" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <!-- Grid lines horizontal -->
  <line x1="70" y1="112" x2="460" y2="112" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="70" y1="164" x2="460" y2="164" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="70" y1="216" x2="460" y2="216" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <line x1="70" y1="268" x2="460" y2="268" stroke="rgba(100,180,255,0.12)" stroke-width="1"/>
  <!-- Player 1 pieces (blue) -->
  <circle cx="102" cy="86" r="18" fill="rgba(26,84,145,0.7)" stroke="rgba(100,180,255,0.7)" stroke-width="1.5"/>
  <text x="102" y="90" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">10</text>
  <circle cx="167" cy="86" r="18" fill="rgba(26,84,145,0.7)" stroke="rgba(100,180,255,0.7)" stroke-width="1.5"/>
  <text x="167" y="90" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">5</text>
  <circle cx="232" cy="86" r="18" fill="rgba(26,84,145,0.7)" stroke="rgba(100,180,255,0.7)" stroke-width="1.5"/>
  <text x="232" y="90" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">3</text>
  <circle cx="102" cy="138" r="18" fill="rgba(26,84,145,0.7)" stroke="rgba(100,180,255,0.7)" stroke-width="1.5"/>
  <text x="102" y="142" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">B</text>
  <!-- Player 2 pieces (red) -->
  <circle cx="362" cy="294" r="18" fill="rgba(120,20,20,0.7)" stroke="rgba(255,120,100,0.7)" stroke-width="1.5"/>
  <text x="362" y="298" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">7</text>
  <circle cx="297" cy="294" r="18" fill="rgba(120,20,20,0.7)" stroke="rgba(255,120,100,0.7)" stroke-width="1.5"/>
  <text x="297" y="298" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">4</text>
  <circle cx="427" cy="294" r="18" fill="rgba(120,20,20,0.7)" stroke="rgba(255,120,100,0.7)" stroke-width="1.5"/>
  <text x="427" y="298" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">9</text>
  <circle cx="362" cy="242" r="18" fill="rgba(120,20,20,0.7)" stroke="rgba(255,120,100,0.7)" stroke-width="1.5"/>
  <text x="362" y="246" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-size="10" font-family="monospace" font-weight="bold">F</text>
  <!-- Right panel -->
  <rect x="500" y="68" width="250" height="215" rx="6" fill="rgba(0,0,0,0.28)" stroke="rgba(100,180,255,0.15)" stroke-width="1"/>
  <text x="625" y="94" text-anchor="middle" fill="rgba(255,255,255,0.25)" font-size="9" font-family="monospace" letter-spacing="2">REALTIME</text>
  <circle cx="540" cy="128" r="6" fill="rgba(100,255,100,0.7)"/>
  <text x="556" y="132" fill="rgba(255,255,255,0.5)" font-size="10" font-family="monospace">Player 1 connected</text>
  <circle cx="540" cy="152" r="6" fill="rgba(100,255,100,0.7)"/>
  <text x="556" y="156" fill="rgba(255,255,255,0.5)" font-size="10" font-family="monospace">Player 2 connected</text>
  <rect x="516" y="175" width="218" height="1" fill="rgba(255,255,255,0.08)"/>
  <text x="625" y="200" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="10" font-family="monospace">Socket.io · Node.js</text>
  <text x="625" y="218" text-anchor="middle" fill="rgba(255,255,255,0.18)" font-size="9" font-family="monospace">Node Knockout 2013</text>
  <text x="400" y="348" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="9" font-family="monospace" letter-spacing="1">Multiplayer · Stratego-like · Hackathon</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 2: Create `assets/img/caminhos-para-o-futuro.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f233d"/>
      <stop offset="100%" stop-color="#1a5491"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(15,35,61,0.7)"/>
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(100,180,255,0.6)"/>
      <stop offset="100%" stop-color="rgba(100,180,255,0.15)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <!-- Stars in sky -->
  <text x="120" y="80" fill="rgba(255,220,100,0.6)" font-size="14">★</text>
  <text x="220" y="55" fill="rgba(255,220,100,0.4)" font-size="10">★</text>
  <text x="320" y="70" fill="rgba(255,220,100,0.5)" font-size="12">★</text>
  <text x="160" y="110" fill="rgba(255,220,100,0.3)" font-size="8">★</text>
  <text x="270" y="95" fill="rgba(255,220,100,0.35)" font-size="9">★</text>
  <text x="400" y="60" fill="rgba(255,220,100,0.45)" font-size="11">★</text>
  <!-- Road/path (perspective) -->
  <path d="M 100 310 Q 260 260 400 180 Q 500 120 560 80" fill="none" stroke="url(#road)" stroke-width="40" stroke-linecap="round"/>
  <path d="M 100 310 Q 260 260 400 180 Q 500 120 560 80" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2" stroke-dasharray="12,8"/>
  <!-- Heart (ACF motto: "Let's be love to the world") -->
  <path d="M 430 200 C 430 190 418 182 410 190 C 402 182 390 190 390 200 C 390 218 410 230 410 230 C 410 230 430 218 430 200 Z" fill="rgba(255,100,150,0.6)" stroke="rgba(255,150,180,0.4)" stroke-width="1"/>
  <!-- Youth figures -->
  <circle cx="190" cy="250" r="12" fill="rgba(100,180,255,0.4)" stroke="rgba(100,180,255,0.6)" stroke-width="1"/>
  <line x1="190" y1="262" x2="190" y2="295" stroke="rgba(100,180,255,0.4)" stroke-width="2"/>
  <line x1="178" y1="275" x2="202" y2="275" stroke="rgba(100,180,255,0.4)" stroke-width="2"/>
  <circle cx="240" cy="235" r="12" fill="rgba(100,180,255,0.4)" stroke="rgba(100,180,255,0.6)" stroke-width="1"/>
  <line x1="240" y1="247" x2="240" y2="280" stroke="rgba(100,180,255,0.4)" stroke-width="2"/>
  <line x1="228" y1="260" x2="252" y2="260" stroke="rgba(100,180,255,0.4)" stroke-width="2"/>
  <!-- Laptop/tech symbol at horizon -->
  <rect x="530" y="90" width="50" height="34" rx="3" fill="rgba(100,180,255,0.2)" stroke="rgba(100,180,255,0.4)" stroke-width="1"/>
  <rect x="522" y="124" width="66" height="5" rx="2" fill="rgba(100,180,255,0.25)"/>
  <rect x="538" y="100" width="34" height="18" rx="1" fill="rgba(0,0,0,0.3)"/>
  <text x="555" y="113" text-anchor="middle" fill="rgba(100,255,200,0.6)" font-size="8" font-family="monospace">&gt;_</text>
  <!-- Right info panel -->
  <rect x="620" y="68" width="145" height="180" rx="5" fill="rgba(0,0,0,0.25)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <text x="692" y="90" text-anchor="middle" fill="rgba(255,255,255,0.2)" font-size="8" font-family="monospace" letter-spacing="2">ACF</text>
  <rect x="636" y="100" width="112" height="1" fill="rgba(255,255,255,0.08)"/>
  <text x="636" y="118" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">🎓 Educação</text>
  <text x="636" y="136" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">💻 Tecnologia</text>
  <text x="636" y="154" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">🤝 Humano</text>
  <text x="692" y="192" text-anchor="middle" fill="rgba(255,255,255,0.15)" font-size="8" font-family="monospace">BH · Brasil · 2021</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 3: Create `assets/img/novos-titans-programadores.svg`**

```xml
<svg width="800" height="380" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f233d"/>
      <stop offset="100%" stop-color="#1a5491"/>
    </linearGradient>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(15,35,61,0.7)"/>
    </linearGradient>
  </defs>
  <rect width="800" height="380" fill="url(#bg)"/>
  <circle cx="700" cy="55" r="130" fill="rgba(255,255,255,0.04)"/>
  <!-- Laptop/screen -->
  <rect x="70" y="80" width="360" height="220" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(100,180,255,0.25)" stroke-width="1.5"/>
  <rect x="70" y="80" width="360" height="28" rx="8" fill="rgba(0,0,0,0.3)"/>
  <rect x="70" y="96" width="360" height="12" fill="rgba(0,0,0,0.3)"/>
  <circle cx="92" cy="94" r="5" fill="rgba(255,90,90,0.55)"/>
  <circle cx="108" cy="94" r="5" fill="rgba(255,195,0,0.55)"/>
  <circle cx="124" cy="94" r="5" fill="rgba(100,220,100,0.55)"/>
  <!-- Code lines -->
  <text x="90" y="132" fill="rgba(100,180,255,0.7)" font-size="11" font-family="monospace">function</text>
  <text x="172" y="132" fill="rgba(255,255,255,0.55)" font-size="11" font-family="monospace">learnToCode() {</text>
  <text x="108" y="150" fill="rgba(100,255,200,0.6)" font-size="11" font-family="monospace">const future</text>
  <text x="202" y="150" fill="rgba(255,255,255,0.4)" font-size="11" font-family="monospace">= build();</text>
  <text x="108" y="168" fill="rgba(100,255,200,0.6)" font-size="11" font-family="monospace">return</text>
  <text x="158" y="168" fill="rgba(255,220,100,0.6)" font-size="11" font-family="monospace">"opportunity";</text>
  <text x="90" y="186" fill="rgba(255,255,255,0.35)" font-size="11" font-family="monospace">}</text>
  <!-- Progress bars -->
  <text x="90" y="216" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">HTML/CSS</text>
  <rect x="90" y="220" width="240" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
  <rect x="90" y="220" width="200" height="6" rx="3" fill="rgba(100,180,255,0.55)"/>
  <text x="90" y="240" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">JavaScript</text>
  <rect x="90" y="244" width="240" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
  <rect x="90" y="244" width="160" height="6" rx="3" fill="rgba(100,255,200,0.5)"/>
  <text x="90" y="264" fill="rgba(255,255,255,0.3)" font-size="9" font-family="monospace">Soft Skills</text>
  <rect x="90" y="268" width="240" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
  <rect x="90" y="268" width="220" height="6" rx="3" fill="rgba(255,220,100,0.5)"/>
  <!-- Laptop base -->
  <rect x="48" y="300" width="404" height="8" rx="4" fill="rgba(100,180,255,0.15)" stroke="rgba(100,180,255,0.2)" stroke-width="1"/>
  <!-- Graduation cap -->
  <polygon points="560,120 640,90 720,120 640,150" fill="rgba(26,84,145,0.5)" stroke="rgba(100,180,255,0.5)" stroke-width="1.5"/>
  <rect x="630" y="150" width="20" height="35" rx="2" fill="rgba(26,84,145,0.4)" stroke="rgba(100,180,255,0.3)" stroke-width="1"/>
  <line x1="680" y1="120" x2="720" y2="170" stroke="rgba(255,220,100,0.5)" stroke-width="2"/>
  <circle cx="720" cy="175" r="8" fill="rgba(255,220,100,0.4)" stroke="rgba(255,220,100,0.6)" stroke-width="1"/>
  <!-- Growth arrow -->
  <line x1="590" y1="260" x2="590" y2="185" stroke="rgba(100,255,200,0.4)" stroke-width="2"/>
  <polygon points="582,188 590,172 598,188" fill="rgba(100,255,200,0.6)"/>
  <text x="620" y="220" fill="rgba(255,255,255,0.25)" font-size="10" font-family="monospace">Career</text>
  <text x="620" y="238" fill="rgba(100,255,200,0.5)" font-size="10" font-family="monospace">paths ↗</text>
  <text x="400" y="348" text-anchor="middle" fill="rgba(255,255,255,0.12)" font-size="9" font-family="monospace" letter-spacing="1">Tech training · ACF · Belo Horizonte</text>
  <rect x="0" y="280" width="800" height="100" fill="url(#fade)"/>
</svg>
```

- [ ] **Step 4: Verify SVGs in browser**

Open all 3 SVG files directly in a browser tab.

- [ ] **Step 5: Commit**

```bash
git add assets/img/peleia-braba.svg assets/img/caminhos-para-o-futuro.svg assets/img/novos-titans-programadores.svg
git commit -m "feat: add SVG illustrations for Games, Community and Social Impact projects"
```

---

## Task 5: HTML — Replace #side-projects with section structure + Category 1

**Files:**
- Modify: `index.html` (lines 505–582, replace the entire `<section id="side-projects">` block)

- [ ] **Step 1: Replace the entire `#side-projects` section**

In `index.html`, find the block starting at `<!-- Side Projects -->` (around line 505) and ending at `</section>` (around line 582). Replace it entirely with:

```html
    <!-- Side Projects -->
    <section id="side-projects" class="section-gray-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2>Side Projects</h2>
            <hr class="star-primary">
            <p class="section-intro">A collection of open-source tools, Drupal resources, social impact initiatives, and creative projects built over the years — from browser extensions and AI agent skills to a multiplayer game, an NGO, and a punk band.</p>
          </div>
        </div>

        <!-- Drupal & CMS -->
        <section aria-label="Drupal and CMS projects">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="side-projects-category">Drupal &amp; CMS</h3>
            </div>
          </div>
          <div class="row work-grid">

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/WebSite">
                <div class="work-card-image">
                  <img src="./assets/img/oqueedrupal.png" class="work-img" alt="O que é Drupal? — Portuguese Drupal introduction website" itemprop="image">
                  <div class="work-image-overlay wh-dev">
                    <span class="work-category">CMS &middot; Community</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name"><span lang="pt">O que é Drupal?</span></h4>
                  <p class="work-role">Open Source &middot; Website</p>
                  <p class="work-desc" itemprop="description">A Portuguese localisation of the "What is Drupal?" community website, introducing Drupal to Brazilian and Portuguese-speaking developers.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Drupal</span>
                    <span class="tag">CMS</span>
                    <span class="tag">Portuguese</span>
                    <span class="tag">Design</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://oqueedrupal.org" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View Project <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/WebSite">
                <div class="work-card-image">
                  <img src="./assets/img/drupalizando.png" class="work-img" alt="Drupalizando — free Drupal video training platform" itemprop="image">
                  <div class="work-image-overlay wh-dev">
                    <span class="work-category">Training &middot; Video</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name"><span lang="pt">Drupalizando</span></h4>
                  <p class="work-role">Open Source &middot; Free Training Platform</p>
                  <p class="work-desc" itemprop="description">Free Drupal video training platform empowering individuals, small businesses, and NGOs to build websites. Access the course by sharing your skills with someone else.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Drupal</span>
                    <span class="tag">Training</span>
                    <span class="tag">Video</span>
                    <span class="tag">Design</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="http://drupalizando.com.br" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View Project <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/dhrome.png" class="work-img" alt="Dhrome — Chrome extension for Drupal developers" itemprop="image">
                  <div class="work-image-overlay wh-dev">
                    <span class="work-category">Chrome Extension</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">Dhrome</h4>
                  <p class="work-role">Open Source &middot; Browser Extension</p>
                  <p class="work-desc" itemprop="description">A Chrome browser extension for Drupal developers. Access Drupal documentation, module pages, and community resources directly from the address bar.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Chrome Extension</span>
                    <span class="tag">Drupal</span>
                    <span class="tag">JavaScript</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://dhrome.github.io/dhrome" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">Install Extension <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/drupal-tdd-skill.svg" class="work-img" alt="Drupal TDD Skill — provider-agnostic AI skill for test-driven Drupal development" itemprop="image">
                  <div class="work-image-overlay wh-dev">
                    <span class="work-category">AI Skill &middot; DevTools</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">Drupal TDD Skill</h4>
                  <p class="work-role">Open Source &middot; AI Agent Skill</p>
                  <p class="work-desc" itemprop="description">Provider-agnostic TDD workflow skill for Drupal development. Works with Claude Code, Cursor, Cline, Copilot, and any AI coding assistant that supports custom skills.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Drupal</span>
                    <span class="tag">TDD</span>
                    <span class="tag">AI</span>
                    <span class="tag">DevTools</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/drupal-tdd-skill" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/ec-europa-drupal-quality.svg" class="work-img" alt="EC Europa Drupal Quality — quality gates toolkit for OpenEuropa Drupal projects" itemprop="image">
                  <div class="work-image-overlay wh-dev">
                    <span class="work-category">Quality Gates &middot; PHP</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">EC Europa Drupal Quality</h4>
                  <p class="work-role">Open Source &middot; DevOps Toolkit</p>
                  <p class="work-desc" itemprop="description">Quality gates toolkit for OpenEuropa Drupal projects — integrates PHPCS, PHPStan, PHPUnit, and Behat with EC Europa configuration management standards.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Drupal</span>
                    <span class="tag">PHP</span>
                    <span class="tag">Quality</span>
                    <span class="tag">OpenEuropa</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/kiro-power-ec-europa-drupal-quality" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

          </div>
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Drupal & CMS Projects by Renato Vasconcellos Gomes",
            "itemListElement": [
              {"@type":"WebSite","position":1,"name":"O que é Drupal?","description":"A Portuguese localisation of the What is Drupal? community website.","url":"https://oqueedrupal.org","inLanguage":"pt"},
              {"@type":"WebSite","position":2,"name":"Drupalizando","description":"Free Drupal video training platform empowering individuals and small businesses.","url":"http://drupalizando.com.br","inLanguage":"pt"},
              {"@type":"SoftwareApplication","position":3,"name":"Dhrome","description":"A Chrome browser extension for Drupal developers.","url":"https://dhrome.github.io/dhrome","applicationCategory":"BrowserApplication","programmingLanguage":"JavaScript"},
              {"@type":"SoftwareApplication","position":4,"name":"Drupal TDD Skill","description":"Provider-agnostic TDD workflow skill for Drupal, compatible with Claude Code, Cursor, Cline, and Copilot.","url":"https://github.com/revagomes/drupal-tdd-skill","applicationCategory":"DeveloperApplication"},
              {"@type":"SoftwareApplication","position":5,"name":"EC Europa Drupal Quality","description":"Quality gates toolkit for OpenEuropa Drupal projects integrating PHPCS, PHPStan, PHPUnit, and Behat.","url":"https://github.com/revagomes/kiro-power-ec-europa-drupal-quality","applicationCategory":"DeveloperApplication","programmingLanguage":"PHP"}
            ]
          }
          </script>
        </section>

      </div>
    </section>
```

- [ ] **Step 2: Start local server and verify**

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/#side-projects`. You should see:
- Section heading "Side Projects" with intro paragraph
- "DRUPAL & CMS" category label with purple left border
- 5 work-cards in a responsive grid
- Each card: image, title, role line, description, tags, external link

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: replace side projects section with categorised work-cards — Category 1 Drupal & CMS"
```

---

## Task 6: HTML — Category 2 (AI & Developer Tools)

**Files:**
- Modify: `index.html` (inside the `#side-projects > .container`, after Category 1's `</section>`)

- [ ] **Step 1: Insert Category 2 before the closing `</div><!-- /.container -->` of #side-projects**

Locate the line `      </div>` that closes the `.container` div just before `    </section>` (the outer side-projects section close). Insert the following block before that closing `</div>`:

```html
        <!-- AI & Developer Tools -->
        <section aria-label="AI and Developer Tools projects">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="side-projects-category">AI &amp; Developer Tools</h3>
            </div>
          </div>
          <div class="row work-grid">

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/cybersecurity-skills-gateway.svg" class="work-img" alt="Cybersecurity Skills Gateway — 754 cybersecurity skills accessible via MCP for any AI agent" itemprop="image">
                  <div class="work-image-overlay wh-fullstack">
                    <span class="work-category">AI &middot; Security</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">Cybersecurity Skills Gateway</h4>
                  <p class="work-role">Open Source &middot; MCP Server</p>
                  <p class="work-desc" itemprop="description">MCP gateway giving any AI agent on-demand access to 754 cybersecurity skills — no local clone needed. Plug in and query the full library from any MCP-compatible assistant.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">AI</span>
                    <span class="tag">Security</span>
                    <span class="tag">MCP</span>
                    <span class="tag">DevTools</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/cybersecurity-skills-gateway" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/kiro-power-autonomous-dev.svg" class="work-img" alt="Kiro Power Autonomous Dev — parallel AI agent orchestration using git worktrees" itemprop="image">
                  <div class="work-image-overlay wh-fullstack">
                    <span class="work-category">AI Agents &middot; Automation</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">Kiro Power: Autonomous Dev</h4>
                  <p class="work-role">Open Source &middot; AI Orchestration Skill</p>
                  <p class="work-desc" itemprop="description">Orchestrate multiple AI agents in parallel using git worktrees. Each agent implements an independent task and opens a PR for human review — fully autonomous, fully auditable.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">AI Agents</span>
                    <span class="tag">Automation</span>
                    <span class="tag">Git</span>
                    <span class="tag">DevTools</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/kiro-power-autonomous-dev" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/kiro-power-ai-agent-security.svg" class="work-img" alt="Kiro Power AI Agent Security — prompt injection defense and protected paths for AI development" itemprop="image">
                  <div class="work-image-overlay wh-fullstack">
                    <span class="work-category">AI Security &middot; DevTools</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">Kiro Power: AI Agent Security</h4>
                  <p class="work-role">Open Source &middot; Security Skill</p>
                  <p class="work-desc" itemprop="description">Protect your codebase from prompt injection attacks, enforce write-protected paths, and establish security incident response protocols for AI-assisted development workflows.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">AI Security</span>
                    <span class="tag">DevTools</span>
                    <span class="tag">Prompt Injection</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/kiro-power-ai-agent-security" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="work-card-image">
                  <img src="./assets/img/sshconfig.svg" class="work-img" alt="sshconfig — Node.js CLI to manage SSH configuration files sanely" itemprop="image">
                  <div class="work-image-overlay wh-fullstack">
                    <span class="work-category">Node.js &middot; CLI</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">sshconfig</h4>
                  <p class="work-role">Open Source &middot; Node.js CLI</p>
                  <p class="work-desc" itemprop="description">Manage SSH config files sanely. Split SSH aliases into individual files under <code>~/.ssh/config.d/</code> instead of one giant config — then auto-concatenate with a single update command.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Node.js</span>
                    <span class="tag">CLI</span>
                    <span class="tag">SSH</span>
                    <span class="tag">DevTools</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/sshconfig" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

          </div>
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "AI and Developer Tools Projects by Renato Vasconcellos Gomes",
            "itemListElement": [
              {"@type":"SoftwareApplication","position":1,"name":"Cybersecurity Skills Gateway","description":"MCP gateway giving any AI agent on-demand access to 754 cybersecurity skills.","url":"https://github.com/revagomes/cybersecurity-skills-gateway","applicationCategory":"DeveloperApplication"},
              {"@type":"SoftwareApplication","position":2,"name":"Kiro Power: Autonomous Dev","description":"Orchestrate multiple AI agents in parallel using git worktrees, each implementing tasks and opening PRs.","url":"https://github.com/revagomes/kiro-power-autonomous-dev","applicationCategory":"DeveloperApplication"},
              {"@type":"SoftwareApplication","position":3,"name":"Kiro Power: AI Agent Security","description":"Protect codebases from prompt injection attacks and enforce write-protected paths in AI-assisted development.","url":"https://github.com/revagomes/kiro-power-ai-agent-security","applicationCategory":"DeveloperApplication"},
              {"@type":"SoftwareApplication","position":4,"name":"sshconfig","description":"Node.js CLI to manage SSH configuration files sanely by splitting aliases into individual files.","url":"https://github.com/revagomes/sshconfig","applicationCategory":"DeveloperApplication","programmingLanguage":"JavaScript"}
            ]
          }
          </script>
        </section>
```

- [ ] **Step 2: Verify in browser**

Reload `http://localhost:8080/#side-projects`. Category 2 with 4 green-overlay cards should appear below Category 1.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Category 2 AI & Developer Tools to side projects section"
```

---

## Task 7: HTML — Category 3 (Games, Community & Social Impact)

**Files:**
- Modify: `index.html` (inside `#side-projects > .container`, after Category 2's `</section>`)

- [ ] **Step 1: Insert Category 3 before the closing `</div><!-- /.container -->`**

```html
        <!-- Games, Community & Social Impact -->
        <section aria-label="Games, Community and Social Impact projects">
          <div class="row">
            <div class="col-lg-12">
              <h3 class="side-projects-category">Games, Community &amp; Social Impact</h3>
            </div>
          </div>
          <div class="row work-grid">

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/VideoGame">
                <div class="work-card-image">
                  <img src="./assets/img/peleia-braba.svg" class="work-img" alt="Peleia Braba — realtime multiplayer Stratego-like game built for Node Knockout hackathon" itemprop="image">
                  <div class="work-image-overlay wh-design">
                    <span class="work-category">Multiplayer &middot; Hackathon</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name"><span lang="pt">Peleia Braba</span></h4>
                  <p class="work-role">Node Knockout &middot; Multiplayer Game</p>
                  <p class="work-desc" itemprop="description">Realtime multiplayer Stratego-like game built for Node Knockout — the world's biggest Node.js hackathon. Powered by Socket.io for live board state and player moves.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Node.js</span>
                    <span class="tag">Socket.io</span>
                    <span class="tag">Multiplayer</span>
                    <span class="tag">Hackathon</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://github.com/revagomes/peleia-braba" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">View on GitHub <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/Organization">
                <div class="work-card-image">
                  <img src="./assets/img/caminhos-para-o-futuro.svg" class="work-img" alt="Associação Caminhos para o Futuro — NGO for education, technology, and human development in Brazil" itemprop="image">
                  <div class="work-image-overlay wh-design">
                    <span class="work-category">NGO &middot; Social Impact</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name"><span lang="pt">Associação Caminhos para o Futuro</span></h4>
                  <p class="work-role">NGO &middot; Belo Horizonte, Brazil &middot; est. 2021</p>
                  <p class="work-desc" itemprop="description">Non-profit providing education, technology training, and human development for socially vulnerable youth in Belo Horizonte. Logo designed by Reva.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">NGO</span>
                    <span class="tag">Education</span>
                    <span class="tag">Technology</span>
                    <span class="tag">Social Impact</span>
                    <span class="tag">Brazil</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://www.instagram.com/acaminhoparaofuturo" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">Follow on Instagram <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/EducationalOrganization">
                <div class="work-card-image">
                  <img src="./assets/img/novos-titans-programadores.svg" class="work-img" alt="Novos Titans Programadores — tech training programme for economically disadvantaged youth" itemprop="image">
                  <div class="work-image-overlay wh-design">
                    <span class="work-category">Education &middot; Tech Training</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name"><span lang="pt">Novos Titans Programadores</span></h4>
                  <p class="work-role">ACF &middot; Tech Training Programme</p>
                  <p class="work-desc" itemprop="description">Tech training programme by ACF teaching software development and soft skills to economically disadvantaged youth, opening pathways to careers in technology.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Education</span>
                    <span class="tag">Tech Training</span>
                    <span class="tag">NGO</span>
                    <span class="tag">Youth</span>
                    <span class="tag">Brazil</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <span class="on-hold-badge">On Hold</span>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/Organization">
                <div class="work-card-image">
                  <img src="./assets/img/nomastersproject.png" class="work-img" alt="No Masters Project — global libertarian mutual support network" itemprop="image">
                  <div class="work-image-overlay wh-design">
                    <span class="work-category">Community &middot; DIY</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">No Masters Project</h4>
                  <p class="work-role">Open Source &middot; Community Platform</p>
                  <p class="work-desc" itemprop="description">Global network of mutual support for self-organization — a collaborative ecosystem for individuals, bands, movements, and organisations with libertarian and DIY principles.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Community</span>
                    <span class="tag">DIY</span>
                    <span class="tag">Libertarian</span>
                    <span class="tag">Design</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <span class="on-hold-badge">On Hold</span>
                </div>
              </article>
            </div>

            <div class="col-sm-6 col-md-4 work-item">
              <article class="work-card" itemscope itemtype="https://schema.org/MusicGroup">
                <div class="work-card-image">
                  <img src="./assets/img/nomasterspunk.jpg" class="work-img" alt="No Masters — anarcopunk band from Belo Horizonte, Brazil" itemprop="image">
                  <div class="work-image-overlay wh-design">
                    <span class="work-category">Music &middot; Anarcopunk</span>
                  </div>
                </div>
                <div class="work-card-body">
                  <h4 class="work-title" itemprop="name">No Masters <span class="side-project-type">Band</span></h4>
                  <p class="work-role">Belo Horizonte, Brazil &middot; In Stand By</p>
                  <p class="work-desc" itemprop="description">Anarcopunk band from Brazil. Members: Ali (vocals), Carol (bass), Ninja (drums), Reva (guitar), Dani (vocals). Listen on Facebook and SoundCloud.</p>
                  <div class="work-tags">
                    <span class="tag" itemprop="keywords">Music</span>
                    <span class="tag">Anarcopunk</span>
                    <span class="tag">Band</span>
                    <span class="tag">Brazil</span>
                  </div>
                </div>
                <div class="work-card-footer">
                  <a href="https://www.facebook.com/nomasters" class="work-link" target="_blank" rel="noopener noreferrer" itemprop="url">Listen on Facebook <i class="fa fa-long-arrow-right"></i></a>
                </div>
              </article>
            </div>

          </div>
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Games, Community and Social Impact Projects by Renato Vasconcellos Gomes",
            "itemListElement": [
              {"@type":"VideoGame","position":1,"name":"Peleia Braba","description":"Realtime multiplayer Stratego-like game built for Node Knockout hackathon.","url":"https://github.com/revagomes/peleia-braba","programmingLanguage":"JavaScript"},
              {"@type":"Organization","position":2,"name":"Associação Caminhos para o Futuro","description":"Brazilian non-profit providing education, technology training, and human development for socially vulnerable youth in Belo Horizonte.","url":"https://www.instagram.com/acaminhoparaofuturo","foundingDate":"2021","address":{"@type":"PostalAddress","addressLocality":"Belo Horizonte","addressCountry":"BR"}},
              {"@type":"EducationalOrganization","position":3,"name":"Novos Titans Programadores","description":"Tech training programme by ACF teaching software development to economically disadvantaged youth in Brazil."},
              {"@type":"Organization","position":4,"name":"No Masters Project","description":"Global network of mutual support for self-organization with libertarian and DIY principles."},
              {"@type":"MusicGroup","position":5,"name":"No Masters","description":"Anarcopunk band from Belo Horizonte, Brazil.","url":"https://www.facebook.com/nomasters","genre":"Anarcopunk"}
            ]
          }
          </script>
        </section>
```

- [ ] **Step 2: Verify full section in browser**

Reload `http://localhost:8080/#side-projects`. Confirm all 3 categories render with 14 cards total. Check that "On Hold" badges appear on Novos Titans and No Masters Project. Check responsive layout at mobile width (resize browser to 375px — cards should stack to single column).

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add Category 3 Games Community and Social Impact to side projects section"
```

---

## Task 8: HTML — Remove old portfolio modal markup

**Files:**
- Modify: `index.html` (remove `#portfolioModal1` through `#portfolioModal6`, approximately lines 635–835)

- [ ] **Step 1: Delete the six portfolio modal blocks**

In `index.html`, find and delete the entire block from `<div class="portfolio-modal modal fade" id="portfolioModal1"` through to the closing `</div>` of `portfolioModal6`. These are the old side project modals — they are no longer linked from any anchor in the HTML.

The block to delete starts with:
```html
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
```
and ends with the last `</div>` of portfolioModal6 (check for the pattern `id="portfolioModal6"`).

- [ ] **Step 2: Verify no broken modal triggers remain**

```bash
grep -n "portfolioModal" index.html
```

Expected output: empty (no results). If any results appear, they are stale links — remove them.

- [ ] **Step 3: Verify page in browser**

Reload `http://localhost:8080`. Page should load and scroll without errors. Open browser DevTools console — confirm zero JavaScript errors.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "chore: remove obsolete portfolio modal markup (replaced by visible work-cards)"
```

---

## Task 9: CSS cleanup — Remove dead #side-projects portfolio rules

**Files:**
- Modify: `assets/css/style.css`

- [ ] **Step 1: Remove dead CSS rules from `style.css`**

The following rules applied only to the old `.portfolio-item` / `.portfolio-link` / `.caption` elements which no longer exist. Delete these blocks (approximately lines 193–248):

```css
/* DELETE these blocks: */
#side-projects .portfolio-item { ... }
#side-projects .portfolio-item .portfolio-link { ... }
#side-projects .portfolio-item .portfolio-link .caption { ... }
#side-projects .portfolio-item .portfolio-link .caption:hover { ... }
#side-projects .portfolio-item .portfolio-link .caption .caption-content { ... }
#side-projects .portfolio-item .portfolio-link .caption .caption-content i { ... }
#side-projects .portfolio-item .portfolio-link:focus .caption,
#side-projects .portfolio-item .portfolio-link:active .caption { ... }
#side-projects * { z-index: 2; }
@media (min-width: 767px) { #side-projects .portfolio-item { ... } }
#side-projects .portfolio-row { ... }
```

Also remove the `.side-project-title` rule (lines ~170–179) — no longer used in HTML. **Keep** `.side-project-type` (lines ~181–187) — still referenced by `<span class="side-project-type">Band</span>` in the No Masters Band card title.

**Keep:** The `#side-projects` rule referencing the new `.section-intro`, `.side-projects-category`, `.on-hold-badge`, `.archived-badge` from Task 1.

- [ ] **Step 2: Verify page still looks correct**

Reload `http://localhost:8080/#side-projects`. Section should look identical to after Task 7 — the removed rules were only for elements that no longer exist.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "chore: remove dead CSS for old side projects portfolio-item and modal patterns"
```

---

## Task 10: Final validation

- [ ] **Step 1: Full page visual check**

```bash
python3 -m http.server 8080
```

Check in browser:
- All 14 cards render with correct images/SVGs, titles, descriptions, tags, and links
- Category headings ("Drupal & CMS", "AI & Developer Tools", "Games, Community & Social Impact") appear with purple left-border style
- "On Hold" gold badges on Novos Titans Programadores and No Masters Project
- Hover effects on cards (lift + shadow)
- Responsive: resize to 375px, confirm single-column layout

- [ ] **Step 2: Check all external links**

Manually click each `View Project`, `View on GitHub`, `Install Extension`, and `Follow on Instagram` link. Confirm they open correct destinations in a new tab.

- [ ] **Step 3: Validate structured data**

Open the Google Rich Results Test: `https://search.google.com/test/rich-results`

Enter `http://localhost:8080` (note: Google's tool requires a public URL — for local testing, copy the JSON-LD from each `<script type="application/ld+json">` block and paste into the tool's code snippet input instead). Confirm all three `ItemList` blocks validate without errors.

- [ ] **Step 4: Check console for errors**

Open browser DevTools → Console. Reload the page. Expected: zero errors, zero warnings about missing resources.

- [ ] **Step 5: Validate HTML structure**

```bash
curl -s http://localhost:8080 | grep -c "itemscope"
```

Expected output: `14` (one `itemscope` per project card).

```bash
curl -s http://localhost:8080 | grep -c "application/ld+json"
```

Expected output: `3` (one JSON-LD block per category).

- [ ] **Step 6: Final commit if any tweaks were needed**

```bash
git add index.html assets/css/style.css
git commit -m "fix: side projects section final tweaks after validation"
```

---

*Spec: `docs/superpowers/specs/2026-05-31-side-projects-ui-seo-aeo-design.md`*
