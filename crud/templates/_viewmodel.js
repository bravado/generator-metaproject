define(function(require) {

    // Module dependencies
    var Boiler = require('Boiler'),
        models = require('../models');

    var Model = models['<%= model %>'];

    return {
        data: Model.query({}),
        /**
         * Define the table columns
         *  [ { label: 'Label', text: 'field' },
         *    { label: 'Label2', text: function(item) { return item.otherfield() + '!'; }
         */
        columns: [],
        /**
         * Define the actions for each row
         */
        actions: {
            'Edit': function(item) {
                Boiler.UrlController.goTo('<%= name %>/' + item.id());
            }
        }
    }
});