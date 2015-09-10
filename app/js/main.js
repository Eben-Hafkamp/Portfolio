$(function() {

// ---------------- FULL PAGE

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

// ---------------- BURGER

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
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      // dots: true,
      centerMode: true,
      focusOnSelect: true,
      // speed:100,
      // index: 2,
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

// ---------------- MOUSE SCROLL KEYFRAMES INTRO

    setTimeout(function(){
        $('.mouse').addClass('show').addClass('animated fadeIn');
    }, 2000);
    setTimeout(function(){
        $('.mouse').addClass('animated fadeOut');
    }, 6000);

// ---------------- FIXED NAVIGATION BAR INTRO

setTimeout(function(){
    $('.in').addClass('show').addClass('animated fadeIn');
}, 2000);


});
