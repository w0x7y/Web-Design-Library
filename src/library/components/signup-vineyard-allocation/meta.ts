import type { ComponentMeta } from '../../types'

export default {
  "slug": "signup-vineyard-allocation",
  "name": "Vineyard allocation signup",
  "category": "signup",
  "tags": [
    "editorial",
    "light",
    "has-image"
  ],
  "description": "A photo-led Vale Acre vineyard wine-club signup with case preference, age confirmation and release information. Use it for small seasonal allocations.",
  "preview": {
    "kind": "section"
  },
  "fonts": [
    "Instrument Serif:ital@0;1"
  ],
  "brief": {
    "layout": "A 1152px spread padded 24px horizontally and 64px vertically. Ruled masthead, full-width vineyard photograph, then introduction with a two-cell release ledger and membership form 40px below. Fields 44px, form gaps 20px.",
    "style": "Warm #faf7f0 paper and #49282c oxblood text and submit button. Instrument Serif 400 heading at 36px/1.1, 48px from 640px; default sans body at 14px/24px. Hairline oxblood rules at 30%, square field corners and no shadows.",
    "states": "Controls use 2px current keyboard focus outlines offset 2px, including forced-colors mode. Submit button brightens on hover-capable devices. Submit focus uses #49282c for contrast against the surrounding light background. Native fields retain browser validation. No animation. ",
    "responsive": "Photograph is 208px tall, becoming 288px at 640px. Lower spread stacks with 40px gap below 768px, then uses 1.2:1 columns and an 80px gap. Masthead wraps on narrow screens."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
