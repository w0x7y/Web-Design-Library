export default function SettingsCameraPrivacy() {
  return (
    <section className="bg-[#101d1b] px-5 py-12 text-[#eef7ef] sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#b0c5b6]">Doorframe / living room camera</p>
        <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">A view with boundaries.</h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-[#b0c5b6]">Choose what this camera records and how long clips stay in your account.</p>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
          <figure className="relative overflow-hidden rounded-lg">
            <img
              className="aspect-[4/3] w-full object-cover"
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80"
              alt="Bright home interior with a dining table, seating and glass doors"
              width={1200}
              height={800}
            />
            <span className="absolute right-6 bottom-20 grid h-28 w-36 place-items-center border-2 border-dashed border-[#eef7ef] bg-[#101d1b]/90 text-xs" aria-hidden="true">Private zone</span>
            <figcaption className="flex flex-wrap justify-between gap-3 bg-[#26352e] px-5 py-4 text-xs"><span>Preview frame · living room</span><span>One privacy zone shown</span></figcaption>
          </figure>
          <form className="rounded-xl border border-[#6f8777] bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">Recording boundaries</h3>
            <div className="mt-6 grid gap-5">
              <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-camera-privacy-retention">
                Keep event clips
                <select
                  className="min-w-0 w-full rounded-md border border-[#b0c5b6] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-camera-privacy-retention"
                  name="retention"
                >
                  <option value="7">7 days</option>
                  <option value="3">3 days</option>
                  <option value="1">24 hours</option>
                </select>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-camera-privacy-zones"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#c6e8c9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-camera-privacy-zones"
                  name="zones"
                  type="checkbox"
                  aria-describedby="settings-camera-privacy-zones-hint"
                  defaultChecked
                />
                <span>
                  <span>Apply privacy zones</span>
                  <span className="block text-xs leading-5 text-[#b0c5b6]" id="settings-camera-privacy-zones-hint">Masked areas stay out of recorded clips.</span>
                </span>
              </label>
              <label
                className="flex cursor-pointer items-start gap-3 text-sm leading-6"
                htmlFor="settings-camera-privacy-audio"
              >
                <input
                  className="mt-1 size-4 shrink-0 cursor-pointer accent-[#c6e8c9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  id="settings-camera-privacy-audio"
                  name="audio"
                  type="checkbox"
                  aria-describedby="settings-camera-privacy-audio-hint"
                />
                <span>
                  <span>Record audio with clips</span>
                  <span className="block text-xs leading-5 text-[#b0c5b6]" id="settings-camera-privacy-audio-hint">Include sound from the camera microphone.</span>
                </span>
              </label>
              <details>
                <summary className="cursor-pointer text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">When is the camera recording?</summary>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#b0c5b6]">This device records motion events while your home is set to Away. Privacy zones apply to both event clips and the live view.</p>
              </details>
            </div>
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#6f8777] pt-5">
              <button
                className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#c6e8c9] px-5 py-3 text-sm font-semibold text-[#101d1b] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c6e8c9]"
                type="button"
              >
                Save camera privacy
              </button>
            </footer>
          </form>
        </div>
      </div>
    </section>
  )
}
