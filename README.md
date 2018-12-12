# tiny-throttle

[![source](https://badgen.net/npm/v/@ngard/tiny-throttle)](https://www.npmjs.com/package/@ngard/tiny-throttle)
[![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-throttle)](https://bundlephobia.com/result?p=@ngard/tiny-throttle)
[![build status](https://badgen.net/travis/NickGard/tiny-throttle)](https://travis-ci.org/NickGard/tiny-throttle)
[![license](https://badgen.net/badge/license/MIT/blue)](https://badgen.net/badge/license/MIT/blue)

A minimal utility similar to `lodash.throttle`. For when every byte counts!

<hr/>

lodash.throttle: [![bundle size](https://badgen.net/bundlephobia/minzip/lodash.throttle)](https://bundlephobia.com/result?p=lodash.throttle)
<br/>
tiny-throttle: [![bundle size](https://badgen.net/bundlephobia/minzip/@ngard/tiny-throttle)](https://bundlephobia.com/result?p=@ngard/tiny-throttle)

<hr/>

## Install

```sh
npm install @ngard/tiny-throttle
```

## Syntax

```javascript
throttle(/* function, interval */);
```

## Parameters

`function` - The function to be throttled.
`interval` - The amount of time, in milliseconds, to wait between invocations of the function. All function calls made during this interval are ignored.

## Returns
A throttled function.

## Example

```javascript
import { throttle } from '@ngard/tiny-throttle';

window.addListener('scroll', throttle(animateSomething, 16));
```
