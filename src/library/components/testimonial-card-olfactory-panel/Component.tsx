export default function TestimonialCardOlfactoryPanel() {
  return (
    <figure className="w-72 rounded-xl border border-rose-700 bg-rose-950 p-5 text-rose-50 sm:w-[22rem]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold tracking-[0.12em]">NOSEBENCH</p>
        <span className="rounded-sm border border-rose-700 px-2 py-1 text-[10px] text-rose-200">PANEL 07</span>
      </div>
      <blockquote className="mt-5 text-xl leading-7 font-medium">
        <p>“We finally had words for the dry-down. The panel’s notes made the next formulation obvious.”</p>
      </blockquote>
      <dl className="mt-5 border-y border-rose-700 py-3 text-xs">
        <div className="flex items-center justify-between gap-3 py-1">
          <dt className="text-rose-200">Application</dt>
          <dd>Fine fragrance</dd>
        </div>
        <div className="flex items-center justify-between gap-3 py-1">
          <dt className="text-rose-200">Panel</dt>
          <dd>18 assessors</dd>
        </div>
      </dl>
      <figcaption className="mt-4 text-xs">
        <p className="font-semibold">Selma Ro</p>
        <p className="mt-1 text-rose-200">Perfumer, Ravelin Scent</p>
      </figcaption>
    </figure>
  )
}
