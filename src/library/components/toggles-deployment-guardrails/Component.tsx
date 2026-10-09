export default function TogglesDeploymentGuardrails() {
  return (
    <fieldset className="w-72 rounded-xl border border-slate-200 bg-white p-5 text-slate-900">
      <legend className="sr-only">Deployment protections</legend>
      <p className="text-[10px] font-medium tracking-widest text-slate-500 uppercase">
        Production environment
      </p>
      <h2 className="mt-1 text-lg font-semibold">Deploy with care</h2>
      <div className="mt-4 space-y-2">
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 has-checked:border-blue-300 has-checked:bg-blue-50">
          <input
            type="checkbox"
            name="toggles-deployment-guardrails-approval"
            defaultChecked
            aria-describedby="toggles-deployment-guardrails-approval-hint"
            className="mt-0.5 size-4 shrink-0 accent-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span>
            <span className="block text-xs font-semibold">
              Require approval
            </span>
            <span
              id="toggles-deployment-guardrails-approval-hint"
              className="mt-1 block text-[10px] text-slate-600"
            >
              One teammate reviews each release.
            </span>
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 has-checked:border-blue-300 has-checked:bg-blue-50">
          <input
            type="checkbox"
            name="toggles-deployment-guardrails-rollback"
            defaultChecked
            aria-describedby="toggles-deployment-guardrails-rollback-hint"
            className="mt-0.5 size-4 shrink-0 accent-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span>
            <span className="block text-xs font-semibold">
              Automatic rollback
            </span>
            <span
              id="toggles-deployment-guardrails-rollback-hint"
              className="mt-1 block text-[10px] text-slate-600"
            >
              Restore if health checks fail.
            </span>
          </span>
        </label>
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 p-3 has-checked:border-blue-300 has-checked:bg-blue-50">
          <input
            type="checkbox"
            name="toggles-deployment-guardrails-window"
            aria-describedby="toggles-deployment-guardrails-window-hint"
            className="mt-0.5 size-4 shrink-0 accent-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          />
          <span>
            <span className="block text-xs font-semibold">
              Business hours only
            </span>
            <span
              id="toggles-deployment-guardrails-window-hint"
              className="mt-1 block text-[10px] text-slate-600"
            >
              Weekdays, 09:00–17:00 UTC.
            </span>
          </span>
        </label>
      </div>
      <p className="mt-4 text-[10px] leading-4 text-slate-500">
        Build and security checks always run.
      </p>
    </fieldset>
  )
}
