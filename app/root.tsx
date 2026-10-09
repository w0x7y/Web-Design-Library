import { Analytics } from '@vercel/analytics/react'
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useMatches } from 'react-router'
import { Toaster } from 'sonner'
import type { Route } from './+types/root'
import { NotFoundView } from './components/NotFoundView'
import { themeInitScript, useTheme } from './lib/theme'
import './app.css'

/**
 * A route's `handle` names the document it renders in: the site's (the default), or the stage's,
 * the bare page a library component renders on (the preview route).
 */
export type DocumentHandle = { document: 'site' | 'stage' }

export function Layout({ children }: { children: React.ReactNode }) {
  const stage = useMatches().some((match) => (match.handle as Partial<DocumentHandle> | undefined)?.document === 'stage')
  return stage ? <StageDocument>{children}</StageDocument> : <SiteDocument>{children}</SiteDocument>
}

function SiteDocument({ children }: { children: React.ReactNode }) {
  // The init script sets .dark before first paint, which hydration tolerates via
  // suppressHydrationWarning. Rendering the class from the theme as well keeps it
  // when React re-creates the document (e.g. recovering from a root-level error).
  // From sm the header is sticky, so scroll-pt-16 keeps an element scrolled to by focus from landing under it.
  const { theme } = useTheme()
  return (
    <html
      lang="en"
      className={`bg-white sm:scroll-pt-16 dark:bg-zinc-950 dark:scheme-dark${theme === 'dark' ? ' dark' : ''}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400..600&family=Geist+Mono:wght@400..500&display=swap"
        />
        <Links />
      </head>
      <body>
        {children}
        <Toaster position="bottom-right" theme={theme} />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

// A plain light page, whatever the site theme: none of the site's theme, fonts, toasts or analytics
// reach the component, the preview iframe, or an image capture.
function StageDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-white scheme-light">
      <head>
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
