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
    // console.log('You called the module subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModuleGenerator, yeoman.generators.NamedBase);

ModuleGenerator.prototype.askFor = function askFor() {

    //var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.banner);

    var prompts = [
        {
            name: 'models',
            type: 'confirm',
            message: 'Create a models file ?',
            default: false
        }
    ];

    //this.prompt(prompts, function (props) {
    //    this.models = props.models;
    //
    //    cb();
    //}.bind(this));

};

ModuleGenerator.prototype.files = function files() {
    var module = 'app/modules/' + this.name;
    this.mkdir(module);

    if (this.options.simple) {
        this.template('_module-simple.js', module + '/module.js');
    }
    else {
        this.template('_module.js', module + '/module.js');
    }

    this.template('_view.html', module + '/view.html', { models: this.models });
};
