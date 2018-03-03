

var numAnim = new CountUp("accumulateMember", 0, 230);
if (!numAnim.error) {
    numAnim.start();
} else {
    console.error(numAnim.error);
}

console.log('야 js 실행했어');