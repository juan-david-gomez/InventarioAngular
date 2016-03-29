(function() {
    'use strict';

    angular
        .module('app.articulos')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listArticulos',
                config: {
                    url: '/articulos',
                    templateUrl: 'app/articulos/views/list.html',
                    controller: 'ArticulosController',
                    controllerAs: 'vm',
                    title: 'List Articulos',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Articulos'
                    }
                }
            },
            {
                state: 'createArticulos',
                config: {
                    url: '/articulos/create',
                    templateUrl: 'app/articulos/views/create.html',
                    controller: 'ArticulosController',
                    controllerAs: 'vm',
                    title: 'Create Articulos'
                }
            },
            {
                state: 'viewArticulos',
                config: {
                    url: '/articulos/:articulosId',
                    templateUrl: 'app/articulos/views/view.html',
                    controller: 'ArticulosController',
                    controllerAs: 'vm',
                    title: 'View Articulos'
                }
            },
            {
                state: 'editArticulos',
                config: {
                    url: '/articulos/:articulosId/edit',
                    templateUrl: 'app/articulos/views/edit.html',
                    controller: 'ArticulosController',
                    controllerAs: 'vm',
                    title: 'Edit Articulos'
                }
            }
        ];
    }
})();
