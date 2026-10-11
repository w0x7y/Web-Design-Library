export default function InputsTextareaCounter() {
  return (
    <div className="w-72 text-neutral-900 sm:w-[26rem]">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <label htmlFor="counter-message" className="font-medium">Message</label>
        <span className="text-neutral-500">Optional</span>
      </div>
      <div className="rounded-md border border-neutral-300 bg-white has-[textarea:focus-visible]:outline-2 has-[textarea:focus-visible]:outline-offset-2 has-[textarea:focus-visible]:outline-neutral-900">
        <textarea id="counter-message" name="message" maxLength={280} aria-describedby="counter-count counter-hint" placeholder="Write a short message" className="block h-24 w-full resize-none rounded-t-md border-0 bg-white px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:outline-hidden" />
        <div className="flex h-11 items-center justify-between gap-2 border-t border-neutral-200 px-2">
          <div className="flex gap-1">
            <button type="button" aria-label="Attach a file" className="inline-flex size-8 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m8 12 6-6a3 3 0 0 1 4 4l-8 8a5 5 0 0 1-7-7l9-9M7 13l7-7" /></svg>
            </button>
            <button type="button" aria-label="Mention a person" className="inline-flex size-8 items-center justify-center rounded-md text-neutral-600 transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><circle cx="12" cy="12" r="4" /><path d="M16 8v6a2 2 0 0 0 4 0v-2a8 8 0 1 0-3 6.2" /></svg>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span id="counter-count" className="text-xs text-neutral-500 tabular-nums">0 / 280</span>
            <button type="button" className="inline-flex h-8 items-center justify-center rounded-md bg-neutral-900 px-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Post</button>
          </div>
        </div>
      </div>
      <p id="counter-hint" className="mt-1.5 text-sm text-neutral-500">Hint about what to include.</p>
    </div>
  )
}
