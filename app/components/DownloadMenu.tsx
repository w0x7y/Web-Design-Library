import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { CAPTURE_VIEWPORTS, VIEWPORTS, type CaptureViewport } from '~/lib/viewports'

const SIZES = CAPTURE_VIEWPORTS.map((viewport) => ({ viewport, label: `${VIEWPORTS[viewport].label} PNG` }))

const ITEM =
  'flex h-9 w-full items-center gap-2 rounded-lg px-2.5 text-left text-sm text-zinc-800 outline-none hover:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800 dark:focus-visible:outline-zinc-100'

/**
 * The Download menu button: a disclosure menu (aria menu pattern) with a PNG per size and a
 * Transparent background switch. Toggling the switch keeps the menu open; picking a size closes it.
 * The trigger's look and content come from the parent, so it matches the other action buttons.
 */
export function DownloadMenu({
  disabled,
  transparent,
  onTransparentChange,
  onDownload,
  buttonClassName,
  children,
}: {
  disabled: boolean
  transparent: boolean
  onTransparentChange(transparent: boolean): void
  onDownload(viewport: CaptureViewport): void
  buttonClassName: string
  children: ReactNode
}) {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const focusOnOpen = useRef<'first' | 'last'>('first')

  const items = () => [...(menuRef.current?.querySelectorAll<HTMLElement>('[role^="menuitem"]') ?? [])]

  useEffect(() => {
    if (!open) return
    const list = items()
    list[focusOnOpen.current === 'first' ? 0 : list.length - 1]?.focus()
    // Closing on blur would swallow clicks in browsers that don't focus buttons on click, so watch the pointer instead.
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsidePress)
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress)
  }, [open])

  function openMenu(focus: 'first' | 'last') {
    focusOnOpen.current = focus
    setOpen(true)
  }

  function onTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    openMenu(event.key === 'ArrowDown' ? 'first' : 'last')
  }

  function onMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const list = items()
    const current = list.indexOf(document.activeElement as HTMLElement)
    const last = list.length - 1
    const target = {
      ArrowDown: current === last ? 0 : current + 1,
      ArrowUp: current <= 0 ? last : current - 1,
      Home: 0,
      End: last,
    }[event.key]
    if (target !== undefined) {
      event.preventDefault()
      list[target].focus()
    } else if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
      triggerRef.current?.focus()
    } else if (event.key === 'Tab') {
      setOpen(false) // focus moves on naturally
    }
  }

  function choose(viewport: CaptureViewport) {
    setOpen(false)
    triggerRef.current?.focus()
    onDownload(viewport)
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openMenu('first'))}
        onKeyDown={onTriggerKeyDown}
        className={buttonClassName}
      >
        {children}
      </button>
      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label="Download PNG"
          tabIndex={-1}
          onKeyDown={onMenuKeyDown}
          className="absolute top-full right-0 z-20 mt-1.5 w-56 sm:right-auto sm:left-0 rounded-xl border border-zinc-200 bg-white p-1 shadow-[0_8px_24px_-8px_rgb(0_0_0/0.18)] outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-[0_8px_24px_-8px_rgb(0_0_0/0.6)]"
        >
          {SIZES.map(({ viewport, label }) => (
            <button key={viewport} type="button" role="menuitem" tabIndex={-1} onClick={() => choose(viewport)} className={ITEM}>
              {label}
              <span className="ml-auto text-xs text-zinc-500 tabular-nums dark:text-zinc-400">{VIEWPORTS[viewport].width} px</span>
            </button>
          ))}
          <div role="separator" className="my-1 h-px bg-zinc-200 dark:bg-zinc-800" />
          <button
            type="button"
            role="menuitemcheckbox"
            aria-checked={transparent}
            tabIndex={-1}
            onClick={() => onTransparentChange(!transparent)}
            className={ITEM}
          >
            <span
              aria-hidden="true"
              className={`flex size-4 items-center justify-center rounded-sm border ${
                transparent
                  ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950'
                  : 'border-zinc-300 dark:border-zinc-600'
              }`}
            >
              {transparent && (
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-3">
                  <path d="m2.5 6.25 2.25 2.25 4.75-5" />
                </svg>
              )}
            </span>
            Transparent background
          </button>
        </div>
      )}
    </div>
  )
}
