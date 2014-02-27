'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ObjectivewebGenerator = module.exports = function ObjectivewebGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ObjectivewebGenerator, yeoman.generators.Base);

ObjectivewebGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [
        {
            name: 'packageName',
            message: 'Package Name',
            default: path.basename(process.cwd())
        },
        {
            name: 'appTitle',
            message: 'Application Title',
            default: "Objectiveweb Application"
        },
        {
            name: 'appVersion',
            message: 'Version',
            default: "0.0.1"
        },
        {
            name: 'authors',
            message: 'Comma separated list of authors',
            default: ""
        },
        {
            name: 'keywords',
            message: 'Comma separated list of keywords',
            default: ""
        },
        {
            name: 'license',
            message: 'License',
            default: "MIT"
        },
        {
            name: 'homepage',
            message: 'Homepage',
            default: ""
        }
    ];

    this.prompt(prompts, function (props) {
        this.packageName = props.packageName;
        this.appTitle = props.appTitle;
        this.appVersion = props.appVersion;


        this.keywords = props.keywords.trim();
        if(this.keywords.length > 0) {

            this.keywords = this.keywords.split(",").map(function(i) {
                return '"' + i.trim() + '"';
            }).join(",\n\t\t");
        }

        this.authors = props.authors.trim();
        if(this.authors.length > 0) {
            this.authors = this.authors.split(",").map(function(i) {
                return '"' + i.trim() + '"';
            }).join(",\n\t\t");
        }

        this.license = props.license;
        this.homepage = props.homepage;

        cb();
    }.bind(this));
};

ObjectivewebGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.mkdir('app/modules');
    this.copy('_init.php', '_init.php');
    this.copy('main.js', 'app/main.js');
    this.copy('style.css', 'app/style.css');
    this.template('_index.html', 'index.html');
    this.template('_settings.js', 'app/settings.js');
    this.template('_bower.json', 'bower.json');
    this.directory('core', 'app/core');

};

ObjectivewebGenerator.prototype.projectfiles = function projectfiles() {

};
