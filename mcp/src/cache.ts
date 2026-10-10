/** A bounded TTL cache that shares concurrent loads and never caches failures. */
export class TtlCache<T> {
  private readonly entries = new Map<string, { value: T; expiresAt: number }>()
  private readonly pending = new Map<string, Promise<T>>()

  constructor(private readonly ttlMs: number, private readonly capacity: number) {}

  get(key: string, load: () => Promise<T>): Promise<T> {
    const entry = this.entries.get(key)
    if (entry && entry.expiresAt > Date.now()) return Promise.resolve(entry.value)
    this.entries.delete(key)
    const pending = this.pending.get(key)
    if (pending) return pending

    const request = Promise.resolve().then(load).then((value) => {
      for (const [cachedKey, cached] of this.entries) {
        if (cached.expiresAt <= Date.now()) this.entries.delete(cachedKey)
      }
      this.entries.set(key, { value, expiresAt: Date.now() + this.ttlMs })
      while (this.entries.size > this.capacity) {
        const oldest = this.entries.keys().next()
        if (!oldest.done) this.entries.delete(oldest.value)
      }
      return value
    }).finally(() => this.pending.delete(key))
    this.pending.set(key, request)
    return request
  }
}
