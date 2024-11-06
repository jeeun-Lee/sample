var lo = location.pathname;
console.log(lo);



var w1 = $(window).width();
    if (w1 <= 1210) {
    resizeDone();
    }

$(window).resize(function (){ 
    w1 = $(window).width();
    if (w1 <= 1210){
        $('body').addClass('load')
        resizeDone();
    }else{

        if($('body').hasClass('load')){
            location.reload();
            $('body').removeClass('load')
        }
    }
});

function resizeDone(){
    setTimeout(function() {
        $('.mainnav-list').children('ul').stop().slideUp(6);
    }, 100);
        
        $('.mainnav-list').hover(function () {
            $(this).children('ul').stop().slideDown(300);

        }, function () {
            $(this).children('ul').stop().slideUp(300);
        });
    $('.mainnav-list').off('click').on('click', function () {
        $("#text").off("hover"); 
        $('.mainnav-list').removeClass('style');
        $('.mainnav-list').removeClass('on');
        $(this).addClass('on');
    });
}
$('#menuBtn').on('click',function(){
    $('#shadow').addClass('on');
    $('html').addClass('on');
    $('.menuList').addClass('on');
});
$('#Close').on('click',function(){
    $('#shadow').removeClass('on');
    $('html').removeClass('on');
    $('.menuList').removeClass('on');
    $('.mainnav-list').removeClass('on');

});