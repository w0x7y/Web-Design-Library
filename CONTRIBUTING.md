# Contributing a layout pattern

This guide takes you from an idea to a merged pull request for a new Patternbook layout pattern. It is written for people and AI agents alike. Follow the steps in order.

[`AGENTS.md`](AGENTS.md) is the rulebook: metadata, the wireframe kit, authoring rules, the scoped reset and twin-writing details. The [layout patterns spec](docs/superpowers/specs/2026-10-10-layout-patterns-design.md) wins wherever older documents disagree.

## What you are building

A pattern is one folder, `src/library/components/<slug>/`, with four files:

| File | What it is |
|---|---|
| `meta.ts` | Name, category, layout tags, description, preview kind, desktop wireframe and five-part AI brief. |
| `Component.tsx` | React + Tailwind v4. The site renders this file and shows its raw text, so it is exactly what users copy. |
| `index.html` | The same markup as a plain HTML fragment. |
| `styles.css` | Plain CSS for `index.html`, scoped under `.<slug>`. |

Both versions must render the same. A test screenshots both and compares them pixel by pixel. The catalog, prerender list, agent files and sitemap pick up the folder automatically. Internal APIs keep the word "component".

Ground rules:

- No new dependencies. A pattern imports nothing except React.
- Leave `meta.author` unset. It is reserved for a future credit system.
- Contributions are MIT licensed, like the rest of the repository ([`LICENSE`](LICENSE)).

## 1. Set up

You need Node 22.22 or newer.

```bash
git clone https://github.com/w0x7y/Web-Design-Library.git
cd Web-Design-Library
npm ci
npx playwright install chromium   # on Linux: npx playwright install --with-deps chromium
```

Run `npm test` before changing anything. Report existing failures before adding your pattern.

## 2. Plan the pattern

Pick a category from `GROUPS` in [`src/library/taxonomy.ts`](src/library/taxonomy.ts). The 26 categories and four groups stay unchanged. A pattern contribution does not add a category.

Check existing patterns in that category for overlap. Two patterns differ when their wireframes differ; a recolour is not a new pattern.

Pick one or more `LAYOUT_TAGS`: Composition (`centered`, `split`, `asymmetric`, `stacked`, `sidebar`), Arrangement (`grid`, `bento`, `list`, `row`, `table`, `layered`), Content (`media`, `icons`, `numbers`, `form`) and Density (`compact`, `spacious`).

The slug is unique kebab-case, starts with `<category>-`, and becomes both the folder name and `/c/<slug>`. The name starts with the category label and ` — `, then names the layout, such as `Hero — Split with image`.

Choose the preview kind:

- `section` renders full width at 1440px desktop and 390px mobile, and must reflow from 320px without horizontal scroll.
- `element` renders centred on white with 48px padding in a 480px-tall frame. It must stay within about 384px tall and 294px wide on mobile. Use a fixed root width with an `sm:` step, not a percentage.

Draw the desktop layout in `meta.wireframe`. Use box-drawing characters, region labels, `[Action]` labels, and a box labelled `Image` or `Video` for media. The limits are 64 characters per line and 24 lines; no tabs, trailing spaces or blank first/last line.

## 3. Write `Component.tsx`

Write the React version first. It is the reference the HTML twin must match. Follow the [wireframe kit](AGENTS.md#wireframe-kit): neutral colours, the default sans stack, consistent type, spacing, radius and controls.

```tsx
export default function HeroCentered() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Headline that names the main outcome
        </h1>
      </div>
    </section>
  )
}
```

Use one default export with no props. Interactivity is CSS-only; use `<details>`, group/peer variants, hover and focus. Icons are decorative inline stroke SVGs with `currentColor`. Media is a labelled `role="img"` placeholder with a neutral fill and glyph. Patterns contain no media elements, source attributes, inline styles or web fonts.

Copy names the role of each slot at the length real content would have. Use standard navigation/form labels, and realistic generic values when the format matters. Avoid brands, stories and lorem ipsum.

Use semantic markup and labelled controls. Every control needs visible keyboard focus. Styled lists need `role="list"`; hints and errors need `aria-describedby`. Text needs at least 4.5:1 contrast. Read [Accessibility details](AGENTS.md#accessibility-details) before styling focus or toggles.

## 4. Write `meta.ts`

Use the [field reference](AGENTS.md#metats) and [`hero-split-image/meta.ts`](src/library/components/hero-split-image/meta.ts) as the complete example. `addedAt` is the date you add the pattern. Description text appears in pages, indexes and MCP results, so explain the structure and when it fits.

The five brief fields let an agent rebuild the pattern without seeing the code:

- `layout`: regions, grid, widths, alignment and spacing, in px and Tailwind names.
- `hierarchy`: reading order, emphasis, content slots and length limits.
- `states`: hover, focus, open, selected, disabled and loading behaviour.
- `responsive`: breakpoints and what changes at each.
- `usage`: when to use it, when another pattern is better, and two or three variations.

`fonts` and `brief.style` are removed. The generated brief includes the wireframe and tells agents to apply the host project's design tokens, imagery and real content. Don't set `preview.parity` to hide a CSS mismatch.

## 5. Write `index.html` and `styles.css`

Read [Writing the HTML/CSS twin](AGENTS.md#writing-the-htmlcss-twin). Generate the twin from the finished `Component.tsx`:

```bash
npx tsx scripts/draft-twin.ts <slug> --write
```

It writes `index.html` and `styles.css` into the pattern folder, starting with the pinned reset. Then tidy it by hand as that section describes: role-based names, a base class plus modifiers for repeated anatomy, shorthands, and comments per region. Without `--write`, the draft goes to gitignored `twin-drafts/<slug>/`.

`index.html` is a fragment with the slug class on its root and no `<html>`, `<head>`, `<body>`, `<link>`, `<style>` or `<script>`. It keeps the React structure, text, attributes, ARIA and SVGs, with HTML attribute names. Part classes are `<slug>__part` and `<slug>__part--modifier`.

The finished CSS keeps every selector scoped under `.<slug>` with `.slug .slug__part` specificity and slug-prefixed animation names. Copy neutral values as `oklch(… 0 none)` with token comments; spacing is multiples of 0.25rem. Match type line heights and breakpoints exactly. Wrap hover in `@media (hover: hover)`. CSS has only achromatic colours, no gradients or external resources. Keep the reset sans family, `inherit`, or Tailwind's mono stack.

## 6. Check the rules

```bash
npm test
npm run lint
npm run typecheck
```

`src/library/library.test.ts` lists every folder's violations. Done when your folder has none and all checks pass.

## 7. Check parity, focus and layout

Playwright builds the site and serves it on `PATTERNBOOK_PORT`, default 4317. To run one pattern's checks:

```bash
PATTERNBOOK_PORT=4402 npx playwright test e2e/parity.spec.ts e2e/focus.spec.ts e2e/layout.spec.ts -g <slug>
```

Stop any stale server on the selected port before rerunning after changes. Outside CI, Playwright reuses an existing server without rebuilding. Give each checkout its own port.

| Spec | Passes when |
|---|---|
| `parity.spec.ts` | React and HTML/CSS have the same dimensions and differ in at most 1% of pixels at desktop and mobile capture sizes. |
| `focus.spec.ts` | Each enabled control in both versions gains an outline on keyboard focus in forced-colors mode. |
| `layout.spec.ts` | Sections have no horizontal scroll at 320, 640, 768, 1024 and 1280px; elements fit both capture frames. |

For a parity failure:

```bash
PATTERNBOOK_PORT=4402 npx playwright test e2e/parity.spec.ts -g <slug> --reporter=html
npx playwright show-report
```

Fix the CSS, not the tolerance. Size mismatches usually mean a wrong line height, width, padding or breakpoint. Use `preview.parity` only for a demonstrated sub-pixel text rendering difference you cannot remove, with a written reason.

## 8. Look at it

Run `npm run dev` and open `/c/<slug>`. Check desktop and mobile in both site themes, hover and focus, both code formats, Copy for AI, PNG Download and `/preview/<slug>`.

The dev server does not serve generated agent or discovery files. Run `npm run build && npm run serve:build` to inspect `/catalog.json`, `/llms.txt`, `/c/<slug>.md`, `.react.md`, `.html.md`, `/sitemap.xml` and `/robots.txt` on your selected port.

## 9. Open the pull request

Commit your pattern folder, then push and open a PR against `main`. Include its purpose, category, tags and preview kind, desktop/mobile screenshots, exact verification commands and results, and the reason for any parity override.

CI runs lint, typecheck, unit tests and the full e2e suite on Node 22. It checks the MCP package after the site build with `PATTERNBOOK_REQUIRE_BUILD=1`, plus a separate Node 20 MCP job without requiring a site build.

## Common violations and fixes

| Message | Fix |
|---|---|
| `meta.slug … does not match its folder` | Make folder and slug match, with the category prefix. |
| `meta.name must start with …` | Use the exact category label followed by ` — `. |
| `unknown layout tag …` | Pick a tag from `LAYOUT_TAGS`. |
| `meta.wireframe …` | Respect the line/width limits and whitespace rules. |
| `Component.tsx class … is outside the wireframe kit` | Use the neutral kit utility and remove decorative effects. |
| `Component.tsx must not contain <img>` | Use a labelled neutral media placeholder. |
| `Component.tsx uses hooks or event handlers` | Express the interaction with CSS or native details/summary controls. |
| `styles.css must begin with the scoped reset` | Regenerate the reset, then restore your rules below it. |
| `styles.css selector … is not scoped` | Prefix the selector with `.<slug> `. |
| `styles.css colour … must be achromatic` | Use a literal neutral token or equal RGB channels. |
| `index.html root element must have the class …` | Add the slug class to the root element. |

## For AI agents

Read [`AGENTS.md`](AGENTS.md) in full before authoring, and inspect an existing pattern of the same preview kind. Make authoring checks pass by changing the pattern. Keep the reset, rules and tolerance intact. Report exact commands and results, including any skipped checks.
