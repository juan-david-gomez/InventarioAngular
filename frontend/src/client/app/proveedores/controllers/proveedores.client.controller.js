(function () {
    'use strict';

    angular
        .module('app.proveedores')
        .controller('ProveedoresController', ProveedoresController);

    ProveedoresController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Proveedores',
        'TableSettings',
        'ProveedoresForm'];
    /* @ngInject */
    function ProveedoresController(logger,
        $stateParams,
        $location,
        Proveedores,
        TableSettings,
        ProveedoresForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Proveedores);
        vm.proveedores = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = ProveedoresForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Proveedores object
            var proveedores = new Proveedores(vm.proveedores);

            // Redirect after save
            proveedores.$save({proveedoresId:''},function(response) {
                logger.success('Proveedor creado');
                $location.path('proveedores/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Proveedores
        vm.remove = function(proveedores) {

            if (proveedores) {
                proveedores = Proveedores.get({proveedoresId:proveedores.id}, function() {
                    proveedores.$remove(function() {
                        logger.success('Proveedor borrado');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.proveedores.$remove(function() {
                    logger.success('Proveedor borrado');
                    $location.path('/proveedores');
                });
            }

        };

        // Update existing Proveedores
        vm.update = function() {
            var proveedores = vm.proveedores;

            proveedores.$update(function() {
                logger.success('Proveedor editado');
                $location.path('proveedores/' + proveedores.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewProveedores = function() {
            vm.proveedores = Proveedores.get({proveedoresId: $stateParams.proveedoresId});
            vm.setFormFields(true);
        };

        vm.toEditProveedores = function() {
            vm.proveedores = Proveedores.get({proveedoresId: $stateParams.proveedoresId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Proveedores View');
        }
    }

})();
