export default function DashboardKanbanBoard() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Work overview
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-pretty text-neutral-600">
              Review the tasks in each stage of the workflow.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          >
            Add work item
          </a>
        </header>
        <div className="mt-10 grid items-start gap-6 md:grid-cols-3">
          <section className="min-w-0 rounded-lg bg-neutral-50 p-4">
            <header className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold">To do</h2>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                2
              </span>
            </header>
            <ul role="list" className="mt-4 space-y-3">
              <li className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="text-sm font-semibold">Task title</h3>
                <p className="mt-2 text-xs text-neutral-500">Alex Rivera</p>
                <p className="mt-4 text-xs">
                  <a
                    href="#"
                    aria-label="Open task title in to do"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open task
                  </a>
                </p>
              </li>
              <li className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="text-sm font-semibold">Work item title</h3>
                <p className="mt-2 text-xs text-neutral-500">Jordan Lee</p>
                <p className="mt-4 text-xs">
                  <a
                    href="#"
                    aria-label="Open work item title in to do"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open task
                  </a>
                </p>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              <a
                href="#"
                aria-label="Add task to to do"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Add task
              </a>
            </p>
          </section>
          <section className="min-w-0 rounded-lg bg-neutral-50 p-4">
            <header className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold">In progress</h2>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                1
              </span>
            </header>
            <ul role="list" className="mt-4 space-y-3">
              <li className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="text-sm font-semibold">Active task title</h3>
                <p className="mt-2 text-xs text-neutral-500">Sam Taylor</p>
                <p className="mt-4 text-xs">
                  <a
                    href="#"
                    aria-label="Open active task title in in progress"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open task
                  </a>
                </p>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              <a
                href="#"
                aria-label="Add task to in progress"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Add task
              </a>
            </p>
          </section>
          <section className="min-w-0 rounded-lg bg-neutral-50 p-4">
            <header className="flex items-center justify-between gap-3">
              <h2 className="text-base font-semibold">Done</h2>
              <span className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs font-medium">
                1
              </span>
            </header>
            <ul role="list" className="mt-4 space-y-3">
              <li className="rounded-lg border border-neutral-200 bg-white p-4">
                <h3 className="text-sm font-semibold">Completed task title</h3>
                <p className="mt-2 text-xs text-neutral-500">Alex Rivera</p>
                <p className="mt-4 text-xs">
                  <a
                    href="#"
                    aria-label="Open completed task title in done"
                    className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                  >
                    Open task
                  </a>
                </p>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              <a
                href="#"
                aria-label="Add task to done"
                className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
              >
                Add task
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}
