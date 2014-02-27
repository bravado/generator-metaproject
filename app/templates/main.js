/*global define: true, require: true, $: true, hasher: true */
(function () {
    "use strict"; // avoid accidental global variable declarations

    /*
     * Let's define short alias for commonly used AMD libraries and name-spaces. Using
     * these alias, we do not need to specify lengthy paths, when referring a child
     * files. We will 'import' these scripts, using the alias, later in our application.
     */
    require.config({
        paths: {
            // requirejs plugins in use
            text: '../../objectiveweb/console/libs/require/text',
            order: '../../objectiveweb/console/libs/require/order',
            i18n: '../../objectiveweb/console/libs/require/i18n',
            domReady: '../../objectiveweb/console/libs/require/domReady',
            path: '../../objectiveweb/console/libs/require/path',
            objectiveweb: '../../objectiveweb',
            // namespace that aggregate core classes that are in frequent use
            Boiler: './core/_boiler_'
        }
    });


    define(function (require) {

        /*
         * Let's import all dependencies as variables of this script file.
         *
         * Note: when we define the variables, we use PascalCase for namespaces ('Boiler' in the case) and classes,
         * whereas object instances ('settings' and 'modules') are represented with camelCase variable names.
         */
        var domReady = require("domReady"), // requirejs domReady plugin to know when DOM is ready
            Boiler = require("Boiler"), // BoilerplateJS namespace used to access core classes, see above for the definition
            settings = require("./settings"); //global settings file of the product suite



        //Here we use the requirejs domReady plugin to run our code, once the DOM is ready to be used.
        domReady(function () {

            $(document).ajaxError(function(event, jqXHR, settings) {
                if(jqXHR.status !== 401) {
                    alert(jqXHR.responseText);
                }
            });

            /* In JavaScript, functions can be used similarly to classes in OO programming. Below,
             * we create an instance of 'Boiler.Context' by calling the 'new' operator. Then add
             * global settings. These will be propagated to child contexts
             */
            var globalContext = new Boiler.Context();
            globalContext.addSettings(settings);


            /* In BoilerplateJS, your product module hierachy is associated to a 'Context' hierarchy. Below
             * we create the global 'Context' and load child contexts (representing your product sub modules)
             * to create a 'Context' tree (product modules as a tree).
             */

            var controller = new Boiler.UrlController($(".appcontent"));
            for (var i = 0; i < settings.modules.length; i++) {

                var context = new Boiler.Context(globalContext),
                    routes = settings.modules[i].initialize(context);

                if(undefined !== routes) {

                    controller.addRoutes(routes);

                }
            }
            controller.start();

            /* Mainmenu code */
            $('.main-menu').on('click', 'a', function() {
                $('.app-menu .current-module span').text($(this).text());
                $('.main-menu li').removeClass('active');
                $(this).parents('li').addClass('active');

            });

            function mainmenu_update() {
                var $link = $('.main-menu a[href="' + window.location.hash + '"]');
                if($link.length === 0) {
                    $link = $('.main-menu a[href="#/"]');
                }
                $link.click();
            }

            hasher.changed.add(mainmenu_update);
            setTimeout(mainmenu_update, 500);
        });
    });
}());