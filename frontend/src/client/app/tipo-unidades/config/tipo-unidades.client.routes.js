(function() {
    'use strict';

    angular
        .module('app.tipoUnidades')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listTipoUnidades',
                config: {
                    url: '/tipo-unidades',
                    templateUrl: 'app/tipo-unidades/views/list.html',
                    controller: 'TipoUnidadesController',
                    controllerAs: 'vm',
                    title: 'List TipoUnidades',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Tipo de Unidades'
                    }
                }
            },
            {
                state: 'createTipoUnidades',
                config: {
                    url: '/tipo-unidades/create',
                    templateUrl: 'app/tipo-unidades/views/create.html',
                    controller: 'TipoUnidadesController',
                    controllerAs: 'vm',
                    title: 'Create TipoUnidades'
                }
            },
            {
                state: 'viewTipoUnidades',
                config: {
                    url: '/tipo-unidades/:tipoUnidadesId',
                    templateUrl: 'app/tipo-unidades/views/view.html',
                    controller: 'TipoUnidadesController',
                    controllerAs: 'vm',
                    title: 'View TipoUnidades'
                }
            },
            {
                state: 'editTipoUnidades',
                config: {
                    url: '/tipo-unidades/:tipoUnidadesId/edit',
                    templateUrl: 'app/tipo-unidades/views/edit.html',
                    controller: 'TipoUnidadesController',
                    controllerAs: 'vm',
                    title: 'Edit TipoUnidades'
                }
            }
        ];
    }
})();
