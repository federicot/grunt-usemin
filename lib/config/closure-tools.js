'use strict';

var path = require('path');
var uglifyjs = require(path.join(__dirname, 'uglifyjs'));

exports.name = 'closureCompiler';

//
// Same as uglifyjs
//
exports.createConfig = uglifyjs.createConfig;
