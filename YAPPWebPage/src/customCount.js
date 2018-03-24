
//animation 추가, 추후 스크롤 값에 의해 fire 되도록 구현하면 됩니다.

var defaultAnimOption = {
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
        if (1500 < $(document).scrollTop() && $(document).scrollTop() < 1600) {
            fireAnimations(animations);
        }
    }
);

