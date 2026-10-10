// Fonts: DM Mono (https://fonts.google.com/specimen/DM+Mono)
export default function TestimonialsSeismicStations() {
  return (
    <section className="bg-green-50 text-green-950 font-['DM_Mono',ui-monospace,monospace] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest">Faultline Network / Field reports</p>
            <h2 className="mt-5 max-w-2xl text-3xl leading-tight font-medium sm:text-5xl sm:leading-tight">Small signals. Shared records.</h2>
          </div>
          <p className="border-2 border-green-950 bg-yellow-200 p-4 text-sm">64 stations reporting daily</p>
        </header>
        <div className="mt-10 grid gap-0.5 border-2 border-green-950 bg-green-300 md:grid-cols-2">
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">FN / 0047</p>
            <h3 className="mt-4 text-xl font-medium">School site · Ridgeway</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“The installation notes covered the noisy hours at our school. Our students can now compare their own station with the next valley.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Nadia Park / Science teacher, Ridgeway</figcaption>
          </figure>
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">FN / 0052</p>
            <h3 className="mt-4 text-xl font-medium">Research site · East Bay</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“We downloaded the raw waveforms with their timing checks. That made it much easier to compare the event across three stations.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Emil Soto / Research fellow, East Bay</figcaption>
          </figure>
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">FN / 0061</p>
            <h3 className="mt-4 text-xl font-medium">Civic site · North Hall</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“The team explained which signals came from passing trucks. We know what we are looking at before we share a record.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Asha Reed / Facilities lead, North Hall</figcaption>
          </figure>
          <figure className="bg-green-50 p-6 sm:p-8">
            <p className="text-xs text-green-800">FN / 0064</p>
            <h3 className="mt-4 text-xl font-medium">Field site · Quarry Road</h3>
            <blockquote className="mt-5 text-base leading-relaxed">“When our connection dropped, the station kept recording locally. The missing hours appeared as soon as we were back online.”</blockquote>
            <figcaption className="mt-6 text-xs text-green-800">Owen Chen / Field technician, Quarry Road</figcaption>
          </figure>
        </div>
        <a className="mt-8 inline-flex w-fit py-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" href="#">Read the station field guide</a>
      </div>
    </section>
  )
}
