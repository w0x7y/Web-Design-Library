export default function FaqDeveloperAnswers() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          A few implementation details
        </p>
        <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Questions before
          <br />
          the first request?
        </h2>
        <div className="mt-10 space-y-3">
          <details
            name="faq-developer-answers"
            open
            className="group rounded-xl border border-zinc-700 bg-zinc-900"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-medium hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
              01 / Can I test without a production account?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
              Yes. Every account includes a sandbox with separate API keys and a
              test inbox. Sandbox requests never reach real recipients and do
              not count toward your bill.
            </p>
          </details>
          <details
            name="faq-developer-answers"
            className="group rounded-xl border border-zinc-700 bg-zinc-900"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-medium hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
              02 / How do retries and delivery ordering work?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
              Failed deliveries retry with exponential backoff for up to 24
              hours. Events include a stable identifier for deduplication.
              Ordering is guaranteed within a single message stream.
            </p>
          </details>
          <details
            name="faq-developer-answers"
            className="group rounded-xl border border-zinc-700 bg-zinc-900"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-medium hover:text-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
              03 / What happens when I hit a rate limit?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
              The API returns a 429 status and a Retry-After header. Limits
              apply per API key, so one busy integration does not block your
              other projects. You can request a higher limit from support.
            </p>
          </details>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-zinc-700 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-400">
            Every endpoint has a runnable example.
          </p>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-lime-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Open the API reference{' '}
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
