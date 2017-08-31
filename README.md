
A simple Wu-Tang name generator in node.js. 

Generates random names of the style:

```
Wicked Overlord
Insane Ambassador
Misunderstood Desperado
Profound Prophet
```

Word lists blatantly lifted from [WuNameAAS](https://github.com/rahulparsani/WuNameAAS).

# Installation

```
npm install wuname-generator
```

# Usage

```
var wuname = require('wuname-generator');

var name = wuname(function(err, name) {
    console.log(name);
});
```




