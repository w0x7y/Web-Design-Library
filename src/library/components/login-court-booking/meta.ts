import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-court-booking',
  name: "Padel member pass",
  category: 'login',
  tags: ["playful","light"],
  description: "A Rallymint padel login with an illustrated court and a lemon-colored member pass. Use it for court bookings, club leagues and doubles scheduling.",
  preview: { kind: 'section' },
  fonts: ["Bricolage Grotesque:wght@400..700"],
  brief: {
    layout: "A 1152px grid inside a section with 48px vertical/24px horizontal padding. Club identity, heading and a framed court illustration sit before a member-pass form. Grid gap is 32px. Pass has 24px padding, ruled header, 24px heading/form spacing, 20px field gaps and 48px pill-shaped controls.",
    style: "Bricolage Grotesque with emerald-950 text, emerald-100 section, emerald-800 court and yellow-100 pass. Court/pass have 2px emerald-950 outlines and 32px radii. Heading is 48px semibold with 1.05 leading. White inputs have 1px emerald-800 borders and full radii. Submit is emerald-950 with yellow-100 text. The court SVG has pale boundary lines and a lemon ball; no shadows.",
    states: "Submit becomes emerald-800 on hover. Inputs and recovery link show 2px current-color outlines offset 4px, including forced-colors mode; submit uses emerald-800 for contrast on yellow-100. Email references the invitation hint. Required fields have native autocomplete. Court artwork is decorative, described in its figcaption. No animation.",
    responsive: "At 640px, section horizontal padding is 40px, heading 60px, court illustration 208px tall instead of 160px, and pass padding 32px. At 1024px club/pass become 1.2:1 columns with 48px gap. Below this the club illustration precedes the login pass, all controls reflow to 320px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
