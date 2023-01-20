#! /usr/bin/env node
process.env.NODE_ENV = 'test';

/*
 * Package Import
 */
var babelRegister = require('@babel/register');

/*
 * Babel
 */
babelRegister();
