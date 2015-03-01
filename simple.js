/*
 * Test Template Server: Template Engine
 */
'use strict';

function Simple() {
    var simple = this,
        mode   = 'dev',
        tags   = ['{!','!}'],
        fs     = require('fs');

    simple.render  = render;
    simple.setMode = setMode;
    simple.getMode = getMode;

    function render( filePath, options, callback ) {
        fs.readFile( filePath, function( error, content ) {
            if( error ) {
                throw new Error( error );
            }

            var template = content.toString(),
                posOpen  = template.search( tags[0] ),
                posClose = template.search( tags[1] );

            if( posOpen.length != posClose.length ) {
                throw new Error('Different counts of open and close Simple tags: [ {!, !} ]');
            }
        } );
    }

    function setMode( newMode ) {
        if( newMode && typeof newMode === "string" ) {
            mode = newMode;
        } else {
            throw new Error('Mode must be a string: [ dev, prod ]');
        }
    }

    function getMode() {
        return mode;
    }

    return simple;
}

module.exports = Simple;