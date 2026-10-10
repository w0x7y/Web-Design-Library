import { Fragment } from 'react'
import { Link } from 'react-router'
import type { ComponentMeta } from '../../src/library/types'
import { componentPath } from '../../src/library/urls'
import { LiveThumbnail } from './LiveThumbnail'

/** A live thumbnail, name and style tags; the whole card links to the component's page. On hover the thumbnail lifts as its shadow grows. */
export function ComponentCard({ meta }: { meta: ComponentMeta }) {
  return (
    <article data-testid="component-card" className="group relative">
      <LiveThumbnail
        meta={meta}
        className="transition-[background-color,border-color,box-shadow,translate] duration-200 ease-shell-out group-hover:border-zinc-300 group-hover:shadow-[0_12px_32px_-14px_rgb(0_0_0/0.28)] motion-safe:group-hover:-translate-y-1 dark:group-hover:border-zinc-600 dark:group-hover:shadow-[0_12px_32px_-14px_rgb(0_0_0/0.9)]"
      />
      <h3 className="mt-3 text-sm/5 font-medium text-zinc-900 dark:text-zinc-100">
        <Link
          to={componentPath(meta.slug)}
          className="underline decoration-transparent underline-offset-4 transition-colors duration-150 group-hover:decoration-zinc-300 after:absolute after:-inset-2 after:rounded-xl focus-visible:outline-hidden focus-visible:after:outline-2 focus-visible:after:outline-focus dark:group-hover:decoration-zinc-600"
        >
          {meta.name}
        </Link>
      </h3>
      <p className="mt-0.5 text-xs/5 text-zinc-500 dark:text-zinc-400">
        <span className="sr-only">Style: </span>
        {meta.tags.map((tag, index) => (
          <Fragment key={tag}>
            {index > 0 && (
              <span aria-hidden="true" className="px-1.5 text-zinc-300 dark:text-zinc-600">
                ·
              </span>
            )}
            {tag}
            {index < meta.tags.length - 1 && <span className="sr-only">,</span>}
          </Fragment>
        ))}
      </p>
    </article>
  )
}
