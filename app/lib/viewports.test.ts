import { frameSize, previewBox, STAGE_PADDING, thumbnailFit, thumbnailStageWidth } from './viewports'

// The spec's frame sizes, pinned once: the preview iframe, the PNG capture and parity all derive from frameSize.
describe('frameSize', () => {
  test('a section fills the viewport', () => {
    expect(frameSize('section', 'desktop')).toEqual({ width: 1440, height: 900 })
    expect(frameSize('section', 'tablet')).toEqual({ width: 768, height: 1024 })
    expect(frameSize('section', 'mobile')).toEqual({ width: 390, height: 844 })
  })

  test('an element sits in a 480px-tall frame at the viewport width', () => {
    expect(frameSize('element', 'desktop')).toEqual({ width: 1440, height: 480 })
    expect(frameSize('element', 'tablet')).toEqual({ width: 768, height: 480 })
    expect(frameSize('element', 'mobile')).toEqual({ width: 390, height: 480 })
  })
})

describe('previewBox', () => {
  const sectionFrame = frameSize('section', 'desktop')
  const elementFrame = frameSize('element', 'desktop')

  test('shows the whole frame until the content is measured', () => {
    expect(previewBox('section', sectionFrame, null)).toEqual({ height: 900, shift: 0 })
    expect(previewBox('element', elementFrame, null)).toEqual({ height: 480, shift: 0 })
  })

  test('clips a short section to its own height, and leaves a tall one at the frame height', () => {
    expect(previewBox('section', sectionFrame, 525)).toEqual({ height: 525, shift: 0 })
    expect(previewBox('section', sectionFrame, 2400)).toEqual({ height: 900, shift: 0 })
  })

  test('clips an element to its height plus the stage padding, and shifts the frame to keep it centred', () => {
    expect(previewBox('element', elementFrame, 140)).toEqual({ height: 140 + 2 * STAGE_PADDING, shift: (480 - (140 + 2 * STAGE_PADDING)) / 2 })
    expect(previewBox('element', elementFrame, 400)).toEqual({ height: 480, shift: 0 })
  })
})

describe('thumbnailFit', () => {
  const frame = { width: 320, height: 200, stage: 1280 }

  test('scales a section to the frame width', () => {
    expect(thumbnailFit('section', frame, { width: 1280, height: 1600 })).toEqual({ scale: 0.25, offset: 0, short: false, thin: false })
  })

  test('centres a section that ends above the frame bottom', () => {
    // 400px at 0.25 is 100px tall in a 200px frame: 50px above and below.
    expect(thumbnailFit('section', frame, { width: 1280, height: 400 })).toEqual({ scale: 0.25, offset: 50, short: true, thin: false })
  })

  test('keeps a thin strip at the top', () => {
    // 64px at 0.25 is 16px: under a fifth of the frame.
    expect(thumbnailFit('section', frame, { width: 1280, height: 64 })).toEqual({ scale: 0.25, offset: 0, short: true, thin: true })
  })

  test('leaves an element at its size when it fits with a 24px margin, and shrinks it when it does not', () => {
    expect(thumbnailFit('element', frame, { width: 200, height: 100 }).scale).toBe(1)
    expect(thumbnailFit('element', frame, { width: 544, height: 100 }).scale).toBe(0.5)
    expect(thumbnailFit('element', frame, { width: 100, height: 304 }).scale).toBe(0.5)
  })

  test('the thumbnail stage is never wider than the screen', () => {
    expect(thumbnailStageWidth(1440)).toBe(1280)
    expect(thumbnailStageWidth(390)).toBe(390)
  })
})
