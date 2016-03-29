(function () {
    'use strict';

    angular
        .module('app.articulos')
        .controller('ArticulosController', ArticulosController);

    ArticulosController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Articulos',
        'TableSettings',
        'ArticulosForm'];
    /* @ngInject */
    function ArticulosController(logger,
        $stateParams,
        $location,
        Articulos,
        TableSettings,
        ArticulosForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Articulos);
        vm.articulos = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = ArticulosForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Articulos object
            var articulos = new Articulos(vm.articulos);

            // Redirect after save
            articulos.$save({articulosId:''},function(response) {
                logger.success('Articulo creado');
                $location.path('articulos/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Articulos
        vm.remove = function(articulos) {

            if (articulos) {
                articulos = Articulos.get({articulosId:articulos.id}, function() {
                    articulos.$remove(function() {
                        logger.success('Articulo borrado');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.articulos.$remove(function() {
                    logger.success('Articulo borrado');
                    $location.path('/articulos');
                });
            }

        };

        // Update existing Articulos
        vm.update = function() {
            var articulos = vm.articulos;

            articulos.$update(function() {
                logger.success('Articulo editado');
                $location.path('articulos/' + articulos.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewArticulos = function() {
            vm.articulos = Articulos.get({articulosId: $stateParams.articulosId});
            vm.articulos.$promise.then(function  (data) {
                data.almacen = data.almacen.id;
                data.grupo = data.grupo.id;
                data.marca = data.marca.id;
                data.tipoUnidad = data.tipoUnidad.id;
                data.proveedor = data.proveedor.id;
                //console.log(data);
                //data.almacen = 1;
            });
            vm.setFormFields(true);
        };

        vm.toEditArticulos = function() {
            vm.articulos = Articulos.get({articulosId: $stateParams.articulosId});
            //vm.articulos.almacen = vm.articulos.almacen.id;
            vm.articulos.$promise.then(function  (data) {
                data.almacen = data.almacen.id;
                data.grupo = data.grupo.id;
                data.marca = data.marca.id;
                data.tipoUnidad = data.tipoUnidad.id;
                data.proveedor = data.proveedor.id;
                //console.log(data);
                //data.almacen = 1;
            });            
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Articulos View');
        }
    }

})();
