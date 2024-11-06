$(document).ready(function(){
    $('a[href=""]').on('click',function(e){
        e.preventDefault();
    })
    AOS.init({
      easing: 'ease',
      duration: '800',
      delay: '0'
    });
    
  });