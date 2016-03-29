(function() {
    'use strict';

    angular
        .module('app.articulos')
        .factory('Articulos', Articulos);

    Articulos.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Articulos($resource, API_BASE_URL) {

        var params = {
            articulosId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/articulos/:articulosId';

        return $resource(API_URL, params, actions);

    }

})();
