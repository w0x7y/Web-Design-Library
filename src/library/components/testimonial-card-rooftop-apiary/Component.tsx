// Fonts: DM Sans (https://fonts.google.com/specimen/DM+Sans)
export default function TestimonialCardRooftopApiary() {
  return (
    <figure className="w-72 rounded-[20px] bg-linear-to-br from-amber-100 via-amber-50 to-orange-200 p-5 font-['DM_Sans',ui-sans-serif,system-ui,sans-serif] text-amber-950 sm:w-[21rem]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-2xl font-bold tracking-tight">hexstead<span className="mt-0.5 block text-[10px] font-normal tracking-normal">Rooftop hive care</span></p>
        <svg aria-hidden="true" viewBox="0 0 56 52" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-10 w-14 shrink-0 text-amber-800">
          <path d="m14 2 12 7v14l-12 7-12-7V9Z m24 0 12 7v14l-12 7-12-7V9Z m-12 21 12 7v14l-12 7-12-7V30Z" />
        </svg>
      </div>
      <blockquote className="mt-4 text-lg leading-[26px] font-medium">
        <p>“The hive is calm, the roof is tidy, and we know who to call.”</p>
      </blockquote>
      <details className="mt-4 border-t border-amber-700 pt-3">
        <summary className="cursor-pointer text-xs font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-950">What our hive visit includes</summary>
        <p className="mt-2 text-xs leading-5">Colony check, water top-up, roof log.</p>
      </details>
      <figcaption className="mt-4 text-xs">
        <p className="font-bold">Bea Navarro</p>
        <p className="mt-1">Facilities lead, Alder House</p>
      </figcaption>
    </figure>
  )
}
