import { index, layout, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('routes/shell.tsx', [
    index('routes/browse.tsx'),
    route('browse/:category', 'routes/browse.tsx', { id: 'browse-category' }),
    route('*', 'routes/not-found.tsx'),
  ]),
  route('preview/:slug', 'routes/preview.tsx'),
] satisfies RouteConfig
