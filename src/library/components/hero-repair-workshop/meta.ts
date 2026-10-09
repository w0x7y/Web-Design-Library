import type { ComponentMeta } from '../../types'

export default {
  slug: "hero-repair-workshop",
  name: "Repair workshop service index",
  category: "hero",
  tags: [
    "brutalist",
    "light"
  ],
  description: "A practical repair-workshop hero with oversized type, a service index and a booking strip. Use it for repair shops and hands-on local services.",
  preview: {
    kind: "section"
  },
  fonts: [
    "Space Grotesk:wght@400..700"
  ],
  brief: {
    layout: "A 1280px container with 24px side padding, 40px top and 24px bottom padding. Masthead above a 48px-gap grid, 1.4:1 columns at 1024px. Large two-line heading and 18px paragraph left; three dl service rows right, each with price underneath, 20px padding and 2px top border. Black bottom strip wraps opening times and a white booking link.",
    style: "Space Grotesk on yellow-300 with black ink. Headline is bold, uppercase, 56px with 0.95 line height and -0.05em tracking; 96px at 640px. Square corners, 2px black service rules and no shadows. Service headings are 24px, prices 14px. Black strip uses yellow-300 text and a white square CTA.",
    states: "Booking link fills yellow-100 on hover and has a 2px yellow-300 outline offset 4px on keyboard focus. Services use a dl and the CTA names booking a repair. No animation.",
    responsive: "At 320px the masthead wraps, grid stacks and title is 56px. At 640px title becomes 96px. At 1024px introduction and service index sit in 1.4:1 columns. Bottom strip wraps at every width and keeps 24px gaps."
  },
  addedAt: "2026-10-10"
} satisfies ComponentMeta
