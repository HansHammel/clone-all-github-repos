var inquirer = require("inquirer");
var path = require("path");
var fs = require("fs");
var os = require("os");
var colors = require("colors/safe");
//const { Console } = require("console");
//var homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
var homedir = os.homedir();

async function createConfig() {
  if (!fs.existsSync(homedir)) {
    console.log(colors.red("No home path found, cannot save config!"));
    process.exit(1);
  }
  var dir = path.join(homedir, ".cagr");
  var conffile = path.join(dir, "config.json");

  // if (fs.existsSync(dir)) {
  //   fs.rmdirSync(dir, { recursive: true });
  //   console.log(dir + " removed to start over");
  // }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  if (fs.existsSync(conffile)) {
    console.log(
      colors.yellow("Note: Using exisiting config file at: " + conffile)
    );
    console.log(
      colors.yellow(
        "Note: Use cagr or clone-all-github-repos to clone all your repos into the current folder"
      )
    );
  } else {
    if (process.env.NODE_ENV != "testing") {
      console.log(
        colors.yellow(
          "Please input your GitHub Username and a token to access public/private repository information (to be created on GitHub Settings > Personal access tokens)"
        )
      );
      var questions = [
        {
          type: "input",
          name: "User",
          message: "GitHub username",
        },
        {
          type: "input",
          name: "token",
          message: "GitHub token",
        },
      ];

      //noinspection JSUnresolvedFunction
      await inquirer
        .prompt(questions)
        .then(function (answers) {
          answers.gitaccess = "https";
          try {
          fs.writeFileSync(
            conffile,
            JSON.stringify(answers, null, "  "),
          );
          } catch (err){
              if (err) {
                console.log(colors.red("Cannot save config!"));
                console.log(err);
                process.exit(1);
              }
              console.log(
                colors.yellow("Note: Created config file at: " + conffile)
              );
              console.log(
                colors.yellow(
                  "Note: Use cagr or clone-all-github-repos to clone all your repos into the current folder"
                )
              );
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        });
    } else {
      await fs.writeFile(
        conffile,
        await JSON.stringify(
          { gitaccess: "https", token: "abc", User: "def" },
          null,
          "  "
        ),
        function (err) {
          if (err) {
            console.log(colors.red("Cannot save config!"));
            console.log(err);
            process.exit(1);
          }
          console.log(
            colors.yellow("Note: Created config file at: " + conffile)
          );
          console.log(
            colors.yellow(
              "Note: Use cagr or clone-all-github-repos to clone all y our repos into the current folder"
            )
          );
        }
      );
    }
  }
}


exports.createConfig = createConfig;
module.exports = exports;