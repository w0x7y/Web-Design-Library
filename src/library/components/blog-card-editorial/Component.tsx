// Fonts: Literata (https://fonts.google.com/specimen/Literata)
export default function BlogCardEditorial() {
  return (
    <article className="group relative w-72 border-t-2 border-stone-950 pt-4 font-['Literata',ui-serif,Georgia,serif] text-stone-950 antialiased has-focus-visible:outline-2 has-focus-visible:outline-offset-8 has-focus-visible:outline-stone-950 md:grid md:w-[40rem] md:grid-cols-[15rem_minmax(0,1fr)] md:gap-6 md:pt-5">
      <div className="md:relative">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Snow-capped peaks rising out of a sea of cloud at dawn"
          width={1600}
          height={1067}
          className="aspect-2/1 w-full object-cover md:absolute md:inset-0 md:aspect-auto md:h-full"
        />
      </div>

      <div className="mt-4 flex flex-col md:mt-0">
        <h2 className="text-xl/[1.2] font-semibold tracking-[-0.015em] text-balance md:text-[2rem]/[1.1]">
          <a href="#" className="decoration-1 underline-offset-[5px] group-hover:underline after:absolute after:inset-0 focus-visible:outline-hidden">
            A hundred days of watching nothing
          </a>
        </h2>
        <p className="mt-2 text-[0.9375rem]/[1.5] text-pretty text-stone-600 italic md:mt-3 md:text-base/[1.55]">
          Fire lookouts are vanishing from the Cascades. Ines Moreau spent a summer in one of the last.
        </p>

        <div className="mt-4 flex items-center gap-2.5 md:mt-auto md:pt-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
            alt=""
            width={400}
            height={267}
            className="size-8 shrink-0 rounded-full object-cover"
          />
          <p className="text-[0.8125rem]/[1.35] text-stone-600">
            <span className="block font-semibold text-stone-950">Ines Moreau</span>
            <time dateTime="2026-09-12">12 Sep 2026</time> · 14 min read
          </p>
        </div>
      </div>
    </article>
  )
}
