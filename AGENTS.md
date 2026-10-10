# AGENTS.md

Patternbook is a static site of copy-paste UI components. This file is the authoring guide for components in `src/library/components/`. `npm test` enforces the mechanically checkable rules (`src/library/rules.ts`), and `npm run test:parity` checks that the HTML/CSS version renders like the React version.

For the end-to-end contribution workflow (setup, planning, verification, troubleshooting and the pull request), see [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Add a component

1. Create `src/library/components/<slug>/`. The slug is kebab-case, unique, and becomes the URL (`/c/<slug>`).
2. Write `meta.ts` (field guide below).
3. Write `Component.tsx`.
4. Write `index.html` and `styles.css`. `styles.css` begins with the reset template below.
5. Run `npm test`. Done when the library test reports no violations for your folder.
6. Run `npm run test:parity`. Done when both the `desktop` (1440px wide) and `mobile` (390px wide) tests pass. Each one renders in the frame the PNG is captured in. Fix the CSS, not the tolerance.
7. Run `npx playwright test e2e/focus.spec.ts e2e/layout.spec.ts`. Done when every control of both versions shows a focus outline in forced-colors mode, a section reflows from 320px up without horizontal scrolling, and an element fits its frame (see `preview.kind` below).
8. Check `/c/<slug>` in `npm run dev` at desktop and mobile widths, in both the light and dark site themes.

## Folder layout

```
src/library/components/<slug>/
  meta.ts         metadata (see below)
  Component.tsx   React + Tailwind v4 version: exactly the file users copy
  index.html      HTML version (markup fragment, no <html>/<head>)
  styles.css      plain CSS version, every selector scoped under .<slug>
```

The site renders `Component.tsx` and also shows its raw text, so what renders is byte-for-byte what users copy. The site never renders `index.html` or `styles.css`. The copy builder and the parity test use them.

New folders enter `llms.txt`, `catalog.json` and the Markdown briefs automatically at build time. The MCP server reads those files without separate registration. Agents see the component's `name`, `description` and `brief` text through the indexes, search results and briefs.

## meta.ts

```ts
import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-split-image',
  name: 'Split hero with image',
  category: 'hero',
  tags: ['minimal', 'light', 'has-image'],
  description: 'One or two sentences: what it is and when to use it.',
  preview: { kind: 'section' },
  fonts: ['Hanken Grotesk:wght@400..700'],
  brief: { layout: '…', style: '…', states: '…', responsive: '…' },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
```

| Field | Meaning |
|---|---|
| `slug` | Same as the folder name. |
| `name` | Display name. Element sets read `<Kind> — <Style>`, e.g. `Buttons — Minimal`. |
| `category` | One of `CATEGORY_IDS` in `src/library/taxonomy.ts`. |
| `tags` | One or more of `STYLE_TAGS` in `src/library/taxonomy.ts`. |
| `description` | Shown on the detail page, in `llms.txt` and `catalog.json`, and in MCP search results and briefs: what it is and when to use it. |
| `preview.kind` | `section` renders full width at the viewport width. `element` renders centred on white with 48px padding inside a 480px-tall frame, so it must stay within about 384px tall and fit 294px wide on mobile. |
| `preview.parity` | Optional `{ maxDiffRatio, reason }`. Use it only for sub-pixel font differences you cannot remove, and write the reason. The default tolerance is 1% of pixels. |
| `fonts` | Google Fonts css2 `family` params, e.g. `'Instrument Serif:ital@0;1'`. Leave it empty to inherit the page font. |
| `brief.*` | The four sections of the AI brief (layout, visual style, hover/focus states, responsive changes). Write them so an agent could rebuild the component without seeing the code: name colours, sizes and breakpoints. |
| `addedAt` | `YYYY-MM-DD`. |
| `author` | Reserved for community submissions. Leave it unset. |

Font metadata must contain a family name, optionally followed by CSS2 axis names and value tuples. Every tuple must have one value or strictly ascending range per axis; tuples must not overlap or touch. `npm test` rejects malformed names, duplicate axes and invalid values. Keep metadata unencoded; the copy builder and preview encode the URL parameters.

## Authoring rules

These are the [original design spec §4.5](docs/superpowers/specs/2026-10-08-web-library-design.md#45-authoring-rules), verbatim:

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

`rules.ts` also checks that `styles.css` starts with the reset, that every selector outside `@keyframes` starts with `.<slug>`, that the root element of `index.html` has the class `<slug>`, and that `index.html` has no `<link>`, `<style>` or `<script>`.

Before adding an image to `IMAGES`, check that `curl -sI -H "Origin: https://example.com" <url>` returns `200` and `access-control-allow-origin: *`. Use the image's real intrinsic size for `width` and `height`.

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

The twin passes parity when it reproduces Tailwind's computed values exactly. These are the details that are easy to miss:

- **Tokens.** Copy colour values from `node_modules/tailwindcss/theme.css` as `oklch(…)`, with the token name in a comment. Spacing is `n × 0.25rem`.
- **Type.** `text-sm` sets both font size and line height (`0.875rem` and `calc(1.25 / 0.875)`). An arbitrary `text-[…]` sets only the size. `leading-*` also overrides the line height of any responsive `text-*` size.
- **Variants.** Breakpoints are `@media (width >= 40rem)` for `sm:`, `48rem` for `md:` and `64rem` for `lg:`. Tailwind wraps `hover:` in `@media (hover: hover)`, so wrap the twin's hover rules the same way.
- **Colour.** Gradients interpolate in oklab with stops at 0%, 50% and 100%, e.g. `linear-gradient(to top right in oklab, A 0%, B 50%, C 100%)`. Opacity modifiers become alpha: `bg-white/10` is `rgb(255 255 255 / 0.1)` and `bg-sky-400/50` is `oklch(74.6% 0.16 232.661 / 0.5)`.
- **Specificity.** Reset rules such as `.slug :is(img, video)` are (0,1,1) and beat a single class. Write component rules as `.slug .slug__part` (0,2,0).
- **Naming.** Prefix element classes with the slug (`.slug__part`, `.slug__part--modifier`), so that host-page classes like `.btn` cannot collide. `@keyframes` names are global too, so prefix them as well.
- **Fonts.** In TSX, use an arbitrary family class with a fallback stack, e.g. `font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]`. Never change the theme. Use the same stack in the CSS.
- **Element sizing.** An element's capture root is `fit-content` wide (`app/stage.css`), so give element roots fixed widths with `sm:` steps (e.g. `w-72 sm:w-[22rem]`) rather than percentages.
- **Debugging.** Run `npx playwright test e2e/parity.spec.ts --reporter=html`, then `npx playwright show-report`, to see the `diff` image attached to a failing test.
