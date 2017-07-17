$(document).ready(function(){

	$('.s-about__slider').slick({
		dots: false,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
				dots:true
			}
		}]
	});

	// hover plans btn & name block

	$('.s-prices__btn').hover(
		function(){
			$(this).parent('.s-prices__item').children('.s-prices__price').addClass('s-prices__price-hover');
		},
		function(){
			$(this).parent('.s-prices__item').children('.s-prices__price').removeClass('s-prices__price-hover');
		});

	// fixed navbar

	/*$(window).scroll(function(){

		var menu = $('.header'),
			menuScrollClass = 'h-scroll',
			headerHeight = menu.outerHeight();

		menu.css('top','-' + headerHeight + 'px');

		if ($(this).scrollTop() > 0) {
			menu.addClass(menuScrollClass).css('top', '0');
			$('.wrapper').css('padding-top', headerHeight + 'px');

		} else {
			menu.removeClass(menuScrollClass);
			$('.wrapper').css('padding-top', '0');
		};
	});*/

	// go to anchor

	/*$(".nav__ul").on("click","a", function (event) {
		var id  = $(this).attr('href'),
			headerHeight = $('.header').outerHeight();
		event.preventDefault();

		$('.nav__item').removeClass('active');
		$(this).parent('.nav__item').addClass('active');

		if ($(id).length){

			var anchor = $(id).offset().top - headerHeight;
  			$('body, html').animate({scrollTop: anchor}, 600);

		} else { alert('Такой секции небыло в задании'); }


	});*/

	// burger ico

	$('#menuButton').on('click', function (event){
		event.preventDefault();
		$(this).toggleClass('is-active');
		$('.header__nav').toggleClass('nav-visible');
	});


});