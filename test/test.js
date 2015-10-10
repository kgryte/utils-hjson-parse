/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	parse = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'utils-hjson-parse', function tests() {

	it( 'should export a function', function test() {
		expect( parse ).to.be.a( 'function' );
	});

	it( 'should return an error if unable to parse a provided value', function test() {
		var err = parse( '{beep":boop""}' );
		assert.isTrue( err instanceof SyntaxError );
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
		var obj = '{\nbeep:boop\n#comment\nvalue: 5\n}',
			out;

		out = parse( obj );

		assert.deepEqual( out, {
			'beep': 'boop',
			'value': 5
		});
		assert.deepEqual( out, JSON.parse( obj ) );
	});

});
