import { loadLibrary } from '../../scripts/load-library'
import { checkComponent } from './rules'

test('every component follows the authoring rules', async () => {
  const items = await loadLibrary()
  const slugs = items.map((i) => i.entry.meta.slug)
  for (const { folder, entry } of items)
    expect({ folder, violations: checkComponent(entry, folder, slugs) }).toEqual({ folder, violations: [] })
})
