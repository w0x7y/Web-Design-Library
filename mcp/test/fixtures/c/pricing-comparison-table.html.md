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

## Reference code (HTML + CSS)
```html
<section class="pricing-comparison-table">
  <div class="pricing-comparison-table__container">
    <h2 class="pricing-comparison-table__heading">Section headline</h2>
    <div role="region" aria-label="Plan comparison" tabindex="0" class="pricing-comparison-table__scroll">
      <table class="pricing-comparison-table__table">
        <caption class="pricing-comparison-table__caption">Features by plan</caption>
        <thead><tr><th scope="col">Feature</th><th scope="col">Plan name</th><th scope="col">Plan name</th></tr></thead>
        <tbody><tr><th scope="row">Feature name</th><td>Included</td><td>Included</td></tr></tbody>
      </table>
    </div>
  </div>
</section>
```

```css
.pricing-comparison-table, .pricing-comparison-table * { box-sizing: border-box; margin: 0; padding: 0; }
.pricing-comparison-table { background: white; color: oklch(20.5% 0 none); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.5; }
.pricing-comparison-table .pricing-comparison-table__container { max-width: 72rem; margin-inline: auto; padding: 4rem 1.5rem; }
.pricing-comparison-table .pricing-comparison-table__heading { font-size: 1.875rem; line-height: 1.2; font-weight: 600; letter-spacing: -0.025em; text-align: center; text-wrap: balance; }
.pricing-comparison-table .pricing-comparison-table__scroll { margin-top: 2.5rem; overflow-x: auto; }
.pricing-comparison-table .pricing-comparison-table__scroll:focus-visible { outline: 2px solid oklch(20.5% 0 none); outline-offset: 2px; }
.pricing-comparison-table .pricing-comparison-table__table { width: 100%; min-width: 40rem; border-collapse: collapse; font-size: 0.875rem; line-height: calc(1.25 / 0.875); text-align: left; }
.pricing-comparison-table .pricing-comparison-table__caption { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
.pricing-comparison-table :is(th, td) { padding: 1rem; border-bottom: 1px solid oklch(92.2% 0 none); }
.pricing-comparison-table tbody th { font-weight: 500; }
.pricing-comparison-table td { color: oklch(43.9% 0 none); }
@media (width >= 40rem) {
  .pricing-comparison-table .pricing-comparison-table__container { padding-block: 6rem; }
  .pricing-comparison-table .pricing-comparison-table__heading { font-size: 2.25rem; line-height: calc(2.5 / 2.25); }
}
```

Map the neutral greys to the host project's design tokens and replace slot copy with real content; keep the regions, hierarchy and responsive behaviour.
