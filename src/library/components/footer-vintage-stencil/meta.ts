import type { ComponentMeta } from '../../types'

export default {
  slug: "footer-vintage-stencil",
  name: "Vintage clothing stencil footer",
  category: "footer",
  tags: ["brutalist", "dark"],
  description:
    "A vintage-clothing store footer with an oversized two-line statement, a full-width arrivals link and four numbered shopping resources. Use it for independent resale shops.",
  preview: { kind: "section" },
  fonts: ["Archivo:wght@400..700"],
  brief: {
    layout:
      "A 1280px container padded 48px vertically and 24px horizontally. Store masthead, large two-line Wear it / again statement, full-width arrivals link and four numbered shopping resources. Masthead and arrivals strip use 2px rules. The strip has 20px vertical padding; resource gaps are 20px.",
    style:
      "Archivo bold typography, red-400 on neutral-950, neutral-300 small print. Heading is 60px uppercase with 0.95 line height and -0.05em tracking; brand 24px; arrivals link 20px. No curves or shadows.",
    states:
      "Text links underline on hover-capable devices. Arrivals strip inverts to red-400 fill and neutral-950 text on hover. Every link has a 2px currentColor focus outline offset 4px, including in forced-colors mode. No animation.",
    responsive:
      "Resources stack below 640px, become two columns at 640px and four at 1024px. Heading grows from 60px to 96px at 640px. Side padding grows from 24px to 32px at 1024px. Masthead and arrivals strip contents wrap.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
