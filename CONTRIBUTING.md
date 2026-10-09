# Contributing a component

This guide takes you from an idea to a merged pull request for new Patternbook components. It is written for people and AI agents alike. Follow the steps in order.

[`AGENTS.md`](AGENTS.md) is the rulebook: the `meta.ts` fields, the authoring rules, the `styles.css` reset and the details of the HTML/CSS twin. This guide tells you when to use each part. Where the two seem to disagree, `AGENTS.md` and the tests win.

## What you are building

A component is one folder, `src/library/components/<slug>/`, with four files:

| File | What it is |
|---|---|
| `meta.ts` | Name, category, tags, description, preview kind, fonts and the AI brief. |
| `Component.tsx` | The React + Tailwind v4 version. The site renders this file and shows its raw text, so it is exactly what users copy. |
| `index.html` | The same markup as a plain HTML fragment. |
| `styles.css` | Plain CSS for `index.html`, scoped under `.<slug>`. |

Both versions must look the same. A test screenshots both and compares them pixel by pixel. Nothing else needs registering: the catalog, the pre-render list, `llms.txt` and the sitemap all pick up the folder automatically.

Ground rules:

- **No new dependencies.** A component imports nothing except React.
- **Leave `meta.author` unset.** It is reserved for a future credit system.
- **Contributions are MIT licensed**, like the rest of the repository ([`LICENSE`](LICENSE)).

## 1. Set up

You need Node 22.22 or newer.

```bash
git clone https://github.com/w0x7y/Web-Design-Library.git
cd Web-Design-Library
npm install
npx playwright install chromium   # on Linux: npx playwright install --with-deps chromium
```

Run `npm test` once before you change anything. It should pass. If it doesn't, your setup is the problem, not your component.

## 2. Plan the component

Decide these before you write code. They go in `meta.ts`.

**Category.** Pick one from `GROUPS` in [`src/library/taxonomy.ts`](src/library/taxonomy.ts): a section (`hero`, `navbar`, `features`, `pricing`, `testimonials`, `cta`, `faq`, `footer`), a card (`profile-card`, `team`, `product-card`, `stat-card`, `testimonial-card`, `blog-card`), an element set (`buttons`, `inputs`, `badges`, `toggles`, `tabs`, `dropdowns`) or app UI (`login`, `signup`, `settings`, `data-table`, `empty-state`, `dashboard`). You cannot add a category in a component PR.

**Check for overlap.** Look at the existing components in that category (`ls src/library/components`, or browse `/c/<slug>` in `npm run dev`). A new one should look clearly different, not like a recolour of something already there.

**Style tags.** One or more of `minimal`, `brutalist`, `glass`, `editorial`, `playful`, `corporate`, `dark`, `light`, `gradient`, `has-image`. Add `has-image` if it shows a photo, and `light` or `dark` for its overall theme.

**Slug.** Kebab-case and unique. It is the folder name and the URL (`/c/<slug>`). Most slugs are the category followed by the look: `hero-split-image`, `pricing-brutalist`, `badges-playful`.

**Name.** Element sets read `<Kind> — <Style>` with an em dash, e.g. `Buttons — Minimal`. Everything else is a short phrase in sentence case, e.g. `Split hero with image`, `Glass profile card`.

**Preview kind.** This decides how the component is previewed, captured and tested:

- `section` renders full width at the viewport width (1440px desktop, 390px mobile). It must reflow from 320px wide without horizontal scrolling. Heroes, navbars, footers, pricing tables and full pages are sections.
- `element` renders centred on white with 48px padding in a 480px-tall frame. It must stay within about 384px tall and 294px wide on mobile. Give its root a fixed width with an `sm:` step, such as `w-72 sm:w-[22rem]`, not a percentage. Button sets, single cards and small widgets are elements.

**Fonts.** Leave them out to use the default sans stack, or pick Google Fonts. You will declare them in `meta.fonts` as css2 `family` params, e.g. `'Fredoka:wght@300..700'`.

**Images.** Use only URLs from `IMAGES` in [`src/library/assets.ts`](src/library/assets.ts). To add a new image, see [Adding an image](#adding-an-image).

## 3. Write `Component.tsx`

Write the React version first. It is the reference the HTML twin has to match.

```tsx
// Fonts: Fredoka (https://fonts.google.com/specimen/Fredoka)
export default function BadgesPlayful() {
  return (
    <div className="flex w-72 flex-col gap-5 rounded-[1.75rem] bg-orange-50 p-5 font-['Fredoka',ui-rounded,system-ui,sans-serif] text-indigo-950 sm:w-[36rem]">
      {/* … */}
    </div>
  )
}
```

The rules, from [`AGENTS.md`](AGENTS.md#authoring-rules):

- **Exactly one default export, and no props.** Import nothing except `react`, and only if you need it.
- **If `meta.fonts` is not empty, line 1 must start with `// Fonts: `** and name every family. Use the font through an arbitrary class with a fallback stack, such as `font-['Hanken_Grotesk',ui-sans-serif,system-ui,sans-serif]`.
- **Use Tailwind v4 utility classes only.** No `dark:` variants: the site's dark mode must never restyle a component. No global CSS, no `<style>` tags.
- **Interactivity is CSS-only.** Use `hover:`, `focus-visible:`, `group-*`, `peer-*`, `has-*`, `<details>`/`<summary>` and transitions. No hooks (`useState`, `useEffect`, …) and no event handlers (`onClick`, `onChange`, …). The rule checker rejects any `useX(` or `onX=`.
- **Icons are inline `<svg>`.** No icon packages. Give decorative icons `aria-hidden="true"`.
- **Every `<img>` has a literal `src` from `IMAGES`**, plus `alt`, `width` and `height`. Use the image's real intrinsic size.
- **Make it accessible:**
  - Use semantic elements (`<nav>`, `<header>`, `<button>`, `<label>`).
  - Label every control, and name the item in repeated labels: `aria-label="Remove filter: Dogs"`, not `"Remove"`.
  - Give every control a visible `focus-visible:` outline.
  - Keep text contrast sufficient.
  - Give styled lists `role="list"`.
  - Tie hint and error text to its field with `aria-describedby`.
  - Read [Accessibility details](AGENTS.md#accessibility-details) before you style focus or toggles. Forced-colors mode has traps, such as using `focus-visible:outline-hidden` and not a bare `outline-hidden`.
- **Use realistic content.** Write copy for a plausible product, not lorem ipsum.

## 4. Write `meta.ts`

```ts
import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-playful',
  name: 'Badges — Playful',
  category: 'badges',
  tags: ['playful'],
  description: 'What it is and when to use it, in one or two sentences.',
  preview: { kind: 'element' },
  fonts: ['Fredoka:wght@300..700'],
  brief: {
    layout: '…',
    style: '…',
    states: '…',
    responsive: '…',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
```

The field reference is in [`AGENTS.md`](AGENTS.md#metats). Some notes:

- `slug` must equal the folder name.
- `addedAt` is the date you add the component, `YYYY-MM-DD`.
- `description` appears on cards and in `llms.txt`. Say what it contains and where it fits, e.g. "…Use it on listing cards, profiles and filter bars of friendly consumer apps."
- `brief` is what **Copy for AI** and `/c/<slug>.md` give to an agent. Each of the four fields must be detailed enough to rebuild the component without seeing the code, so give sizes in px, colours as Tailwind names (`indigo-950`, `lime-300`) and breakpoints in px:
  - `layout`: structure, widths, padding, gaps and element sizes.
  - `style`: fonts, colours, radii, borders, shadows and the reason for any accessibility choice.
  - `states`: hover, focus, motion and reduced motion, or a statement that there are none.
  - `responsive`: what changes below and above each breakpoint.

  [`badges-playful/meta.ts`](src/library/components/badges-playful/meta.ts) shows the level of detail.
- Don't set `preview.parity` yet. It exists only for sub-pixel font differences you cannot remove (step 7).

## 5. Write `index.html` and `styles.css`

This is the HTML + CSS twin: the same component with no build step. Read [Writing the HTML/CSS twin](AGENTS.md#writing-the-htmlcss-twin) before you start. It covers the details that decide whether parity passes.

### `index.html`

- A markup fragment: no `<html>`, `<head>` or `<body>`.
- No `<link>`, `<style>` or `<script>`. The copy builder and the test harness add fonts and styles.
- The root element has the class `<slug>`.
- Keep the same structure, text, attributes, ARIA and SVGs as `Component.tsx`, with HTML attribute names (`class`, `stroke-width`, `aria-hidden`).
- Name element classes `<slug>__part` and `<slug>__part--modifier`, e.g. `badges-playful__status--reserved`.

### `styles.css`

It must begin with the scoped reset, byte for byte. Generate it, so there's nothing to mistype:

```bash
npx tsx -e "import { resetCss } from './src/library/reset.ts'; process.stdout.write(resetCss('<slug>'))" > src/library/components/<slug>/styles.css
```

Then add your rules below a `/* Component */` comment:

- Scope every selector under `.<slug>` (`@keyframes` blocks excepted), and write part rules as `.<slug> .<slug>__part` so they beat the reset's specificity.
- No `@import`.
- Copy colours from `node_modules/tailwindcss/theme.css` as `oklch(…)` with the token name in a comment: `oklch(25.7% 0.09 281.288); /* indigo-950 */`.
- Spacing is `n × 0.25rem`. `text-sm` sets both size and line height; an arbitrary `text-[…]` sets only the size.
- Breakpoints are `@media (width >= 40rem)` (`sm:`), `48rem` (`md:`) and `64rem` (`lg:`).
- Wrap hover rules in `@media (hover: hover)`, as Tailwind does.
- Prefix `@keyframes` names with the slug, e.g. `badges-playful-ping`.
- If a wrapper shows focus in place of the control, put `outline-style: none` on the control's `:focus-visible` rule and add the `@media (forced-colors: active)` fallback from [Accessibility details](AGENTS.md#accessibility-details).

[`badges-playful/styles.css`](src/library/components/badges-playful/styles.css) is a complete example.

## 6. Check the rules

```bash
npm test
```

`src/library/library.test.ts` checks every component folder against `src/library/rules.ts`. A failure lists your folder and its violations, each with the fix it expects. You're done with this step when `npm test` passes. Also run what CI runs:

```bash
npm run lint
npm run typecheck
```

## 7. Check parity, focus and layout

These Playwright specs build the site and serve it on port 4317 before they run. The first run takes a few minutes. To run only your components' tests, pass their full slugs to `-g` as a regular expression (`-g "slug-a|slug-b"` for several):

```bash
npx playwright test e2e/parity.spec.ts e2e/focus.spec.ts e2e/layout.spec.ts -g <slug>
```

> **Stale server.** Outside CI, Playwright reuses any server already on port 4317 and does not rebuild. The React side of each test comes from that build, so after you change `Component.tsx`, stop any running `npm run serve:build` (or an earlier test server) before you rerun. Otherwise you are testing old code.

What each spec requires:

| Spec | Passes when |
|---|---|
| `parity.spec.ts` | At `desktop` (1440px) and `mobile` (390px), the HTML/CSS screenshot has the same size as the React one and differs in at most 1% of pixels. |
| `focus.spec.ts` | In forced-colors mode, tabbing to every control in both versions makes a new outline appear. Components with no controls are skipped. |
| `layout.spec.ts` | A section has no horizontal scroll at 320, 640, 768, 1024 and 1280px. An element fits its frame inside the stage padding at both capture sizes. |

When parity fails, open the diff image:

```bash
npx playwright test e2e/parity.spec.ts -g <slug> --reporter=html
npx playwright show-report
```

Fix the CSS, not the tolerance. A size mismatch usually comes from a missing line height, a padding or width that doesn't match, or a missed breakpoint. Small diffs scattered over text usually come from the font stack or `-webkit-font-smoothing`. Use `preview.parity: { maxDiffRatio, reason }` only for sub-pixel font rendering you have shown you can't remove, and write the reason down.

## 8. Look at it

```bash
npm run dev
```

Open `/c/<slug>` and check:

- the desktop, tablet and mobile previews, in both the light and dark **site** themes (the component itself must not change);
- every hover and keyboard-focus state;
- **Copy code** in both formats, and **Copy for AI**: does the brief describe what you see?
- **Download** at desktop and mobile: the PNG includes the fonts and images;
- `/preview/<slug>`, the bare stage page, which shows the component on its own.

`npm run dev` doesn't serve `/c/<slug>.md` or `llms.txt`. To check those, run `npm run build && npm run serve:build` and open `http://localhost:4317/c/<slug>.md`.

## 9. Open the pull request

Commit your component folders, and `src/library/assets.ts` if you added an image. Then push and open a PR against `main`.

In the PR description, include:

- for each component: what it is, and its category, tags and preview kind;
- desktop and mobile screenshots (use the site's Download button);
- the output of the checks you ran: `npm test`, lint, typecheck, and the Playwright line from step 7;
- any `preview.parity` override, with its reason.

CI runs lint, typecheck, `npm test` and the full `npm run test:e2e` on every push. If the e2e job fails, the `playwright-report` artifact on the run contains the diff images.

## Adding an image

Prefer an image already in `IMAGES`. If none fits:

1. Pick an Unsplash photo and use its `images.unsplash.com` URL with a width parameter that matches the others (`?w=400&q=80` for portraits, `?w=800&q=80` for products, `?w=1600&q=80` for scenes).
2. Check that it allows cross-origin use, which image capture needs:
   ```bash
   curl -sI -H "Origin: https://example.com" "<url>"
   ```
   It must return `200` and `access-control-allow-origin: *`.
3. Add it to `IMAGES` under the right heading, with a descriptive camelCase key.
4. Paste the URL literally into both `Component.tsx` and `index.html`. Components can't import `IMAGES`. Set `width` and `height` to the size the URL actually serves.

## Common violations and fixes

| Message (from `npm test`) | Fix |
|---|---|
| `meta.slug "…" does not match its folder` | Rename the folder or the slug so they match. |
| `styles.css must begin with the scoped reset … line N should read: …` | Regenerate the reset with the `npx tsx` command in step 5, then paste your rules back under it. |
| `styles.css selector "…" is not scoped under .<slug>` | Prefix the selector with `.<slug> `. |
| `Component.tsx uses hooks or event handlers` | Replace the state with CSS: `<details>`, `peer-checked:`, `has-[:checked]:`, `group-hover:`. A bare `onX=` anywhere in the file, even in a comment, also triggers this. |
| `Component.tsx must start with a "// Fonts: " comment` | Make line 1 `// Fonts: Family Name (https://fonts.google.com/specimen/Family+Name)`, naming every family in `meta.fonts`. |
| `meta.fonts contains an invalid Google Fonts family` | Use the css2 `family` form, e.g. `Inter:wght@400..700` or `Instrument Serif:ital@0;1`, unencoded. |
| `<img> src … is not a URL from IMAGES` | Use a literal URL from `src/library/assets.ts`, or add one (see above). |
| `index.html root element must have the class "<slug>"` | Add the slug class to the first element. An HTML comment before it is fine. |

## For AI agents

- Read [`AGENTS.md`](AGENTS.md) in full before writing code, and look at one existing component of the same preview kind.
- Make tests pass by changing the component, never by editing `rules.ts`, the specs, the reset or another component's tolerance.
- Don't add `preview.parity` to make a failing test pass unless you can name the sub-pixel font cause.
- Report the exact commands you ran and their results. If you skipped a Playwright spec (no browser available, for example), say so; don't claim it passed.
