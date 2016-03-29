(function() {
    'use strict';

    angular
        .module('app.grupos')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listGrupos',
                config: {
                    url: '/grupos',
                    templateUrl: 'app/grupos/views/list.html',
                    controller: 'GruposController',
                    controllerAs: 'vm',
                    title: 'List Grupos',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Grupos'
                    }
                }
            },
            {
                state: 'createGrupos',
                config: {
                    url: '/grupos/create',
                    templateUrl: 'app/grupos/views/create.html',
                    controller: 'GruposController',
                    controllerAs: 'vm',
                    title: 'Create Grupos'
                }
            },
            {
                state: 'viewGrupos',
                config: {
                    url: '/grupos/:gruposId',
                    templateUrl: 'app/grupos/views/view.html',
                    controller: 'GruposController',
                    controllerAs: 'vm',
                    title: 'View Grupos'
                }
            },
            {
                state: 'editGrupos',
                config: {
                    url: '/grupos/:gruposId/edit',
                    templateUrl: 'app/grupos/views/edit.html',
                    controller: 'GruposController',
                    controllerAs: 'vm',
                    title: 'Edit Grupos'
                }
            }
        ];
    }
})();
