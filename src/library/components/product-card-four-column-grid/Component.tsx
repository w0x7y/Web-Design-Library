export default function ProductCardFourColumnGrid() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for the collection</h2>
          <a href="#" className="shrink-0 self-start text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 sm:self-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Shop all</a>
        </header>
        <ul role="list" className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-8">
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Product name" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Product name</a></h3>
            <p className="mt-1 text-sm text-neutral-500">3 colours</p>
            <p className="mt-2 text-sm font-medium">$48</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Item title" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Item title</a></h3>
            <p className="mt-1 text-sm text-neutral-500">2 sizes</p>
            <p className="mt-2 text-sm font-medium">$64</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Variant name" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Variant name</a></h3>
            <p className="mt-1 text-sm text-neutral-500">4 colours</p>
            <p className="mt-2 text-sm font-medium">$32</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Short name" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Short name</a></h3>
            <p className="mt-1 text-sm text-neutral-500">2 colours</p>
            <p className="mt-2 text-sm font-medium">$56</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Option title" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Option title</a></h3>
            <p className="mt-1 text-sm text-neutral-500">3 sizes</p>
            <p className="mt-2 text-sm font-medium">$72</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Item name" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Item name</a></h3>
            <p className="mt-1 text-sm text-neutral-500">4 sizes</p>
            <p className="mt-2 text-sm font-medium">$40</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Product label" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Product label</a></h3>
            <p className="mt-1 text-sm text-neutral-500">2 options</p>
            <p className="mt-2 text-sm font-medium">$88</p>
          </li>
          <li className="group relative min-w-0">
            <div role="img" aria-label="Image placeholder: photograph for Item heading" className="flex aspect-[4/3] aspect-square items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors group-hover:bg-neutral-200">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-10">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-5-5L5 21" />
        </svg>
            </div>
            <h3 className="mt-3 text-base font-semibold"><a href="#" className="after:absolute after:inset-0 group-hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Item heading</a></h3>
            <p className="mt-1 text-sm text-neutral-500">3 colours</p>
            <p className="mt-2 text-sm font-medium">$24</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
