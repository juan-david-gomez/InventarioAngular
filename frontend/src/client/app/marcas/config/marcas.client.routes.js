(function() {
    'use strict';

    angular
        .module('app.marcas')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listMarcas',
                config: {
                    url: '/marcas',
                    templateUrl: 'app/marcas/views/list.html',
                    controller: 'MarcasController',
                    controllerAs: 'vm',
                    title: 'List Marcas',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Marcas'
                    }
                }
            },
            {
                state: 'createMarcas',
                config: {
                    url: '/marcas/create',
                    templateUrl: 'app/marcas/views/create.html',
                    controller: 'MarcasController',
                    controllerAs: 'vm',
                    title: 'Create Marcas'
                }
            },
            {
                state: 'viewMarcas',
                config: {
                    url: '/marcas/:marcasId',
                    templateUrl: 'app/marcas/views/view.html',
                    controller: 'MarcasController',
                    controllerAs: 'vm',
                    title: 'View Marcas'
                }
            },
            {
                state: 'editMarcas',
                config: {
                    url: '/marcas/:marcasId/edit',
                    templateUrl: 'app/marcas/views/edit.html',
                    controller: 'MarcasController',
                    controllerAs: 'vm',
                    title: 'Edit Marcas'
                }
            }
        ];
    }
})();
