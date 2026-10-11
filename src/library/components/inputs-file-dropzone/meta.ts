import type { ComponentMeta } from '../../types'

export default {
  slug: "inputs-file-dropzone",
  name: "Inputs — Upload zone with a native file field",
  category: "inputs",
  tags: ["centered", "stacked", "form", "icons", "compact"],
  description: "A dashed upload zone places a file glyph, a short heading and a native file chooser above format guidance. Use for one accessible document attachment.",
  preview: {"kind": "element"},
  wireframe: `┌──────────────────────────────────────────────────────┐
│                    Upload icon                       │
│                   Attach a file                      │
│ [Choose file]  No file chosen                        │
│               PDF or TXT, up to 10 MB.               │
└──────────────────────────────────────────────────────┘`,
  brief: {
    layout: "A 288px dashed-border zone grows to 384px at sm with 20px padding and centered content. A 40px icon tile precedes the 14px label by 12px. The full-width native file field has 8px padding and a compact dark chooser button. The hint follows by 12px.",
    hierarchy: "Read the upload icon, Attach a file, the chooser and format note. The visible label names the native input; aria-describedby connects the format and size guidance. Keep the attachment label under 4 words and guidance under 10 words.",
    states: "The native file input opens the system chooser and displays the selected filename. Keyboard focus draws a 2px offset outline around the field. The accept attribute suggests PDF and TXT; the host validates file type and size after selection.",
    responsive: "The zone is 288px below 640px and 384px from 640px. Its file field stays full width and permits the browser to truncate long filenames within the available space.",
    usage: "Use for one document attachment with simple format guidance. Choose a file list when several uploads need progress or removal controls. Variations: change the accepted formats, allow multiple files, or reduce the size limit in the note.",
  },
  addedAt: '2026-10-11',
} satisfies ComponentMeta
