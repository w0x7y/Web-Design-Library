import type { ComponentMeta } from '../../types'

export default {
  slug: "team-fencing-club",
  name: "Fencing club coaching lanes",
  category: "team",
  tags: ["minimal", "dark"],
  description: "Weapon-grouped coaching lanes for Pointworks fencing club, with four coaches and their regular sessions. Use it for sports clubs where specialist roles and lesson groups help visitors choose.",
  preview: {"kind": "section"},
  fonts: ["Archivo:wght@400..600"],
  brief: {
    layout: "1280px inner container with 24px side and 64px vertical padding. A split introduction, thin piste line and two weapon bands. Each band contains a 40px weapon title, short coaching note and two named coaches with left rules. Venue and first-lesson link sit in a wrapping footer.",
    style: "Slate-950 background, slate-100 headings, slate-300 descriptions, sky-200 accents, slate-600 separators. Archivo throughout. Heading 36px medium growing to 56px at 640px, weapon titles 40px, names 20px, roles 14px and session lines 12px. No cards, rounded corners or shadows.",
    states: "First-lesson link is underlined, turns white on hover and shows a 2px currentColor keyboard outline offset 4px. Every coaching group is a semantic list with role=list; decorative piste line is aria-hidden. No animation.",
    responsive: "At 640px side padding becomes 32px, heading becomes 56px and each coach list uses two columns. At 768px weapon bands use 1:2 columns with 32px gap. At 1024px introduction uses 1.2:1 columns and vertical padding is 96px. All bands and coaches stack at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
