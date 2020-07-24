$(function() {

    // Pre-loader
    window.onload = function() {
        $('#pre-loader').fadeOut('slow', function() {
            $('#pre-loader').remove();
        });
        $('body').delay(350).css({
            'overflow-y': 'visible'
        });
    };

    // Init Pointer
    init_pointer();

    // Init AOS
    AOS.refresh();
    //Animation Intilization 
    AOS.init({
        duration: 1000,
        easing: 'ease-out-back',
    });
    // SMooth Scroll
    var scroll = new SmoothScroll('.nav-link[href*="#"]');
    var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', { easing: 'easeInQuad' });



});

// Pointer Starts
// Init Pointer

const pointer = document.createElement("div");
pointer.id = "pointer-dot";
const ring = document.createElement("div");
ring.id = "pointer-ring";
document.body.insertBefore(pointer, document.body.children[0]);
document.body.insertBefore(ring, document.body.children[0]);

let mouseX = -100;
let mouseY = -100;
let ringX = -100;
let ringY = -100;


let isOwlnav, isDarkmode, isLogo, btn_nws, isHover, isover, isalink, mouseDown, ctnbtn = false;
let pointerclr = "black";

let = false;

const init_pointer = (options) => {

    window.onmousemove = (mouse) => {
        if (window.innerWidth > 768) {

            mouseX = mouse.clientX;
            mouseY = mouse.clientY;

        }
    };

    window.onmousedown = (mouse) => {
        mouseDown = true;
    };

    window.onmouseup = (mouse) => {
        mouseDown = false;
    };


    $(".d-resume, .quote-btn").mouseover(function() {
        isover = true;
    });


    $(".nav-link").mouseover(function() {
        isalink = true;
    });

    $(".toggle-slot").mouseover(function() {
        isDarkmode = true;
    });

    $(".owl-nav").mouseover(function() {
        isOwlnav = true;
    });


    $(".logo-main").mouseover(function() {
        isLogo = true;
    });

    $(".btn_1").mouseover(function() {
        btn_nws = true;
    });

    $(".submit-btn").mouseover(function() {
        ctnbtn = true;
    });


    $(window).mouseout(function() {
        isover = false;
        isalink = false;
        isOwlnav = false;
        isDarkmode = false;
        isLogo = false;
        btn_nws = false;
        ctnbtn = false;
    });



    const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
    };
    window.trace = trace;

    const getOption = (option) => {
        return options[option];

    };


    const render = () => {
        ringX = trace(ringX, mouseX, 0.2);
        ringY = trace(ringY, mouseY, 0.2);



        d = 25;
        u = 15;

        if (isover == true) {

            // ring.style.transform = `translate(${ringX - u}px, ${ringY - u}px)`
            ring.style.width = "12em";
            ring.style.height = "3.4em";
            ring.style.borderRadius = "40px";
            ring.style.left = "-70px";
            ring.style.cursor = "none !important";
            pointer.style.border = "none";

        } else if (isalink == true) {

            ring.style.padding = d + "px";
            ring.style.width = "0";
            ring.style.left = "-20px";
            ring.style.top = "-18px";
            pointer.style.left = "-5px";
            pointer.style.top = "-6px";
            pointer.style.border = "none";

        } else if (isOwlnav == true) {

            ring.style.width = "3em";
            ring.style.height = "5em";
            ring.style.borderRadius = "0px";
            ring.style.left = "-2px";
            ring.style.top = "-15px";
            pointer.style.border = "none";

        } else if (isDarkmode == true) {

            ring.style.height = "50px";
            ring.style.width = "100px";
            ring.style.left = "-39px";
            ring.style.top = "-12px";
            pointer.style.border = "none";

        } else if (isLogo == true) {

            ring.style.width = "13em";
            ring.style.height = "3em";
            ring.style.borderRadius = "0px";
            ring.style.left = "-80px";
            ring.style.top = "1px";
            pointer.style.top = "12px";
            pointer.style.left = "-2px";
            pointer.style.border = "none";

        } else if (btn_nws == true) {

            ring.style.width = "3em";
            ring.style.height = "3em";
            ring.style.borderRadius = "0px";
            ring.style.left = "-10px";
            ring.style.top = "1px";
            pointer.style.top = "10px";
            pointer.style.left = "-2px";
            pointer.style.border = "none";

        } else if (ctnbtn == true) {

            ring.style.width = "23em";
            ring.style.height = "4em";
            ring.style.borderRadius = "40px";
            ring.style.left = "-100px";
            ring.style.top = "1px";
            pointer.style.top = "10px";
            pointer.style.left = "-2px";
            pointer.style.border = "none";

        } else {

            ring.style.padding = u + "px";
            ring.style.width = "0";
            ring.style.height = "0";
            ring.style.left = "0";
            ring.style.top = "0";
            ring.style.borderRadius = "40px";
            pointer.style.left = "0";
            pointer.style.top = "0";
            pointer.style.border = "2.5px solid " + pointerclr;
        }
        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        ring.style.transform = `translate(${ringX - (isover ? d : u)}px, ${ringY - (isover ? d : u)}px)`;

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
}

// POinter end

(function($) {
    "use strict";

    // COLOR MODE
    $('.color-mode').click(function() {


        $('body').toggleClass('dark-mode');

        const bodi = document.querySelector("body");

        if (bodi.classList.contains("dark-mode")) {
            pointerclr = "white";
        } else {
            pointerclr = "black";
        }

    });


    // ===== Scroll to Top ==== 
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);

        } else {
            $('#return-to-top').fadeOut(200);
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