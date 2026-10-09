import { loadLibrary } from '../../scripts/load-library'
import { checkLibrary } from './rules'

test('every component follows the authoring rules', async () => {
  const failing = checkLibrary(await loadLibrary()).filter(({ violations }) => violations.length > 0)
  expect(failing).toEqual([])
})
