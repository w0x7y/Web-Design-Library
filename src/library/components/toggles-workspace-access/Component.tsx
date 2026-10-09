export default function TogglesWorkspaceAccess() {
  return (
    <fieldset className="w-72 border-2 border-black bg-white p-4 text-black">
      <legend className="sr-only">Makerspace workspace permissions</legend>
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-black uppercase">Access board</h2>
        <span className="font-mono text-[9px]">BAY 03</span>
      </div>
      <div className="mt-5 border-t-2 border-black">
        <div className="flex items-center justify-between gap-3 border-b-2 border-black py-3 hover:bg-stone-100">
          <div>
            <label
              htmlFor="toggles-workspace-access-guests"
              className="text-xs font-bold uppercase"
            >
              Guest entry
            </label>
            <p
              id="toggles-workspace-access-guests-hint"
              className="font-mono text-[9px]"
            >
              Visitors with a host
            </p>
          </div>
          <input
            id="toggles-workspace-access-guests"
            type="checkbox"
            name="toggles-workspace-access-guests"
            defaultChecked
            aria-describedby="toggles-workspace-access-guests-hint"
            className="h-8 w-14 cursor-pointer appearance-none border-2 border-black bg-white text-center font-mono text-[10px] leading-7 after:content-['OFF'] checked:bg-lime-300 checked:after:content-['ON'] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 forced-colors:border-[ButtonText]"
          />
        </div>
        <div className="flex items-center justify-between gap-3 border-b-2 border-black py-3 hover:bg-stone-100">
          <div>
            <label
              htmlFor="toggles-workspace-access-tools"
              className="text-xs font-bold uppercase"
            >
              Tool lending
            </label>
            <p
              id="toggles-workspace-access-tools-hint"
              className="font-mono text-[9px]"
            >
              Take tools off site
            </p>
          </div>
          <input
            id="toggles-workspace-access-tools"
            type="checkbox"
            name="toggles-workspace-access-tools"
            aria-describedby="toggles-workspace-access-tools-hint"
            className="h-8 w-14 cursor-pointer appearance-none border-2 border-black bg-white text-center font-mono text-[10px] leading-7 after:content-['OFF'] checked:bg-lime-300 checked:after:content-['ON'] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 forced-colors:border-[ButtonText]"
          />
        </div>
        <div className="flex items-center justify-between gap-3 border-b-2 border-black py-3 hover:bg-stone-100">
          <div>
            <label
              htmlFor="toggles-workspace-access-hours"
              className="text-xs font-bold uppercase"
            >
              After hours
            </label>
            <p
              id="toggles-workspace-access-hours-hint"
              className="font-mono text-[9px]"
            >
              Entry after 18:00
            </p>
          </div>
          <input
            id="toggles-workspace-access-hours"
            type="checkbox"
            name="toggles-workspace-access-hours"
            defaultChecked
            aria-describedby="toggles-workspace-access-hours-hint"
            className="h-8 w-14 cursor-pointer appearance-none border-2 border-black bg-white text-center font-mono text-[10px] leading-7 after:content-['OFF'] checked:bg-lime-300 checked:after:content-['ON'] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 forced-colors:border-[ButtonText]"
          />
        </div>
      </div>
      <p className="mt-4 font-mono text-[9px] uppercase">
        Member settings / effective immediately
      </p>
    </fieldset>
  )
}
