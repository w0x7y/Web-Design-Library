# Minimal pricing (Patternbook)
Source: https://patternbook-w0x7y.vercel.app/c/pricing-minimal

## Layout
Three plan cards in one row.

## Visual style
Fonts: Inter

## States
Visible focus outlines on links.

## Responsive
Stack cards on mobile.

## Reference code (React + Tailwind v4)
```tsx
export default function PricingMinimal() {
  return <section className="grid gap-6 md:grid-cols-3">Three plans</section>
}
```
