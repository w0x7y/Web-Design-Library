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

/** The RGBA pixels in grayscale: each colour becomes the gray of its Rec. 709 luma, and alpha is kept. */
export function grayscale(rgba: Buffer): Buffer {
  const out = Buffer.alloc(rgba.length)
  for (let i = 0; i < rgba.length; i += 4) {
    out[i] = out[i + 1] = out[i + 2] = Math.round(0.2126 * rgba[i] + 0.7152 * rgba[i + 1] + 0.0722 * rgba[i + 2])
    out[i + 3] = rgba[i + 3]
  }
  return out
}
