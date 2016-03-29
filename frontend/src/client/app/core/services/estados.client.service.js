(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('Estados', Estados);

    Estados.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Estados($resource, API_BASE_URL) {

        var params = {
            estadosId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/estados/:estadosId';

        return $resource(API_URL, params, actions);

    }

})();
