export default function EmptyStateWishlist() {
  return (
    <section
      aria-labelledby="empty-state-wishlist-title"
      className="w-72 bg-stone-900 px-6 pb-6 text-stone-100 sm:w-96 antialiased"
    >
      <header className="flex items-start justify-between text-[0.625rem] tracking-[0.2em]">
        <p className="pt-5">WANTLEAF</p>
        <svg aria-hidden="true" viewBox="0 0 24 40" fill="none" className="h-10 w-6 text-stone-400">
          <path d="M1 1h22v37L12 30 1 38V1Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </header>
      <p className="mt-6 text-xs text-stone-400">0 saved finds</p>
      <h2 id="empty-state-wishlist-title" className="mt-3 text-3xl leading-8 font-medium tracking-tight">Keep a little<br />wish list.</h2>
      <p className="mt-4 text-xs leading-5 text-stone-300">The thing you almost forgot. The gift you know they’d love. Save a link here.</p>
      <footer className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-stone-600 pt-4">
        <a href="#" className="text-xs font-medium underline-offset-4 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Save a find →</a>
        <span className="text-[0.625rem] text-stone-400">Only you can see it.</span>
      </footer>
    </section>
  )
}
