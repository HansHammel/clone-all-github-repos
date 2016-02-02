#! /usr/bin/env node
var User = require('../index.js');
var user = new User(require('../config.js')); // config.js containes {token: 'your github token for public repo access', gitaccess:'git', User:'your user name'}
user.getRepositories(function(){}); 
