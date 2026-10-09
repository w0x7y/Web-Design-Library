// The reset every component's styles.css begins with: Tailwind's preflight scoped to the component's
// root class, so the plain-CSS version renders like the Tailwind one without restyling the host page.
// rules.ts checks each styles.css against it. AGENTS.md shows it to authors with SLUG for the slug, and
// reset.test.ts keeps that copy, and the font stack (Tailwind's default --font-sans), in step with this one.

/** The scoped reset for the component `slug`, exactly as its styles.css begins. */
export function resetCss(slug: string): string {
  return `/* Scoped reset: mirrors Tailwind preflight for this component only */
.${slug}, .${slug} *, .${slug} *::before, .${slug} *::after { box-sizing: border-box; margin: 0; padding: 0; border: 0 solid; }
.${slug} { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; line-height: 1.5; -webkit-text-size-adjust: 100%; tab-size: 4; }
.${slug} :is(h1, h2, h3, h4, h5, h6) { font-size: inherit; font-weight: inherit; }
.${slug} a { color: inherit; text-decoration: inherit; }
.${slug} :is(b, strong) { font-weight: bolder; }
.${slug} :is(ol, ul, menu) { list-style: none; }
.${slug} :is(img, svg, video, canvas, picture) { display: block; vertical-align: middle; }
.${slug} :is(img, video) { max-width: 100%; height: auto; }
.${slug} :is(button, input, select, optgroup, textarea) { font: inherit; letter-spacing: inherit; color: inherit; background-color: transparent; border-radius: 0; opacity: 1; }
.${slug} ::placeholder { opacity: 1; color: color-mix(in oklab, currentcolor 50%, transparent); }
.${slug} table { text-indent: 0; border-color: inherit; border-collapse: collapse; }
.${slug} summary { display: list-item; }
`
}
