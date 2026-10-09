import { track } from '@vercel/analytics'
import { trackEvent } from './analytics'

vi.mock('@vercel/analytics', () => ({ track: vi.fn() }))

beforeEach(() => {
  vi.mocked(track).mockClear()
})

describe('trackEvent', () => {
  test('sends the name and the remaining props', () => {
    trackEvent({ name: 'copy_code', slug: 'hero-split-image', format: 'html' })
    expect(track).toHaveBeenCalledWith('copy_code', { slug: 'hero-split-image', format: 'html' })
  })

  test('covers every event with exactly its props', () => {
    trackEvent({ name: 'copy_ai', slug: 'a', format: 'react' })
    trackEvent({ name: 'download_png', slug: 'a', viewport: 'mobile' })
    trackEvent({ name: 'copy_image', slug: 'a' })
    expect(vi.mocked(track).mock.calls).toEqual([
      ['copy_ai', { slug: 'a', format: 'react' }],
      ['download_png', { slug: 'a', viewport: 'mobile' }],
      ['copy_image', { slug: 'a' }],
    ])
  })

  test('never lets analytics break the action that succeeded', () => {
    vi.mocked(track).mockImplementationOnce(() => {
      throw new Error('blocked')
    })
    expect(() => trackEvent({ name: 'copy_image', slug: 'a' })).not.toThrow()
  })
})
