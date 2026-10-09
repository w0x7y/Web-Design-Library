export default function TestimonialCardLetter() {
  return (
    <figure className="w-72 rounded-xl border border-blue-200 bg-blue-50 p-5 text-blue-950 sm:w-80">
      <div className="flex items-center gap-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 text-blue-800"
        >
          <path d="m12 2 10 6v8l-10 6-10-6V8Zm0 5-6 3.5v3L12 17l6-3.5v-3Z" />
        </svg>
        <span className="text-lg font-semibold tracking-tight">
          Northstar Health
        </span>
      </div>
      <blockquote className="mt-5 text-lg leading-7">
        <p>
          “The team listened to our nurses first. That care shows up in every
          part of the scheduling system.”
        </p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-blue-200 pt-4">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-blue-200 text-sm font-semibold"
        >
          EH
        </span>
        <div>
          <p className="text-xs font-semibold">Dr. Emma Hughes</p>
          <p className="mt-1 text-[11px] text-blue-800">Medical director</p>
          <p className="mt-1 text-[10px] text-blue-700">Partner since 2023</p>
        </div>
      </figcaption>
    </figure>
  )
}
