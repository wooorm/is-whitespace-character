'use strict';

var test = require('tape');
var whitespace = require('.');

test('whitespace(character)', function (t) {
  t.ok(whitespace(' '));
  t.ok(whitespace('\n'));
  t.ok(whitespace('\r'));
  t.ok(whitespace('\uFEFF'));
  t.ok(whitespace('\u00A0'));
  t.ok(whitespace('\t'));
  t.ok(whitespace('\v'));
  t.ok(whitespace(' '.charCodeAt(0)));
  t.ok(whitespace('\n'.charCodeAt(0)));
  t.ok(whitespace('\u1680'.charCodeAt(0)));
  t.notOk(whitespace('a'));
  t.notOk(whitespace(' '.charCodeAt(0) - 1));
  t.notOk(whitespace('💩'));

  t.end();
});
