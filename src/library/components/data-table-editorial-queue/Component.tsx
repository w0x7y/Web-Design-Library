export default function DataTableEditorialQueue() {
  return (
    <section className="bg-[#f6f2e9] text-[#3b3329] px-6 py-10 sm:px-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-start justify-between gap-5">
          <div className="grid gap-2">
            <h2 className="font-serif text-4xl font-normal">
              On the editor’s desk
            </h2>
            <p className="max-w-xl text-sm leading-6 text-[#786c5c]">
              Stories taking shape for the next edition.
            </p>
          </div>
          <a
            className="self-start text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            Read submissions
          </a>
        </header>
        <div className="my-7">
          <div className="flex flex-wrap justify-between gap-3 border-y border-[#3b3329]/20 py-3 font-mono text-xs">
            <p>EDITION / NOVEMBER</p>
            <p>3 STORIES IN PROGRESS</p>
          </div>
        </div>
        <table role="table" className="block w-full text-left text-sm md:table">
          <caption className="sr-only">Editorial submissions queue</caption>
          <thead role="rowgroup" className="sr-only md:not-sr-only md:table-header-group">
            <tr role="row">
              <th
                className="border-b border-[#3b3329]/20 px-4 py-3 text-xs font-medium text-[#786c5c]"
                role="columnheader"
                scope="col"
              >
                Story
              </th>
              <th
                className="border-b border-[#3b3329]/20 px-4 py-3 text-xs font-medium text-[#786c5c]"
                role="columnheader"
                scope="col"
              >
                Writer
              </th>
              <th
                className="border-b border-[#3b3329]/20 px-4 py-3 text-xs font-medium text-[#786c5c]"
                role="columnheader"
                scope="col"
              >
                Section
              </th>
              <th
                className="border-b border-[#3b3329]/20 px-4 py-3 text-xs font-medium text-[#786c5c]"
                role="columnheader"
                scope="col"
              >
                Stage
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="grid gap-3 md:table-row-group">
            <tr role="row" className="grid rounded-lg border border-[#3b3329]/20 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Story
                </span>
                <span className="min-w-0 break-words">The art of noticing</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Writer
                </span>
                <span className="min-w-0 break-words">Mara Chen</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Section
                </span>
                <span className="min-w-0 break-words">Essays</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Stage
                </span>
                <span className="min-w-0 break-words">In review</span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-[#3b3329]/20 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Story
                </span>
                <span className="min-w-0 break-words">A city after rain</span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Writer
                </span>
                <span className="min-w-0 break-words">Jon Bell</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Section
                </span>
                <span className="min-w-0 break-words">Field notes</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Stage
                </span>
                <span className="min-w-0 break-words">First draft</span>
              </td>
            </tr>
            <tr role="row" className="grid rounded-lg border border-[#3b3329]/20 p-3 md:table-row md:border-0 md:p-0">
              <th
                className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-medium"
                role="rowheader"
                scope="row"
              >
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Story
                </span>
                <span className="min-w-0 break-words">
                  Tools for slower work
                </span>
              </th>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Writer
                </span>
                <span className="min-w-0 break-words">Leah Okafor</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Section
                </span>
                <span className="min-w-0 break-words">Practice</span>
              </td>
              <td role="cell" className="flex min-w-0 items-center justify-between gap-4 px-1 py-2 md:table-cell md:border-b border-[#3b3329]/20 md:px-4 md:py-4 font-normal">
                <span aria-hidden="true" className="shrink-0 text-xs font-normal text-[#786c5c] md:hidden">
                  Stage
                </span>
                <span className="min-w-0 break-words">Copy edit</span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#786c5c]">
          <p>Showing all 3 records</p>
          <p>Updated October 10, 2026</p>
        </footer>
      </div>
    </section>
  )
}
