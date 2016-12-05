[![NPM](https://nodei.co/npm/clone-all-github-repos.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/clone-all-github-repos/) 
[![NPM](https://nodei.co/npm-dl/clone-all-github-repos.png)](https://nodei.co/npm/clone-all-github-repos/) 
[![npm version](https://badge.fury.io/js/clone-all-github-repos.svg)](https://badge.fury.io/js/clone-all-github-repos)
[![Dependency Status](https://david-dm.org/HansHammel/clone-all-github-repos.svg?theme=shields.io)](https://david-dm.org/HansHammel/clone-all-github-repos)
[![devDependency Status](https://david-dm.org/HansHammel/clone-all-github-repos/dev-status.svg?theme=shields.io)](https://david-dm.org/HansHammel/clone-all-github-repos#info=devDependencies)
[![coveralls](https://img.shields.io/coveralls/HansHammel/clone-all-github-repos/master.svg)]()
[![scrutinizer](https://img.shields.io/scrutinizer/g/HansHammel/clone-all-github-repos.svg)]()
[![codecov](https://img.shields.io/codecov/c/github/codecov/example-python/master.svg)]()
[![](https://img.shields.io/npm/dt/clone-all-github-repos.svg)][![](https://img.shields.io/npm/dm/clone-all-github-repos.svg)]()
[![GitHub forks](https://img.shields.io/github/forks/HansHammel/clone-all-github-repos.svg?style=social&label=Fork)]()
[![GitHub stars](https://img.shields.io/github/stars/HansHammel/clone-all-github-repos.svg?style=social&label=Star)]()
[![GitHub watchers](https://img.shields.io/github/watchers/HansHammel/clone-all-github-repos.svg?style=social&label=Watch)]()
[![GitHub followers](https://img.shields.io/github/followers/HansHammel.svg?style=social&label=Follow)]()
[![Twitter URL](https://img.shields.io/twitter/url/http/HansHammel.io.svg?style=social)]()
[![Twitter Follow](https://img.shields.io/twitter/follow/HansHammel.svg?style=social&label=Follow)]()
[![](https://img.shields.io/codeclimate/github/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/requires/github/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/versioneye/d/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/npm/l/clone-all-github-repos.svg)]()
[![](https://img.shields.io/github/issues/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/github/issues-closed/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/docker/automated/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/maintenance/yes/2016.svg)]()
[![](https://img.shields.io/david/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/david/dev/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/david/optional/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/david/peer/HansHammel/clone-all-github-repos.svg)]()
[![](https://img.shields.io/librariesio/github/HansHammel/clone-all-github-repos.svg)]()


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

