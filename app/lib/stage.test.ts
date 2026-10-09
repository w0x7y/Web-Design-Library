import { captureTargetSelector, readStage, STAGE, stageAttributes, stageMarkup, type PreviewState } from './stage'
import { STAGE_PADDING } from './viewports'

test('an opaque element is captured with its stage; a transparent one, and every section, as its own box', () => {
  expect(captureTargetSelector('element', false)).toBe(STAGE.backdrop)
  expect(captureTargetSelector('element', true)).toBe(STAGE.root)
  expect(captureTargetSelector('section', false)).toBe(STAGE.root)
  expect(captureTargetSelector('section', true)).toBe(STAGE.root)
})

test('the React and markup stages carry the same attributes and padding', () => {
  const attributes = stageAttributes({ kind: 'element', mode: 'page' })
  expect(attributes).toMatchObject({ 'data-preview-backdrop': '', 'data-kind': 'element', 'data-mode': 'page' })
  expect(attributes.style).toEqual({ '--stage-padding': `${STAGE_PADDING}px` })
  const markup = stageMarkup('element', '<p>hi</p>')
  expect(markup).toContain('data-preview-backdrop="" data-kind="element" data-mode="page"')
  expect(markup).toContain(`--stage-padding: ${STAGE_PADDING}px`)
  expect(markup).toContain('<div data-capture-root=""><p>hi</p></div>')
})

test('state and motion freeze are only set when given', () => {
  expect(stageAttributes({})).toMatchObject({ 'data-preview-state': undefined, 'data-capture': undefined })
  expect(stageAttributes({ state: 'ready', capture: true })).toMatchObject({ 'data-preview-state': 'ready', 'data-capture': '' })
})

/** A document holding one element with `attributes` (as stageAttributes returns them), matched by attribute-only selectors. */
function documentWith(attributes: Record<string, unknown> | null): Document {
  const present = Object.entries(attributes ?? {}).filter(([name, value]) => name.startsWith('data-') && value !== undefined)
  const element = {
    getAttribute: (name: string) => (present.find(([key]) => key === name)?.[1] as string | undefined) ?? null,
    hasAttribute: (name: string) => present.some(([key]) => key === name),
  }
  const matches = (selector: string) => [...selector.matchAll(/\[([\w-]+)(?:="([^"]*)")?\]/g)].every(([, name, value]) => (value === undefined ? element.hasAttribute(name) : element.getAttribute(name) === value))
  return { querySelector: (selector: string) => (attributes && matches(selector) ? element : null) } as unknown as Document
}

test('readStage: nothing before the stage is in the document', () => {
  expect(readStage(documentWith(null))).toBeNull()
})

test('readStage reads the state and motion freeze that stageAttributes writes', () => {
  expect(readStage(documentWith(stageAttributes({ kind: 'section', mode: 'page' })))).toMatchObject({ state: 'loading', frozen: false })
  for (const state of ['loading', 'ready', 'failed'] satisfies PreviewState[]) {
    expect(readStage(documentWith(stageAttributes({ state, capture: true })))).toMatchObject({ state, frozen: true })
  }
})

test('the ready selectors match exactly the stages they name', () => {
  const ready = documentWith(stageAttributes({ state: 'ready' }))
  const capturable = documentWith(stageAttributes({ state: 'ready', capture: true }))
  expect(ready.querySelector(STAGE.ready)).not.toBeNull()
  expect(ready.querySelector(STAGE.captureReady)).toBeNull()
  expect(capturable.querySelector(STAGE.captureReady)).not.toBeNull()
  expect(documentWith(stageAttributes({ state: 'loading' })).querySelector(STAGE.ready)).toBeNull()
})
