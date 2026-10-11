# Pricing — Comparison table (Patternbook)
Source: https://patternbook-w0x7y.vercel.app/c/pricing-comparison-table

Layout pattern: Compare plans and features in a pricing table.
This is a neutral wireframe. Keep its structure, hierarchy and responsive behaviour; take colours, type, radius, imagery and copy from the host project.

## Wireframe
```text
┌──────────────────────────────────────────────┐
│             Section headline                 │
│ Feature           Plan name     Plan name    │
│ Feature name      Included      Included     │
└──────────────────────────────────────────────┘
```

## Layout
A 1152px max-w-6xl container with 24px side padding and 64px vertical padding, rising to 96px from 640px. A centred section headline sits above a table with a feature column and two plan columns. Cells have 16px padding and horizontal hairlines.

## Hierarchy and content
The section headline reads first, at most eight words. Each plan heading names a plan in two words. Feature labels stay under four words; values are short availability labels.

## States
Static comparison. The table's scroll region has a visible focus outline.

## Responsive
The table keeps a 640px minimum width and scrolls inside a focusable region below that width. The section stays within the viewport.

## When to use
Use for comparing features across plans. Choose plan cards for a short benefits list. Variations include a highlighted plan column or a price row beneath the plan names.

## Reference code (React + Tailwind v4)
```tsx
export default function PricingComparisonTable() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Section headline</h2>
        <div role="region" aria-label="Plan comparison" tabIndex={0} className="mt-10 overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="sr-only">Features by plan</caption>
            <thead><tr><th scope="col" className="border-b border-neutral-200 p-4">Feature</th><th scope="col" className="border-b border-neutral-200 p-4">Plan name</th><th scope="col" className="border-b border-neutral-200 p-4">Plan name</th></tr></thead>
            <tbody><tr><th scope="row" className="border-b border-neutral-200 p-4 font-medium">Feature name</th><td className="border-b border-neutral-200 p-4 text-neutral-600">Included</td><td className="border-b border-neutral-200 p-4 text-neutral-600">Included</td></tr></tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
```

Map the neutral greys to the host project's design tokens and replace slot copy with real content; keep the regions, hierarchy and responsive behaviour.
