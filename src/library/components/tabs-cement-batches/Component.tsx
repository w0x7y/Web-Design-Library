// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function TabsCementBatches() {
  return (
    <section
      aria-label="Castline concrete batch tests"
      className="group w-72 sm:w-[352px] font-['Archivo',ui-sans-serif,system-ui,sans-serif] border-2 border-zinc-800 bg-zinc-950 p-4 text-zinc-100"
    >
      <header className="flex items-baseline justify-between border-b-2 border-yellow-300 pb-3">
        <h2 className="text-lg font-black tracking-tight uppercase">Castline</h2>
        <span className="text-[10px] font-bold">LAB / 04</span>
      </header>
      <fieldset className="mt-4 grid gap-2">
        <legend className="sr-only">Choose concrete batch</legend>
        <label
          id="tabs-cement-batches-c41-label"
          className="flex cursor-pointer items-center justify-between border border-zinc-500 px-3 py-2 text-xs font-bold hover:bg-zinc-800 has-checked:border-yellow-300 has-checked:bg-yellow-300 has-checked:text-zinc-950 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-yellow-300"
        >
          <input
            id="tabs-cement-batches-c41"
            type="radio"
            name="tabs-cement-batches-view"
            value="c41"
            defaultChecked
            aria-controls="tabs-cement-batches-c41-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span>01 / C41</span>
          <span>09:20 cast</span>
        </label>
        <label
          id="tabs-cement-batches-c42-label"
          className="flex cursor-pointer items-center justify-between border border-zinc-500 px-3 py-2 text-xs font-bold hover:bg-zinc-800 has-checked:border-yellow-300 has-checked:bg-yellow-300 has-checked:text-zinc-950 forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-yellow-300"
        >
          <input
            id="tabs-cement-batches-c42"
            type="radio"
            name="tabs-cement-batches-view"
            value="c42"
            aria-controls="tabs-cement-batches-c42-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          <span>02 / C42</span>
          <span>10:05 cast</span>
        </label>
      </fieldset>
      <section
        id="tabs-cement-batches-c41-panel"
        aria-labelledby="tabs-cement-batches-c41-label"
        className="hidden group-has-[#tabs-cement-batches-c41:checked]:block"
      >
        <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-2 border-b border-zinc-700 pb-4">
          <div>
            <p className="text-[10px] tracking-widest text-zinc-400 uppercase">28-day strength</p>
            <p className="mt-1 text-4xl font-black">42.8</p>
          </div>
          <p className="pb-1 text-xs text-zinc-400">MPa</p>
        </div>
        <p className="mt-3 text-xs text-zinc-300">Cube set 041 · tested 10 October</p>
        <p className="mt-2 text-xs font-semibold text-yellow-300">PASS / 35 MPa target</p>
      </section>
      <section
        id="tabs-cement-batches-c42-panel"
        aria-labelledby="tabs-cement-batches-c42-label"
        className="hidden group-has-[#tabs-cement-batches-c42:checked]:block"
      >
        <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-2 border-b border-zinc-700 pb-4">
          <div>
            <p className="text-[10px] tracking-widest text-zinc-400 uppercase">28-day strength</p>
            <p className="mt-1 text-4xl font-black">39.6</p>
          </div>
          <p className="pb-1 text-xs text-zinc-400">MPa</p>
        </div>
        <p className="mt-3 text-xs text-zinc-300">Cube set 042 · tested 10 October</p>
        <p className="mt-2 text-xs font-semibold text-yellow-300">PASS / 35 MPa target</p>
      </section>
    </section>
  )
}
