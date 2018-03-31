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

    function chronicleController() {
        // var chronicleController 를 쓰면 안 먹음. 왜 일까? 자바스크립트는 function 을 먼저 번역하고
        // 코드를 실행하는 건가?
        var chController = this;

        chController.sayHi = function () {
            console.log('안녕! 난 chronicleController 야!')
        }

    }


})();


