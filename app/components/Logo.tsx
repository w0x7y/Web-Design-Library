import { useId } from 'react'

/**
 * The Patternbook mark: a page with a turned-down corner, cut with a grid of pattern tiles. The tiles
 * are a mask, so they show whatever is behind the mark in either theme. public/favicon.svg draws the same shape.
 */
export function LogoMark({ className = 'size-5' }: { className?: string }) {
  const mask = useId()
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={className}>
      <mask id={mask}>
        <path d="M2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6.5L11.5 18H5a3 3 0 0 1-3-3Z" fill="#fff" />
        <rect x="5" y="5" width="4" height="4" rx="1" fill="#000" />
        <rect x="11" y="5" width="4" height="4" rx="1" fill="#777" />
        <rect x="5" y="11" width="4" height="4" rx="1" fill="#777" />
      </mask>
      <rect width="20" height="20" fill="currentColor" mask={`url(#${mask})`} />
      <path d="M11.5 18v-3.5a3 3 0 0 1 3-3H18Z" fill="currentColor" opacity="0.4" />
    </svg>
  )
}
