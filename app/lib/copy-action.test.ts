import { copyTextAction, type TextCopyPorts } from './copy-action'

const request = {
  text: 'claude mcp add patternbook -- npx -y patternbook-mcp',
  label: 'MCP setup command',
  message: 'Copied MCP setup command',
  event: { name: 'copy_mcp_setup' },
} satisfies Parameters<typeof copyTextAction>[0]

function setup() {
  return {
    copyText: vi.fn<TextCopyPorts['copyText']>().mockResolvedValue(true),
    notify: { success: vi.fn(), error: vi.fn() },
    track: vi.fn<TextCopyPorts['track']>(),
  } satisfies TextCopyPorts
}

test('copies the exact text before announcing and tracking success', async () => {
  const ports = setup()
  const done = copyTextAction(request, ports)
  expect(ports.copyText).toHaveBeenCalledWith(request.text)
  expect(ports.notify.success).not.toHaveBeenCalled()
  expect(ports.track).not.toHaveBeenCalled()
  expect(await done).toEqual({ status: 'copied' })
  expect(ports.notify.success.mock.calls).toEqual([[request.message]])
  expect(ports.notify.error).not.toHaveBeenCalled()
  expect(ports.track.mock.calls).toEqual([[request.event]])
})

test('a refused write returns its exact payload, toasts once and records nothing', async () => {
  const ports = setup()
  ports.copyText.mockResolvedValue(false)
  expect(await copyTextAction(request, ports)).toEqual({ status: 'refused', text: request.text, label: request.label })
  expect(ports.notify.error.mock.calls).toEqual([["Couldn't copy"]])
  expect(ports.notify.success).not.toHaveBeenCalled()
  expect(ports.track).not.toHaveBeenCalled()
})

test('a disposed owner skips the write and stays silent', async () => {
  const ports = setup()
  expect(await copyTextAction({ ...request, isDisposed: () => true }, ports)).toEqual({ status: 'skipped' })
  expect(ports.copyText).not.toHaveBeenCalled()
  expect(ports.notify.success).not.toHaveBeenCalled()
  expect(ports.notify.error).not.toHaveBeenCalled()
  expect(ports.track).not.toHaveBeenCalled()
})

test.each([true, false])('a pending write that resolves %s after disposal stays silent', async (copied) => {
  const ports = setup()
  let disposed = false
  let finish!: (copied: boolean) => void
  ports.copyText.mockReturnValue(new Promise((resolve) => { finish = resolve }))
  const done = copyTextAction({ ...request, isDisposed: () => disposed }, ports)
  disposed = true
  finish(copied)
  expect(await done).toEqual({ status: 'skipped' })
  expect(ports.notify.success).not.toHaveBeenCalled()
  expect(ports.notify.error).not.toHaveBeenCalled()
  expect(ports.track).not.toHaveBeenCalled()
})
