/*global define: true, metaproject: true, ko: true */
define(function(require) {
    "use strict";

    var Boiler = require('Boiler'),
        ViewModel = require('./viewmodel'),
        template = require('text!./view.html');

    var Component = function(moduleContext) {

        var vm, panel = null, context = new Boiler.Context(moduleContext);

        this.activate = function(parent, params) {
            if (!panel) {
                panel = new Boiler.ViewTemplate(parent, template, null);
                vm = new ViewModel(context);
                ko.applyBindings(vm, panel.getDomElement());
            }

            panel.show();

        };

        this.deactivate = function() {
            if(panel) {
                panel.hide();
            }

        };

    };


    return Component;

}); 