var spawn = require('child_process').spawn
var request = require('request').defaults({ jar: true });
var cwd=process.cwd();


var User = function(options) {
    this.BASE_URI = 'https://api.github.com/users/';
    this.currentPage = 1;
    this.User = options.User;
    this.perpage = parseInt(options.perpage);
    this.username = options.username;
    this.password = options.password;
    this.token = options.token;
    this.regexp = options.regexp;
    this.gitaccess = options.gitaccess;
    this.gitsettings = options.gitsettings;

    if (options.only && options.regexp) {
        this.only = new RegExp(options.only);
    } else if (options.only) {
        this.only = options.only.split(',');
    }

    if (options.exclude && options.regexp) {
        this.exclude = new RegExp(options.exclude);
    } else if (options.exclude) {
        this.exclude = options.exclude.split(',');
    }

    this.type = options.type;
    this.nextPageUrl = this.getRequestUri();
};

User.prototype.getRequestUri = function() {
// also possible to use &token=
// for  /orgs/:org/repos type: all, public, private, forks, sources, member
// /users/:username/repos  type: all, owner, member
    return this.BASE_URI + this.User + '/repos' + '?type=owner';
	//return this.BASE_URI + this.User + '/repos' + '?type=' + this.type;
}

User.prototype.getLastPage = function() {
    return this.lastPage || 1;
}

User.prototype.getRepositories = function(callback) {
    var options = {
        url: this.nextPageUrl,
        headers: {
            'User-Agent': 'request'
        },
        json: true
    };

    if (this.token) {
        options.headers['Authorization'] = 'token ' + this.token;
    } else {
        options['auth'] = {
          'user': this.username,
          'pass': this.password,
          'sendImmediately': true
        };
    }

    console.info('Requesting github repositories for ' + this.User + ' with url ' + options.url + ' ...');

    request.get(options, function (error, response, body) {

        if (error) {
            console.error(error);
            callback.call(this, error);
        } else {
            console.log('current page ' + this.currentPage);
            this.parseLinks(response);
            this.currentPage++;
            console.log('next page ' + this.nextPageUrl);
            console.log('last page ' + this.getLastPage());

            for (var i = 0; i < body.length; i++) {
                this.clone(body[i]);
            }

            callback.call(this, null, { sucess: true });
        }
    }.bind(this));
}

User.prototype.parseLinks = function(response) {
    if (response.headers.link) {
        var paginationLinks = {};
        var links = response.headers.link.split(',')

        for (var i = 0; i < links.length; i++) {
            var section = links[i].split(';');
            var url = section[0].replace(/<(.*)>/, '$1').trim();
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();

            if (name == 'last') {
                var lastPage = section[0].match(/&page=(.*)/)[1].replace('>', '');
                this.lastPage = parseInt(lastPage);
            }
            paginationLinks[name] = url;
        }

        this.nextPageUrl = paginationLinks['next'];
        console.log('nextPageUrl ' + this.nextPageUrl);
    }
}

User.prototype.clone = function(repo) {
    if (this.exclude && this.regexp && repo.name.match(this.exclude)) {
        return console.log('Repository ' + repo.name + ' ignored, exclude option: ' + this.exclude);
    } else if (this.exclude && !this.regexp && this.exclude.indexOf(repo.name) != -1) {
        return console.log('Repository ' + repo.name + ' ignored, exclude option: ' + this.exclude);
    } else if (this.only && this.regexp && !repo.name.match(this.only)) {
        console.log('Repository ' + repo.name + ' ignored, only option: ' + this.only);
    } else if (this.only && !this.regexp && this.only.indexOf(repo.name) == -1) {
        return console.log('Repository ' + repo.name + ' ignored, only option: ' + this.only);
    } else {
        this.executeCloneCommand(repo);
    }
}

User.prototype.getCloneUrl = function(repo) {
    var url;
    switch (this.gitaccess) {
        case 'ssh':
            url = repo.ssh_url;
            break;
        case 'git':
            url = repo.git_url;
            break;
        case 'https':
            url = repo.clone_url;
            break;
        default:
            return console.error ( 'Unknown git access protocol provided: ' + this.gitaccess );
    }

    return url;
}

User.prototype.executeCloneCommand = function(repo) {
    var url = this.getCloneUrl(repo);

    var spawnParams = ['clone'].concat(this.gitsettings || [], url);
    console.info('cloning ' + url);

    var process = spawn('git', spawnParams, {cwd: cwd});

    process.on('close', function(status) {
        if (status == 0) {
            console.info('success cloning ' + url);
        } else {
            console.error('git clone failed with status ' + status);
        }
    });
}

module.exports = User;





