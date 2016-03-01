# to-space [![NPM version](https://img.shields.io/npm/v/to-space.svg)](https://npmjs.com/package/to-space) [![NPM downloads](https://img.shields.io/npm/dm/to-space.svg)](https://npmjs.com/package/to-space) [![Build Status](https://img.shields.io/circleci/project/egoist/to-space/master.svg)](https://circleci.com/gh/egoist/to-space) 

> Convert leading tab to spaces.

## Install

```bash
$ npm install --save to-space
```

## Usage

```js
const toSpace = require('to-space')

toSpace(`\tHI\n\tTHERE`)
/* convert to 2 spaces:
  HI
  THERE
*/

// 4 spaces if you like
toSpace(string, {space: 4})
```

## License

MIT © [EGOIST](https://github.com/egoist)
