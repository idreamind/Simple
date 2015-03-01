/*
 * Test Template Server: Test
 */
'use strict';

var Simple  = require('./Simple'),
    simple  = new Simple(),
    options = {
        title:  "Simple",
        data:   "My Simple Template manager"
    };

var d1 = Date.now();
simple.render( 'templates/simple.html', options );
console.log( d1 - Date.now() + " ms" );
