//= jquery.min.js
//= jquery.magnific-popup.min.js
//= slick.min.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

function heightFooter(){
  var heightFoot = $('.footer').outerHeight();
  $('body').css({ 'padding-bottom': heightFoot});
}
heightFooter()
$( window ).resize(function() {
  heightFooter()
});

var marginOffset = function(){
  $('[class*="marginLeft"]').each(function(item, value){
    console.log(item);
    console.log($(value).attr('class'));
  });
  var offsetCheck = item;
//   switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

};
marginOffset();

// $(".burger-menu").on("click", function() {  
//   $(".menu-header").toggleClass('is-active');
//   $("body").toggleClass('overflow');
// })

/* Popup Window */

$(".popup").magnificPopup({
  type: 'inline',
  removalDelay: 300,
  mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */


// $('.slider-case').slick({
// 	infinite: true,
// 	autoplay: true,
// 	autoplaySpeed: 6000,
// 	slidesToShow: 1,
//   speed: 500,
//   arrows: false,
//   dots: true,
//   appendDots: $('.appendDots')
// });

$('.case-text').slick({
  infinite: true,
	autoplay: true,
	autoplaySpeed: 6000,
  speed: 500,
  asNavFor: '.case-images',
  dots: true,
  fade: true,
  arrows: false,
});
$('.case-images').slick({
  infinite: true,
	autoplay: true,
	autoplaySpeed: 6000,
  arrows: false,
  speed: 500,
  asNavFor: '.case-text',
  fade: true,
});

var menuOpen = function(){
	$('.burger-menu').click(function(e){
		e.preventDefault();
		$('.top-menu--wrapper').toggleClass('active');
		$('.top-line').toggleClass('active');
	});
	$(document).mouseup(function (e) {
		var container = $('.top-line');
		if (container.has(e.target).length === 0){
			$('.top-menu--wrapper').removeClass('active');
			$('.top-line').removeClass('active');
		}
	});
};
menuOpen();

$(document).scroll(function() {
  $('.top-menu--wrapper').removeClass('active');
  $('.top-line').removeClass('active');
});

