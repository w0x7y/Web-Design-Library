import { Link } from 'react-router'
import { SITE } from '~/site'
import { SearchField } from './SearchField'
import { ThemeToggle } from './ThemeToggle'

const ICON_BUTTON =
  'inline-flex size-9 items-center justify-center rounded-lg text-zinc-500 transition-colors duration-150 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 disabled:pointer-events-none dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:outline-zinc-100'

export function Header() {
  return (
    <header className="z-30 border-b border-zinc-200 bg-white/90 backdrop-blur-md sm:sticky sm:top-0 dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-(--breakpoint-2xl) flex-wrap items-center gap-x-6 gap-y-3 px-4 py-3 sm:h-14 sm:flex-nowrap sm:px-6 sm:py-0 lg:gap-x-10 lg:px-8">
        {/* On large screens the logo spans the sidebar column, so the search lines up with the grid. */}
        <div className="flex shrink-0 lg:w-60">
          <Link
            to="/"
            className="-mx-1 flex items-center gap-2.5 rounded-md px-1 py-1 text-[15px] font-semibold tracking-tight text-zinc-950 focus-visible:outline-2 focus-visible:outline-zinc-900 dark:text-white dark:focus-visible:outline-zinc-100"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
              <rect x="2" y="2" width="7" height="7" rx="1.75" fill="currentColor" />
              <rect x="11" y="2" width="7" height="7" rx="1.75" fill="currentColor" opacity="0.35" />
              <rect x="2" y="11" width="7" height="7" rx="1.75" fill="currentColor" opacity="0.35" />
              <rect x="11" y="11" width="7" height="7" rx="1.75" fill="currentColor" opacity="0.35" />
            </svg>
            {SITE.name}
          </Link>
        </div>
        {/* data-header-search: hidden on not-found pages, which show their own search (app.css). */}
        <div data-header-search="" className="order-last w-full sm:order-none sm:w-72 lg:w-96">
          <SearchField />
        </div>
        <div className="-mr-1.5 ml-auto flex items-center gap-0.5">
          <ThemeToggle className={ICON_BUTTON} />
          <a href={SITE.repoUrl} aria-label="GitHub repository" title="GitHub repository" className={ICON_BUTTON}>
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="currentColor" className="size-[18px]">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
