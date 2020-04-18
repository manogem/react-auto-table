# @avezen/react-auto-table

[![npm (scoped)](https://img.shields.io/npm/v/@avezen/react-auto-table.svg)](https://www.npmjs.com/package/@avezen/react-auto-table)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@avezen/react-auto-table.svg)](https://www.npmjs.com/package/@avezen/react-auto-table)

Removes all spaces from a string.

## Install

```
$ npm install @avezen/react-auto-table
```

## Usage

```js
const tiny = require("@bamblehorse/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
