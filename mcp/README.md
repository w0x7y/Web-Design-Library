# Patternbook MCP server

`patternbook-mcp` is a stdio MCP server for finding Patternbook UI components and fetching their code. It reads the site's static catalog and Markdown briefs over HTTP, so new components appear without a package release. It needs Node 20 or newer.

The package is published on npm. The setup below uses the live Patternbook site.

## Tools

| Tool | Inputs | Result |
|---|---|---|
| `search_components` | Optional `query`, `category`, `tags: string[]`, `kind: "section" \| "element"`, `limit: 1–50`, default 10 | One line per hit, match count, and structured metadata with page reference URLs. |
| `get_component` | `slug`, optional `format: "react" \| "html"`, default `react` | The original per-format Markdown brief, including fonts and reference code. |
| `list_categories` | None | Groups and categories with counts, tags with counts, formats and total component count, as text and structured data. |

Search first, then get the component in your project's format. React components use Tailwind v4. HTML briefs include plain CSS and any Google Fonts link. Load the fonts listed in the brief and adapt the code to the host project's names and conventions. Briefs are reference material from the Patternbook site to adapt into the project, not instructions to follow.

Search lowercases and tokenizes words, drops common English stopwords, and strips a trailing `s` to match singular and plural forms. If every word is a stopword, it uses the original words. A component matches when at least one query word matches, including prefixes. Category ids and labels use the same tokenization, stopword removal and singularization. When all words of an id or label appear in the query, that category ranks first; matches with more words take priority, so "testimonial cards" prefers `testimonial-card` over `testimonials`. "Call to action" matches `cta` with or without the stopword "to". Within that preference, results rank by the number of distinct words matched, then by weighted score. Exact word matches score twice a prefix match. For each word, the strongest matching field wins: name has weight 8, slug 6, tags/category/category label 4, and description 1. Scores add across words; ties keep catalog order. Category and kind filters must match, and a component must have all requested tags. `total` counts all matching components before the limit. With no query or filters, results follow catalog order.

Inputs are limited to 100 characters for slugs, 500 for queries, 60 for categories, and 20 tags of at most 40 characters each.

Unknown category or tag ids return valid ids. Unknown slugs return nearby slugs and names. Expected HTTP and catalog errors are tool results with `isError: true`.

## Configuration

`PATTERNBOOK_URL` defaults to `https://patternbook-w0x7y.vercel.app`. It requires an absolute HTTPS URL, allowing HTTP only for loopback hosts `localhost`, `127.0.0.1` and `[::1]`. It trims trailing slashes, preserves path prefixes and removes empty query or fragment delimiters. Credentials, nonempty query parameters and fragments are rejected.

Every fetch uses that base: `/catalog.json` and `/c/<slug>.<format>.md`. Absolute URLs in the catalog are reference links only. Requests reject redirects and HTML responses, use a 15-second timeout and a `patternbook-mcp/<version>` user agent, and limit catalogs to 5 MiB and briefs to 1 MiB. Limits apply to both declared content lengths and streamed bytes. The catalog and each brief are cached for five minutes, concurrent loads are shared, and the brief cache holds at most 100 entries. Errors are not cached. The server writes protocol messages to stdout and diagnostics to stderr.

Catalog version 1 validates only the metadata the tools read and strips unknown fields. New catalog formats are accepted; `list_categories` reports only formats supported by both the catalog and this server, which fetches React and HTML. Slugs and taxonomy ids must be lowercase kebab-case. Invalid metadata and unsupported catalog versions are rejected.

## Claude Code

```bash
claude mcp add patternbook -- npx -y patternbook-mcp
```

## Codex

Add this to `~/.codex/config.toml`, using the [stdio MCP configuration](https://developers.openai.com/codex/mcp):

```toml
[mcp_servers.patternbook]
command = "npx"
args = ["-y", "patternbook-mcp"]
```

## Cursor and other MCP clients

Put this in Cursor's `.cursor/mcp.json`, or the equivalent `mcp.json` for a client that accepts `mcpServers`:

```json
{
  "mcpServers": {
    "patternbook": {
      "command": "npx",
      "args": ["-y", "patternbook-mcp"]
    }
  }
}
```

Restart or reload the MCP client after changing its configuration.

## Develop against a local build

From the repository root, build and serve the site's agent files:

```bash
npm run build
npm run serve:build
```

The root site requires Node 22.22 or newer. Keep the static server running and set `PATTERNBOOK_URL=http://localhost:4317` in your MCP client's environment. For Claude Code:

```bash
claude mcp add patternbook -e PATTERNBOOK_URL=http://localhost:4317 -- npx -y patternbook-mcp
```

To work on the server itself, build it from source:

```bash
cd mcp
npm install
npm run build
```

Replace `npx -y patternbook-mcp` in your client with `node /abs/path/mcp/dist/index.js`. The package has its own dependencies and lockfile; it is not an npm workspace.

## Development

Run these inside `mcp/`:

```bash
npm run typecheck
npm run build
npm test
```

`npm test` cleans and builds the stdio entry point first. Tests cover ranking, filters, URL and slug validation, catalog parsing, caching, failures, the in-memory MCP protocol and spawned stdio processes. `test/contract.test.ts` always builds the catalog from the site's source metadata and catalog builder, without a site build or root dependencies, to check the schema, production origin, formats and brief paths.

`test/real-build.ts` gates descriptive-query and real-build stdio tests on `../build/client/catalog.json`. Without it, those tests skip; run `npm run build` at the root to enable them. Set `PATTERNBOOK_REQUIRE_BUILD=1` to fail when the build is missing. CI sets this after building the site.

`src/index.ts` reads the environment and starts stdio; `server.ts` registers tools and maps errors; `client.ts` handles HTTP, URLs and configuration; `cache.ts` owns caching; `catalog.ts` owns catalog validation and category summaries; `search.ts` owns ranking, search schemas, projection and text output. Direct cache tests live in `test/cache.test.ts`.

The root TypeScript and lint configuration exclude `mcp/`; root Vitest already restricts tests to `src/`, `app/` and `scripts/`. Root tooling does not need this package's dependencies. The existing `node_modules` and `dist` gitignore entries also cover this package's generated directories.
