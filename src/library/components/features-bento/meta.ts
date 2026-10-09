import type { ComponentMeta } from '../../types'

export default {
  slug: 'features-bento',
  name: 'Bento features',
  category: 'features',
  tags: ['dark', 'gradient'],
  description:
    'A dark bento grid for a podcast editor: a transcript tile with a gradient waveform and a cut-out section, before-and-after noise-removal waveforms, struck-through filler-word chips, remote guest uploads, and one tile drenched in an amber-to-rose gradient that lists chapters. Use it for the feature section of a creative or media tool.',
  preview: { kind: 'section' },
  fonts: ['Anybody:wdth,wght@50..150,100..900'],
  brief: {
    layout:
      'neutral-950 section with a 1280px container (24px side padding, 32px from 1024px). Header: h2 and paragraph on the left (896px max) and a "Start editing free" pill on the right, bottom-aligned; they stack 32px apart below 1024px. The grid starts 56px below (64px from 1024px) with 16px gaps and five <article> tiles. From 1024px it has three columns: the transcript tile spans 2 columns and 2 rows, with its heading and description at the top, two speaker turns centred in the free space and a waveform flush with the bottom and side edges; "Studio sound" and "Every um" stack in column 3; "Guests record locally" sits in column 1 of the third row and the gradient "Chapters" tile spans columns 2–3, with its text and chapter list side by side (40px gap, list aligned to the top). The other tiles are flex columns whose visuals (waveforms, chips, guest list) sit at the bottom with margin-top auto and at least 32px above them. An orange radial glow sits behind the top right corner.',
    style:
      'Anybody, a variable grotesque with a width axis. h2: semibold, 125% width, -0.03em, 1.02 line height, balanced. Paragraph: 18px neutral-400. Tile titles: 20px semibold at 112.5% width, -0.01em; descriptions 15px neutral-400 at 1.625 line height. Tiles: neutral-900, 16px radius, inset 1px white/10 ring. Transcript: speaker names 13px semibold in orange-300 and rose-300, timestamps tabular neutral-400, text neutral-200; removed words are <del> in neutral-400 with a 2px rose-400 strike; the selection is a <mark> with an orange-400/25 fill, white text and a 4px radius. Waveforms are SVG bars drawn as 4px round-capped strokes with a horizontal gradient: amber-300, orange-500, rose-500, fuchsia-500 on the big one and amber-300 to rose-500 on the small "after" one; the "before" bars are neutral-500 with a noise floor. The cut section of the big waveform is neutral-700 over a rose-400/10 band, with a 2px white playhead. Chips: white/5 pills with an inset white/10 ring, a struck neutral-300 word and a white/10 count badge. Guests: 36px circles (orange-300, rose-300) with 12px semibold initials in orange-950 and rose-950, an "Uploaded" check and a 48 × 6px progress bar filled orange-300 to rose-400. Chapters tile: an amber-300 → orange-400 → rose-400 gradient towards the bottom right, neutral-950 text, neutral-800 description, and four chapters between neutral-950/15 rules with semibold tabular timestamps. Call to action: 44px white pill with 14px semibold neutral-950 text and an arrow. Glow: orange-500 at 20% fading out at 70% of a 896 × 640px radial gradient.',
    states:
      'The call to action turns orange-100 on hover and its arrow moves 2px right (150ms); keyboard focus shows a 2px white outline offset 2px. The tiles are illustrations, not controls.',
    responsive:
      'One column below 768px, transcript tile first. From 768px two columns: the transcript tile spans both, and the other four tiles pair up (the Chapters tile stacks its text above the list). From 1024px three columns as described. Tile padding is 24px, 32px from 640px. Waveforms keep their bar proportions and crop from the centre (preserveAspectRatio xMidYMid slice); the big one is 96px tall, 112px from 640px. Transcript text: 16px, 20px from 1024px. h2: 36px, 48px from 640px, 56px from 1024px. Vertical padding: 80px, 96px from 640px, 112px from 1024px.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
