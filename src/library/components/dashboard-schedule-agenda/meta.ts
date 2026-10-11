import type { ComponentMeta } from '../../types'

export default {
  slug: "dashboard-schedule-agenda",
  name: "Dashboard — Calendar beside daily agenda",
  category: "dashboard",
  tags: [
    "sidebar",
    "list",
    "numbers"
  ],
  description: "A compact month calendar anchors a larger chronological day agenda. Use when upcoming events are the primary dashboard task.",
  preview: {
    kind: "section"
  },
  wireframe: `┌──────────────────────────────────────────────────────────────┐
│Schedule overview                              [Add event]    │
│October 2026              Sunday, 11 October                  │
│M T W T F S S             09:00  Event title                  │
│      1 2 3 4                    Agenda summary [View event]  │
│5 6 7 8 9 10 [11]         11:30  Session title                │
│12 13 14 15 16 17 18             Session summary              │
│19 20 21 22 23 24 25      14:00  Review title                 │
│26 27 28 29 30 31                Review summary               │
│[Open calendar]                                               │
└──────────────────────────────────────────────────────────────┘`,
  brief: {
    layout: "White section with a 1152px max-w-6xl container, 24px side gutters and 64px vertical padding, increasing to 96px at 640px. An 18rem calendar rail and flexible agenda form a lg grid with 40px gaps. The calendar uses p-6, seven equal day columns and 32px-high cells. Agenda rows are 80px/1fr from sm with 12px gaps and 24px vertical padding.",
    hierarchy: "The h1 leads to selected date and time-ordered event titles. Calendar selection is written in a visible note and outlined in its day cell. Event titles allow 5 words, summaries 10 and the h1 5.",
    states: "The selected day is a static illustration with visible selection text. Event actions and calendar navigation have 2px keyboard-focus outlines. Date selection, calendar navigation and event creation require host application integration.",
    responsive: "Below 1024px the calendar sits above the agenda without a fixed rail width. Event times stack over their descriptions below 640px. Day cells remain seven equal columns at 320px.",
    usage: "Use when a dashboard centers on a day schedule. Choose dashboard-activity-feed for unordered recent events. Variations: add a week label, show appointment duration, or replace the calendar with a date range."
  },
  addedAt: "2026-10-11"
} satisfies ComponentMeta
