// Fonts: Gloock, Schibsted Grotesk (https://fonts.google.com/specimen/Gloock)
export default function FeaturesAlternating() {
  return (
    <section className="bg-white font-['Schibsted_Grotesk',ui-sans-serif,system-ui,sans-serif] text-neutral-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-['Gloock',ui-serif,Georgia,serif] text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl lg:col-span-7 lg:text-7xl">
            An office that knows who is coming in.
          </h2>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg text-pretty text-neutral-600">
              Atrium is desk and room booking for teams that come in two or three days a week. It keeps the floor plan
              honest, so the office is ready for whoever turns up.
            </p>
            <a
              href="#"
              className="group mt-5 inline-flex items-center gap-2 text-[0.9375rem] font-semibold underline decoration-neutral-950/25 decoration-1 underline-offset-[0.35em] transition-colors hover:decoration-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
            >
              Take the two-minute tour
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 transition-transform group-hover:translate-x-0.5">
                <path d="M2 8h11M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 space-y-20 sm:mt-20 lg:mt-28 lg:space-y-32">
          {/* Row 1: photo left, text right */}
          <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <figure className="lg:col-span-7">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&q=80"
                alt="A long white desk against floor-to-ceiling windows, with a tall potted plant and one open laptop"
                width={1600}
                height={1067}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-3 text-[0.8125rem] text-neutral-500">
                Fourth floor, 8:40 a.m. Two window desks still free.
              </figcaption>
            </figure>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-['Gloock',ui-serif,Georgia,serif] text-3xl leading-[1.08] tracking-[-0.01em] text-balance sm:text-4xl lg:text-[2.5rem]">
                The desk by the window, booked from bed.
              </h3>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-pretty text-neutral-600">
                Pick a desk on a live floor plan up to two weeks ahead. Atrium remembers the spots you like and the people
                you sit near.
              </p>
              <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-neutral-500">Books up to</dt>
                  <dd className="text-right font-medium">14 days ahead</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-neutral-500">Check-in</dt>
                  <dd className="text-right font-medium">QR code or badge tap</dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Row 2: text left, portrait photo right, the text sitting on the photo's baseline */}
          <article className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            <figure className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
                alt="Five colleagues working on laptops around a wooden table by a window"
                width={1600}
                height={1067}
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
              <figcaption className="mt-3 text-[0.8125rem] text-neutral-500">
                Thursday is the design team&rsquo;s anchor day. Nine of eleven booked in.
              </figcaption>
            </figure>
            <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:pb-9">
              <h3 className="font-['Gloock',ui-serif,Georgia,serif] text-3xl leading-[1.08] tracking-[-0.01em] text-balance sm:text-4xl lg:text-[2.5rem]">
                See who is in before you commute.
              </h3>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-pretty text-neutral-600">
                Follow the people you work with and Atrium shows the days they are booked in, so the trip is worth it.
                Team leads can set an anchor day and hold a block of desks together.
              </p>
              <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-neutral-500">Anchor days</dt>
                  <dd className="text-right font-medium">Set per team</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-neutral-500">Calendar sync</dt>
                  <dd className="text-right font-medium">Both directions</dd>
                </div>
              </dl>
            </div>
          </article>

          {/* Row 3: wide photo left, text right */}
          <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <figure className="lg:col-span-8">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                alt="An empty open-plan office with grey walls, a kitchen at one end and a long corridor of glass rooms"
                width={1600}
                height={1068}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
              />
              <figcaption className="mt-3 text-[0.8125rem] text-neutral-500">
                Room 4B went back on the board at 10:10, when nobody checked in.
              </figcaption>
            </figure>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-['Gloock',ui-serif,Georgia,serif] text-3xl leading-[1.08] tracking-[-0.01em] text-balance sm:text-4xl lg:text-[2.5rem]">
                Rooms that free themselves.
              </h3>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-pretty text-neutral-600">
                If nobody checks in within ten minutes, the booking lapses and the room returns to the board. The big
                room stops being held by a meeting that ended last week.
              </p>
              <dl className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-neutral-500">Released after</dt>
                  <dd className="text-right font-medium">10 minutes, or your rule</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-neutral-500">Door displays</dt>
                  <dd className="text-right font-medium">Any tablet</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
