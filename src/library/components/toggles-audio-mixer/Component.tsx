export default function TogglesAudioMixer() {
  return (
    <section
      aria-label="Audio recording preferences"
      className="w-72 rounded-2xl border border-zinc-700 bg-zinc-950 p-5 text-zinc-100"
    >
      <p className="text-[10px] tracking-widest text-zinc-400 uppercase">
        Before you hit record
      </p>
      <h2 className="mt-1 text-lg font-semibold">Sound your best</h2>
      <div className="mt-4 space-y-4">
        <div className="flex items-center justify-between gap-3 border-t border-zinc-800 pt-4">
          <div>
            <label
              htmlFor="toggles-audio-mixer-noise"
              className="text-sm font-medium"
            >
              Noise reduction
            </label>
            <p
              id="toggles-audio-mixer-noise-hint"
              className="text-[11px] text-zinc-400"
            >
              Keep the room out.
            </p>
          </div>
          <input
            id="toggles-audio-mixer-noise"
            name="toggles-audio-mixer-noise"
            type="checkbox"
            defaultChecked
            aria-describedby="toggles-audio-mixer-noise-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-zinc-600 bg-zinc-800 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-zinc-400 after:content-[''] checked:border-lime-300 checked:bg-lime-300 checked:after:translate-x-5 checked:after:bg-zinc-950 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 motion-reduce:transition-none forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-zinc-800 pt-4">
          <div>
            <label
              htmlFor="toggles-audio-mixer-level"
              className="text-sm font-medium"
            >
              Auto level
            </label>
            <p
              id="toggles-audio-mixer-level-hint"
              className="text-[11px] text-zinc-400"
            >
              An even voice throughout.
            </p>
          </div>
          <input
            id="toggles-audio-mixer-level"
            name="toggles-audio-mixer-level"
            type="checkbox"
            defaultChecked
            aria-describedby="toggles-audio-mixer-level-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-zinc-600 bg-zinc-800 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-zinc-400 after:content-[''] checked:border-lime-300 checked:bg-lime-300 checked:after:translate-x-5 checked:after:bg-zinc-950 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 motion-reduce:transition-none forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText]"
          />
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-zinc-800 pt-4">
          <div>
            <label
              htmlFor="toggles-audio-mixer-monitor"
              className="text-sm font-medium"
            >
              Live monitoring
            </label>
            <p
              id="toggles-audio-mixer-monitor-hint"
              className="text-[11px] text-zinc-400"
            >
              Hear yourself as you speak.
            </p>
          </div>
          <input
            id="toggles-audio-mixer-monitor"
            name="toggles-audio-mixer-monitor"
            type="checkbox"
            aria-describedby="toggles-audio-mixer-monitor-hint"
            className="relative h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-zinc-600 bg-zinc-800 after:absolute after:top-0.5 after:left-0.5 after:size-4 after:rounded-full after:bg-zinc-400 after:content-[''] checked:border-lime-300 checked:bg-lime-300 checked:after:translate-x-5 checked:after:bg-zinc-950 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 motion-reduce:transition-none forced-colors:border-[ButtonText] forced-colors:after:bg-[CanvasText]"
          />
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-[10px] text-zinc-400">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-lime-300"
        />
        Microphone connected · USB Audio
      </div>
    </section>
  )
}
