//This file isn't transpiled, so must use CommonJs ane ES5
//Register babel to transpile before our tests run.
require('babel-register')();

//Disable webpack features that Mocha doesn't undersatand
require.extensions['.css'] = function() {};
