# AGENTS.md

Patternbook is a static site of copy-paste layout patterns, shown as neutral wireframes. This file is the authoring guide for patterns in `src/library/components/`. `npm test` enforces the mechanically checkable rules (`src/library/rules.ts`), and `npm run test:parity` checks that the HTML/CSS version renders like the React version.

For the end-to-end contribution workflow (setup, planning, verification, troubleshooting and the pull request), see [`CONTRIBUTING.md`](CONTRIBUTING.md). The [layout patterns spec](docs/superpowers/specs/2026-10-10-layout-patterns-design.md) is the contract wherever older documents disagree.

## Add a pattern

1. Create `src/library/components/<slug>/`. The slug is kebab-case, unique, starts with `<category>-`, and becomes the URL (`/c/<slug>`). A new pattern needs a distinct layout, not a new skin of an existing one.
2. Write `meta.ts` (field guide below), including a desktop wireframe and all five brief fields.
3. Write `Component.tsx` using the wireframe kit below and slot copy that describes what belongs there.
4. Run `npx tsx scripts/draft-twin.ts <slug> --write` to generate `index.html` and `styles.css`, then tidy them by hand (see [Writing the HTML/CSS twin](#writing-the-htmlcss-twin)).
5. Run `npm test`. Done when the library test reports no violations for your folder.
6. Run `npm run test:parity`. Done when both the `desktop` (1440px wide) and `mobile` (390px wide) tests pass. Each one renders in the frame the PNG is captured in. Fix the CSS, not the tolerance.
7. Run `npx playwright test e2e/focus.spec.ts e2e/layout.spec.ts`. Done when every control of both versions shows a focus outline in forced-colors mode, a section reflows from 320px up without horizontal scrolling, and an element fits its frame (see `preview.kind` below).
8. Check `/c/<slug>` in `npm run dev` at desktop and mobile widths, in both the light and dark site themes.

Set `PATTERNBOOK_PORT` to a free port for browser tests when several checkouts are running. Stop any stale server on that port before rerunning after changes; Playwright otherwise reuses its old build.

## Folder layout

```
src/library/components/<slug>/
  meta.ts         metadata, desktop wireframe and five-part brief
  Component.tsx   React + Tailwind v4 version: exactly the file users copy
  index.html      HTML version (markup fragment, no <html>/<head>)
  styles.css      plain CSS version, every selector scoped under .<slug>
```

The site renders `Component.tsx` and also shows its raw text, so what renders is byte-for-byte what users copy. The site never renders `index.html` or `styles.css`. The copy builder and the parity test use them.

New folders enter `llms.txt`, `catalog.json` and the Markdown briefs automatically at build time. The MCP server reads those files without separate registration. Agents see the pattern's `name`, `description`, wireframe and brief through the indexes, search results and briefs. Internal APIs retain the word "component".

## meta.ts

```ts
import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-split-image',
  name: 'Hero — Split with image',
  category: 'hero',
  tags: ['split', 'media', 'spacious'],
  description: 'One or two sentences: what the layout is and when to use it.',
  preview: { kind: 'section' },
  wireframe: `┌─────────────────────────────────────┐
│ Headline          ┌───────────────┐ │
│ Lede              │     Image     │ │
│ [Primary action]  └───────────────┘ │
└─────────────────────────────────────┘`,
  brief: { layout: '…', hierarchy: '…', states: '…', responsive: '…', usage: '…' },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
```

| Field | Meaning |
|---|---|
| `slug` | Same as the folder name; `<category>-<layout words>`, kebab-case and unique. |
| `name` | Starts with `CATEGORY_LABELS[category]` and ` — `, then the layout name, e.g. `Buttons — Primary, secondary and tertiary`. |
| `category` | One of `CATEGORY_IDS` in `src/library/taxonomy.ts`. Categories and groups stay unchanged. |
| `tags` | One or more `LAYOUT_TAGS` in `src/library/taxonomy.ts`, grouped as Composition, Arrangement, Content and Density. |
| `description` | Shown on the detail page, in `llms.txt` and `catalog.json`, and in MCP results: what the layout is and when to use it. |
| `preview.kind` | `section` renders full width at the viewport width. `element` renders centred on white with 48px padding inside a 480px-tall frame, so it must stay within about 384px tall and fit 294px wide on mobile. |
| `preview.parity` | Optional `{ maxDiffRatio, reason }`. Use it only for sub-pixel text rendering differences you cannot remove, and write the reason. Default tolerance is 1% of pixels. |
| `wireframe` | Desktop layout in a template literal using `┌ ┐ └ ┘ ─ │ ├ ┤ ┬ ┴ ┼`. Name regions with slot copy, actions as `[Label]`, media as a box labelled `Image` or `Video`. Draw one outer frame, so every line has the same width: at most 64 characters and 24 lines. Use printable ASCII and the light box-drawing characters `─ │ ┌ ┐ └ ┘ ├ ┤ ┬ ┴ ┼` only (`^`/`v` for chevrons, `...` for a menu, ASCII `|` for a separator in text). Box lines must connect: every vertical stroke continues into the line above or below it, so a column divider meets the frame with `┬` and `┴`, and a row divider with `├` and `┤`. A free-standing `───` rule is fine. No tabs, trailing spaces or blank first/last line. |
| `brief.layout` | Regions, grid, column widths, alignment and spacing, in px and Tailwind names. |
| `brief.hierarchy` | Reading order, emphasis, and each content slot with its length limit. |
| `brief.states` | Hover, focus, open, selected and disabled states. |
| `brief.responsive` | Breakpoints and what changes at each. |
| `brief.usage` | When to use it, when to pick a different pattern, and two or three variations. |
| `addedAt` | `YYYY-MM-DD`. |
| `author` | Reserved for community submissions. Leave it unset. |

Write the brief for the person or agent who reads it: describe the pattern itself, not how it was authored or tested. `npm test` rejects internal terms such as "inventory", "twin", "kit", "parity" and "the reference pattern".

## Wireframe kit

Use Tailwind's `neutral` palette plus `white`, `black`, `transparent`, `current` and `inherit`, with optional opacity modifiers. Page surfaces are white; alternate surfaces neutral-50; media and avatar fills neutral-100 or neutral-200. Borders are neutral-200, control borders neutral-300. Headings use neutral-900, body neutral-600, meta text neutral-500, decorative glyphs neutral-400. Dark bands may use neutral-900 or neutral-950 with white or neutral-300 text. Keep text contrast at least 4.5:1.

Use the default sans stack. `font-mono` is allowed for code, keys and tabular figures. Section containers use `mx-auto max-w-6xl px-6 py-16 sm:py-24`, `max-w-3xl` for narrow content. Controls use `rounded-md`, cards and media `rounded-lg`, and pills, avatars, switches and badges `rounded-full`. Use 1px borders. Shadows (`shadow-sm` to `shadow-lg`) are for elevation.

Display headlines use `text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl`; section headlines use `text-3xl font-semibold tracking-tight text-balance sm:text-4xl`. Item titles are `text-base font-semibold` or `text-lg`. Eyebrows are `text-sm font-medium text-neutral-500`, ledes `text-lg text-pretty text-neutral-600`, body `text-base text-neutral-600` (or `text-sm` in cards and elements), and meta text `text-sm text-neutral-500` or `text-xs`.

Every control uses:

```text
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900
```

| Part | Standard classes or markup |
|---|---|
| Primary action | `inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700` plus focus classes. |
| Secondary action | `inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50` plus focus classes. |
| Text link | `font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600` plus focus classes. |
| Card | `rounded-lg border border-neutral-200 bg-white p-6`. |
| Input | `h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500` plus focus classes, a label and `aria-describedby` for hints. |
| Badge | `inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium`. |
| Media placeholder | `<div role="img" aria-label="Image placeholder: product screenshot or photo">` with `flex aspect-[4/3] items-center justify-center rounded-lg bg-neutral-100 text-neutral-400` and a decorative `size-10` image glyph. Use a play glyph for video. |
| Avatar placeholder | `<span aria-hidden="true">AR</span>` with `flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600`, next to a visible name. |
| Icon tile | `<span aria-hidden="true">` with `flex size-10 items-center justify-center rounded-md bg-neutral-100 text-neutral-900` and a 20px stroke icon. |
| Logo placeholder | A 24px neutral glyph beside the word "Logo" in `font-semibold`. |

Icons are inline SVGs with a 24×24 viewBox, `strokeWidth="1.5"`, `fill="none"`, `stroke="currentColor"` and `aria-hidden="true"`. SVG fill and stroke values are only `none` or `currentColor`.

Copy names the role of each slot at a realistic length: "Headline that names the main outcome", "Primary action", "Plan name". Standard navigation and form labels are fine. Use generic realistic values only when the format matters, such as prices, dates, counts, names or emails. Leave brand, industry and story names out; no lorem ipsum or jokes.

## Authoring rules

These are the [layout patterns spec §4](docs/superpowers/specs/2026-10-10-layout-patterns-design.md#4-authoring-rules-replace-agentsmd-authoring-rules), verbatim. Its §2 defines the kit referenced here:

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

`rules.ts` also checks that `styles.css` starts with the reset, that every selector outside `@keyframes` starts with `.<slug>`, that keyframe names start with the slug, that the root element of `index.html` has the class `<slug>`, and that `index.html` has no `<link>`, `<style>` or `<script>`.

The kit checker rejects colour utilities outside the allowed neutral palette, arbitrary colours, gradients, backdrop effects, blend modes, filters, arbitrary font families, serif fonts and decorative animation. Both formats reject media elements (`img`, `video`, `iframe`, `picture`, `source`), `src`/`srcset`, inline style and painted SVG attributes. CSS colours must be achromatic: equal RGB channels, hex with equal red/green/blue, zero-chroma `oklch`, or the kit keywords. System colours are allowed inside forced-colors media only, and in TSX only as arbitrary values under the `forced-colors:` variant (`forced-colors:border-[ButtonText]`). CSS has no gradients, `url()`, `@import` or `@font-face`. The only font families are the reset line, `inherit` and Tailwind's `--font-mono` stack.

## styles.css reset template

Every `styles.css` begins with this block, with `SLUG` replaced by the slug:

```css
/* Scoped reset: mirrors Tailwind preflight for this component only */
.SLUG, .SLUG *, .SLUG *::before, .SLUG *::after { box-sizing: border-box; margin: 0; padding: 0; border: 0 solid; }
.SLUG { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; line-height: 1.5; -webkit-text-size-adjust: 100%; tab-size: 4; }
.SLUG :is(h1, h2, h3, h4, h5, h6) { font-size: inherit; font-weight: inherit; }
.SLUG a { color: inherit; text-decoration: inherit; }
.SLUG :is(b, strong) { font-weight: bolder; }
.SLUG :is(ol, ul, menu) { list-style: none; }
.SLUG :is(img, svg, video, canvas, picture) { display: block; vertical-align: middle; }
.SLUG :is(img, video) { max-width: 100%; height: auto; }
.SLUG :is(button, input, select, optgroup, textarea) { font: inherit; letter-spacing: inherit; color: inherit; background-color: transparent; border-radius: 0; opacity: 1; }
.SLUG ::placeholder { opacity: 1; color: color-mix(in oklab, currentcolor 50%, transparent); }
.SLUG table { text-indent: 0; border-color: inherit; border-collapse: collapse; }
.SLUG summary { display: list-item; }
```

The template is `resetCss()` in `src/library/reset.ts`, and `rules.ts` checks every line of it, ignoring line endings and trailing whitespace. The `font-family` line is Tailwind's default `--font-sans`. If a Tailwind upgrade changes that default, `npm test` fails: update `reset.ts`, this block and every `styles.css` together.

## Accessibility details

Rule 8 in practice. `e2e/focus.spec.ts` checks focus outlines; review the other accessibility details yourself:

- **Focus.** Give every control a visible `focus-visible:` outline. When a wrapper or sibling shows focus instead (a field's border, a card's ring), remove the control's own outline with `focus-visible:outline-hidden`, never a bare `outline-hidden` or `outline-none`: forced-colors mode turns `outline-hidden`'s transparent outline into a visible one, so a bare one rings the control all the time, and `outline-none` leaves no focus cue there at all. In the twin, put `outline-style: none` on the `:focus-visible` selector and add `@media (forced-colors: active) { … :focus-visible { outline: 2px solid transparent; outline-offset: 2px; } }`.
- **Forced colours.** Forced-colors mode repaints text, backgrounds and borders in system colours. Don't draw state with a fill alone (give a switch's track a `forced-colors:` border and its knob a system colour such as `CanvasText`), and hide an icon with opacity rather than a colour that matches its background.
- **Lists.** Give a styled `<ul>` or `<ol>` `role="list"`: Safari drops the list semantics of `list-style: none` lists.
- **Hints and names.** Tie hint and error text to its field with `aria-describedby`. A repeated control (Add, Save, Remove) names its item in its label.

## Writing the HTML/CSS twin

Finish `Component.tsx` first, then generate the twin and tidy it by hand:

```bash
npx tsx scripts/draft-twin.ts <slug> --write
```

The generator renders the React markup and compiles its Tailwind classes into `index.html` and `styles.css`: the scoped reset, the root class, literal values with token comments, role-based part classes, readable `[open]`/`:hover`/`:checked` selectors, merged breakpoints and prefixed keyframes. Elements with identical class lists share a class. Without `--write` it writes to `twin-drafts/<slug>/` instead. Running it again overwrites your tidying, so regenerate only after changing the React version, then tidy again.

Tidy until the twin reads like hand-written CSS (the three reference patterns show the result):

- **Names.** Rename vague, numbered or misleading parts (`__button-2`, `__meta` for an eyebrow, `__button--primary` on a disabled button) after their role, in the HTML and CSS together.
- **Shared anatomy.** When several parts repeat most declarations (button variants, cards, list items), move the shared declarations into one base class and keep the differences in modifiers: `class="slug__action slug__action--primary"`.
- **Shorthands.** Collapse longhands where the result is the same: `border-top: 1px solid …`, `outline: 2px solid …`, `line-height: 1.5` for `calc(1.5 / 1)`. Merge identical `:focus-visible` rules into the base class.
- **Order.** Group rules by region with a short comment per group (`/* Actions */`). Keep base rules before modifiers, and hover, focus and breakpoint blocks after them, as generated, because the cascade depends on that order.
- **Redundancy.** Delete declarations a breakpoint repeats without changing.
- **Whitespace.** Keep inline adjacency as generated. A line break between inline elements renders as a space.

Then run the rules, parity, focus and layout checks again. Parity must pass at the default tolerance.

Background for reading or fixing a twin:

- **Tokens.** Copy neutral colour values from `node_modules/tailwindcss/theme.css` as `oklch(… 0 none)`, with the token name in a comment. Spacing is `n × 0.25rem`.
- **Type.** `text-sm` sets both font size and line height (`0.875rem` and `calc(1.25 / 0.875)`). An arbitrary `text-[…]` sets only the size. `leading-*` overrides the line height of responsive `text-*` sizes too.
- **Variants.** Breakpoints are `@media (width >= 40rem)` for `sm:`, `48rem` for `md:` and `64rem` for `lg:`. Tailwind wraps `hover:` in `@media (hover: hover)`, so wrap the twin's hover rules the same way.
- **Colour.** Opacity modifiers become alpha: `bg-white/10` is `rgb(255 255 255 / 0.1)` and `bg-neutral-900/50` is `oklch(20.5% 0 none / 0.5)`.
- **Specificity.** Reset rules such as `.slug :is(svg)` are (0,1,1) and beat a single class. Write part rules as `.slug .slug__part` (0,2,0).
- **Naming.** Prefix element classes with the slug (`.slug__part`, `.slug__part--modifier`) so host-page classes cannot collide. Prefix `@keyframes` names too.
- **Element sizing.** An element's capture root is `fit-content` wide (`app/stage.css`), so give element roots fixed widths with `sm:` steps (e.g. `w-72 sm:w-[22rem]`) rather than percentages.
- **Debugging.** Run `npx playwright test e2e/parity.spec.ts --reporter=html`, then `npx playwright show-report`, to see the `diff` image attached to a failing test. Fix the CSS, not the tolerance.
