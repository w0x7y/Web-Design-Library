# Web Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Web Library, a static, pre-rendered site of ~36 copy-paste UI components that visitors take away as React + Tailwind code, HTML + CSS, an AI brief, or a PNG, with agent-readable `.md` files and `llms.txt`.

**Architecture:** React Router 8 framework mode with `ssr: false` and full pre-rendering, served from `build/client` on Vercel. Each component is a folder of four files (`meta.ts`, `Component.tsx`, `index.html`, `styles.css`). A client-safe registry lists metadata and lazy-loads components. A loader-only `.server` module supplies raw sources at build time. A Node loader feeds the post-build agent-file script and the tests. Pure builders produce the brief, the HTML snippet, the `.md` files, and `llms.txt`.

**Tech Stack:** React 19, TypeScript, Vite 8, Tailwind CSS v4, React Router 8.4, modern-screenshot 4.7, Shiki 4.5, Sonner 2, @vercel/analytics 2, Vitest 5, Playwright 1.64, pixelmatch + pngjs, postcss, tsx, sirv-cli.

**Spec:** `docs/superpowers/specs/2026-10-08-web-library-design.md`

## Global Constraints

- Node ≥ 22 locally and in CI. Package versions: `react-router` / `@react-router/dev` `^8.4.0`, `modern-screenshot` `^4.7.0`, `shiki` `^4.5.0`, `sonner` `^2.0.8`, `@vercel/analytics` `^2.0.1`, `vitest` `^5`, `@playwright/test` `^1.64`.
- Keep the existing TypeScript (`~6.0.2`), Tailwind v4, oxlint, and React 19.
- `SITE` in `app/site.ts` is the only place the name, slug, tagline, URL, and repo URL appear. Values: name `Web Library`, slug `web-library`, tagline `Copy-paste UI layouts for developers building with AI agents.`, url `https://web-design-library.vercel.app`, repoUrl `https://github.com/w0x7y/Web-Design-Library`.
- The site must not override Tailwind's default theme tokens (colors, spacing, radius, `--font-sans`, …), because components must render the same as in a stock Tailwind project. Shell-only tokens use new names: `--font-shell` (Geist) and `--font-shell-mono` (Geist Mono).
- Shell dark mode is class-based (`.dark` on `<html>`) via `@custom-variant dark (&:where(.dark, .dark *));`. Library components never use `dark:`.
- Component authoring rules: spec §4.5, codified in `AGENTS.md` (Task 2) and `src/library/rules.ts`.
- Viewports: desktop `1440×900`, tablet `768×1024`, mobile `390×844`. Element-kind frames are `480` tall. Capture scale is `2` and the capture timeout is `10000` ms.
- Download filename: `${SITE.slug}-${slug}-${viewport}.png`.
- Analytics events and their props, exactly: `copy_code {slug, format}`, `copy_ai {slug, format}`, `download_png {slug, viewport}`, `copy_image {slug}`. At most 2 props per event (Vercel Pro limit). Fire only on success.
- localStorage keys: `wl:theme` (`'light' | 'dark'`) and `wl:format` (`'react' | 'html'`).
- Commit messages are plain imperative sentences and end with `Co-Authored-By: Claude Opus 5.5 (1M context) <noreply@anthropic.com>`.

## Review Focus

1. **Unknown component or category URL** (`/c/does-not-exist`, `/browse/nope`), loaded directly through the SPA fallback. Expected: a "Component not found" / "Category not found" view with search, not a blank page or crash. Test: Task 6.
2. **Clipboard denied or unavailable** (permission rejected, no `navigator.clipboard`, no `ClipboardItem`). Expected: a "Couldn't copy" toast, the Code tab opens, and the code text is selected. Test: Task 7.
3. **Placeholder image fails to load during capture** (Unsplash blocked or down). Expected: the download still completes within 12 s, no hidden capture iframe is left behind, and the buttons re-enable. Test: Task 7.
4. **Odd or hand-edited query strings** (`?tags=dark,unknown,dark`, `?q=%20%20`, filters that match nothing). Expected: unknown tags are ignored, blank search means no search, and zero results show "No components match" with a working "Clear filters". Tests: Tasks 5 (unit) and 5 (e2e).
5. **Site dark mode leaking into component renders** (thumbnails and preview inheriting the shell's text color or font). Expected: components render on white with black default text in the default sans font, whatever the site theme. Test: Task 5.

---

## File Structure

```
app/
  root.tsx                 html shell, theme init script, fonts, <Toaster/>, <Analytics/>
  routes.ts                route table (shell layout + preview outside it)
  app.css                  Tailwind import, dark variant, shell tokens, capture + shiki CSS
  site.ts                  SITE constant
  routes/
    shell.tsx              layout route: Header + <Outlet/>
    browse.tsx             "/" and "/browse/:category"
    detail.tsx             "/c/:slug"
    preview.tsx            "/preview/:slug" (no shell)
    not-found.tsx          "*"
  components/
    Header.tsx  ThemeToggle.tsx  SearchField.tsx  Sidebar.tsx  TagFilter.tsx
    ComponentCard.tsx  LiveThumbnail.tsx  EmptyState.tsx  NotFoundView.tsx
    PreviewSurface.tsx  PreviewFrame.tsx  ViewportToggle.tsx  CodeView.tsx
    FormatSwitch.tsx  ActionBar.tsx  DownloadMenu.tsx
  lib/
    theme.ts  filters.ts  viewports.ts  format-preference.ts
    clipboard.ts  capture.ts  analytics.ts  highlight.server.ts
src/library/
  types.ts  taxonomy.ts  assets.ts  fonts.ts  paths.ts
  registry.ts              client-safe: metas + lazy components
  sources.server.ts        loader-only: raw sources via import.meta.glob ?raw
  rules.ts                 checkComponent(): authoring-rule violations
  brief.ts                 code/brief/agent-markdown/llms.txt builders
  components/<slug>/{meta.ts,Component.tsx,index.html,styles.css}
scripts/
  load-library.ts          Node: read all component folders → LibraryEntry[]
  build-agent-files.ts     post-build: write c/<slug>.md and llms.txt
e2e/
  smoke.spec.ts  parity.spec.ts  lib/parity-page.ts
AGENTS.md  README.md  vercel.json  react-router.config.ts  vite.config.ts
vitest.config.ts  playwright.config.ts  .github/workflows/ci.yml
```

Unit tests live next to their modules (`*.test.ts`).

---

### Task 1: React Router foundation, test tooling, CI

**Files:**
- Delete: `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `tsconfig.app.json`, `tsconfig.node.json`, `public/` (empty)
- Create: `react-router.config.ts`, `app/root.tsx`, `app/routes.ts`, `app/app.css`, `app/site.ts`, `app/routes/shell.tsx`, `app/routes/browse.tsx`, `app/routes/not-found.tsx`, `app/components/NotFoundView.tsx`, `src/library/paths.ts`, `src/library/paths.test.ts`, `vitest.config.ts`, `playwright.config.ts`, `e2e/smoke.spec.ts`, `vercel.json`, `.github/workflows/ci.yml`
- Modify: `package.json`, `vite.config.ts`, `tsconfig.json`, `.gitignore`, `.oxlintrc.json`

**Interfaces:**
- Produces: `SITE` (values in Global Constraints, `as const`).
- Produces: `prerenderPaths(input: { slugs: string[]; categories: string[] }): string[]` and `listComponentSlugs(dir?: string): string[]` (default `'src/library/components'`) in `src/library/paths.ts`.
- Produces: `NotFoundView({ title = 'Page not found' }: { title?: string })`. Renders an `h1` with `title`, the text "Try searching the library instead.", and a link home. Task 5 adds the search field.
- Produces: npm scripts `dev`, `build`, `typecheck`, `lint`, `test`, `test:e2e`, `test:parity`, `serve:build`.

- [ ] **Step 1: Install tooling**

```bash
npm i react-router@^8.4.0
npm i -D @react-router/dev@^8.4.0 vitest@^5 @playwright/test@^1.64 sirv-cli tsx
npx playwright install chromium
```

- [ ] **Step 2: Write the failing unit tests** in `src/library/paths.test.ts`

```ts
test('prerenderPaths lists home, categories, details and previews in order', () => {
  expect(prerenderPaths({ slugs: ['a', 'b'], categories: ['hero'] })).toEqual(
    ['/', '/browse/hero', '/c/a', '/preview/a', '/c/b', '/preview/b'])
})
test('listComponentSlugs returns [] for a missing directory', () => {
  expect(listComponentSlugs('does/not/exist')).toEqual([])
})
test('listComponentSlugs returns sorted directory names, ignoring files', () => {
  // mkdtemp; create dirs "b", "a" and file "x.txt"
  expect(listComponentSlugs(tmp)).toEqual(['a', 'b'])
})
```

`vitest.config.ts` is standalone (no `reactRouter()` plugin): `environment: 'node'`, `include: ['src/**/*.test.ts', 'app/**/*.test.ts', 'scripts/**/*.test.ts']`, `globals: true`.

- [ ] **Step 3: Run to verify failure**

Run: `npx vitest run src/library/paths.test.ts`. Expected: FAIL with an import error for `./paths`.

- [ ] **Step 4: Implement `src/library/paths.ts`**

`listComponentSlugs` uses `readdirSync(dir, { withFileTypes: true })` and returns `[]` on `ENOENT`.

- [ ] **Step 5: Convert the scaffold to framework mode**

- `vite.config.ts`: `plugins: [tailwindcss(), reactRouter()]`, `resolve: { tsconfigPaths: true }`.
- `react-router.config.ts`: `ssr: false`, and `prerender()` returns `prerenderPaths({ slugs: listComponentSlugs(), categories: [] })`. Task 2 replaces `[]` with `CATEGORY_IDS`.
- `tsconfig.json`: replace with a single config. Use the React Router template's options (`rootDirs: [".", "./.react-router/types"]`, `types: ["node", "vite/client"]`, `paths: {"~/*": ["./app/*"]}`, `strict`, `verbatimModuleSyntax`, `jsx: react-jsx`, `noEmit`), plus `noUnusedLocals` and `noUnusedParameters`. Include `**/*` and `.react-router/types/**/*`.
- `app/routes.ts`:
  ```ts
  export default [
    layout('routes/shell.tsx', [
      index('routes/browse.tsx'),
      route('browse/:category', 'routes/browse.tsx', { id: 'browse-category' }),
      route('*', 'routes/not-found.tsx'),
    ]),
  ] satisfies RouteConfig
  ```
- `app/root.tsx`:
  - `Layout` renders `<html lang="en" suppressHydrationWarning>` with `<body>` carrying no color or typography classes. `Meta`, `Links`, `ScrollRestoration`, and `Scripts` are as in the template.
  - `links` loads Google Fonts `Geist:wght@400..600` and `Geist+Mono:wght@400..500`.
  - `App` renders `<Outlet/>`. `ErrorBoundary` renders `NotFoundView` for 404 responses and a generic message otherwise.
- `app/routes/shell.tsx`: `<div className="min-h-screen bg-white font-shell text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100"><Outlet/></div>`.
- `app/routes/browse.tsx`: placeholder `<h1>All components</h1>`. `meta` returns the title `` `${SITE.name} — ${SITE.tagline}` ``.
- `app/routes/not-found.tsx`: renders `<NotFoundView />`. `meta` returns the title `` `Page not found — ${SITE.name}` ``.
- `app/app.css`:
  ```css
  @import "tailwindcss";
  @custom-variant dark (&:where(.dark, .dark *));
  @theme {
    --font-shell: "Geist", ui-sans-serif, system-ui, sans-serif;
    --font-shell-mono: "Geist Mono", ui-monospace, monospace;
  }
  ```
- `package.json` scripts:
  ```
  dev: react-router dev
  build: react-router build
  typecheck: react-router typegen && tsc
  lint: oxlint
  test: vitest run
  test:e2e: playwright test
  test:parity: playwright test e2e/parity.spec.ts
  serve:build: sirv build/client --port 4317 --single __spa-fallback.html
  ```
- `.gitignore`: add `build`, `.react-router`, `test-results`, `playwright-report`.
- `.oxlintrc.json`: turn `react/only-export-components` off for `app/root.tsx` and `app/routes/**` (route modules export `loader`/`meta`).
- `vercel.json`:
  ```json
  { "buildCommand": "npm run build", "outputDirectory": "build/client", "framework": null,
    "rewrites": [{ "source": "/(.*)", "destination": "/__spa-fallback.html" }] }
  ```

- [ ] **Step 6: Write the e2e smoke tests** in `e2e/smoke.spec.ts`

```ts
test('home page renders with site title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Web Library/)
})
test('unknown path renders not-found page', async ({ page }) => {
  await page.goto('/definitely/not/here')
  await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible()
})
```

`playwright.config.ts`:
- `testDir: 'e2e'`, chromium project only, `baseURL: 'http://localhost:4317'`.
- `webServer: { command: 'npm run build && npm run serve:build', url: 'http://localhost:4317', reuseExistingServer: !process.env.CI, timeout: 180_000 }`.

- [ ] **Step 7: Add CI**

`.github/workflows/ci.yml` runs on push and pull_request:
- `ubuntu-latest`, Node 22, `npm ci`.
- Then `lint`, `typecheck`, and `test`.
- Then `npx playwright install --with-deps chromium` and `test:e2e`.
- On failure, upload `playwright-report` as an artifact.

- [ ] **Step 8: Verify**

Run: `npm run lint && npm run typecheck && npm test && npm run test:e2e`. Expected: all pass. The build log shows `Prerender (html): / -> build/client/index.html` and `SPA Fallback -> build/client/__spa-fallback.html`.

- [ ] **Step 9: Commit**

```bash
git add -A && git commit -m "Convert to React Router framework mode with pre-rendering, tests and CI"
```

---

### Task 2: Component library core, preview route, parity test, three samples

**Files:**
- Create: `src/library/{types,taxonomy,assets,fonts,registry,sources.server,rules}.ts`, `src/library/rules.test.ts`, `src/library/fonts.test.ts`, `src/library/library.test.ts`, `scripts/load-library.ts`, `app/routes/preview.tsx`, `app/components/PreviewSurface.tsx`, `e2e/parity.spec.ts`, `e2e/lib/parity-page.ts`, `AGENTS.md`, plus three component folders (Step 9)
- Modify: `app/routes.ts`, `react-router.config.ts`, `app/app.css`

**Interfaces:**
- Produces (`taxonomy.ts`):
  ```ts
  export const GROUPS = [
    { id: 'sections', label: 'Sections', categories: ['hero','navbar','features','pricing','testimonials','cta','faq','footer'] },
    { id: 'cards', label: 'Cards & profiles', categories: ['profile-card','team','product-card','stat-card','testimonial-card','blog-card'] },
    { id: 'elements', label: 'Elements', categories: ['buttons','inputs','badges','toggles','tabs','dropdowns'] },
    { id: 'app-ui', label: 'App UI', categories: ['login','signup','settings','data-table','empty-state','dashboard'] },
  ] as const
  export type CategoryId = (typeof GROUPS)[number]['categories'][number]
  export const CATEGORY_IDS: CategoryId[]                  // taxonomy order
  export const CATEGORY_LABELS: Record<CategoryId, string>  // 'Hero','Navbar','Features','Pricing','Testimonials','Call to action','FAQ','Footer','Profile cards','Team','Product cards','Stat cards','Testimonial cards','Blog cards','Buttons','Inputs','Badges','Toggles','Tabs','Dropdowns','Login','Sign-up','Settings','Data table','Empty state','Dashboard'
  export const STYLE_TAGS = ['minimal','brutalist','glass','editorial','playful','corporate','dark','light','gradient','has-image'] as const
  export type StyleTag = (typeof STYLE_TAGS)[number]
  export function groupOf(category: CategoryId): (typeof GROUPS)[number]
  ```
- Produces (`types.ts`):
  ```ts
  export type Format = 'react' | 'html'
  export interface ComponentBrief { layout: string; style: string; states: string; responsive: string }
  export interface ComponentMeta {
    slug: string; name: string; category: CategoryId; tags: StyleTag[]; description: string
    preview: { kind: 'section' | 'element'; parity?: { maxDiffRatio: number; reason: string } }
    fonts: string[]   // Google Fonts css2 family params, e.g. 'Instrument Serif:ital@0;1'
    brief: ComponentBrief; addedAt: string; author?: string
  }
  export interface ComponentSources { tsx: string; html: string; css: string }
  export interface LibraryEntry { meta: ComponentMeta; sources: ComponentSources }
  ```
- Produces (`fonts.ts`):
  - `fontDisplayName(family: string): string` gives the text before `:`.
  - `fontStylesheetHref(families: string[]): string | null` gives `https://fonts.googleapis.com/css2?family=<f1>&family=<f2>&display=swap`, with spaces encoded as `+`, or `null` for an empty array.
  - `fontLinkTag(families: string[]): string` gives `<link rel="stylesheet" href="…">`, or `''`.
- Produces (`assets.ts`): `IMAGES: Record<string, string>` (`as const`) of curated `https://images.unsplash.com/photo-…?w=…&q=80` URLs.
- Produces (`registry.ts`, client-safe):
  - `allMetas(): ComponentMeta[]`, sorted by `CATEGORY_IDS` order, then name.
  - `metaBySlug(slug: string): ComponentMeta | undefined`.
  - `categoryCounts(): Partial<Record<CategoryId, number>>`.
  - `lazyComponent(slug: string): React.LazyExoticComponent<React.ComponentType>`, memoized per slug.
- Produces (`sources.server.ts`): `sourcesFor(slug: string): ComponentSources | undefined`, built from `import.meta.glob` with `query: '?raw', import: 'default', eager: true` over `./components/*/{Component.tsx,index.html,styles.css}`.
- Produces (`scripts/load-library.ts`): `loadLibrary(root = 'src/library/components'): Promise<{ folder: string; entry: LibraryEntry }[]>`.
  - Reads files with `fs`. A missing file reads as `''`.
  - Imports `meta.ts` via `import(pathToFileURL(p).href)`.
  - Sorted by folder.
- Produces (`rules.ts`): `checkComponent(entry: LibraryEntry, folder: string, allSlugs: string[]): string[]` returns human-readable violations, or `[]` if there are none.
- Produces: `PreviewSurface({ kind, fonts, mode, capture, children }: { kind: 'section' | 'element'; fonts: string[]; mode: 'page' | 'thumbnail'; capture?: boolean; children: ReactNode })`. Renders:
  ```html
  <div data-preview-backdrop [data-capture] class="bg-white text-black font-sans [color-scheme:light]
       {page: min-h-screen | thumbnail: h-full} {element: flex items-center justify-center p-12}">
    <div data-capture-root class="{section: w-full | element: w-fit}">children</div>
  </div>
  ```
  When `fonts` is non-empty it also renders `<link rel="stylesheet" href={fontStylesheetHref(fonts)} precedence="default" />`.
- Produces: `buildParityPage(entry: LibraryEntry): string` in `e2e/lib/parity-page.ts`.

- [ ] **Step 1: Write the failing rule tests** in `src/library/rules.test.ts`

Build a `validEntry()` fixture (slug `demo`, category `hero`, tags `['minimal']`, all brief fields filled, `addedAt: '2026-10-08'`). It has:
- TSX: `export default function Demo() { return <section className="p-8">Hi</section> }`, with no imports.
- HTML: `<section class="demo">Hi</section>`.
- CSS: the reset template from Step 8.

`withMeta`, `withBrief`, and `withSources` shallow-merge overrides into a copy of the fixture.

```ts
test('valid entry has no violations', () => {
  expect(checkComponent(validEntry(), 'demo', ['demo'])).toEqual([])
})
test.each([
  ['slug differs from folder', e => e, 'other', /folder/],
  ['duplicate slug', e => e, 'demo', /duplicate/, ['demo', 'demo']],
  ['unknown category', e => ({ ...e, meta: { ...e.meta, category: 'nope' } }), 'demo', /category/],
  ['unknown tag', e => withMeta(e, { tags: ['shiny'] }), 'demo', /tag/],
  ['empty brief field', e => withBrief(e, { states: ' ' }), 'demo', /brief\.states/],
  ['bad addedAt', e => withMeta(e, { addedAt: '8/10/26' }), 'demo', /addedAt/],
  ['missing html', e => withSources(e, { html: '' }), 'demo', /index\.html/],
  ['non-react import', e => withSources(e, { tsx: "import x from 'lucide-react'\n" + e.sources.tsx }), 'demo', /import/],
  ['dark: variant', e => withSources(e, { tsx: e.sources.tsx.replace('p-8', 'p-8 dark:bg-black') }), 'demo', /dark:/],
  ['hooks or handlers', e => withSources(e, { tsx: e.sources.tsx.replace('<section', '<section onClick={f}') }), 'demo', /interactiv/],
  ['img without alt/size', e => withSources(e, { tsx: e.sources.tsx.replace('</section>', '<img src="x"/></section>') }), 'demo', /img/],
  ['img src not in IMAGES', e => withSources(e, { tsx: e.sources.tsx.replace('</section>', '<img src="https://example.com/a.jpg" alt="" width="1" height="1"/></section>') }), 'demo', /IMAGES/],
  ['fonts without comment', e => withMeta(e, { fonts: ['Inter:wght@400'] }), 'demo', /Fonts:/],
  ['css missing scoped reset', e => withSources(e, { css: '.demo{}' }), 'demo', /reset/],
  ['unscoped css selector', e => withSources(e, { css: e.sources.css + '\nbody{margin:0}' }), 'demo', /scope/],
  ['html root lacks slug class', e => withSources(e, { html: '<section>x</section>' }), 'demo', /root/],
  ['html contains <link>/<style>/<script>', e => withSources(e, { html: e.sources.html + '<style></style>' }), 'demo', /<style>/],
])('%s is reported', (_n, mutate, folder, pattern, slugs = ['demo']) => {
  expect(checkComponent(mutate(validEntry()), folder, slugs).join('\n')).toMatch(pattern)
})
```

In `src/library/fonts.test.ts`:

```ts
test('fontStylesheetHref encodes families', () => {
  expect(fontStylesheetHref(['Instrument Serif:ital@0;1', 'Inter:wght@400;600'])).toBe(
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;600&display=swap')
  expect(fontStylesheetHref([])).toBeNull()
  expect(fontDisplayName('Instrument Serif:ital@0;1')).toBe('Instrument Serif')
})
```

- [ ] **Step 2: Run to verify failure**

Run: `npx vitest run src/library`. Expected: FAIL (modules missing).

- [ ] **Step 3: Implement `taxonomy.ts`, `types.ts`, `fonts.ts`, `assets.ts`, `rules.ts`**

Each rule maps to spec §4.5:
- Regex checks on the TSX:
  - `/\bdark:/` flags the dark variant.
  - `/\buse[A-Z]\w*\(|\bon[A-Z]\w*=/` flags hooks and handlers. The message contains "interactive".
  - Import specifiers must equal `'react'`.
  - Exactly one `export default`.
- Every `<img` tag in the TSX and HTML must have `alt=`, `width=`, `height=`, and a `src` value from `Object.values(IMAGES)`.
- If `fonts` is non-empty, the first TSX line must start with `// Fonts: ` and name every `fontDisplayName`.
- Parse the CSS with `postcss` (add it as a dev dependency). It must contain the selector list `.${slug}, .${slug} *, .${slug} *::before, .${slug} *::after`. Every rule selector outside `@keyframes` must start with `.${slug}`.
- The first HTML element must have `${slug}` in its `class`. The HTML must not contain `<link`, `<style`, or `<script`.

`assets.ts` needs at least 12 Unsplash URLs (4 portraits, 4 products, 4 scenes/workspaces). Verify each one with `curl -sI -H "Origin: https://example.com" <url>`, which must return `200` and `access-control-allow-origin: *`.

- [ ] **Step 4: Run the rule tests**

Run: `npx vitest run src/library`. Expected: PASS.

- [ ] **Step 5: Implement `scripts/load-library.ts`, `registry.ts`, `sources.server.ts`**

`registry.ts` uses `import.meta.glob('./components/*/meta.ts', { eager: true })` for metadata and non-eager `import.meta.glob('./components/*/Component.tsx')` for the lazy modules. It must not import `?raw` sources. Wire `react-router.config.ts` to `categories: CATEGORY_IDS`.

- [ ] **Step 6: Write the library test** in `src/library/library.test.ts`

```ts
test('every component follows the authoring rules', async () => {
  const items = await loadLibrary()
  expect(items.length).toBeGreaterThanOrEqual(3)
  const slugs = items.map(i => i.entry.meta.slug)
  for (const { folder, entry } of items)
    expect({ folder, violations: checkComponent(entry, folder, slugs) }).toEqual({ folder, violations: [] })
})
```

- [ ] **Step 7: Add the preview route and parity test**

- `app/routes.ts`: add `route('preview/:slug', 'routes/preview.tsx')` outside the shell layout.
- `app/routes/preview.tsx`:
  - `loader` throws `data(null, { status: 404 })` if `metaBySlug(params.slug)` is undefined, and returns `{ slug }` otherwise.
  - `meta` returns `` `${name} preview — ${SITE.name}` `` and `robots: noindex`.
  - Renders `<PreviewSurface mode="page" capture={searchParams.get('capture') === '1'} …><Suspense><Lazy/></Suspense></PreviewSurface>`.
- `app/app.css`: add `[data-capture] *, [data-capture] *::before, [data-capture] *::after { transition: none !important; animation: none !important; }`.
- `buildParityPage(entry)` returns `<!doctype html><html><head><meta charset="utf-8">${fontLinkTag(fonts)}<style>body{margin:0}</style><style>${css}</style></head><body>WRAPPER</body></html>`. WRAPPER mirrors `PreviewSurface` in inline styles:
  - Element kind: `<div style="background:#fff;display:flex;align-items:center;justify-content:center;padding:48px;min-height:100vh"><div style="width:fit-content">${html}</div></div>`.
  - Section kind: `<div style="background:#fff">${html}</div>`.
- `e2e/parity.spec.ts` builds one test per component and viewport (desktop `1440×900`, mobile `390×844`, from `loadLibrary()`). Install `pixelmatch` and `pngjs` as dev dependencies.

```ts
test(`${slug} @ ${vp.name}: HTML/CSS matches React`, async ({ page }, testInfo) => {
  await page.setViewportSize(vp)
  await page.goto(`/preview/${slug}`)
  await settle(page)  // document.fonts.ready + every img decoded
  const react = await page.locator('[data-capture-root] > *').first().screenshot({ animations: 'disabled' })
  await page.setContent(buildParityPage(entry)); await settle(page)
  const html = await page.locator(`.${slug}`).first().screenshot({ animations: 'disabled' })
  const { ratio, width, height, diff } = compare(react, html)  // pngjs + pixelmatch threshold 0.1
  if (diff) await testInfo.attach('diff', { body: diff, contentType: 'image/png' })
  expect({ width, height }).toEqual(sizeOf(react))
  expect(ratio).toBeLessThanOrEqual(meta.preview.parity?.maxDiffRatio ?? 0.01)
})
```

- [ ] **Step 8: Write `AGENTS.md`**

Include:
- Spec §4.5 rules, verbatim.
- The folder layout and `meta.ts` field guide (spec §4.2).
- The "add a component" checklist: create the folder → `meta.ts` → `Component.tsx` → `index.html` + `styles.css` → `npm test` → `npm run test:parity` → check `/c/<slug>` in dev at desktop and mobile in both site themes.
- This exact reset template, which every `styles.css` must begin with (`SLUG` replaced by the slug):

```css
/* Scoped reset: mirrors Tailwind preflight for this component only */
.SLUG, .SLUG *, .SLUG *::before, .SLUG *::after { box-sizing: border-box; margin: 0; padding: 0; border: 0 solid; }
.SLUG { font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; line-height: 1.5; -webkit-text-size-adjust: 100%; tab-size: 4; }
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

- [ ] **Step 9: Author the three sample components** (follow `AGENTS.md`)

| slug | name | category | tags | kind | direction |
|---|---|---|---|---|---|
| `hero-split-image` | Split hero with image | hero | minimal, light, has-image | section | Text left (eyebrow, h1, body, two CTAs), image right; stacks on mobile |
| `profile-card-glass` | Glass profile card | profile-card | glass, gradient, has-image | element | Frosted card on a gradient field: avatar, name, role, stats row, follow button |
| `buttons-minimal` | Buttons — Minimal | buttons | minimal, light | element | Primary, secondary, ghost, icon-only and loading-look buttons in sm/md/lg |

- [ ] **Step 10: Verify**

Run: `npm test && npm run test:parity`. Expected: PASS, with 6 parity tests (3 components × 2 viewports). Fix the CSS (not the tolerance) until each passes. Only set `preview.parity` with a written `reason` for sub-pixel font differences that can't be removed.

- [ ] **Step 11: Commit**

```bash
git add -A && git commit -m "Add component library core, preview route, parity test and three sample components"
```

---

### Task 3: Code, brief, and agent-text builders

**Files:**
- Create: `src/library/brief.ts`, `src/library/brief.test.ts`

**Interfaces:**
- Consumes: `ComponentMeta`, `ComponentSources`, `Format`, `fontLinkTag`, `fontDisplayName`, `GROUPS`, `CATEGORY_LABELS`, `SITE`.
- Produces:
  ```ts
  export function buildHtmlSnippet(meta: ComponentMeta, sources: ComponentSources): string
  export function codeForFormat(meta: ComponentMeta, sources: ComponentSources, format: Format): string
  export function buildBrief(meta: ComponentMeta, sources: ComponentSources, format: Format): string
  export function buildAgentMarkdown(meta: ComponentMeta, sources: ComponentSources): string
  export function buildLlmsTxt(metas: ComponentMeta[]): string
  ```

- [ ] **Step 1: Write the failing tests** in `src/library/brief.test.ts` (using a fixture meta/sources with slug `demo`, name `Demo hero`)

```ts
test('html snippet = font link, style block, markup', () => {
  expect(buildHtmlSnippet(withFonts(['Inter:wght@400']), src)).toBe(
    `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap">\n<style>\n${src.css.trim()}\n</style>\n${src.html.trim()}\n`)
  expect(buildHtmlSnippet(meta, src).startsWith('<style>\n')).toBe(true)
})
test('codeForFormat returns raw tsx for react', () => {
  expect(codeForFormat(meta, src, 'react')).toBe(src.tsx)
})
test('brief header and sections', () => {
  const b = buildBrief(meta, src, 'react')
  expect(b.startsWith(
    '# Demo hero (Web Library)\nSource: https://web-design-library.vercel.app/c/demo\n\nBuild this UI component: ' + meta.description + '\n')).toBe(true)
  for (const h of ['## Layout\n' + meta.brief.layout, '## Visual style\n' + meta.brief.style,
                   '## States\n' + meta.brief.states, '## Responsive\n' + meta.brief.responsive])
    expect(b).toContain(h)
  expect(b).toContain('Fonts: system sans-serif')
  expect(b).toContain('## Reference code (React + Tailwind v4)\n```tsx\n' + src.tsx.trimEnd() + '\n```')
  expect(b.trimEnd().endsWith(
    'Adapt names, tokens and conventions to the existing project; keep the layout, hierarchy and spacing rhythm.')).toBe(true)
})
test('brief html format has html and css blocks', () => {
  const b = buildBrief(meta, src, 'html')
  expect(b).toContain('## Reference code (HTML + CSS)\n```html\n')
  expect(b).toContain('```css\n' + src.css.trim())
})
test('fonts line lists display names', () => {
  expect(buildBrief(withFonts(['Instrument Serif:ital@0;1']), src, 'react')).toContain('Fonts: Instrument Serif')
})
test('code containing ``` gets a longer fence', () => {
  expect(buildBrief(meta, { ...src, tsx: 'const s = "```"\n' }, 'react')).toContain('````tsx\n')
})
test('agent markdown includes both formats', () => {
  const md = buildAgentMarkdown(meta, src)
  expect(md).toContain('## Reference code (React + Tailwind v4)')
  expect(md).toContain('## Reference code (HTML + CSS)')
})
test('llms.txt groups by group and category in taxonomy order, skipping empty ones', () => {
  const txt = buildLlmsTxt([metaB_pricing, metaA_hero])
  expect(txt.startsWith('# Web Library\n\n> Copy-paste UI layouts for developers building with AI agents.\n\n')).toBe(true)
  expect(txt.indexOf('### Hero')).toBeLessThan(txt.indexOf('### Pricing'))
  expect(txt).toContain('- [Demo hero](https://web-design-library.vercel.app/c/demo.md): ' + metaA_hero.description)
  expect(txt).not.toContain('## Elements')
})
```

- [ ] **Step 2: Run to verify failure**

Run: `npx vitest run src/library/brief.test.ts`. Expected: FAIL (module missing).

- [ ] **Step 3: Implement `brief.ts`**

Use the exact brief layout from spec §5.2:
- `Fonts:` follows the style text on its own line.
- `## Reference code (HTML + CSS)` contains an `html` block with `fontLinkTag` + markup, then a `css` block.
- Each fence is one backtick longer than the longest backtick run in its code, with a minimum of 3.

`llms.txt` layout:
- `# SITE.name`, then a blank line, then `> SITE.tagline`, then a blank line.
- Then the line "Copy-paste UI components as React + Tailwind v4 or HTML + CSS. Each link returns a markdown brief with full source code." followed by a blank line.
- Then `## <group label>` / `### <category label>` / `- [name](url.md): description`. Within a category, entries are sorted by name.

- [ ] **Step 4: Run tests**

Run: `npx vitest run src/library/brief.test.ts`. Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/library/brief.ts src/library/brief.test.ts && git commit -m "Add code, AI brief, agent markdown and llms.txt builders"
```

---

### Task 4: Post-build agent files

**Files:**
- Create: `scripts/build-agent-files.ts`, `scripts/build-agent-files.test.ts`
- Modify: `package.json` (`build`), `vercel.json` (headers), `e2e/smoke.spec.ts`

**Interfaces:**
- Consumes: `loadLibrary()`, `buildAgentMarkdown`, `buildLlmsTxt`.
- Produces: `writeAgentFiles(outDir: string, entries: LibraryEntry[]): Promise<string[]>`, which returns the written paths relative to `outDir`. When run directly (`import.meta.url === pathToFileURL(process.argv[1]).href`), it writes `(await loadLibrary()).map(i => i.entry)` to `build/client` and logs `Agent files: <n> written`.

- [ ] **Step 1: Write the failing tests**

```ts
test('writes one .md per component and llms.txt', async () => {
  const out = await mkdtemp(join(tmpdir(), 'wl-'))
  const written = await writeAgentFiles(out, [entryA, entryB])
  expect(written.sort()).toEqual(['c/a.md', 'c/b.md', 'llms.txt'])
  expect(await readFile(join(out, 'c/a.md'), 'utf8')).toBe(buildAgentMarkdown(entryA.meta, entryA.sources))
  expect(await readFile(join(out, 'llms.txt'), 'utf8')).toBe(buildLlmsTxt([entryA.meta, entryB.meta]))
})
test('throws a clear error when outDir does not exist', async () => {
  await expect(writeAgentFiles('/nonexistent/build/client', [])).rejects.toThrow(/react-router build/)
})
```

- [ ] **Step 2: Run to verify failure**

Run: `npx vitest run scripts`. Expected: FAIL.

- [ ] **Step 3: Implement `scripts/build-agent-files.ts`**

Then:
- Set `"build": "react-router build && tsx scripts/build-agent-files.ts"`.
- Add `vercel.json` headers:
  ```json
  "headers": [
    { "source": "/c/(.*)\\.md", "headers": [{ "key": "Content-Type", "value": "text/markdown; charset=utf-8" }] },
    { "source": "/llms.txt", "headers": [{ "key": "Content-Type", "value": "text/plain; charset=utf-8" }] }
  ]
  ```

- [ ] **Step 4: Add the e2e check** to `e2e/smoke.spec.ts`

```ts
test('agent files are served', async ({ request }) => {
  const llms = await (await request.get('/llms.txt')).text()
  expect(llms).toContain('/c/hero-split-image.md')
  const md = await (await request.get('/c/hero-split-image.md')).text()
  expect(md).toContain('## Reference code (React + Tailwind v4)')
  expect(md).toContain('## Reference code (HTML + CSS)')
})
```

- [ ] **Step 5: Verify**

Run: `npm test && npm run test:e2e`. Expected: PASS. `npm run build` ends with `Agent files: 4 written`.

- [ ] **Step 6: Commit**

```bash
git add -A && git commit -m "Generate per-component markdown and llms.txt after build"
```

---

### Task 5: Shell, theme, and browse page

**Files:**
- Create: `app/lib/theme.ts`, `app/lib/filters.ts`, `app/lib/filters.test.ts`, `app/components/{Header,ThemeToggle,SearchField,Sidebar,TagFilter,ComponentCard,LiveThumbnail,EmptyState}.tsx`
- Modify: `app/root.tsx`, `app/routes/shell.tsx`, `app/routes/browse.tsx`, `app/components/NotFoundView.tsx` (add `SearchField`), `e2e/smoke.spec.ts`

**Interfaces:**
- Consumes: `allMetas`, `metaBySlug`, `categoryCounts`, `lazyComponent`, `GROUPS`, `CATEGORY_LABELS`, `STYLE_TAGS`, `PreviewSurface`, `SITE`.
- Produces (`theme.ts`):
  - `THEME_STORAGE_KEY = 'wl:theme'`.
  - `themeInitScript: string`, an IIFE that sets `.dark` on `<html>` from storage, falling back to `prefers-color-scheme`.
  - `useTheme(): { theme: 'light' | 'dark'; setTheme(t: 'light' | 'dark'): void }`.
- Produces (`filters.ts`):
  ```ts
  export interface Filters { q: string; tags: StyleTag[] }
  export function parseFilters(params: URLSearchParams): Filters
  export function serializeFilters(f: Filters): URLSearchParams   // omits empty q / tags; tags comma-joined
  export function filterMetas(metas: ComponentMeta[], f: Filters & { category?: CategoryId }): ComponentMeta[]
  ```
- Produces: `ComponentCard({ meta }: { meta: ComponentMeta })`. Task 6 reuses it for related components.
- Produces: `SearchField()`. On the browse routes it updates `?q` in place. Elsewhere, submitting navigates to `/?q=…`.

- [ ] **Step 1: Write the failing filter tests** in `app/lib/filters.test.ts`

```ts
test('parseFilters trims q, keeps known tags once, in order', () => {
  expect(parseFilters(new URLSearchParams('q=  Hero &tags=dark,unknown,dark,glass'))).toEqual({ q: 'Hero', tags: ['dark', 'glass'] })
  expect(parseFilters(new URLSearchParams('q=%20%20'))).toEqual({ q: '', tags: [] })
})
test('serializeFilters omits empties', () => {
  expect(serializeFilters({ q: '', tags: [] }).toString()).toBe('')
  expect(serializeFilters({ q: 'card', tags: ['dark', 'glass'] }).toString()).toBe('q=card&tags=dark%2Cglass')
})
test('filterMetas: category exact, tags AND, every q term matches name or description case-insensitively', () => {
  // fixtures: A hero [minimal, light] "Split hero", B hero [dark] "Gradient hero", C pricing [minimal] "Three tier pricing"
  expect(filterMetas(all, { q: '', tags: [], category: 'hero' }).map(m => m.slug)).toEqual(['a', 'b'])
  expect(filterMetas(all, { q: '', tags: ['minimal', 'light'] }).map(m => m.slug)).toEqual(['a'])
  expect(filterMetas(all, { q: 'HERO gradient', tags: [] }).map(m => m.slug)).toEqual(['b'])
  expect(filterMetas(all, { q: 'zzz', tags: [] })).toEqual([])
})
```

- [ ] **Step 2: Run to verify failure**

Run: `npx vitest run app/lib/filters.test.ts`. Expected: FAIL.

- [ ] **Step 3: Implement `filters.ts` and `theme.ts`**

Run: `npx vitest run app/lib`. Expected: PASS.

- [ ] **Step 4: Write the failing e2e tests** in `e2e/smoke.spec.ts`

```ts
test('browse lists all components and filters by category', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('component-card')).toHaveCount(3)
  await page.getByRole('link', { name: /^Hero/ }).first().click()
  await expect(page).toHaveURL(/\/browse\/hero/)
  await expect(page.getByRole('heading', { level: 1, name: 'Hero' })).toBeVisible()
  await expect(page.getByTestId('component-card')).toHaveCount(1)
})
test('search and tag filters sync with the URL', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('searchbox', { name: 'Search components' }).fill('glass')
  await expect(page).toHaveURL(/q=glass/)
  await expect(page.getByTestId('component-card')).toHaveCount(1)
  await page.goto('/?tags=minimal')
  await expect(page.getByRole('button', { name: 'minimal', pressed: true })).toBeVisible()
  await expect(page.getByTestId('component-card')).toHaveCount(2)
})
test('zero results show empty state with working reset', async ({ page }) => {
  await page.goto('/?q=zzzz&tags=brutalist,unknown')
  await expect(page.getByText('No components match')).toBeVisible()
  await page.getByRole('button', { name: 'Clear filters' }).click()
  await expect(page.getByTestId('component-card')).toHaveCount(3)
})
test('site dark mode does not restyle component renders', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('wl:theme', 'dark'))
  await page.goto('/')
  expect(await page.evaluate(() => document.documentElement.classList.contains('dark'))).toBe(true)
  const surface = page.locator('[data-preview-backdrop]').first()
  await expect(surface).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(surface).toHaveCSS('color', 'rgb(0, 0, 0)')
  expect(await surface.evaluate(el => getComputedStyle(el).fontFamily)).not.toContain('Geist')
})
test('theme toggle persists', async ({ page }) => {
  await page.goto('/')
  const isDark = () => page.evaluate(() => document.documentElement.classList.contains('dark'))
  const before = await isDark()
  await page.getByRole('button', { name: /Switch to (dark|light) theme/ }).click()
  expect(await isDark()).toBe(!before)
  await page.reload()
  expect(await isDark()).toBe(!before)
})
```

Add `data-testid="component-card"` on `ComponentCard`'s root.

- [ ] **Step 5: Implement the shell and browse page**

- `root.tsx`:
  - Inline `<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />` as the first child of `<head>`.
  - `<html>` gets `className="bg-white dark:bg-zinc-950"`.
- `Header`: site name (links `/`), `SearchField`, `ThemeToggle` (aria-label `Switch to dark theme` / `Switch to light theme`), and a GitHub link (`SITE.repoUrl`, aria-label `GitHub repository`).
- `browse.tsx`:
  - `loader` throws a 404 when `params.category` is set but not in `CATEGORY_IDS`.
  - `meta` returns `` `${CATEGORY_LABELS[c]} components — ${SITE.name}` `` for categories and the home title for `/`.
  - `ErrorBoundary` renders `<NotFoundView title="Category not found" />`.
  - The `h1` is the category label, or "All components", with a count beside it.
- `Sidebar` (`hidden lg:block w-60`):
  - Groups → categories with counts from `categoryCounts()`. Categories with zero components are hidden.
  - Links keep the current `?q` and `?tags`. The active category gets `aria-current="page"`.
  - Below `lg`, render the same links as a horizontal `overflow-x-auto` row.
- `TagFilter`: one `<button aria-pressed>` per `STYLE_TAGS` value. Toggling rewrites `?tags` via `serializeFilters`.
- Grid: `grid gap-6 sm:grid-cols-2 xl:grid-cols-3`.
- `EmptyState`: "No components match" plus a "Clear filters" button that removes `q` and `tags`.
- `LiveThumbnail`:
  - `aspect-[16/10] overflow-hidden rounded-lg border`, `inert`, `aria-hidden`.
  - Mounts its child when an `IntersectionObserver` (`rootMargin: '200px'`) first reports it visible.
  - Section kind: the inner box is `width: 1280px`, `transform: scale(frameWidth / 1280)`, origin top-left.
  - Element kind: centered, `scale = min(1, (frameWidth - 48) / contentWidth)`.
  - A `ResizeObserver` drives both. Content renders inside `<PreviewSurface mode="thumbnail" …>`.

- [ ] **Step 6: Run e2e**

Run: `npm run test:e2e`. Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add -A && git commit -m "Add site shell, theme, and browse page with search, tags and live thumbnails"
```

---

### Task 6: Component detail page

**Files:**
- Create: `app/routes/detail.tsx`, `app/lib/viewports.ts`, `app/lib/format-preference.ts`, `app/lib/highlight.server.ts`, `app/components/{PreviewFrame,ViewportToggle,CodeView,FormatSwitch}.tsx`
- Modify: `app/routes.ts` (add `route('c/:slug', 'routes/detail.tsx')` inside the shell, before `*`), `e2e/smoke.spec.ts`, `app/app.css` (Shiki dark rules)

**Interfaces:**
- Consumes: `metaBySlug`, `allMetas`, `sourcesFor`, `ComponentCard`, `NotFoundView`, `groupOf`, `CATEGORY_LABELS`, `SITE`.
- Produces (`viewports.ts`):
  ```ts
  export const VIEWPORTS = {
    desktop: { width: 1440, height: 900, label: 'Desktop' },
    tablet:  { width: 768,  height: 1024, label: 'Tablet' },
    mobile:  { width: 390,  height: 844, label: 'Mobile' },
  } as const
  export type ViewportId = keyof typeof VIEWPORTS
  export const ELEMENT_FRAME_HEIGHT = 480
  ```
- Produces: `useFormatPreference(): [Format, (f: Format) => void]` (localStorage `wl:format`, default `'react'`, read in an effect).
- Produces: `highlight(code: string, lang: 'tsx' | 'html' | 'css'): Promise<string>` using Shiki `codeToHtml` with `themes: { light: 'github-light', dark: 'github-dark' }`.
- Produces: the detail `loader` returns `{ meta, sources, highlighted: { tsx, html, css } }`. Task 7 reads `sources` from `useLoaderData`.
- Produces: `CodeView({ format, highlighted, sources, onCopyFile? })`. It renders one `<figure>` per file, with a filename caption (`Component.tsx`, or `index.html` and `styles.css`) and `data-code-file`. Task 7 passes `onCopyFile`.

- [ ] **Step 1: Write the failing e2e tests**

```ts
test('detail page is pre-rendered with title and Open Graph tags', async ({ request }) => {
  const html = await (await request.get('/c/hero-split-image')).text()
  expect(html).toContain('Split hero with image')
  expect(html).toMatch(/property="og:title"/)
  expect(html).toContain('rel="canonical" href="https://web-design-library.vercel.app/c/hero-split-image"')
})
test('preview viewport toggle resizes the frame', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  const frame = page.locator('iframe[title="Split hero with image preview"]')
  await expect(frame).toHaveAttribute('width', '1440')
  await page.getByRole('radio', { name: 'Mobile' }).click()
  await expect(frame).toHaveAttribute('width', '390')
})
test('code tab shows files for the selected format', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('tab', { name: 'Code' }).click()
  await expect(page.locator('[data-code-file="Component.tsx"]')).toContainText('export default function')
  await page.getByRole('radio', { name: 'HTML' }).click()
  await expect(page.locator('[data-code-file="index.html"]')).toBeVisible()
  await expect(page.locator('[data-code-file="styles.css"]')).toBeVisible()
})
test('unknown component and category show not-found views', async ({ page }) => {
  await page.goto('/c/does-not-exist')
  await expect(page.getByRole('heading', { name: 'Component not found' })).toBeVisible()
  await expect(page.getByRole('searchbox', { name: 'Search components' })).toBeVisible()
  await page.goto('/browse/nope')
  await expect(page.getByRole('heading', { name: 'Category not found' })).toBeVisible()
})
```

- [ ] **Step 2: Run to verify failure**

Run: `npm run test:e2e`. Expected: the new tests FAIL.

- [ ] **Step 3: Implement the detail page**

- `meta` returns:
  - Title `` `${name} — ${SITE.name}` `` and description.
  - `{ tagName: 'link', rel: 'canonical', href: `${SITE.url}/c/${slug}` }`.
  - `og:title`, `og:description`, `og:url`, and `og:type=website`.
- `ErrorBoundary` renders `<NotFoundView title="Component not found" />`.
- Layout, top to bottom:
  - Breadcrumb `Group / Category` (the category links to `/browse/<category>`), `h1` name, description, tag list.
  - `role="tablist"` with tabs `Preview` and `Code`. `ViewportToggle` (a `role="radiogroup"` of Desktop / Tablet / Mobile) shows only on Preview.
  - Up to 3 related `ComponentCard`s from the same category, excluding self, under the heading "More in <Category>". Omit the section if there are none.
- `PreviewFrame`:
  - `<iframe src="/preview/<slug>" title="<name> preview" width={vp.width} height={kind === 'element' ? ELEMENT_FRAME_HEIGHT : vp.height}>`.
  - Scaled by `s = min(1, containerWidth / vp.width)` (origin top-left). The wrapper height is `height * s`.
- `FormatSwitch`: a `role="radiogroup"` with `React` and `HTML`, bound to `useFormatPreference`. Render exactly one, in the detail toolbar beside the tabs. Task 7 moves it into `ActionBar`.
- `app.css`: add Shiki dual-theme rules: `.dark .shiki, .dark .shiki span { color: var(--shiki-dark) !important; background-color: var(--shiki-dark-bg) !important; }`.

- [ ] **Step 4: Run e2e**

Run: `npm run test:e2e`. Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "Add component detail page with preview frame, viewport toggle and code view"
```

---

### Task 7: Copy, image export, toasts, analytics

**Files:**
- Create: `app/lib/clipboard.ts`, `app/lib/clipboard.test.ts`, `app/lib/capture.ts`, `app/lib/capture.test.ts`, `app/lib/analytics.ts`, `app/components/ActionBar.tsx`, `app/components/DownloadMenu.tsx`
- Modify: `app/root.tsx` (`<Toaster position="bottom-right" theme={theme} />` from `sonner`, `<Analytics />` from `@vercel/analytics/react`), `app/routes/detail.tsx`, `app/components/CodeView.tsx`, `e2e/smoke.spec.ts`

**Interfaces:**
- Consumes: `codeForFormat`, `buildBrief`, `VIEWPORTS`, `ELEMENT_FRAME_HEIGHT`, `useFormatPreference`, `SITE`, and the detail loader data.
- Produces:
  ```ts
  // clipboard.ts
  export async function copyText(text: string): Promise<boolean>
  export function copyImage(png: Promise<Blob>): Promise<boolean>   // call synchronously inside the click handler
  // capture.ts
  export type CaptureViewport = 'desktop' | 'mobile'
  export const CAPTURE_SCALE = 2
  export const CAPTURE_TIMEOUT_MS = 10_000
  export function pngFileName(slug: string, viewport: CaptureViewport): string
  export async function captureComponent(meta: ComponentMeta, opts: { viewport: CaptureViewport; transparent: boolean }): Promise<Blob>
  // analytics.ts
  export type AnalyticsEvent =
    | { name: 'copy_code'; slug: string; format: Format }
    | { name: 'copy_ai'; slug: string; format: Format }
    | { name: 'download_png'; slug: string; viewport: CaptureViewport }
    | { name: 'copy_image'; slug: string }
  export function trackEvent(e: AnalyticsEvent): void   // track(name, props-without-name)
  ```

- [ ] **Step 1: Write the failing unit tests**

```ts
// clipboard.test.ts: stub globalThis.navigator / ClipboardItem per test
test('copyText resolves false without navigator.clipboard', async () => { expect(await copyText('x')).toBe(false) })
test('copyText resolves false when writeText rejects', async () => { /* writeText: () => Promise.reject() */ expect(await copyText('x')).toBe(false) })
test('copyText resolves true on success', async () => { expect(await copyText('x')).toBe(true) })
test('copyImage builds the ClipboardItem synchronously with the pending promise', () => {
  const p = new Promise<Blob>(() => {}); copyImage(p)
  expect(ClipboardItemSpy).toHaveBeenCalledWith({ 'image/png': p })   // before any await
})
test('copyImage resolves false when ClipboardItem is missing', async () => { expect(await copyImage(Promise.resolve(new Blob()))).toBe(false) })
// capture.test.ts
test('pngFileName', () => { expect(pngFileName('hero-split-image', 'mobile')).toBe('web-library-hero-split-image-mobile.png') })
```

- [ ] **Step 2: Run to verify failure**

Run: `npx vitest run app/lib`. Expected: FAIL.

- [ ] **Step 3: Implement `clipboard.ts`, `capture.ts`, `analytics.ts`**

Capture algorithm. The test doesn't pin these details, so follow them exactly:
1. Append `<iframe data-capture-frame aria-hidden tabindex="-1">` to `document.body`:
   - Style: `position:fixed; left:-100000px; top:0; border:0`.
   - Width `VIEWPORTS[viewport].width`. Height: `ELEMENT_FRAME_HEIGHT` for element kind, `VIEWPORTS[viewport].height` for section kind.
   - `src=/preview/<slug>?capture=1`.
2. Await `load`, then the iframe's `document.fonts.ready`, then `Promise.all(images.map(i => i.decode().catch(() => {})))`. Wait for `[data-capture-root] > *` to exist (Suspense).
3. Pick the target:
   - Section kind: `[data-capture-root]`.
   - Element kind: `[data-capture-root]` when transparent, otherwise `[data-preview-backdrop]`.
4. Call `domToBlob(target, { scale: CAPTURE_SCALE, backgroundColor: transparent ? null : '#ffffff', timeout: CAPTURE_TIMEOUT_MS, type: 'image/png' })`.
5. Race the whole flow against a `CAPTURE_TIMEOUT_MS` timer, which rejects with `Error('Capture timed out')`. Remove the iframe in `finally`.

- [ ] **Step 4: Run unit tests**

Run: `npx vitest run app/lib`. Expected: PASS.

- [ ] **Step 5: Write the failing e2e tests**

Grant `['clipboard-read', 'clipboard-write']` via `test.use({ permissions })`. Read the expected sources with `fs` from `src/library/components/hero-split-image/`.

```ts
test('copy code (react) puts Component.tsx on the clipboard', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('button', { name: 'Copy code' }).click()
  await expect(page.getByText('Copied React code')).toBeVisible()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(tsxSource)
})
test('html format copies a single snippet and persists across reloads', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('radio', { name: 'HTML' }).click()
  await page.getByRole('button', { name: 'Copy code' }).click()
  const text = await page.evaluate(() => navigator.clipboard.readText())
  expect(text.startsWith('<style>\n/* Scoped reset')).toBe(true)
  await page.reload()
  await expect(page.getByRole('radio', { name: 'HTML' })).toBeChecked()
})
test('copy for AI puts the brief on the clipboard', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('button', { name: 'Copy for AI' }).click()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toMatch(/^# Split hero with image \(Web Library\)\n/)
})
test('download desktop and mobile PNGs at 2x', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  for (const [label, width, name] of [['Desktop PNG', 2880, 'desktop'], ['Mobile PNG', 780, 'mobile']] as const) {
    await page.getByRole('button', { name: 'Download' }).click()
    const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: label }).click()])
    expect(dl.suggestedFilename()).toBe(`web-library-hero-split-image-${name}.png`)
    expect(PNG.sync.read(await readFile(await dl.path())).width).toBe(width)
  }
})
test('transparent element capture has alpha and no backdrop', async ({ page }) => {
  await page.goto('/c/buttons-minimal')
  await page.getByRole('button', { name: 'Download' }).click()
  await page.getByRole('menuitemcheckbox', { name: 'Transparent background' }).click()
  const [dl] = await Promise.all([page.waitForEvent('download'), page.getByRole('menuitem', { name: 'Desktop PNG' }).click()])
  const png = PNG.sync.read(await readFile(await dl.path()))
  expect(png.width).toBeLessThan(2880)
  expect(png.data.some((v, i) => i % 4 === 3 && v === 0)).toBe(true)   // some fully transparent pixel
})
test('copy image writes a PNG to the clipboard', async ({ page }) => {
  await page.goto('/c/hero-split-image')
  await page.getByRole('button', { name: 'Copy image' }).click()
  await expect(page.getByText('Copied image')).toBeVisible({ timeout: 12_000 })
  expect(await page.evaluate(async () => (await navigator.clipboard.read())[0].types)).toContain('image/png')
})
test('clipboard failure falls back to selected code', async ({ page }) => {
  await page.addInitScript(() => { navigator.clipboard.writeText = () => Promise.reject(new Error('denied')) })
  await page.goto('/c/hero-split-image')
  await page.getByRole('button', { name: 'Copy code' }).click()
  await expect(page.getByText("Couldn't copy")).toBeVisible()
  await expect(page.getByRole('tab', { name: 'Code' })).toHaveAttribute('aria-selected', 'true')
  expect(await page.evaluate(() => getSelection()?.toString())).toContain('export default function')
})
test('capture survives failed images and cleans up', async ({ page }) => {
  await page.route('https://images.unsplash.com/**', r => r.abort())
  await page.goto('/c/hero-split-image')
  await page.getByRole('button', { name: 'Download' }).click()
  const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 12_000 }), page.getByRole('menuitem', { name: 'Desktop PNG' }).click()])
  expect(dl.suggestedFilename()).toMatch(/desktop\.png$/)
  await expect(page.locator('iframe[data-capture-frame]')).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Copy image' })).toBeEnabled()
})
```

- [ ] **Step 6: Run to verify failure**

Run: `npm run test:e2e`. Expected: the new tests FAIL.

- [ ] **Step 7: Implement `ActionBar`, `DownloadMenu`, and the wiring**

- `ActionBar` order: `FormatSwitch`, `Copy code`, `Copy for AI`, `Download` (menu button), `Copy image`.
  - The `FormatSwitch` moves here from the Task 6 toolbar, so there is exactly one per page.
  - While a capture runs, the capture buttons are `disabled` and show a spinner.
- `DownloadMenu`: a `menu` containing `menuitem`s "Desktop PNG" and "Mobile PNG" plus a `menuitemcheckbox` "Transparent background". Download uses an object URL plus `<a download>`, revoked afterwards.
- Copy image calls `copyImage(captureComponent(meta, { viewport: 'desktop', transparent }))` synchronously in the click handler, using the same Transparent background state.
- Toast copy, exactly:
  - Success: `Copied React code`, `Copied HTML + CSS`, `Copied AI brief`, `Copied image`, `Downloaded <filename>`.
  - Clipboard failure: `Couldn't copy` with description `Your browser blocked clipboard access. The code is selected below — press Ctrl/⌘+C.`
  - Capture failure: `Couldn't create image` with a `Retry` action that reruns the same capture.
- When a clipboard write fails, the detail route switches to the Code tab and selects the first `[data-code-file] pre` with a `Range`.
- `CodeView` gets a per-file copy button (aria-label `Copy <filename>`) that uses `copyText` and the same success/failure toasts.
- Call `trackEvent` after each success: `copy_code` (including per-file copies), `copy_ai`, `download_png`, `copy_image`.

- [ ] **Step 8: Run all tests**

Run: `npm test && npm run test:e2e`. Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add -A && git commit -m "Add copy code, copy for AI, PNG download, copy image, toasts and analytics"
```

---

### Tasks 8–13: Content batches

Each batch task follows the same steps. Use the `impeccable` or `design-taste-frontend` skill, if available, for visual quality. Each component must look deliberate in its tagged style, not like a template.

- [ ] **Step 1:** Author each component's four files per `AGENTS.md`, with a real `brief` (layout / style / states / responsive) written from the finished design.
- [ ] **Step 2:** Run `npm test`. Expected: the rules test passes for every component.
- [ ] **Step 3:** Run `npm run test:parity`. Expected: every new component passes at desktop and mobile. Fix the CSS rather than raising tolerance.
- [ ] **Step 4:** Run `npm run dev` and check each `/c/<slug>` at Desktop, Tablet, and Mobile, in both site themes. Check that focus states are visible, text contrast is ≥ 4.5:1, and nothing overflows horizontally at 390px.
- [ ] **Step 5:** Commit: `git add -A && git commit -m "Add <batch name> components"`.

| Task | Batch | slug — name — category — tags — kind — direction |
|---|---|---|
| 8 | Heroes & navbars | `hero-centered-gradient` — Centered gradient hero — hero — gradient, dark — section — mesh gradient, centered headline, email capture<br>`hero-editorial-serif` — Editorial hero — hero — editorial, light, has-image — section — Instrument Serif display type, magazine grid with photo (fonts: `Instrument Serif:ital@0;1`)<br>`hero-brutalist-grid` — Brutalist hero — hero — brutalist, light — section — thick borders, raw grid, oversized mono type<br>`navbar-simple` — Simple navbar — navbar — minimal, light — section — logo, links, CTA; links collapse to a CSS-only `<details>` menu on mobile<br>`navbar-glass` — Glass navbar — navbar — glass, dark, gradient — section — floating pill with backdrop blur over a gradient |
| 9 | Features, pricing, testimonials | `features-icon-grid` — Icon feature grid — features — corporate, light — section — 6 features with inline SVG icons<br>`features-bento` — Bento features — features — dark, gradient — section — asymmetric bento tiles<br>`features-alternating` — Alternating features — features — editorial, light, has-image — section — image/text rows alternating sides<br>`pricing-three-tier` — Three-tier pricing — pricing — corporate, light — section — highlighted middle plan, feature checklists<br>`pricing-brutalist` — Brutalist pricing — pricing — brutalist — section — table-like plans, hard shadows<br>`testimonials-grid` — Testimonial grid — testimonials — minimal, light, has-image — section — masonry-feel quotes with avatars<br>`testimonials-quote-large` — Large quote — testimonials — editorial, dark — section — single oversized pull quote |
| 10 | CTA, FAQ, footers | `cta-banner-gradient` — Gradient CTA banner — cta — gradient, playful — section<br>`cta-newsletter` — Newsletter signup — cta — minimal, light — section<br>`faq-accordion` — FAQ accordion — faq — minimal, light — section — native `<details>/<summary>`<br>`footer-columns` — Column footer — footer — corporate, light — section<br>`footer-big-wordmark` — Wordmark footer — footer — brutalist, dark — section — giant wordmark |
| 11 | Cards & profiles | `team-grid` — Team grid — team — corporate, light, has-image — section<br>`product-card-minimal` — Minimal product card — product-card — minimal, light, has-image — element<br>`stat-cards` — Stat cards — stat-card — dark, minimal — element — 3 KPI cards with inline SVG sparklines<br>`testimonial-card-playful` — Playful testimonial card — testimonial-card — playful, has-image — element<br>`blog-card-editorial` — Editorial blog card — blog-card — editorial, has-image — element |
| 12 | Element sets | `inputs-glass` — Inputs — Glass — inputs — glass, dark — element — text, email, select, textarea, error state<br>`badges-playful` — Badges — Playful — badges — playful — element<br>`toggles-corporate` — Toggles — Corporate — toggles — corporate, light — element — CSS-only checkbox switches via `peer-checked:`<br>`tabs-brutalist` — Tabs — Brutalist — tabs — brutalist — element — static selected-state tabs<br>`dropdowns-dark` — Dropdown triggers — dropdowns — dark, minimal — element — closed and open states side by side, static |
| 13 | App UI | `login-split-image` — Split login — login — minimal, light, has-image — section<br>`signup-card-gradient` — Gradient sign-up card — signup — gradient, glass — section<br>`settings-panel` — Settings panel — settings — corporate, light — section<br>`data-table` — Data table — data-table — minimal, light — section — sortable-look headers, status badges, pagination<br>`empty-state-playful` — Playful empty state — empty-state — playful — element — inline SVG illustration<br>`dashboard-stats-dark` — Dark stats dashboard — dashboard — dark, corporate — section |

After Task 13 the library holds 36 components. Update the e2e count assertions in Tasks 5 and 6 so they no longer hard-code `3` and `1`. Derive the expected counts from `loadLibrary()` in the test file instead.

---

### Task 14: README, deployment docs, final verification

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Rewrite `README.md`**

Cover:
- What Web Library is.
- Commands: `dev`, `build`, `test`, `test:e2e`, `test:parity`, `lint`, `typecheck`.
- Adding a component → `AGENTS.md`.
- How `/c/<slug>.md` and `/llms.txt` are produced.
- Deploying to Vercel:
  1. Import `w0x7y/Web-Design-Library`. `vercel.json` sets the build command, output `build/client`, and `framework: null`.
  2. After the first deploy, set `SITE.url` in `app/site.ts` to the real domain and redeploy.
  3. Enable Web Analytics in the project's Analytics tab. Custom events require Pro.
- License: "No license yet. All rights reserved until one is chosen; pick one before public launch."

- [ ] **Step 2: Full verification**

Run: `npm run lint && npm run typecheck && npm test && npm run test:e2e`. Expected: all pass. `npm run build` logs `Agent files: 37 written`, and `grep -c '^- \[' build/client/llms.txt` prints `36`.

- [ ] **Step 3: Commit and push**

```bash
git add -A && git commit -m "Document development, components and Vercel deployment"
git push
```
