// Fonts: Fraunces (https://fonts.google.com/specimen/Fraunces)
export default function TestimonialCardSilkDye() {
  return (
    <figure className="relative w-72 overflow-hidden border border-stone-200 bg-stone-50 text-stone-900 sm:w-[22rem]">
      <img
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
        alt=""
        width={400}
        height={503}
        className="absolute inset-y-0 left-0 h-full w-16 object-cover"
      />
      <div className="ml-16 p-5">
        <p className="text-[10px] font-semibold tracking-[0.1em] text-orange-900">SELVEDGE EIGHT<span className="mt-1 block font-normal tracking-normal text-stone-700">Silk dye house</span></p>
        <blockquote className="mt-4 font-['Fraunces',ui-serif,Georgia,serif] text-lg leading-[26px]">
          <p>“The second dye lot matched the first. We could cut the whole collection without sorting by shade.”</p>
        </blockquote>
      </div>
      <figcaption className="ml-16 px-5 pb-5 text-xs">
        <p className="font-semibold">Mara Diallo</p>
        <p className="mt-1 text-stone-700">Production lead, Forme 12</p>
      </figcaption>
    </figure>
  )
}
