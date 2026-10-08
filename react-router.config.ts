import type { Config } from '@react-router/dev/config'
import { listComponentSlugs, prerenderPaths } from './src/library/paths'

export default {
  ssr: false,
  prerender() {
    return prerenderPaths({ slugs: listComponentSlugs(), categories: [] })
  },
} satisfies Config
