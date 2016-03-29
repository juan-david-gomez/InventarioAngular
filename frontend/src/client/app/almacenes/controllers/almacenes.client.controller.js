(function () {
    'use strict';

    angular
        .module('app.almacenes')
        .controller('AlmacenesController', AlmacenesController);

    AlmacenesController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Almacenes',
        'TableSettings',
        'AlmacenesForm',
        
        '$scope'
        ];
    /* @ngInject */
    function AlmacenesController(logger,
        $stateParams,
        $location,
        Almacenes,
        TableSettings,
        AlmacenesForm,
        dataservice,
        $scope
        ) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Almacenes);
        // vm.tableParams.$params.filter = { estado: [{id:1,descripcion:"Activo"}]} ;
        // console.log(vm.tableParams.$params.filter);
        vm.almacenes = {};
        //obtengo los estados para ser mostrados por su valor en la lista

        // vm.estados = {
        // '1':{id:1,descripcion:"Activo"},
        // '2':{id:2,descripcion:"Inactivo"}
        // };

        vm.setFormFields = function(disabled) {
       
            vm.formFields = AlmacenesForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Almacenes object
            var almacenes = new Almacenes(vm.almacenes);

            // Redirect after save
            almacenes.$save({almacenesId:''},function(response) {
                logger.success('Almacen creado');
                $location.path('almacenes/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Almacenes
        vm.remove = function(almacenes) {

            if (almacenes) {
                almacenes = Almacenes.get({almacenesId:almacenes.id}, function() {
                    almacenes.$remove(function() {
                        logger.success('Almacen borrado');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.almacenes.$remove(function() {
                    logger.success('Almacen borrado');
                    $location.path('/almacenes');
                });
            }

        };

        // Update existing Almacenes
        vm.update = function() {
            var almacenes = vm.almacenes;

            almacenes.$update(function() {
                logger.success('Almacen editado');
                $location.path('almacenes/' + almacenes.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewAlmacenes = function() {
            vm.almacenes = Almacenes.get({almacenesId: $stateParams.almacenesId});
            vm.setFormFields(true);
        };

        vm.toEditAlmacenes = function() {
            vm.almacenes = Almacenes.get({almacenesId: $stateParams.almacenesId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Almacenes View');
        }
    }

})();
