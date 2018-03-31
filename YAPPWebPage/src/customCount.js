var SW = { // sw 가 만들어 둔 헬퍼 함수들입니다.
    getAbsPos : function (el) {
        // 특정 element 의 절대 x y 값을 반환합니다.
        for (var lx=0, ly=0;
             el != null;
             lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        return {x: lx,y: ly};
    },

    getScrollBottom : function () {
        return $(window).scrollTop() + $(window).height();
    }
};


var defaultAnimOption = { // 기본 애니메이션 설정
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.'
};


function getAnimations() {
    return [new CountUp("accumulateMember", 0, 230, 0, 3, defaultAnimOption),
        new CountUp("currentMember", 0, 41, 0, 3, defaultAnimOption),
        new CountUp("accmulateDownload", 0, 377658, 0, 3, defaultAnimOption)];
}

function fireAnimations(animations) {
    for (var i=0; i<animations.length; i++) {
        if (!animations[i].error) {
            animations[i].start();
        } else {
            console.error(animations[i].error);
        }
    }
}

animations = getAnimations();

$(window).scroll(function () {
        if (SW.getAbsPos(document.getElementById('count-div')).y < SW.getScrollBottom()) {
            fireAnimations(animations);
        }
    }
);

