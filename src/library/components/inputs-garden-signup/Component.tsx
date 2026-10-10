export default function InputsGardenSignup() {
  return (
    <section
      aria-label="Garden club signup fields"
      className="w-72 rounded-3xl border border-emerald-200 bg-lime-50 p-5 text-emerald-950"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-xl bg-lime-200"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-6"
          >
            <path d="M16 3c0 9-5 12-11 9C2 6 7 3 16 3ZM5 15l7-7" />
          </svg>
        </span>
        <div>
          <p className="text-[10px] tracking-widest uppercase">
            Good things grow here
          </p>
          <h2 className="text-xl font-bold">Join the garden</h2>
        </div>
      </div>
      <label
        htmlFor="inputs-garden-signup-name"
        className="mt-5 block text-xs font-semibold"
      >
        What should we call you?
      </label>
      <input
        id="inputs-garden-signup-name"
        name="name"
        type="text"
        autoComplete="given-name"
        placeholder="Your first name"
        className="mt-2 h-11 w-full rounded-full border border-emerald-700 bg-white px-4 text-sm placeholder:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
      />
      <label
        htmlFor="inputs-garden-signup-email"
        className="mt-4 block text-xs font-semibold"
      >
        Your email
      </label>
      <input
        id="inputs-garden-signup-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        className="mt-2 h-11 w-full rounded-full border border-emerald-700 bg-white px-4 text-sm placeholder:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 leading-[normal]"
      />
      <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-xs leading-5">
        <input
          type="checkbox"
          name="inputs-garden-signup-volunteer"
          className="mt-0.5 size-4 shrink-0 accent-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        />
        <span>I'd like to help at the next planting day.</span>
      </label>
    </section>
  )
}
