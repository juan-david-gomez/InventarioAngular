(function() {
    'use strict';

    angular
        .module('app.proveedores')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listProveedores',
                config: {
                    url: '/proveedores',
                    templateUrl: 'app/proveedores/views/list.html',
                    controller: 'ProveedoresController',
                    controllerAs: 'vm',
                    title: 'List Proveedores',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Proveedores'
                    }
                }
            },
            {
                state: 'createProveedores',
                config: {
                    url: '/proveedores/create',
                    templateUrl: 'app/proveedores/views/create.html',
                    controller: 'ProveedoresController',
                    controllerAs: 'vm',
                    title: 'Create Proveedores'
                }
            },
            {
                state: 'viewProveedores',
                config: {
                    url: '/proveedores/:proveedoresId',
                    templateUrl: 'app/proveedores/views/view.html',
                    controller: 'ProveedoresController',
                    controllerAs: 'vm',
                    title: 'View Proveedores'
                }
            },
            {
                state: 'editProveedores',
                config: {
                    url: '/proveedores/:proveedoresId/edit',
                    templateUrl: 'app/proveedores/views/edit.html',
                    controller: 'ProveedoresController',
                    controllerAs: 'vm',
                    title: 'Edit Proveedores'
                }
            }
        ];
    }
})();
