(function() {
    'use strict';

    angular
        .module('app.grupos')
        .factory('Grupos', Grupos);

    Grupos.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Grupos($resource, API_BASE_URL) {

        var params = {
            gruposId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/grupos/:gruposId';

        return $resource(API_URL, params, actions);

    }

})();