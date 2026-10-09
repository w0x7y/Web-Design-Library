import type { ComponentMeta } from '../../types'

export default {
  slug: 'stat-cards',
  name: 'Stat cards',
  category: 'stat-card',
  tags: ['dark', 'minimal'],
  description:
    'Three dark KPI cards, joined by hairlines in one panel, for a week of a bike-share network: rides, revenue and bikes available. Each card has a large tabular figure, a coloured change against the prior week and an inline SVG sparkline with a soft area fill, and each card is one link to its report. The cards stack with the sparkline on the right on phones and sit side by side from 768px. Use them at the top of a dashboard or report.',
  preview: { kind: 'element' },
  fonts: ['Chivo:wght@400..700'],
  brief: {
    layout:
      'A <section> labelled by its h2. It is one dark panel with a 16px radius and overflow hidden, 288px wide (640px from 768px). Header row: the h2 "Last 7 days" on the left and the date range (two <time> elements) on the right, baseline-aligned, with 14px vertical and 20px horizontal padding and a 1px rule below. Then a <ul role="list"> of three cards with 1px rules between them. Below 768px, each card is a flex row with 14px vertical and 20px horizontal padding, a 16px gap and bottom-aligned items. On the left are the label (an h3 link), the value 4px below it and the change line 6px below that; on the right is an 80 × 40px sparkline. From 768px the list is a three-column grid with vertical rules between the columns. Each card then stacks the label, value, change line and a full-width 40px sparkline, with 20px padding and 20px between the figures and the sparkline. The label link has an ::after inset 4px with a 12px radius, so the whole card is the hit area. A 16px up-right arrow sits 16px from each card\'s top-right corner.',
    style:
      'Panel neutral-950, rules neutral-800, Chivo throughout. h2: 14px medium neutral-50. Date range: 13px neutral-400. Labels: 14px neutral-400. Values: 24px/32px (32px/40px from 768px), medium weight, −0.025em tracking, tabular figures, neutral-50. Change line: 12px with tabular figures and a 12px diagonal arrow, emerald-400 when the metric rose and rose-400 when it fell. After the number, 8px away, "vs prior week" is set in neutral-400. A visually hidden "Up" or "Down" comes before each number for screen readers. Sparklines use a 120 × 40 viewBox stretched with preserveAspectRatio="none". Each has a 1.5px stroke in the trend colour (round caps, vector-effect: non-scaling-stroke) over the same curve closed to the bottom and filled with the trend colour at 12% opacity. The sparklines are aria-hidden because the change line states the trend in text.',
    states:
      'On hover (devices with hover only), the card background turns neutral-900 over 150ms and the neutral-400 corner arrow fades in from 0 opacity. When the label link has keyboard focus, the arrow appears and the stretched ::after shows a 2px neutral-50 outline inside the card, following its 12px radius. The link itself uses focus-visible:outline-hidden, which removes its own outline but keeps a transparent 2px one for forced-colors mode.',
    responsive:
      'Below 768px: the panel is 288px wide, the cards are stacked with horizontal rules between them, the figures are on the left with an 80px sparkline on the right, and values are 24px. From 768px: the panel is 640px wide with three equal columns and vertical rules, each sparkline spans the card under the figures, values are 32px and card padding is 20px on every side.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
