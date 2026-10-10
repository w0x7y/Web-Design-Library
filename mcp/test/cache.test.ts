import { afterEach, describe, expect, it, vi } from 'vitest'
import { TtlCache } from '../src/cache.js'

afterEach(() => vi.useRealTimers())

describe('TTL cache', () => {
  it('shares concurrent loads and caches successful values', async () => {
    const cache = new TtlCache<string>(10, 2)
    const load = vi.fn(async () => 'value')
    const request = cache.get('key', load)
    expect(cache.get('key', load)).toBe(request)
    expect(await request).toBe('value')
    expect(await cache.get('key', load)).toBe('value')
    expect(load).toHaveBeenCalledTimes(1)
  })

  it('starts TTL when a slow load completes and reloads expired values', async () => {
    vi.useFakeTimers()
    const cache = new TtlCache<string>(10, 2)
    const load = vi.fn(async () => {
      await new Promise((resolve) => setTimeout(resolve, 20))
      return 'value'
    })
    const first = cache.get('key', load)
    await vi.advanceTimersByTimeAsync(20)
    await first
    await vi.advanceTimersByTimeAsync(9)
    expect(await cache.get('key', load)).toBe('value')
    expect(load).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    await cache.get('other', async () => 'other')
    const next = cache.get('key', load)
    await vi.advanceTimersByTimeAsync(20)
    expect(await next).toBe('value')
    expect(load).toHaveBeenCalledTimes(2)
  })

  it('evicts the oldest value at capacity, even when it was recently read', async () => {
    vi.useFakeTimers()
    const cache = new TtlCache<string>(10, 2)
    const load = vi.fn(async () => 'value')
    await cache.get('first', load)
    await cache.get('second', load)
    await cache.get('first', load)
    await cache.get('third', load)
    await cache.get('second', load)
    expect(load).toHaveBeenCalledTimes(3)
    await cache.get('first', load)
    expect(load).toHaveBeenCalledTimes(4)
  })

  it.each(['sync', 'async'])('shares %s failures and retries without caching them', async (mode) => {
    const cache = new TtlCache<string>(10, 2)
    const fail = vi.fn(() => {
      if (mode === 'sync') throw new Error('failed')
      return Promise.reject(new Error('failed'))
    })
    const request = cache.get('failure', fail)
    expect(cache.get('failure', fail)).toBe(request)
    await expect(request).rejects.toThrow('failed')
    expect(fail).toHaveBeenCalledTimes(1)
    expect(await cache.get('failure', async () => 'recovered')).toBe('recovered')
  })
})
