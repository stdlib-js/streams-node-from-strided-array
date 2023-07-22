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

var tape = require( 'tape' );
var StridedArrayStream = require( './../lib/main.js' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a factory function', function test( t ) {
	var createStream = factory();
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (options)', function test( t ) {
	var createStream = factory( {} );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( value, [ 1, 2, 3 ], 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the second argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 1, value, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the third argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 1, [ 1, 2, 3 ], value, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the fourth argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 1, [ 1, 2, 3 ], 1, value );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the first argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( value, [ 1, 2, 3 ], 1, 0, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the second argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 1, value, 1, 0, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the third argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 1, [ 1, 2, 3 ], value, 0, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the fourth argument (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		void 0,
		null,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory();
			createStream( 1, [ 1, 2, 3 ], 1, value, {} );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			var createStream = factory( value );
			createStream( 3, [ 1, 2, 3 ], 1, 0 );
		};
	}
});

tape( 'if provided an invalid readable stream option, the function returns a function which throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var createStream = factory({
				'highWaterMark': value
			});
			createStream( 3, [ 1, 2, 3 ], 1, 0 );
		};
	}
});

tape( 'the function returns a factory function which creates stream instances', function test( t ) {
	var createStream;
	var arr;
	var i;

	createStream = factory();
	arr = [ 1, 2, 3 ];

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( arr.length, arr, 1, 0 ) instanceof StridedArrayStream, true, 'returns a stream instance' );
	}
	t.end();
});

tape( 'the function returns a factory function which creates stream instances (options)', function test( t ) {
	var createStream;
	var arr;
	var i;

	createStream = factory( {} );
	arr = [ 1, 2, 3 ];

	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( arr.length, arr, 1, 0 ) instanceof StridedArrayStream, true, 'returns a stream instance' );
	}
	t.end();
});
