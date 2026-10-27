import type { ComponentMeta } from '../../types'

export default {
  slug: 'login-qr-code',
  name: 'Login — QR code with phone steps',
  category: 'login',
  tags: ['split', 'list', 'media'],
  description: 'A bordered card pairs numbered phone steps with a QR code placeholder and keeps an email fallback in its footer. Use when a signed-in mobile app can open a desktop or TV session by scanning.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│   ┌──────────────────────────────────────────────────────┐   │
│   │ Sign in with your phone              ┌────────────┐  │   │
│   │ Lede                                 │            │  │   │
│   │ (1) Open the app on your phone       │  QR code   │  │   │
│   │ (2) Tap Menu, then Scan sign-in code │            │  │   │
│   │ (3) Point the camera at the code     └────────────┘  │   │
│   │ [ ] Keep me signed in                 Refresh note   │   │
│   ├──────────────────────────────────────────────────────┤   │
│   │ Fallback question       [Sign in with email instead] │   │
│   └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'A neutral-50 section with a 1152px max-w-6xl container, 24px gutters and 64px vertical padding, 96px from 640px. A centered white max-w-4xl 896px card has a 1px neutral-200 border and 8px radius. Its body is padded 24px, 40px from 640px. From 768px the body is a minmax(0,1fr)/auto grid with a 64px gap and vertically centered columns: steps on the left, a 192px square QR tile on the right. Steps sit 16px apart, each a 32px number circle with a 16px gap. A top-ruled footer row, padded 20px top and bottom and 24px at the sides (40px from 640px), puts the fallback question on the left and the secondary action on the right.',
    hierarchy: 'A 30px semibold h1 and an 18px lede lead into the three numbered steps, then the keep-signed-in checkbox. The QR tile is the visual anchor, with a 14px caption that states how often the code refreshes. The footer question and Sign in with email instead come last as the fallback. Slots: heading up to 6 words, lede up to 18, each step up to 9 words naming the in-app labels exactly, caption up to 8 words.',
    states: 'The QR tile is a labelled image placeholder: replace it with the real code and refresh it on the interval the caption states. Show scanned, expired and loading states as a short message inside the same 192px tile. The checkbox uses a neutral-900 accent and can be checked and unchecked. The 44px outlined fallback fills neutral-50 on hover with a 150ms color transition. Every control shows a 2px neutral-900 keyboard-focus outline offset 2px. In forced-colors mode the corner squares keep a CanvasText fill.',
    responsive: 'Below 768px the card is a single column: heading, steps and checkbox first, then the QR tile and caption centered 40px below. From 640px the card padding grows to 40px and the heading to 36px. The footer wraps, so the fallback action drops under its question when the row runs out of space. At 320px the 192px tile still fits inside the card padding.',
    usage: 'Use when people already have a signed-in mobile app and need a quick way into a desktop, kiosk or TV session without typing a password. Pick login-device-approval when the phone approves a pushed request instead of scanning, or login-magic-link for email-only entry. Variations: replace the checkbox with a device-name note, add an app download link for people without the app, or place the steps under the code in a narrow centered card.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
