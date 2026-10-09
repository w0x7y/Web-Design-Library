import type { Config } from '@react-router/dev/config'
import { listComponentSlugs } from './scripts/load-library'
import { prerenderPaths } from './src/library/urls'
import { CATEGORY_IDS } from './src/library/taxonomy'

export default {
  ssr: false,
  prerender() {
    return prerenderPaths({ slugs: listComponentSlugs(), categories: CATEGORY_IDS })
  },
} satisfies Config
