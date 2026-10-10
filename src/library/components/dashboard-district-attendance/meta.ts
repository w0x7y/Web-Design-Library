import type { ComponentMeta } from '../../types'

export default {
  "slug": "dashboard-district-attendance",
  "name": "District attendance dashboard",
  "category": "dashboard",
  "tags": [
    "corporate",
    "light"
  ],
  "description": "A school-district attendance overview with school-level rates, a daily attendance matrix and reporting coverage. Use it in district administration portals.",
  "preview": {
    "kind": "section"
  },
  "fonts": [],
  "brief": {
    "layout": "1280px inner container, 16px horizontal and 40px vertical padding. Wrapping header then two panels after 28px with 20px gaps. Panels have 20px padding, a school ledger with 20px row gaps, 6px-high percentage bars, and a five-column daily matrix with 8px gaps. Each matrix column holds a weekday, eight decorative dots and a written percentage.",
    "style": "Default sans stack, blue-50 canvas, blue-950 text and white 12px-radius panels with 1px blue-200 borders. Title and district metric are 30px semibold, panel titles 18px, school rows 14px, supporting copy 12px blue-800. Daily cells have 8px radii and blue-50 fill; dots are 8px blue-800/blue-200. Amber-50 follow-up note has a 4px amber-700 left border. No shadows.",
    "states": "Native reporting-coverage disclosure expands its explanation. Summary underlines on hover and uses a 2px current-color keyboard outline offset 2px. Percentages are visible text, decorative bars and dots are aria-hidden. No animation.",
    "responsive": "At 640px section horizontal padding grows to 32px and panel padding to 24px. At 1024px panels split 1.4fr/1fr. Below they stack, school lines wrap, and the five day columns fit within 320px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
