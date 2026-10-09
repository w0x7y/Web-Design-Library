import { frameSize } from './viewports'

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
