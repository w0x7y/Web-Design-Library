import { useId, type ReactNode } from 'react'
import { useHydrated } from '~/lib/use-hydrated'

export interface Segment<T extends string> {
  value: T
  label: string
  icon?: ReactNode
}

/**
 * A row of mutually exclusive options: native radios in a labelled radiogroup,
 * so Tab enters at the selected option and the arrow keys move the selection.
 * `compact` hides the text labels below `sm` (they stay as accessible names).
 */
export function SegmentedControl<T extends string>({
  label,
  segments,
  value,
  onChange,
  compact = false,
}: {
  label: string
  segments: readonly Segment<T>[]
  value: T
  onChange(value: T): void
  compact?: boolean
}) {
  const name = useId()
  // A click before hydration would flip the native radio without React noticing.
  const hydrated = useHydrated()
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex shrink-0 rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-900">
      {segments.map((segment) => (
        <label
          key={segment.value}
          className="relative inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 text-[13px] font-medium whitespace-nowrap text-zinc-500 transition-colors duration-150 select-none hover:text-zinc-950 has-checked:bg-white has-checked:text-zinc-950 has-checked:shadow-[0_1px_2px_rgb(0_0_0/0.06)] has-checked:ring-1 has-checked:ring-zinc-950/[0.06] has-focus-visible:outline-2 has-focus-visible:outline-offset-1 has-focus-visible:outline-zinc-900 dark:text-zinc-400 dark:hover:text-white dark:has-checked:bg-zinc-800 dark:has-checked:text-white dark:has-checked:ring-white/[0.06] dark:has-focus-visible:outline-zinc-100"
        >
          <input
            type="radio"
            name={name}
            value={segment.value}
            checked={segment.value === value}
            onChange={() => onChange(segment.value)}
            disabled={!hydrated}
            className="absolute inset-0 cursor-pointer appearance-none rounded-md outline-none disabled:cursor-default"
          />
          {segment.icon}
          <span className={compact && segment.icon ? 'sr-only sm:not-sr-only' : undefined}>{segment.label}</span>
        </label>
      ))}
    </div>
  )
}
