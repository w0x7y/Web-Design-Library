import type { ComponentMeta } from '../../types'

export default {
  slug: 'dropdowns-dark',
  name: 'Dropdowns — Dark',
  category: 'dropdowns',
  tags: ['dark', 'minimal'],
  description:
    'A dark, minimal dropdown trigger for the colour "Look" picker of a video editor, drawn twice side by side: closed, and open with its menu. The trigger shows a gradient swatch, the label and the current value beside an icon-only actions button. The open menu is a radio group of looks with colour chips and a check on the selected one, then an Import LUT action. The markup is static, so you wire up opening and closing. Use it for toolbars and inspectors in dark creative apps.',
  preview: { kind: 'element' },
  fonts: ['Geologica:wght@100..900'],
  brief: {
    layout:
      'A dark grid panel 288px wide with 20px padding and 16px gaps. From 640px it is 576px wide with 24px padding and three columns: two equal halves with a 1px full-height divider between them, 24px gaps and items aligned to the top. Below 640px the closed and open states stack and the divider is hidden. Each state starts with a toolbar row (flex, 8px gap): the trigger <button> filling the row (36px tall, 12px left and 10px right padding, 8px gaps) with a 14px round swatch, "Look", the value "Kodak 2383" (truncated with an ellipsis if short of room) and a 16px chevron pushed to the right; then a 36px square "Clip actions" button with a three-dot icon. In the open state the menu sits 8px below the toolbar with 4px padding. It holds a <fieldset> whose <legend> reads "Look" (6px top, 10px side and 4px bottom padding), four 32px <label> options (10px side padding and 10px gaps: a visually hidden radio, a 14px swatch, the name and a 16px check pushed right), a 1px separator with 4px margins, and a full-width 32px "Import LUT…" button with a 14px upload icon.',
    style:
      'Geologica throughout, antialiased, color-scheme dark. Panel neutral-950 with a 16px radius and overflow hidden; divider neutral-800. Triggers: neutral-900 fill, a 1px neutral-800 border, 8px radius and 14px text; "Look" in neutral-400, the value in medium weight neutral-100 and the chevron neutral-400. The icon button\'s dots are neutral-300. Menu: neutral-900 with a 1px neutral-800 border, a 12px radius and a shadow of 0 16px 32px −12px black at 80%. Legend 12px medium neutral-400. Options 14px neutral-300 with a 6px radius; the checked option is white and shows its check, also white. Swatches are linear gradients to the bottom right in oklab: None neutral-300 to neutral-600, Rec. 709 sky-200 to slate-600, Kodak 2383 amber-300 to teal-700, Fuji 3513 emerald-200 to rose-800. Swatches and icons are aria-hidden, so the trigger\'s accessible name is its text, "Look Kodak 2383".',
    states:
      'Static: both states are drawn. Closed triggers carry aria-expanded="false"; the open one carries aria-expanded="true" and aria-controls naming the menu, and that attribute drives its look: a neutral-500 border, a neutral-800 fill and the chevron rotated 180deg. The popup is a disclosure, not role="menu": the looks are real radio buttons (name "dropdowns-dark-look"), so Tab reaches the group, the arrow keys change the look and the check follows :checked; the action is a plain button. Wire up the behaviour yourself: toggle aria-expanded and the menu\'s visibility, close on Escape and outside click, return focus to the trigger and copy the checked look into the trigger. Hover (devices with hover only): triggers get a neutral-700 border and neutral-800 fill (the icon button\'s dots turn white), and menu rows fill neutral-800 with white text. Keyboard focus: a 2px neutral-100 outline offset 2px on triggers, and inset by 2px on menu rows (the option label shows it through :has(:focus-visible)). Colours change over 150ms and the chevron turns over 150ms.',
    responsive:
      'Below 640px: 288px wide with 20px padding; the closed toolbar sits 16px above the open toolbar and its menu, and the divider is hidden. From 640px: 576px wide with 24px padding; closed on the left and open on the right, split by the 1px divider with 24px on each side.',
  },
  addedAt: '2026-10-08',
} satisfies ComponentMeta
