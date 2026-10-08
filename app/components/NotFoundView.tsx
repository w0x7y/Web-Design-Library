import { Link } from 'react-router'

export function NotFoundView({ title = 'Page not found' }: { title?: string }) {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-start gap-3 px-6 py-24">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">Try searching the library instead.</p>
      <Link to="/" className="text-sm font-medium underline underline-offset-4">
        Back to all components
      </Link>
    </main>
  )
}
