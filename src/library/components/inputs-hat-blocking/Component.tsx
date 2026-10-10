// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function InputsHatBlocking() {
  return (
    <section
      className="w-72 rounded-xl border border-slate-500 bg-slate-900 font-['Archivo',ui-sans-serif,system-ui,sans-serif] text-slate-100 scheme-dark sm:w-[22rem]"
      aria-label="Crownform hat-blocking job"
    >
      <header className="rounded-t-xl border-b border-slate-500 bg-sky-950 p-4">
        <p className="text-[10px] font-semibold tracking-widest text-sky-200 uppercase">Crownform / Hat workshop</p>
        <h2 className="mt-1 text-xl font-semibold">Set the crown</h2>
      </header>
      <div className="p-5">
        <label className="block text-xs text-slate-300" htmlFor="inputs-hat-blocking-job">Workshop job code</label>
        <input
          className="mt-2 block h-10 w-full rounded border border-slate-500 bg-slate-950 px-2 font-mono text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          id="inputs-hat-blocking-job"
          name="job-code"
          type="text"
          maxLength={20}
          defaultValue="CF-1024-018"
        />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-slate-300" htmlFor="inputs-hat-blocking-block">Hat block</label>
            <select
              className="mt-2 block h-10 w-full min-w-0 rounded border border-slate-500 bg-slate-950 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-current"
              id="inputs-hat-blocking-block"
              name="block"
              aria-describedby="inputs-hat-blocking-hint"
            >
              <option value="fedora">Fedora</option>
              <option value="cloche">Cloche</option>
              <option value="pork-pie">Pork pie</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-300" htmlFor="inputs-hat-blocking-start">Started at</label>
            <input
              className="mt-2 block h-10 w-full min-w-0 rounded border border-slate-500 bg-slate-950 px-2 text-xs leading-[normal] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-current"
              id="inputs-hat-blocking-start"
              name="started-at"
              type="time"
              defaultValue="14:20"
            />
          </div>
        </div>
        <p
          className="mt-4 border-t border-slate-500 pt-3 text-[11px] leading-4 text-slate-300"
          id="inputs-hat-blocking-hint"
        >Match the block to the customer fitting card.</p>
      </div>
    </section>
  )
}
