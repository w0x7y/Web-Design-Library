import type { ComponentMeta } from '../../types'

export default {
  slug: "dropdowns-nav-flyout",
  name: "Dropdowns — Navigation flyout with descriptions",
  category: "dropdowns",
  tags: ["layered", "icons", "list"],
  description: "A compact navigation row opens a full-width flyout with icon tiles, description links and a muted footer. Use for a small set of product destinations.",
  preview: { kind: 'element' },
  wireframe: `┌──────────────────────────────────────────────────────┐
│ [Product ^]     [Pricing]     [Docs]                 │
│ ┌──────────────────────────────────────────────┐     │
│ │ Icon tile  Feature title                     │     │
│ │            Short feature description         │     │
│ │ Icon tile  Integration title                 │     │
│ │            Connection description            │     │
│ │ Icon tile  Resource title                    │     │
│ │            Learning description              │     │
│ │ [All features]               [Contact]       │     │
│ └──────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A relative navigation root is 288px (w-72) by 320px (h-80), growing to 384px (sm:w-96) wide at 640px. Three navigation items sit in a row with 16px gaps and 36px heights. The full-width flyout starts 8px below the row, with rounded-lg corners, a neutral-200 border, shadow-lg and overflow-hidden. An 8px-padded list holds three rows with 12px padding, 12px gaps, standard 40px icon tiles and two 14px text lines. A neutral-50 footer has a top divider, 16px horizontal and 12px vertical padding.",
    hierarchy: "Read Product, Pricing and Docs first. The open Product flyout has three 14px semibold destination titles and 14px neutral-500 descriptions; icon tiles support scanning. Titles use up to 3 words, descriptions up to 28 characters and footer links up to 2 words. Navigation and list semantics remain native; the panel is a disclosure with plain links.",
    states: "Product is open initially; its chevron rotates 180 degrees while open, and summary activation toggles the flyout. Summary hover fills neutral-50. Pricing, Docs and footer links are underlined and hover neutral-600; their focus outlines are 2px neutral-900 offset 2px. Flyout rows hover neutral-50 and show 2px inset outlines so overflow-hidden does not clip focus. No selected or disabled destinations are shown.",
    responsive: "Below 640px the root and flyout are 288px wide; from 640px they are 384px. The top row, three stacked destination rows and two-link footer retain their structure. Short descriptions fit the mobile text column without extra lines.",
    usage: "Use for a handful of navigation destinations that benefit from descriptions. Choose dropdowns-account-menu for identity links or tabs-link-overflow for counted peer pages. Variations: change the icon tiles, replace the footer with one help link, or use another primary navigation label.",
  },
  addedAt: '2026-10-10',
} satisfies ComponentMeta
