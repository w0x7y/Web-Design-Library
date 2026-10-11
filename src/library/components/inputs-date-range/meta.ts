import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-date-range",
  name: "Inputs — Date range with a shared note",
  category: "inputs",
  tags: ["split", "form", "compact"],
  description: "A bordered date-range fieldset contains labelled Start and End inputs with a shared timezone note. Use for a bounded reporting or booking period.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│ Date range                                           │
│ Start date                     End date              │
│ [2026-10-11]                   [2026-10-18]          │
│ Dates follow your local timezone.                    │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px bordered fieldset grows to 448px at sm with 16px padding and a 14px legend. Two labelled 40px date fields use a 12px grid gap. Each label sits 6px above its field, and a shared 12px note follows by 12px.",
    hierarchy: "Read Date range, Start date, End date and the timezone note. Native date fields provide their browser calendar interface. Labels use 2 words and the shared hint under 8 words; both fields reference it with aria-describedby.",
    states: "Each date field wrapper shows a 2px offset outline whenever focus is inside the native date segments or calendar control. Dates are initially one week apart. Native calendar interaction remains available; range validation and any disabled dates belong to the surrounding form.",
    responsive: "Below 640px the date inputs stack inside the 288px fieldset. From 640px the fieldset is 448px wide and the inputs occupy two equal columns. Native date controls retain min-w-0 to fit their column.",
    usage: "Use for a start and end date that should be understood together. Choose separate fields when each date has independent guidance. Variations: clear the initial dates, add minimum dates, or replace the note with a short inclusive-range explanation.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
