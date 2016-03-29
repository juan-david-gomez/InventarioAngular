(function() {
    'use strict';
    angular
        .module('app.proveedores')
        .factory('ProveedoresForm', factory);

    factory.$inject = ['Estados'];
    function factory(Estados) {

        var getFormFields = function(disabled) {
            
            var fields = [
            
                {
                    key: 'id',
                    type: 'input',
                    templateOptions: {
                        label: 'Id:',
                        disabled: disabled,
                        required: false
                    }
                },
            
                {
                    key: 'nombre',
                    type: 'input',
                    templateOptions: {
                        label: 'Nombre:',
                        disabled: disabled,
                        required: true
                    }
                },
            
                {
                    key: 'direccion',
                    type: 'input',
                    templateOptions: {
                        label: 'Direccion:',
                        disabled: disabled,
                        required: false
                    }
                },
            
                {
                    key: 'telefono',
                    type: 'input',
                    templateOptions: {
                        label: 'Telefono:',
                        disabled: disabled,
                        required: false
                    }
                },
            
                {
                    key: 'descripcion',
                    type: 'input',
                    templateOptions: {
                        label: 'Descripcion:',
                        disabled: disabled,
                        required: false
                    }
                },
            
                {   
                    key: 'estado',
                    type: 'select',
                    templateOptions: {
                        label: 'Estado:',
                        options: [],
                        valueProp: "id",
                        labelProp: "descripcion",
                        disabled: disabled,
                        required: true
                    },
                    controller: /* @ngInject */ function($scope) {
                        var estados = new Estados();
                        estados.$get(function  (data) {
                            var estadosIOptions = data.results;
                            $scope.to.options = estadosIOptions;
                        });
                    }
                },
            
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
