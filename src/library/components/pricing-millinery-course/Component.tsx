// Fonts: Newsreader, DM Sans
export default function PricingMillineryCourse() {
  return (
    <section className="bg-rose-950 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-rose-100">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <header
          className="flex flex-wrap justify-between gap-4 border-b border-rose-300 pb-4 text-xs tracking-widest uppercase"
        >
          <p>Brim House / Millinery studio</p>
          <p>Next course / 11 November</p>
        </header>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2
              className="font-['Newsreader',ui-serif,Georgia,serif] text-5xl leading-[1.05] sm:text-7xl"
            >
              Make a hat that is yours.
            </h2>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed"
            >
              Learn to block, shape, wire and trim a felt hat in our six-person evening class. Leave with a
              finished piece fitted to your own measurements.
            </p>
            <p
              className="mt-10 font-['Newsreader',ui-serif,Georgia,serif] text-[5rem] leading-none tracking-tight text-rose-300 sm:text-[7rem]"
            >
              £280
            </p>
            <p className="mt-2 text-sm">Four Wednesday evenings / 18:00–20:30</p>
            <a
              className="mt-7 inline-flex min-h-12 items-center bg-rose-100 px-6 text-sm font-semibold text-rose-950 hover:bg-rose-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300"
              href="#"
            >
              Book your hat-making place
            </a>
            <p
              className="mt-5 max-w-md text-sm leading-relaxed"
            >
              No sewing experience needed. Six makers, one milliner. A £70 deposit holds your place; the
              balance is due a week before the first class.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-rose-300">What happens each week</h3>
            <ol className="mt-5" role="list">
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-rose-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-rose-300"
                  aria-hidden="true"
                >
                  01
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Find your fit</h4>
                  <p className="mt-2 text-sm leading-relaxed">Measure your head and choose a felt hood and block.</p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-rose-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-rose-300"
                  aria-hidden="true"
                >
                  02
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Block the crown</h4>
                  <p className="mt-2 text-sm leading-relaxed">Steam, stretch and pin the felt over a wooden block.</p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-rose-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-rose-300"
                  aria-hidden="true"
                >
                  03
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Shape the brim</h4>
                  <p className="mt-2 text-sm leading-relaxed">Cut your brim and add wire, binding and a headband.</p>
                </div>
              </li>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-rose-300 py-5">
                <span
                  className="font-['Newsreader',ui-serif,Georgia,serif] text-3xl text-rose-300"
                  aria-hidden="true"
                >
                  04
                </span>
                <div>
                  <h4 className="font-['Newsreader',ui-serif,Georgia,serif] text-2xl">Make the trim</h4>
                  <p className="mt-2 text-sm leading-relaxed">Stitch a ribbon, finish the lining and fit your hat.</p>
                </div>
              </li>
            </ol>
            <details className="border-y border-rose-300 py-5">
              <summary
                className="cursor-pointer text-sm font-semibold hover:text-rose-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300"
              >
                Felt, blocks and trimmings included
              </summary>
              <p
                className="mt-2 text-sm leading-relaxed"
              >
                Your fee includes one wool-felt hood, ribbon, lining and use of our blocks and tools. Take
                your finished hat home after the final class. Premium trims cost extra.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
