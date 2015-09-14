$(function() {

// ---------------- FULL PAGE SCROLL

    $('#fullpage').fullpage({
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5
    });

// ---------------- BURGER NAVIGATION MOBILE PHONE

    var isOpen = false;
    $('#click').on('click', function() {
        if(isOpen == true) {
            $('.sidebar').addClass('animated fadeOut');
            $('.sidebar').one('animationend', function() {
              $(this).removeClass('animated fadeOut').addClass('hide');
            });
            isOpen = false;
        } else {
            $('.sidebar').removeClass('hide');
            $('.sidebar').addClass('animated fadeIn');
            $('.sidebar').one('animationend', function() {
              $(this).removeClass('animated fadeIn')
            });
            isOpen = true;
        };
    });

// ---------------- SLICK CAROUSEL

    $('.slider-nav').slick({
      centerMode: true,
      centerPadding: '10em',
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      centerMode: true,
      focusOnSelect: true,
      speed:250,
      index: 2,
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

// ---------------- MOUSE SCROLL KEYFRAMES INTRO

    // setTimeout(function(){
    //     $('.mouse').addClass('show').addClass('animated fadeIn');
    // }, 2000);
    // setTimeout(function(){
    //     $('.mouse').addClass('animated fadeOut');
    // }, 6000);

// ---------------- FIXED NAVIGATION BAR MOBILE PHONE

setTimeout(function(){
    $('.in').addClass('show').addClass('animated fadeIn');
}, 2500);

// ---------------- LOGO INTRO

// setTimeout(function(){
//     $('.logo-bar').removeClass('hide');
// }, 0);

// ---------------- FORM USABILITY ON MOBILE PHONE

$('#contact-textarea').on('focus', function() {
    document.body.scrollTop = $('#contact-textarea').offset().top;
});

});
