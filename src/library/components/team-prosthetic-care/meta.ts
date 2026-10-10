import type { ComponentMeta } from '../../types'

export default {
  slug: "team-prosthetic-care",
  name: "Prosthetic care pathway",
  category: "team",
  tags: ["corporate", "light"],
  description: "A named care pathway for Strideform prosthetics, connecting three appointments to the people patients will meet. Use it for multidisciplinary practices and patient information pages.",
  preview: {"kind": "section"},
  fonts: [],
  brief: {
    layout: "Full-width section with a 1280px container, 24px side and 64px vertical padding. Header above three ordered care rows, each with a 48px numbered circle, stage label, specialist name and role, and explanatory paragraph. A contact link and reassurance line close the section.",
    style: "Default sans stack, white background, slate-950 names, slate-600 body, blue-800 labels and blue-200 hairlines. Heading 36px semibold, 56px at 640px, names 24px, body 15px with 1.8 line height. Contact button is blue-900, white 14px semibold text, 8px radius and 12 by 20px padding.",
    states: "Contact link changes to blue-800 on hover and shows a 2px blue-900 keyboard outline offset 4px. Ordered list keeps its semantics with role=list. No motion.",
    responsive: "At 640px side padding is 32px and heading 56px. At 768px each care row becomes a 48px number column plus 1:1.2 text columns with 32px gaps. At 1024px header becomes two columns and vertical padding grows to 96px. Rows stack on phones and the footer wraps at 320px.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
