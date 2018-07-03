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

        $('#chronicle-carousel').slick({
            initialSlide : 12,
            centerMode: true,
            prevArrow : '<img class="pc-only" src="YAPPWebPage/public/img/chronicles/arrow_back.png" ' +
            'style="height: 60px; position: absolute; top:50%; left: -20px; z-index: 20">',
            nextArrow : '<img class="pc-only" src="YAPPWebPage/public/img/chronicles/arrow_next.png" ' +
            'style="height: 60px; position: absolute; top:50%; right: -20px; z-index: 20">',
            variableWidth: true,
            responsive : [{
                breakpoint: 1770,
                settings : {
                    centerMode: true,
                    prevArrow: '',
                    nextArrow : ''
                }
            }]
        });


    }


})();


