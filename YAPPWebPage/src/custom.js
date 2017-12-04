$('.navbar-nav > li > a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});

$(window).on('scroll', function(){
	  
});

//Show totop btn on Scroll
$(window).scroll(function () {
  $('.to-top-btn').stop().animate({"marginTop": ($(window).scrollTop()) + "px"}, 80);
  if ($(this).scrollTop() > 400) {
	  $('.to-top-btn').addClass('showme');
  } else {
	  $('.to-top-btn').removeClass('showme');
  }
});

$('.to-top-btn').click(function() {
    $('html, body').animate({scrollTop: '0'}, 600);
});

// count up intro page

// if ($(window).scrollTop() > $('.intro_count').offset().top - $('.intro_count').offset().top / 2) {
//     $('.intro_count .num').each(function() {
//         var $this = $(this),
//             countTo = $this.attr('data-count');
        
//         $({ countNum: $this.text() }).animate({
//                 countNum: countTo
//             },
//             {
//             duration: 8000,
//             easing: 'linear',
//             step: function() {
//                 $this.text(Math.floor(this.countNum));
//             },
//             complete: function() {
//                 $this.text(this.countNum);
//                 //alert('finished');
//             }
//         });
//     });
// } 


// fullpage js

$(document).ready(function() {
	$('#fullpage').fullpage({
	    menu: '#activityNav',
	    loopBottom: false,
		loopTop: false,
		responsiveWidth: 1300,
		anchors: ['firstSect', 'secondSect', 'thirdSect', 'fourthSect']
	});
});

var viewer01 = new Viewer(document.getElementById('activityAlbum01'));
var viewer02 = new Viewer(document.getElementById('activityAlbum02'));
var viewer03 = new Viewer(document.getElementById('activityAlbum03'));
var viewer04 = new Viewer(document.getElementById('activityAlbum04'));