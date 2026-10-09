import type { ComponentMeta } from '../../types'

export default {
  slug: 'toggles-corporate',
  name: 'Toggles — Corporate',
  category: 'toggles',
  tags: ['corporate', 'light'],
  description:
    'A corporate settings card of switches for a payroll app\'s notifications: four rows with a title, a one-line hint and an On/Off switch, one of them locked on by an administrator. Each switch is a native checkbox with role="switch", styled with peer-checked: and no JavaScript, so it works with a keyboard and a screen reader as it is. Use it on settings, preferences and admin pages.',
  preview: { kind: 'element' },
  fonts: ['Public Sans:wght@100..900'],
  brief: {
    layout:
      'A <section> labelled by its h2, 288px wide (416px from 640px), with a 1px border, a 12px radius and overflow hidden. Header: 14px vertical and 16px horizontal padding (20px from 640px) and a bottom rule, with the h2 "Payroll notifications" above a one-line subtitle. Then a <ul role="list"> of four rows divided by 1px rules. Each row is a flex row with 12px vertical and 16px horizontal padding (20px from 640px), a 16px gap and centred items: on the left a <label for> with the title above a hint paragraph; on the right the switch group. The switch group is a relatively positioned flex row: the checkbox (appearance none, opacity 0, absolutely positioned over the whole group with z-index 10, so it receives every click), a 44 × 24px track, a 16px knob positioned 4px from the track\'s top and left, and a 24px-wide state word 10px after the track. The checkbox has aria-describedby pointing at its hint.',
    style:
      'Public Sans throughout, antialiased, slate-900 text on white; border and rules slate-200, header fill slate-50. h2 15px semibold; subtitle and hints 13px slate-600; row titles 14px semibold; the state word 13px medium. Off: a white track with a 2px slate-500 border (4.8:1 against white), a slate-500 knob on the left and "Off" in slate-600. On: the track and its border fill teal-700, the knob turns white and slides 20px right, and a 12px teal-700 check fades in on it (by opacity, so forced-colors mode can\'t reveal it on an off switch), and the word reads "On" in slate-900. State therefore shows in the knob position, the check and the word, not in colour alone. The word is CSS ::after content on an aria-hidden span; the track and knob are aria-hidden too. Locked row: title and hint in slate-500, a 14px lock icon before "Set by your admin", and a checkbox that is checked and disabled; its track is slate-300, its knob white with a slate-500 check and its word slate-500.',
    states:
      'Hover over a switch (devices with hover only): an off track darkens its border to slate-700 and fills slate-100; an on track darkens to teal-800. Keyboard focus on the checkbox draws a 2px teal-700 outline offset 2px around the track. Space toggles the switch, and clicking the title label toggles it too. Colours change over 150ms and the knob slides over 150ms. A disabled checkbox gets pointer-events none, so it never shows hover, and its group shows a not-allowed cursor.',
    responsive:
      'Below 640px: 288px wide with 16px horizontal padding. From 640px: 416px wide with 20px horizontal padding. The rows never reflow, so keep each hint to one short line.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
