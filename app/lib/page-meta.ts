import type { MetaDescriptor } from 'react-router'
import { absoluteUrl } from '../../src/library/urls'
import { SITE } from '../site'

/** Sharing crawlers read the prerendered HTML, so every indexable route emits the complete set. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): MetaDescriptor[] {
  const url = absoluteUrl(path)
  const image = absoluteUrl('/social-preview.png')
  const imageAlt = 'Patternbook — neutral layout patterns with code and an AI brief to restyle in your own design system.'
  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:site_name', content: SITE.name },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: image },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: imageAlt },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:image:alt', content: imageAlt },
  ]
}
