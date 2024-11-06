$(document).ready(function(){
var w1 = $(window).width();
    if (w1 <= 1210) {
        $('.fade-right, .fade-left').attr('data-aos','fade-up')
    }else{
        $('.fade-right').attr('data-aos','fade-left')
        $('.fade-left').attr('data-aos','fade-right')
    }
    $(window).resize(function (){ 
        w1 = $(window).width();
        if (w1 <= 1210) {
            $('.fade-right, .fade-left').attr('data-aos','fade-up')
        }else{
            $('.fade-right').attr('data-aos','fade-left')
            $('.fade-left').attr('data-aos','fade-right')
        }
    });


    $('.tab-list li').on('click',function(){
      var tab =  $(this).attr('data-tab');
      $('.tab-list li').removeClass('on')
      $(this).addClass('on')
      $('.tabBox>li').removeClass('on')
      $('.tabBox>li[data-tab="'+ tab +'"]').addClass('on')
    })


    var window_h = $(window).scrollTop();
    var w= $(window).width();
      
        $(window).scroll(function(){
            scrollHeader();
        });
    
    setTimeout(() => {
        if(window_h>0){
            $('header').addClass('style');
        }
        else if(window_h == 0){
            $('header').removeClass('style');
        }
       
    }, 100);

    function scrollHeader(){
        var h = $(window).scrollTop();
        var w= $(window).width();
            if(h > window_h){

                $('header').addClass('style');
            }
            else if(h==0){
                $('header').removeClass('style');                
            }else{
               
            }
        window_h = h;

  }
 
});