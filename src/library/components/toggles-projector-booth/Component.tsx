// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function TogglesProjectorBooth() {
  return (
    <section
      aria-labelledby="toggles-projector-booth-title"
      className="w-72 border-2 border-zinc-950 bg-zinc-950 p-5 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-zinc-100 sm:w-96"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-300 uppercase">FRAMEWELL / BOOTH 02</p>
      <h2 id="toggles-projector-booth-title" className="mt-3 text-[30px] leading-8 font-bold tracking-tight">Run the evening.</h2>
      <div className="mt-5 flex items-center gap-3 border-y border-zinc-600 py-3 text-xs">
        <span className="text-2xl font-semibold text-red-400">19:30</span>
        <span>Feature cue / screen 2</span>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <div>
          <label htmlFor="toggles-projector-booth-automation" className="block cursor-pointer text-xs font-medium">Auto-run cues</label>
          <p id="toggles-projector-booth-automation-hint" className="mt-1 text-xs leading-4 text-zinc-300">Lights, masking and credits.</p>
        </div>
        <input
          id="toggles-projector-booth-automation"
          name="toggles-projector-booth-automation"
          type="checkbox"
          role="switch"
          defaultChecked
          aria-describedby="toggles-projector-booth-automation-hint"
          className="relative h-10 w-[5.5rem] shrink-0 cursor-pointer appearance-none rounded-full border-2 border-zinc-400 bg-zinc-950 after:absolute after:top-1 after:left-1 after:size-7 after:rounded-full after:bg-zinc-400 after:content-[''] checked:border-red-600 checked:bg-red-600 checked:after:translate-x-12 checked:after:bg-zinc-950 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText] forced-colors:checked:after:bg-[CanvasText]"
        />
      </div>
      <div className="mt-5 flex items-center gap-3 text-xs">
        <input
          id="toggles-projector-booth-backup"
          name="toggles-projector-booth-backup"
          type="checkbox"
          defaultChecked
          aria-describedby="toggles-projector-booth-backup-hint"
          className="size-5 shrink-0 cursor-pointer accent-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        />
        <div>
          <label htmlFor="toggles-projector-booth-backup" className="block cursor-pointer text-xs font-medium">Keep a local cue copy</label>
          <p id="toggles-projector-booth-backup-hint" className="mt-1 text-xs leading-4 text-zinc-300">Stored on the booth console.</p>
        </div>
      </div>
    </section>
  )
}
