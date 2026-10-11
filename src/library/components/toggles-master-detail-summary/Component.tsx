export default function TogglesMasterDetailSummary() {
  return (
    <div className="group w-72 rounded-lg border border-neutral-200 bg-white p-4 text-neutral-900 sm:w-96"><label className="flex cursor-pointer items-center gap-3 text-sm font-semibold"><input className="size-4 shrink-0 accent-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900" id="toggles-master-detail-summary-active" name="mode" type="checkbox" defaultChecked aria-describedby="toggles-master-detail-summary-hint" />Enable shared mode</label>
    <p className="mt-2 text-xs text-neutral-500" id="toggles-master-detail-summary-hint">Share this item with the selected group.</p>
    <div className="mt-4 hidden grid-cols-2 gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 group-has-[#toggles-master-detail-summary-active:checked]:grid"><div><p className="text-xs text-neutral-500">Access</p>
    <p className="mt-1 text-sm font-medium text-neutral-900">Read only</p></div>
    <div className="border-l border-neutral-200 pl-3"><p className="text-xs text-neutral-500">Members</p>
    <p className="mt-1 text-sm font-medium text-neutral-900">12 people</p></div></div>
    <p className="mt-4 text-sm text-neutral-600 group-has-[#toggles-master-detail-summary-active:checked]:hidden">Shared access is turned off.</p></div>
  )
}
