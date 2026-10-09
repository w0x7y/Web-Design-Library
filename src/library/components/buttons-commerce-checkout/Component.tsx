export default function ButtonsCommerceCheckout() {
  return (
    <section
      aria-label="Checkout actions"
      className="w-72 rounded-2xl border border-stone-200 bg-stone-50 p-5 text-stone-950"
    >
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <p className="text-xs font-medium tracking-widest uppercase">
          Your bag
        </p>
        <span className="rounded-full bg-white px-2.5 py-1 text-xs text-stone-600">
          2 items
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <p className="text-sm text-stone-600">Ready to check out?</p>
        <span className="text-xl font-semibold tabular-nums">$84.00</span>
      </div>
      <button
        type="button"
        className="mt-5 flex h-12 w-full items-center justify-between rounded-xl bg-emerald-800 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 motion-reduce:transition-none"
      >
        Secure checkout
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5"
        >
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </button>
      <button
        type="button"
        className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-stone-300 bg-white text-sm font-medium transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 motion-reduce:transition-none"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-4"
        >
          <path d="M3 2.5h10v11l-5-3-5 3z" />
        </svg>
        Save bag for later
      </button>
      <p className="mt-4 text-center text-xs text-stone-600">
        Free shipping on orders over $100.
      </p>
    </section>
  )
}
