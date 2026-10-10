export default function ProfileCardHygienist() {
  return (
    <article className="w-72 rounded-2xl bg-emerald-50 p-5 text-emerald-950 sm:w-80">
      <p className="text-xs font-medium">Nacre Dental</p>
      <div className="mt-5 flex items-center gap-3">
        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" alt="Hannah Cho smiling" width={400} height={503} className="size-20 shrink-0 rounded-lg object-cover" />
        <div>
          <h2 className="text-lg leading-tight font-semibold">Hannah Cho</h2>
          <p className="mt-1 text-xs text-emerald-800">Dental hygienist</p>
          <p className="mt-2 text-[10px] text-emerald-800">BSc Oral Health</p>
        </div>
      </div>
      <p className="mt-5 text-xs leading-5">Gentle care for nervous patients.<br />Every visit starts with a conversation.</p>
      <dl className="mt-4 text-xs text-emerald-800">
        <div className="flex justify-between gap-3 border-t border-emerald-200 py-2.5">
          <dt>Visit length</dt>
          <dd>45 minutes</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-emerald-200 py-2.5">
          <dt>Clinic</dt>
          <dd>North reception</dd>
        </div>
      </dl>
      <a href="#hannah-appointments" aria-label="See appointments with Hannah Cho" className="mt-3 flex items-center justify-between gap-2 text-xs font-medium underline underline-offset-4 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950">
        See Hannah's appointments
        <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0">
          <path d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      </a>
    </article>
  )
}
