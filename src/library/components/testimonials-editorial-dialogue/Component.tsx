export default function TestimonialsEditorialDialogue() {
  return (
    <section className="bg-stone-100 text-stone-950">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-orange-800">
          After the class
        </p>
        <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
          What stayed with them.
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone-600">
          We asked two Small Hours students what changed in the way they work,
          six months after finishing the course.
        </p>
        <figure className="mt-10 grid gap-6 border-t border-stone-300 py-8 md:grid-cols-[14rem_1fr]">
          <div>
            <p className="font-mono text-xs text-orange-800">QUESTION 01</p>
            <p className="mt-3 text-sm font-medium">What do you notice now?</p>
          </div>
          <div>
            <blockquote className="font-serif text-2xl leading-relaxed">
              I notice the space between things. My work has fewer elements now,
              but each one has a clearer job. That was a small shift that
              changed everything.
            </blockquote>
            <figcaption className="mt-6 text-xs">
              <span className="font-semibold">Elliot James</span>
              <span className="ml-2 text-stone-600">
                Product designer, class of Spring 2026
              </span>
            </figcaption>
          </div>
        </figure>
        <figure className="grid gap-6 border-y border-stone-300 py-8 md:grid-cols-[14rem_1fr]">
          <div>
            <p className="font-mono text-xs text-orange-800">QUESTION 02</p>
            <p className="mt-3 text-sm font-medium">What became easier?</p>
          </div>
          <div>
            <blockquote className="font-serif text-2xl leading-relaxed">
              Explaining my choices. I used to say something felt right. Now I
              can talk about hierarchy, rhythm and what I want someone to notice
              first.
            </blockquote>
            <figcaption className="mt-6 text-xs">
              <span className="font-semibold">Mina Rahman</span>
              <span className="ml-2 text-stone-600">
                Independent illustrator, class of Winter 2026
              </span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
