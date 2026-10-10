import type { ComponentMeta } from '../../types'

export default {
  "slug": "inputs-translation-job",
  "name": "Inputs — Translation job",
  "category": "inputs",
  "tags": ["corporate", "light"],
  "description": "A translation quote input set for Lexbridge, with source and target language selectors and a word-count field. Use it for document-translation estimates.",
  "preview": {
    "kind": "element"
  },
  "fonts": ["IBM Plex Sans:wght@400;500;600;700"],
  "brief": {
    "layout": "288px-wide panel, 352px at 640px, with 20px padding, 12px corners and a 4px teal-800 top border. A brand line and 20px heading precede a language-pair grid with two flexible columns and a 16px arrow column, 8px gaps. A 40px full-width word-count field follows 16px later and an 11px hint sits beneath it.",
    "style": "IBM Plex Sans, slate-50 panel, slate-950 main text, slate-600 supporting text and teal-800 accent. White 40px controls with slate-500 1px boundaries and 6px corners. Labels are 12px medium, field copy 14px, heading 20px semibold. No shadow.",
    "states": "Inputs and selects retain native behavior with 2px current-color keyboard outlines offset 2px. The word count accepts positive whole words and references an estimate hint. Decorative direction arrow is aria-hidden. No animations or hover changes.",
    "responsive": "288px below 640px, 352px from 640px. The source-to-target row stays horizontal using min-width-zero controls; padding and font sizes are unchanged."
  },
  "addedAt": "2026-10-10"
} satisfies ComponentMeta
