// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function ButtonsLandscapePlan() {
  return (
    <section
      aria-label="Contour landscape plan review actions"
      className="bg-yellow-50 p-6 text-teal-950 w-72 sm:w-[24rem] font-['Newsreader',ui-sans-serif,system-ui,sans-serif]"
    >
      <p className="text-xs tracking-wider uppercase">Contour Studio</p>
      <h2 className="mt-5 flex items-baseline gap-3 text-4xl">
        <span aria-label="Concept sketch">Sketch</span>
        <span aria-hidden="true" className="text-lg text-teal-700">→</span>
        <span aria-label="Planting plan">Plan</span>
      </h2>
      <p className="mt-2 text-sm text-teal-800">Courtyard 08 · Planting plan review</p>
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          className="h-11 flex-1 rounded-full bg-teal-950 px-3 text-sm text-yellow-50 hover:bg-teal-800 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-950"
        >Approve plan</button>
        <button
          type="button"
          className="h-11 flex-1 rounded-full border border-teal-700 px-3 text-sm hover:bg-yellow-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-950"
        >Request edits</button>
      </div>
      <button
        type="button"
        className="mt-4 flex w-full items-center justify-between border-t border-teal-700 pt-3 text-sm hover:text-teal-700 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-950"
      >
        <span>Download planting plan</span>
        <span aria-hidden="true">↓</span>
      </button>
    </section>
  )
}
