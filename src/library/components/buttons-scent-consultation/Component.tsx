// Fonts: Instrument Serif (https://fonts.google.com/specimen/Instrument+Serif)
export default function ButtonsScentConsultation() {
  return (
    <section
      aria-label="Oris Vale perfumery actions"
      className="rounded-t-[5rem] bg-rose-950 px-6 pt-8 pb-6 text-rose-100 w-72 sm:w-[21rem] font-['Instrument_Serif',ui-sans-serif,system-ui,sans-serif]"
    >
      <p className="text-center text-sm tracking-widest uppercase">Oris Vale</p>
      <div className="mt-5 flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80"
          alt="Black perfume bottle on a pink background"
          width="800"
          height="600"
          className="h-24 w-16 shrink-0 rounded-t-full object-cover"
        />
        <h2 className="text-3xl leading-none">A scent of your own.</h2>
      </div>
      <button
        type="button"
        className="mt-6 flex h-14 w-full items-center justify-center rounded-[50%] border border-rose-300 text-lg hover:bg-rose-900 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200"
      >Arrange a scent consultation</button>
      <div className="mt-3 flex justify-between gap-3">
        <button
          type="button"
          className="py-2 text-sm underline underline-offset-4 hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200"
        >Explore notes</button>
        <button
          type="button"
          className="py-2 text-sm underline underline-offset-4 hover:text-white cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-200"
        >Order a sample</button>
      </div>
    </section>
  )
}
