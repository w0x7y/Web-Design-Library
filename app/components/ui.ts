// The site's shared control styles: one look for each kind of control, so the variants can't drift.
// Site chrome only; library components never use these.

const FOCUS_RING = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus'

const BUTTON_SIZES = {
  sm: 'h-8 gap-1.5 px-3 text-[13px]',
  md: 'h-9 gap-2 px-4 text-sm',
  lg: 'h-11 gap-2 px-4 text-sm sm:px-5',
} as const

// Hover is `not-aria-disabled:` so a button that is unavailable (aria-disabled, keeping its focus) doesn't react.
const BUTTON_VARIANTS = {
  primary:
    'border-zinc-900 bg-zinc-900 text-white not-aria-disabled:hover:bg-zinc-700 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 dark:not-aria-disabled:hover:bg-zinc-300',
  secondary:
    'border-zinc-200 bg-white text-zinc-900 not-aria-disabled:hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:not-aria-disabled:hover:bg-zinc-900',
} as const

/** A button, or a link that looks like one. */
export function button({ variant = 'primary', size = 'md' }: { variant?: keyof typeof BUTTON_VARIANTS; size?: keyof typeof BUTTON_SIZES } = {}): string {
  return `inline-flex shrink-0 items-center justify-center rounded-lg border font-medium whitespace-nowrap shell-press aria-disabled:cursor-default aria-disabled:opacity-60 ${FOCUS_RING} ${BUTTON_SIZES[size]} ${BUTTON_VARIANTS[variant]}`
}

const CHIP_TONES = {
  off: 'border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:text-white',
  on: 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950',
  // The chip's shape without its outline, for a control that sits in a row of chips (Clear).
  bare: 'gap-1 border-transparent text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white',
} as const

/** A small rounded tag: a style-tag toggle (`on` when pressed), a link to a tag, or a `bare` control beside them. */
export function chip(tone: keyof typeof CHIP_TONES = 'off'): string {
  return `inline-flex h-7 shrink-0 items-center rounded-full border px-3 text-[13px] whitespace-nowrap shell-press ${FOCUS_RING} ${CHIP_TONES[tone]}`
}

/** An underlined text link that leads somewhere else on the site ("View all", "Back to all components"). */
export const TEXT_LINK = `rounded-sm text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors duration-150 hover:text-zinc-950 hover:decoration-zinc-500 dark:text-zinc-400 dark:decoration-zinc-700 dark:hover:text-white dark:hover:decoration-zinc-400 ${FOCUS_RING}`
