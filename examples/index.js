'use strict';

var fs = require( 'fs' ),
	path = require( 'path' ),
	parse = require( './../lib' );

// Load an HJSON file...
var file = path.resolve( __dirname, '../test/fixtures/config.hjson' );
file = fs.readFileSync( file, {
	'encoding': 'utf8'
});

// Attempt to parse the file...
file = parse( file );
console.dir( file );
