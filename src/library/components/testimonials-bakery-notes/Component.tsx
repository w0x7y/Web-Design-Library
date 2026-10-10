// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function TestimonialsBakeryNotes() {
  return (
    <section className="bg-pink-50 text-pink-950 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-widest">Rye Union / Heard at the counter</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-bold tracking-tight sm:text-5xl">Same loaf. New friends.</h2>
        </header>
        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <figure className="rounded-[2rem_2rem_2rem_0] bg-pink-200 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest">Thursday, 08:15</p>
            <blockquote className="mt-6 text-2xl leading-[1.5] font-medium">“I started with a bread subscription. Now I know the baker, the flour mill and the person who picks up the loaf after mine.”</blockquote>
            <figcaption className="mt-8 text-sm">Nora Ellis / Two-seed rye subscriber</figcaption>
          </figure>
          <figure className="rounded-[2rem_2rem_0_2rem] bg-yellow-200 p-6 sm:p-10 md:mt-12">
            <p className="text-xs font-semibold uppercase tracking-widest">Saturday, 10:40</p>
            <blockquote className="mt-6 text-2xl leading-[1.5] font-medium">“They put a loaf aside for Mum every week. She pays when she comes in. That small bit of trust means a lot to her.”</blockquote>
            <figcaption className="mt-8 text-sm">Asha Patel / Neighbour on Wilton Road</figcaption>
          </figure>
        </div>
        <footer className="mt-12 flex flex-col justify-between gap-6 border-t border-pink-300 pt-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-3xl font-bold">186 loaves, every Friday.</p>
            <p className="mt-1 text-sm">Baked by a co-op of eight. Shared around the neighbourhood.</p>
          </div>
          <a className="inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Join the weekly bread list</a>
        </footer>
      </div>
    </section>
  )
}
