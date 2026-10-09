import type { ReactNode } from 'react'
import { VIEWPORTS, type ViewportId } from '~/lib/viewports'
import { SegmentedControl, type Segment } from './SegmentedControl'

const icon = (children: ReactNode) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4 shrink-0"
  >
    {children}
  </svg>
)

const ICONS: Record<ViewportId, ReactNode> = {
  desktop: icon(
    <>
      <rect x="1.5" y="2.5" width="13" height="9" rx="1.25" />
      <path d="M6 14h4M8 11.5V14" />
    </>,
  ),
  tablet: icon(
    <>
      <rect x="3" y="1.5" width="10" height="13" rx="1.5" />
      <path d="M7 12.5h2" />
    </>,
  ),
  mobile: icon(
    <>
      <rect x="4.5" y="1.5" width="7" height="13" rx="1.5" />
      <path d="M7.25 12.5h1.5" />
    </>,
  ),
}

const SEGMENTS: Segment<ViewportId>[] = (Object.keys(VIEWPORTS) as ViewportId[]).map((id) => ({
  value: id,
  label: VIEWPORTS[id].label,
  icon: ICONS[id],
}))

/** Desktop / Tablet / Mobile: the width the preview frame renders at. */
export function ViewportToggle({ value, onChange }: { value: ViewportId; onChange(viewport: ViewportId): void }) {
  return <SegmentedControl label="Preview width" segments={SEGMENTS} value={value} onChange={onChange} compact />
}
