/*global define: true, ko: true, _: true, $: true */
define(function(require) {

    "use strict";

    var Boiler = require('Boiler');

    var ViewModel = function(moduleContext) {

        var self = this;

        self.close = function() {
            Boiler.UrlController.goTo("/");
        };

    };

    return ViewModel;
});