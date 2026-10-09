export default function SettingsAccountProfile() {
  return (
    <section className="bg-[#f4f1eb] px-6 py-10 text-[#37312c] sm:px-12">
      <form className="mx-auto max-w-2xl" action="#">
        <header className="flex items-center gap-5 border-b border-[#37312c]/20 pb-6">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[#37312c] font-serif text-2xl text-[#f4f1eb]">
            AR
          </span>
          <div className="grid gap-2">
            <h2 className="font-serif text-3xl font-normal">Your profile</h2>
            <p className="text-sm text-[#746a61]">
              How you appear to the community.
            </p>
          </div>
        </header>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="settings-account-profile-first"
          >
            First name (required)
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="settings-account-profile-first"
              name="first"
              type="text"
              autoComplete="given-name"
              placeholder="Alex"
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="settings-account-profile-last"
          >
            Last name (required)
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="settings-account-profile-last"
              name="last"
              type="text"
              autoComplete="family-name"
              placeholder="Rivera"
              required
            />
          </label>
        </div>
        <div className="mt-5 grid gap-5">
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="settings-account-profile-email"
          >
            Email address (required)
            <input
              className="min-w-0 w-full rounded-lg border border-current/60 bg-transparent px-3 py-2.5 font-normal placeholder:text-current/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current leading-[normal]"
              id="settings-account-profile-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="alex@example.com"
              required
            />
          </label>
          <label
            className="grid gap-2 text-sm font-medium"
            htmlFor="settings-account-profile-bio"
          >
            A few words about you
            <textarea
              className="min-h-24 w-full resize-y rounded-lg border border-[#37312c]/60 bg-transparent px-3 py-3 font-normal placeholder:text-current/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              name="bio"
              id="settings-account-profile-bio"
              maxLength={240}
              aria-describedby="settings-account-profile-bio-hint"
              placeholder="What are you working on?"
            ></textarea>
            <span id="settings-account-profile-bio-hint" className="text-xs font-normal text-[#746a61]">Up to 240 characters.</span>
          </label>
        </div>
        <footer className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#37312c]/20 pt-5">
          <a
            className="text-sm font-medium underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
            href="#"
          >
            View public profile
          </a>
          <button
            className="cursor-pointer rounded-full bg-[#37312c] px-5 py-3 text-sm font-medium text-[#f4f1eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
            type="button"
          >
            Save profile
          </button>
        </footer>
      </form>
    </section>
  )
}
