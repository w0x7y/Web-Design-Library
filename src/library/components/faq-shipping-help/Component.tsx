export default function FaqShippingHelp() {
  return (
    <section className="bg-slate-50 text-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_2fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            A little help with your order
          </p>
          <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight">
            From our door
            <br />
            to yours.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            Here are the details on delivery, returns and the things that
            sometimes happen along the way.
          </p>
          <div className="mt-7 rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="font-semibold">Need a person?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our team replies Monday–Friday, 9am–5pm.
            </p>
            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              Contact order support{' '}
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
        <div className="space-y-3">
          <details
            name="faq-shipping-help"
            open
            className="group rounded-xl border border-blue-200 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-5 py-5 font-medium hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
              When will my order arrive?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
              We pack orders within two working days. Standard delivery takes
              another three to five working days. Your confirmation email
              includes a tracking link as soon as the parcel leaves us.
            </p>
          </details>
          <details
            name="faq-shipping-help"
            className="group rounded-xl border border-blue-200 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-5 py-5 font-medium hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
              Do you ship outside the UK?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
              Yes, to most European countries. Delivery rates and estimated
              dates appear at checkout before you pay. Local import taxes, when
              applicable, are collected by the carrier.
            </p>
          </details>
          <details
            name="faq-shipping-help"
            className="group rounded-xl border border-blue-200 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-5 py-5 font-medium hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
              Can I return something?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
              You have 30 days from delivery to return an unused item in its
              original packaging. Email us with your order number and we will
              send the return instructions.
            </p>
          </details>
          <details
            name="faq-shipping-help"
            className="group rounded-xl border border-blue-200 bg-white"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-5 py-5 font-medium hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 [&::-webkit-details-marker]:hidden">
              What if something arrives damaged?
              <span
                aria-hidden="true"
                className="shrink-0 font-mono group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
              Send us a photo of the item and packaging within seven days. We
              will arrange a replacement or refund, and cover any return
              shipping.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
