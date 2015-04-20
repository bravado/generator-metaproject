/*global define: true, metaproject: true, ko: true, $: true */
define(function (require) {
    "use strict";

    // Module dependencies
    var Boiler = require('Boiler'),
        menuTemplate = require('text!./menu.html'),
        viewTemplate = require('text!./view.html');

    var viewModel = {
        name: '<%= appTitle %>',
        url: '<%= pkg.homepage %>'
    };

    $('.sidebar-menu').prepend(menuTemplate);

    return {
        template: viewTemplate,
        viewModel: viewModel
    };

});
