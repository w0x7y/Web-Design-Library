import { useState, type ReactNode } from 'react'
import { Link } from 'react-router'
import { componentPath } from '../../src/library/urls'
import { copyTextAction, type CopyRefusal } from '../lib/copy-action'
import { useHydrated } from '../lib/use-hydrated'
import { SITE } from '../site'
import { ArrowDownIcon, CodeIcon, CopyIcon, FileIcon, SparkleIcon } from './icons'
import { LiveThumbnail } from './LiveThumbnail'
import { LogoMark } from './Logo'
import { ManualCopy } from './ManualCopy'
import { SHOWCASE } from './showcase'
import { button, TEXT_LINK } from './ui'

const MCP_SETUP_COMMAND = 'claude mcp add patternbook -- npx -y patternbook-mcp'

const FORMATS: { title: string; icon: ReactNode }[] = [
  {
    title: 'React + Tailwind v4',
    icon: <CodeIcon />,
  },
  {
    title: 'HTML + CSS',
    icon: <FileIcon />,
  },
  {
    title: 'AI brief',
    icon: <SparkleIcon />,
  },
]

function Showcase() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {SHOWCASE.map(({ slug, meta, place, delay, label }) => (
        // The entrance animation sits on the wrapper, so it never holds the card's hover transform.
        <div key={slug} className={`absolute animate-hero-rise motion-reduce:animate-none ${place} ${delay}`}>
          <Link
            to={componentPath(slug)}
            className="relative block rounded-lg shadow-[0_24px_56px_-20px_rgb(0_0_0/0.35)] transition-transform duration-300 ease-out hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus motion-reduce:transition-none dark:shadow-[0_24px_56px_-16px_rgb(0_0_0/0.9)]"
          >
            <LiveThumbnail meta={meta} />
            <span className={`absolute ${label} rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-900 shadow-sm ring-1 ring-zinc-950/5 backdrop-blur-sm`}>
              {meta.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  )
}

/** The home intro, agent setup and component showcase. */
export function Hero({ count }: { count: number }) {
  const hydrated = useHydrated()
  const [copyRefusal, setCopyRefusal] = useState<CopyRefusal | null>(null)
  const copySetup = () => void copyTextAction({
    text: MCP_SETUP_COMMAND,
    label: 'MCP setup command',
    message: 'Copied MCP setup command',
    event: { name: 'copy_mcp_setup' },
  }).then((result) => setCopyRefusal(result.status === 'refused' ? result : null))

  return (
    <section
      data-home-hero=""
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-zinc-200 bg-linear-to-b from-zinc-50 to-white dark:border-zinc-800 dark:from-zinc-900/60 dark:to-zinc-950"
    >
      {/* A dot grid that fades out from behind the showcase. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-zinc-300)_1px,transparent_1px)] bg-size-[20px_20px] [mask-image:radial-gradient(ellipse_60%_70%_at_75%_45%,black,transparent)] dark:bg-[radial-gradient(var(--color-zinc-800)_1px,transparent_1px)]"
      />
      <div className="relative mx-auto grid max-w-(--breakpoint-2xl) items-center gap-12 px-4 pt-12 pb-14 sm:px-6 sm:pt-16 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="min-w-0">
          <p className="inline-flex h-7 items-center gap-2 rounded-full border border-zinc-200 bg-white pr-3 pl-2 text-[13px] text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <LogoMark className="size-4 text-zinc-900 dark:text-white" />
            {count} components, free to copy
          </p>
          <h1
            id="hero-title"
            className="mt-6 max-w-xl text-[2.5rem]/[1.05] font-semibold tracking-[-0.035em] text-balance text-zinc-950 sm:text-6xl/[1.02] xl:text-7xl/[1] dark:text-white"
          >
            Copy-paste UI for you and your agent.
          </h1>
          <p className="mt-6 max-w-lg text-lg/relaxed text-pretty text-zinc-600 dark:text-zinc-400">
            Pick a layout, copy it into your project, or hand your agent the brief and let it build the layout for you.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            <a
              href="#components"
              className={button({ variant: 'primary', size: 'lg' })}
            >
              Browse components
              <ArrowDownIcon />
            </a>
            <a
              href="/llms.txt"
              className={button({ variant: 'secondary', size: 'lg' })}
            >
              llms.txt for agents
            </a>
          </div>
          <div className="mt-6 max-w-lg">
            <p className="text-[13px] text-zinc-600 dark:text-zinc-400">Or connect your agent:</p>
            <div className="mt-2 flex min-w-0 items-center gap-2 rounded-xl border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
              <code className="min-w-0 flex-1 overflow-x-auto px-1 py-1 font-shell-mono text-xs whitespace-nowrap text-zinc-700 dark:text-zinc-300">
                {MCP_SETUP_COMMAND}
              </code>
              <button
                type="button"
                aria-label="Copy MCP setup command"
                aria-disabled={!hydrated}
                onClick={copySetup}
                className={button({ variant: 'secondary', size: 'sm' })}
              >
                <CopyIcon />
                Copy
              </button>
            </div>
            <a href={`${SITE.repoUrl}/tree/main/mcp#readme`} className={`mt-2 inline-block ${TEXT_LINK}`}>
              Setup for Codex, Cursor and other clients
            </a>
            {copyRefusal && <ManualCopy payload={copyRefusal} onDismiss={() => setCopyRefusal(null)} />}
          </div>
          <ul role="list" aria-label="Every component comes as" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 sm:mt-12">
            {FORMATS.map((format) => (
              <li key={format.title} className="flex items-center gap-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
                  {format.icon}
                </span>
                {format.title}
              </li>
            ))}
          </ul>
        </div>
        {/* Below sm the stack would be too small to read, so the phone layout is text only. */}
        <div className="hidden sm:block">
          <Showcase />
        </div>
      </div>
    </section>
  )
}
