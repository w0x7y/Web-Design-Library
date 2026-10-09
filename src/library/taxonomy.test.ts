import { expect, test } from 'vitest'
import { STYLE_TAGS, TAG_GROUPS } from './taxonomy'

test('the tag groups hold every style tag exactly once', () => {
  const grouped = TAG_GROUPS.flatMap((group) => group.tags)
  expect([...grouped].sort()).toEqual([...STYLE_TAGS].sort())
})
