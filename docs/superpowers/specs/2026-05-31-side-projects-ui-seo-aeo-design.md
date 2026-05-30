# Side Projects Section — UI / SEO / AEO Redesign

**Date:** 2026-05-31
**Scope:** `index.html` + `assets/css/style.css` + new SVG assets in `assets/img/`
**Approach:** Categorized card grid with schema.org structured data (Approach A)

---

## Goals

1. **UI** — replace modal-based thumbnails with visible work-card-style cards matching the existing Work section pattern.
2. **SEO** — surface all project content as crawlable, visible HTML; add structured data.
3. **AEO (Agentic Engine Optimization)** — give AI-driven search engines (Perplexity, ChatGPT, Gemini) a clear, parseable summary of who Reva is and what he's built.

---

## Information Architecture

The `#side-projects` section gets three semantic sub-sections, each with an `<h3>` heading and its own `schema.org/ItemList` JSON-LD block.

### Category 1 — Drupal & CMS (5 projects)

| Project | URL | Status | Tags |
|---|---|---|---|
| O que é Drupal? | https://oqueedrupal.org | Live | `Drupal` `CMS` `Portuguese` `Design` |
| Drupalizando | http://drupalizando.com.br | Live | `Drupal` `Training` `Video` `Design` |
| Dhrome | https://dhrome.github.io/dhrome | Live | `Chrome Extension` `Drupal` `JavaScript` |
| Drupal TDD Skill | https://github.com/revagomes/drupal-tdd-skill | GitHub | `Drupal` `TDD` `AI` `DevTools` |
| EC Europa Drupal Quality | https://github.com/revagomes/kiro-power-ec-europa-drupal-quality | GitHub | `Drupal` `PHP` `Quality` `OpenEuropa` |

### Category 2 — AI & Developer Tools (4 projects)

| Project | URL | Status | Tags |
|---|---|---|---|
| Cybersecurity Skills Gateway | https://github.com/revagomes/cybersecurity-skills-gateway | GitHub | `AI` `Security` `MCP` `DevTools` |
| Kiro Power: Autonomous Dev | https://github.com/revagomes/kiro-power-autonomous-dev | GitHub | `AI Agents` `Automation` `Git` `DevTools` |
| Kiro Power: AI Agent Security | https://github.com/revagomes/kiro-power-ai-agent-security | GitHub | `AI Security` `DevTools` `Prompt Injection` |
| sshconfig | https://github.com/revagomes/sshconfig | GitHub | `Node.js` `CLI` `SSH` `DevTools` |

### Category 3 — Games, Community & Social Impact (5 projects)

| Project | URL | Status | Tags |
|---|---|---|---|
| Peleia Braba | https://github.com/revagomes/peleia-braba | GitHub (deploy pending) | `Node.js` `Socket.io` `Multiplayer` `Hackathon` |
| Associação Caminhos para o Futuro (ACF) | https://www.instagram.com/acaminhoparaofuturo | Live | `NGO` `Education` `Technology` `Social Impact` `Brazil` |
| Novos Titans Programadores | http://novostitas.org | On Hold | `Education` `Tech Training` `NGO` `Youth` `Brazil` |
| No Masters Project | http://nomasters.tk | On Hold | `Community` `DIY` `Libertarian` `Design` |
| No Masters Band | https://www.facebook.com/nomasters | Live | `Music` `Anarcopunk` `Band` `Brazil` |

---

## Card Component

Each project uses the existing `.work-card` markup pattern — no new CSS component. The only new CSS needed is for the `archived-badge` and `on-hold-badge` states.

### Card markup per project

```html
<article class="work-card" itemscope itemtype="https://schema.org/SoftwareApplication">
  <div class="work-card-image">
    <img src="./assets/img/<slug>.svg" alt="<Descriptive alt text>" class="work-img">
    <div class="work-image-overlay <accent-class>"></div>
  </div>
  <div class="work-card-body">
    <h4 class="work-card-title" itemprop="name"><Project Name></h4>
    <p class="work-card-desc" itemprop="description"><1–2 sentence visible description></p>
    <ul class="work-tags">
      <li class="tag" itemprop="keywords">Tag</li>
      …
    </ul>
  </div>
  <div class="work-card-footer">
    <a href="<url>" class="work-link" target="_blank" rel="noopener noreferrer"
       itemprop="url">View Project ↗</a>
    <!-- OR for archived/on-hold: -->
    <span class="archived-badge">On Hold</span>
  </div>
</article>
```

### Accent class assignment

| Category | Accent class |
|---|---|
| Drupal & CMS | `.wh-dev` (purple) |
| AI & Developer Tools | `.wh-fullstack` (green) |
| Games & Community | `.wh-design` (blue) |

### Link label by type

| Project type | Link label |
|---|---|
| Live website | `View Project ↗` |
| GitHub repo | `View on GitHub ↗` |
| Chrome extension | `Install Extension ↗` |
| Music/social | `Listen on Facebook ↗` |
| On Hold / archived | `<span class="on-hold-badge">On Hold</span>` |

### New badge CSS (added to `style.css`)

```css
.archived-badge,
.on-hold-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 2px 8px;
  border-radius: 3px;
  color: #fff;
}
.archived-badge { background: #aaa; }
.on-hold-badge  { background: #b8860b; }
```

---

## Images / SVG Assets

Existing projects that already have screenshots (`oqueedrupal.png`, `drupalizando.png`, `dhrome.png`, `nomastersproject.png`, `nomasterspunk.jpg`) keep their current images.

New projects without screenshots get a purpose-built SVG illustration following the style of existing `work-0N-*.svg` files. One SVG per new project:

| Project | SVG filename |
|---|---|
| Drupal TDD Skill | `assets/img/drupal-tdd-skill.svg` |
| EC Europa Drupal Quality | `assets/img/ec-europa-drupal-quality.svg` |
| Cybersecurity Skills Gateway | `assets/img/cybersecurity-skills-gateway.svg` |
| Kiro Power: Autonomous Dev | `assets/img/kiro-power-autonomous-dev.svg` |
| Kiro Power: AI Agent Security | `assets/img/kiro-power-ai-agent-security.svg` |
| sshconfig | `assets/img/sshconfig.svg` |
| Peleia Braba | `assets/img/peleia-braba.svg` |
| Associação Caminhos para o Futuro | `assets/img/caminhos-para-o-futuro.svg` |
| Novos Titans Programadores | `assets/img/novos-titans-programadores.svg` |

SVG style: flat, centered icon on solid background matching the category accent color, 400×300px viewBox.

---

## SEO & AEO Implementation

### HTML structure

```html
<section id="side-projects" class="section-gray-light">
  <div class="container">

    <!-- Section header -->
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Side Projects</h2>
        <hr class="star-primary">
        <p class="section-intro">
          A collection of open-source tools, Drupal resources, social impact initiatives,
          and creative projects built over the years — from browser extensions and AI agent
          skills to a multiplayer game, an NGO, and a punk band.
        </p>
      </div>
    </div>

    <!-- Category 1 -->
    <section aria-label="Drupal & CMS projects">
      <div class="row"><div class="col-lg-12"><h3 class="side-projects-category">Drupal &amp; CMS</h3></div></div>
      <div class="row">… cards …</div>
      <script type="application/ld+json">…ItemList JSON-LD…</script>
    </section>

    <!-- Category 2 -->
    <section aria-label="AI and Developer Tools projects">…</section>

    <!-- Category 3 -->
    <section aria-label="Games, Community and Social Impact projects">…</section>

  </div>
</section>
```

### JSON-LD schema (one block per category)

Each `<script type="application/ld+json">` block contains a `schema.org/ItemList` with child items typed as `SoftwareApplication` (for tools/extensions/games), `WebSite` (for content sites like Drupalizando and O que é Drupal?), or `CreativeWork` (for community/band projects like No Masters). Key fields per item: `name`, `description`, `url`, `applicationCategory`, `programmingLanguage` (where applicable), `keywords`.

Example for Dhrome:
```json
{
  "@type": "SoftwareApplication",
  "position": 3,
  "name": "Dhrome",
  "description": "A Chrome browser extension for Drupal developers, providing quick access to Drupal resources from the address bar.",
  "url": "https://dhrome.github.io/dhrome",
  "applicationCategory": "BrowserApplication",
  "programmingLanguage": "JavaScript",
  "keywords": "Drupal, Chrome Extension, Developer Tools"
}
```

### Additional HTML best practices

- All `alt` attributes: descriptive (e.g. `alt="Dhrome Chrome extension for Drupal — browser screenshot"`)
- All external links: `target="_blank" rel="noopener noreferrer"`
- Drupalizando link: kept as `http://` until SSL is confirmed live on the domain
- Portuguese-language titles wrapped: `<span lang="pt">O que é Drupal?</span>`
- `No Masters Project` card: description visible and indexed despite "On Hold" status — content remains crawlable
- Remove all Bootstrap modal markup for `#portfolioModal1–5` — no longer needed

### Section intro paragraph (AEO)

The visible intro paragraph under `<h2>` serves as the AEO anchor: AI agents reading the page extract this as a summary of the section without parsing individual cards. It should be factual and specific — not marketing copy.

> "A collection of open-source tools, Drupal resources, social impact initiatives, and creative projects built over the years — from browser extensions and AI agent skills to a multiplayer game, an NGO, and a punk band."

---

## Files Changed

| File | Change |
|---|---|
| `index.html` | Replace `#side-projects` section and remove `#portfolioModal1–5` |
| `assets/css/style.css` | Add `.archived-badge`, `.on-hold-badge`, `.section-intro`, `.side-projects-category` styles |
| `assets/img/*.svg` | Add 7 new SVG illustrations for GitHub-only projects |

---

## Future Phase — Design & Creative Portfolio

The following project types are confirmed for a future phase of the Side Projects section. They warrant a potential fourth category: **Design & Creative**.

| Type | Examples | Notes |
|---|---|---|
| Logo design | A Caminho para o Futuro NGO logo | Reva designed it — link to asset or case study |
| Web design | Client/NGO web design work | Screenshots + brief + context |
| Drawing projects | Personal illustration work | Images + medium + year |
| Lecture slides | Talks at open-source events (DrupalCamp, etc.) | Link to slide decks (Speakerdeck/PDF) |

This phase is out of scope for the current implementation but the card component and category structure already support it — adding a fourth `<section>` with `<h3>Design & Creative</h3>` requires no CSS changes.

---

## Out of Scope (Phase 1)

- Design & Creative category (future phase — see above)
- Drupalizando evolution (separate project — see memory)
- Peleia Braba deployment to Cloudflare (separate project — see memory)
- Any other section of `index.html`
- Adding SSL to drupalizando.com.br
