export default function ProfileCardAvailabilitySlots() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-80">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600"
        >
          AR
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-semibold">Alex Rivera</h3>
          <p className="text-sm text-neutral-500">Role or specialty</p>
        </div>
      </div>
      <p className="text-sm text-neutral-600 mt-3">
        Short context for a conversation.
      </p>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium">Mar 14, UTC+1</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-300 px-2 py-3 text-xs">
            <input
              type="radio"
              name="profile-card-availability-slots-time"
              value="09:00"
              defaultChecked
              className="size-3 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            09:00
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-300 px-2 py-3 text-xs">
            <input
              type="radio"
              name="profile-card-availability-slots-time"
              value="11:30"
              className="size-3 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            11:30
          </label>
          <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-300 px-2 py-3 text-xs">
            <input
              type="radio"
              name="profile-card-availability-slots-time"
              value="14:00"
              className="size-3 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            />
            14:00
          </label>
        </div>
      </fieldset>
      <a
        href="#"
        className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 mt-4 w-full"
      >
        Review booking
      </a>
      <p className="mt-2 text-xs text-neutral-500">
        Confirm the time on the booking page.
      </p>
    </article>
  )
}
