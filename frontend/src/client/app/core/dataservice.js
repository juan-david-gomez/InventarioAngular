(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'logger','Estados'];
    /* @ngInject */
    function dataservice($http, $q, logger, Estados) {
        var service = {
            getEstado: getEstado,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getEstado() {
            
            var model = new Estados;
            var estadosPromise = $q.defer();
            var estadosHashMap = {};
            var estados = model.$get(function  (response) {
                var estadosModel  = response.results;
                estadosModel.forEach(function  (estado) {
                    estadosHashMap[estado.id]=estado.descripcion;
                });
                estadosPromise.resolve(estadosHashMap);
            });

            return estadosPromise.promise;
        }
    }
})();
