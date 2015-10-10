'use strict';

// MODULES //

var hjson = require( 'hjson' );


// PARSE //

/**
* FUNCTION: parse( value )
*	Attempts to parse a value as Human JSON.
*
* @param {*} value - value to parse
* @returns {*|Error} parsed value or an error
*/
function parse( value ) {
	try {
		return hjson.parse( value );
	} catch ( error ) {
		return error;
	}
} // end FUNCTION parse()


// EXPORTS //

module.exports = parse;
