$(document).ready(function () {
    $('.menu-toggler').on('click',function(){
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });  
    $('.top-nav .nav-link').on('click',function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('click',function(){
        // * means select all 
        // .animate( properties [, duration ] [, easing ] [, complete ] ) complete function is executed once animation is complete
        // offset will be relative to the top left corner
        $('html, body').animate({
            scrollTop:$($(this).attr('href')).offset().top - 100 /*what unit of measurement is this?*/
        }, 1500);
    });  
    $('#up').on('click',function(){
        $('html, body').animate({
            scrollTop:0
        },1500);
    });  
    AOS.init({
        easing:'ease',duration:1000,once:true /* only animate once  */
    });
});

