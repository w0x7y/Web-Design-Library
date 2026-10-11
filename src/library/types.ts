import type { CategoryId, LayoutTag } from './taxonomy'

/** Supported source formats, in display and agent-file order. */
export const FORMATS = ['react', 'html'] as const
export type Format = (typeof FORMATS)[number]

export interface ComponentBrief {
  layout: string
  hierarchy: string
  states: string
  responsive: string
  usage: string
}

export interface ComponentMeta {
  slug: string
  name: string
  category: CategoryId
  tags: LayoutTag[]
  description: string
  preview: { kind: 'section' | 'element'; parity?: { maxDiffRatio: number; reason: string } }
  wireframe: string
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
