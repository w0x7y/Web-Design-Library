import { codeToHtml } from 'shiki'

// Loader-only (runs at build time while pre-rendering), so Shiki and its
// grammars never reach the client bundle.
//
// Both themes are inlined: light colours as `color`, dark ones as
// `--shiki-dark`, which app.css switches to under `.dark`. In github-dark the
// editor background becomes the shell's zinc-950 so code sits flush with the
// dark page, and comments get a lighter grey so they stay readable on it
// (#6a737d would be ~4:1).
const DARK_REPLACEMENTS = { '#24292e': '#09090b', '#6a737d': '#8b949e' }

export function highlight(code: string, lang: 'tsx' | 'html' | 'css'): Promise<string> {
  // A trailing newline would render as an empty last line.
  return codeToHtml(code.replace(/\n$/, ''), {
    lang,
    themes: { light: 'github-light', dark: 'github-dark' },
    colorReplacements: { 'github-dark': DARK_REPLACEMENTS },
  })
}
