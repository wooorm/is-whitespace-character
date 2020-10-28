'use strict'

module.exports = whitespace

// Check if the given character code, or the character code at the first
// character, is a whitespace character.
function whitespace(character) {
  return /\s/.test(
    typeof character === 'number'
      ? String.fromCharCode(character)
      : character.charAt(0)
  )
}
