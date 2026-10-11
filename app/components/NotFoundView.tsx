import { Link } from 'react-router'
import { SearchField } from './SearchField'
import { TEXT_LINK } from './ui'

// data-not-found hides the header's search field while this one is on screen (app.css).
export function NotFoundView({ title = 'Page not found' }: { title?: string }) {
  return (
    <main data-not-found="" className="mx-auto w-full max-w-md px-6 py-24 sm:py-32">
      <h1 className="text-2xl font-semibold tracking-tight text-balance text-zinc-950 dark:text-white">{title}</h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">Try searching the library instead.</p>
      <div className="mt-8">
        <SearchField />
      </div>
      <Link
        to="/"
        className={`mt-6 inline-flex ${TEXT_LINK}`}
      >
        Back to all patterns
      </Link>
    </main>
  )
}
