// Fonts: IBM Plex Sans (https://fonts.google.com/specimen/IBM+Plex+Sans)
export default function FaqEnergySwitch() {
  return (
    <section className="bg-teal-950 font-['IBM_Plex_Sans',ui-sans-serif,system-ui,sans-serif] text-cyan-50 antialiased bg-[linear-gradient(145deg,#042f2e_0%,#083344_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.12em]">Tidegrid / changing supplier</p>
          <h2 className="mt-4 text-[2.5rem] leading-[1.1] tracking-[-0.035em] text-balance sm:text-[3.5rem]">A switch you can follow.</h2>
          <p className="mt-5 max-w-[38rem] text-[1rem] leading-[1.7]">You choose the tariff. We handle the handover and keep you informed at each step.</p>
        </header>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <ol role="list" className="grid self-start gap-6 border-l border-cyan-200/40 pl-6">
            <li>
              <h3 className="text-lg font-semibold">01 / Choose your tariff</h3>
              <p className="mt-2 max-w-[24rem] text-sm leading-[1.7] text-cyan-100">Use your annual usage or a recent bill for an estimate.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">02 / Confirm the date</h3>
              <p className="mt-2 max-w-[24rem] text-sm leading-[1.7] text-cyan-100">We email your start date and tell your current supplier.</p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">03 / Send a reading</h3>
              <p className="mt-2 max-w-[24rem] text-sm leading-[1.7] text-cyan-100">Your opening reading keeps the final and first bills aligned.</p>
            </li>
          </ol>
          <div className="grid gap-3">
            <details open className="group rounded-lg border border-cyan-200/40 bg-teal-900/60 px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-50 [&::-webkit-details-marker]:hidden">
                <span>Will my power be interrupted?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-cyan-100">
                <p>
                  No. Changing supplier changes who bills you, not the cables bringing electricity
                  to your home. Your supply continues throughout the switch.
                </p>
              </div>
            </details>
            <details className="group rounded-lg border border-cyan-200/40 bg-teal-900/60 px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-50 [&::-webkit-details-marker]:hidden">
                <span>Should I cancel with my current supplier?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-cyan-100">
                <p>
                  Leave that to us. We notify your current supplier once you confirm the switch.
                  Keep your old payment arrangement until their final bill has been settled.
                </p>
              </div>
            </details>
            <details className="group rounded-lg border border-cyan-200/40 bg-teal-900/60 px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-50 [&::-webkit-details-marker]:hidden">
                <span>Can I switch with a smart meter?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-cyan-100">
                <p>
                  Yes. Tell us the meter model when you apply. Most meters continue sending
                  readings; if yours cannot connect, you can submit readings while we arrange the
                  next step.
                </p>
              </div>
            </details>
            <details className="group rounded-lg border border-cyan-200/40 bg-teal-900/60 px-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-[1.0625rem] leading-[1.5] font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-50 [&::-webkit-details-marker]:hidden">
                <span>When will I receive my first bill?</span>
                <span aria-hidden="true" className="shrink-0 text-[1.25rem] leading-[1.25] group-open:rotate-45">+</span>
              </summary>
              <div className="max-w-[65ch] pb-6 text-[0.9375rem] leading-[1.7] text-cyan-100">
                <p>
                  Your first bill covers the period from your agreed start date to the end of the
                  billing month. We email it before collecting payment, with your usage and tariff
                  shown separately.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
