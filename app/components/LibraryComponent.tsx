import { lazyComponent } from '../../src/library/registry'

/** A library component by slug, loaded on first render. It suspends while its code loads, so callers wrap it in Suspense. */
export function LibraryComponent({ slug }: { slug: string }) {
  const Component = lazyComponent(slug)
  // oxlint-disable-next-line react/static-components -- lazyComponent() memoizes per slug, so the type is stable across renders
  return <Component />
}
