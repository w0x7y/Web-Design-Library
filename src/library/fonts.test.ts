import { fontDisplayName, fontLinkTag, fontStylesheetHref } from './fonts'

test('fontStylesheetHref encodes families', () => {
  expect(fontStylesheetHref(['Instrument Serif:ital@0;1', 'Inter:wght@400;600'])).toBe(
    'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;600&display=swap',
  )
  expect(fontStylesheetHref([])).toBeNull()
  expect(fontDisplayName('Instrument Serif:ital@0;1')).toBe('Instrument Serif')
})

test('fontLinkTag wraps the stylesheet href, or is empty without fonts', () => {
  expect(fontLinkTag(['Inter:wght@400'])).toBe(
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap">',
  )
  expect(fontLinkTag([])).toBe('')
})
