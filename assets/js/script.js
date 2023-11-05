$(document).ready(function(){
    // 1 
    $("#flip-1").click(function(){
      $("#panel-1").slideToggle();
      $("#fa-plus-1").toggleClass('rotate');
      
      $("#fa-plus-2").removeClass('rotate');
      $("#fa-plus-3").removeClass('rotate');
      $("#fa-plus-4").removeClass('rotate');
      $("#fa-plus-5").removeClass('rotate');
      $("#fa-plus-6").removeClass('rotate');

      $("#panel-2").slideUp();
      $("#panel-3").slideUp();
      $("#panel-4").slideUp();
      $("#panel-5").slideUp();
      $("#panel-6").slideUp();
    });
    // 2
    $("#flip-2").click(function(){
      $("#panel-2").slideToggle();
      $("#fa-plus-2").toggleClass('rotate');
      
      $("#fa-plus-1").removeClass('rotate');
      $("#fa-plus-3").removeClass('rotate');
      $("#fa-plus-4").removeClass('rotate');
      $("#fa-plus-5").removeClass('rotate');
      $("#fa-plus-6").removeClass('rotate');

      $("#panel-1").slideUp();
      $("#panel-3").slideUp();
      $("#panel-4").slideUp();
      $("#panel-5").slideUp();
      $("#panel-6").slideUp();
    });
    // 3
    $("#flip-3").click(function(){
      $("#panel-3").slideToggle();
      $("#fa-plus-3").toggleClass('rotate');

      
      $("#fa-plus-2").removeClass('rotate');
      $("#fa-plus-1").removeClass('rotate');
      $("#fa-plus-4").removeClass('rotate');
      $("#fa-plus-5").removeClass('rotate');
      $("#fa-plus-6").removeClass('rotate');
      
      $("#panel-1").slideUp();
      $("#panel-2").slideUp();
      $("#panel-4").slideUp();
      $("#panel-5").slideUp();
      $("#panel-6").slideUp();
    });
    // 4
    $("#flip-4").click(function(){
      $("#panel-4").slideToggle();
      $("#fa-plus-4").toggleClass('rotate');

      
      $("#fa-plus-2").removeClass('rotate');
      $("#fa-plus-3").removeClass('rotate');
      $("#fa-plus-1").removeClass('rotate');
      $("#fa-plus-5").removeClass('rotate');
      $("#fa-plus-6").removeClass('rotate');
      
      $("#panel-1").slideUp();
      $("#panel-2").slideUp();
      $("#panel-3").slideUp();
      $("#panel-5").slideUp();
      $("#panel-6").slideUp();
    });
    // 5
    $("#flip-5").click(function(){
      $("#panel-5").slideToggle();
      $("#fa-plus-5").toggleClass('rotate');

      
      $("#fa-plus-2").removeClass('rotate');
      $("#fa-plus-3").removeClass('rotate');
      $("#fa-plus-4").removeClass('rotate');
      $("#fa-plus-1").removeClass('rotate');
      $("#fa-plus-6").removeClass('rotate');
      
      $("#panel-1").slideUp();
      $("#panel-2").slideUp();
      $("#panel-3").slideUp();
      $("#panel-4").slideUp();
      $("#panel-6").slideUp();
    });
    // 6
    $("#flip-6").click(function(){
      $("#panel-6").slideToggle();
      $("#fa-plus-6").toggleClass('rotate');

      
      $("#fa-plus-2").removeClass('rotate');
      $("#fa-plus-3").removeClass('rotate');
      $("#fa-plus-4").removeClass('rotate');
      $("#fa-plus-5").removeClass('rotate');
      $("#fa-plus-1").removeClass('rotate');

      $("#panel-1").slideUp();
      $("#panel-2").slideUp();
      $("#panel-3").slideUp();
      $("#panel-4").slideUp();
      $("#panel-5").slideUp();
    });
});
