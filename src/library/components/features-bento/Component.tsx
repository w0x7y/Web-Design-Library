// Fonts: Anybody (https://fonts.google.com/specimen/Anybody)
export default function FeaturesBento() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950 font-['Anybody',ui-sans-serif,system-ui,sans-serif] text-white antialiased">
      <div aria-hidden="true" className="absolute -top-80 -right-64 -z-10 h-[40rem] w-[56rem] bg-radial from-orange-500/20 to-transparent to-70%" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <h2 className="text-4xl leading-[1.02] font-semibold tracking-[-0.03em] text-balance font-stretch-125% sm:text-5xl lg:text-[3.5rem]">
              Edit the conversation, not the waveform.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-pretty text-neutral-400">
              Murmur transcribes every take while you record. Delete a sentence from the transcript and the audio goes
              with it.
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex h-11 w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start editing free
            <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-transform group-hover:translate-x-0.5">
              <path d="M2.5 8h10M8.5 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {/* The transcript editor: struck words are cut from the audio, the highlight is the current selection */}
          <article className="flex flex-col overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 ring-inset md:col-span-2 lg:row-span-2">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold tracking-[-0.01em] font-stretch-semi-expanded">Cut a sentence, cut the sound</h3>
              <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-pretty text-neutral-400">
                Select words in the transcript and press delete. Murmur trims both tracks and smooths the join, so nobody
                hears the edit.
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-5 px-6 text-base leading-relaxed text-neutral-200 sm:px-8 lg:text-xl">
              <div>
                <p className="flex items-baseline gap-2 text-[0.8125rem] font-semibold text-orange-300">
                  Noor <span className="font-normal text-neutral-400 tabular-nums">00:41</span>
                </p>
                <p className="mt-1 max-w-2xl">
                  So the first thing we did was <del className="text-neutral-400 decoration-rose-400 decoration-2">um,</del> rent a
                  van, and <mark className="rounded-sm bg-orange-400/25 px-0.5 text-white">we drove north until the road ran out.</mark>
                </p>
              </div>
              <div>
                <p className="flex items-baseline gap-2 text-[0.8125rem] font-semibold text-rose-300">
                  Theo <span className="font-normal text-neutral-400 tabular-nums">00:52</span>
                </p>
                <p className="mt-1 max-w-2xl">
                  <del className="text-neutral-400 decoration-rose-400 decoration-2">You know, like,</del> nobody told us the ferry
                  only runs on Tuesdays.
                </p>
              </div>
            </div>
            <svg aria-hidden="true" viewBox="0 0 960 96" preserveAspectRatio="xMidYMid slice" fill="none" strokeWidth="4" strokeLinecap="round" className="mt-8 h-24 w-full sm:h-28">
              <defs>
                <linearGradient id="features-bento-wave" x1="0" y1="0" x2="960" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="oklch(87.9% 0.169 91.605)" />
                  <stop offset="0.4" stopColor="oklch(70.5% 0.213 47.604)" />
                  <stop offset="0.7" stopColor="oklch(64.5% 0.246 16.439)" />
                  <stop offset="1" stopColor="oklch(66.7% 0.295 322.15)" />
                </linearGradient>
              </defs>
              <rect x="412" y="0" width="120" height="96" className="fill-rose-400/10" />
              <path stroke="url(#features-bento-wave)" d="M4 31v34M12 25v46M20 28v40M28 23v50M36 23v50M44 34v28M52 36v24M60 22v52M68 33v30M76 35v26M84 28v40M92 36v24M100 35v26M108 40v16M116 41v14M124 44v8M132 42v12M140 42v12M148 42v12M156 40v16M164 39v18M172 41v14M180 33v30M188 32v32M196 33v30M204 36v24M212 19v58M220 25v46M228 48v0M236 48v0M244 48v0M252 48v0M260 13v70M268 32v32M276 32v32M284 31v34M292 19v58M300 30v36M308 28v40M316 34v28M324 33v30M332 35v26M340 36v24M348 33v30M356 33v30M364 28v40M372 30v36M380 26v44M388 26v44M396 23v50M404 28v40M412 35v26M532 37v22M540 38v20M548 35v26M556 26v44M564 21v54M572 35v26M580 21v54M588 32v32M596 15v66M604 24v48M612 9v78M620 7v82M628 20v56M636 10v76M644 27v42M652 34v28M660 26v44M668 37v22M676 36v24M684 35v26M692 35v26M700 40v16M708 48v0M716 48v0M724 48v0M732 39v18M740 38v20M748 36v24M756 35v26M764 34v28M772 32v32M780 27v42M788 31v34M796 32v32M804 27v42M812 34v28M820 34v28M828 24v48M836 31v34M844 32v32M852 39v18M860 35v26M868 33v30M876 40v16M884 33v30M892 32v32M900 38v20M908 30v36M916 31v34M924 26v44M932 30v36M940 21v54M948 19v58M956 33v30" />
              <path className="stroke-neutral-700" d="M420 25v46M428 24v48M436 26v44M444 32v32M452 31v34M460 38v20M468 33v30M476 37v22M484 40v16M492 42v12M500 37v22M508 37v22M516 42v12M524 36v24" />
              <path stroke="#fff" strokeWidth="2" d="M600 0v96" />
            </svg>
          </article>

          {/* Noise removal: the same phrase before and after */}
          <article className="flex flex-col rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/10 ring-inset sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.01em] font-stretch-semi-expanded">Studio sound in one click</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-neutral-400">
              Room echo, laptop fans and street noise go. The voice stays.
            </p>
            <div className="mt-auto space-y-3 pt-8 text-xs text-neutral-400">
              <div className="flex items-center gap-4">
                <span className="w-10 shrink-0">Before</span>
                <svg aria-hidden="true" viewBox="0 0 320 40" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="h-10 min-w-0 flex-1 text-neutral-500">
                  <path d="M4 12v16M12 7v26M20 9v22M28 12v16M36 7v26M44 14v12M52 13v14M60 15v10M68 12v16M76 12v16M84 15v10M92 11v18M100 12v16M108 13v14M116 16v8M124 17v6M132 17v6M140 18v4M148 11v18M156 9v22M164 12v16M172 12v16M180 6v28M188 6v28M196 6v28M204 16v8M212 13v14M220 14v12M228 15v10M236 10v20M244 18v4M252 17v6M260 18v4M268 14v12M276 10v20M284 13v14M292 15v10M300 15v10M308 14v12M316 13v14" />
                </svg>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-10 shrink-0">After</span>
                <svg aria-hidden="true" viewBox="0 0 320 40" preserveAspectRatio="xMidYMid slice" fill="none" strokeWidth="4" strokeLinecap="round" className="h-10 min-w-0 flex-1">
                  <defs>
                    <linearGradient id="features-bento-clean" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="oklch(87.9% 0.169 91.605)" />
                      <stop offset="0.5" stopColor="oklch(70.5% 0.213 47.604)" />
                      <stop offset="1" stopColor="oklch(64.5% 0.246 16.439)" />
                    </linearGradient>
                  </defs>
                  <path stroke="url(#features-bento-clean)" d="M4 16v8M12 13v14M20 7v26M28 12v16M36 12v16M44 13v14M52 18v4M60 18v4M68 19v2M76 15v10M84 18v4M92 15v10M100 16v8M108 8v24M116 20v0M124 20v0M132 20v0M140 20v0M148 17v6M156 14v12M164 17v6M172 17v6M180 11v18M188 17v6M196 16v8M204 17v6M212 20v0M220 19v2M228 17v6M236 11v18M244 20v0M252 20v0M260 20v0M268 11v18M276 15v10M284 18v4M292 18v4M300 16v8M308 13v14M316 11v18" />
                </svg>
              </div>
            </div>
          </article>

          {/* Filler words, counted and struck */}
          <article className="flex flex-col rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/10 ring-inset sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.01em] font-stretch-semi-expanded">Every &ldquo;um&rdquo;, gone at once</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-neutral-400">
              Murmur finds the filler words in an episode. Review them, then remove the lot.
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-8 text-sm">
              <li className="flex items-center gap-2 rounded-full bg-white/5 py-1 pr-1.5 pl-3 ring-1 ring-white/10 ring-inset">
                <del className="text-neutral-300 decoration-rose-400 decoration-2">um</del>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white tabular-nums">38</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/5 py-1 pr-1.5 pl-3 ring-1 ring-white/10 ring-inset">
                <del className="text-neutral-300 decoration-rose-400 decoration-2">uh</del>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white tabular-nums">21</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/5 py-1 pr-1.5 pl-3 ring-1 ring-white/10 ring-inset">
                <del className="text-neutral-300 decoration-rose-400 decoration-2">you know</del>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white tabular-nums">17</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/5 py-1 pr-1.5 pl-3 ring-1 ring-white/10 ring-inset">
                <del className="text-neutral-300 decoration-rose-400 decoration-2">like</del>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white tabular-nums">52</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/5 py-1 pr-1.5 pl-3 ring-1 ring-white/10 ring-inset">
                <del className="text-neutral-300 decoration-rose-400 decoration-2">sort of</del>
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white tabular-nums">9</span>
              </li>
            </ul>
          </article>

          {/* Remote guests, each recorded on their own machine */}
          <article className="flex flex-col rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/10 ring-inset sm:p-8">
            <h3 className="text-xl font-semibold tracking-[-0.01em] font-stretch-semi-expanded">Guests record locally</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-neutral-400">
              Every voice is captured at 48 kHz on its own machine and uploads as you talk. A dropped call never costs a
              take.
            </p>
            <ul className="mt-auto space-y-4 pt-8">
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange-300 text-xs font-semibold text-orange-950">NA</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">Noor Aziz</span>
                  <span className="block text-xs text-neutral-400">Lisbon</span>
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-300">
                  <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5"><path d="m3.5 8.5 3 3 6-7" /></svg>
                  Uploaded
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-rose-300 text-xs font-semibold text-rose-950">TH</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">Theo Hale</span>
                  <span className="block text-xs text-neutral-400">Bergen</span>
                </span>
                <span className="flex items-center gap-2 text-xs text-neutral-300 tabular-nums">
                  <span aria-hidden="true" className="h-1.5 w-12 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full w-[72%] rounded-full bg-linear-to-r from-orange-300 to-rose-400" />
                  </span>
                  72%
                </span>
              </li>
            </ul>
          </article>

          {/* Chapters: the one tile drenched in the gradient */}
          <article className="rounded-2xl bg-linear-to-br from-amber-300 via-orange-400 to-rose-400 p-6 text-neutral-950 sm:p-8 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.01em] font-stretch-semi-expanded">Chapters and show notes, drafted</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-neutral-800">
                Murmur splits the episode where the topic turns and writes notes you can publish as they are, or edit.
              </p>
            </div>
            <ol className="mt-6 divide-y divide-neutral-950/15 border-y border-neutral-950/15 text-sm lg:mt-0 lg:self-start">
              <li className="flex gap-4 py-2.5">
                <span className="w-12 shrink-0 font-semibold tabular-nums">00:00</span>
                Cold open
              </li>
              <li className="flex gap-4 py-2.5">
                <span className="w-12 shrink-0 font-semibold tabular-nums">03:12</span>
                Why we left the city
              </li>
              <li className="flex gap-4 py-2.5">
                <span className="w-12 shrink-0 font-semibold tabular-nums">18:40</span>
                The ferry that never came
              </li>
              <li className="flex gap-4 py-2.5">
                <span className="w-12 shrink-0 font-semibold tabular-nums">41:05</span>
                What we would do differently
              </li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  )
}
