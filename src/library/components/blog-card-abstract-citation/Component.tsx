export default function BlogCardAbstractCitation() {
  return (
    <article className="w-72 rounded-lg border border-neutral-200 bg-white p-5 text-neutral-900 sm:w-80">
      <p className="text-xs font-medium text-neutral-500">Research note · Oct 10</p>
      <h3 className="mt-3 text-lg font-semibold"><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Article title naming the finding</a></h3>
      <div className="mt-5 border-l border-neutral-200 pl-4">
        <p className="text-xs font-semibold">Abstract</p>
        <p className="mt-2 text-sm text-neutral-600">Brief abstract naming the question, approach and main result.</p>
      </div>
      <dl className="mt-5 grid grid-cols-[64px_1fr] gap-x-3 gap-y-2 border-t border-neutral-200 pt-4 text-xs">
        <dt className="text-neutral-500">Author</dt>
        <dd>Alex Rivera</dd>
        <dt className="text-neutral-500">Topic</dt>
        <dd>Topic label</dd>
        <dt className="text-neutral-500">Source</dt>
        <dd><a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ">Publication link</a></dd>
      </dl>
    </article>
  )
}
