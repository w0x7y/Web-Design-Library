// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function NavbarDistilleryTours() {
  return (
    <header className="bg-rose-100 font-['Fraunces',ui-serif,Georgia,serif] text-rose-950">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 p-6 md:flex-row md:flex-wrap md:items-center">
        <a href="#" className="flex -rotate-3 flex-col rounded-2xl border-2 border-rose-950 bg-white px-5 py-3 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"><span className="text-3xl font-bold tracking-tight">copper fin</span><span className="mt-1 text-xs">Small-batch coastal spirits</span></a>
        <nav aria-label="Distillery" className="flex flex-wrap gap-2">
          <a href="#" className="inline-flex min-h-11 items-center rounded-full border border-rose-300 bg-rose-50 px-3 text-sm font-semibold hover:bg-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Gin &amp; whisky</a>
          <a href="#" className="inline-flex min-h-11 items-center rounded-full border border-rose-300 bg-rose-50 px-3 text-sm font-semibold hover:bg-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">How we distil</a>
          <a href="#" className="inline-flex min-h-11 items-center rounded-full border border-rose-300 bg-rose-50 px-3 text-sm font-semibold hover:bg-rose-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">The bottle shop</a>
        </nav>
        <div className="border-l-2 border-rose-950 pl-4 md:ml-auto">
          <p className="mb-2 text-xs">Saturday tours / 2pm &amp; 4pm</p>
          <a href="#" className="text-lg font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">Book a distillery tour</a>
        </div>
      </div>
    </header>
  )
}
