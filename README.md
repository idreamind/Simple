# Simple
Simple Template Manager for Server-Side on Node.js and Express

## Use
Start to work:
```
var Simple = require('./simple'),
    simple = new Simple();
```

Render a HTML - template:
```
<h1>
    {hello} my {world}!
</h1>
```
JS:
```
var obj = {
        hello: 'Hello',
        world: 'World'
    };

simple.render( '/templates/index.html', obj );
```
Result:
```
<h1>
    Hello my World!
</h1>
```

To set mode:
```
'dev'  - 'developer'  - show all unknow masks in templates
'prod' - 'production' - hide all unknow masks in templates

simple.setMode('dev')
```

To know a current mode:
```
simple.getMode();

// 'dev' - by default
```

## Settings for Node.js Express
```
var Simple = require('./Simple'),
    simple = new Simple();
    
app.engine( 'html', simple.render );
app.set('view engine', 'html');
```


