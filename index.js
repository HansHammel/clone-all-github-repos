var spawn = require('child_process').spawn;
//noinspection JSUnresolvedFunction
var request = require('request').defaults({jar: true});
var cwd = process.cwd();


var User = function (options) {
    this.BASE_URI = 'https://api.github.com/users/';
    this.User = options.User;
    this.username = options.username;
    this.password = options.password;
    this.token = options.token;
    this.gitaccess = options.gitaccess;
    this.gitsettings = options.gitsettings;
    this.type = options.type;
};

User.prototype.getRequestUri = function () {
// also possible to use &token=
// for  /orgs/:org/repos type: all, public, private, forks, sources, member
// /users/:username/repos  type: all, owner, member
    return this.BASE_URI + this.User + '/repos?type=owner';
    //return this.BASE_URI + this.User + '/repos' + '?type=' + this.type;
};

User.prototype.getRepositories = function (callback) {
    var options = {
        url: this.getRequestUri(),
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
            for (var i = 0; i < body.length; i++) {
                this.executeCloneCommand(body[i]);
            }
            callback.call(this, null, {sucess: true});
        }
    }.bind(this));
};

User.prototype.getCloneUrl = function (repo) {
    var url;
    switch (this.gitaccess) {
        case 'ssh':
            //noinspection JSUnresolvedVariable
            url = repo.ssh_url;
            break;
        case 'git': //remove, you cannot push on git urls
            //noinspection JSUnresolvedVariable
            url = repo.git_url;
            break;
        case 'https':
            //noinspection JSUnresolvedVariable
            url = repo.clone_url;
            break;
        default:
            return console.error('Unknown git access protocol provided: ' + this.gitaccess);
    }
    return url;
};

User.prototype.executeCloneCommand = function (repo) {
    var url = this.getCloneUrl(repo);
    var spawnParams = ['clone'].concat(this.gitsettings || [], url);
    console.info('cloning ' + url);
    var process = spawn('git', spawnParams, {cwd: cwd});
    process.on('close', function (status) {
        if (status == 0) {
            console.info('success cloning ' + url);
        } else {
            console.error('git clone failed with status ' + status);
        }
    });
};

module.exports = User;





