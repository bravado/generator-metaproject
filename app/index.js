'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MetaprojectGenerator = module.exports = function MetaprojectGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.name = undefined == arguments[0][0] ? 'app' : arguments[0][0];

    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MetaprojectGenerator, yeoman.generators.Base);

MetaprojectGenerator.prototype.askFor = function askFor() {
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
            default: "Metaproject Application"
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

MetaprojectGenerator.prototype.app = function app() {

    var app = this.name,
        modules = this.name + '/modules',
        core = this.name + '/core';

    this.mkdir(app);
    this.mkdir(modules);
    this.directory('core', core);
    this.copy('main.js', app + '/main.js');
    this.copy('style.css', app + '/style.css');
    this.copy('script.js', app + '/script.js');
    this.template('_index.html', app + '/index.html');
    this.template('_bowerrc', '.bowerrc');
    this.template('_settings.js', app + '/settings.js');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');

};

MetaprojectGenerator.prototype.projectfiles = function projectfiles() {

};
