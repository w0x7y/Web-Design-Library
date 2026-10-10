import type { ComponentMeta } from '../../types'

export default {
  slug: 'footer-optics-spectrum',
  name: 'Optical spectrum footer',
  tags: ['corporate', 'glass', 'gradient', 'light', 'has-image'],
  fonts: ['Plus Jakarta Sans:wght@400..700'],
  description:
    'A prescription-lens lab footer with overlapping lens shapes, a warm spectrum gradient and a translucent resource strip. Use it for optical manufacturers and specialist trade suppliers.',
  brief: {
    layout:
      '1280px container with 48px vertical and 24px side padding. Brand, lens-making statement and lab contact accompany a spectrum panel with 32px region gaps. Panel has overlapping decorative 144px circles and a 64px-separated resource strip with catalogue links and a 96px-high cropped sunglasses photograph. A wrapping legal rail closes the footer.',
    style:
      'Plus Jakarta Sans, slate-950 text on orange-50, slate-700 supporting copy. Heading is 36px medium, 1.15 line height and -0.04em tracking. Panel has 32px radius and a 120deg oklab gradient from #fed7aa through #fef3c7 at 45% to #99f6e4. Resource strip has 16px radius, white 60% fill, white 80% border, 16px backdrop blur and 20px padding. No shadows; 24px semibold brand and 14px resources.',
    states:
      'Text links underline on hover-capable devices; the already-underlined lab contact turns teal-800. All links have 2px currentColor outlines offset 4px on keyboard focus, including forced colors. Lens shapes are decorative and ignore pointer events. No motion.',
    responsive:
      'Regions stack below 1024px. Below 640px spectrum padding is 20px and resource links stack above the photo. At 640px padding becomes 32px, resources split into two equal columns and heading grows to 48px. At 1024px regions use 1fr/1.1fr columns, 64px gap and 32px side padding. Legal links wrap at all widths.',
  },
  category: 'footer',
  preview: { kind: 'section' },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
