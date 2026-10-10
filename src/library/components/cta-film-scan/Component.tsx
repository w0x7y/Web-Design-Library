// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function CtaFilmScan() {
  return (
    <section className="bg-zinc-950 text-zinc-100 font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-wrap justify-between gap-3 pb-6 text-xs uppercase tracking-wider">
          <p>Framewell / Film lab</p>
          <p>Mail-in scans / No. 120</p>
        </div>
        <div className="grid bg-stone-100 text-zinc-950 lg:grid-cols-[.8fr_1.2fr]">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80"
            alt="Vintage instant camera on a pale tabletop"
            width={800}
            height={533}
            className="h-56 w-full object-cover sm:h-72 lg:h-full"
          />
          <div className="p-6 sm:p-10">
            <p className="text-xs uppercase tracking-wider text-zinc-600">
              The pictures are already there.
            </p>
            <h2 className="mt-5 text-[2rem] leading-[1.15] tracking-tight sm:text-[2.75rem]">
              Give that drawer of negatives a second life.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-700">
              Send us your film. We scan each frame, correct the colour by hand
              and return your originals with files ready to print.
            </p>
            <ul role="list" className="mt-7 flex flex-wrap gap-3 text-xs">
              <li className="border border-zinc-400 px-3 py-2">35mm</li>
              <li className="border border-zinc-400 px-3 py-2">120 film</li>
              <li className="border border-zinc-400 px-3 py-2">
                From £9 / roll
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-5 text-zinc-300">
            Tracked return post. TIFF + JPEG files. Most orders leave the lab in
            five working days.
          </p>
          <a
            href="#"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-none bg-stone-100 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Order a film mailer
          </a>
        </div>
      </div>
    </section>
  )
}
