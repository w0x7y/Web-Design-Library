// Fonts: Archivo (https://fonts.google.com/specimen/Archivo)
export default function DropdownsDemolitionPermits() {
  return (
    <div className="w-72 sm:w-80 border-2 border-black bg-stone-100 text-black font-['Archivo',ui-sans-serif,system-ui,sans-serif]">
      <p className="flex items-center justify-between border-b-2 border-black bg-black px-4 py-3 text-xs font-bold text-white"><span>BREAKLINE</span><span>PERMIT DESK</span></p>
      <details open className="group p-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current border-b-2 border-black pb-3">
          <span className="text-xl font-bold tracking-tight">Site documents</span>
          <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-4 shrink-0 group-open:rotate-180">
            <path d="m4 6 4 4 4-4" />
          </svg>
        </summary>
        <ol role="list" className="mt-4 border-l-2 border-black">
          <li>
            <a href="#breakline-site-plan" className="grid grid-cols-[2rem_1fr] items-center gap-3 border-b border-black px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-orange-200">
              <span aria-hidden="true" className="text-2xl font-bold">01</span><span><span className="block text-xs font-semibold">Site boundary plan</span><span className="mt-1 block text-[10px] uppercase">Approved / 08 Oct</span></span>
            </a>
          </li>
          <li>
            <a href="#breakline-abatement" className="grid grid-cols-[2rem_1fr] items-center gap-3 border-b border-black px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-orange-200">
              <span aria-hidden="true" className="text-2xl font-bold">02</span><span><span className="block text-xs font-semibold">Hazardous materials survey</span><span className="mt-1 block text-[10px] uppercase">Review due / 12 Oct</span></span>
            </a>
          </li>
          <li>
            <a href="#breakline-notice" className="grid grid-cols-[2rem_1fr] items-center gap-3 border-b border-black px-3 py-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current hover:bg-orange-200">
              <span aria-hidden="true" className="text-2xl font-bold">03</span><span><span className="block text-xs font-semibold">Neighbour notification</span><span className="mt-1 block text-[10px] uppercase">Delivered / 09 Oct</span></span>
            </a>
          </li>
        </ol>
        <p className="mt-4 flex items-center justify-between bg-orange-300 px-3 py-2 text-xs font-semibold"><span>Quarry Street, plot 6</span><span>BL-106</span></p>
      </details>
    </div>
  )
}
