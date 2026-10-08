import type { Format } from '../../src/library/types'
import { SegmentedControl, type Segment } from './SegmentedControl'

const SEGMENTS: Segment<Format>[] = [
  { value: 'react', label: 'React' },
  { value: 'html', label: 'HTML' },
]

/** React + Tailwind or plain HTML + CSS: what the Code tab shows (and, later, what gets copied). */
export function FormatSwitch({ value, onChange }: { value: Format; onChange(format: Format): void }) {
  return <SegmentedControl label="Code format" segments={SEGMENTS} value={value} onChange={onChange} />
}
