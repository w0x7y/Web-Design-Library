// Fonts: Newsreader
export default function PricingCeramicsCourse() {
  return (
    <section className="bg-orange-950 text-orange-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <header
          className="flex flex-wrap justify-between gap-4 border-b border-orange-300 pb-4 text-xs tracking-widest uppercase"
        >
          <p>Kiln No. 6 / Clay school</p>
          <p>Next course / 4 November</p>
        </header>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2
              className="font-['Newsreader',ui-serif,Georgia,serif] text-5xl leading-[1.05] sm:text-7xl"
            >
              Four weeks at the wheel.
            </h2>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed"
            >
              Learn to centre, throw, trim and glaze in our six-person evening class. Leave with a small
              collection made by your own hands.
            </p>
            <p
              className="mt-10 font-['Newsreader',ui-serif,Georgia,serif] text-[5rem] leading-none tracking-tight text-orange-300 sm:text-[7rem]"
            >
              £240
            </p>
            <p className="mt-2 text-sm">Four Wednesday evenings / 18:30–21:00</p>
            <a
              className="mt-7 inline-flex min-h-12 items-center bg-orange-100 px-6 text-sm font-semibold text-orange-950 hover:bg-orange-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              href="#"
            >
              Book a place at the wheel
            </a>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed"
            >
              All levels welcome. Six wheels, one tutor. A £60 deposit holds your place; the balance is due a
              week before we begin.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-orange-300">What happens each week</h3>
            <ol className="mt-5" role="list">
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-orange-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-orange-300"
                  aria-hidden="true"
                >
                  01
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Find your centre</h4>
                  <p className="mt-2 text-sm leading-relaxed">Wedging, centring and your first cylinder.</p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-orange-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-orange-300"
                  aria-hidden="true"
                >
                  02
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Give it a shape</h4>
                  <p className="mt-2 text-sm leading-relaxed">Bowls, curves and keeping your walls even.</p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-orange-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-orange-300"
                  aria-hidden="true"
                >
                  03
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Finish the foot</h4>
                  <p className="mt-2 text-sm leading-relaxed">Trim leather-hard pieces and add a handle.</p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-orange-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-orange-300"
                  aria-hidden="true"
                >
                  04
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Choose your glaze</h4>
                  <p className="mt-2 text-sm leading-relaxed">Test tiles, glazing and a look inside the kiln.</p>
                </div>
              </li>
            </ol>
            <details className="border-y border-orange-300 py-5">
              <summary
                className="cursor-pointer text-sm font-semibold hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
              >
                Clay, tools and firing are included
              </summary>
              <p
                className="mt-2 text-sm leading-relaxed"
              >
                Your fee includes 5kg of stoneware, shared tools, glazes and two firings. Collect finished
                pieces three weeks after the final class. Extra clay is £8 per kilogram.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
