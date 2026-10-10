// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function TabsVineyardParcels() {
  return (
    <section
      aria-label="Planche Nine vineyard parcels"
      className="group w-72 sm:w-[352px] font-['Instrument_Serif',ui-serif,Georgia,serif] border border-stone-300 bg-stone-50 p-4 text-stone-900"
    >
      <header className="flex items-center justify-between text-xs">
        <p>Planche Nine</p>
        <span>Estate notes / 2026</span>
      </header>
      <img
        src="https://images.unsplash.com/photo-1504279577054-acfeccf8fc52?w=800&q=80"
        alt="Rows of vines on a hillside in warm morning sunlight"
        width="800"
        height="600"
        className="mt-3 h-24 w-full object-cover"
      />
      <fieldset className="my-3 flex gap-4">
        <legend className="sr-only">Choose vineyard parcel</legend>
        <label
          id="tabs-vineyard-parcels-east-label"
          className="flex flex-1 cursor-pointer items-center justify-between border-b border-stone-500 py-2 text-base hover:text-rose-900 has-checked:border-rose-900 has-checked:text-rose-900 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-rose-900"
        >
          <input
            id="tabs-vineyard-parcels-east"
            type="radio"
            name="tabs-vineyard-parcels-view"
            value="east"
            defaultChecked
            aria-controls="tabs-vineyard-parcels-east-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          East slope
        </label>
        <label
          id="tabs-vineyard-parcels-west-label"
          className="flex flex-1 cursor-pointer items-center justify-between border-b border-stone-500 py-2 text-base hover:text-rose-900 has-checked:border-rose-900 has-checked:text-rose-900 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-rose-900"
        >
          <input
            id="tabs-vineyard-parcels-west"
            type="radio"
            name="tabs-vineyard-parcels-view"
            value="west"
            aria-controls="tabs-vineyard-parcels-west-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          West terrace
        </label>
      </fieldset>
      <section
        id="tabs-vineyard-parcels-east-panel"
        aria-labelledby="tabs-vineyard-parcels-east-label"
        className="hidden group-has-[#tabs-vineyard-parcels-east:checked]:block"
      >
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[28px] leading-8">East slope</h3>
          <span className="text-xs">2.4 hectares</span>
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-3 border-t border-stone-300 pt-3 text-sm">
          <div>
            <dt className="text-stone-600">Soil</dt>
            <dd>Limestone</dd>
          </div>
          <div>
            <dt className="text-stone-600">Aspect</dt>
            <dd>Morning sun</dd>
          </div>
        </dl>
      </section>
      <section
        id="tabs-vineyard-parcels-west-panel"
        aria-labelledby="tabs-vineyard-parcels-west-label"
        className="hidden group-has-[#tabs-vineyard-parcels-west:checked]:block"
      >
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[28px] leading-8">West terrace</h3>
          <span className="text-xs">1.8 hectares</span>
        </div>
        <dl className="mt-3 grid grid-cols-2 gap-3 border-t border-stone-300 pt-3 text-sm">
          <div>
            <dt className="text-stone-600">Soil</dt>
            <dd>Clay loam</dd>
          </div>
          <div>
            <dt className="text-stone-600">Aspect</dt>
            <dd>Evening sun</dd>
          </div>
        </dl>
      </section>
    </section>
  )
}
