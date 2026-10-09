import type { ComponentMeta } from '../../types'

export default {
  slug: 'pricing-three-tier',
  name: 'Three-tier pricing',
  category: 'pricing',
  tags: ['corporate', 'light'],
  description:
    'Corporate three-plan pricing for an uptime-monitoring product: a monthly/yearly switch built from radio buttons that swaps prices with CSS alone, a dark green middle plan raised above the other two, and check-mark feature lists. Use it for SaaS pricing pages.',
  preview: { kind: 'section' },
  fonts: ['Onest:wght@100..900'],
  brief: {
    layout:
      'zinc-50 section with a 1152px container (24px side padding, 32px from 1024px). Centred header, 672px wide: h2 and a paragraph 20px below. 40px below that, a centred pill switch: a <fieldset> with a visually hidden legend and two <label>s wrapping visually hidden radio inputs, Monthly (checked) and Yearly with a "2 months free" badge. The plans follow 56px below (80px from 1024px): Hobby, Team and Business. Each plan is a flex column: h3 (Team adds a "Most popular" pill to the right), a one-line description, the price row 32px down (amount and "per month" on one baseline), a billing note, a full-width 44px call to action 32px down, then a feature list 32px down under a rule with 32px top padding. The Team and Business lists open with "Everything in Hobby, plus:" and "Everything in Team, plus:". A centred fine-print line with a "Talk to us" link ends the section, 56px under the plans (80px from 1024px). Yearly prices are in the markup: the section is a Tailwind group, and price spans use group-has-[#pricing-three-tier-yearly:checked]:hidden and hidden group-has-[…]:inline.',
    style:
      'Onest throughout, zinc-950 text. h2: semibold, -0.03em, 1.05 line height, balanced. Intro: 18px zinc-600. Switch: white pill, 1px zinc-200 ring, 4px padding and 4px gap; each option is 36px tall with 16px side padding and 14px medium zinc-600 text; the checked option fills zinc-950 with white text; the badge is an emerald-100 pill with 12px semibold emerald-800 text. Hobby and Business: white, 16px radius, 1px zinc-200 ring, 32px padding. Team: emerald-950 with white text and emerald-100 secondary text, an emerald-300 "Most popular" pill with 12px semibold emerald-950 text, and a soft green-black shadow (0 32px 64px -24px rgb(2 44 34 / 0.6)). Prices: 48px semibold, -0.04em, tabular figures; "per month" and billing notes 14px zinc-600. Buttons: 8px radius, 14px semibold; Hobby and Business are white with an inset 1px zinc-300 ring, Team is solid emerald-300 with emerald-950 text. Feature lists: 14px zinc-700 (emerald-50 on Team), items 12px apart, each with a 16px check drawn in a 2px emerald-600 stroke (emerald-300 on Team). Rules: zinc-200, white/15 on Team.',
    states:
      'Switch options darken to zinc-950 text on hover; the checked option stays white on zinc-950. A keyboard-focused radio draws a 2px zinc-950 outline offset 2px around its label, and the arrow keys move between options. Choosing Yearly swaps Team to $25 with "$300 billed once a year" and Business to $75 with "$900 billed once a year", without JavaScript. Outlined buttons turn zinc-50 with a zinc-400 ring on hover; Team\'s button lightens to emerald-200. Buttons show a 2px outline offset 2px on focus: zinc-950, or emerald-300 on Team. The fine-print link has a 30% zinc-950 underline that turns solid on hover and a 2px zinc-950 outline offset 2px on focus.',
    responsive:
      'Below 1024px the plans stack in one centred column up to 448px wide, 24px apart, each with its own outer ring and full 16px radius. From 1024px they form one strip of three equal columns with no gap: Hobby and Business lose their inner corner radii and their rings move inside, and Team extends 24px above and below the strip (-24px vertical margin, 56px vertical padding). Plan descriptions get a 40px minimum height at that width so the prices line up. h2: 36px, 48px from 640px. Vertical padding: 80px, 96px from 640px, 112px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
