// Fonts: Bricolage Grotesque (https://fonts.google.com/specimen/Bricolage+Grotesque)
export default function InputsGroomingProfile() {
  return (
    <section
      className="w-72 rounded-3xl bg-sky-100 p-5 font-['Bricolage_Grotesque',ui-sans-serif,system-ui,sans-serif] text-blue-950 sm:w-[22rem]"
      aria-label="Fluffday coat profile"
    >
      <header className="flex items-center gap-3">
        <img
          className="h-16 w-14 shrink-0 rounded-2xl object-cover"
          src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80"
          alt="Golden retriever holding a flower"
          width={800}
          height={1283}
        />
        <div>
          <p className="text-xs font-semibold">Fluffday grooming</p>
          <h2 className="text-2xl leading-7 font-bold">Meet the fluff.</h2>
        </div>
      </header>
      <label className="mt-4 block text-xs font-semibold" htmlFor="inputs-grooming-profile-name">Dog's name</label>
      <input
        className="mt-2 block h-10 w-full rounded-xl border border-blue-700 bg-white px-3 text-sm leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        id="inputs-grooming-profile-name"
        name="pet-name"
        type="text"
        defaultValue="Biscuit"
      />
      <fieldset className="mt-4">
        <legend className="text-xs font-semibold">Coat length</legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <label
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-blue-700 bg-white p-3 text-xs has-checked:border-blue-950 has-checked:bg-sky-200 forced-colors:has-checked:border-dashed"
          >
            <input
              className="size-4 shrink-0 accent-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="inputs-grooming-profile-coat"
              type="radio"
              defaultValue="short"
              defaultChecked
            />
            <span>Short</span>
          </label>
          <label
            className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-blue-700 bg-white p-3 text-xs has-checked:border-blue-950 has-checked:bg-sky-200 forced-colors:has-checked:border-dashed"
          >
            <input
              className="size-4 shrink-0 accent-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="inputs-grooming-profile-coat"
              type="radio"
              defaultValue="long"
            />
            <span>Long</span>
          </label>
        </div>
      </fieldset>
    </section>
  )
}
