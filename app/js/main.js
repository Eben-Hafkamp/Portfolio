$(function() {

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

    var isOpen = false;
    $('#bars').on('click', function() {
        if(isOpen == true) {
            $('.sidebar').animate({top: '-11em'}, 600, function() {})
            isOpen = false;
        } else {
             $('.sidebar').animate({top: '7em'}, 300, function() {})
             isOpen = true;
        };
    });


    $('.slider-nav').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      // speed:100,
      // index: 2,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });

    setTimeout(function(){
        $('.mouse').addClass('show').addClass('animated fadeIn');
    }, 2000);
    setTimeout(function(){
        $('.mouse').addClass('animated fadeOut');
    }, 6000);
});
