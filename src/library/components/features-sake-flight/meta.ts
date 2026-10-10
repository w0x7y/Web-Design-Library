import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-sake-flight',
  name: 'Sake brewery tasting flight',
  category: 'features',
  tags: [
    'editorial',
    'light'
  ],
  description: 'A sake brewery section with four arch-shaped tasting cards and notes on guided visits. Use it to introduce the house styles before a tasting booking.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Newsreader:wght@400..700'
  ],
  brief: {
    layout: 'A 1280px container with 24px horizontal and 64px vertical padding. A 44px serif headline precedes four 256px-tall tasting cards, 12px apart. A bottom rule separates two visit notes in a 1.5:1 split at 768px.',
    style: 'Newsreader serif on orange-50 with orange-950 ink. Samples are stone-200, lime-900, amber-300 and red-950, each with contrasting text and 96px top corners. Sake names are 30px; feature titles 24px; body copy 18px. No shadows.',
    states: 'The brewery link underlines on hover and shows a 2px orange-950 outline offset 4px on keyboard focus. Each card has a visible sake style and tasting note; colour carries no essential meaning by itself. No animation.',
    responsive: 'Tasting cards stack below 640px, form two columns at 640px and four at 1024px. Main title grows from 44px to 64px at 640px. Notes form two columns at 768px. Container padding becomes 96px vertical and 32px horizontal at 1024px.'
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
