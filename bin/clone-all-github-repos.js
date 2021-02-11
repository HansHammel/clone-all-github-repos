#! /usr/bin/env node
var User = require("../index.js");
var path = require("path");
var fs = require("fs");
var os = require("os");
var colors = require("colors/safe");
var homedir = os.homedir(); //(process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
var dir = path.join(homedir, ".cagr");
var conffile = path.join(dir, "config.json");
if (!fs.existsSync(conffile)) {
  console.error(colors.red("Could not find config file at: " + conffile));
  process.exit(1);
}
//noinspection JSFileReferences
var user = new User(require(conffile));
user.getRepositories(function () {});
