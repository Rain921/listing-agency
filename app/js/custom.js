$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	/* components */
	//слаидер first
	$('.slider-first').not('.slick-initialized').slick({
		speed: 300,
		dots: true,
		mobileFirst: false,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 810,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
//слаидер second
	$('.slider-second').not('.slick-initialized').slick({
		speed: 300,
		dots: false,
		mobileFirst: false,
		arrows: true,
		appendArrows: '.slider-item-1',
		prevArrow: '<button data-role="none" class="slider-btn slider-btn--prev icon-slider-arrows_right" aria-label="Previous" tabindex="0" role="button" ></button>',
		nextArrow: '<button data-role="none" class="slider-btn slider-btn--next icon-slider-arrows_left" aria-label="Next" tabindex="0" role="button" > </button>',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1111,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 860,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
//слаидер theree
	$('.slider-three').not('.slick-initialized').slick({
		speed: 300,
		dots: true,
		mobileFirst: false,
		arrows: true,
		appendArrows: '.slider-item',
		prevArrow: '<button data-role="none" class="slider-btn slider-btn--prev icon-slider-arrows_right" aria-label="Previous" tabindex="0" role="button" ></button>',
		nextArrow: '<button data-role="none" class="slider-btn slider-btn--next icon-slider-arrows_left" aria-label="Next" tabindex="0" role="button" > </button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1111,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	

/*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



