import test from 'tape'
import {isWhitespaceCharacter} from './index.js'

test('isWhitespaceCharacter(character)', function (t) {
  t.ok(isWhitespaceCharacter(' '))
  t.ok(isWhitespaceCharacter('\n'))
  t.ok(isWhitespaceCharacter('\r'))
  t.ok(isWhitespaceCharacter('\uFEFF'))
  t.ok(isWhitespaceCharacter('\u00A0'))
  t.ok(isWhitespaceCharacter('\t'))
  t.ok(isWhitespaceCharacter('\v'))
  t.ok(isWhitespaceCharacter(' '.charCodeAt(0)))
  t.ok(isWhitespaceCharacter('\n'.charCodeAt(0)))
  t.ok(isWhitespaceCharacter('\u1680'.charCodeAt(0)))
  t.notOk(isWhitespaceCharacter('a'))
  t.notOk(isWhitespaceCharacter(' '.charCodeAt(0) - 1))
  t.notOk(isWhitespaceCharacter('💩'))

  t.end()
})
