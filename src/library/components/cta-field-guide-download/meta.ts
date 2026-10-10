import type { ComponentMeta } from '../../types'

export default {
  slug: 'cta-field-guide-download',
  name: 'Field guide download call to action',
  category: 'cta',
  tags: ['minimal', 'light'],
  description:
    'A resource invitation with a designed book cover, contents preview and download link. Use it to promote a practical guide or report.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      'A centered 1024px container with 24px side and 64px vertical padding, centered grid items and a 40px gap. A decorative text-only book cover is 224px wide with a 3:4 aspect ratio and 24px padding. Its publisher, title and edition are spaced vertically with at least 16px gaps; a 1px rule sits 20px above the edition. The content has an eyebrow, two-line heading, 576px-wide introduction, three topic pills, download link and format note.',
    style:
      'Slate-50 canvas and slate-950 system sans text. Cover and download link are blue-700 with white text. Cover has a two-part shadow: 0 10px 15px -3px and 0 4px 6px -4px, both black at 10%. Its title is 28px semibold with 1.25 leading; edition and publisher are 12px. Main heading is 36px semibold with 1.25 leading and -0.025em tracking. Topics use 12px slate-600 with 1px slate-300 borders, full radii and 8px by 12px padding. Download link has an 8px radius, 48px minimum height, 20px side padding and 14px semibold type. Format note is 12px slate-500.',
    states:
      'Download link fills blue-800 on hover on devices that support hover. Keyboard focus shows a 2px zinc-950 outline offset 2px. The link references its PDF/no-email note with aria-describedby. The cover is aria-hidden because the invitation communicates the resource. No transitions or animations.',
    responsive:
      'Below 768px the cover and details stack with the cover centered. At 768px the grid uses a 224px cover column and a flexible text column with a 64px gap. Topics wrap with 8px gaps at every width. Heading stays 36px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
