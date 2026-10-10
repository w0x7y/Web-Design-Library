// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function TogglesBrailleEmbosser() {
  return (
    <section
      aria-labelledby="toggles-braille-embosser-title"
      className="w-72 border border-stone-600 bg-stone-950 p-5 font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] text-stone-100 sm:w-96"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-stone-300 uppercase">DOTSTEAD / EMBOSS QUEUE</p>
      <div className="mt-5 flex items-center gap-4">
        <svg aria-hidden="true" viewBox="0 0 40 56" fill="currentColor" className="h-14 w-10 shrink-0 text-stone-300">
          <circle cx={9} cy={9} r={4}></circle>
          <circle cx={29} cy={9} r={4}></circle>
          <circle cx={9} cy={27} r={4}></circle>
          <circle cx={29} cy={27} r={4}></circle>
          <circle cx={9} cy={45} r={4}></circle>
          <circle cx={29} cy={45} r={4}></circle>
        </svg>
        <div>
          <h2 id="toggles-braille-embosser-title" className="text-lg leading-6 font-medium">Prepare the proof.</h2>
          <p className="mt-2 text-[11px] text-stone-300">D-041 / 12 pages</p>
        </div>
      </div>
      <div className="mt-5 border-y border-stone-600">
        <div className="flex items-center justify-between gap-4 py-4">
          <div>
            <label htmlFor="toggles-braille-embosser-duplex" className="block cursor-pointer text-xs font-medium">Interpoint</label>
            <p id="toggles-braille-embosser-duplex-hint" className="mt-1 text-xs leading-4 text-stone-300">Emboss both sides.</p>
          </div>
          <input
            id="toggles-braille-embosser-duplex"
            name="toggles-braille-embosser-duplex"
            type="checkbox"
            role="switch"
            defaultChecked
            aria-describedby="toggles-braille-embosser-duplex-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-400 bg-stone-950 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-stone-400 after:content-[''] checked:border-stone-200 checked:bg-stone-200 checked:after:translate-x-5 checked:after:bg-stone-950 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-4 py-4">
          <div>
            <label htmlFor="toggles-braille-embosser-proof" className="block cursor-pointer text-xs font-medium">One-page proof</label>
            <p id="toggles-braille-embosser-proof-hint" className="mt-1 text-xs leading-4 text-stone-300">Pause after page one.</p>
          </div>
          <input
            id="toggles-braille-embosser-proof"
            name="toggles-braille-embosser-proof"
            type="checkbox"
            role="switch"
            aria-describedby="toggles-braille-embosser-proof-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-stone-400 bg-stone-950 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-stone-400 after:content-[''] checked:border-stone-200 checked:bg-stone-200 checked:after:translate-x-5 checked:after:bg-stone-950 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-200 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-stone-300">English UEB / contracted braille</p>
    </section>
  )
}
