export default function InputsInvoiceFields() {
  return (
    <section
      aria-label="Invoice fields"
      className="w-72 rounded-xl border border-slate-200 bg-white p-5 text-slate-900"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold">Invoice details</h2>
        <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
          DRAFT
        </span>
      </div>
      <label
        htmlFor="inputs-invoice-fields-amount"
        className="block text-xs font-medium text-slate-700"
      >
        Amount
      </label>
      <div className="mt-1.5 flex rounded-lg border border-slate-500 bg-slate-50">
        <span
          id="inputs-invoice-fields-currency"
          className="flex h-10 items-center rounded-l-lg border-r border-slate-500 bg-slate-100 px-3 text-sm text-slate-600"
        >
          USD
        </span>
        <input
          id="inputs-invoice-fields-amount"
          name="amount"
          aria-describedby="inputs-invoice-fields-currency"
          type="number"
          step="0.01"
          min="0"
          defaultValue="1250.00"
          className="h-10 min-w-0 flex-1 rounded-r-lg px-3 text-sm tabular-nums focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        />
      </div>
      <label
        htmlFor="inputs-invoice-fields-reference"
        className="mt-4 block text-xs font-medium text-slate-700"
      >
        Invoice reference
      </label>
      <input
        id="inputs-invoice-fields-reference"
        name="reference"
        type="text"
        defaultValue="INV-2026-048"
        className="mt-1.5 h-10 w-full rounded-lg border border-slate-500 bg-slate-50 px-3 font-mono text-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      />
      <label
        htmlFor="inputs-invoice-fields-due"
        className="mt-4 block text-xs font-medium text-slate-700"
      >
        Due date
      </label>
      <input
        id="inputs-invoice-fields-due"
        name="due"
        type="date"
        defaultValue="2026-10-30"
        aria-describedby="inputs-invoice-fields-hint"
        className="mt-1.5 h-10 w-full rounded-lg border border-slate-500 bg-slate-50 px-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-slate-900"
      />
      <p
        id="inputs-invoice-fields-hint"
        className="mt-2 text-[11px] text-slate-500"
      >
        Payment terms: 20 days from issue.
      </p>
    </section>
  )
}
