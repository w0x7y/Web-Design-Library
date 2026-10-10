// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function TestimonialsCatCafeChats() {
  return (
    <section className="bg-pink-50 text-pink-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest">Purr &amp; Pour / Around the café</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">Coffee with a little company.</h2>
        </header>
        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <figure className="rounded-[2rem_2rem_2rem_0] bg-pink-200 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest">Thursday, 14:30</p>
            <blockquote className="mt-6 text-2xl leading-[1.5] font-medium">“I booked an hour after work. Miso curled up beside my cup, and the staff let the cats decide when they wanted to say hello.”</blockquote>
            <figcaption className="mt-8 text-sm">Freya Moss / Thursday regular</figcaption>
          </figure>
          <figure className="rounded-[2rem_2rem_0_2rem] bg-yellow-200 p-6 sm:p-10 md:mt-12">
            <p className="text-xs font-semibold uppercase tracking-widest">Saturday, 11:20</p>
            <blockquote className="mt-6 text-2xl leading-[1.5] font-medium">“They explained the quiet voices rule to my son before we went in. He spent most of the visit reading beside a sleeping tabby.”</blockquote>
            <figcaption className="mt-8 text-sm">Samir Ali / Visiting with Theo</figcaption>
          </figure>
        </div>
        <footer className="mt-12 flex flex-col justify-between gap-6 border-t border-pink-300 pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-3xl font-bold">8 cats. Room to unwind.</p>
            <p className="mt-1 text-sm">A quiet lounge, small visiting groups and a retreat room for the cats.</p>
          </div>
          <a className="inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Book an hour in the cat lounge</a>
        </footer>
      </div>
    </section>
  )
}
