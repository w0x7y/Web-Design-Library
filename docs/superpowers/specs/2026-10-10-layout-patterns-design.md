# Layout patterns — Design Spec

Date: 2026-10-10
Status: Approved (direction); this document is the contract for the port

This spec changes what Patternbook is. It replaces
[the v1 design](2026-10-08-web-library-design.md) wherever the two disagree.

## 1. Purpose

Patternbook becomes a library of **layout patterns**: the structure of a hero,
a pricing section or a settings page, shown as a neutral wireframe with code.
People and AI agents take the structure and apply their own project's colours,
type, radius and imagery. Patternbook no longer ships finished visual designs.

Decisions (user, 2026-10-10):

| Topic | Decision |
|---|---|
| Existing 478 components | Replaced. They stay in git history only. |
| Code | Every pattern keeps copy-paste code. |
| Formats | React + Tailwind v4 and HTML + plain CSS, as now. |
| Page templates | Out of scope. |

What stays: the site (browse, detail, preview, PNG capture, theme), routes
(`/c/<slug>` and friends), the build pipeline (`catalog.json`, `llms.txt`,
`.md` briefs), the MCP server's transport, the four-file component folder, the
parity, focus and layout tests, the category taxonomy and `preview.kind`.

Internal code keeps the word "component" for the folder unit (`ComponentMeta`,
`src/library/components/`, `search_components`). User-facing copy says
"pattern" or "layout pattern".

## 2. The wireframe kit

Every pattern is drawn with the same small kit so that patterns compose into a
page and nothing reads as a brand.

### 2.1 Colour

Only Tailwind's `neutral` palette plus `white`, `black`, `transparent`,
`current` and `inherit`, with optional opacity modifiers (`bg-black/50`). No
other hue, no arbitrary colour values, no gradients.

| Role | Class | Value (theme.css) |
|---|---|---|
| Page surface | `bg-white` | `#fff` |
| Alternate surface (a whole section, a sidebar, a muted card) | `bg-neutral-50` | `oklch(98.5% 0 none)` |
| Placeholder fill (media, avatars, icon tiles, skeleton bars) | `bg-neutral-100` / `bg-neutral-200` | `oklch(97% 0 none)` / `oklch(92.2% 0 none)` |
| Hairline borders and dividers | `border-neutral-200` | `oklch(92.2% 0 none)` |
| Control borders (inputs, secondary buttons) | `border-neutral-300` | `oklch(87% 0 none)` |
| Placeholder glyphs (decorative only, never text) | `text-neutral-400` | `oklch(70.8% 0 none)` |
| Meta text, captions, placeholders | `text-neutral-500` | `oklch(55.6% 0 none)` |
| Body text | `text-neutral-600` | `oklch(43.9% 0 none)` |
| Headings, primary ink | `text-neutral-900` | `oklch(20.5% 0 none)` |
| Primary action fill | `bg-neutral-900`, hover `bg-neutral-700` | |

Dark surfaces are allowed where the pattern needs them (a dark band in a
footer, an overlay on media): `bg-neutral-900`/`bg-neutral-950` with white and
`neutral-300`/`neutral-400` text. Keep text contrast at 4.5:1 or better.

### 2.2 Type

The default sans stack only: no `font-[…]` families, no `font-serif`, no web
fonts. `font-mono` is allowed for code, keys and tabular figures.
`meta.fonts` is removed.

| Role | Classes |
|---|---|
| Display headline (one per hero) | `text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl` |
| Section headline | `text-3xl font-semibold tracking-tight text-balance sm:text-4xl` |
| Item title | `text-base font-semibold` (or `text-lg`) |
| Eyebrow | `text-sm font-medium text-neutral-500` |
| Lede | `text-lg text-pretty text-neutral-600` |
| Body | `text-base text-neutral-600`; `text-sm` inside cards and elements |
| Meta | `text-sm text-neutral-500` (or `text-xs`) |

### 2.3 Shape, spacing, depth

- Section shell: `<section className="bg-white text-neutral-900">` with a
  container `mx-auto max-w-6xl px-6 py-16 sm:py-24` (narrow content:
  `max-w-3xl`; app UI may use `max-w-7xl` or full width).
- Radius: `rounded-md` (6px) for controls, `rounded-lg` (8px) for cards and
  media, `rounded-full` only for pills, avatars, switches and badges.
- Borders 1px. Shadows only to show elevation (menus, popovers, a floating
  card): `shadow-sm` to `shadow-lg`.
- No `backdrop-*`, `mix-blend-*`, `bg-linear-*`, `bg-radial-*`, `bg-conic-*`,
  `bg-[url(…)]`, filters or decorative animation.

### 2.4 Standard parts

```
FOCUS = focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900
```

| Part | Markup |
|---|---|
| Primary action | `<a href="#" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 FOCUS">Primary action</a>` |
| Secondary action | `<a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 FOCUS">Secondary action</a>` |
| Text link | `font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 FOCUS` |
| Card | `rounded-lg border border-neutral-200 bg-white p-6` |
| Input | `h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 FOCUS`, with a `<label>` and `aria-describedby` for hints |
| Badge | `inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium` |
| Media placeholder | see below |
| Avatar placeholder | `<span aria-hidden="true" className="flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">AR</span>` next to the visible name |
| Icon tile | `<span aria-hidden="true" className="flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">` + a 20px stroke icon |
| Logo placeholder | a 24px neutral glyph plus the word "Logo" (`font-semibold`) |

Media placeholder (the only way to show an image, video or illustration):

```tsx
<div role="img" aria-label="Image placeholder: product screenshot or photo" className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-5-5L5 21" />
  </svg>
</div>
```

The `aria-label` names what belongs there. Use a play glyph for video. No
`<img>`, `<video>`, `<iframe>`, `<picture>` or `src` attributes anywhere.

Icons: inline stroke SVGs on a 24×24 viewBox, `strokeWidth="1.5"`,
`fill="none"`, `stroke="currentColor"`, `aria-hidden="true"`. SVG `fill` and
`stroke` attributes are only ever `none` or `currentColor`.

### 2.5 Copy

Copy describes the role of each slot, at the length real content would have:
"Headline that names the main outcome", "One or two sentences that say who
this is for…", "Primary action", "Plan name", "Feature title". This tells the
reader what goes where.

- Use realistic generic values only where the format matters: prices (`$29`),
  counts (`1,284`), dates (`Mar 14`), times, percentages, people
  (`Alex Rivera`), emails (`name@example.com`).
- Standard web labels are fine where they are the archetype: navigation
  (`Product`, `Pricing`, `Docs`), form labels (`Email`, `Password`), table
  headers.
- No brand, product, industry, place or story names; no lorem ipsum; no jokes.

## 3. Content model

### 3.1 `meta.ts`

```ts
import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-split-image',
  name: 'Hero — Split with image',
  category: 'hero',
  tags: ['split', 'media', 'spacious'],
  description: '…',
  preview: { kind: 'section' },
  wireframe: `…`,
  brief: { layout: '…', hierarchy: '…', states: '…', responsive: '…', usage: '…' },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
```

| Field | Rule |
|---|---|
| `slug` | `<category>-<layout words>`, kebab-case, equal to the folder name. Must start with `<category>-`. |
| `name` | `<CATEGORY_LABELS[category]> — <layout name>`, e.g. `Pricing — Three tiers, middle highlighted`. Must start with the label and ` — `. |
| `category` | Unchanged taxonomy (`CATEGORY_IDS`). |
| `tags` | One or more `LAYOUT_TAGS` (§3.2). |
| `description` | One or two sentences: what the layout is and when to use it. |
| `preview` | Unchanged: `{ kind: 'section' \| 'element', parity? }`. |
| `wireframe` | Text diagram of the desktop layout in box-drawing characters (§3.3). |
| `brief.layout` | Regions, grid, column widths, alignment and spacing, in px and Tailwind names. |
| `brief.hierarchy` | Reading order, emphasis, and each content slot with its length limit. |
| `brief.states` | Hover, focus, open, selected and disabled states. |
| `brief.responsive` | Breakpoints and what changes at each. |
| `brief.usage` | When to use it, when to pick a different pattern, and two or three variations. |
| `addedAt` | `YYYY-MM-DD`. |
| `author` | Reserved, unset. |

`fonts` and `brief.style` are removed.

### 3.2 Layout tags

`STYLE_TAGS` becomes `LAYOUT_TAGS` (type `LayoutTag`, guard `isLayoutTag`).
`TAG_GROUPS` becomes:

| Group | Tag | Meaning |
|---|---|---|
| Composition | `centered` | Content centred on one axis, symmetric. |
| | `split` | Two columns of about equal weight. |
| | `asymmetric` | Unequal columns or offset blocks (1/3 + 2/3, overlapping). |
| | `stacked` | One column at every width. |
| | `sidebar` | A narrow column (navigation, filters, summary) beside a main area. |
| Arrangement | `grid` | Repeated items in equal columns. |
| | `bento` | Tiles of unequal size spanning rows or columns. |
| | `list` | Repeated items as rows. |
| | `row` | Items in one horizontal strip (logos, nav, button group). |
| | `table` | Data in columns with headers. |
| | `layered` | Elements overlap: text on media, a floating card, a menu. |
| Content | `media` | Has an image or video placeholder. |
| | `icons` | Items lead with an icon. |
| | `numbers` | Figures, prices or metrics are the focal point. |
| | `form` | Has input fields. |
| Density | `compact` | Tight spacing for dense UI. |
| | `spacious` | Generous whitespace, few items. |

### 3.3 Wireframe diagram

`meta.wireframe` is a template literal. Draw the desktop layout with
`┌ ┐ └ ┘ ─ │ ├ ┤ ┬ ┴ ┼`, name regions with their slot copy, write actions as
`[Label]`, and draw media as a box with `Image` (or `Video`) inside.
Draw one outer frame so every line has the same width: at most 64 characters
and 24 lines. Printable ASCII and box-drawing characters only (`^`/`v` for
chevrons). No tabs; no trailing spaces; no blank first or last line. Example (`hero-split-image`):

```
┌──────────────────────────────────────────────────────────┐
│ Eyebrow                                                  │
│ Headline that names          ┌─────────────────────────┐ │
│ the main outcome             │                         │ │
│                              │                         │ │
│ Lede: one or two sentences   │          Image          │ │
│ for the audience             │                         │ │
│                              │                         │ │
│ [Primary action] [Secondary] └─────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

### 3.4 The brief (`/c/<slug>.md`, `.react.md`, `.html.md`, Copy for AI)

~~~~
# <name> (Patternbook)
Source: <absolute page URL>

Layout pattern: <description>
This is a neutral wireframe. Keep its structure, hierarchy and responsive behaviour; take colours, type, radius, imagery and copy from the host project.

## Wireframe
```text
<wireframe>
```

## Layout
## Hierarchy and content
## States
## Responsive
## When to use
## Reference code (React + Tailwind v4)        (and/or HTML + CSS)

Map the neutral greys to the host project's design tokens and replace slot copy with real content; keep the regions, hierarchy and responsive behaviour.
~~~~

No font lines and no font `<link>` in the HTML snippet.

### 3.5 Catalog and compatibility

`patternbook-mcp` 0.1.0 is installed by users and reads the live site. It
requires `catalog.json` `version: 1` with `name, url, formats, groups,
categories, tags, components[{slug, name, category, tags, description, kind,
url}]`, and fetches `/c/<slug>.<format>.md`. All of that must keep working:

- Keep `version: 1` and every existing field. Each component's `fonts` becomes
  `[]` (the field stays for v1 consumers).
- Keep the URLs of every agent file and page.
- The intro copy of `llms.txt` and `catalog.json` changes to describe layout
  patterns.

## 4. Authoring rules (replace AGENTS.md §"Authoring rules")

1. `Component.tsx` has one default export, needs no props, and imports nothing
   except React (and only if needed).
2. Tailwind v4 classes only, from the wireframe kit (§2). No `dark:`. No
   arbitrary global CSS.
3. Interactivity is CSS-only: `hover:`, `focus-visible:`, `group-*:`,
   `peer-*:`, `open:`/`<details>`, transitions. No state, effects or handlers.
4. Icons are inline stroke `<svg>` with `currentColor`.
5. No images: media is a placeholder (§2.4).
6. No web fonts.
7. All four files exist; the slug is unique, matches the folder and starts
   with the category; the name starts with the category label; tags exist;
   every brief field and the wireframe are non-empty.
8. Markup is accessible: semantic elements, labelled controls, visible focus,
   4.5:1 text contrast, `role="list"` on styled lists, `aria-describedby` for
   hints.

`rules.ts` checks mechanically, in addition to today's TSX/HTML/CSS checks:

- **meta:** slug prefix, name prefix, `LAYOUT_TAGS`, the five brief fields,
  the wireframe limits (§3.3).
- **TSX classes** (after stripping variants and `!`): colour utilities
  (`bg|text|border(-[xytrblse])?|outline|ring|ring-offset|divide|fill|stroke|decoration|placeholder|caret|accent|shadow|from|via|to`)
  may only name `white|black|transparent|current|inherit|neutral-<n>`, with an
  optional `/<opacity>`; no arbitrary colour values except CSS system colours
  under the `forced-colors:` variant (`forced-colors:border-[ButtonText]`); no `bg-linear-*`,
  `bg-radial-*`, `bg-conic-*`, `bg-gradient-*`, `bg-[url(`, `backdrop-*`,
  `mix-blend-*`, `font-[`, `font-serif`.
- **TSX and HTML markup:** no `img`, `video`, `iframe`, `picture`, `source`
  elements or `src`/`srcset` attributes; no `style` attribute; SVG `fill` and
  `stroke` attributes are `none` or `currentColor`.
- **CSS:** every colour is achromatic: hex with r = g = b, `oklch(L C H)` with
  C = 0 (hue may be `none`), `rgb()` with r = g = b, the keywords `white`,
  `black`, `transparent`, `currentcolor`, `inherit`, and CSS system colours
  inside `@media (forced-colors: active)`. No `*-gradient(`, `url(`,
  `@import`, `@font-face`; `font-family` only in the reset line, or
  `inherit`, or Tailwind's `--font-mono` stack.

## 5. The HTML/CSS twin

Twins are still hand-finished and must pass parity. `scripts/draft-twin.ts`
is upgraded to write a near-final twin (literal values with token comments,
role-based slug-prefixed class names, deduplicated rules, merged media
queries) that the author then tidies. The AGENTS.md twin section is rewritten
around that workflow.

## 6. Site

- Copy: the tagline, home hero, meta descriptions, empty states and README say
  "layout patterns". `SITE.tagline` becomes
  `Layout patterns for developers building with AI agents.`
- The tag filter shows the new `TAG_GROUPS` (Composition, Arrangement,
  Content, Density).
- The detail page shows the pattern's ideas, not just its code: the
  description plus "When to use", "Hierarchy" and "Responsive" notes from the
  brief, in the site's existing quiet style.
- The home showcase uses three new patterns.
- Font loading for component previews, capture and parity is removed, along
  with any CSP allowance that only served component fonts. The site's own
  local Geist fonts stay.

## 7. MCP server

Tool names and inputs stay (`search_components`, `get_component`,
`list_categories`). Descriptions, server instructions and the README describe
neutral layout patterns, layout tags instead of style tags, and no fonts.
Version 0.2.0; publishing waits for the user.

## 8. Content plan

A new set of about 150–190 distinct layout patterns across the 26 categories
(5–8 each), derived by clustering the 478 retired components by structure and
adding canonical layouts they miss. Two patterns are distinct only if their
wireframes differ; a re-skin is not a new pattern. The inventory lives in
`docs/superpowers/plans/2026-10-10-layout-pattern-inventory.md`.

## 9. Exemplar: `hero-split-image`

`Component.tsx`:

```tsx
export default function HeroSplitImage() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium text-neutral-500">Eyebrow or short announcement</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Headline that names the main outcome
          </h1>
          <p className="mt-6 max-w-lg text-lg text-pretty text-neutral-600">
            One or two sentences that say who this is for and what changes for them. Keep it under thirty words.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Primary action
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Secondary action
            </a>
          </div>
        </div>
        <div
          role="img"
          aria-label="Image placeholder: product screenshot or photo"
          className="flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 lg:aspect-square"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
      </div>
    </section>
  )
}
```

`meta.ts` fields:

- `description`: Two-column hero with the pitch and actions beside one large
  image. Use it to open a landing page where a product shot or photo matters
  as much as the headline.
- `tags`: `['split', 'media', 'spacious']`
- `wireframe`: the diagram in §3.3.
- `brief.layout`: One section with a 1152px (max-w-6xl) container, 24px side
  padding and 64px vertical padding (96px from 640px). From 1024px, two equal
  columns with a 64px gap, vertically centred: the text column holds an
  eyebrow, h1, lede and an action row; the media column holds one square image
  placeholder. Spacing: 16px eyebrow to headline, 24px headline to lede, 40px
  lede to actions, 12px between actions.
- `brief.hierarchy`: The headline reads first (60px semibold at desktop,
  balanced wrapping), then the image, then the lede (18px, neutral-600, at
  most 512px wide) and the primary action. The eyebrow is a 14px muted label
  for a category or announcement. One filled primary action and one outlined
  secondary action. Slots: eyebrow up to 6 words, headline up to 10, lede up
  to 30, action labels 2–3 words.
- `brief.states`: The primary action goes from neutral-900 to neutral-700 on
  hover; the secondary action fills neutral-50. Both are 44px tall with a 6px
  radius and show a 2px neutral-900 outline offset 2px on keyboard focus.
  Colour transitions use the default 150ms ease. The image placeholder is
  static.
- `brief.responsive`: Below 1024px the columns stack (text first, then the
  image at 4:3) with a 48px gap. The headline steps from 36px to 48px at 640px
  and 60px at 1024px. Actions wrap when they do not fit.
- `brief.usage`: Use it to open a landing page when one image (product shot,
  photo or illustration) carries as much weight as the pitch. Pick a centred
  hero when there is no strong visual, and a full-bleed media hero when the
  image is the message. Variations: put the image on the left, swap it for a
  video or a product UI frame, or add a logo row or rating under the actions.
