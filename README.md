Parse
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Attempts to parse an input string as [Human JSON](http://hhjson.org/).


## Installation

``` bash
$ npm install utils-hjson-parse
```


## Usage

``` javascript
var parse = require( 'utils-hjson-parse' );
```

#### parse( value )

Attempts to parse an input `string` as [Human JSON](http://hjson.org/).

``` javascript
var out = parse( '{"beep":"boop"}' );
// returns {'beep':'boop'}

out = parse( '{beep:boop"}' );
// returns <Error>
```


## Notes

*	This `function` wraps [HJSON#parse](https://github.com/laktak/hjson-js) in a `try/catch` block.
*	The presence of `try/catch` within any `function` prevents JavaScript compiler optimization. By isolating the `try/catch` block, we minimize the extent of optimization hell.


## Examples

``` javascript
var fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( 'utils-hjson-parse' );

// Load an HJSON file...
var file = path.resolve( '/path/to/file.hjson' );
file = fs.readFileSync( file, {
	'encoding': 'utf8'
});

// Attempt to parse the file...
file = parse( file );
console.dir( file );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-hjson-parse.svg
[npm-url]: https://npmjs.org/package/utils-hjson-parse

[travis-image]: http://img.shields.io/travis/kgryte/utils-hjson-parse/master.svg
[travis-url]: https://travis-ci.org/kgryte/utils-hjson-parse

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/utils-hjson-parse/master.svg
[codecov-url]: https://codecov.io/github/kgryte/utils-hjson-parse?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-hjson-parse.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-hjson-parse

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-hjson-parse.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-hjson-parse

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-hjson-parse.svg
[github-issues-url]: https://github.com/kgryte/utils-hjson-parse/issues
