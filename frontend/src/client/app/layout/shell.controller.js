(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    ShellController.$inject = ['$rootScope', '$timeout', 'config', 'logger','dataservice'];
    /* @ngInject */
    function ShellController($rootScope, $timeout, config, logger,dataservice) {
        var vm = this;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        $rootScope.showSplash = true;
        vm.navline = {
            title: config.appTitle,
            text: 'Usuario Visitante',
            link: ''
        };

        activate();

        function activate() {
            // logger.success(config.appTitle + ' loaded!', null);
            cargarEstados();
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                $rootScope.showSplash = false;
            }, 1000);
        }
        function cargarEstados() {
            var estaosArray = dataservice.getEstado();
            estaosArray.then(function  (valor) {
                
                $rootScope.estados =valor;
            })
        }
    }
})();
