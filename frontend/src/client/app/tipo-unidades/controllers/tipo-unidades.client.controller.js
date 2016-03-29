(function () {
    'use strict';

    angular
        .module('app.tipoUnidades')
        .controller('TipoUnidadesController', TipoUnidadesController);

    TipoUnidadesController.$inject = ['logger',
        '$stateParams',
        '$location',
        'TipoUnidades',
        'TableSettings',
        'TipoUnidadesForm'];
    /* @ngInject */
    function TipoUnidadesController(logger,
        $stateParams,
        $location,
        TipoUnidades,
        TableSettings,
        TipoUnidadesForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(TipoUnidades);
        vm.tipoUnidades = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = TipoUnidadesForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new TipoUnidades object
            var tipoUnidades = new TipoUnidades(vm.tipoUnidades);

            // Redirect after save
            tipoUnidades.$save({tipoUnidadesId:''},function(response) {
                logger.success('Tipo de unidad creado');
                $location.path('tipo-unidades/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing TipoUnidades
        vm.remove = function(tipoUnidades) {

            if (tipoUnidades) {
                tipoUnidades = TipoUnidades.get({tipoUnidadesId:tipoUnidades.id}, function() {
                    tipoUnidades.$remove(function() {
                        logger.success('Tipo de unidad borrado');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.tipoUnidades.$remove(function() {
                    logger.success('Tipo de unidad borrado');
                    $location.path('/tipo-unidades');
                });
            }

        };

        // Update existing TipoUnidades
        vm.update = function() {
            var tipoUnidades = vm.tipoUnidades;

            tipoUnidades.$update(function() {
                logger.success('Tipo de unidad editado');
                $location.path('tipo-unidades/' + tipoUnidades.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewTipoUnidades = function() {
            vm.tipoUnidades = TipoUnidades.get({tipoUnidadesId: $stateParams.tipoUnidadesId});
            vm.setFormFields(true);
        };

        vm.toEditTipoUnidades = function() {
            vm.tipoUnidades = TipoUnidades.get({tipoUnidadesId: $stateParams.tipoUnidadesId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated TipoUnidades View');
        }
    }

})();
