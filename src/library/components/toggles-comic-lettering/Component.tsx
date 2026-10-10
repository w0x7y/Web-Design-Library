// Fonts: Syne (https://fonts.google.com/specimen/Syne)
export default function TogglesComicLettering() {
  return (
    <section
      aria-labelledby="toggles-comic-lettering-title"
      className="group w-72 rounded-3xl border-2 border-zinc-950 bg-pink-200 p-5 font-['Syne',ui-sans-serif,system-ui,sans-serif] text-zinc-950 sm:w-80"
    >
      <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-800 uppercase">PANELKIND / LETTERING DESK</p>
      <h2 id="toggles-comic-lettering-title" className="mt-2 text-xl leading-6 font-bold">Give it a little drama.</h2>
      <div aria-label="Lettering preview: Zap!" className="mt-5 rounded-[50%] border-2 border-zinc-950 bg-yellow-200 px-4 py-5 text-center text-[38px] leading-10 font-bold group-has-[#toggles-comic-lettering-slant:checked]:italic group-has-[#toggles-comic-lettering-caps:checked]:uppercase">Zap!</div>
      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="toggles-comic-lettering-slant" className="block cursor-pointer text-sm font-semibold">Slant</label>
            <input
              id="toggles-comic-lettering-slant"
              name="toggles-comic-lettering-slant"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-comic-lettering-slant-hint"
              className="size-5 shrink-0 cursor-pointer accent-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            />
          </div>
          <p id="toggles-comic-lettering-slant-hint" className="mt-1 text-xs leading-4 text-zinc-800">An italic lean.</p>
        </div>
        <div>
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="toggles-comic-lettering-caps" className="block cursor-pointer text-sm font-semibold">Caps</label>
            <input
              id="toggles-comic-lettering-caps"
              name="toggles-comic-lettering-caps"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-comic-lettering-caps-hint"
              className="size-5 shrink-0 cursor-pointer accent-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            />
          </div>
          <p id="toggles-comic-lettering-caps-hint" className="mt-1 text-xs leading-4 text-zinc-800">Make it loud.</p>
        </div>
      </div>
      <p className="mt-4 text-[11px] leading-4 text-zinc-800">Preview updates as you toggle.</p>
    </section>
  )
}
