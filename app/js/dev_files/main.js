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

	$('.s-bloquotes__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		asNavFor: '.s-bloquotes__slider-nav'
	});

	$('.s-bloquotes__slider-nav').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.s-bloquotes__slider',
		dots: false,
		centerMode: false,
		focusOnSelect: true
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
	$(window).scroll(function(){
		var menu = $('.header'),
				menuParent= menu.parent(),
				menuScrollClass = 'header-fixed',
				headerHeight = menu.outerHeight();

		if ($(this).scrollTop() > 0) {
			menu.addClass(menuScrollClass);
			menuParent.css('padding-top', headerHeight + 'px');

		} else {
			menu.removeClass(menuScrollClass);
			menuParent.css('padding-top', '0');
		};
	});

	// go to anchor
	$(".nav__ul").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
				headerHeight = $('.header').outerHeight();

		$(".nav__ul").children('li').removeClass('active');
		$(this).parent('li').addClass('active');

			var anchor = $(id).offset().top - headerHeight;
			$('body, html').animate({scrollTop: anchor}, 600);
	});

	// burger ico
	$('#menuButton').on('click', function (event){
		event.preventDefault();
		$(this).toggleClass('is-active');
		$('.nav__ul').toggleClass('nav-visible');

		if ($("#menuButton").hasClass("is-active")) {
				$(".nav__ul").on("click","a", function (event) {
				event.preventDefault();
				$(".nav__ul").removeClass('nav-visible');
				$('#menuButton').removeClass('is-active')
		});
		} else { return; }
	});

$.validator.addMethod('regExp', function(value, element, params) {
    var expression = new RegExp(params);
    return this.optional(element) || expression.test(value);
});

	$("#s-banner__form").validate({
		rules: {
			form_name: {
				required: true,
				minlength: 2,
				regExp: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/
			},
			form_tel: {
				required: true,
				regExp: /^[+]{1}[0-9]{9,13}$/
			},
			form_select: {
				required: true
			}
		},
		messages: {
			form_name: {
				required:	'Please enter your name',
				regExp: 'This is not your real name'
			},
			form_tel: {
				required:	'Please enter your phone number',
				regExp: 'Example +456995588'
			},
			form_select: 'Please make your choice'
		}
	});
});