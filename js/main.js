$(window).load(function(){
	$('#loading').fadeOut('slow',function(){$(this).remove();});
});

var wow = new WOW ({
	boxClass:     'wow',      
	animateClass: 'animated',
	offset:       120, 
	mobile:       false,
	live:         true 
}
);
wow.init();

(function() {

  // cache vars
  var cards = document.querySelectorAll(".card.effect__random");
  var timeMin = 1;
  var timeMax = 3;
  var timeouts = [];

  // loop through cards
  for ( var i = 0, len = cards.length; i < len; i++ ) {
    var card = cards[i];
    var cardID = card.getAttribute("data-id");
    var id = "timeoutID" + cardID;
    var time = randomNum( timeMin, timeMax ) * 1000;
    cardsTimeout( id, time, card );
  }

  // timeout listener
  function cardsTimeout( id, time, card ) {
    if (id in timeouts) {
      clearTimeout(timeouts[id]);
    }
    timeouts[id] = setTimeout( function() {
      var c = card.classList;
      var newTime = randomNum( timeMin, timeMax ) * 1000;
      c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
      cardsTimeout( id, newTime, card );
    }, time );
  }

  // random number generator given min and max
  function randomNum( min, max ) {
    return Math.random() * (max - min) + min;
  }

})();

(function(cash) { "use strict";

    var screen_width = jQuery(window).width();

    if(jQuery('.admin-bar').length){
        jQuery('.menu-all-pages-container,.parent-menu,.main-logo,.mobile-icon').addClass('hasadminbar');
    }

    jQuery('.navigation li').on('click',function(){
       if(jQuery(this).hasClass('menu-item-has-children'))
       {

           if(jQuery(this).find('.dropmenu').hasClass('submenu-item-open'))
           {
               jQuery(this).find('.dropmenu').removeClass('submenu-item-open');
               jQuery(this).find('.dropmenu').hide().css({'visibility':'hidden','opacity': 0});
           }
           else{
               jQuery(this).find('.dropmenu').addClass('submenu-item-open');
               jQuery(this).find('.dropmenu').show().css({'visibility':'visible','opacity': 1});
           }


       }
    });

    jQuery("[href=#]").click(function(event){
        event.preventDefault();
    });

    jQuery('.blog-page').find('.item.post-no-image').each(function(){

            var height = jQuery(this).find('.post-text').outerHeight();

        if(height.length !== 0)
            jQuery(this).find('.post-img').height(height);
        else
            jQuery(this).find('.post-img').height(200);

        jQuery(this).find('.post-text').css('position','absolute');
    });

    jQuery('.filter-category').on('click',function(){
       var link = jQuery(this).attr('data-href');

        window.location.href = link;
    });

	jQuery('.navigation li').children('a').addClass('animsition-link');

    jQuery('.navigation').children('li').children('a').each(function(){
        var menu_a_text = jQuery(this).text();

        jQuery(this).empty();

        if(jQuery(this).siblings('.dropmenu').length !== 0)
            jQuery(this).append('<span>'+menu_a_text+'</span><div class="fa fa-angle-down"></div>');
        else
            jQuery(this).append('<span>'+menu_a_text+'</span>');
    });

	function center_bg(){
		jQuery('.center-image').each(function(){
		  var bgSrc = jQuery(this).attr('src');
		  jQuery(this).parent().css({'background-image':'url('+bgSrc+')'});
		  jQuery(this).remove();
		});
	}
	center_bg();
				
	
	/***********************************/
	/*MOBILE MENU*/
	/**********************************/

    if(screen_width < 220)
    {
        jQuery('.navigation li a .fa').on('click', function(){
           var parent_li = jQuery(this).parents('li');

           if(parent_li.hasClass('menu-item-has-children'))
            {

                if(parent_li.find('.dropmenu').hasClass('submenu-item-open'))
                {
                    parent_li.find('.dropmenu').removeClass('submenu-item-open');
                    parent_li.find('.dropmenu').hide().css({'visibility':'hidden','opacity': 0});
                }
                else{
                    parent_li.find('.dropmenu').addClass('submenu-item-open');
                    parent_li.find('.dropmenu').show().css({'visibility':'visible','opacity': 1});
                }


            }

            return false;
        });
    }
	jQuery('.nav-menu-icon a').on("click", function() { 
	  if (jQuery('nav').hasClass('slide-menu')){
		  jQuery('nav').removeClass('slide-menu'); 
		  jQuery(this).removeClass('active');
	  }else {
		   jQuery('nav').addClass('slide-menu');
		  jQuery(this).addClass('active');
	  }
		return false;
	});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
	if ($(this).scrollTop() > 250) {
		if (!fixed) {
			fixed = true;
			// $('#to-top').css({position:'fixed', display:'block'});
			$('#to-top').show("slow", function() {
				$('#to-top').css({
					position: 'fixed',
					display: 'block'
				});
			});
		}
	} else {
		if (fixed) {
			fixed = false;
			$('#to-top').hide("slow", function() {
				$('#to-top').css({
					display: 'none'
				});
			});
		}
	}
});


$(document).ready(function(){
	
$('#mainslide').bxSlider({
	mode: 'fade',
	controls: false,
	pager: false,
	auto: true
});
	
$('#serviceSlide').bxSlider({
	mode: 'fade',
	controls: false,
	pager: false,
	auto: true
});
});

$(function(){
  $(".typed").typed({
	strings: ["oh so creative, really passionate, and fairly innovative agency.", 
	"partner in sharing the right story with your customers."],
	typeSpeed: 20,
	backDelay: 4000,
	loop: true,
	contentType: 'html', // or text
	showCursor: false,
	loopCount: false,
  });
});	
		 				 
})(jQuery); 