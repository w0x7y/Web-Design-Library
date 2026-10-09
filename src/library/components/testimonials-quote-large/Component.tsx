// Fonts: Bodoni Moda (https://fonts.google.com/specimen/Bodoni+Moda)
export default function TestimonialsQuoteLarge() {
  return (
    <section className="bg-red-950 font-['Bodoni_Moda',ui-serif,Georgia,serif] text-red-50 antialiased">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32 lg:px-8 lg:py-40">
        <figure className="relative lg:pl-32">
          {/* The opening quote mark hangs in the margin from 1024px */}
          <span
            aria-hidden="true"
            className="block h-16 text-[8rem] leading-none text-red-400 sm:h-20 sm:text-[10rem] lg:absolute lg:-top-4 lg:left-0 lg:text-[13rem]"
          >
            &ldquo;
          </span>
          <blockquote className="text-[2rem] leading-[1.12] tracking-[-0.015em] text-pretty sm:text-5xl sm:leading-[1.08] lg:text-[4rem]">
            <p>
              Galley gave the newsroom its evenings back. We stopped fighting the CMS and went back to{' '}
              <em className="text-red-200">arguing about commas</em>, which is the job.
            </p>
          </blockquote>
          <figcaption className="mt-12 flex flex-col gap-6 border-t border-red-50/20 pt-6 sm:flex-row sm:items-end sm:justify-between lg:mt-16">
            <div>
              <p className="text-xl font-medium">Margit Ekholm</p>
              <p className="mt-1 text-[0.9375rem] text-red-200">Editor-in-chief, The Northern Review</p>
            </div>
            <a
              href="#"
              className="group inline-flex w-fit items-center gap-2 text-[0.9375rem] font-medium underline decoration-red-50/40 decoration-1 underline-offset-[0.3em] transition-colors hover:decoration-red-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-50"
            >
              Read how they moved to Galley
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.25" className="size-4 transition-transform group-hover:translate-x-0.5">
                <path d="M2 8h11M9 4l4 4-4 4" />
              </svg>
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
