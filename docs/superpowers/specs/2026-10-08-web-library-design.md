# Web Library — Design Spec

Date: 2026-10-08
Status: Approved in brainstorming, pending written-spec review

## 1. Purpose

Web Library is a free, public library of UI component layouts (sections,
heroes, cards, profiles, buttons, app blocks). Visitors browse components,
then take them away in the form their workflow needs: as code, as an
AI-agent brief, or as a PNG reference image.

**Primary audience:** developers who build with AI coding agents (Claude
Code, Cursor, v0, etc.). Every output is designed to paste cleanly into an
agent or a codebase.

**Success criteria for v1**

- ~36 curated components across four groups, in varied, tagged aesthetics.
- Every component can be copied as React + Tailwind or HTML + plain CSS,
  copied as an AI brief, downloaded as PNG (desktop or mobile, optional
  transparent background), and copied to the clipboard as an image.
- Agents can fetch any component as markdown at `/c/<slug>.md` and discover
  the whole library at `/llms.txt`.
- Static, pre-rendered site on Vercel with good SEO and link previews.

**Out of scope for v1:** accounts, favorites, payments, community
submissions (the data model must not block them later), visual
customization/theming of components, Vue/Svelte/other formats, server-side
or pre-rendered screenshots.

## 2. Decisions log

| Topic | Decision |
|---|---|
| Business model | Free, no accounts |
| Content source | Curated now; structure supports community submissions later |
| Launch size | ~36 components (target range 20–40) |
| Code formats | React + Tailwind v4 (TSX) and HTML + plain CSS |
| Format sync | Both hand-written; Playwright visual parity test enforces equality |
| Customization | None — components are shown and copied exactly as designed |
| Interactivity | CSS hover/focus states only; no JS behavior |
| Component aesthetics | Varied, filterable by style tag |
| Assets in components | Inline SVG icons; images from curated Unsplash URLs |
| AI copy | Markdown brief + code in the selected format |
| Image export | PNG @2x, desktop (1440px) or mobile (390px), optional transparent bg |
| Image generation | In the visitor's browser (`modern-screenshot`) |
| Agent extras | `/c/<slug>.md`, `/llms.txt`, copy image to clipboard |
| Site style | Quiet & neutral shell, light + dark mode |
| Browse layout | Category sidebar + thumbnail grid |
| Detail view | Dedicated pre-rendered page per component |
| Preview controls | Preview / Code tabs; desktop / tablet / mobile toggle |
| Discovery | Category sidebar, name search, style-tag filters |
| Architecture | React Router 8 framework mode, `ssr: false`, full pre-render |
| Hosting | Vercel (static output) |
| Analytics | `@vercel/analytics`; page views on Hobby, custom events on Pro |
| Name | "Web Library" is a working title, kept in one constant |
| License | Undecided; must be chosen before launch |
| Repo | Public GitHub repo |

## 3. Architecture

### 3.1 Stack

- React 19, TypeScript, Vite, Tailwind CSS v4 (`@tailwindcss/vite`).
- React Router 8 in framework mode (`@react-router/dev`), configured with
  `ssr: false` and a `prerender` function listing every static path.
- `modern-screenshot` for in-browser PNG capture.
- `@vercel/analytics` for page views and events.
- A syntax highlighter for the Code tab (Shiki, highlighting at build time
  during pre-render so no highlighter ships to the browser for the initial
  view).
- A toast library (Sonner) for copy/download feedback.
- Vitest for unit tests, Playwright for parity and smoke tests.

The current Vite SPA scaffold is converted to React Router framework layout
(`app/root.tsx`, `app/routes.ts`, `react-router.config.ts`). Nothing beyond
the starter page exists yet, so this is a cheap change.

### 3.2 Routes

| Path | Purpose | Output |
|---|---|---|
| `/` | Browse all components (sidebar + grid). `?q=` search and `?tags=` filters are applied client-side | Pre-rendered |
| `/browse/:category` | Browse view filtered to one category (hero, pricing, …) | Pre-rendered per category |
| `/c/:slug` | Component detail page | Pre-rendered per component |
| `/preview/:slug` | The component alone on a bare page; used by the preview iframe and image capture; `noindex` | Pre-rendered per component |
| `/c/:slug.md` | Agent markdown for one component | Static file written post-build |
| `/llms.txt` | Library index for agents | Static file written post-build |
| anything else | 404 page with search | Served for unmatched paths via the SPA fallback (Vercel rewrite) |

React Router dynamic segments cannot carry a literal suffix such as `.md`,
and its docs do not document pre-rendering non-HTML resource routes. The
agent files are therefore written by a post-build script:

```
"build": "react-router build && tsx scripts/build-agent-files.ts"
```

The script imports the registry metadata and reads the raw component files
from disk, then writes `build/client/c/<slug>.md` and
`build/client/llms.txt`. Pre-rendered pages land in
`build/client/c/<slug>/index.html`, so the `.md` files do not collide with
page directories.

Vercel serves `build/client` as a static site.

### 3.3 Site name

A single `SITE` constant (`app/site.ts`) holds the name, tagline, and
canonical URL. Every page title, brief header, `.md` header, `llms.txt`
header, and download filename prefix reads from it. Renaming the site is a
one-line change.

## 4. Content model

### 4.1 Folder per component

```
src/library/components/<slug>/
  meta.ts         metadata (see 4.2)
  Component.tsx   React + Tailwind version — exactly the file users copy
  index.html      HTML version (markup fragment, no <html>/<head>)
  styles.css      plain CSS version, every selector scoped under .<slug>
```

- `Component.tsx` is imported twice: as a module for rendering and with
  `?raw` for the code view and copy. What renders is byte-for-byte what is
  copied.
- `index.html` and `styles.css` are imported with `?raw` only; the site
  never renders them. The parity test does.
- `styles.css` starts with a scoped mini-reset
  (`.<slug>, .<slug> *, .<slug> *::before, .<slug> *::after { box-sizing: border-box; margin: 0; … }`)
  so it renders correctly when pasted into a page with no Tailwind
  preflight, without leaking global rules into the host page.

### 4.2 Metadata

```ts
export default {
  slug: 'hero-split',
  name: 'Split hero with image',
  category: 'hero',            // from the taxonomy
  tags: ['minimal', 'light'],  // style tags from the taxonomy
  description: 'One sentence: what it is and when to use it.',
  preview: { kind: 'section' },  // 'section' | 'element'
  fonts: [],                   // Google Fonts families used, if any
  brief: {
    layout: '…',               // structure and arrangement
    style: '…',                // palette, typography, spacing, radius
    states: '…',               // hover / focus behavior
    responsive: '…',           // what changes at md / sm
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
```

`ComponentMeta` lives in `src/library/types.ts`. An optional `author`
field is reserved for community submissions; v1 leaves it unset.

### 4.3 Registry

`src/library/registry.ts` collects every component with
`import.meta.glob` (eager for metadata and raw sources, lazy for the
rendered module on the browse grid) and exposes typed lookups:
`allComponents()`, `bySlug()`, `byCategory()`, `search(q, tags)`.

### 4.4 Taxonomy

`src/library/taxonomy.ts` defines:

- **Groups:** Sections, Cards & profiles, Elements, App UI.
- **Categories** within groups, e.g. Sections → hero, navbar, features,
  pricing, testimonials, cta, faq, footer; Cards & profiles → profile-card,
  team, product-card, stat-card, testimonial-card, blog-card; Elements →
  buttons, inputs, badges, toggles, tabs, dropdowns; App UI → login,
  signup, settings, data-table, empty-state, dashboard.
- **Style tags** (closed vocabulary): minimal, brutalist, glass, editorial,
  playful, corporate, dark, light, gradient, has-image.

Small elements ship as **sets** — e.g. "Buttons — Brutalist" shows
primary, secondary, ghost, and icon variants together.

### 4.5 Authoring rules

Enforced by the Vitest registry test where mechanically checkable, and
documented in `AGENTS.md` for all authors:

1. `Component.tsx` has one default export, needs no props, and imports
   nothing except React (and only if needed).
2. Styling uses Tailwind v4 classes only. No `dark:` variants (the site's
   dark mode must never restyle components). No arbitrary global CSS.
3. Interactivity is CSS-only: `hover:`, `focus-visible:`, `group-hover:`,
   transitions. No state, no effects, no event handlers.
4. Icons are inline `<svg>`; no icon packages.
5. Images use URLs from the curated list in `src/library/assets.ts`
   (Unsplash CDN, verified to send `Access-Control-Allow-Origin: *`, which
   image capture requires). Every `<img>` has `alt`, `width`, and `height`.
6. Fonts beyond the default sans stack are declared in `meta.fonts`.
   `Component.tsx` starts with a one-line comment naming the Google Font
   to load. `index.html` does not contain the font `<link>`; the copy
   builder and parity harness generate it from `meta.fonts`.
7. All four files exist, the slug is unique and matches the folder name,
   the category and tags exist in the taxonomy, and every `brief` field is
   non-empty.
8. Markup is accessible: semantic elements, labelled controls, visible
   focus styles, sufficient contrast.

## 5. Copy and export

### 5.1 Copy code

- Primary **Copy code** button with a React / HTML format switch. The
  chosen format persists in `localStorage` and is the default on every
  detail page.
- React: copies `Component.tsx` verbatim.
- HTML: copies one snippet — `<style>` containing `styles.css`, followed
  by the `index.html` markup (and the font `<link>` when needed).
- The Code tab shows each file (`Component.tsx`, or `index.html` and
  `styles.css`) with its own copy button.

### 5.2 Copy for AI

`buildBrief(meta, format)` in `src/library/brief.ts` produces:

````md
# <name> (<SITE.name>)
Source: <SITE.url>/c/<slug>

Build this UI component: <description>

## Layout
<brief.layout>

## Visual style
<brief.style>
Fonts: <fonts, or "system sans-serif">

## States
<brief.states>

## Responsive
<brief.responsive>

## Reference code (React + Tailwind v4)
```tsx
<Component.tsx>
```

Adapt names, tokens and conventions to the existing project; keep the
layout, hierarchy and spacing rhythm.
````

For the HTML format the reference code section contains the HTML and CSS
blocks instead.

### 5.3 Agent files

- `/c/<slug>.md`: the same builder with **both** code formats included, so
  an agent fetching the URL can choose.
- `/llms.txt`: site title and one-paragraph description, then one section
  per group/category listing `- [<name>](<SITE.url>/c/<slug>.md): <description>`.

### 5.4 Image export

- **Download ▾** menu: Desktop PNG (1440px wide) or Mobile PNG (390px
  wide), captured at 2× pixel ratio, plus a **Transparent background**
  checkbox.
- Capture flow: create a hidden, off-screen iframe at the target width
  loading `/preview/<slug>?capture=1`; wait for `document.fonts.ready` and
  every `<img>` to decode; capture the component root with
  `modern-screenshot`; remove the iframe.
- Transparent mode removes only the preview page's padding and backdrop.
  A section's own background is part of the component and is kept.
- Filenames: `<site-slug>-<component-slug>-<desktop|mobile>.png`.
- **Copy image** captures the desktop PNG (honoring the Transparent
  background checkbox) and writes it via
  `navigator.clipboard.write([new ClipboardItem({ 'image/png': promise })])`,
  constructing the `ClipboardItem` synchronously inside the click handler
  (required by Safari).

### 5.5 Error handling

- Clipboard write rejected or unsupported: toast "Couldn't copy", open the
  Code tab, and select the code text so the user can copy manually.
- Image capture fails or exceeds 10 s: toast with a Retry action. The
  hidden iframe is always removed.
- Unknown slug: 404 page with the search field.

### 5.6 Analytics

`@vercel/analytics` is mounted in the root layout. Actions call `track()`:
`copy_code {slug, format}`, `copy_ai {slug, format}`,
`download_png {slug, viewport}`, `copy_image {slug}`. Custom events only
record on Vercel Pro or Enterprise; on Hobby, page views are recorded and
the `track()` calls are inert until the plan is upgraded, with no code
change needed.

## 6. User interface

### 6.1 Shell

- Quiet and neutral: zinc palette, Geist Sans and Geist Mono, 1px borders,
  minimal shadows; components are the visual focus.
- Light and dark modes; follows `prefers-color-scheme`, with a manual
  toggle persisted in `localStorage` and applied before first paint to
  avoid a flash.
- Header: site name, search field, theme toggle, GitHub link.

### 6.2 Browse (`/`, `/browse/:category`)

```
┌────────────┬────────────────────────────────────────┐
│ Sections   │ Hero · 6            [minimal][dark][×] │
│   Hero   6 │ ┌──────────┐┌──────────┐┌──────────┐   │
│   Pricing 2│ │live thumb││live thumb││live thumb│   │
│ Cards      │ │ Name     ││ Name     ││ Name     │   │
│ Elements   │ │ tags     ││ tags     ││ tags     │   │
│ App UI     │ └──────────┘└──────────┘└──────────┘   │
└────────────┴────────────────────────────────────────┘
```

- Sidebar: groups → categories with counts; active category highlighted.
  On small screens it collapses into a horizontal category scroller.
- Tag chips above the grid filter within the current view; search filters
  by name and description. Both are reflected in the URL query string.
- Thumbnails are live renders. `section` components render at 1280px wide
  inside a fixed-aspect frame and are scaled down with a CSS transform, so
  they show the desktop layout. `element` components render at natural
  size, centered. Thumbnails mount only when scrolled into view.
- Empty results show a clear "no matches" state with a reset action.

### 6.3 Detail (`/c/:slug`)

- Breadcrumb (group → category), name, description, tags.
- Toolbar: `[Preview | Code]` tabs; viewport toggle desktop 1440 / tablet
  768 / mobile 390 (the preview is an iframe of `/preview/<slug>` at that
  width, scaled to fit the available space); actions: Copy code (with
  format switch), Copy for AI, Download ▾, Copy image.
- Code tab: highlighted source with per-file copy buttons.
- Below: other components in the same category.
- Per-page `<title>`, meta description, canonical URL, and Open Graph tags.

## 7. Testing

- **Vitest**
  - Registry test: every component satisfies the authoring rules in 4.5
    that can be checked mechanically (files present, unique slug matching
    folder, valid category/tags, non-empty brief, no disallowed imports,
    no `dark:` classes, `<img>` attributes present).
  - `buildBrief` output for both formats.
  - Agent-file builder output (`.md` content, `llms.txt` structure).
- **Playwright parity test** (`npm run test:parity`): for every component,
  screenshot `/preview/<slug>` (React) and a harness page containing only
  `index.html` + `styles.css` (+ font link) at 1440px and 390px widths;
  fail if they differ by more than ~1% of pixels. Runs locally and in
  GitHub Actions, not in the Vercel build.
- **Playwright smoke test**: browse and detail pages render; search and tag
  filters work; Copy code fills the clipboard; Download produces a PNG of
  the expected width; after `npm run build`, every `/c/<slug>.md` and
  `/llms.txt` exist.

## 8. Launch content (~36)

| Group | Components |
|---|---|
| Sections (~18) | 4 heroes, 2 navbars, 3 feature grids, 2 pricing, 2 testimonials, 2 CTAs, 1 FAQ, 2 footers |
| Cards & profiles (~6) | profile, team, product, stat, testimonial, blog post |
| Elements (~6 sets) | buttons, inputs, badges, toggles, tabs, dropdown triggers |
| App UI (~6) | login, sign-up, settings panel, data table, empty state, stats dashboard block |

Style tags are distributed so every aesthetic in the taxonomy has several
examples. The FAQ uses `<details>`/`<summary>` (native, no JS); dropdown
"triggers" show the closed and open states side by side as static layout.

## 9. Repository and delivery

- Git repository with a public GitHub repo `Web-Library` (created after
  explicit confirmation).
- `AGENTS.md`: component authoring rules (4.5), folder layout, and the
  "add a component" checklist, so human, agent, and future community
  authors follow one process.
- No `LICENSE` file until a license is chosen; README states this. A
  license must be chosen before public launch.
- Vercel: the owner connects the GitHub repo to a Vercel project
  (framework preset React Router; output `build/client`). The README
  documents the steps.
- GitHub Actions: lint, typecheck, Vitest, build, and Playwright parity +
  smoke tests on every push and PR.

## 10. Build order

1. Foundation: React Router conversion, `SITE`, taxonomy, types, registry,
   registry test, 3 sample components (one section, one card, one element
   set).
2. Browse and detail UI with live thumbnails and preview iframe.
3. Copy code, Copy for AI, image download, copy image, toasts, analytics.
4. Agent files: post-build script, `.md`, `llms.txt`.
5. Parity and smoke tests; GitHub Actions.
6. Content batches up to ~36 components, each passing parity.
7. Deployment documentation; license decision before launch.

## 11. Risks

- **Parity tolerance:** font rasterization and sub-pixel differences may
  need per-component tolerance tuning; the default stays strict and
  overrides are recorded in `meta.ts` with a reason.
- **Browser capture fidelity:** `modern-screenshot` output can differ
  slightly across browsers (fonts, backdrop filters). Glass components
  using `backdrop-filter` are the highest risk and are checked by hand.
  Build-time screenshots remain a later option.
- **Live thumbnails cost:** ~36 live renders is fine; if the library grows
  into the hundreds, thumbnails move to pre-rendered images.
- **Placeholder images:** depend on Unsplash URLs staying available; the
  curated list in `assets.ts` makes replacement a single-file change.
