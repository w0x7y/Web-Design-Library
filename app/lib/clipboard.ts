/** Writes text to the clipboard. Resolves false when the browser lacks the API or refuses the write. */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

/**
 * Writes a PNG to the clipboard while it is still being made. Call it synchronously inside the
 * click handler: Safari only accepts the write when the ClipboardItem is built within the user
 * activation, which is why it takes the pending promise rather than the finished blob.
 * Resolves false when the browser lacks the API, refuses the write, or `png` rejects.
 */
export function copyImage(png: Promise<Blob>): Promise<boolean> {
  try {
    const item = new ClipboardItem({ 'image/png': png })
    return navigator.clipboard.write([item]).then(
      () => true,
      () => false,
    )
  } catch {
    return Promise.resolve(false)
  }
}
