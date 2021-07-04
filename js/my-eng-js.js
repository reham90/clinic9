$(document).ready(function(){
  //the trigger on hover when cursor directed to this class
   

 if($(window).width() < 991) {
    $(".sub-menu").addClass("submenu")
    $(".submenu").removeClass("sub-menu")
    $(".before-sub").click(function(){
      $(this).siblings('ul').slideToggle(300);
    });
  }
  
 });

(function($) {
    var size;
  
    //SMALLER HEADER WHEN SCROLL PAGE
 

    // VERIFY WINDOW SIZE
    function windowSize() {
        size = $(document).width();
        if (size >= 991) {
            $('body').removeClass('open-menu');
            $('.hamburger-menu .bar').removeClass('animate');
        }
    };

    

    $('#cd-primary-nav > li').hover(function() {
        $whidt_item = $(this).width();
        $whidt_item = $whidt_item-8;

        $prevEl = $(this).prev('li');
        $preWidth = $(this).prev('li').width();
        var pos = $(this).position();
        pos = pos.left+4;
        $('header .desk-menu .menu-container .menu>li.line').css({
            width:  $whidt_item,
            left: pos,
            opacity: 1
        });
    });

     // ANIMATE HAMBURGER MENU
    $('.hamburger-menu').on('click', function() {
        $('.hamburger-menu .bar').toggleClass('animate');
        if($('body').hasClass('open-menu')){
            $('body').removeClass('open-menu');
        }else{
            $('body').toggleClass('open-menu');
        }

 var y = document.getElementById("close");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }

   var z = document.getElementById("bars");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }




        
    });

   

    

    $('body .over-menu').on('click', function() {
        $('body').removeClass('open-menu');
        $('.bar').removeClass('animate');
    });

    $(document).ready(function(){
        windowSize();
    });

    

    $(window).resize(function(){
        windowSize();
    });

})(jQuery);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
    // Add Active Class
    $(".search-icon").click(function(){
        $(".search-screen").addClass("active");
    });

    // Remove Active Class
    $(".close-icon").click(function(){
        $(".search-screen").removeClass("active");
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 $(document).ready(function() {
              var owl = $('.slider');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                rtl:false,
                loop: true,
                 autoplay: true,
                  autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: ["<i class='fal fa-angle-right'></i>", "<i class='fal fa-angle-left'></i>"],
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 1
                  },
                   1200: {
                    items: 1
                  }
                   
                }
              })

            })


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 $(document).ready(function() {
              var owl = $('.category');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                rtl:false,
                loop: true,
                 autoplay: true,
                  autoplayTimeout: 3000,
                autoplayHoverPause: true,
                navText: ["<i class='fal fa-angle-right'></i>", "<i class='fal fa-angle-left'></i>"],
                responsive: {
                  0: {
                    items: 2
                  },
                  600: {
                    items:2
                  },
                   1200: {
                    items: 5
                  }
                   
                }
              })

            })