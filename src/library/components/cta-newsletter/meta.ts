import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-newsletter',
  name: 'Newsletter signup',
  category: 'cta',
  tags: ['minimal', 'light'],
  description:
    'A minimal sign-up for a fortnightly newsletter: a large Newsreader serif headline with an italic close, a rule, then the pitch and an underline-style email field with an inline Subscribe button on the left, and an index of the three latest letters on the right. Use it for a blog, publication or creator newsletter.',
  preview: { kind: 'section' },
  fonts: ['Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800'],
  brief: {
    layout:
      '1152px container with 24px side padding (32px from 1024px). The h2 (max 896px) sits on top. Below it, 48px down (64px from 1024px), comes a body with a 1px top rule and 40px top padding (48px from 1024px). The body stacks its two parts 64px apart; from 1024px it is a 12-column grid with 32px gaps, with the pitch in columns 1–5 and the recent letters in columns 7–12. Pitch (max 576px): a paragraph, then a form 40px below with a visible "Your email" label and, 4px under it, a flex row holding the email input (48px tall, filling the row) and a Subscribe button with a 20px arrow (16px gap), sharing one bottom border; a hint line follows 12px below. Recent letters: an italic h3, then an <ol> 8px below of three links divided by hairlines. Each link has 16px top and bottom padding and holds the title and an "Issue 58, 27 Sep" line (the date in a <time>), stacked 4px apart. A "Read all 58 letters" link sits 16px below the list.',
    style:
      'White background, stone-900 text, Newsreader throughout with optical sizing. h2: regular weight, −0.025em tracking, 1.02 line height, balanced, with "every other Sunday." in italic. Rule above the body: 1px stone-900. Paragraph: 18px stone-600, 1.625 line height. Label: 15px medium. Field: a 1px stone-300 bottom border; the input is 18px with a stone-500 placeholder; Subscribe is 18px medium. Hint and issue lines: 15px stone-500. h3: 18px italic. Letter titles: 22px, 1.375 line height, −0.01em tracking, with a 1px underline offset 4px that is transparent at rest. Dividers: 1px stone-200. Archive link: 15px medium with a stone-300 underline offset 4px.',
    states:
      'While the input has keyboard focus, the shared bottom border turns stone-900 and a 1px currentColor shadow under it doubles it to 2px. The input\'s own outline is removed with outline-hidden, which keeps a transparent 2px outline for forced-colors mode. On hover the Subscribe arrow moves 4px right; on keyboard focus the button shows a 2px stone-900 outline offset 4px. Letter links: on hover the title\'s underline turns stone-900 (150ms), and on focus a 2px stone-900 outline offset 2px surrounds the row. Archive link: the underline turns stone-900 on hover, and focus shows an outline offset 4px. Hover rules apply only on devices that support hover.',
    responsive:
      'h2: 44px, 60px from 640px, 72px from 1024px. Paragraph: 18px, 20px from 640px. Vertical padding: 80px, 96px from 640px, 128px from 1024px. Letter rows: the issue line sits under the title below 640px; from 640px they share one baseline-aligned row, title left and issue right, 24px apart. Body: stacked (pitch, then letters) below 1024px, a 5 + 6 column split from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
