// Fonts: Radio Canada (https://fonts.google.com/specimen/Radio+Canada)
export default function FaqAccordion() {
  return (
    <section className="bg-white font-['Radio_Canada',ui-sans-serif,system-ui,sans-serif] text-zinc-950 antialiased">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-32">
        <div className="lg:col-span-4">
          <h2 className="text-[2.5rem] leading-none font-semibold tracking-[-0.03em] text-balance font-stretch-semi-condensed sm:text-5xl">
            Before you hand us your photos
          </h2>
          <p className="mt-5 max-w-sm text-[1.0625rem] leading-relaxed text-pretty text-zinc-600">
            Straight answers about storage, privacy and leaving. If your question is not here, write to us and a person
            replies within one working day.
          </p>
          <a
            href="#"
            className="group mt-6 inline-flex items-center gap-2 rounded-sm text-[1.0625rem] font-semibold underline decoration-zinc-300 decoration-2 underline-offset-[0.3em] transition-colors hover:decoration-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            Write to support
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5">
              <path d="M2.5 8h10M8.5 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Native disclosures: no JavaScript. The shared name makes them an exclusive accordion where supported. */}
        <div className="border-t border-zinc-200 lg:col-span-7 lg:col-start-6">
          <details name="faq-accordion" open className="group border-b border-zinc-200">
            <summary className="group/summary flex cursor-pointer list-none items-start justify-between gap-6 rounded-md py-6 text-lg leading-7 font-medium tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:text-xl [&::-webkit-details-marker]:hidden">
              What happens to my photos if I stop paying?
              <span aria-hidden="true" className="relative -mt-0.5 size-8 shrink-0 rounded-full ring-1 ring-zinc-300 transition-colors ring-inset group-open:bg-zinc-950 group-open:ring-zinc-950 group-hover/summary:ring-zinc-950">
                <span className="absolute inset-x-2.5 top-[0.9375rem] h-0.5 rounded-full bg-zinc-950 transition-colors group-open:bg-white" />
                <span className="absolute inset-y-2.5 left-[0.9375rem] w-0.5 rounded-full bg-zinc-950 transition-[rotate,background-color] duration-200 group-open:rotate-90 group-open:bg-white" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-7 leading-relaxed text-pretty text-zinc-600 sm:pr-14">
              Nothing is deleted. Your library turns read-only for twelve months, so you can still browse, share and
              download everything at full resolution. After that we email you twice before anything is removed.
            </p>
          </details>
          <details name="faq-accordion" className="group border-b border-zinc-200">
            <summary className="group/summary flex cursor-pointer list-none items-start justify-between gap-6 rounded-md py-6 text-lg leading-7 font-medium tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:text-xl [&::-webkit-details-marker]:hidden">
              Do you compress my originals?
              <span aria-hidden="true" className="relative -mt-0.5 size-8 shrink-0 rounded-full ring-1 ring-zinc-300 transition-colors ring-inset group-open:bg-zinc-950 group-open:ring-zinc-950 group-hover/summary:ring-zinc-950">
                <span className="absolute inset-x-2.5 top-[0.9375rem] h-0.5 rounded-full bg-zinc-950 transition-colors group-open:bg-white" />
                <span className="absolute inset-y-2.5 left-[0.9375rem] w-0.5 rounded-full bg-zinc-950 transition-[rotate,background-color] duration-200 group-open:rotate-90 group-open:bg-white" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-7 leading-relaxed text-pretty text-zinc-600 sm:pr-14">
              No. Shoebox keeps the exact file you upload, byte for byte, including RAW, HEIC and ProRes video. We make
              smaller previews for browsing, but the original is what you download.
            </p>
          </details>
          <details name="faq-accordion" className="group border-b border-zinc-200">
            <summary className="group/summary flex cursor-pointer list-none items-start justify-between gap-6 rounded-md py-6 text-lg leading-7 font-medium tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:text-xl [&::-webkit-details-marker]:hidden">
              Who can see my library?
              <span aria-hidden="true" className="relative -mt-0.5 size-8 shrink-0 rounded-full ring-1 ring-zinc-300 transition-colors ring-inset group-open:bg-zinc-950 group-open:ring-zinc-950 group-hover/summary:ring-zinc-950">
                <span className="absolute inset-x-2.5 top-[0.9375rem] h-0.5 rounded-full bg-zinc-950 transition-colors group-open:bg-white" />
                <span className="absolute inset-y-2.5 left-[0.9375rem] w-0.5 rounded-full bg-zinc-950 transition-[rotate,background-color] duration-200 group-open:rotate-90 group-open:bg-white" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-7 leading-relaxed text-pretty text-zinc-600 sm:pr-14">
              Only you and the people you invite. Photos are encrypted in transit and at rest, our staff cannot open
              them, and your library is never used to train models or target ads.
            </p>
          </details>
          <details name="faq-accordion" className="group border-b border-zinc-200">
            <summary className="group/summary flex cursor-pointer list-none items-start justify-between gap-6 rounded-md py-6 text-lg leading-7 font-medium tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:text-xl [&::-webkit-details-marker]:hidden">
              Can my family share one plan?
              <span aria-hidden="true" className="relative -mt-0.5 size-8 shrink-0 rounded-full ring-1 ring-zinc-300 transition-colors ring-inset group-open:bg-zinc-950 group-open:ring-zinc-950 group-hover/summary:ring-zinc-950">
                <span className="absolute inset-x-2.5 top-[0.9375rem] h-0.5 rounded-full bg-zinc-950 transition-colors group-open:bg-white" />
                <span className="absolute inset-y-2.5 left-[0.9375rem] w-0.5 rounded-full bg-zinc-950 transition-[rotate,background-color] duration-200 group-open:rotate-90 group-open:bg-white" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-7 leading-relaxed text-pretty text-zinc-600 sm:pr-14">
              Yes. The Family plan covers up to six people. Everyone gets a private library, and you can add shared
              albums that the whole family can upload to.
            </p>
          </details>
          <details name="faq-accordion" className="group border-b border-zinc-200">
            <summary className="group/summary flex cursor-pointer list-none items-start justify-between gap-6 rounded-md py-6 text-lg leading-7 font-medium tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:text-xl [&::-webkit-details-marker]:hidden">
              Where are my photos stored?
              <span aria-hidden="true" className="relative -mt-0.5 size-8 shrink-0 rounded-full ring-1 ring-zinc-300 transition-colors ring-inset group-open:bg-zinc-950 group-open:ring-zinc-950 group-hover/summary:ring-zinc-950">
                <span className="absolute inset-x-2.5 top-[0.9375rem] h-0.5 rounded-full bg-zinc-950 transition-colors group-open:bg-white" />
                <span className="absolute inset-y-2.5 left-[0.9375rem] w-0.5 rounded-full bg-zinc-950 transition-[rotate,background-color] duration-200 group-open:rotate-90 group-open:bg-white" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-7 leading-relaxed text-pretty text-zinc-600 sm:pr-14">
              In two data centres, in two different countries, inside the region you pick when you sign up: the EU, the
              US or Australia. Every file is kept in both.
            </p>
          </details>
          <details name="faq-accordion" className="group border-b border-zinc-200">
            <summary className="group/summary flex cursor-pointer list-none items-start justify-between gap-6 rounded-md py-6 text-lg leading-7 font-medium tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:text-xl [&::-webkit-details-marker]:hidden">
              How do I get everything out?
              <span aria-hidden="true" className="relative -mt-0.5 size-8 shrink-0 rounded-full ring-1 ring-zinc-300 transition-colors ring-inset group-open:bg-zinc-950 group-open:ring-zinc-950 group-hover/summary:ring-zinc-950">
                <span className="absolute inset-x-2.5 top-[0.9375rem] h-0.5 rounded-full bg-zinc-950 transition-colors group-open:bg-white" />
                <span className="absolute inset-y-2.5 left-[0.9375rem] w-0.5 rounded-full bg-zinc-950 transition-[rotate,background-color] duration-200 group-open:rotate-90 group-open:bg-white" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-7 leading-relaxed text-pretty text-zinc-600 sm:pr-14">
              Open Settings and choose Export. You get one archive with your albums as folders, and dates, captions and
              places kept in each file. It works on every plan, and for a year after you cancel.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
