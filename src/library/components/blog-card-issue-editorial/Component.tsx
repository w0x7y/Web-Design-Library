export default function BlogCardIssueEditorial() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <header className="flex items-end gap-5 border-b border-neutral-200 pb-5">
        <p className="text-5xl font-semibold tracking-tight tabular-nums">08</p>
        <div>
          <p className="text-xs font-medium text-neutral-500">Issue number</p>
          <time dateTime="2026-10-10" className="mt-1 block text-xs text-neutral-500">Oct 10, 2026</time>
        </div>
      </header>
      <h3 className="mt-5 text-lg font-semibold"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Editorial title naming the issue theme</a></h3>
      <p className="mt-3 text-sm text-neutral-600">Short introduction to the central question in this issue.</p>
      <footer className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-neutral-500">Alex Rivera</p>
        <p className="text-xs text-neutral-500">8 min read</p>
      </footer>
    </article>
  )
}
