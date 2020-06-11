(function ($) {

    "use strict";

    // COLOR MODE
    $('.color-mode').click(function () {
        $('body').toggleClass('dark-mode')
    })


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
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
})

      var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
    })(jQuery);
    