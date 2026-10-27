export default function LoginQrCode() {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-lg border border-neutral-200 bg-white">
          <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-16">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Sign in with your phone</h1>
              <p className="mt-4 text-lg text-pretty text-neutral-600">Scan the code with the mobile app on a phone where you are already signed in.</p>
              <ol role="list" className="mt-8 space-y-4">
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium">1</span>
                  <span className="pt-1 text-base text-neutral-600">Open the app on your phone.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium">2</span>
                  <span className="pt-1 text-base text-neutral-600">Tap Menu, then Scan sign-in code.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-sm font-medium">3</span>
                  <span className="pt-1 text-base text-neutral-600">Point the camera at the code on this screen.</span>
                </li>
              </ol>
              <label className="mt-8 inline-flex items-center gap-2 text-sm text-neutral-600"><input name="remember" type="checkbox" className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" />Keep me signed in on this browser</label>
            </div>
            <figure className="flex flex-col items-center">
              <div role="img" aria-label="QR code placeholder: sign-in code to scan with your phone" className="relative size-48 rounded-lg bg-neutral-100 text-neutral-400">
                <span aria-hidden="true" className="absolute top-4 left-4 flex size-12 items-center justify-center rounded-md border-4 border-current"><span className="size-4 rounded-xs bg-current forced-colors:bg-[CanvasText]" /></span>
                <span aria-hidden="true" className="absolute top-4 right-4 flex size-12 items-center justify-center rounded-md border-4 border-current"><span className="size-4 rounded-xs bg-current forced-colors:bg-[CanvasText]" /></span>
                <span aria-hidden="true" className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-md border-4 border-current"><span className="size-4 rounded-xs bg-current forced-colors:bg-[CanvasText]" /></span>
                <span aria-hidden="true" className="absolute right-7 bottom-7 flex size-7 items-center justify-center rounded-sm border-4 border-current"><span className="size-2 bg-current forced-colors:bg-[CanvasText]" /></span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="absolute inset-0 m-auto size-10"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></svg>
              </div>
              <figcaption className="mt-4 text-sm text-neutral-500">The code refreshes every 60 seconds.</figcaption>
            </figure>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-neutral-200 px-6 py-5 sm:px-10">
            <p className="text-sm text-neutral-600">No phone nearby or camera unavailable?</p>
            <a href="#" className="inline-flex h-11 items-center justify-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900">Sign in with email instead</a>
          </div>
        </div>
      </div>
    </section>
  )
}
