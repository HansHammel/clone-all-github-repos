# clone-all-github-repos

[![NPM](https://nodei.co/npm/clone-all-github-repos.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/clone-all-github-repos/) 
[![NPM](https://nodei.co/npm-dl/clone-all-github-repos.png?months=9&height=3)](https://nodei.co/npm/clone-all-github-repos/)

[![npm version](https://img.shields.io/npm/v/clone-all-github-repos.svg)](https://www.npmjs.com/package/clone-all-github-repos)
[![npm license](https://img.shields.io/npm/l/clone-all-github-repos.svg)](https://www.npmjs.com/package/clone-all-github-repos)
[![npm download](https://img.shields.io/npm/dm/clone-all-github-repos.svg)](https://www.npmjs.com/package/clone-all-github-repos)
[![npm download](https://img.shields.io/npm/dt/clone-all-github-repos.svg)](https://www.npmjs.com/package/clone-all-github-repos)
[![Package Quality](http://npm.packagequality.com/shield/clone-all-github-repos.svg)](http://packagequality.com/#?package=clone-all-github-repos)
[![Inline docs](http://inch-ci.org/github/HansHammel/clone-all-github-repos.svg?branch=master)](http://inch-ci.org/github/HansHammel/clone-all-github-repos)
[![star this repo](http://githubbadges.com/star.svg?user=HansHammel&repo=clone-all-github-repos&style=flat&color=fff&background=007ec6)](https://github.com/HansHammel/clone-all-github-repos)
[![fork this repo](http://githubbadges.com/fork.svg?user=HansHammel&repo=clone-all-github-repos&style=flat&color=fff&background=007ec6)](https://github.com/HansHammel/clone-all-github-repos/fork)
[![david dependency](https://img.shields.io/david/HansHammel/clone-all-github-repos.svg)](https://david-dm.org/HansHammel/clone-all-github-repos)
[![david devDependency](https://img.shields.io/david/dev/HansHammel/clone-all-github-repos.svg)](https://david-dm.org/HansHammel/clone-all-github-repos)
[![david optionalDependency](https://img.shields.io/david/optional/HansHammel/clone-all-github-repos.svg)](https://david-dm.org/HansHammel/clone-all-github-repos)
[![david peerDependency](https://img.shields.io/david/peer/HansHammel/clone-all-github-repos.svg)](https://david-dm.org/HansHammel/clone-all-github-repos)
[![npms score](https://badges.npms.io/clone-all-github-repos.svg)](https://www.npmjs.com/package/clone-all-github-repos)
[![Known Vulnerabilities](https://snyk.io/test/github/HansHammel/clone-all-github-repos/badge.svg)](https://snyk.io/test/github/HansHammel/clone-all-github-repos)
[![Build Status](https://travis-ci.org/HansHammel/clone-all-github-repos.svg?branch=master)](https://travis-ci.org/HansHammel/clone-all-github-repos)

*install:*

As Superuser/Administrator run

	npm install clone-all-github-repos -g

or install the latest version from github
	
	npm install https://github.com/HansHammel/clone-all-github-repos.git -g

*usage:*
	
	clone-all-github-repos

or

```shell
cagr
```

and all your repos get cloned into the current working directory!

Done.


*PS: uninstall:*

	npm uninstall clone-all-github-repos -g



*Note:* 
__Currently only GitHub USER (vs. ORGANIZATION) accounts are supported.__

__We have a limit of 100 repositories__

__On install, you get asked for your GitHub Username and a GitHub API token to access public/private repository information. The settings are stored in your users home directory (~/.cagr/config.json or %HOMEPATH%\.cagr\config.json).__

__To create an access-token go to GitHub > Settings > Developer settings > Personal access tokens. Give at least read access to your public repositories.__ 

![create an access-token](/screenshots/githubsettings.jpg?raw=true "GitHub > Settings > Personal access tokens")
(old screenshot, now located under Settings > Developer settings)

