// Fonts: Manrope
export default function BadgesDonorRecord() {
  return (
    <section aria-label="HemaVale donor record badges" className="w-72 rounded-2xl border border-red-200 bg-white p-5 font-['Manrope',ui-sans-serif,system-ui,sans-serif] text-red-950 sm:w-[22rem]">
      <h2 className="text-xs font-semibold tracking-wide">HemaVale / Your donor record</h2>
      <p className="mt-4 flex items-end gap-3 rounded-lg bg-red-50 p-4"><span className="text-5xl leading-none font-semibold tracking-tight tabular-nums">08</span><span className="pb-1 text-xs">Lifetime<br />donations</span></p>
      <ul role="list" className="mt-5 grid grid-cols-2 gap-2">
        <li className="flex flex-col gap-1 rounded-lg bg-red-800 p-3 text-white"><span className="text-xs">Blood group</span><span className="text-lg font-semibold">O positive</span></li>
        <li className="flex flex-col gap-1 rounded-lg border border-red-200 bg-red-50 p-3"><span className="text-xs">Next visit</span><span className="text-lg font-semibold">Booked</span></li>
      </ul>
      <p className="mt-4 border-t border-red-200 pt-3 text-xs">Appointment · 22 October, 09:30</p>
    </section>
  )
}
