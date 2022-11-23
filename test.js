import assert from 'node:assert/strict'
import test from 'node:test'
import {isWhitespaceCharacter} from './index.js'

test('isWhitespaceCharacter(character)', function () {
  assert.ok(isWhitespaceCharacter(' '))
  assert.ok(isWhitespaceCharacter('\n'))
  assert.ok(isWhitespaceCharacter('\r'))
  assert.ok(isWhitespaceCharacter('\uFEFF'))
  assert.ok(isWhitespaceCharacter('\u00A0'))
  assert.ok(isWhitespaceCharacter('\t'))
  assert.ok(isWhitespaceCharacter('\v'))
  assert.ok(isWhitespaceCharacter(0x20))
  assert.ok(isWhitespaceCharacter(0xa))
  assert.ok(isWhitespaceCharacter(0x16_80))
  assert.ok(!isWhitespaceCharacter('a'))
  assert.ok(!isWhitespaceCharacter(0x19))
  assert.ok(!isWhitespaceCharacter('💩'))
})
