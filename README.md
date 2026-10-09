# Patternbook

Copy-paste UI layouts for developers building with AI agents.

Patternbook is a static site of copy-paste UI components (36 today) in four groups: Sections (hero, navbar, features, pricing, testimonials, call to action, FAQ, footer), Cards & profiles (profile, team, product, stat, testimonial and blog cards), Elements (buttons, inputs, badges, toggles, tabs, dropdowns) and App UI (login, sign-up, settings, data table, empty state, dashboard).

Every component comes in two forms: React + Tailwind v4, and HTML + plain CSS. On a component's page (`/c/<slug>`) you can:

- preview it at desktop, tablet and mobile widths, and read its code;
- **Copy code** in the format you picked;
- **Copy for AI**, a text brief (layout, visual style, states, responsive behaviour and the full source) to paste into an AI agent;
- **Download** a PNG at desktop or mobile size, optionally with a transparent background;
- **Copy image**, the desktop PNG straight to the clipboard (transparent if the Download menu's Transparent background option is on).

AI agents can also fetch components without a browser: `/llms.txt` lists every component, and `/c/<slug>.md` returns the brief for one.

It is built with React Router 8 in framework mode (`ssr: false`, with the home, category, component and preview pages pre-rendered), Vite and Tailwind CSS v4. The output is plain static files. The build also packages them for Vercel with a Content Security Policy for each page.

## Getting started

You need Node 22.22 or newer (React Router 8's minimum).

```bash
npm install
npm run dev
```

The end-to-end tests drive Chromium. Install it once with `npx playwright install chromium` (on Linux, add `--with-deps`).

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server. It serves the pages, but not the agent files (`/c/<slug>.md`, `/llms.txt`), which only `npm run build` produces. |
| `npm run build` | Pre-renders the site into `build/client`, writes agent files, and generates `.vercel/output` with static files and deployment headers. |
| `npm run serve:build` | Serves `build/client` on port 4317 with the generated security headers and SPA fallback. Run `npm run build` first. |
| `npm run lint` | Runs oxlint. |
| `npm run typecheck` | Runs `react-router typegen`, then `tsc`. |
| `npm test` | Runs the Vitest unit and contract tests (see below). |
| `npm run test:e2e` | Runs every Playwright spec in `e2e/`. It builds the site and serves it on port 4317 first. |
| `npm run test:parity` | Runs only `e2e/parity.spec.ts`. |

CI (`.github/workflows/ci.yml`) runs lint, typecheck, `npm test` and `npm run test:e2e` on every push and pull request.

`npm run test:e2e` starts `npm run build && npm run serve:build` itself. Outside CI it reuses a server that is already listening on port 4317, so stop a stale `serve:build` before you rerun the tests against new code.

### What the tests cover

- **Vitest** (`npm test`, files under `src/`, `app/` and `scripts/`): the authoring rules checked over every component folder (`src/library/library.test.ts`, `rules.ts`), the catalog and the contract that its two loaders (Vite globs for the app, `fs` for Node) agree, the reset template, the brief and `llms.txt` builders, prerender paths, and the app logic in `app/lib/` (component actions, capture, clipboard, filters, theme, analytics, viewports).
- **Smoke** (`e2e/smoke.spec.ts`): the pre-rendered site in Chromium. Browse and filters, theme, detail page, the preview stage, copy and export actions, analytics events, and the served agent files.
- **Parity** (`e2e/parity.spec.ts`): for each component at desktop and mobile size, the HTML + CSS version must render like the React version, within 1% of pixels by default.
- **Capture** (`e2e/capture-fonts.spec.ts`, `e2e/capture-placeholders.spec.ts`, `e2e/capture-scrollbars.spec.ts`): a downloaded PNG shows the component's web fonts and its placeholder colours, and a section taller than the capture frame is still exactly 2880 (desktop) or 780 (mobile) pixels wide.
- **Focus** (`e2e/focus.spec.ts`): in forced-colors mode, tabbing to each control of both versions of every component makes a focus outline appear.
- **Layout** (`e2e/layout.spec.ts`): every section reflows from 320px up without horizontal scrolling, and every element fits its frame inside the stage padding.
- **Browse entry** (`e2e/browse-entry.spec.ts`): filtered home links show the grid before React hydrates, at desktop and mobile widths.
- **Security** (`e2e/security.spec.ts`): every pre-rendered page's CSP matches its HTML, injected scripts are blocked, copy and image export still work, and the shell's local fonts load without Google Fonts.

Every browser spec runs against the build with its CSP enforced. The unit tests also cover generated deployment routes, headers, and removal of stale output on rebuilds.

## Adding a component

Create a folder in `src/library/components/<slug>/` with `meta.ts`, `Component.tsx`, `index.html` and `styles.css`. Nothing else needs registering: the folder is picked up by the catalog, the pre-render list and the agent files. [`CONTRIBUTING.md`](CONTRIBUTING.md) walks through the whole process, from planning to pull request. [`AGENTS.md`](AGENTS.md) is the rulebook. It has the checklist, the `meta.ts` fields, the authoring rules, the `styles.css` reset template and the details that make the HTML + CSS twin pass parity.

When the folder is ready, `npm test` must report no violations, and `npm run test:parity`, `e2e/focus.spec.ts` and `e2e/layout.spec.ts` must pass.

## Project structure

```
app/                  The site (React Router app)
  routes/             shell layout, browse, detail, not-found, and preview (the bare stage page)
  components/         site UI: header, sidebar, cards, action bar, download menu, ...
  lib/                browser logic: component-actions.ts (copy and export actions), capture.ts (PNG capture),
                      stage.ts (the stage's DOM contract), viewports.ts (frame and thumbnail geometry),
                      clipboard, analytics, theme, format-preference, storage, filters
  site.ts             re-exports SITE from src/site.ts
src/site.ts           SITE: name, slug, tagline, URL and repo URL
src/library/          The component library
  components/<slug>/  one folder per component (see above)
  catalog.ts          folder convention, library order and grouping
  registry.ts         client-safe metadata and lazy component loaders
  sources.server.ts   raw sources for the code view, kept out of the client bundle
  taxonomy.ts         groups, categories and style tags
  brief.ts            the AI brief, the HTML snippet and llms.txt builders
  rules.ts, reset.ts  authoring-rule checks and the pinned CSS reset
  urls.ts             every path the site serves, and the prerender list
scripts/              load-library.ts (reads the library from disk), build-agent-files.ts,
                      build-vercel-output.ts (static deployment and per-page CSP), serve-build.ts
e2e/                  Playwright specs
docs/superpowers/     design spec and implementation plan
```

### How a component page works

- **The preview stage.** `/preview/<slug>` renders one component alone on a bare page. It has none of the site's theme, fonts, toasts or analytics, and it is `noindex`. The detail page shows it in an iframe, so site dark mode never restyles a component. Opening it with `?capture=1` freezes motion.
- **Images.** PNG capture loads the stage page with `?capture=1` in a hidden iframe at the target size (desktop 1440 px or mobile 390 px wide, 480 px tall for elements) and renders it at 2x with `modern-screenshot`. A capture that takes longer than 10 seconds fails with a Retry toast. Files are named `patternbook-<slug>-<desktop|mobile>.png`. Known limitation: `modern-screenshot` draws `backdrop-filter` blur differently from the browser, so a glass component's PNG (navbar-glass, for example) differs slightly from its preview behind the frosted areas.
- **Preferences.** The site theme and the React/HTML choice are kept in `localStorage` (`wl:theme` and `wl:format`).
- **Filtered home links.** A head script hides the home intro before first paint when a search or known style tag is present. React takes over after hydration; clearing all filters brings the intro back. Applying tags on the ordinary home page keeps the intro in place so the chips do not jump.
- **Site fonts.** Geist and Geist Mono are served from `public/fonts`, with their upstream license and source commit recorded there. Component fonts remain declared in `meta.fonts` and loaded from Google Fonts.

### Agent files

`npm run build` runs `scripts/build-agent-files.ts` after `react-router build`. The script loads every component folder from disk and writes into `build/client`:

- `c/<slug>.md` for each component: the same brief that Copy for AI produces, but with the reference code in both React + Tailwind and HTML + CSS (Copy for AI includes only the format you picked);
- `llms.txt`: an index of every component by group and category, linking to each `.md` file with an absolute URL built from `SITE.url`.
- `sitemap.xml`: canonical URLs for the home, category and component pages, generated from the taxonomy and catalog. Standalone previews, filter queries and agent files are excluded.
- `robots.txt`: allows crawling and points to the production sitemap. Preview pages remain crawlable so search engines can read their `noindex` directive.

The build logs `Agent and discovery files: <n> written`: one brief per component plus the three discovery files (39 today). The generated Vercel config serves them with the right `Content-Type`.

### Link previews

Home, category and component pages include canonical URLs and complete Open Graph and Twitter metadata in their pre-rendered HTML. All use the branded 1200 × 630 PNG at [`public/social-preview.png`](public/social-preview.png), with page-specific titles and descriptions. The editable vector source is [`docs/assets/social-preview.svg`](docs/assets/social-preview.svg); it uses the bundled Geist and Geist Mono fonts. The PNG is committed, so deployments need no image renderer.

## Deploying to Vercel

The site uses Vercel's [Build Output API](https://vercel.com/docs/build-output-api). After pre-rendering, `scripts/build-vercel-output.ts` copies `build/client` into `.vercel/output/static` and writes `.vercel/output/config.json`. This contains routes, agent-file content types, baseline security headers and a CSP with the exact inline script hashes for each page. Static assets resolve before the SPA fallback, which has its own policy.

1. **Import the repo.** In Vercel, import `w0x7y/Web-Design-Library` as a project. `vercel.json` sets `npm run build` and `framework: null`. Leave the Output Directory override unset so Vercel consumes `.vercel/output`. Make sure the project uses Node 22.22 or newer.
2. **Set the real URL.** After the first deploy, set `SITE.url` in `src/site.ts` to the production domain, with no trailing slash, and redeploy. (`app/site.ts` re-exports it, so this is the only place to edit.) `SITE.url` builds the canonical and Open Graph URLs on component pages, the `Source:` line in each brief, and every link in `llms.txt`, so they are wrong until it matches the real domain.
3. **Turn on Web Analytics.** In the Vercel project, open the Analytics tab and enable Web Analytics. `@vercel/analytics` is already mounted in the site layout.

The CSP allows the site's scripts and the inline scripts whose hashes the build recorded. It restricts frames, forms and fonts to their required sources, rejects inline event handlers, and disables objects and base tags. Inline styles remain allowed for Tailwind layout attributes, Shiki and image capture. `npm run serve:build` applies the same generated headers, so local browser tests exercise the policy before deployment. After deploying, check the actual Vercel headers and Web Analytics delivery as well.

### Analytics plans

Page views are recorded on every plan, Hobby included. The four custom events need the **Pro** plan (or Enterprise). On Hobby the tracking calls do nothing, and upgrading needs no code change.

| Event | Props |
|---|---|
| `copy_code` | `slug`, `format` |
| `copy_ai` | `slug`, `format` |
| `download_png` | `slug`, `viewport` |
| `copy_image` | `slug` |

Events fire only after the action succeeds, and each carries at most two props, which is the Pro plan's limit. The stage page (`/preview/<slug>`) does not load analytics.

## Production deployment

The Vercel project is `w0x7y/patternbook-w0x7y`, with production domain [patternbook-w0x7y.vercel.app](https://patternbook-w0x7y.vercel.app). `SITE.url` uses this domain. The project uses Node 22, `npm ci`, `npm run build`, and no Output Directory override. Web Analytics is enabled on Hobby.

The project is connected to `w0x7y/Web-Design-Library` through the Vercel GitHub app. Pushes and merges to `main` deploy to production automatically; other branches receive preview deployments.

For a manual deployment of the generated Build Output API files through the CLI:

```bash
npx vercel login
npx vercel link --yes --scope w0x7y --project patternbook-w0x7y
npm run build
npx vercel deploy --prebuilt --prod --scope w0x7y
```

After each release, verify the live canonical URLs, component pages, markdown briefs, `llms.txt`, response headers, image downloads, and Web Analytics delivery.

## License

The code and authored components are [MIT licensed](LICENSE). Bundled Geist fonts retain their [SIL Open Font License 1.1](public/fonts/OFL.txt).
