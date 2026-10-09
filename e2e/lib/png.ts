import { PNG } from 'pngjs'

/** The RGBA pixels of the `width` × `height` box at (`x`, `y`) in `png`, for diffing two renders of the same area. */
export function crop(png: PNG, { x = 0, y = 0, width, height }: { x?: number; y?: number; width: number; height: number }): Buffer {
  const out = Buffer.alloc(width * height * 4)
  for (let row = 0; row < height; row++) {
    const start = ((y + row) * png.width + x) * 4
    png.data.copy(out, row * width * 4, start, start + width * 4)
  }
  return out
}
