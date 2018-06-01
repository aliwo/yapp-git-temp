/**
 * Created by aliwo on 2018-03-31.
 */
(function () {
    'use strict';
    YappApp.component('activityIntro', {
        templateUrl : 'YAPPWebPage/src/components/activity-intro.tpl.html',
        controller: activityIntroCtrl,
        bindings : {
        }
    });

    activityIntroCtrl.$inject = ['$http'];

    function activityIntroCtrl($http) {
        var controller = this;

        controller.sayHi = function () {
            console.log('안녕! 난 chronicleController 야!')
        };

    }


})();


