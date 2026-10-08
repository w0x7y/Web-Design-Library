import { Outlet } from 'react-router'

export default function Shell() {
  return (
    <div className="min-h-screen bg-white font-shell text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <Outlet />
    </div>
  )
}
