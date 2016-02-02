#! /usr/bin/env node
var User = require('../index.js');
//noinspection JSFileReferences
var user = new User(require('../config.json')); // config.js contains {token: 'your github token for public repo access', gitaccess:'git', User:'your user name'}
user.getRepositories(function(){}); 
