$(function() {
    
    var isOpen = false;

    $('#bars').on('click', function() {

        if(isOpen == true) {
        
            $('.sidebar').animate({top: '-11em'}, 1000, function() {})
            
            isOpen = false;
        
        } else {
            
             $('.sidebar').animate({top: '7em'}, 1000, function() {})
            
             isOpen = true;
             
        };
        
    });
});