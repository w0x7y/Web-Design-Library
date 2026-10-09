import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-studio-packages',
  name: 'Studio package pricing',
  category: 'pricing',
  tags: ['editorial', 'light'],
  description:
    'A service package menu with three clearly scoped offers and starting prices. Use it for design studios, consultants and freelance practices.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A 1152px maximum-width section with 24px side and 80px vertical padding. Header pairs an eyebrow/h2 and max-width 384px introduction with a 24px gap. Three full-width package articles start 48px below. Each has an index, title/description/scope and price/enquiry region, with 20px grid gaps, 32px vertical padding and a top rule; final article also has a bottom rule. Descriptions are max-width 512px and 12px below titles; scope follows 16px later. Price is 4px below its label; enquiry link follows 12px later.',
    style:
      'Stone-100 canvas and stone-950 default sans text. Eyebrow and indices are 12px orange-800 monospace; eyebrow is uppercase with 0.1em tracking, indices have 8px top padding. Intro uses the default serif stack at 36px with 40px line height. Package titles are 24px medium with 32px line height; descriptions and introduction are 14px stone-600 with 1.625 line height. Scope and price labels are 12px stone-600; prices are 30px medium with 36px line height. Dividers are 1px stone-300. Links are 14px orange-800, underlined with 4px underline offset. No cards, shadows or radii.',
    states:
      'Each enquiry link names its package type. On hover-capable devices orange-800 link text changes to stone-950. Keyboard focus shows a 2px zinc-950 outline offset 2px, including forced-colors mode. No motion or transitions.',
    responsive:
      'Header stacks below 640px; at 640px it becomes a row aligned at the bottom with space-between. Heading changes from 36px/40px line height to 48px/48px line height at 640px. Below 768px each package uses a 32px index column and flexible content, with price placed below the description in column two. At 768px rows use 48px, flexible, 192px columns and prices align right. Deliverable lines wrap naturally.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
