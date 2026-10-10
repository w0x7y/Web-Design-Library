export default function TabsRecipeNotebook() {
  return (
    <section
      aria-label="Lemon cake recipe"
      className="group w-72 border border-amber-200 bg-amber-50 p-5 text-stone-800"
    >
      <p className="text-[9px] tracking-[0.2em] uppercase">
        From Bea's kitchen
      </p>
      <h2 className="mt-2 font-serif text-2xl">Sunday lemon cake</h2>
      <p className="mt-1 text-[10px] text-stone-600">8 slices · 50 minutes</p>
      <fieldset className="mt-5">
        <legend className="sr-only">Choose recipe section</legend>
        <div className="flex border-b border-stone-300">
          <label className="flex h-9 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs has-checked:border-emerald-800 has-checked:font-semibold has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-recipe-notebook-ingredients"
              type="radio"
              name="tabs-recipe-notebook-section"
              value="ingredients"
              defaultChecked
              className="sr-only focus-visible:outline-hidden"
            />
            Ingredients
          </label>
          <label className="flex h-9 flex-1 cursor-pointer items-center justify-center border-b-2 border-transparent text-xs has-checked:border-emerald-800 has-checked:font-semibold has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-slate-900">
            <input
              id="tabs-recipe-notebook-method"
              type="radio"
              name="tabs-recipe-notebook-section"
              value="method"
              className="sr-only focus-visible:outline-hidden"
            />
            Method
          </label>
        </div>
      </fieldset>
      <section
        aria-label="Cake ingredients"
        className="mt-4 hidden group-has-[#tabs-recipe-notebook-ingredients:checked]:block"
      >
        <h3 className="font-serif text-lg">The good things</h3>
        <ul role="list" className="mt-2 text-xs">
          <li className="flex justify-between border-b border-stone-200 py-2">
            <span>Unsalted butter</span>
            <span className="font-mono text-[10px]">150 g</span>
          </li>
          <li className="flex justify-between border-b border-stone-200 py-2">
            <span>Caster sugar</span>
            <span className="font-mono text-[10px]">150 g</span>
          </li>
          <li className="flex justify-between border-b border-stone-200 py-2">
            <span>Self-raising flour</span>
            <span className="font-mono text-[10px]">175 g</span>
          </li>
          <li className="flex justify-between py-2">
            <span>Lemons + eggs</span>
            <span className="font-mono text-[10px]">2 + 3</span>
          </li>
        </ul>
      </section>
      <section
        aria-label="Cake method"
        className="mt-4 hidden group-has-[#tabs-recipe-notebook-method:checked]:block"
      >
        <h3 className="font-serif text-lg">Slow and simple</h3>
        <ol role="list" className="mt-3 space-y-3 text-xs leading-5">
          <li>
            <span className="font-semibold">1.</span> Heat the oven to 175°C.
            Cream the butter and sugar, then mix in the eggs.
          </li>
          <li>
            <span className="font-semibold">2.</span> Fold in flour and lemon
            zest. Bake for 35 minutes, then drizzle with lemon juice.
          </li>
        </ol>
      </section>
    </section>
  )
}
