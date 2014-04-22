$(document).ready(function() {

	/* Link Scroll Animation */
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});


    /* Set height of front content header to window height */
    $('header.front_theme').each(function(){
        var $this = $(this);
        $this.css({'min-height':($(window).height()-$('.header_theme').height()-35)+'px'});

        /*Recalculate on window resize*/
        $(window).resize(function(){
            $this.css({'min-height':($(window).height()-$('.header_theme').height()-35)+'px'});
        });
    });

    /* Parralax Scrolling (Dormant) 

    var $window = $(window); //You forgot this line in the above example

    $('header[data-type="background"]').each(function(){
        var $fronbkrnd = $(this); // assigning the object
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $fronbkrnd.data('speed'));
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
            // Move the background
            $fronbkrnd.css({ backgroundPosition: coords });
        });
    });
    */


});