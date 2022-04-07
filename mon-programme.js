/*
 * Fichier : mon-programme.js
 */


//console.log('pppp');

$(document).ready(function(){


	$('.iconMenuBurger').on("click", function(){
		$('.menuWrapper nav').slideToggle(250);
	});

	$('.slideshow').slick({
		arrows: false,
		fade: true,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 300
	});

	$('.sliderVoiture').slick({
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-caret-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-caret-right"></i></button>'
	});	



});
