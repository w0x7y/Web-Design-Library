// Fonts: Familjen Grotesk (https://fonts.google.com/specimen/Familjen+Grotesk)
export default function CtaLanguageTable() {
  return (
    <section className="bg-sky-100 text-blue-950 font-['Familjen_Grotesk',ui-sans-serif,system-ui,sans-serif] antialiased">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-20">
        <p className="text-2xl font-bold tracking-tight">Parlour</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-20">
          <div className="flex flex-col items-start gap-4">
            <figure className="max-w-sm rounded-[2rem_2rem_2rem_0.25rem] bg-white p-6">
              <blockquote
                lang="fr"
                className="text-[1.75rem] leading-tight font-medium"
              >
                Bonjour, moi c'est Ada.
              </blockquote>
              <figcaption className="mt-3 text-xs font-medium text-blue-800">
                Ada · French speaker, learning English
              </figcaption>
            </figure>
            <figure className="ml-6 max-w-sm rounded-[2rem_2rem_0.25rem_2rem] bg-yellow-200 p-6 sm:ml-16">
              <blockquote className="text-[1.75rem] leading-tight font-medium">
                I'm still learning, too.
              </blockquote>
              <figcaption className="mt-3 text-xs font-medium text-blue-800">
                Ben · English speaker, learning French
              </figcaption>
            </figure>
          </div>
          <div>
            <h2 className="text-[2.75rem] leading-[1.05] font-semibold tracking-tight sm:text-[3.75rem]">
              Pull up a chair. Try a new sentence.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-7">
              A café table, a few new faces and a language you want to use. Our
              hosts pair you up, keep the conversation moving and make room for
              mistakes.
            </p>
            <div className="mt-7">
              <a
                href="#"
                className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-blue-950 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-950"
              >
                Find my language table
              </a>
            </div>
            <p className="mt-5 text-sm text-blue-800">
              Sunday mornings · Café Fern · £6, coffee included
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
