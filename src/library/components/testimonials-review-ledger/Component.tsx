export default function TestimonialsReviewLedger() {
  return (
    <section className="bg-white text-stone-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">
              Notes from our customers
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Care that people remember.
            </h2>
          </div>
          <div>
            <p className="text-4xl font-semibold">
              4.9
              <span className="ml-2 text-sm font-normal text-stone-500">
                out of 5
              </span>
            </p>
            <p className="mt-2 text-xs text-stone-500">
              From 286 verified appointments
            </p>
          </div>
        </div>
        <div className="mt-10">
          <figure className="grid gap-5 border-t border-stone-200 py-7 md:grid-cols-[12rem_1fr]">
            <figcaption>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-stone-100 text-xs font-medium">
                  JP
                </span>
                <div>
                  <p className="text-sm font-semibold">Jules Park</p>
                  <p className="text-xs text-stone-500">Verified customer</p>
                </div>
              </div>
            </figcaption>
            <div>
              <p
                aria-label="5 out of 5 stars"
                className="tracking-widest text-amber-700"
              >
                ★★★★★
              </p>
              <blockquote className="mt-3 text-lg leading-relaxed">
                Everything was explained clearly, the appointment started on
                time and I never felt rushed. That makes a real difference.
              </blockquote>
              <p className="mt-4 text-xs text-stone-500">
                First consultation / 8 October 2026
              </p>
            </div>
          </figure>
          <figure className="grid gap-5 border-t border-stone-200 py-7 md:grid-cols-[12rem_1fr]">
            <figcaption>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-stone-100 text-xs font-medium">
                  AD
                </span>
                <div>
                  <p className="text-sm font-semibold">Amira Davies</p>
                  <p className="text-xs text-stone-500">Verified customer</p>
                </div>
              </div>
            </figcaption>
            <div>
              <p
                aria-label="5 out of 5 stars"
                className="tracking-widest text-amber-700"
              >
                ★★★★★
              </p>
              <blockquote className="mt-3 text-lg leading-relaxed">
                Booking took two minutes. When I needed to change the time, a
                real person helped me find another slot that same day.
              </blockquote>
              <p className="mt-4 text-xs text-stone-500">
                Follow-up appointment / 5 October 2026
              </p>
            </div>
          </figure>
          <figure className="grid gap-5 border-y border-stone-200 py-7 md:grid-cols-[12rem_1fr]">
            <figcaption>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-stone-100 text-xs font-medium">
                  TW
                </span>
                <div>
                  <p className="text-sm font-semibold">Theo Wilson</p>
                  <p className="text-xs text-stone-500">Verified customer</p>
                </div>
              </div>
            </figcaption>
            <div>
              <p
                aria-label="5 out of 5 stars"
                className="tracking-widest text-amber-700"
              >
                ★★★★★
              </p>
              <blockquote className="mt-3 text-lg leading-relaxed">
                A calm space and a kind team. I left with a plan I understood
                and felt comfortable asking every question on my list.
              </blockquote>
              <p className="mt-4 text-xs text-stone-500">
                Care planning / 2 October 2026
              </p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
