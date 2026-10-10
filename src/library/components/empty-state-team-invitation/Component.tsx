export default function EmptyStateTeamInvitation() {
  return (
    <section className="w-72 rounded-3xl bg-orange-50 p-6 text-orange-950">
      <div className="flex items-center justify-center py-2" aria-hidden="true">
        <span className="flex size-14 items-center justify-center rounded-full border-4 border-orange-50 bg-orange-200 font-bold">
          YOU
        </span>
        <span className="-ml-3 flex size-14 items-center justify-center rounded-full border-4 border-orange-50 bg-orange-100 text-2xl">
          +
        </span>
        <span className="-ml-3 flex size-14 items-center justify-center rounded-full border-4 border-orange-50 bg-orange-200 text-xl">
          ?
        </span>
      </div>
      <h2 className="mt-4 text-center text-xl font-bold">
        Better with company.
      </h2>
      <p className="mt-3 text-center text-sm leading-6 text-orange-900">
        Invite the people you want to build with. Your first five seats are
        free.
      </p>
      <button
        className="mt-6 w-full rounded-full bg-orange-900 px-4 py-3 text-sm font-bold text-white cursor-pointer hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
        type="button"
      >
        Invite a teammate
      </button>
    </section>
  )
}
