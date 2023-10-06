$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 20) {
          $(".mynav").css("background" , "#121112");
        }
  
        else{
            $(".mynav").css("background" , "transparent");  	
        }
    })
  })

 