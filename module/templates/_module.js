/*global define: true, metaproject: true, ko: true, $: true */
define(function (require) {
    "use strict";

    // Module dependencies
    var Boiler = require('Boiler'), // Boilerplatejs functions <% if(models) { %>
        models = require('../models'), // Model definitions for this app<% } %>
        viewModel = require('./viewmodel'), // ViewModule for this view
        viewTemplate = require('text!./view.html'); // Module template

    // <% if(options.menu) { %>
    $('.sidebar-menu').append(require('text!./menu.html'));
    // <% } %>

    return function(context) {


        // return module routes

        // String pattern or Regular Expression that should be used to match
        // against requests.
        // If pattern is a String it can contain named variables surrounded by
        // "{}" that will be evaluated and passed to handlers as parameters.
        // Each pattern segment is limited by the "/" char, so named variables
        // will match anything until it finds a "/" char or the next string
        // token located after the variable.
        //    The pattern "{foo}/{bar}" will match "lorem/ipsum-dolor" but
        // won't match "lorem/ipsum-dolor/sit". Trailing slashes at the
        // end/begin of the request are ignored by default, so /{foo}/ matches
        // same requests as {foo}. - If you need to match segments that may
        // contain "/" use a regular expression instead of a string pattern.
        // A pattern can also have optional segments, which should be
        // surrounded by "::" (e.g. "news/:foo:/:bar:" will match "news",
        // "news/123" and "news/123/asd")
        // If pattern is a RegExp, capturing groups will be passed as
        // parameters to handlers on the same order as they were matched.
        // It also allows "rest" segments (ending with *) which can match
        // multiple segments. Rest segments can be optional and/or required
        // and don't need to be the last segment of the pattern. The pattern
        // "{foo}/:bar*:" will match news "news/123", "news/123/bar",
        // "news/123/lorem/ipsum".
        return {
            "/": {
                template: viewTemplate,
                viewModel: viewModel,
                activate: function(parent, params) {
                    // called after the template is loaded and viewModel is bound

                },
                deactivate: function() {
                    // called before hiding this module
                }
            }
            // ":id:": require("./other")
        }
    };

});
