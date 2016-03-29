(function() {
    'use strict';

    angular
        .module('app.tipoUnidades')
        .factory('TipoUnidades', TipoUnidades);

    TipoUnidades.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function TipoUnidades($resource, API_BASE_URL) {

        var params = {
            tipoUnidadesId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/tipoUnidades/:tipoUnidadesId';

        return $resource(API_URL, params, actions);

    }

})();
