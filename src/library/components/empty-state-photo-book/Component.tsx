// Fonts: Young Serif (https://fonts.google.com/specimen/Young+Serif)
export default function EmptyStatePhotoBook() {
  return (
    <section
      aria-labelledby="empty-state-photo-book-title"
      className="w-72 border border-stone-300 bg-white p-5 text-stone-800 sm:w-96 font-['Young_Serif',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <header className="flex items-center justify-between text-lg">
        <p>Folioframe</p>
        <span className="font-sans text-[0.5625rem] leading-4 text-stone-600">BOOK 01</span>
      </header>
      <figure className="my-3">
        <div className="mb-2 grid h-24 grid-cols-2 grid-rows-1 border border-stone-300 bg-stone-100 p-2">
          <div className="min-h-0 border-r border-stone-300 bg-white p-2">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
              alt="A road passing through red desert rock formations"
              width={1600}
              height={2400}
            />
          </div>
          <div aria-hidden="true" className="flex flex-col items-center justify-center gap-2 bg-white p-2">
            <span className="h-10 w-12 border border-dashed border-stone-400"></span>
            <span className="h-px w-10 bg-stone-300"></span>
          </div>
        </div>
        <figcaption className="font-sans text-[0.5625rem] leading-4 text-stone-600">A sample spread. Your story goes here.</figcaption>
      </figure>
      <h2 id="empty-state-photo-book-title" className="text-[1.5rem] leading-7">No photos in<br />this book. Yet.</h2>
      <p className="mt-3 font-sans text-xs leading-5 text-stone-600">Choose a few favorites. You can arrange the pages after they’re here.</p>
      <a href="#" className="mt-4 inline-flex h-10 items-center border border-stone-800 px-3 font-sans text-xs font-medium cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Choose photos →</a>
    </section>
  )
}
