import type { ComponentMeta } from '../../types'

export default {
  slug: 'settings-vault-lock',
  name: 'Password vault lock rules',
  category: 'settings',
  tags: ['glass', 'gradient', 'dark'],
  description:
    'A frosted password-manager device configuration for Latchkey, with inactivity locking, clipboard expiry, biometric choice and a native reset action. Use it in vault security settings.',
  preview: { kind: 'section' },
  fonts: [],
  brief: {
    layout:
      '1280px container with a 48px line-lock icon, introduction and device rail beside a frosted control form. The form has 24px padding and 24px field gaps, followed by a wrapping reset/save footer.',
    style:
      'Default sans, #e4f5eb type and #b0c9bc metadata on a top-left oklab radial gradient from #345e48 to #111c19 at 65%. 10% white form, 24px blur, 16px radius and 1px #688b76 border. #b9e2c6 button and device rule, no shadows.',
    states:
      'Native fields, checkboxes and radios remain keyboard operable. Every control has a 2px focus outline offset 4px, currentColor for native inputs and the accent colour for primary buttons, including forced colours. Primary buttons fade to 90% opacity on hover-capable devices. Reset actions restore initial form values. No animation. Native disclosure summaries reveal their explanatory paragraphs and close again without JavaScript.',
    responsive:
      'At 640px heading becomes 48px, outer side padding and form padding become 32px. At 1024px introduction and form use 1:1.25 columns with 64px gap. On phones the device context precedes controls; footer wraps.',
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
