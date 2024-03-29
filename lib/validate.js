/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var isNonNegative = require( '@stdlib/assert-is-nonnegative-number' ).isPrimitive;
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert-is-function' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.sep] - separator used to join streamed data
* @param {boolean} [options.objectMode] - specifies whether a stream should operate in object mode
* @param {(string|null)} [options.encoding] - specifies how `Buffer` objects should be decoded to `strings`
* @param {NonNegativeNumber} [options.highWaterMark] - specifies the maximum number of bytes to store in the internal buffer before pausing streaming
* @param {Function} [options.serialize] - custom serialization function
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'objectMode': true
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'sep' ) ) {
		opts.sep = options.sep;
		if ( !isString( opts.sep ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string. Option: `%s`.', 'sep', opts.sep ) );
		}
	}
	if ( hasOwnProp( options, 'objectMode' ) ) {
		opts.objectMode = options.objectMode;
		if ( !isBoolean( opts.objectMode ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'objectMode', opts.objectMode ) );
		}
	}
	if ( hasOwnProp( options, 'encoding' ) ) {
		opts.encoding = options.encoding;
		if ( !isString( opts.encoding ) && opts.encoding !== null ) {
			return new TypeError( format( 'invalid option. `%s` option must be a string or null. Option: `%s`.', 'encoding', opts.encoding ) );
		}
	}
	if ( hasOwnProp( options, 'highWaterMark' ) ) {
		opts.highWaterMark = options.highWaterMark;
		if ( !isNonNegative( opts.highWaterMark ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a nonnegative number. Option: `%s`.', 'highWaterMark', opts.highWaterMark ) );
		}
	}
	if ( hasOwnProp( options, 'serialize' ) ) {
		opts.serialize = options.serialize;
		if ( !isFunction( opts.serialize ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a function. Option: `%s`.', 'serialize', opts.serialize ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
