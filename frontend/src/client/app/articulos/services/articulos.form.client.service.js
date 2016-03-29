(function() {
    'use strict';
    angular
        .module('app.articulos')
        .factory('ArticulosForm', factory);

    factory.$inject = ['Estados','Almacenes','Grupos','Marcas','TipoUnidades','Proveedores'];
    function factory(Estados,Almacenes,Grupos,Marcas,TipoUnidades,Proveedores) {

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
                    key: 'almacen',
                    type: 'select',
                    templateOptions: {
                        label: 'Alamcen:',
                        options: [],
                        valueProp: "id",
                        labelProp: "nombre",
                        disabled: disabled,
                        required: true
                    },
                    controller: /* @ngInject */ function($scope) {
                        var data = new Almacenes();
                        data.$get(function  (data) {
                            var dataOptions = data.results;
                            $scope.to.options = dataOptions   ;
                        });
                    }
                },
                {   
                    key: 'grupo',
                    type: 'select',
                    templateOptions: {
                        label: 'Grupo:',
                        options: [],
                        valueProp: "id",
                        labelProp: "descripcion",
                        disabled: disabled,
                        required: true
                    },
                    controller: /* @ngInject */ function($scope) {
                        var data = new Grupos();
                        data.$get(function  (data) {
                            var dataOptions = data.results;
                            $scope.to.options = dataOptions   ;
                        });
                    }
                },
                {   
                    key: 'marca',
                    type: 'select',
                    templateOptions: {
                        label: 'Marca:',
                        options: [],
                        valueProp: "id",
                        labelProp: "descripcion",
                        disabled: disabled,
                        required: true
                    },
                    controller: /* @ngInject */ function($scope) {
                        var data = new Marcas();
                        data.$get(function  (data) {
                            var dataOptions = data.results;
                            $scope.to.options = dataOptions   ;
                        });
                    }
                },
                {   
                    key: 'proveedor',
                    type: 'select',
                    templateOptions: {
                        label: 'Proveedor:',
                        options: [],
                        valueProp: "id",
                        labelProp: "nombre",
                        disabled: disabled,
                        required: true
                    },
                    controller: /* @ngInject */ function($scope) {
                        var data = new Proveedores();
                        data.$get(function  (data) {
                            var dataOptions = data.results;
                            $scope.to.options = dataOptions   ;
                        });
                    }
                },
                {
                    key: 'precioEntrada',
                    type: 'input',
                    templateOptions: {
                        label: 'Precio de Compra:',
                        disabled: disabled,
                        required: true
                    }
                },
            
                {
                    key: 'precioSalida',
                    type: 'input',
                    templateOptions: {
                        label: 'Precio de Venta:',
                        disabled: disabled,
                        required: true
                    }
                },
            
                {
                    key: 'minimo',
                    type: 'input',
                    templateOptions: {
                        label: 'Canidad Minima:',
                        disabled: disabled,
                        required: true
                    }
                },
            
                {
                    key: 'stock',
                    type: 'input',
                    templateOptions: {
                        label: 'Cantidad en Inventario:',
                        disabled: disabled,
                        required: false
                    }
                },
                {   
                    key: 'tipoUnidad',
                    type: 'select',
                    templateOptions: {
                        label: 'Tipo de Unidad:',
                        options: [],
                        valueProp: "id",
                        labelProp: "descripcion",
                        disabled: disabled,
                        required: true
                    },
                    controller: /* @ngInject */ function($scope) {
                        var data = new TipoUnidades();
                        data.$get(function  (data) {
                            var dataOptions = data.results;
                            $scope.to.options = dataOptions   ;
                        });
                    }
                },
            
                {
                    key: 'descripcion',
                    type: 'input',
                    templateOptions: {
                        label: 'Descrpción:',
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
