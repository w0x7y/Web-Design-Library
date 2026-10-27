import type { ComponentMeta } from '../../types'

export default {
  slug: 'dashboard-service-status',
  name: 'Dashboard — Service status with uptime bars',
  category: 'dashboard',
  tags: ['asymmetric', 'list', 'numbers'],
  description: 'An overall status banner sits above a service list with 30-day uptime bars and a rail of recent incidents. Use it for a status page or an operations view that reports current health and recent history.',
  preview: { kind: 'section' },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│System status                          [Subscribe to updates] │
│┌────────────────────────────────────────────────────────────┐│
││(!) Overall status headline | Impact summary   Updated time ││
│└────────────────────────────────────────────────────────────┘│
│Services   | Operational : Degraded . Outage                  │
│┌──────────────────────────────────────┐  Recent incidents    │
││Service name          (v) Operational │  ──────────────────  │
││||||||||||||:|||||||||||||||||||||||| │  Date        Status  │
││30 days ago     99.98% uptime   Today │  Incident title      │
│├──────────────────────────────────────┤  Update summary      │
││Service name            (!) Degraded  │  ──────────────────  │
││|||||||||||||||||||.||||||||||||||||: │  Date        Status  │
││30 days ago     99.71% uptime   Today │  Incident title      │
│├──────────────────────────────────────┤  Update summary      │
││Service name          (v) Operational │  ──────────────────  │
││||||||||||||||||||||||||||||||||||||| │  Date        Status  │
││30 days ago     100% uptime     Today │  Incident title      │
│├──────────────────────────────────────┤  Update summary      │
││Service name          (v) Operational │  ──────────────────  │
││||||||:|||||||||||||||:|||||||||||||| │                      │
││30 days ago     99.92% uptime   Today │  [View all incidents]│
│└──────────────────────────────────────┘                      │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: 'White section with a 1152px max-w-6xl container, 24px side padding (px-6) and 64px vertical padding (py-16), 96px from 640px (sm:py-24). A wrapping header row puts the h1 and a secondary Subscribe action at opposite ends (gap-6). 32px below (mt-8), a dark banner (neutral-900, rounded-lg, p-6, gap-4) holds a 40px icon tile, the overall headline with a one-line summary, and the updated time. 48px below (mt-12), a grid with 48px gaps puts the service list in a flexible column and recent incidents in a 20rem rail from 1024px. The service list is one rounded-lg bordered card divided into rows (p-5, p-6 from 640px). Each row has the name and status badge, a 32px-tall row of 30 equal day bars aligned to the bottom with 2px gaps (4px from 640px), and a 12px axis line with "30 days ago", the uptime percentage and "Today".',
    hierarchy: 'The overall banner reads first, then each service badge, its day bars, and the incidents. Banner headline up to 8 words, summary up to 20 words. Service names up to 3 words. Day bars encode state by height as well as fill: operational days are full height (32px, neutral-300), degraded days 20px (neutral-600) and outage days 8px (neutral-900). A legend beside the Services heading repeats the three shapes with words, and each bar row has a text summary of its 30 days for screen readers. Incidents run newest first, each with a date, a status word (Monitoring, Resolved), a title up to 8 words and a one-sentence update.',
    states: 'Subscribe to updates and View all incidents show a 2px neutral-900 focus-visible outline offset 2px. Subscribe fills neutral-50 on hover and the text link turns neutral-600. A service with a current problem gets a filled dark badge with an alert glyph; operational services get an outlined badge with a check glyph, so the word and glyph carry the state too. In forced-colors mode every bar paints CanvasText and the three heights still separate the states. Day bars are not interactive.',
    responsive: 'Below 1024px the incidents follow the service list in one column. Below 640px the banner stacks icon, text and updated time, service rows use 20px padding and bar gaps narrow to 2px, so 30 bars of about 7px still fit at 320px. A service name and its badge wrap onto two lines when the row runs out of space, and the legend wraps under the Services heading.',
    usage: 'Use for a public or internal status page, or an operations view that reports service health over time. Pick dashboard-tile-board for the current state of many entities without history, and dashboard-activity-feed for a general change log. Variations: show 90 days on wide screens, group services under product areas in collapsible sections, or swap the dark banner for an outlined all-clear message when nothing is affected.',
  },
  addedAt: '2026-10-26',
} satisfies ComponentMeta
