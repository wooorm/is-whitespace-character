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
  t.ok(isWhitespaceCharacter(0x20))
  t.ok(isWhitespaceCharacter(0xa))
  t.ok(isWhitespaceCharacter(0x16_80))
  t.notOk(isWhitespaceCharacter('a'))
  t.notOk(isWhitespaceCharacter(0x19))
  t.notOk(isWhitespaceCharacter('💩'))

  t.end()
})
