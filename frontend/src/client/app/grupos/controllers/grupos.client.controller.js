(function () {
    'use strict';

    angular
        .module('app.grupos')
        .controller('GruposController', GruposController);

    GruposController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Grupos',
        'TableSettings',
        'GruposForm'];
    /* @ngInject */
    function GruposController(logger,
        $stateParams,
        $location,
        Grupos,
        TableSettings,
        GruposForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Grupos);
        vm.grupos = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = GruposForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Grupos object
            var grupos = new Grupos(vm.grupos);

            // Redirect after save
            grupos.$save({gruposId:''},function(response) {
                logger.success('Grupo creado');
                $location.path('grupos/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Grupos
        vm.remove = function(grupos) {

            if (grupos) {
                grupos = Grupos.get({gruposId:grupos.id}, function() {
                    grupos.$remove(function() {
                        logger.success('Grupo borrado');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.grupos.$remove(function() {
                    logger.success('Grupo borrado');
                    $location.path('/grupos');
                });
            }

        };

        // Update existing Grupos
        vm.update = function() {
            var grupos = vm.grupos;

            grupos.$update(function() {
                logger.success('Grupo editado');
                $location.path('grupos/' + grupos.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewGrupos = function() {
            vm.grupos = Grupos.get({gruposId: $stateParams.gruposId});
            vm.setFormFields(true);
        };

        vm.toEditGrupos = function() {
            vm.grupos = Grupos.get({gruposId: $stateParams.gruposId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Grupos View');
        }
    }

})();
