#! /usr/bin/env node
var inquirer = require("inquirer");
var path = require('path');
var fs = require('fs');
var colors = require('colors/safe');
var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
if (!fs.existsSync(homedir)) {
    console.log(colors.red('No home path found, cannot save config!'));
    process.exit(1);
}
var dir = path.join(homedir, '.cagr');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
var conffile = path.join(dir, 'config.json');
if (fs.existsSync(conffile)) {
    console.log(colors.yellow('Note: Using exisiting config file at: ' + conffile));
    console.log(colors.yellow('Note: Use cagr or clone-all-github-repos to clone all your repos into the current folder'));
} else {
    if (process.env.NODE_ENV != "testing") {
        console.log(colors.yellow('Please input your GitHub Username and a token to access public/private repository information (to be created on GitHub Settings > Personal access tokens)'));
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
        inquirer.prompt(questions).then(function (answers) {
            answers.gitaccess = 'https';
            fs.writeFile(conffile, JSON.stringify(answers, null, "  "), function (err) {
                if (err) {
                    console.log(colors.red('Cannot save config!'));
                    console.log(err);
                    process.exit(1);
                }
                console.log(colors.yellow('Note: Created config file at: ' + conffile));
                console.log(colors.yellow('Note: Use cagr or clone-all-github-repos to clone all your repos into the current folder'));
            });
        });
    } else {
        fs.writeFile(conffile, JSON.stringify({ gitaccess: 'https', token: 'abc', User: 'def' }, null, "  "), function (err) {
            if (err) {
                console.log(colors.red('Cannot save config!'));
                console.log(err);
                process.exit(1);
            }
            console.log(colors.yellow('Note: Created config file at: ' + conffile));
            console.log(colors.yellow('Note: Use cagr or clone-all-github-repos to clone all y our repos into the current folder'));
        });
    }
}
