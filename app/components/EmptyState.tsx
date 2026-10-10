import { Link } from 'react-router'
import { button } from './ui'

const ACTION = `mt-6 ${button()}`

/** Shown instead of the grid. `filtered`: a search or tag ruled everything out, so offer `onClear`. */
export function EmptyState({ filtered, onClear }: { filtered: boolean; onClear(): void }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-zinc-300 px-6 py-16 text-center dark:border-zinc-700">
      {filtered ? (
        <>
          <h3 className="text-base font-medium text-zinc-950 dark:text-white">No patterns match</h3>
          <p className="mt-1.5 max-w-sm text-sm text-pretty text-zinc-600 dark:text-zinc-400">
            Try another search term, or turn off a layout tag.
          </p>
          <button type="button" onClick={onClear} className={ACTION}>
            Clear filters
          </button>
        </>
      ) : (
        <>
          <h3 className="text-base font-medium text-zinc-950 dark:text-white">No patterns here yet</h3>
          <p className="mt-1.5 max-w-sm text-sm text-pretty text-zinc-600 dark:text-zinc-400">
            Nothing has been added to this category yet.
          </p>
          <Link to="/" className={ACTION}>
            Browse all patterns
          </Link>
        </>
      )}
    </div>
  )
}
