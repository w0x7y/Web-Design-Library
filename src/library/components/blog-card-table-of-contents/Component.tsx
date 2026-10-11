export default function BlogCardTableOfContents() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <p className="text-xs text-neutral-500">Article contents · 6 min read</p>
      <h3 className="mt-3 text-lg font-semibold"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Article title naming the main question</a></h3>
      <p className="mt-3 text-sm text-neutral-600">Brief excerpt describing what the article helps readers understand.</p>
      <nav aria-label="Article contents" className="mt-5 border-t border-neutral-200 pt-4">
        <ol role="list" className="grid gap-2">
          <li>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">First section topic</a>
          </li>
          <li>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Second section topic</a>
          </li>
          <li>
            <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 text-xs">Third section topic</a>
          </li>
        </ol>
      </nav>
      <p className="mt-4 text-xs text-neutral-500">Alex Rivera · Oct 10</p>
    </article>
  )
}
