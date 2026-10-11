export default function CtaContactForm() {
  return (
    <section className="bg-white text-neutral-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:py-24 md:grid-cols-2 md:gap-16">
        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-neutral-500">
          <span aria-hidden="true" className="size-2 rounded-full border border-neutral-900 bg-neutral-900 forced-colors:border-[CanvasText] forced-colors:bg-[CanvasText]"></span>
          Taking new projects
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Heading that invites a short enquiry</h2>
        <p className="mt-6 text-lg text-pretty text-neutral-600">Supporting copy that describes what to include and who will help with the next step.</p>
        <p className="mt-8 text-base text-neutral-600">Alternative contact for a short question</p>
        <a href="mailto:name@example.com" className="mt-2 inline-block font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">name@example.com</a>
      </div>
      <form action="#" method="get" className="rounded-lg border border-neutral-200 bg-white p-6">
        <div>
          <label htmlFor="cta-contact-form-email" className="mb-2 block text-sm font-medium">Email</label>
          <input id="cta-contact-form-email" name="email" type="email" autoComplete="email" required placeholder="name@example.com" className="h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />
        </div>
        <div className="mt-6">
          <label htmlFor="cta-contact-form-message" className="mb-2 block text-sm font-medium">Message</label>
          <textarea id="cta-contact-form-message" name="message" required rows={4} placeholder="A short description of what you need" aria-describedby="cta-contact-form-hint" className="min-h-32 w-full resize-y rounded-md border border-neutral-300 bg-white p-3 text-sm placeholder:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"></textarea>
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p id="cta-contact-form-hint" className="text-sm text-neutral-500">Reply-time hint that sets expectations</p>
          <button type="submit" className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 shrink-0">Send enquiry</button>
        </div>
      </form>
    </div>
  </section>
  )
}
