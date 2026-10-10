// Fonts: Space Grotesk (https://fonts.google.com/specimen/Space+Grotesk)
export default function TestimonialCardWaterSurvey() {
  return (
    <figure className="relative w-72 overflow-hidden rounded-[20px] bg-cyan-950 p-4 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-white sm:w-[22rem]">
      <svg aria-hidden="true" viewBox="0 0 352 360" fill="none" stroke="currentColor" strokeWidth="10" className="absolute inset-0 h-full w-full text-teal-300 opacity-30">
        <path d="M-40 45h240a60 60 0 0 1 60 60v135a65 65 0 0 0 65 65h80 M-40 95h180a60 60 0 0 1 60 60v190 M45-40v85m50 50v250" />
      </svg>
      <div className="relative rounded-xl border border-white/30 bg-white/10 p-5 backdrop-blur-md">
        <p className="text-[10px] font-medium tracking-[0.08em] text-cyan-200">PIPEHALO / LEAK SURVEYS</p>
        <blockquote className="mt-5 text-xl leading-7 font-medium">
          <p>“They marked one paving stone. The leak was right beneath it. Our courtyard stayed intact.”</p>
        </blockquote>
        <p className="mt-5 text-[11px] text-teal-100">Courtyard survey · Bristol</p>
      </div>
      <figcaption className="relative mt-4 flex flex-col gap-1 px-1 text-xs text-teal-100">
        <span className="font-semibold text-white">Owen Price</span>
        <span>Residents’ association chair</span>
      </figcaption>
    </figure>
  )
}
