// Fonts: Space Grotesk
export default function ProfileCardHazardMapper() {
  return (
    <article className="relative w-72 rounded-[20px] bg-linear-to-br from-orange-950 via-orange-900 to-orange-800 p-5 font-['Space_Grotesk',ui-sans-serif,system-ui,sans-serif] text-amber-100 sm:w-[21rem]">
      <svg aria-hidden="true" viewBox="0 0 288 340" fill="none" stroke="currentColor" strokeWidth="1" className="pointer-events-none absolute inset-0 size-full rounded-[20px] text-amber-200/25">
        <path d="M-20 85C35-25 235 0 320 115M-20 104C25-5 229 10 319 139M-20 124C36 15 204 24 320 163M-20 145C47 35 192 44 320 192M-20 172C73 58 182 65 320 222M-20 197C88 94 181 83 320 254M-20 223C90 130 182 112 320 287M-20 250C87 154 169 157 320 313" />
        <path d="M101 74c34-41 96-23 123 29s-16 76-61 61-96-45-62-90Z" />
        <path d="M115 82c28-28 73-10 90 26s-17 58-49 42-69-40-41-68Z" />
      </svg>
      <div className="relative">
        <div className="flex justify-between text-[10px] uppercase tracking-widest">
          <span>Cindertrace</span>
          <span>Etna / N</span>
        </div>
        <div aria-hidden="true" className="flex h-14 items-center text-[9px] leading-3 text-amber-200">37.75° N<br />15.00° E</div>
        <div className="rounded-xl border border-amber-200/30 bg-orange-950/70 p-4 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-widest text-amber-200">Hazard mapping</p>
          <h2 className="mt-2 text-2xl font-medium">Nico Ferretti</h2>
          <p className="mt-1 text-xs">Terrain data. Safer decisions.</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div>
              <dt className="mb-1 text-[10px] text-amber-200">Based in</dt>
              <dd>Catania</dd>
            </div>
            <div>
              <dt className="mb-1 text-[10px] text-amber-200">Focus</dt>
              <dd>Lava flow paths</dd>
            </div>
          </dl>
          <a href="#nico-surveys" aria-label="View Nico Ferretti's surveys" className="mt-5 flex items-center justify-between text-xs font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200">
            View surveys
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4">
              <path d="M4 10h12m-5-5 5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}
