/*
 * Test Template Server: Server
 */
'use strict';

var cons    = require('consolidate'),
    express = require('express'),
    http    = require('http'),
    app     = express();

var portName = 3000;

app.engine( 'html', cons.underscore );
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');

app.use('/is', express.static(__dirname + '/static/server.html') );
app.use('/static', express.static( __dirname + '/static'    ) );
app.use( express.static( __dirname + '/static'    ) );
app.use( express.static( __dirname + '/templates' ) );

app.use( function( req, res ) {
    console.log( req.path );
    if( req.path === "/") {
        res.render('tmp', {
            title: "Underscore.JS",
            data: "Hello There!",
            unData: "Ref. Error"
        });
    }
} );

http.createServer(app).listen(portName, function(){
    console.log(" Server Run " );
} );
