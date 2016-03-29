(function() {
    'use strict';

    angular
        .module('app.proveedores')
        .factory('Proveedores', Proveedores);

    Proveedores.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Proveedores($resource, API_BASE_URL) {

        var params = {
            proveedoresId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/proveedores/:proveedoresId';

        return $resource(API_URL, params, actions);

    }

})();
