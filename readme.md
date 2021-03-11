# is-whitespace-character

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is a whitespace character: `\s`, which equals all Unicode
Space Separators (including `[ \t\v\f]`), the BOM (`\uFEFF`), and line
terminator (`[\n\r\u2028\u2029]`).

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install is-whitespace-character
```

## Use

```js
import {isWhitespaceCharacter} from 'is-whitespace-character'

isWhitespaceCharacter(' ') // => true
isWhitespaceCharacter('\n') // => true
isWhitespaceCharacter('\uFEFF') // => true
isWhitespaceCharacter('_') // => false
isWhitespaceCharacter('a') // => false
isWhitespaceCharacter('💩') // => false
```

## API

This package exports the following identifiers: `isWhitespaceCharacter`.
There is no default export.

### `isWhitespaceCharacter(character|code)`

Check whether the given character code (`number`), or the character code at the
first position (`string`), is a whitespace character.

## Related

*   [`is-alphabetical`](https://github.com/wooorm/is-alphabetical)
*   [`is-alphanumerical`](https://github.com/wooorm/is-alphanumerical)
*   [`is-decimal`](https://github.com/wooorm/is-decimal)
*   [`is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`is-word-character`](https://github.com/wooorm/is-word-character)

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/is-whitespace-character/workflows/main/badge.svg

[build]: https://github.com/wooorm/is-whitespace-character/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/is-whitespace-character.svg

[coverage]: https://codecov.io/github/wooorm/is-whitespace-character

[downloads-badge]: https://img.shields.io/npm/dm/is-whitespace-character.svg

[downloads]: https://www.npmjs.com/package/is-whitespace-character

[size-badge]: https://img.shields.io/bundlephobia/minzip/is-whitespace-character.svg

[size]: https://bundlephobia.com/result?p=is-whitespace-character

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
