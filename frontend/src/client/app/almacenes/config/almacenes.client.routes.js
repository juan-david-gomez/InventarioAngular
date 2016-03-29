(function() {
    'use strict';

    angular
        .module('app.almacenes')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listAlmacenes',
                config: {
                    url: '/almacenes',
                    templateUrl: 'app/almacenes/views/list.html',
                    controller: 'AlmacenesController',
                    controllerAs: 'vm',
                    title: 'List Almacenes',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Almacenes'
                    }
                }
            },
            {
                state: 'createAlmacenes',
                config: {
                    url: '/almacenes/create',
                    templateUrl: 'app/almacenes/views/create.html',
                    controller: 'AlmacenesController',
                    controllerAs: 'vm',
                    title: 'Create Almacenes'
                }
            },
            {
                state: 'viewAlmacenes',
                config: {
                    url: '/almacenes/:almacenesId',
                    templateUrl: 'app/almacenes/views/view.html',
                    controller: 'AlmacenesController',
                    controllerAs: 'vm',
                    title: 'View Almacenes'
                }
            },
            {
                state: 'editAlmacenes',
                config: {
                    url: '/almacenes/:almacenesId/edit',
                    templateUrl: 'app/almacenes/views/edit.html',
                    controller: 'AlmacenesController',
                    controllerAs: 'vm',
                    title: 'Edit Almacenes'
                }
            }
        ];
    }
})();
