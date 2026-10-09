export default function FeaturesSecurityAssurance() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
          Designed for responsibility
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          Your data deserves
          <br />a careful home.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-slate-600">
          Vault keeps your documents private and gives your team the controls to
          decide who can see, share and change them.
        </p>
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-blue-950">
            <strong>Security is part of every plan.</strong> The essentials come
            standard.
          </p>
          <a
            href="#"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            Visit the trust center{' '}
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
        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          <div className="flex gap-4 border-t border-slate-200 py-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            <div>
              <h3 className="font-semibold">Encryption at every step</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                TLS protects documents in transit. AES-256 encryption protects
                stored files and their backups.
              </p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-slate-200 py-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            <div>
              <h3 className="font-semibold">Access you can audit</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Set permissions by workspace and review a timestamped record of
                document access and changes.
              </p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-slate-200 py-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            <div>
              <h3 className="font-semibold">A region you choose</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Keep your workspace in the EU or US. The region applies to
                documents, metadata and backups.
              </p>
            </div>
          </div>
          <div className="flex gap-4 border-t border-slate-200 py-6">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 size-5 shrink-0 text-blue-700"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
            <div>
              <h3 className="font-semibold">Simple, complete exports</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Download your original files and permission records at any time,
                without contacting support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
