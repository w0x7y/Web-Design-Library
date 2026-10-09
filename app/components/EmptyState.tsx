import { Link } from 'react-router'

const ACTION =
  'mt-6 inline-flex h-9 items-center rounded-lg bg-zinc-900 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white'

/** Shown instead of the grid. `filtered`: a search or tag ruled everything out, so offer `onClear`. */
export function EmptyState({ filtered, onClear }: { filtered: boolean; onClear(): void }) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-zinc-300 px-6 py-16 text-center dark:border-zinc-700">
      {filtered ? (
        <>
          <h3 className="text-base font-medium text-zinc-950 dark:text-white">No components match</h3>
          <p className="mt-1.5 max-w-sm text-sm text-pretty text-zinc-600 dark:text-zinc-400">
            Try another search term, or turn off a style tag.
          </p>
          <button type="button" onClick={onClear} className={ACTION}>
            Clear filters
          </button>
        </>
      ) : (
        <>
          <h3 className="text-base font-medium text-zinc-950 dark:text-white">No components here yet</h3>
          <p className="mt-1.5 max-w-sm text-sm text-pretty text-zinc-600 dark:text-zinc-400">
            Nothing has been added to this category yet.
          </p>
          <Link to="/" className={ACTION}>
            Browse all components
          </Link>
        </>
      )}
    </div>
  )
}
