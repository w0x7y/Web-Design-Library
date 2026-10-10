// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function EmptyStateSavedRoutes() {
  return (
    <section
      aria-labelledby="empty-state-saved-routes-title"
      className="w-72 overflow-hidden rounded-[1.25rem] bg-linear-to-b from-emerald-900 to-emerald-950 pb-4 text-emerald-50 sm:w-96 font-['Archivo',ui-sans-serif,system-ui,sans-serif] antialiased"
    >
      <div className="relative">
        <img
          className="h-32 w-full object-cover object-[50%_65%]"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
          alt="A two-lane road winding between red desert rocks"
          width={1600}
          height={2400}
        />
        <p className="absolute top-4 left-4 rounded bg-emerald-950/90 px-2 py-1 text-xs font-medium">Waystash</p>
        <span className="absolute top-4 right-4 rounded border border-white/40 bg-emerald-950/90 px-2 py-1 text-[0.5625rem] leading-4 backdrop-blur-md">0 ROUTES SAVED</span>
      </div>
      <div className="relative -mt-6 mx-4 rounded-xl border border-emerald-200/30 bg-emerald-950/90 p-4 backdrop-blur-md">
        <p className="text-[0.5625rem] tracking-widest text-emerald-200">THE LONG WAY HOME</p>
        <h2 id="empty-state-saved-routes-title" className="mt-3 text-2xl leading-7 font-medium tracking-tight">No detours<br />saved yet.</h2>
        <p className="mt-3 text-xs leading-5 text-emerald-100">Found a road worth taking again? Save the route before you forget the turn.</p>
        <a href="#" className="mt-4 flex h-10 items-center justify-between rounded-md border border-emerald-200 px-3 text-xs font-semibold text-emerald-100 cursor-pointer hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">Explore the map <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}
