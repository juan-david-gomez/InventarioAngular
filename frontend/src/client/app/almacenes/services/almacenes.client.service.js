(function() {
    'use strict';

    angular
        .module('app.almacenes')
        .factory('Almacenes', Almacenes);

    Almacenes.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Almacenes($resource, API_BASE_URL) {

        var params = {
            almacenesId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/almacenes/:almacenesId';

        return $resource(API_URL, params, actions);

    }

})();
