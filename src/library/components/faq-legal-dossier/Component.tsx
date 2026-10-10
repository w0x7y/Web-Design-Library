// Fonts: Manrope (https://fonts.google.com/specimen/Manrope)
export default function FaqLegalDossier() {
  return (
    <section className="bg-slate-100 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-300 pb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em]">Clausewell / implementation notes</p>
          <p className="text-sm font-medium text-teal-800">For legal and operations teams</p>
        </div>
        <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">A clear record, from day one.</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[16rem_1fr]">
          <aside className="border-l-2 border-teal-700 pl-5">
            <h3 className="text-lg font-semibold">Moving your contracts</h3>
            <p className="mt-3 text-sm leading-[1.7] text-slate-600">
              The practical details your team needs before importing a folder or inviting a
              reviewer. No sales call required.
            </p>
          </aside>
          <div className="grid gap-0 rounded-lg border border-slate-300 bg-white px-6">
            <details open className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>Can we import our existing contract folder?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Yes. Upload PDF or DOCX files in batches of up to 500. Clausewell keeps the
                  originals and lets you review extracted dates and counterparties before anything
                  enters your live register.
                </p>
              </div>
            </details>
            <details className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>Who can see confidential agreements?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Each workspace has named access groups. A contract inherits its folder
                  permissions, and an owner can restrict it further. Reviewers see only the
                  agreements shared with their group.
                </p>
              </div>
            </details>
            <details className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>Does an approver need a paid seat?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Occasional approvers can review an assigned agreement through a guest invitation.
                  They can comment and record a decision, but cannot browse the rest of your
                  register.
                </p>
              </div>
            </details>
            <details className="group border-b border-slate-200 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 [&::-webkit-details-marker]:hidden">
                <span>Can we export the audit history?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7]">
                <p>
                  Every agreement has a dated activity log. Export it as a CSV alongside the
                  original files, comments and signed version when preparing a handover or internal
                  review.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
