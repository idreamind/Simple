# Simple
Simple Template Manager for Server-Side on Node.js

## Use
Start to work:
```
var Simple = require('./Simple'),
    simple = new Simple();
```

Render a template:
```
HTML:
<h1>
    {hello} my {world}!
</h1>

JS:
var obj = {
        hello: 'Hello',
        world: 'World'
    };

simple.render( '/templates/index.html', obj );
```

For set mode use:
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


