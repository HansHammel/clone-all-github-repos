#! /usr/bin/env node
var inquirer = require("inquirer");
var path = require('path');
var fs = require('fs');
var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
if (!fs.existsSync(homedir)) {
    console.log('No home path found, cannot save config!');
    process.exit(1);
}
var dir = path.join(homedir, '.cagr');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
var conffile = path.join(dir, 'config.json');
if (fs.existsSync(conffile)) {
    console.log('Note: Using exisiting config file at: ' + conffile);
} else {
    console.log('Please input your GitHub Username and a token to access public/private repository information (to be created on GitHub Settings > Personal access tokens)');
    var questions = [
        {
            type: "input",
            name: "User",
            message: "GitHub username"
        }, {
            type: "input",
            name: "token",
            message: "GitHub token"
        }
    ];
//noinspection JSUnresolvedFunction
    inquirer.prompt(questions, function (answers) {
        answers.gitaccess = 'https';
        fs.writeFile(conffile, JSON.stringify(answers, null, "  "), function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        });
    });
}
