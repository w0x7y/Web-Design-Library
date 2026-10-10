export default function DropdownsTypographyMenu() {
  return (
    <details
      open
      className="group w-72 rounded-xl border border-slate-200 bg-white p-4 text-slate-900"
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 [&::-webkit-details-marker]:hidden">
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-md bg-slate-100 font-serif text-xl"
        >
          Aa
        </span>
        <span className="text-sm font-semibold">Text style</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="ml-auto size-4 group-open:rotate-180"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </summary>
      <fieldset className="mt-4 border-t border-slate-200 pt-3">
        <legend className="sr-only">Font family</legend>
        <p className="mb-2 text-[9px] tracking-widest text-slate-500 uppercase">
          Font family
        </p>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 has-checked:bg-blue-50">
          <input
            type="radio"
            name="dropdowns-typography-menu-family"
            value="sans"
            aria-labelledby="dropdowns-typography-menu-sans-name"
            aria-describedby="dropdowns-typography-menu-sans-hint"
            defaultChecked
            className="size-3.5 shrink-0 accent-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span aria-hidden="true" className="w-7 text-xl">
            Aa
          </span>
          <span>
            <span
              id="dropdowns-typography-menu-sans-name"
              className="block text-xs font-medium"
            >
              Modern sans
            </span>
            <span
              id="dropdowns-typography-menu-sans-hint"
              className="block text-[9px] text-slate-600"
            >
              Clean and familiar
            </span>
          </span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 has-checked:bg-blue-50">
          <input
            type="radio"
            name="dropdowns-typography-menu-family"
            value="serif"
            aria-labelledby="dropdowns-typography-menu-serif-name"
            aria-describedby="dropdowns-typography-menu-serif-hint"
            className="size-3.5 shrink-0 accent-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span aria-hidden="true" className="w-7 font-serif text-xl">
            Aa
          </span>
          <span>
            <span
              id="dropdowns-typography-menu-serif-name"
              className="block text-xs font-medium"
            >
              Classic serif
            </span>
            <span
              id="dropdowns-typography-menu-serif-hint"
              className="block text-[9px] text-slate-600"
            >
              A little more character
            </span>
          </span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2.5 has-checked:bg-blue-50">
          <input
            type="radio"
            name="dropdowns-typography-menu-family"
            value="mono"
            aria-labelledby="dropdowns-typography-menu-mono-name"
            aria-describedby="dropdowns-typography-menu-mono-hint"
            className="size-3.5 shrink-0 accent-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span aria-hidden="true" className="w-7 font-mono text-xl">
            Aa
          </span>
          <span>
            <span
              id="dropdowns-typography-menu-mono-name"
              className="block text-xs font-medium"
            >
              Monospace
            </span>
            <span
              id="dropdowns-typography-menu-mono-hint"
              className="block text-[9px] text-slate-600"
            >
              Precise, even spacing
            </span>
          </span>
        </label>
      </fieldset>
      <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3">
        <label
          htmlFor="dropdowns-typography-menu-size"
          className="text-xs font-medium"
        >
          Type size
        </label>
        <select
          id="dropdowns-typography-menu-size"
          name="size"
          defaultValue="16"
          className="h-9 w-24 rounded-md border border-slate-300 bg-white px-2 text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          <option value="14">14 px</option>
          <option value="16">16 px</option>
          <option value="18">18 px</option>
          <option value="20">20 px</option>
        </select>
      </div>
    </details>
  )
}
