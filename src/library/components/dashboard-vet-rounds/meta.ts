import type { ComponentMeta } from '../../types'

export default {
  "slug": "dashboard-vet-rounds",
  "name": "Veterinary rounds dashboard",
  "category": "dashboard",
  "tags": [
    "minimal",
    "corporate",
    "light",
    "has-image"
  ],
  "description": "A veterinary-practice dashboard with a photographed discharge patient, a native ward filter and afternoon appointments. Use it for clinic reception and daily rounds.",
  "preview": {
    "kind": "section"
  },
  "fonts": [],
  "brief": {
    "layout": "1280px inner width with 16px horizontal and 40px vertical padding. Wrapping header then a 24px-gapped body after 28px. Featured patient card has 20px padding and a 176px-high photograph beside discharge copy. Below is a ward roster with a visible native discharge filter and three 16px-padded patient rows. A 320px appointment rail has 20px padding, three ruled time entries and a collection disclosure.",
    "style": "Default sans, cyan-50 canvas, cyan-950 ink and cyan-800 supporting text. White cards with 1px cyan-200 borders, 16px outer radii and 12px image/roster radii. Heading is 30px semibold, patient title 24px, section headings 18px, body 14px and labels 12px. Green-50 discharge chip has green-700 border and green-900 text. Appointment markers are 2px cyan-700 vertical rules. No shadows.",
    "states": "A labelled native checkbox filters the ward list to data-discharge=true rows using CSS :has(:checked); unchecked shows all patients. Its label gains cyan-100 on hover and input has a 2px current-color focus outline offset 2px. Native collection details reveals the checklist; summary underlines on hover with the same focus treatment. Every status is written in text. No animation.",
    "responsive": "At 640px outer horizontal padding grows to 32px and the featured card becomes a 144px photo column plus flexible text; its image stretches to the card content height. At 1024px main content and the 320px appointment rail sit side by side. Below they stack, the photo is 176px high, filter header wraps and patient names fit at 320px."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
