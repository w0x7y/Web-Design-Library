/** 'Instrument Serif:ital@0;1' → 'Instrument Serif' */
export function fontDisplayName(family: string): string {
  return family.split(':')[0]
}

export function fontStylesheetHref(families: string[]): string | null {
  if (families.length === 0) return null
  const params = families.map((family) => `family=${family.replaceAll(' ', '+')}`).join('&')
  return `https://fonts.googleapis.com/css2?${params}&display=swap`
}

export function fontLinkTag(families: string[]): string {
  const href = fontStylesheetHref(families)
  return href ? `<link rel="stylesheet" href="${href}">` : ''
}
