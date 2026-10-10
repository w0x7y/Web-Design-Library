import type { AtRule, Declaration, Node } from 'postcss'

/** Split utility tokens without splitting arbitrary variants or values containing spaces. */
export function classTokens(value: string): string[] {
  return value.match(/(?:[^\s[\]]|\[[^\]]*\])+/g) ?? []
}

function baseUtility(token: string): string {
  let depth = 0
  let start = 0
  for (let i = 0; i < token.length; i++) {
    if (token[i] === '[' || token[i] === '(') depth++
    if (token[i] === ']' || token[i] === ')') depth--
    if (token[i] === ':' && depth === 0) start = i + 1
  }
  return token.slice(start).replace(/^!|!$/g, '')
}

/** Colour utilities overlap size and style utilities; those structural forms are allowed. */
export function outsideKit(token: string): boolean {
  const utility = baseUtility(token)
  if (/^(?:bg-(?:linear|radial|conic|gradient)(?:-|$)|bg-\[url\(|backdrop-|mix-blend-|font-\[|font-serif$)/.test(utility)) return true
  if (/^-?(?:blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|saturate|sepia|filter)(?:-|$)/.test(utility)) return true
  if (utility.startsWith('animate-') && !['animate-spin', 'animate-none'].includes(utility)) return true
  const match = utility.match(/^(bg|text|border(?:-[xytrblse])?|outline|ring-offset|ring|divide|fill|stroke|decoration|placeholder|caret|accent|shadow|from|via|to)-(.+)$/)
  if (!match) return false
  const [, prefix, value] = match
  // Forced-colors mode repaints in system colours, so `forced-colors:` may name one (`border-[ButtonText]`).
  const systemColour = value.match(/^\[(?:color:)?([a-z]+)\]$/i)?.[1].toLowerCase()
  if (systemColour && SYSTEM_COLOURS.has(systemColour) && /(?:^|:)forced-colors:/.test(token)) return false
  if (/^(?:white|black|transparent|current|inherit|neutral-(?:50|100|200|300|400|500|600|700|800|900|950))(?:\/(?:\d+(?:\.\d+)?|\[[\d.%]+\]))?$/.test(value)) return false
  if (/^(?:fill|stroke)$/.test(prefix) && value === 'none') return false
  const numeric = /^(?:\d+(?:\.\d+)?|\[(?:length:)?[\d.]+(?:px|rem|em)?\])$/
  if (/^(?:border(?:-[xytrblse])?|outline|ring|ring-offset|divide|stroke|decoration)$/.test(prefix) && numeric.test(value)) return false
  if (prefix === 'text' && /^(?:xs|sm|base|lg|xl|[2-9]xl|left|center|right|justify|start|end|wrap|nowrap|balance|pretty|ellipsis|clip)$/.test(value)) return false
  if (prefix === 'text' && /^\[(?:length:)?(?:[\d.]+(?:px|rem|em|vw|vh|%)|(?:calc|clamp|min|max)\(.+\))\]$/.test(value)) return false
  if (prefix.startsWith('border') && /^(?:[xytrblse]|solid|dashed|dotted|double|hidden|none|collapse|separate|spacing-(?:[\d.]+|[xy]-[\d.]+))$/.test(value)) return false
  if (prefix === 'outline' && /^(?:solid|dashed|dotted|double|none|hidden|offset-(?:-?[\d.]+|\[[\d.]+(?:px|rem|em)\]))$/.test(value)) return false
  if (prefix === 'ring' && value === 'inset') return false
  if (prefix === 'divide' && /^(?:[xy](?:-(?:reverse|[\d.]+))?|solid|dashed|dotted|double|none)$/.test(value)) return false
  if (prefix === 'shadow' && /^(?:2xs|xs|sm|md|lg|xl|2xl|inner|none)$/.test(value)) return false
  if (prefix === 'decoration' && /^(?:solid|double|dotted|dashed|wavy|auto|from-font)$/.test(value)) return false
  if (prefix === 'bg' && /^(?:none|fixed|local|scroll|clip-(?:border|padding|content|text)|origin-(?:border|padding|content)|center|top|bottom|left|right|size-(?:auto|cover|contain)|cover|contain|auto|repeat(?:-[xy]|-round|-space)?|no-repeat|position-.+)$/.test(value)) return false
  return true
}

// CSS named colours and system colours, so colours within shorthand declarations are checked too.
const NAMED_COLOURS = new Set(('aliceblue antiquewhite aqua aquamarine azure beige bisque blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgrey darkgreen darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray grey green greenyellow honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgrey lightgreen lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple rebeccapurple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat whitesmoke yellow yellowgreen').split(' '))
const SYSTEM_COLOURS = new Set(('accentcolor accentcolortext activetext buttonborder buttonface buttontext canvas canvastext field fieldtext graytext highlight highlighttext linktext mark marktext selecteditem selecteditemtext visitedtext activeborder activecaption appworkspace background buttonhighlight buttonshadow captiontext inactiveborder inactivecaption inactivecaptiontext infobackground infotext menu menutext scrollbar threeddarkshadow threedface threedhighlight threedlightshadow threedshadow window windowframe windowtext').split(' '))
const MONO_STACK = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'

function forcedColours(declaration: Declaration): boolean {
  for (let node = declaration.parent as Node | undefined; node; node = node.parent as Node | undefined) {
    if (node.type === 'atrule' && (node as AtRule).name.toLowerCase() === 'media' && /\(\s*forced-colors\s*:\s*active\s*\)/i.test((node as AtRule).params)) return true
  }
  return false
}

function achromaticFunction(name: string, value: string): boolean {
  const channels = value.split('/')[0].trim().split(/[\s,]+/)
  if (name === 'oklch') return channels.length === 3 && /^[-+]?[\d.]+%?$/.test(channels[1]) && Number.parseFloat(channels[1]) === 0
  if (name === 'rgb' || name === 'rgba') {
    const rgb = channels.slice(0, 3)
    return rgb.length === 3 && rgb.every((part) => /^[-+]?[\d.]+%?$/.test(part)) && rgb.every((part) => Math.abs(channelValue(part) - channelValue(rgb[0])) < 1e-9)
  }
  return false
}

function channelValue(value: string): number {
  return Number.parseFloat(value) / (value.endsWith('%') ? 100 : 255)
}

/** Colour functions can contain nested calls; inspect the whole value rather than its first ')'. */
function paintTokens(value: string): string[] {
  const tokens: string[] = []
  const pattern = /#[\da-f]+\b|\b[a-z][\w-]*\b/gi
  for (let match = pattern.exec(value); match; match = pattern.exec(value)) {
    let token = match[0]
    if (/^(?:oklch|oklab|rgb|rgba|hsl|hsla|hwb|lab|lch|color)$/i.test(token)) {
      const after = value.slice(pattern.lastIndex).match(/^\s*\(/)
      if (after) {
        let end = pattern.lastIndex + after[0].length
        let depth = 1
        for (; end < value.length && depth; end++) {
          if (value[end] === '(') depth++
          if (value[end] === ')') depth--
        }
        token = value.slice(match.index, end)
        pattern.lastIndex = end
      }
    }
    tokens.push(token)
  }
  return tokens
}

/** Validate literal paints anywhere in a declaration, including borders and shadows. */
export function checkKitDeclaration(declaration: Declaration, resetLine: number): string[] {
  const out: string[] = []
  const value = declaration.value
  if (/(?:[\w-]+-gradient|url)\s*\(/i.test(value)) out.push('styles.css must not use gradients or url()')
  if (declaration.prop.toLowerCase() === 'font-family' && declaration.source?.start?.line !== resetLine && value !== 'inherit' && value !== MONO_STACK) {
    out.push('styles.css font-family must be the reset stack, inherit, or Tailwind\'s --font-mono stack')
  }
  // Remove quoted strings (font names and content) before looking for paint tokens.
  const unquoted = value.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'/g, '')
  for (const paint of paintTokens(unquoted)) {
    const token = paint.toLowerCase()
    let invalid = false
    if (token.startsWith('#')) {
      const hex = token.slice(1)
      const size = hex.length === 3 || hex.length === 4 ? 1 : 2
      invalid = ![3, 4, 6, 8].includes(hex.length) || hex.slice(0, size) !== hex.slice(size, size * 2) || hex.slice(0, size) !== hex.slice(size * 2, size * 3)
    } else if (token.includes('(')) {
      const [, name, channels] = token.match(/^(\w+)\s*\((.*)\)$/s)!
      invalid = !achromaticFunction(name, channels)
    } else {
      invalid = NAMED_COLOURS.has(token) || (SYSTEM_COLOURS.has(token) && !forcedColours(declaration))
    }
    if (invalid) out.push(`styles.css colour "${paint}" must be achromatic and from the wireframe kit`)
  }
  return out
}
