// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function TestimonialsKilnNotebook() {
  return (
    <section className="bg-orange-50 text-stone-950 font-['Fraunces',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-300 pb-6">
          <p className="text-xs font-semibold uppercase tracking-widest font-sans text-orange-800">Morrow Clay / Student notebook</p>
          <p className="font-sans text-xs text-stone-600">Autumn term, page 18</p>
        </header>
        <div className="mt-10 grid gap-12 md:grid-cols-[15rem_1fr]">
          <aside>
            <img className="size-28 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Portrait of ceramics student Lena" width={400} height={267} />
            <p className="mt-4 font-sans text-sm font-semibold">Lena Voss</p>
            <p className="mt-1 font-sans text-sm text-stone-600">Tuesday evening class</p>
            <p className="mt-1 font-sans text-sm text-stone-600">Six weeks at the wheel</p>
          </aside>
          <div>
            <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl">A bowl worth keeping.</h2>
            <figure>
              <blockquote className="mt-8 text-3xl leading-[1.3] sm:text-4xl sm:leading-[1.3]">“My first bowl leaned to the left. Jo helped me find the problem with my hands, then let me try again. I use the third one for breakfast every morning.”</blockquote>
              <figcaption className="mt-6 font-sans text-sm text-orange-800">Lena, on learning to centre clay</figcaption>
            </figure>
            <div className="mt-10 grid gap-8 border-t border-stone-300 pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest font-sans text-stone-600">In the studio</p>
                <p className="mt-3 text-lg leading-relaxed">“Small classes mean someone notices when your clay is too wet.”</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest font-sans text-stone-600">After the firing</p>
                <p className="mt-3 text-lg leading-relaxed">“They keep the wonky pieces. You can see how far you have come.”</p>
              </div>
            </div>
            <a className="mt-8 font-sans inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">See the autumn class timetable</a>
          </div>
        </div>
      </div>
    </section>
  )
}
