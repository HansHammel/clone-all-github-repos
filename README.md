[![NPM](https://nodei.co/npm/clone-all-github-repos.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/clone-all-github-repos/) [![NPM](https://nodei.co/npm-dl/clone-all-github-repos.png)](https://nodei.co/npm/clone-all-github-repos/) 
[![npm version](https://badge.fury.io/js/clone-all-github-repos.svg)](https://badge.fury.io/js/clone-all-github-repos)

[![Dependency Status](https://david-dm.org/HansHammel/clone-all-github-repos.svg?theme=shields.io)](https://david-dm.org/HansHammel/clone-all-github-repos)[![devDependency Status](https://david-dm.org/HansHammel/clone-all-github-repos/dev-status.svg?theme=shields.io)](https://david-dm.org/HansHammel/clone-all-github-repos#info=devDependencies)
# clone-all-github-repos

*install:*

As Superuser/Administrator run

	npm install clone-all-github-repos -g

or install the latest version from github
	
	npm install https://github.com/HansHammel/clone-all-github-repos.git -g

*usage:*
	
	> clone-all-github-repos

and all your repos get cloned into the current working directory!

*uninstall:*

	npm uninstall clone-all-github-repos -g

Done.

*Note:* 
__Currently only GitHub USER (vs. ORGANIZATION) accounts are supported.__

__On install, you get asked for your GitHub Username and a GitHub API token to access public/private repository information. The settings are stored in your users home directory (~/.cagr/config.json or %HOMEPATH%\.cagr\config.json).__

__To create an access-token to to GitHub > Settings > Personal access tokens. Give at least read access to your public repositories.__ 

![create an access-token](/screenshots/githubsettings.jpg?raw=true "GitHub > Settings > Personal access tokens")

