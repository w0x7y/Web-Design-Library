export default function BlogCardInterview() {
  return (
    <article className="w-72 rounded-2xl border-2 border-indigo-950 bg-white text-indigo-950 sm:w-80">
      <div className="flex h-28 items-center justify-between rounded-t-[0.875rem] border-b-2 border-indigo-950 bg-orange-200 px-5">
        <p
          aria-hidden="true"
          className="font-serif text-6xl italic tracking-tight"
        >
          Q<span className="px-1 text-3xl">&amp;</span>A
        </p>
        <span className="rounded-full border border-indigo-950 px-2.5 py-1 text-[10px] font-semibold">
          Issue 06
        </span>
      </div>
      <div className="p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-indigo-700">
          In conversation / Mina Cho
        </p>
        <h2 className="mt-2 text-xl font-bold leading-7 tracking-tight">
          <a
            href="#mina-cho-interview"
            className="rounded-sm hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-950"
          >
            “A good idea usually starts as a bad sketch.”
          </a>
        </h2>
        <p className="mt-2 text-xs leading-5 text-indigo-800">
          The illustrator on keeping a messy notebook and learning to trust the
          first mark.
        </p>
        <p className="mt-4 text-[11px] font-medium text-indigo-700">
          <time dateTime="2026-10-02">2 Oct 2026</time> · 7 min read
        </p>
      </div>
    </article>
  )
}
