import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-billing-summary',
  name: 'Billing and plan summary',
  category: 'settings',
  tags: ['minimal', 'light'],
  description:
    'A billing settings panel with current usage, payment method and invoice access. Use it for a subscription account page.',
  preview: {
    kind: 'section',
  },
  fonts: [],
  brief: {
    layout:
      'A centred 768px billing page with 40px vertical padding, a wrapping header, a renewal badge and 20px between cards. Current-plan and payment cards have 24px padding; the first holds a wrapping plan/price row, a 12px-high native seat meter, and an underlined Compare plans link. A ruled footer 24px below holds the next invoice and an invoice-history link.',
    style:
      'White with zinc-200 hairlines, zinc-100 payment panel and 12px card radii. 30px title, 24px plan name, tabular pricing and a native labelled usage meter. Body copy is 14px zinc-600; metadata is 12px. The payment update button has a zinc-500 border, white fill, 8px radius and 12px semibold label.',
    states:
      'Native controls retain their browser behavior. Links show a 2px current-color focus outline offset by 2px; the payment button uses stone-950 and a pointer cursor. There is no automatic motion.',
    responsive:
      'Cards stack below 768px and become 1.3fr/1fr above it. Header and footer wrap without overflow; 24px outer padding rises to 48px at 640px.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
