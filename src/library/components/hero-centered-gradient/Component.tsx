// Fonts: Funnel Display, Funnel Sans (https://fonts.google.com/specimen/Funnel+Display)
export default function HeroCenteredGradient() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 font-['Funnel_Sans',ui-sans-serif,system-ui,sans-serif] text-white antialiased">
      {/* Mesh gradient: colour fields low in the frame, like the last light after sunset */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-72 h-[36rem] w-[56rem] bg-radial from-teal-500/30 to-transparent to-70%" />
        <div className="absolute -top-48 -right-56 h-[32rem] w-[48rem] bg-radial from-blue-600/25 to-transparent to-70%" />
        <div className="absolute -right-64 -bottom-48 h-96 w-[32rem] bg-radial from-rose-600/50 to-transparent to-70% sm:-right-96 sm:-bottom-72 sm:h-[36rem] sm:w-[48rem]" />
        <div className="absolute -bottom-40 left-1/2 h-[22rem] w-[44rem] -translate-x-1/2 bg-radial from-amber-300/80 via-orange-500/40 to-transparent to-70% sm:-bottom-56 sm:h-[30rem] sm:w-[76rem]" />
        <svg viewBox="0 0 1440 520" fill="currentColor" className="absolute top-0 left-1/2 h-[32.5rem] w-[90rem] -translate-x-1/2 text-white">
          <circle cx="112" cy="64" r="1.2" opacity="0.7" />
          <circle cx="236" cy="188" r="0.9" opacity="0.5" />
          <circle cx="318" cy="42" r="1.4" opacity="0.8" />
          <circle cx="402" cy="246" r="0.8" opacity="0.4" />
          <circle cx="470" cy="118" r="1" opacity="0.6" />
          <circle cx="548" cy="30" r="0.8" opacity="0.5" />
          <circle cx="604" cy="214" r="1.1" opacity="0.35" />
          <circle cx="688" cy="72" r="0.9" opacity="0.6" />
          <circle cx="772" cy="20" r="1.3" opacity="0.75" />
          <circle cx="836" cy="168" r="0.8" opacity="0.4" />
          <circle cx="918" cy="96" r="1.2" opacity="0.7" />
          <circle cx="986" cy="258" r="0.9" opacity="0.45" />
          <circle cx="1062" cy="38" r="1" opacity="0.6" />
          <circle cx="1148" cy="152" r="1.4" opacity="0.8" />
          <circle cx="1222" cy="276" r="0.8" opacity="0.4" />
          <circle cx="1296" cy="84" r="1.1" opacity="0.65" />
          <circle cx="1364" cy="206" r="0.9" opacity="0.5" />
          <circle cx="62" cy="232" r="0.9" opacity="0.45" />
          <circle cx="174" cy="322" r="1" opacity="0.35" />
          <circle cx="1388" cy="338" r="1" opacity="0.35" />
        </svg>
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-x-0 bottom-0 h-28 w-full sm:h-40"
        >
          <path
            className="fill-slate-900"
            d="M0 160V78l82-26 70 20 104-38 92 34 70-10 128 40 96-30 84 14 136-58 82 36 74-12 112 40 94-26 98 24 74-10 64 18V160Z"
          />
          <path
            className="fill-slate-950"
            d="M0 160V104l64-18 58 14 96-44 74 30 52-12 118 52 84-34 92 20 120-66 74 40 62-16 104 46 86-30 108 32 66-14 92 26 90-36V160Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-24 pb-48 text-center sm:pt-32 sm:pb-56">
        <h1 className="font-['Funnel_Display',ui-sans-serif,system-ui,sans-serif] text-5xl leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-7xl">
          Know which nights will be clear.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-pretty text-slate-300 sm:text-xl">
          Umbra reads cloud cover, seeing and moonlight for the exact spot you shoot from, then emails you the
          afternoon before a clear night.
        </p>

        <form
          action="#"
          className="mx-auto mt-10 flex max-w-md flex-col gap-2 rounded-3xl border border-white/15 bg-white/5 p-2 backdrop-blur-md transition-colors has-[input:focus-visible]:border-white/60 has-[input:focus-visible]:bg-white/10 sm:flex-row sm:rounded-full sm:p-1.5"
        >
          <label htmlFor="hero-centered-gradient-email" className="sr-only">
            Email address
          </label>
          <input
            id="hero-centered-gradient-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@darksky.org"
            className="h-11 min-w-0 flex-1 px-4 text-base text-white outline-none placeholder:text-slate-400"
          />
          <button
            type="submit"
            className="h-11 shrink-0 cursor-pointer rounded-full bg-white px-5 text-[0.9375rem] font-semibold text-slate-950 transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get the first alert
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-400">Free during the beta. One email per clear night, never more.</p>
      </div>
    </section>
  )
}
