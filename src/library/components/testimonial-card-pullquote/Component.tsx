export default function TestimonialCardPullquote() {
  return (
    <figure className="w-72 border-y border-stone-300 bg-[#f7f4ec] px-5 py-6 text-stone-900 sm:w-80">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone-600">
        From the studio floor
      </p>
      <blockquote className="mt-5 border-l-2 border-stone-900 pl-4 font-serif text-xl leading-7">
        <p>
          “For the first time, our project notes make sense to the person
          joining halfway through.”
        </p>
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-stone-200 font-serif text-lg"
        >
          RB
        </span>
        <div>
          <p className="text-xs font-semibold">Rosa Bennett</p>
          <p className="mt-1 text-[11px] text-stone-600">
            Creative director, Open House
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
