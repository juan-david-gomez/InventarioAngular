(function() {
    'use strict';

    angular
        .module('app.marcas')
        .factory('Marcas', Marcas);

    Marcas.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Marcas($resource, API_BASE_URL) {

        var params = {
            marcasId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/marcas/:marcasId';

        return $resource(API_URL, params, actions);

    }

})();
