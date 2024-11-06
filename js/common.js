setTimeout(function() {
    $('aside').load('aside.html');
    $('header').load('header.html');
    $('#modal').load('modal.html');
});


$(document).ready(function(){
    $('.social_Box').hide();
    $('.socialBtn').on('click',function(){
        
        $('.social_Box').toggle();
        $('.socialBtn').toggleClass('on');
    });
    
    /** 요소 외 클릭 시 이벤트 발생 */
    $(document).click(function(e){
        var socialBtn =  $('.socialBtn');
        if(!socialBtn.is(e.target) && socialBtn.has(e.target).length === 0){
            $('.social_Box').hide();
            $('.socialBtn').removeClass('on');
        }
    });

});

