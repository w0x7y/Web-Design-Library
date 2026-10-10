// Fonts: IBM Plex Mono (https://fonts.google.com/specimen/IBM+Plex+Mono)
export default function TabsNetworkRack() {
  return (
    <section
      aria-label="Portstead colocation rack inventory"
      className="group w-72 sm:w-[384px] font-['IBM_Plex_Mono',ui-sans-serif,system-ui,sans-serif] border-2 border-lime-400 bg-black p-4 text-lime-100"
    >
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-tight">PORTSTEAD</h2>
        <span className="text-[10px] text-lime-300">RACK B-14</span>
      </header>
      <fieldset className="mt-4 flex gap-1">
        <legend className="sr-only">Choose rack subsystem</legend>
        <label
          id="tabs-network-rack-ports-label"
          className="flex h-9 flex-1 cursor-pointer items-center justify-center border border-lime-600 text-[10px] font-semibold tracking-wider uppercase hover:bg-lime-950 has-checked:bg-lime-400 has-checked:text-black forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-200"
        >
          <input
            id="tabs-network-rack-ports"
            type="radio"
            name="tabs-network-rack-view"
            value="ports"
            defaultChecked
            aria-controls="tabs-network-rack-ports-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Ports
        </label>
        <label
          id="tabs-network-rack-fabric-label"
          className="flex h-9 flex-1 cursor-pointer items-center justify-center border border-lime-600 text-[10px] font-semibold tracking-wider uppercase hover:bg-lime-950 has-checked:bg-lime-400 has-checked:text-black forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-200"
        >
          <input
            id="tabs-network-rack-fabric"
            type="radio"
            name="tabs-network-rack-view"
            value="fabric"
            aria-controls="tabs-network-rack-fabric-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Fabric
        </label>
        <label
          id="tabs-network-rack-power-label"
          className="flex h-9 flex-1 cursor-pointer items-center justify-center border border-lime-600 text-[10px] font-semibold tracking-wider uppercase hover:bg-lime-950 has-checked:bg-lime-400 has-checked:text-black forced-colors:has-checked:underline has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-lime-200"
        >
          <input
            id="tabs-network-rack-power"
            type="radio"
            name="tabs-network-rack-view"
            value="power"
            aria-controls="tabs-network-rack-power-panel"
            className="sr-only focus-visible:outline-hidden"
          />
          Power
        </label>
      </fieldset>
      <section
        id="tabs-network-rack-ports-panel"
        aria-labelledby="tabs-network-rack-ports-label"
        className="hidden group-has-[#tabs-network-rack-ports:checked]:block mt-4"
      >
        <h3 className="text-sm font-semibold">Patch panel / U24</h3>
        <div className="mt-4 grid grid-cols-4 gap-2">
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">01</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">02</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">03</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">04</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">05</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">06</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">07</span>
          <span className="flex h-9 items-center justify-center border border-lime-700 text-[10px]">08</span>
        </div>
        <p className="mt-3 text-xs text-lime-200">8 / 8 assigned · 10 GbE</p>
      </section>
      <section
        id="tabs-network-rack-fabric-panel"
        aria-labelledby="tabs-network-rack-fabric-label"
        className="hidden group-has-[#tabs-network-rack-fabric:checked]:block mt-4"
      >
        <h3 className="text-sm font-semibold">Dual uplink / U22</h3>
        <p className="mt-3 text-xs leading-5 text-lime-200">Leaf 03 → Spine 01: 100 GbE. Leaf 04 → Spine 02: 100 GbE. Both paths established.</p>
      </section>
      <section
        id="tabs-network-rack-power-panel"
        aria-labelledby="tabs-network-rack-power-label"
        className="hidden group-has-[#tabs-network-rack-power:checked]:block mt-4"
      >
        <h3 className="text-sm font-semibold">A + B feeds / U02</h3>
        <p className="mt-3 text-xs leading-5 text-lime-200">Feed A: 1.8 kW. Feed B: 1.7 kW. Each circuit rated 6.0 kW; redundancy available.</p>
      </section>
      <p className="mt-4 border-t border-lime-800 pt-3 text-[10px] text-lime-300">AUDIT / 10 OCT 2026 / 08:12 UTC</p>
    </section>
  )
}
