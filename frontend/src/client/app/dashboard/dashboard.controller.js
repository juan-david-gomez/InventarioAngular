(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'Canimagro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nam, ratione. Earum iste atque, repudiandae expedita! Magni ut dolore saepe quibusdam odit, hic nam. Accusantium quod hic eaque perferendis perspiciatis!'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function() {
                //logger.info('Activated Dashboard View');
            });
        }

        // function getMessageCount() {
        //     return dataservice.getMessageCount().then(function (data) {
        //         vm.messageCount = data;
        //         return vm.messageCount;
        //     });
        // }

        // function getPeople() {
        //     return dataservice.getPeople().then(function (data) {
        //         vm.people = data;
        //         return vm.people;
        //     });
        // }
    }
})();
