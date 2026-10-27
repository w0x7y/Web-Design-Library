export default function TabsCodeSnippet() {
  return (
    <div className="group w-72 rounded-lg bg-neutral-950 text-white sm:w-[28rem]">
      <div className="flex items-center justify-between rounded-t-lg border-b border-neutral-800 bg-neutral-900 px-2">
        <div role="radiogroup" aria-label="Package manager" className="flex">
          <label id="tabs-code-snippet-npm-label" className="-mb-px flex h-10 cursor-pointer items-center border-b-2 border-transparent px-3 text-sm font-medium text-neutral-300 transition-colors hover:text-white has-[:checked]:border-white has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText]">
            <input id="tabs-code-snippet-npm" type="radio" name="tabs-code-snippet" aria-controls="tabs-code-snippet-npm-panel" defaultChecked className="sr-only focus-visible:outline-hidden" />
            npm
          </label>
          <label id="tabs-code-snippet-pnpm-label" className="-mb-px flex h-10 cursor-pointer items-center border-b-2 border-transparent px-3 text-sm font-medium text-neutral-300 transition-colors hover:text-white has-[:checked]:border-white has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText]">
            <input id="tabs-code-snippet-pnpm" type="radio" name="tabs-code-snippet" aria-controls="tabs-code-snippet-pnpm-panel" className="sr-only focus-visible:outline-hidden" />
            pnpm
          </label>
          <label id="tabs-code-snippet-yarn-label" className="-mb-px flex h-10 cursor-pointer items-center border-b-2 border-transparent px-3 text-sm font-medium text-neutral-300 transition-colors hover:text-white has-[:checked]:border-white has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText]">
            <input id="tabs-code-snippet-yarn" type="radio" name="tabs-code-snippet" aria-controls="tabs-code-snippet-yarn-panel" className="sr-only focus-visible:outline-hidden" />
            yarn
          </label>
          <label id="tabs-code-snippet-bun-label" className="-mb-px flex h-10 cursor-pointer items-center border-b-2 border-transparent px-3 text-sm font-medium text-neutral-300 transition-colors hover:text-white has-[:checked]:border-white has-[:checked]:text-white has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white forced-colors:border-[Canvas] forced-colors:has-[:checked]:border-[CanvasText]">
            <input id="tabs-code-snippet-bun" type="radio" name="tabs-code-snippet" aria-controls="tabs-code-snippet-bun-panel" className="sr-only focus-visible:outline-hidden" />
            bun
          </label>
        </div>
        <button type="button" aria-label="Copy commands" className="flex size-8 items-center justify-center rounded-md text-neutral-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4"><rect x="8" y="8" width="13" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></svg>
        </button>
      </div>
      <section id="tabs-code-snippet-npm-panel" aria-labelledby="tabs-code-snippet-npm-label" className="hidden group-has-[#tabs-code-snippet-npm:checked]:block">
        <pre tabIndex={0} className="overflow-x-auto p-4 font-mono text-sm leading-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><code><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>npm install package-name</span><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>npx package-name init</span></code></pre>
      </section>
      <section id="tabs-code-snippet-pnpm-panel" aria-labelledby="tabs-code-snippet-pnpm-label" className="hidden group-has-[#tabs-code-snippet-pnpm:checked]:block">
        <pre tabIndex={0} className="overflow-x-auto p-4 font-mono text-sm leading-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><code><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>pnpm add package-name</span><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>pnpm dlx package-name init</span></code></pre>
      </section>
      <section id="tabs-code-snippet-yarn-panel" aria-labelledby="tabs-code-snippet-yarn-label" className="hidden group-has-[#tabs-code-snippet-yarn:checked]:block">
        <pre tabIndex={0} className="overflow-x-auto p-4 font-mono text-sm leading-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><code><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>yarn add package-name</span><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>yarn dlx package-name init</span></code></pre>
      </section>
      <section id="tabs-code-snippet-bun-panel" aria-labelledby="tabs-code-snippet-bun-label" className="hidden group-has-[#tabs-code-snippet-bun:checked]:block">
        <pre tabIndex={0} className="overflow-x-auto p-4 font-mono text-sm leading-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"><code><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>bun add package-name</span><span className="block"><span aria-hidden="true" className="text-neutral-400 select-none">$ </span>bunx package-name init</span></code></pre>
      </section>
    </div>
  )
}
