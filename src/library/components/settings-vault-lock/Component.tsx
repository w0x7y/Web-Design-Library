export default function SettingsVaultLock() {
  return (
    <section
      className="bg-[radial-gradient(ellipse_at_top_left_in_oklab,#345e48,#111c19_65%)] px-5 py-12 text-[#e4f5eb] sm:px-8"
    >
      <div className="mx-auto max-w-7xl grid items-start gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div className="pt-4">
          <svg
            className="mb-8 size-12 text-[#b9e2c6]"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <rect x="9" y="21" width={30} height={23} rx="5"></rect>
            <path d="M15 21v-8a9 9 0 0 1 18 0v8M24 30v6"></path>
          </svg>
          <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#b0c9bc]">Latchkey / device security</p>
          <h2 className="mt-3 text-[2.25rem] leading-[1.1] tracking-[-0.035em] sm:text-[3rem]">Close the vault behind you.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#b0c9bc]">Set when your password vault locks on this device and what stays on the clipboard.</p>
          <aside className="mt-10 border-l-2 border-[#b9e2c6] pl-5" aria-label="Device receiving these settings">
            <h3 className="text-lg font-semibold">This MacBook</h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#b0c9bc]">Desktop app · last unlocked today at 09:42</p>
            <p className="block text-xs leading-5 text-[#b0c9bc]">Your other devices keep their own lock rules.</p>
          </aside>
        </div>
        <form className="rounded-2xl border border-[#688b76] bg-white/10 p-6 backdrop-blur-xl sm:p-8">
          <h3 className="text-lg font-semibold">Lock and clipboard</h3>
          <div className="mt-6 grid gap-6">
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-vault-lock-lock-after">
              Lock after inactivity
              <select
                className="min-w-0 w-full rounded-md border border-[#b0c9bc] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-vault-lock-lock-after"
                name="lock-after"
              >
                <option value="5">5 minutes</option>
                <option value="1">1 minute</option>
                <option value="15">15 minutes</option>
              </select>
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-medium" htmlFor="settings-vault-lock-clear-after">
              Clear copied passwords after
              <select
                className="min-w-0 w-full rounded-md border border-[#b0c9bc] bg-transparent px-3 py-3 text-base font-normal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-vault-lock-clear-after"
                name="clear-after"
              >
                <option value="30">30 seconds</option>
                <option value="15">15 seconds</option>
                <option value="60">60 seconds</option>
              </select>
            </label>
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-vault-lock-sleep"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b9e2c6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-vault-lock-sleep"
                name="sleep"
                type="checkbox"
                aria-describedby="settings-vault-lock-sleep-hint"
                defaultChecked
              />
              <span>
                <span>Lock when this device sleeps</span>
                <span className="block text-xs leading-5 text-[#b0c9bc]" id="settings-vault-lock-sleep-hint">Require another unlock when you return.</span>
              </span>
            </label>
            <label
              className="flex cursor-pointer items-start gap-3 text-sm leading-6"
              htmlFor="settings-vault-lock-biometric"
            >
              <input
                className="mt-1 size-4 shrink-0 cursor-pointer accent-[#b9e2c6] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                id="settings-vault-lock-biometric"
                name="biometric"
                type="checkbox"
                aria-describedby="settings-vault-lock-biometric-hint"
                defaultChecked
              />
              <span>
                <span>Allow biometric unlock</span>
                <span className="block text-xs leading-5 text-[#b0c9bc]" id="settings-vault-lock-biometric-hint">Use this device’s registered fingerprint.</span>
              </span>
            </label>
            <details>
              <summary className="cursor-pointer text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">When will I need my master password?</summary>
              <p className="mt-3 max-w-lg text-sm leading-6 text-[#b0c9bc]">After signing out or restarting the app, use your master password before biometric unlock becomes available again.</p>
            </details>
          </div>
          <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#688b76] pt-5">
            <button
              className="inline-flex cursor-pointer text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              type="reset"
            >
              Reset lock rules
            </button>
            <button
              className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-[#b9e2c6] px-5 py-3 text-sm font-semibold text-[#15241b] hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b9e2c6]"
              type="button"
            >
              Save device rules
            </button>
          </footer>
        </form>
      </div>
    </section>
  )
}
