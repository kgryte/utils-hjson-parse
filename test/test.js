/* global require, describe, it */
'use strict';

// MODULES //

var fs = require( 'fs' ),
	path = require( 'path' ),
	chai = require( 'chai' ),
	parse = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// FIXTURES //

var fixture,
	fpath;

fpath = path.join( __dirname, 'fixtures', 'config.hjson' );
fixture = fs.readFileSync( fpath, {
	'encoding': 'utf8'
});


// TESTS //

describe( 'utils-hjson-parse', function tests() {

	it( 'should export a function', function test() {
		expect( parse ).to.be.a( 'function' );
	});

	it( 'should return an error if unable to parse a provided value', function test() {
		var err = parse( '{beep":boop"}' );
		assert.isTrue( err instanceof Error );
	});

	it( 'should return a parsed JSON object', function test() {
		var obj = '{"beep":"boop"}',
			out;

		out = parse( obj );

		assert.deepEqual( out, {
			'beep': 'boop'
		});
		assert.deepEqual( out, JSON.parse( obj ) );
	});

	it( 'should return a parsed JSON object based on Human JSON', function test() {
		var out = parse( fixture );

		assert.deepEqual( out, {
			'beep': 'boop',
			'value': 5,
			'str': 'beep\nboop'
		});
	});

});
