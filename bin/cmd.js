#!/usr/bin/env node

var wuname = require('../index.js');

var name = wuname(function(err, name) {
    console.log(name);
});
