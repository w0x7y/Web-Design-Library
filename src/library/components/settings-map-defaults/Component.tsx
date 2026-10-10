// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function SettingsMapDefaults() {
  return (
    <section
      className="bg-[#f7faf6] px-5 py-12 text-[#223d2b] font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] sm:px-8"
    >
      <form className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#526655]">Gridparcel / project defaults</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Start every map on the right grid.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#526655]">Coordinate and export defaults for your municipal asset mapping projects.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <figure className="overflow-hidden rounded-lg border border-[#bbcabd] bg-[#e4eddd]">
            <svg className="aspect-[4/3] w-full" viewBox="0 0 600 450" aria-hidden="true" fill="none">
              <path fill="#d0dfc2" d="M0 0h230l-25 145L0 190ZM390 0h210v170l-150-40ZM0 330l250-70 60 190H0Z"></path>
              <path
                stroke="#8da381"
                strokeWidth="1"
                d="M60 0v450M160 0v450M260 0v450M360 0v450M460 0v450M560 0v450M0 60h600M0 160h600M0 260h600M0 360h600"
              ></path>
              <path
                stroke="#ffffff"
                strokeWidth="28"
                d="m-20 260 180-55 150 35 310-90M325-20l-50 160 75 200-10 130"
              ></path>
              <path stroke="#a9bdc8" strokeWidth="42" d="m470-20-45 110 30 150-75 230"></path>
              <path fill="#d59660" stroke="#805533" strokeWidth="3" d="m185 155 70-22 25 76-70 22Z"></path>
              <circle cx="230" cy="180" r="7" fill="#223d2b"></circle>
            </svg>
            <figcaption className="flex flex-wrap justify-between gap-3 border-t border-[#bbcabd] bg-white px-5 py-4 text-xs"><span>Example parcel layer</span><span>Metres / projected grid</span></figcaption>
          </figure>
          <div className="grid content-start gap-6">
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-map-defaults-crs">
              Coordinate reference system
              <select
                className="min-w-0 w-full rounded-md border border-[#526655] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-map-defaults-crs"
                name="crs"
              >
                <option value="27700">British National Grid · EPSG:27700</option>
                <option value="4326">WGS 84 · EPSG:4326</option>
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-map-defaults-units">
              Measurement units
              <select
                className="min-w-0 w-full rounded-md border border-[#526655] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-map-defaults-units"
                name="units"
              >
                <option value="metres">Metres</option>
                <option value="feet">Feet</option>
              </select>
            </label>
            <fieldset className="border-t border-[#bbcabd] pt-6">
              <legend className="text-lg font-semibold">Default export format</legend>
              <div className="mt-4 flex flex-wrap gap-5">
                <label
                  className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                  htmlFor="settings-map-defaults-geojson"
                >
                  <input
                    className="mt-1 size-4 shrink-0 cursor-pointer accent-[#356c42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                    type="radio"
                    name="settings-map-defaults-format"
                    id="settings-map-defaults-geojson"
                    defaultValue="geojson"
                    defaultChecked
                  />
                  <span>GeoJSON</span>
                </label>
                <label
                  className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                  htmlFor="settings-map-defaults-geopackage"
                >
                  <input
                    className="mt-1 size-4 shrink-0 cursor-pointer accent-[#356c42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                    type="radio"
                    name="settings-map-defaults-format"
                    id="settings-map-defaults-geopackage"
                    defaultValue="geopackage"
                  />
                  <span>GeoPackage</span>
                </label>
              </div>
            </fieldset>
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-map-defaults-metadata"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#356c42] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-map-defaults-metadata"
                name="metadata"
                type="checkbox"
                aria-describedby="settings-map-defaults-metadata-hint"
                defaultChecked
              />
              <span>
                <span>Include coordinate metadata</span>
                <span className="block text-xs leading-5 text-[#526655]" id="settings-map-defaults-metadata-hint">Keep the CRS reference in project exports.</span>
              </span>
            </label>
          </div>
        </div>
        <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#bbcabd] pt-5">
          <p className="block text-xs leading-5 text-[#526655]">Applies to new projects. Existing map layers keep their CRS.</p>
          <button
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#356c42] px-5 py-3 text-sm font-semibold text-[#ffffff] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#356c42]"
            type="button"
          >
            Save map defaults
          </button>
        </footer>
      </form>
    </section>
  )
}
