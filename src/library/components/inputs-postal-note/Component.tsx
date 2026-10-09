export default function InputsPostalNote() {
  return (
    <section
      aria-label="Gift note fields"
      className="w-72 border border-stone-300 bg-stone-50 p-5 text-stone-900"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-serif text-2xl">A little note</h2>
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center border border-dashed border-stone-400 text-lg"
        >
          ✦
        </span>
      </div>
      <label
        htmlFor="inputs-postal-note-from"
        className="mt-5 block text-[10px] font-semibold tracking-widest uppercase"
      >
        From
      </label>
      <input
        id="inputs-postal-note-from"
        name="sender"
        type="text"
        autoComplete="name"
        defaultValue="Jules"
        className="mt-1 h-10 w-full border-b border-stone-400 px-1 font-serif text-lg focus-visible:border-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      />
      <label
        htmlFor="inputs-postal-note-message"
        className="mt-4 block text-[10px] font-semibold tracking-widest uppercase"
      >
        Your message
      </label>
      <textarea
        id="inputs-postal-note-message"
        name="message"
        aria-describedby="inputs-postal-note-hint"
        maxLength={180}
        defaultValue="For the slow mornings and the good conversations. Happy birthday, Bea."
        className="mt-2 h-24 w-full resize-none border border-stone-300 bg-white p-3 font-serif text-base leading-6 focus-visible:border-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      />
      <p
        id="inputs-postal-note-hint"
        className="mt-2 text-[11px] text-stone-600"
      >
        Up to 180 characters. Printed on a gift card.
      </p>
    </section>
  )
}
