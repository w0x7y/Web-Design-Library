import type { ComponentMeta } from '../../types'

export default {
  slug: 'hero-centered-gradient',
  name: 'Centered gradient hero',
  category: 'hero',
  tags: ['gradient', 'dark'],
  description:
    'A night-sky hero: a teal, rose and amber mesh gradient glowing behind two mountain ridges, a centred headline and an email capture form. Use it for a waitlist, beta sign-up or product launch.',
  preview: { kind: 'section' },
  fonts: ['Funnel Display:wght@300..800', 'Funnel Sans:wght@300..800'],
  brief: {
    layout:
      'Full-width section with a centred 768px column: h1, a one-paragraph pitch, an email form (visually hidden label, email input and submit button inside one pill) and a line of fine print. Decoration sits on an absolutely positioned layer behind the content: four radial colour fields, a fixed 1440 × 520px star field pinned top centre, and two ridge silhouettes along the bottom edge. The bottom padding (224px on desktop) leaves room for the glow and ridges under the text.',
    style:
      'slate-950 background. Mesh: teal-500 at 30% top left, blue-600 at 25% top right, rose-600 at 50% in the bottom right corner, and an amber-300 (80%) to orange-500 (40%) horizon glow centred on the bottom edge; each is a radial gradient that fades to transparent at 70% of its radius. Twenty white stars with radii of 0.8 to 1.4px, at 35 to 80% opacity. The ridges are flat SVG silhouettes, a far one in slate-900 and a near one in slate-950, scaled with xMidYMax slice so they crop instead of stretching. Funnel Display for the headline (medium, 72px, 1.02 line height, -0.035em tracking, balanced lines); Funnel Sans for everything else. Pitch is slate-300 at 20px, fine print slate-400 at 14px. The form pill has a 5% white fill, a 15% white 1px border and a 12px backdrop blur; the submit button is white with slate-950 semibold text.',
    states:
      'The submit button turns amber-100 on hover and shows a 2px white outline offset 2px on keyboard focus. The input draws no focus outline of its own (focus-visible:outline-hidden, which leaves a transparent 2px outline that forced-colors mode makes visible): while it has focus, the whole pill brightens its border to 60% white and its fill to 10% white. The input is required and type="email", so the browser validates it on submit.',
    responsive:
      'Below 640px the form stacks (input above a full-width button) inside a 24px-radius box, the headline drops to 48px and the pitch to 18px, top padding goes from 128px to 96px, and the rose and horizon fields shrink around the same centres (rose 512 × 384px instead of 768 × 576px, horizon 704 × 352px instead of 1216 × 480px) so the glow stays behind the ridges and clear of the text. The ridges are 112px tall on phones and 160px from 640px up.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
