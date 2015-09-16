'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

// mock metaproject
var metaproject = {
    Model: function() {
        this.bind = function() {};
    }
};

function usage() {
    console.log('Usage yo metaproject:crud [name] [Model]');
    process.exit(1);
}
var CrudGenerator = module.exports = function CrudGenerator(args, options, config) {

    yeoman.generators.Base.apply(this, arguments);

    this.option('menu');

    try {
        this.argument('name', { type: 'String', required: true });
    }
    catch(err) {
        console.log("Error: Did not provide required argument name!");
        usage();
    }

    try {
        this.argument('model', { type: String, required: true});
    }
    catch(err) {
        console.log("Error: Did not provide required argument Model!");
        usage();
    }

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

util.inherits(CrudGenerator, yeoman.generators.Base);

CrudGenerator.prototype.askFor = function askFor() {

    //var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.banner);

    //this.prompt(prompts, function (props) {
    //    this.models = props.models;
    //
    //    cb();
    //}.bind(this));

};

CrudGenerator.prototype.files = function files() {
    var module = this.prefix + 'app/modules/' + this.name;
    this.mkdir(module);

    this.template('_module.js', module + '/module.js');
    this.template('_viewmodel.js', module + '/viewmodel.js');
    this.template('_detail.js', module + '/detail.js');
    this.template('_detail.html', module + '/detail.html');
    this.template('_view.html', module + '/view.html');

    if(this.options.menu) {
        this.template('_menu.html', module + '/menu.html');
    }
};
