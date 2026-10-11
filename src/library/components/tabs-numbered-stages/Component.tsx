export default function TabsNumberedStages() {
  return (
    <div className="group w-72 text-neutral-900 sm:w-[28rem]"><div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Process stage"><label className="border-t border-neutral-200 pt-3 text-center cursor-pointer rounded-md border border-neutral-300 bg-white text-sm text-neutral-600 hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] border-x-0 border-b-0 rounded-none" id="tabs-numbered-stages-draft-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-numbered-stages-draft" name="tabs-numbered-stages" value="draft" type="radio" aria-controls="tabs-numbered-stages-draft-panel" defaultChecked />
    <span className="mx-auto flex size-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-medium">1</span>
    <span className="mt-2 block">Draft</span></label>
    <label className="border-t border-neutral-200 pt-3 text-center cursor-pointer rounded-md border border-neutral-300 bg-white text-sm text-neutral-600 hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] border-x-0 border-b-0 rounded-none" id="tabs-numbered-stages-review-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-numbered-stages-review" name="tabs-numbered-stages" value="review" type="radio" aria-controls="tabs-numbered-stages-review-panel"  />
    <span className="mx-auto flex size-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-medium">2</span>
    <span className="mt-2 block">Review</span></label>
    <label className="border-t border-neutral-200 pt-3 text-center cursor-pointer rounded-md border border-neutral-300 bg-white text-sm text-neutral-600 hover:bg-neutral-50 has-[:checked]:border-neutral-900 has-[:checked]:font-medium has-[:checked]:text-neutral-900 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-neutral-900 forced-colors:has-[:checked]:border-[Highlight] border-x-0 border-b-0 rounded-none" id="tabs-numbered-stages-publish-label"><input className="sr-only focus-visible:outline-hidden" id="tabs-numbered-stages-publish" name="tabs-numbered-stages" value="publish" type="radio" aria-controls="tabs-numbered-stages-publish-panel"  />
    <span className="mx-auto flex size-8 items-center justify-center rounded-full border border-neutral-300 bg-white text-xs font-medium">3</span>
    <span className="mt-2 block">Publish</span></label></div>
    <section className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hidden group-has-[#tabs-numbered-stages-draft:checked]:block" id="tabs-numbered-stages-draft-panel" aria-labelledby="tabs-numbered-stages-draft-label"><h2 className="text-base font-semibold">Draft stage summary</h2>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Describe what belongs in this stage before moving forward.</p>
    <ol className="mt-3 grid gap-2" role="list"><li className="text-xs text-neutral-600">1. Required content for this stage</li>
    <li className="text-xs text-neutral-600">2. Supporting information to include</li></ol></section>
    <section className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hidden group-has-[#tabs-numbered-stages-review:checked]:block" id="tabs-numbered-stages-review-panel" aria-labelledby="tabs-numbered-stages-review-label"><h2 className="text-base font-semibold">Review stage summary</h2>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Describe what belongs in this stage before moving forward.</p>
    <ol className="mt-3 grid gap-2" role="list"><li className="text-xs text-neutral-600">1. Required content for this stage</li>
    <li className="text-xs text-neutral-600">2. Supporting information to include</li></ol></section>
    <section className="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 hidden group-has-[#tabs-numbered-stages-publish:checked]:block" id="tabs-numbered-stages-publish-panel" aria-labelledby="tabs-numbered-stages-publish-label"><h2 className="text-base font-semibold">Publish stage summary</h2>
    <p className="mt-2 text-sm text-pretty text-neutral-600">Describe what belongs in this stage before moving forward.</p>
    <ol className="mt-3 grid gap-2" role="list"><li className="text-xs text-neutral-600">1. Required content for this stage</li>
    <li className="text-xs text-neutral-600">2. Supporting information to include</li></ol></section></div>
  )
}
