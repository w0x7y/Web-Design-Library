// Fonts: Rethink Sans (https://fonts.google.com/specimen/Rethink+Sans)
export default function TestimonialsGrid() {
  return (
    <section className="bg-white font-['Rethink_Sans',ui-sans-serif,system-ui,sans-serif] text-zinc-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        {/* Masonry from CSS columns. From 1024px the heading is the first item of the first column; below that it spans all columns */}
        <div className="gap-5 sm:columns-2 lg:columns-3">
          <div className="mb-5 max-w-xl break-inside-avoid pb-6 [column-span:all] sm:pb-10 lg:max-w-none lg:pr-4 lg:[column-span:none]">
            <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-[2.75rem]">
              Studios that stopped double-booking.
            </h2>
            <p className="mt-5 text-lg text-pretty text-zinc-600">
              Yoga rooms, climbing gyms, tattoo parlours and pottery studios take their bookings with Sundial. A few
              of them, in their own words.
            </p>
            <a
              href="#"
              className="group mt-6 inline-flex items-center gap-1.5 rounded-sm text-[0.9375rem] font-semibold transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
            >
              Read the customer stories
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5">
                <path d="M2.5 8h10M8.5 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* The one dark tile: the quote to read first */}
          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-950 p-6 text-white sm:p-8">
            <blockquote className="text-lg leading-relaxed text-pretty text-zinc-300 sm:text-xl">
              <p>
                <strong className="font-medium text-white">We stopped double-booking the Saturday class.</strong> Sundial holds a spot for twelve minutes while someone pays, then lets it go. That one rule paid for the whole year.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" alt="" width={400} height={600} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Adaeze Nwosu</span>
                <span className="block text-[0.8125rem] text-zinc-400">Owner, Lumen Yoga</span>
              </span>
            </figcaption>
          </figure>

          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-50 p-6 sm:p-7">
            <blockquote className="text-[0.9375rem] leading-relaxed text-pretty text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-950">Deposits happen without me.</strong> Clients pick a slot, pay the deposit and get the aftercare sheet the next morning. I just tattoo.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" alt="" width={400} height={600} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Jonah Weiss</span>
                <span className="block text-[0.8125rem] text-zinc-500">Tattoo artist, Night Owl</span>
              </span>
            </figcaption>
          </figure>

          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-50 p-6 sm:p-7">
            <blockquote className="text-[0.9375rem] leading-relaxed text-pretty text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-950">The waiver is part of the booking now.</strong> On a busy Friday the queue at the desk used to be twenty people deep. Now it is the two who forgot their shoes.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="" width={400} height={600} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Lucía Moreno</span>
                <span className="block text-[0.8125rem] text-zinc-500">Front desk, Altura Climbing</span>
              </span>
            </figcaption>
          </figure>

          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-50 p-6 sm:p-7">
            <blockquote className="text-[0.9375rem] leading-relaxed text-pretty text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-950">Our six-week courses fill in a day.</strong> When someone drops out, the waitlist emails the next person, and they almost always take the place.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="" width={400} height={267} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Freya Lindqvist</span>
                <span className="block text-[0.8125rem] text-zinc-500">Owner, Kiln & Wheel</span>
              </span>
            </figcaption>
          </figure>

          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-50 p-6 sm:p-7">
            <blockquote className="text-[0.9375rem] leading-relaxed text-pretty text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-950">I teach in three studios.</strong> Sundial is the only calendar that knows about all three.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" alt="" width={400} height={500} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Hana Kimura</span>
                <span className="block text-[0.8125rem] text-zinc-500">Pilates instructor</span>
              </span>
            </figcaption>
          </figure>

          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-50 p-6 sm:p-7">
            <blockquote className="text-[0.9375rem] leading-relaxed text-pretty text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-950">Members book from their phones between rounds.</strong> I check the class list on the same screen and know exactly how many pads to put out.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="" width={400} height={600} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Rafael Santos</span>
                <span className="block text-[0.8125rem] text-zinc-500">Head coach, Southpaw Boxing</span>
              </span>
            </figcaption>
          </figure>

          <figure className="mb-5 break-inside-avoid rounded-2xl bg-zinc-50 p-6 sm:p-7">
            <blockquote className="text-[0.9375rem] leading-relaxed text-pretty text-zinc-600">
              <p>
                <strong className="font-medium text-zinc-950">Parents rebook the whole term in two taps.</strong> Make-up lessons used to take a week of emails. Now families pick a free slot themselves, and I find out from the calendar.
              </p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="" width={400} height={600} className="size-10 shrink-0 rounded-full object-cover" />
              <span>
                <span className="block text-sm font-semibold">Marco Bellini</span>
                <span className="block text-[0.8125rem] text-zinc-500">Founder, Cadenza Music School</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
