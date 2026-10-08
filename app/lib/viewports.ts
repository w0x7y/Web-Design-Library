export const VIEWPORTS = {
  desktop: { width: 1440, height: 900, label: 'Desktop' },
  tablet: { width: 768, height: 1024, label: 'Tablet' },
  mobile: { width: 390, height: 844, label: 'Mobile' },
} as const

export type ViewportId = keyof typeof VIEWPORTS

/** Element-kind components (buttons, cards…) don't fill a screen, so their frames are this tall at every width. */
export const ELEMENT_FRAME_HEIGHT = 480
