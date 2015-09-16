'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var ModuleGenerator = module.exports = function ModuleGenerator(args, options, config) {
    // By calling `NamedBase` here, we get the argument to the subgenerator call
    // as `this.name`.
    yeoman.generators.NamedBase.apply(this, arguments);

    this.option('simple');

    this.models = fs.existsSync('app/modules/models.js');
    this.banner = fs.readFileSync(require.resolve('../banner.txt'),'ascii');
    this.pkg = JSON.parse(this.readFileAsString('bower.json'));

    // add prefix for java projects
    if(fs.existsSync('src/main/resources/static')) {
        this.prefix = 'src/main/resources/static/';
    }
    else {
        this.prefix = '';
    }
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.askFor = function askFor() {

    //var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.banner);

    //this.prompt(prompts, function (props) {
    //    this.models = props.models;
    //
    //    cb();
    //}.bind(this));

};

ModuleGenerator.prototype.files = function files() {
    var module = this.prefix + 'app/modules/' + this.name;
    this.mkdir(module);

    if (this.options.simple) {
        this.template('_module-simple.js', module + '/module.js');
    }
    else {
        this.template('_module.js', module + '/module.js');
        this.template('_viewmodel.js', module + '/viewmodel.js');
    }

    this.template('_view.html', module + '/view.html', { models: this.models });

    if(this.options.menu) {
        this.template('_menu.html', module + '/menu.html');
    }
};
