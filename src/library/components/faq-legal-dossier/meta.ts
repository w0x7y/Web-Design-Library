import type { ComponentMeta } from '../../types'

export default {
  slug: 'faq-legal-dossier',
  name: 'Legal operations dossier',
  category: 'faq',
  tags: [
    'corporate',
    'minimal',
    'light'
  ],
  description: 'A restrained legal-ops FAQ with a scope rail and a white document panel. Use it to explain contract migration and review workflows.',
  preview: {
    kind: 'section'
  },
  fonts: [
    'Manrope:wght@400;500;600;700'
  ],
  brief: {
    layout: '1280px wrapper with 24px/64px padding, 40px/96px at 1024px. Wrapping top line, title, then a 256px scope rail beside a white disclosure panel with 24px side padding and zero row gaps.',
    style: 'Manrope, slate-100 page, white document with slate-300 1px border and 8px radius. Slate-950 ink, slate-600 scope text, teal-700 2px rail. 40px/56px title, 17px semibold questions, 15px answers.',
    states: 'Native details disclose each answer independently. The first answer is open. Summaries underline on hover on hover-capable devices, show a 2px current foreground outline offset 4px on keyboard focus, and rotate their decorative plus by 45 degrees when open. No animation or JavaScript.',
    responsive: 'Scope rail sits above the document below 1024px; top line wraps naturally. Title rises to 56px at 640px.'
  },
  addedAt: '2026-10-10'
} satisfies ComponentMeta
