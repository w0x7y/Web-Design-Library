// Line icons shared across the site's chrome: 16px grid, 1.25 stroke, sized by the caller (size-4 by default).

const props = (className = 'size-4') =>
  ({ 'aria-hidden': true, viewBox: '0 0 16 16', fill: 'none', stroke: 'currentColor', strokeWidth: 1.25, strokeLinecap: 'round', strokeLinejoin: 'round', className }) as const

type IconProps = { className?: string }

export function CopyIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
      <path d="M10.5 5.5V4A1.5 1.5 0 0 0 9 2.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" />
    </svg>
  )
}

/** The AI brief's mark. */
export function SparkleIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M6.5 2.5c.5 2.6 1.4 3.5 4 4-2.6.5-3.5 1.4-4 4-.5-2.6-1.4-3.5-4-4 2.6-.5 3.5-1.4 4-4Z" />
      <path d="M12 10.5c.2 1.1.6 1.5 1.7 1.7-1.1.2-1.5.6-1.7 1.7-.2-1.1-.6-1.5-1.7-1.7 1.1-.2 1.5-.6 1.7-1.7Z" />
    </svg>
  )
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M8 2.5v7.5M4.75 7 8 10.25 11.25 7M3 13h10" />
    </svg>
  )
}

export function ImageIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <rect x="2.5" y="3" width="11" height="10" rx="1.5" />
      <circle cx="6" cy="6.75" r="1" />
      <path d="m2.75 11.5 3-3 2.5 2.5 1.75-1.75 3.25 3.25" />
    </svg>
  )
}

/** React code. */
export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="m5.5 4.5-3.5 3.5 3.5 3.5M10.5 4.5l3.5 3.5-3.5 3.5" />
    </svg>
  )
}

/** A plain file (HTML + CSS). */
export function FileIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M4 2.5h5.5L12.5 5.5v8H4Z" />
      <path d="M9.5 2.5v3h3M6.25 9h4M6.25 11h2.5" />
    </svg>
  )
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg {...props(className)}>
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  )
}
