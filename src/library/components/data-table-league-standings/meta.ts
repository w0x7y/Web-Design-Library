import type { ComponentMeta } from '../../types'

export default {
  slug: "data-table-league-standings",
  name: "Volleyball league standings",
  category: "data-table",
  tags: ["playful", "dark"],
  description: "A playful volleyball league table for Rallyrack with ranked clubs, win-loss records, points and recent form. Use it for amateur league standings or tournament results.",
  preview: { kind: 'section' },
  fonts: ["Bricolage Grotesque:wght@400;500;600;700"],
  brief: {
    layout: "1280px section with an asymmetric header: title and schedule link left, a 224px round tile right from 768px. A compact real table remains a table on phones; five club rows carry rank, club, win-loss record and points, with a recent-form column on desktop.",
    style: "Bricolage Grotesque, blue-950 background, yellow-50 text, blue-200 notes, blue-700 row rules and yellow-300 round tile with 32px corners. Round number is 80px, points 24px, ranks 20px then 30px at 768px. Form shows labelled W/L squares with 6px corners, not color alone.",
    states: "Schedule link removes its underline on hover and has a 2px currentColor keyboard outline offset 2px. The standings are static, recent-form letters include accessible Win/Loss labels, and the caption explains abbreviations. No animation.",
    responsive: "Below 768px the round tile stacks under the heading and recent-form column is hidden to keep the four essential columns inside 320px. Cell horizontal padding is 8px on phones, 16px from 768px. Section horizontal padding is 20px then 40px.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
