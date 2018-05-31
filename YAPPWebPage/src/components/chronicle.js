/**
 * Created by aliwo on 2018-03-31.
 */
(function () {
    'use strict';
    YappApp.component('chronicle', {
        templateUrl : 'YAPPWebPage/src/components/chronicle.tpl.html',
        controller: chronicleController,
        bindings : {
        }
    });

    chronicleController.$inject = ['$http'];

    function chronicleController($http) {
        var chController = this;

        chController.sayHi = function () {
            console.log('안녕! 난 chronicleController 야!')
        };

        chController.chronicle = $http({'url':'./YAPPWebPage/public/meta/chronicle.json'}).then(function (response) {
            chController.chronicle = response.data;
        });


    }


})();


