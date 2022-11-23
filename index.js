/**
 * Check if the given code point, or the code point at the first index, is a
 * whitespace character.
 *
 * @param {string|number} value
 *   Code point or string.
 * @returns {boolean}
 *   Whether `character` is a whitespace character
 */
export function isWhitespaceCharacter(value) {
  return /\s/.test(
    typeof value === 'number' ? String.fromCodePoint(value) : value.charAt(0)
  )
}
