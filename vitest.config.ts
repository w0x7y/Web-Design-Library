import { defineConfig } from 'vitest/config'

export default defineConfig({
  // The `~/` alias for app/ (tsconfig.json paths), as vite.config.ts resolves it for the app.
  resolve: { tsconfigPaths: true },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'app/**/*.test.ts', 'scripts/**/*.test.ts'],
    globals: true,
    // Vitest turns every CSS import into '' unless it is opted in here; `?raw` imports (sources.server.ts's
    // styles.css) must return the file's text, as Vite does, for catalog.contract.test.ts to compare it.
    css: { include: [/\.css\?raw$/] },
  },
})
