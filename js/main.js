$(document).ready(function(){
    
    


    
$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
    
        $('a').each(function () {
        $(this).removeClass('active');
        })
        
        $(this).addClass('active');

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


    $(window).scroll(function(){
    
        $('.hideme').each(function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        });
    
    });
    
    
  
    
    $(document).scroll(function () {
        
    var x = $(this).scrollTop(),
        home = $('#page1'),
        about = $('#page2'),
        work = $('#page3'),
        contact = $('#page4'),
        Last = $('#page5');

    if (x >= home.offset().top && x < (home.offset().top + home.height())) {
        $('header').css("background-color", "rgba(0,0,0,0.2)");
    }
    if (x >= about.offset().top && x < (about.offset().top + about.height())) {
        $('header').css("background-color", "#6c5467");
    }
    if (x >= work.offset().top && x < (work.offset().top + work.height())) {

        $('header').css("background-color", "rgba(255,255,255, 0.3)");
    }
    if (x >= contact.offset().top && x < (contact.offset().top + contact.height())) {
        $('header').css("background-color", "rgba(0,0,0,0.6)");
    }
    if (x >= Last.offset().top && x < (Last.offset().top + contact.height())) {
        $('header').css("background-color", "pink");
    }
});
    
  $('.Res-Show li').on('click',function (e) {
	    e.preventDefault();
    
        $('.Res-Show li').each(function () {
        $(this).removeClass('Vuka');
        })
        
        $(this).addClass('Vuka');

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});  
    

        
       
       
    
    

    

});