$(function() {

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
    $('#block').on('click', function() {
      $(this).addClass('.expand');
    });

    setTimeout(function(){
        $('.mouse').addClass('show').addClass('animated fadeIn');
    }, 2000);
    setTimeout(function(){
        $('.mouse').addClass('animated fadeOut');
    }, 6000);
});
