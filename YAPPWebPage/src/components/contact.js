/**
 * Created by aliwo on 2018-03-31.
 */
(function () {
    'use strict';
    YappApp.component('contact', {
        templateUrl : 'YAPPWebPage/src/components/contact.tpl.html',
        controller: contactCtrl,
        bindings : {
        }
    });

    contactCtrl.$inject = ['$http'];

    function contactCtrl($http) {
        var controller = this;

        controller.sayHi = function () {
            console.log('안녕! 난 introductionController 야!')
        };

    }


})();


