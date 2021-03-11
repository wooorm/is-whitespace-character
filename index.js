/**
 * Check if the given character code, or the character code at the first
 * character, is a whitespace character.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is a whitespace character
 */
export function isWhitespaceCharacter(character) {
  return /\s/.test(
    typeof character === 'number'
      ? String.fromCharCode(character)
      : character.charAt(0)
  )
}
