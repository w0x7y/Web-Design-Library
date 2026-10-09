export default function BadgesReleaseTrack() {
  return (
    <section
      aria-label="Release status badges"
      className="w-72 rounded-2xl border border-zinc-700 bg-zinc-950 p-5 text-zinc-100"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Release channels</h2>
        <span className="font-mono text-[10px] text-zinc-400">ORBIT / API</span>
      </div>
      <ul role="list" className="mt-4 space-y-4">
        <li className="flex items-center justify-between gap-2 border-t border-zinc-800 pt-4">
          <div>
            <p className="font-mono text-sm">v2.14.0</p>
            <p className="mt-1 text-[10px] text-zinc-400">
              Deployed 2 hours ago
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-900 bg-emerald-950 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-emerald-300"
            />
            Production
          </span>
        </li>
        <li className="flex items-center justify-between gap-2 border-t border-zinc-800 pt-4">
          <div>
            <p className="font-mono text-sm">v2.15.0-rc</p>
            <p className="mt-1 text-[10px] text-zinc-400">
              Built 18 minutes ago
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-sky-900 bg-sky-950 px-2.5 py-1 text-[10px] font-medium text-sky-300">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-sky-300"
            />
            Preview
          </span>
        </li>
        <li className="flex items-center justify-between gap-2 border-t border-zinc-800 pt-4">
          <div>
            <p className="font-mono text-sm">fix/auth-42</p>
            <p className="mt-1 text-[10px] text-zinc-400">
              Waiting for approval
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-amber-900 bg-amber-950 px-2.5 py-1 text-[10px] font-medium text-amber-300">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-amber-300"
            />
            In review
          </span>
        </li>
      </ul>
      <p className="mt-5 font-mono text-[10px] text-zinc-500">
        Every build. One clear status.
      </p>
    </section>
  )
}
