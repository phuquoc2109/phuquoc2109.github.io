$(document).ready(function(){
	$('#menu-pages').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	$('#menu-news').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	$('#menu-blog').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	$('#menu-action').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	$('#menu-team').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	$('#menu-contact').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $($(this).attr('href')).offset().top
		}, 1000, 'linear');
	});

	$('#scroll-down-arrow').on('click', function(){
		$('html, body').animate({
			"scrollTop" : $("#contact-us").offset().top
		}, 1000, 'linear');
	});					
});
