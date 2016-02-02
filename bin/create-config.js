#! /usr/bin/env node
var inquirer = require("inquirer");
var path=require('path');
var fs=require('fs');
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
 inquirer.prompt(questions, function( answers ) {
	answers.gitaccess = 'https';
	console.log( JSON.stringify(answers, null, "  "));
	fs.writeFile(path.join(__dirname,'../config.json'), JSON.stringify(answers, null, "  "), function(err) {
	  if (err) { console.log(err); process.exit(1); }
	});
});
