$(function() {
    AOS.refresh();
    //Animation Intilization 
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
    })
});


(function($) {
    "use strict";
    // COLOR MODE
    $('.color-mode').click(function() {
        $('body').toggleClass('dark-mode')
    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        // alert("f")
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);
            // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
    });
})(jQuery);