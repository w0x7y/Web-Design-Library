export default function CtaScheduleOptions() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 ">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-neutral-500">Eyebrow for the section</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading for choosing a session time</h2>
          <p className='mt-4 text-lg text-pretty text-neutral-600'>Explain the session length and what participants should prepare.</p>
        </header>
        <form className="mx-auto mt-10 max-w-3xl" action="#">
          <fieldset aria-describedby="cta-schedule-options-hint">
            <legend className="text-sm font-semibold">Choose a time</legend>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-300 bg-white p-4"><input type="radio" name="session-time" value="0" defaultChecked className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><span><span className="block text-sm font-semibold">Mar 14</span><span className="mt-1 block text-sm text-neutral-600">10:00 AM</span></span></label>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-300 bg-white p-4"><input type="radio" name="session-time" value="1"  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><span><span className="block text-sm font-semibold">Mar 15</span><span className="mt-1 block text-sm text-neutral-600">2:00 PM</span></span></label>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-300 bg-white p-4"><input type="radio" name="session-time" value="2"  className="mt-1 size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" /><span><span className="block text-sm font-semibold">Mar 16</span><span className="mt-1 block text-sm text-neutral-600">11:30 AM</span></span></label>
            </div>
          </fieldset>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p id="cta-schedule-options-hint" className="text-sm text-neutral-600">All times use your local time zone.</p>
            <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Continue</button>
          </div>
        </form>
      </div>
    </section>
  )
}
