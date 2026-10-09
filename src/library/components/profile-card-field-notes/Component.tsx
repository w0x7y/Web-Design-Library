export default function ProfileCardFieldNotes() {
  return (
    <article className="w-72 border border-stone-300 bg-[#f7f4ec] p-4 text-stone-900 sm:w-80">
      <div className="flex items-center justify-between border-b border-stone-300 pb-2">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
          Field notes / 014
        </p>
        <span aria-hidden="true" className="font-serif text-xl italic">
          Lm.
        </span>
      </div>
      <h2 className="mt-3 font-serif text-2xl leading-tight">Lena Moreau</h2>
      <p className="mt-1 font-serif text-xs italic text-stone-600">
        Ecologist &amp; patient observer
      </p>
      <p className="mt-3 text-xs leading-5 text-stone-700">
        Studying the small things that keep our coastal wetlands alive.
      </p>
      <dl className="mt-3 grid grid-cols-2 gap-4 border-y border-stone-300 py-2">
        <div>
          <dt className="text-[10px] uppercase tracking-wider text-stone-600">
            Based in
          </dt>
          <dd className="mt-1 text-xs">Brittany, France</dd>
        </div>
        <div>
          <dt className="text-[10px] uppercase tracking-wider text-stone-600">
            In the field
          </dt>
          <dd className="mt-1 text-xs">Since 2014</dd>
        </div>
      </dl>
      <a
        href="#lena-field-notes"
        className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm underline underline-offset-4 hover:text-stone-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
      >
        Read Lena’s notes{' '}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="inline-block size-3.5 align-[-0.125em]"
        >
          <path d="M5 15 15 5M5 5h10v10" />
        </svg>
      </a>
    </article>
  )
}
