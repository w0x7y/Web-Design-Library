export default function BlogCardResearchBrief() {
  return (
    <article className="w-72 border-2 border-black bg-white text-black sm:w-80">
      <div className="flex items-center justify-between border-b-2 border-black bg-yellow-300 px-4 py-2 font-mono text-[10px] uppercase tracking-wider">
        <span>Research brief 018</span>
        <span>2026</span>
      </div>
      <div
        aria-hidden="true"
        className="flex h-24 items-end gap-4 border-b-2 border-black px-6 pt-4"
      >
        <div className="h-8 flex-1 border-x border-t border-black bg-neutral-100" />
        <div className="h-12 flex-1 border-x border-t border-black bg-neutral-100" />
        <div className="h-16 flex-1 border-x border-t border-black bg-neutral-300" />
        <div className="h-20 flex-1 bg-black" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold leading-6 tracking-tight">
          <a
            href="#research-fewer-fields"
            className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Fewer fields. More completed forms.
          </a>
        </h2>
        <p className="mt-3 text-xs leading-5 text-neutral-600">
          What 1,200 sign-up sessions taught us about asking for less.
        </p>
        <div className="mt-4 flex items-center justify-between gap-3 border-t border-black pt-3 font-mono text-[10px]">
          <span>5 MIN READ</span>
          <time dateTime="2026-10-06">06 OCT 2026</time>
        </div>
      </div>
    </article>
  )
}
