(function ($) {

    "use strict";

    // COLOR MODE
    $('.color-mode').click(function () {
        $('body').toggleClass('dark-mode')
    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        // alert("f")
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);
            // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });


    $('.clients-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        responsiveClass: true,
        responsive: {
            480: {
                items: 1
            }, // from zero to 480 screen width 4 items
            768: {
                items: 2
            }, // from 480 screen widthto 768 6 items
            1024: {
                items: 5 // from 768 screen width to 1024 8 items
            }
        },
    })

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function (e) {
        $hamburger.toggleClass("is-active");
        // Do something else, like open/close menu
    });
})(jQuery);
