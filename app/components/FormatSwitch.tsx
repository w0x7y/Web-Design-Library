import { setFormat, useFormat } from '~/lib/format-preference'
import type { Format } from '../../src/library/types'
import { SegmentedControl, type Segment } from './SegmentedControl'

const SEGMENTS: Segment<Format>[] = [
  { value: 'react', label: 'React' },
  { value: 'html', label: 'HTML' },
]

/** React + Tailwind or plain HTML + CSS: what the Code tab shows and what Copy code and Copy for AI produce. */
export function FormatSwitch() {
  return <SegmentedControl label="Code format" segments={SEGMENTS} value={useFormat()} onChange={setFormat} />
}
