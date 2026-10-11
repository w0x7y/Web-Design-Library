import { expect, test } from 'vitest'
import { LAYOUT_TAGS, TAG_GROUPS } from './taxonomy'

test('the tag groups hold every layout tag exactly once', () => {
  const grouped = TAG_GROUPS.flatMap((group) => group.tags)
  expect([...grouped].sort()).toEqual([...LAYOUT_TAGS].sort())
})
