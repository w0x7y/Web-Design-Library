import type { ComponentMeta } from '../../types'

export default {
  slug: 'badges-playful',
  name: 'Badges — Playful',
  category: 'badges',
  tags: ['playful'],
  description:
    'A playful badge set for a pet-adoption site: chunky ink-outlined status stickers (Available, Reserved, a tilted Adopted! and Vet care), each with an icon, soft white trait tags, a New arrivals counter, a yellow starburst sticker, an "Open for visits" pill with a live dot and a removable filter chip. Use it on listing cards, profiles and filter bars of friendly consumer apps.',
  preview: { kind: 'element' },
  fonts: ['Fredoka:wght@300..700'],
  brief: {
    layout:
      'A cream panel 288px wide (576px from 640px) with 20px padding (28px from 640px), holding three <ul role="list"> rows 20px apart (24px from 640px). Each row is a wrapping flex row. Row 1, status stickers, 8px gaps: pills 32px tall with 10px left and 14px right padding, a 16px icon then the label, 6px apart. Row 2, trait tags, 6px gaps: pills 28px tall with 8px left and 10px right padding, a 14px icon 4px from the label. Row 3, 10px gaps, items centred: a 32px dark counter pill (14px left and 4px right padding) whose number sits in a 24px pink circle 8px after the label; a 56px starburst sticker; a 28px pill with a 10px live dot 8px before its label; and a 32px filter chip whose label and 24px round remove button sit 4px apart.',
    style:
      'Fredoka throughout, antialiased, indigo-950 ink on an orange-50 panel with a 28px radius. Status stickers: a 2px indigo-950 border and 15px semibold labels, filled lime-300 (Available, heart icon), amber-300 (Reserved, clock), pink-300 (Adopted!, house, rotated −3deg) and sky-300 (Vet care, medical cross). Trait tags: white with a 2px indigo-950 ring at 15%, 13px medium labels and violet-600 line icons (smiley, cat, check, Zz). Counter: indigo-950 fill with a white 14px semibold label; the number is 13px bold indigo-950 with tabular figures on pink-300. Starburst: a 12-point SVG star filled yellow-300 with a 2px indigo-950 stroke and round joins, rotated 12deg, with "NEW" in 12px bold uppercase at 0.025em tracking. Live pill: green-100 fill and green-900 14px medium text, with a green-600 dot over a green-500 ring at 75% opacity. Filter chip: violet-200 fill, a 2px indigo-950 border, 14px semibold "Dogs" and a 14px × icon. Every status has a word and an icon, so meaning never rests on colour alone; all icons and the dot are aria-hidden.',
    states:
      'Only the chip\'s remove button is interactive (aria-label "Remove filter: Dogs"). On hover (devices with hover only) and on keyboard focus it fills indigo-950 with a white ×, over 150ms. The button drops its own outline with focus-visible:outline-hidden (a transparent outline remains for forced-colors mode), and while it has keyboard focus the whole chip shows a 2px indigo-950 outline offset 2px (:has(:focus-visible)). The live dot\'s ring pings (scales to 2× and fades out, 1s, repeating) only when the user has not asked for reduced motion. The badges themselves have no hover state.',
    responsive:
      'Below 640px: 288px wide with 20px padding; the stickers wrap two per line, the trait tags two per line and the third row onto two lines. From 640px: 576px wide with 28px padding and 24px between rows, and each row fits on one line. Badge sizes never change.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
