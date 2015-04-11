# generator-metaproject

A Yeoman generator for [Metaproject](https://github.com/bravado/metaproject) applications.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

### Dependencies

To run this generator, you'll need NPM, Yeoman and Bower installed

    $ npm install -g yo
    $ npm install -g bower

## The Metaproject Generator

To install generator-metaproject from npm, run:

    $ npm install -g generator-metaproject

Finally, initiate the generator on `app_root`:

    $ cd /path/to/app_root
    $ yo metaproject [app_dir]

  * `app_dir` should be your public html directory, defaults to "app"

### Module Generator

To create a new module use
    
    yo metaproject:module [--simple] [module_name]
    
A new module will be created in `app/modules/[module_name]`

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
