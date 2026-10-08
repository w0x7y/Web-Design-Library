import { Outlet } from 'react-router'
import { Header } from '~/components/Header'

// The page background lives on <html> (root.tsx) so it also covers overscroll and the root error page.
export default function Shell() {
  return (
    <div className="min-h-dvh font-shell text-zinc-900 antialiased selection:bg-zinc-200 dark:text-zinc-100 dark:selection:bg-zinc-700">
      <Header />
      <Outlet />
    </div>
  )
}
