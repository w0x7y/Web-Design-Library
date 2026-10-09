import type { ComponentMeta } from '../../types'

export default {
  slug: 'team-grid',
  name: 'Team grid',
  category: 'team',
  tags: ['corporate', 'light', 'has-image'],
  description:
    'A corporate leadership grid for a battery-storage scheduling company. A headline, an intro and an open-roles link sit above two groups (Executive team and Grid operations) separated by hairlines. Each group has a label column and four greyscale portraits that turn to colour on hover. Each card shows a name, a role and a one-line credential, and the whole card is one link. Use it for team, about or leadership pages.',
  preview: { kind: 'section' },
  fonts: ['IBM Plex Sans:wght@400..700'],
  brief: {
    layout:
      'A section with a 1152px container, 20px side padding (32px from 640px) and 80px vertical padding (112px from 1024px). Header: the h2 (max 576px) and an intro block (max 576px) stacked 24px apart. The intro block is a paragraph, then a "See 9 open roles" link with a 16px arrow 20px below it. From 1024px the header is a 12-column grid with 32px gaps and bottom-aligned items, with the h2 in columns 1–7 and the intro in columns 9–12. The groups start 56px below (80px from 1024px). There is a 1px rule above the first group and one under each group. Each group has 40px vertical padding (48px from 1024px) and stacks a label block (an h3 and a one-line note, max 320px) 24px above a <ul role="list"> of four people. From 1024px each group is a 12-column grid with 32px gaps, with the label in columns 1–3 and the people in columns 4–12. People grid: 2 columns with a 16px column gap and a 40px row gap; from 768px, 4 columns with a 24px column gap. Each person is an <li> holding a 4:5 photo (6px radius), the name as an h4 link 16px below it, the role, and a credential line 12px below the role, with a 1px hairline and 12px of padding above the credential. The name link has an ::after with inset 0, so the whole card is the hit area.',
    style:
      'White background, IBM Plex Sans throughout. h2: 36px with a 1.1 line height (48px with 1.05 from 640px), semibold, −0.025em tracking, slate-950, balanced. Intro paragraph: 16px/28px slate-600 (18px/32px from 640px). Open-roles link: 15px semibold cyan-800, underlined with a 4px offset in cyan-800 at 30% opacity. Group h3: 16px semibold slate-950. Group note: 14px slate-600. Photos: a slate-100 placeholder fill, object-fit cover and grayscale(100%), so photos with different backdrops read as one set. Name: 15px/24px semibold slate-950. Role: 14px slate-600. Credential: 13px/20px slate-500. Every rule and hairline is 1px slate-200. Portraits have empty alt text because the name is printed under each one.',
    states:
      'Hovering a card (on devices with hover) or focusing its link brings the photo back to full colour, with a 300ms filter transition. Keyboard focus draws a 2px cyan-800 outline, offset 4px, around the whole card, following its 6px radius. The outline comes from :has(:focus-visible) on the <li>. The link itself uses focus-visible:outline-hidden, which removes its own outline but keeps a transparent 2px one for forced-colors mode. Open-roles link: on hover the underline turns solid cyan-800 and the arrow moves 2px right; keyboard focus shows a 2px cyan-800 outline offset 4px.',
    responsive:
      'Below 640px: 20px side padding, a 36px h2, a 16px intro paragraph and people in 2 columns. From 640px: 32px side padding, a 48px h2 and an 18px/32px intro paragraph. From 768px: people in 4 columns with 24px column gaps. From 1024px: the header splits into the h2 in columns 1–7 and the bottom-aligned intro in columns 9–12, each group splits into a 3-column label and 9 columns of people, and the spacing grows: vertical padding from 80px to 112px, group padding from 40px to 48px, and the gap above the groups from 56px to 80px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
