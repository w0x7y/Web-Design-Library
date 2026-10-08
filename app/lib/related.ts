import type { ComponentMeta } from '../../src/library/types'

export const RELATED_LIMIT = 3

/** Other components in the same category, in library order, at most `limit`. */
export function relatedMetas(meta: ComponentMeta, all: ComponentMeta[], limit = RELATED_LIMIT): ComponentMeta[] {
  return all.filter((other) => other.category === meta.category && other.slug !== meta.slug).slice(0, limit)
}
