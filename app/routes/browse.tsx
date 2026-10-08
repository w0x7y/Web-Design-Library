import { SITE } from '~/site'
import type { Route } from './+types/browse'

export const meta: Route.MetaFunction = () => [{ title: `${SITE.name} — ${SITE.tagline}` }]

export default function Browse() {
  return <h1>All components</h1>
}
