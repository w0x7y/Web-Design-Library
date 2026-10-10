// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function ButtonsPuppetRehearsal() {
  return (
    <section
      aria-label="Little Pulley rehearsal actions"
      className="rounded-2xl bg-emerald-950 p-5 text-amber-100 w-72 sm:w-[23rem] font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif]"
    >
      <p className="text-xs font-semibold tracking-wider uppercase">Little Pulley / puppet theatre</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">The moon thief</h2>
      <p className="mt-1 text-xs text-emerald-200">Rehearsal · Act I, scene 3</p>
      <div className="mt-5 flex items-start">
        <button
          type="button"
          className="flex h-20 flex-[3] flex-col items-start justify-center gap-1 rounded-[1.5rem_0_1.5rem_1.5rem] bg-amber-200 px-4 text-left text-emerald-950 hover:bg-amber-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          <span className="text-lg font-semibold">Raise curtain</span>
          <span className="text-xs">Cue 07 · Go</span>
        </button>
        <button
          type="button"
          aria-label="Reset scene 3"
          className="mt-5 flex h-20 flex-[2] flex-col items-start justify-center gap-1 rounded-[0_1.5rem_1.5rem_0] bg-pink-200 px-3 text-left text-emerald-950 hover:bg-pink-100 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          <span className="text-lg font-semibold">Reset</span>
          <span className="text-xs">Scene 3</span>
        </button>
      </div>
      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between border-b border-emerald-300 pb-2 text-sm hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
      >
        <span>Open prompt book</span>
        <span aria-hidden="true">↗</span>
      </button>
    </section>
  )
}
