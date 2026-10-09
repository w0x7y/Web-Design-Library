import { fontDisplayName, fontLinkTag, fontStylesheetHref } from './fonts'

test('fontStylesheetHref encodes families', () => {
  expect(fontStylesheetHref(['Instrument Serif:ital@0;1', 'Inter:wght@400;600'])).toBe(
    'https://fonts.googleapis.com/css2?family=Instrument+Serif%3Aital%400%3B1&family=Inter%3Awght%40400%3B600&display=swap',
  )
  expect(fontStylesheetHref([])).toBeNull()
  expect(fontDisplayName('Instrument Serif:ital@0;1')).toBe('Instrument Serif')
})

test('fontLinkTag wraps the stylesheet href, or is empty without fonts', () => {
  expect(fontLinkTag(['Inter:wght@400'])).toBe(
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter%3Awght%40400&amp;display=swap">',
  )
  expect(fontLinkTag([])).toBe('')
})

test('a family cannot add query parameters, fragments, or HTML attributes', () => {
  const family = 'A&B "Special"#Font:wght@400'
  const href = fontStylesheetHref([family])!
  const url = new URL(href)
  expect(url.searchParams.getAll('family')).toEqual([family])
  expect([...url.searchParams.keys()]).toEqual(['family', 'display'])
  expect(url.hash).toBe('')
  const link = fontLinkTag([family])
  expect(link).not.toContain('"Special"')
  expect(link).toContain('&amp;display=swap')
})
