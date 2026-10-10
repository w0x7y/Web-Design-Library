import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'

it('cleans deleted sources from dist while rebuilding the stdio entry point', () => {
  const packageDir = fileURLToPath(new URL('../', import.meta.url))
  const cache = join(packageDir, 'node_modules/.cache')
  mkdirSync(cache, { recursive: true })
  const directory = mkdtempSync(join(cache, 'build-test-'))
  try {
    for (const name of ['src', 'package.json', 'tsconfig.json', 'tsconfig.build.json']) cpSync(join(packageDir, name), join(directory, name), { recursive: true })
    mkdirSync(join(directory, 'dist'))
    for (const name of ['config.js', 'format.js']) writeFileSync(join(directory, 'dist', name), '// stale\n')
    execSync('npm run build', { cwd: directory, stdio: 'pipe' })
    for (const name of ['config.js', 'format.js']) expect(existsSync(join(directory, 'dist', name))).toBe(false)
    expect(readFileSync(join(directory, 'dist/index.js'), 'utf8')).toContain('#!/usr/bin/env node')
  } finally { rmSync(directory, { recursive: true, force: true }) }
}, 15_000)

it('ships a copy of the repository license', () => {
  expect(readFileSync(new URL('../LICENSE', import.meta.url), 'utf8')).toBe(readFileSync(new URL('../../LICENSE', import.meta.url), 'utf8'))
})
