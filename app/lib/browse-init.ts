import { LAYOUT_TAGS } from '../../src/library/taxonomy'

/** Hides the static home intro before first paint; Browse removes the marker after hydration. */
export const browseInitScript = `(function () {
  if (location.pathname !== '/') return
  var params = new URLSearchParams(location.search)
  var tags = ${JSON.stringify(LAYOUT_TAGS)}
  var filtered = (params.get('q') || '').trim() !== '' || params.getAll('tags').some(function (value) {
    return value.split(',').some(function (tag) { return tags.includes(tag.trim().toLowerCase()) })
  })
  if (filtered) document.documentElement.setAttribute('data-browse-filtered', '')
})()`
