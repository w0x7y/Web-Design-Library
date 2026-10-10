// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function FaqKilnTimetable() {
  return (
    <section className="bg-rose-50 font-['Fraunces',ui-sans-serif,system-ui,sans-serif] text-rose-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <header>
            <p className="text-xs font-semibold uppercase tracking-[0.12em]">Ash & Slip / studio questions</p>
            <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">Clay takes its time.</h2>
            <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
              Here is how a week at our shared ceramics studio works, from your first bag of clay to
              collecting a finished piece.
            </p>
          </header>
          <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">
            We fire small batches, share our tools and keep a shelf for every maker. You do not need
            a wheel at home to begin.
          </p>
        </div>
        <dl className="mt-10 grid gap-6 border-y border-rose-300 py-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em]">Drop off</dt>
            <dd className="mt-2 text-[1.375rem]">Tuesday, by 6pm</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em]">Bisque firing</dt>
            <dd className="mt-2 text-[1.375rem]">Every Thursday</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.12em]">Collection</dt>
            <dd className="mt-2 text-[1.375rem]">Saturday, 10am–2pm</dd>
          </div>
        </dl>
        <div className="mt-10 grid gap-x-16 gap-y-0 lg:ml-[25%]">
          <details open className="group border-b border-rose-300">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950 [&::-webkit-details-marker]:hidden">
              <span>Can I bring work made at home?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-rose-900">
              <p>
                Yes, if you use clay from our approved list. Label each piece with your initials and
                the clay body. Unknown clay can melt and damage a shared kiln.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950 [&::-webkit-details-marker]:hidden">
              <span>What does a firing cost?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-rose-900">
              <p>
                We weigh your work before firing. Bisque is £6 per kilo and glaze firing is £8 per
                kilo, with a £5 minimum per batch. Studio glazes are included.
              </p>
            </div>
          </details>
          <details className="group border-b border-rose-300">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-950 [&::-webkit-details-marker]:hidden">
              <span>How long do you keep finished pieces?</span>
              <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
            </summary>
            <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-rose-900">
              <p>
                Your shelf is reserved for six weeks after our collection email. If you are away,
                reply with a collection date and we will hold the pieces for you.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}
