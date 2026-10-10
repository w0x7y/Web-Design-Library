import type { ComponentMeta } from '../../types'

export default {
  slug: "pricing-candle-seasons",
  name: "Seasonal candle subscription",
  category: "pricing",
  tags: ["editorial", "playful", "light"],
  description:
    "A candle maker's annual subscription with four scent collections and a single delivered price. Use it for seasonal home-fragrance subscriptions.",
  preview: { kind: "section" },
  fonts: ["Fraunces:wght@400"],
  brief: {
    layout:
      "1280px maximum width, 24px side and 64px vertical padding. Left heading and intro paired with a left-ruled annual rate and signup link. Four ordered seasonal candle boxes begin 48px below with 16px gaps; each contains a large number, title, dispatch month and ruled contents copy. Footer specifies wax weight, burn time and gift renewal.",
    style:
      "Amber-50 canvas, amber-950 ink, amber-800 rules and labels. Fraunces regular on heading, price, scent titles and numbers, default sans elsewhere. Heading 36px/1.1, price and numbers 48px, scent names 24px. Parcels have 64px top radii and square bottom corners, 24px side and bottom padding, 32px top padding. Spring yellow-100, summer amber-100, autumn orange-100, winter stone-100. Signup pill is amber-950/amber-50, at least 44px high.",
    states:
      "Signup fills amber-800 on hover-capable devices and shows 2px amber-950 focus outline offset 4px. Seasonal list is semantic with role=list; decorative sequence numbers are hidden from assistive technology. No motion.",
    responsive:
      "At 640px vertical padding becomes 80px, heading 60px and parcels form two columns. At 1024px header becomes 1.5fr/1fr and parcels become four columns. At smaller sizes parcels stack and the annual price unit wraps.",
  },
  addedAt: "2026-10-10",
} satisfies ComponentMeta
