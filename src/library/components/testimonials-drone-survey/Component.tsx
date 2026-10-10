// Fonts: Newsreader (https://fonts.google.com/specimen/Newsreader)
export default function TestimonialsDroneSurvey() {
  return (
    <section className="bg-slate-950 text-slate-100 font-['Newsreader',ui-serif,Georgia,serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest font-sans text-sky-200">Gridwing Surveys / Client debriefs</p>
          <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">See the whole site clearly.</h2>
        </header>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <figure>
            <img className="aspect-[4/5] w-full object-cover" src="https://images.unsplash.com/photo-1506947411487-a56738267384?w=1600&q=80" alt="Drone operator holding a quadcopter before a field flight" width={1600} height={1069} />
            <figcaption className="mt-4 font-sans text-xs text-slate-300">Field flight / Ground checks before takeoff</figcaption>
          </figure>
          <div className="flex flex-col justify-center gap-10">
            <figure className="border-t border-slate-700 pt-6">
              <p className="font-sans text-xs uppercase tracking-widest text-sky-200">00:24 / Terrain survey</p>
              <blockquote className="mt-5 text-3xl leading-[1.3] sm:text-4xl">“We could compare the ground levels before the next design meeting. The survey files opened in our usual software, with the control points clearly labelled.”</blockquote>
              <figcaption className="mt-5 font-sans text-sm text-slate-300">Felix Moreno / Civil engineer</figcaption>
            </figure>
            <figure className="border-t border-slate-700 pt-6">
              <p className="font-sans text-xs uppercase tracking-widest text-sky-200">01:36 / Progress mapping</p>
              <blockquote className="mt-5 text-3xl leading-[1.3] sm:text-4xl">“The repeat flight used the same views as last month. We could check the earthworks together without asking everyone to drive out to the site.”</blockquote>
              <figcaption className="mt-5 font-sans text-sm text-slate-300">Tara Singh / Construction manager</figcaption>
            </figure>
            <a className="font-sans inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current text-sky-200" href="#">See the survey deliverables</a>
          </div>
        </div>
      </div>
    </section>
  )
}
