// Fonts: Manrope
export default function ProfileCardInterpreter() {
  return (
    <article className="w-72 rounded-xl border border-slate-300 bg-white p-5 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-slate-950 sm:w-80">
      <p className="text-xs font-semibold text-teal-700">Luma Access / Interpreters</p>
      <div className="mt-5 flex items-center gap-3">
        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" alt="Daniel Mercer in a dark suit" width={400} height={600} className="size-14 shrink-0 rounded-md object-cover object-[center_24%]" />
        <div>
          <h2 className="text-lg font-bold">Daniel Mercer</h2>
          <p className="mt-1 text-xs text-slate-600">Registered interpreter</p>
        </div>
      </div>
      <dl className="mt-5 text-xs">
        <div className="flex justify-between gap-3 border-t border-slate-200 py-3">
          <dt className="text-slate-600">Languages</dt>
          <dd>BSL · English</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-slate-200 py-3">
          <dt className="text-slate-600">Next session</dt>
          <dd>Tue 13 Oct, 10:00</dd>
        </div>
      </dl>
      <a href="#book-daniel" aria-label="Book Daniel Mercer for an interpreting session" className="mt-5 flex h-10 items-center justify-between rounded-md bg-teal-700 px-3 text-xs font-semibold text-white hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
        Book a session
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
