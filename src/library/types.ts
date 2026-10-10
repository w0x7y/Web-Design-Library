import type { CategoryId, StyleTag } from './taxonomy'

/** Supported source formats, in display and agent-file order. */
export const FORMATS = ['react', 'html'] as const
export type Format = (typeof FORMATS)[number]

export interface ComponentBrief {
  layout: string
  style: string
  states: string
  responsive: string
}

export interface ComponentMeta {
  slug: string
  name: string
  category: CategoryId
  tags: StyleTag[]
  description: string
  preview: { kind: 'section' | 'element'; parity?: { maxDiffRatio: number; reason: string } }
  /** Google Fonts css2 family params, e.g. 'Instrument Serif:ital@0;1' */
  fonts: string[]
  brief: ComponentBrief
  addedAt: string
  author?: string
}

export interface ComponentSources {
  tsx: string
  html: string
  css: string
}

export interface LibraryEntry {
  meta: ComponentMeta
  sources: ComponentSources
}
