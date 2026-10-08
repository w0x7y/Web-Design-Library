import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { Route } from './+types/root'
import { NotFoundView } from './components/NotFoundView'
import { themeInitScript, useTheme } from './lib/theme'
import './app.css'

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400..600&family=Geist+Mono:wght@400..500&display=swap',
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  // The init script sets .dark before first paint, which hydration tolerates via
  // suppressHydrationWarning. Rendering the class from the theme as well keeps it
  // when React re-creates the document (e.g. recovering from a root-level error).
  const { theme } = useTheme()
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-zinc-950 dark:scheme-dark${theme === 'dark' ? ' dark' : ''}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

// Renders outside the shell layout, so it brings the shell's type and text colours itself.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <div className="min-h-dvh font-shell text-zinc-900 antialiased dark:text-zinc-100">
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <NotFoundView />
      ) : (
        <main className="mx-auto w-full max-w-md px-6 py-24 sm:py-32">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Something went wrong</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">An unexpected error occurred. Try reloading the page.</p>
        </main>
      )}
    </div>
  )
}
