// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function InputsSkateHire() {
  return (
    <section
      className="w-72 rounded-3xl bg-linear-to-br from-orange-100 via-amber-50 to-teal-100 p-5 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] text-teal-950 sm:w-[22rem]"
      aria-label="Glidewell skate reservation"
    >
      <p className="text-[10px] font-semibold tracking-widest uppercase">Glidewell / Skate hire</p>
      <h2 className="mt-1 text-2xl font-semibold">Find your glide.</h2>
      <fieldset className="mt-5">
        <legend className="text-xs font-medium">Skate size / EU</legend>
        <div className="mt-2 grid grid-cols-4 gap-2">
          <label
            className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-teal-700 bg-white/70 py-3 text-lg font-semibold has-checked:bg-teal-800 has-checked:text-white forced-colors:has-checked:border-dashed"
          >
            <input
              className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="inputs-skate-hire-size"
              type="radio"
              defaultValue="37"
              aria-describedby="inputs-skate-hire-hint"
            />
            <span>37</span>
          </label>
          <label
            className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-teal-700 bg-white/70 py-3 text-lg font-semibold has-checked:bg-teal-800 has-checked:text-white forced-colors:has-checked:border-dashed"
          >
            <input
              className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="inputs-skate-hire-size"
              type="radio"
              defaultValue="38"
              defaultChecked
              aria-describedby="inputs-skate-hire-hint"
            />
            <span>38</span>
          </label>
          <label
            className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-teal-700 bg-white/70 py-3 text-lg font-semibold has-checked:bg-teal-800 has-checked:text-white forced-colors:has-checked:border-dashed"
          >
            <input
              className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="inputs-skate-hire-size"
              type="radio"
              defaultValue="39"
              aria-describedby="inputs-skate-hire-hint"
            />
            <span>39</span>
          </label>
          <label
            className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-teal-700 bg-white/70 py-3 text-lg font-semibold has-checked:bg-teal-800 has-checked:text-white forced-colors:has-checked:border-dashed"
          >
            <input
              className="size-3.5 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="inputs-skate-hire-size"
              type="radio"
              defaultValue="40"
              aria-describedby="inputs-skate-hire-hint"
            />
            <span>40</span>
          </label>
        </div>
      </fieldset>
      <p
        className="mt-3 text-xs leading-5"
        id="inputs-skate-hire-hint"
      >Choose your usual EU shoe size. Try them on at the desk.</p>
      <label className="mt-4 flex cursor-pointer items-center gap-2 border-t border-teal-700 pt-3 text-xs">
        <input
          className="size-4 shrink-0 accent-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          name="own-socks"
          type="checkbox"
          defaultChecked
        />
        <span>I'll bring a pair of long socks.</span>
      </label>
    </section>
  )
}
