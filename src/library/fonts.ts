/** 'Instrument Serif:ital@0;1' → 'Instrument Serif' */
export function fontDisplayName(family: string): string {
  return family.split(':')[0]
}

/** A family name, optionally followed by CSS2 axis names and equally sized value tuples. */
export function isFontFamily(family: string): boolean {
  const [name, variation, ...extra] = family.split(':')
  if (extra.length || !/^[\p{L}\p{N}]+(?:[ -][\p{L}\p{N}]+)*$/u.test(name)) return false
  if (variation === undefined) return true
  const [axes, values, ...rest] = variation.split('@')
  const names = axes.split(',')
  if (rest.length || !values || names.some((axis) => !/^(?:[a-z]{4}|[A-Z]{4})$/.test(axis))) return false
  if (new Set(names).size !== names.length) return false
  const tuples: [number, number][][] = []
  for (const tuple of values.split(';')) {
    const parts = tuple.split(',')
    if (parts.length !== names.length) return false
    const bounds: [number, number][] = []
    for (const part of parts) {
      if (!/^-?\d+(?:\.\d+)?(?:\.\.-?\d+(?:\.\d+)?)?$/.test(part)) return false
      const [start, end] = part.split('..').map(Number)
      if (!Number.isFinite(start) || (end !== undefined && (!Number.isFinite(end) || start >= end))) return false
      bounds.push([start, end ?? start])
    }
    // Any two tuples must be separated on at least one axis; Google rejects overlaps and touching endpoints.
    if (tuples.some((other) => bounds.every(([start, end], axis) => start <= other[axis][1] && end >= other[axis][0]))) return false
    tuples.push(bounds)
  }
  return true
}

export function fontStylesheetHref(families: string[]): string | null {
  if (families.length === 0) return null
  const params = new URLSearchParams()
  for (const family of families) params.append('family', family)
  params.set('display', 'swap')
  return `https://fonts.googleapis.com/css2?${params}`
}

export function fontLinkTag(families: string[]): string {
  const href = fontStylesheetHref(families)
  return href ? `<link rel="stylesheet" href="${href.replaceAll('&', '&amp;')}">` : ''
}
