// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function TestimonialCardMicroloan() {
  return (
    <figure className="w-72 rounded-lg border border-teal-100 bg-white p-6 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-teal-950 sm:w-[22rem]">
      <figcaption className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
          alt=""
          width={400}
          height={267}
          className="size-12 shrink-0 rounded-sm object-cover"
        />
        <div>
          <p className="text-xs font-bold">Leon Duarte</p>
          <p className="mt-1 text-xs text-teal-800">Corner-shop owner</p>
        </div>
      </figcaption>
      <blockquote className="mt-6 text-xl leading-7 font-medium">
        <p>“The weekly payments fit our takings. We bought a second fridge before summer.”</p>
      </blockquote>
      <div className="mt-6 flex items-center justify-between gap-3 border-t-2 border-teal-700 pt-3 text-xs text-teal-800">
        <span>£1,200 stock loan</span>
        <span className="font-bold tracking-tight">sprout.</span>
      </div>
    </figure>
  )
}
