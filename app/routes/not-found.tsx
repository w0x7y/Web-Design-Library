import { NotFoundView } from '~/components/NotFoundView'
import { SITE } from '~/site'
import type { Route } from './+types/not-found'

export const meta: Route.MetaFunction = () => [{ title: `Page not found — ${SITE.name}` }]

export default function NotFound() {
  return <NotFoundView />
}
