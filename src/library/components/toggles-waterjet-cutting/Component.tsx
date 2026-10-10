// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function TogglesWaterjetCutting() {
  return (
    <section
      aria-labelledby="toggles-waterjet-cutting-title"
      className="w-72 border-2 border-black bg-orange-400 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-black sm:w-96"
    >
      <div className="border-b-2 border-black p-4">
        <p className="text-[10px] font-semibold tracking-[0.12em] text-black uppercase">KERFLINE / JOB K-218</p>
        <h2 id="toggles-waterjet-cutting-title" className="mt-2 text-[28px] leading-8 font-bold tracking-tight">After the cut.</h2>
        <p className="mt-2 text-xs">3mm aluminum / 24 brackets</p>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="border-2 border-black bg-white p-3 has-checked:bg-black has-checked:text-white">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold">01</span>
            <input
              id="toggles-waterjet-cutting-deburr"
              name="toggles-waterjet-cutting-deburr"
              type="checkbox"
              defaultChecked
              aria-describedby="toggles-waterjet-cutting-deburr-hint"
              className="size-5 shrink-0 cursor-pointer accent-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            />
          </div>
          <label htmlFor="toggles-waterjet-cutting-deburr" className="mt-4 block cursor-pointer text-sm font-bold">Deburr edges</label>
          <p id="toggles-waterjet-cutting-deburr-hint" className="mt-2 text-xs leading-4">Remove the sharp cut edge.</p>
        </div>
        <div className="border-2 border-black bg-white p-3 has-checked:bg-black has-checked:text-white">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-bold">02</span>
            <input
              id="toggles-waterjet-cutting-mark"
              name="toggles-waterjet-cutting-mark"
              type="checkbox"
              aria-describedby="toggles-waterjet-cutting-mark-hint"
              className="size-5 shrink-0 cursor-pointer accent-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
            />
          </div>
          <label htmlFor="toggles-waterjet-cutting-mark" className="mt-4 block cursor-pointer text-sm font-bold">Part marking</label>
          <p id="toggles-waterjet-cutting-mark-hint" className="mt-2 text-xs leading-4">Etch the drawing reference.</p>
        </div>
      </div>
      <p className="border-t-2 border-black px-4 py-3 text-xs font-medium">Finishing is applied to every part.</p>
    </section>
  )
}
