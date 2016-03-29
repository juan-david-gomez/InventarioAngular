(function () {
    'use strict';

    angular
        .module('app.marcas')
        .controller('MarcasController', MarcasController);

    MarcasController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Marcas',
        'TableSettings',
        'MarcasForm'];
    /* @ngInject */
    function MarcasController(logger,
        $stateParams,
        $location,
        Marcas,
        TableSettings,
        MarcasForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Marcas);
        vm.marcas = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = MarcasForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Marcas object
            var marcas = new Marcas(vm.marcas);

            // Redirect after save
            marcas.$save({marcasId:''},function(response) {
                logger.success('Marca creada');
                $location.path('marcas/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Marcas
        vm.remove = function(marcas) {

            if (marcas) {
                marcas = Marcas.get({marcasId:marcas.id}, function() {
                    marcas.$remove(function() {
                        logger.success('Marca borrada');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.marcas.$remove(function() {
                    logger.success('Marca borrada');
                    $location.path('/marcas');
                });
            }

        };

        // Update existing Marcas
        vm.update = function() {
            var marcas = vm.marcas;

            marcas.$update(function() {
                logger.success('Marca editada');
                $location.path('marcas/' + marcas.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewMarcas = function() {
            vm.marcas = Marcas.get({marcasId: $stateParams.marcasId});
            vm.setFormFields(true);
        };

        vm.toEditMarcas = function() {
            vm.marcas = Marcas.get({marcasId: $stateParams.marcasId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Marcas View');
        }
    }

})();
