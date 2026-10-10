import { useState } from 'react'
import { useTheme } from '~/lib/theme'
import { useHydrated } from '~/lib/use-hydrated'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const hydrated = useHydrated()
  const next = theme === 'dark' ? 'light' : 'dark'
  // The new icon turns in after a switch, but not on page load. An icon shown again replays its animation.
  const [switched, setSwitched] = useState(false)
  const turn = switched ? 'animate-shell-turn motion-reduce:animate-shell-fade' : ''
  return (
    <button
      type="button"
      // Enabled once hydrated, when the label knows the real theme and a click does something.
      disabled={!hydrated}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={() => {
        setSwitched(true)
        setTheme(next)
      }}
      className={className}
    >
      {/* CSS picks the icon, so it is right from the first paint, before hydration. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`size-[18px] dark:hidden ${turn}`}
      >
        <path d="M16.5 11.9A6.75 6.75 0 0 1 8.1 3.5a6.75 6.75 0 1 0 8.4 8.4Z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={`hidden size-[18px] dark:block ${turn}`}
      >
        <circle cx="10" cy="10" r="3.25" />
        <path d="M10 2.5v1.25M10 16.25v1.25M2.5 10h1.25M16.25 10h1.25M4.7 4.7l.88.88M14.42 14.42l.88.88M4.7 15.3l.88-.88M14.42 5.58l.88-.88" />
      </svg>
    </button>
  )
}
