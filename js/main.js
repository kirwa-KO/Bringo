$(function () {
	'use strict';

	var		windowHeight   = $(window).innerHeight(),
			// upperBarHeight = $('.upper-bar').innerHeight(),
			navBarHeight   = $('.navbar').innerHeight();

	$('.swiper-wrapper').height(windowHeight - (navBarHeight));

	// Feauters Shuffle
	// $('.feauters-work ul li').on('click', function () {
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	// console.log($(this).data('class'));
	// 	if ($(this).data('class') == '.all')
	// 	{
	// 		$('.shuffle-imgs .col-md').css('opacity', 1)
	// 	}
	// 	else
	// 	{
	// 		$('.shuffle-imgs .col-md').css('opacity', '.08');
	// 		$($(this).data('class')).parent().css('opacity', 1);
	// 	}
	// })
});

const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	// direction: 'vertical',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});