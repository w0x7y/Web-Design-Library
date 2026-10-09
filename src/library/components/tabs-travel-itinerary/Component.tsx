export default function TabsTravelItinerary() {
  return (
    <section
      aria-label="Porto travel itinerary"
      className="group w-72 rounded-2xl border border-slate-200 bg-white p-5 text-slate-900"
    >
      <p className="text-[10px] tracking-widest text-slate-500 uppercase">
        A long weekend in
      </p>
      <h2 className="mt-1 text-xl font-semibold text-emerald-950">
        Porto, Portugal
      </h2>
      <fieldset className="mt-4">
        <legend className="sr-only">Choose itinerary day</legend>
        <div className="grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1">
          <label className="flex h-8 cursor-pointer items-center justify-center rounded-md text-xs font-medium hover:bg-emerald-50 has-checked:bg-white has-checked:text-emerald-900 has-checked:shadow-xs has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-travel-itinerary-friday"
              type="radio"
              name="tabs-travel-itinerary-day"
              value="friday"
              defaultChecked
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            />
            Fri 16
          </label>
          <label className="flex h-8 cursor-pointer items-center justify-center rounded-md text-xs font-medium hover:bg-emerald-50 has-checked:bg-white has-checked:text-emerald-900 has-checked:shadow-xs has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-travel-itinerary-saturday"
              type="radio"
              name="tabs-travel-itinerary-day"
              value="saturday"
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            />
            Sat 17
          </label>
          <label className="flex h-8 cursor-pointer items-center justify-center rounded-md text-xs font-medium hover:bg-emerald-50 has-checked:bg-white has-checked:text-emerald-900 has-checked:shadow-xs has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-travel-itinerary-sunday"
              type="radio"
              name="tabs-travel-itinerary-day"
              value="sunday"
              className="sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            />
            Sun 18
          </label>
        </div>
      </fieldset>
      <section
        aria-label="Friday itinerary"
        className="mt-5 hidden group-has-[#tabs-travel-itinerary-friday:checked]:block"
      >
        <h3 className="text-sm font-semibold">Settle into the city</h3>
        <ol role="list" className="mt-4 space-y-4">
          <li className="flex gap-3">
            <time className="pt-0.5 font-mono text-[10px] text-slate-500">
              14:00
            </time>
            <div>
              <p className="text-xs font-medium">Check in at Casa Rosa</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Rua do Almada · 2 nights
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <time className="pt-0.5 font-mono text-[10px] text-slate-500">
              17:30
            </time>
            <div>
              <p className="text-xs font-medium">Walk along the Douro</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Start at Praça da Ribeira
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section
        aria-label="Saturday itinerary"
        className="mt-5 hidden group-has-[#tabs-travel-itinerary-saturday:checked]:block"
      >
        <h3 className="text-sm font-semibold">Bookshops &amp; blue tiles</h3>
        <ol role="list" className="mt-4 space-y-4">
          <li className="flex gap-3">
            <time className="pt-0.5 font-mono text-[10px] text-slate-500">
              09:30
            </time>
            <div>
              <p className="text-xs font-medium">Livraria Lello</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Timed entry · bring your ticket
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <time className="pt-0.5 font-mono text-[10px] text-slate-500">
              12:00
            </time>
            <div>
              <p className="text-xs font-medium">Lunch in Bolhão</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Market stalls and fresh bread
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section
        aria-label="Sunday itinerary"
        className="mt-5 hidden group-has-[#tabs-travel-itinerary-sunday:checked]:block"
      >
        <h3 className="text-sm font-semibold">One last slow morning</h3>
        <ol role="list" className="mt-4 space-y-4">
          <li className="flex gap-3">
            <time className="pt-0.5 font-mono text-[10px] text-slate-500">
              09:00
            </time>
            <div>
              <p className="text-xs font-medium">Coffee at Combi</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Espresso and a pastel de nata
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <time className="pt-0.5 font-mono text-[10px] text-slate-500">
              12:30
            </time>
            <div>
              <p className="text-xs font-medium">Train to the airport</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Line E from Trindade
              </p>
            </div>
          </li>
        </ol>
      </section>
      <p className="mt-5 border-t border-slate-200 pt-3 text-[10px] text-slate-500">
        A little planned. Plenty left to discover.
      </p>
    </section>
  )
}
