# The Metaproject Generator

A Yeoman generator for [Metaproject](https://github.com/bravado/metaproject) applications.

## This is alpha-software

We're getting ready for a stable release.

## Getting Started

To run this generator, you'll need NPM, Yeoman and Bower installed

    $ npm install -g yo
    $ npm install -g bower

## Installation

To install generator-metaproject from npm, run:

    $ npm install -g generator-metaproject

Finally, initiate the generator on `app_root`:

    $ cd /path/to/app_root
    $ yo metaproject

### Application Structure

    skeleton/
        `- app/
            `- core/
            `- modules/
              `- base/
              `- AdminLTE/
              `- products/
              `- index.js
              `- models.js
            `- main.js
            `- script.js
            `- style.css
            `- index.html

 * The `app/` directory stores the public application files.
    * `app/core` holds the core framework
    * `main.js` bootstraps the application
    * `script.js` Additional scripts
    * `style.css` Additional styles
    * `index.html` Main app structure
 
* Every module is self contained and stored under `app/modules`
    * `app/modules/index.js` holds the modules url mapping
    * `app/modules/models.js` defines the shared Data Models used by 
    the application.

Modules are framework-agnostic. The architecture, provided by 
BoilerplateJS, demonstrates the best practices for integrating your 
libraries for large scale product development. 

## Module Generator

You can add additional modules to your application using the `module`
subgenerator

    yo metaproject:module name

Creates a default module with separate `viewmodel.js` and submodule 
support.

    yo metaproject:module name --simple

Creates a simple module with inline `viewModel` and a single endpoint.

For detailed examples, please check the 
[Skeleton](https://github.com/objectiveweb/skeleton) reference 
Application and the
[Building Skeleton](http://guigouz.github.io/building-skeleton.md) post


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
