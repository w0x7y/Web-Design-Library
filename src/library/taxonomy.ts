export const GROUPS = [
  { id: 'sections', label: 'Sections', categories: ['hero', 'navbar', 'features', 'pricing', 'testimonials', 'cta', 'faq', 'footer'] },
  { id: 'cards', label: 'Cards & profiles', categories: ['profile-card', 'team', 'product-card', 'stat-card', 'testimonial-card', 'blog-card'] },
  { id: 'elements', label: 'Elements', categories: ['buttons', 'inputs', 'badges', 'toggles', 'tabs', 'dropdowns'] },
  { id: 'app-ui', label: 'App UI', categories: ['login', 'signup', 'settings', 'data-table', 'empty-state', 'dashboard'] },
] as const

export type CategoryId = (typeof GROUPS)[number]['categories'][number]

export const CATEGORY_IDS: CategoryId[] = GROUPS.flatMap((group) => [...group.categories])

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  hero: 'Hero',
  navbar: 'Navbar',
  features: 'Features',
  pricing: 'Pricing',
  testimonials: 'Testimonials',
  cta: 'Call to action',
  faq: 'FAQ',
  footer: 'Footer',
  'profile-card': 'Profile cards',
  team: 'Team',
  'product-card': 'Product cards',
  'stat-card': 'Stat cards',
  'testimonial-card': 'Testimonial cards',
  'blog-card': 'Blog cards',
  buttons: 'Buttons',
  inputs: 'Inputs',
  badges: 'Badges',
  toggles: 'Toggles',
  tabs: 'Tabs',
  dropdowns: 'Dropdowns',
  login: 'Login',
  signup: 'Sign-up',
  settings: 'Settings',
  'data-table': 'Data table',
  'empty-state': 'Empty state',
  dashboard: 'Dashboard',
}

export const STYLE_TAGS = ['minimal', 'brutalist', 'glass', 'editorial', 'playful', 'corporate', 'dark', 'light', 'gradient', 'has-image'] as const

export type StyleTag = (typeof STYLE_TAGS)[number]

export function groupOf(category: CategoryId): (typeof GROUPS)[number] {
  const group = GROUPS.find((g) => (g.categories as readonly string[]).includes(category))
  if (!group) throw new Error(`Unknown category: ${category}`)
  return group
}
