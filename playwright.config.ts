import { defineConfig, devices } from '@playwright/test'

// PATTERNBOOK_PORT lets several checkouts run their suites side by side (scripts/serve-build.ts reads it too).
const port = Number(process.env.PATTERNBOOK_PORT ?? 4317)

export default defineConfig({
  testDir: 'e2e',
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? [['html', { open: 'never' }]] : 'list',
  use: { baseURL: `http://localhost:${port}` },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run build && npm run serve:build',
    url: `http://localhost:${port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
})
