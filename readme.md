# is-whitespace-character

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Check if a character is a white space character.

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`isWhitespaceCharacter(character|code)`](#iswhitespacecharactercharactercode)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Security](#security)
*   [Related](#related)
*   [Contribute](#contribute)
*   [License](#license)

## What is this?

This is a function that checks if a given character is a white space character:
`\s`, which equals all Unicode Space Separators (including `[ \t\v\f]`), the BOM
(`\uFEFF`), and line terminators (`[\n\r\u2028\u2029]`).

## When should I use this?

Not often, as it’s relatively simple to do yourself.
This package exists because it’s needed in several related packages, at which
point it becomes useful to defer to one shared function.

## Install

This package is [ESM only][esm].
In Node.js (version 12.20+, 14.14+, or 16.0+), install with [npm][]:

```sh
npm install is-whitespace-character
```

In Deno with [Skypack][]:

```js
import {isWhitespaceCharacter} from 'https://cdn.skypack.dev/is-whitespace-character@2?dts'
```

In browsers with [Skypack][]:

```html
<script type="module">
  import {isWhitespaceCharacter} from 'https://cdn.skypack.dev/is-whitespace-character@2?min'
</script>
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

Check whether the given character code (`number`) or the character code at the
first position (`string`) is a whitespace character.

## Types

This package is fully typed with [TypeScript][].

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 12.20+, 14.14+, and 16.0+.
It also works in Deno and modern browsers.

## Security

This package is safe.

## Related

*   [`wooorm/is-alphabetical`](https://github.com/wooorm/is-alphabetical)
*   [`wooorm/is-alphanumerical`](https://github.com/wooorm/is-alphanumerical)
*   [`wooorm/is-decimal`](https://github.com/wooorm/is-decimal)
*   [`wooorm/is-hexadecimal`](https://github.com/wooorm/is-hexadecimal)
*   [`wooorm/is-word-character`](https://github.com/wooorm/is-word-character)

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

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

[skypack]: https://www.skypack.dev

[license]: license

[author]: https://wooorm.com

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/
