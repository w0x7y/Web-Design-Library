// Fonts: DynaPuff (https://fonts.google.com/specimen/DynaPuff)
export default function TestimonialCardPlayful() {
  return (
    <figure className="group w-72 font-['DynaPuff',ui-rounded,system-ui,sans-serif] text-green-950 antialiased sm:w-[24rem]">
      <div className="relative -rotate-2 rounded-[1.75rem] bg-lime-200 px-6 pt-5 pb-6 sm:px-7 sm:pt-6 sm:pb-7 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:rotate-0">
        <div role="img" aria-label="Rated 5 out of 5" className="flex gap-0.5 text-pink-600">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.87 2.88c-.32-.77-1.42-.77-1.74 0L7.3 7.29l-4.75.38c-.83.07-1.17 1.1-.54 1.65l3.62 3.1-1.1 4.64c-.2.81.69 1.46 1.4 1.02L10 15.59l4.07 2.49c.71.44 1.6-.21 1.4-1.02l-1.1-4.64 3.62-3.1c.63-.55.3-1.58-.54-1.65l-4.75-.38-1.83-4.4Z" />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.87 2.88c-.32-.77-1.42-.77-1.74 0L7.3 7.29l-4.75.38c-.83.07-1.17 1.1-.54 1.65l3.62 3.1-1.1 4.64c-.2.81.69 1.46 1.4 1.02L10 15.59l4.07 2.49c.71.44 1.6-.21 1.4-1.02l-1.1-4.64 3.62-3.1c.63-.55.3-1.58-.54-1.65l-4.75-.38-1.83-4.4Z" />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.87 2.88c-.32-.77-1.42-.77-1.74 0L7.3 7.29l-4.75.38c-.83.07-1.17 1.1-.54 1.65l3.62 3.1-1.1 4.64c-.2.81.69 1.46 1.4 1.02L10 15.59l4.07 2.49c.71.44 1.6-.21 1.4-1.02l-1.1-4.64 3.62-3.1c.63-.55.3-1.58-.54-1.65l-4.75-.38-1.83-4.4Z" />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.87 2.88c-.32-.77-1.42-.77-1.74 0L7.3 7.29l-4.75.38c-.83.07-1.17 1.1-.54 1.65l3.62 3.1-1.1 4.64c-.2.81.69 1.46 1.4 1.02L10 15.59l4.07 2.49c.71.44 1.6-.21 1.4-1.02l-1.1-4.64 3.62-3.1c.63-.55.3-1.58-.54-1.65l-4.75-.38-1.83-4.4Z" />
          </svg>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="size-5">
            <path d="M10.87 2.88c-.32-.77-1.42-.77-1.74 0L7.3 7.29l-4.75.38c-.83.07-1.17 1.1-.54 1.65l3.62 3.1-1.1 4.64c-.2.81.69 1.46 1.4 1.02L10 15.59l4.07 2.49c.71.44 1.6-.21 1.4-1.02l-1.1-4.64 3.62-3.1c.63-.55.3-1.58-.54-1.65l-4.75-.38-1.83-4.4Z" />
          </svg>
        </div>

        <blockquote className="mt-3 text-lg/[1.45] text-pretty sm:text-xl/[1.45]">
          <p>
            “Thirsty pinged me right before my fiddle-leaf fig staged its{' '}
            <span className="underline decoration-pink-600 decoration-wavy decoration-2 underline-offset-[5px]">third dramatic collapse</span>. It now
            has a name, a schedule and a small fan club.”
          </p>
        </blockquote>

        <svg aria-hidden="true" viewBox="0 0 32 20" fill="currentColor" className="absolute top-full left-9 -mt-px h-5 w-8 text-lime-200">
          <path d="M0 0h30c-6 7-15 14-27 20 4-6 4-13-3-20Z" />
        </svg>
      </div>

      <figcaption className="mt-7 flex items-center gap-3.5 pl-4">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
          alt=""
          width={400}
          height={600}
          className="size-14 shrink-0 rounded-full object-cover object-top ring-4 ring-pink-200"
        />
        <div>
          <p className="font-semibold">Inés Carvalho</p>
          <p className="text-sm text-green-800">41 houseplants, all alive</p>
        </div>
      </figcaption>
    </figure>
  )
}
