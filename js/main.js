$(function() {

    // Pre-loader
    window.onload = function() {
        $('#pre-loader').fadeOut('slow', function() {
            $('#pre-loader').remove();
        });
        $('body').delay(350).css({
            'overflow-y': 'visible'
        });
    }

    // Init Pointer
    init_pointer();

    // Init AOS
    AOS.refresh();
    //Animation Intilization 
    AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
        })
        // SMooth Scroll
    var scroll = new SmoothScroll('.nav-link[href*="#"]');
    var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', { easing: 'easeInQuad' });



});

// Pointer Starts
// Init Pointer


const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(ring, document.body.children[0])

let mouseX = -100
let mouseY = -100
let ringX = -100
let ringY = -100
let isHover = false
let mouseDown = false

const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        if (window.innerWidth > 768) {

            mouseX = mouse.clientX
            mouseY = mouse.clientY

        }
    }

    window.onmousedown = (mouse) => {
        mouseDown = true
    }

    window.onmouseup = (mouse) => {
        mouseDown = false
    }

    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    }
    window["trace"] = trace

    const getOption = (option) => {
        return options[option]

    }

    const render = () => {
        ringX = trace(ringX, mouseX, 0.2)
        ringY = trace(ringY, mouseY, 0.2)

        if (mouseDown) {
            ring.style.padding = 10 + "px"
        } else {
            ring.style.padding = 15 + "px"
        }

        ring.style.transform = `translate(${ringX - (mouseDown ? 10 : 15 )}px, ${ringY - (mouseDown ? 10 : 15)}px)`

        requestAnimationFrame(render)
    }
    requestAnimationFrame(render)
}

// POinter end

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
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
    });

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });
})(jQuery);