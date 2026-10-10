import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-alpine-arrival',
  name: 'Alpine cabin arrival guide',
  category: 'faq',
  tags: [
    'glass',
    'dark',
    'has-image'
  ],
  description: 'A cabin arrival FAQ over a mountain photograph with a frosted dark answer panel. Use it for remote lodging and pre-arrival information.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'DM Sans:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px container, 24px/64px padding, 40px/96px at 1024px. Full-section mountain image behind a 0.8fr intro and 1.2fr answer panel, 64px apart on desktop. Panel has 24px side and 8px vertical padding.',
    style: 'DM Sans, slate-950 canvas and mountain image at 40% opacity. White heading and slate-200 answers. Panel slate-950 at 80%, 12px backdrop blur, 24px radius and white 30% border. White 20% row borders. Heading 40px/56px, questions 17px, answers 15px.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Intro and glass panel stack below 1024px. Image stays full height and width with object-cover. Heading grows to 56px at 640px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
