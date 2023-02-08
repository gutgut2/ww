jQuery(function($){
	$(document).mouseup( function(e){
		var div = $( ".index-page .top-search .window" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			div.hide();
		}
	});
});

$(function(){
	$('.header .menu-button').click(function() {
		$('.header nav').toggleClass('opened');
	});
	$('.index-page .item .info p a.more-link').click(function() {
		$(this).hide();
		$(this).parent().find('.hidden-text').show();
	});
	$('.cookies-block button').click(function() {
		$(this).parent().hide();
	});
	$('.index-page .item .info .dots-link').click(function() {
		$(this).next('.menu').toggle();
	});
	$('.index-page .top-search input[type=text]').click(function() {
		$('.index-page .top-search .window').show();
	});
	$('.index-page .item .photos .preview-text .text button').click(function() {
		$(this).parent().parent().fadeOut();
		$(this).parent().parent().parent().next('.info').find('.avatar').addClass('opened');
	});
	$('.index-page .top-nav .links .more-link').click(function() {
		$(this).toggleClass('active');
		$('.index-page .top-nav .links a.hidden').toggleClass('h');
		$('.index-page .top-nav .all').toggle();
	});
	$('.index-page .item .photos .list').slick({
		dots: true
	});
	var slider = $('.index-page .item .photos .list');
	$('.sl-count__total2').text( slider.slick("getSlick").slideCount);
	$(".index-page .item .photos .list").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current2").text(currentSlide + 1);
	});
	$('.index-page .item .photos .list2').slick({
	  dots: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	var slider = $('.index-page .item .photos .list2');
	$('.sl-count__total').text( slider.slick("getSlick").slideCount);
	$(".index-page .item .photos .list2").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current").text(currentSlide + 1);
	});
});