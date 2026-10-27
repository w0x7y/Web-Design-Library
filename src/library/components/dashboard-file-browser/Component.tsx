export default function DashboardFileBrowser() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Files</h1>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              New folder
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
            >
              Upload
            </button>
          </div>
        </header>
        <div className="mt-8 grid rounded-lg border border-neutral-200 lg:grid-cols-[16rem_minmax(0,1fr)]">
          <aside className="border-b border-neutral-200 p-4 lg:border-r lg:border-b-0">
            <nav aria-label="Folders">
              <ul role="list" className="space-y-1 text-sm">
              <li>
                <details className="group">
                  <summary className="flex h-9 cursor-pointer list-none items-center gap-2 rounded-md px-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-90">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                    </svg>
                    Documents
                  </summary>
                  <ul role="list" className="mt-1 space-y-1 pl-6">
                    <li>
                      <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Contracts
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Policies
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="group" open>
                  <summary className="flex h-9 cursor-pointer list-none items-center gap-2 rounded-md px-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-90">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                    </svg>
                    Projects
                  </summary>
                  <ul role="list" className="mt-1 space-y-1 pl-6">
                    <li>
                      <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Assets
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-current="page" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 bg-neutral-100 font-medium text-neutral-900 forced-colors:border forced-colors:border-[CanvasText]">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Reports
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Templates
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="flex h-9 cursor-pointer list-none items-center gap-2 rounded-md px-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 [&::-webkit-details-marker]:hidden">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-500 transition-transform group-open:rotate-90">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                    </svg>
                    Shared with me
                  </summary>
                  <ul role="list" className="mt-1 space-y-1 pl-6">
                    <li>
                      <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Team folder
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                          <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                        </svg>
                        Client uploads
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="#" className="flex h-9 items-center gap-2 rounded-md px-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900">
                  <span aria-hidden="true" className="size-4 shrink-0"></span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5 shrink-0 text-neutral-500">
                    <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                  </svg>
                  Archive
                </a>
              </li>
              </ul>
            </nav>
            <div className="mt-6 border-t border-neutral-200 px-2 pt-4">
              <p className="text-xs font-medium text-neutral-500">Storage</p>
              <div aria-hidden="true" className="mt-2 h-1.5 rounded-full bg-neutral-200">
                <div className="h-full w-1/4 rounded-full bg-neutral-900 forced-colors:bg-[CanvasText]"></div>
              </div>
              <p className="mt-2 text-xs text-neutral-500">12.4 GB of 50 GB used</p>
            </div>
          </aside>
          <div className="min-w-0">
            <div className="flex flex-col gap-3 border-b border-neutral-200 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <nav aria-label="Breadcrumb">
                <ol role="list" className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
                  <li>
                    <a href="#" className="rounded-md transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">All files</a>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <a href="#" className="rounded-md transition-colors hover:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Projects</a>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0 text-neutral-400">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                    <span aria-current="page" className="font-medium text-neutral-900">Reports</span>
                  </li>
                </ol>
              </nav>
              <form role="search" className="sm:w-64">
                <label htmlFor="dashboard-file-browser-search" className="sr-only">Search this folder</label>
                <input
                  id="dashboard-file-browser-search"
                  type="search"
                  name="search"
                  placeholder="Search this folder"
                  className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
                />
              </form>
            </div>
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Files in Reports</caption>
              <thead className="border-b border-neutral-200 text-xs text-neutral-500">
                <tr>
                  <th scope="col" className="py-3 pr-4 pl-4 font-medium sm:pl-6">Name</th>
                  <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">Modified</th>
                  <th scope="col" className="py-3 pr-4 pl-4 text-right font-medium sm:pr-6">Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Drafts</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 24, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-24">Oct 24, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">6 items</td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4.38a1.5 1.5 0 0 1 1.06.44l1.12 1.12a1.5 1.5 0 0 0 1.06.44h7.38A1.5 1.5 0 0 1 21 9.5v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Exports</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 20, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-20">Oct 20, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">12 items</td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M14.25 3h-7.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-12L14.25 3Zm0 0v4.5h4.5M8.75 12.75h6.5m-6.5 3.5h4" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Quarterly summary.pdf</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 25, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-25">Oct 25, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">2.4 MB</td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M4.5 4.5h15v15h-15Zm0 5.25h15m-15 4.5h15m-9.75-4.5v9.75" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Budget forecast.xlsx</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 23, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-23">Oct 23, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">186 KB</td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M14.25 3h-7.5a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-12L14.25 3Zm0 0v4.5h4.5M8.75 12.75h6.5m-6.5 3.5h4" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Meeting notes.docx</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 22, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-22">Oct 22, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">48 KB</td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M3.75 5.25h16.5v13.5H3.75Zm0 10.5 4.5-4.5 4.5 4.5 2.25-2.25 5.25 5.25M15 9.75h.01" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Cover image.png</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 18, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-18">Oct 18, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">3.1 MB</td>
              </tr>
              <tr className="transition-colors hover:bg-neutral-50">
                <td className="py-3 pr-4 pl-4 sm:pl-6">
                  <a href="#" className="flex items-center gap-3 rounded-md font-medium text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">
                    <span aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-neutral-900">
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                        <path d="M3.75 4.5h16.5v4.5H3.75Zm1.5 4.5v10.5h13.5V9M10 12.75h4" />
                      </svg>
                    </span>
                    <span className="min-w-0">
                      <span className="block break-words">Source files.zip</span>
                      <span className="block text-xs font-normal text-neutral-500 sm:hidden">Oct 12, 2026</span>
                    </span>
                  </a>
                </td>
                <td className="hidden px-4 py-3 whitespace-nowrap text-neutral-500 sm:table-cell">
                  <time dateTime="2026-10-12">Oct 12, 2026</time>
                </td>
                <td className="py-3 pr-4 pl-4 text-right whitespace-nowrap text-neutral-500 tabular-nums sm:pr-6">24.8 MB</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
