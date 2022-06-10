$(function(){
    
    //gnb
    var menu = $('.nav > ul > li');
    menu.mouseenter(function(){
        $(this).addClass('active')
    });
    
    menu.mouseleave(function(){
        $(this).removeClass('active')
    });
    
    // 모바일 메뉴
    var btnOpen = $('.header button.open');
    btnOpen.click(function(){
        $('.drawer').addClass('on');
    });
    
    var btnClose = $('.header button.close');
    btnClose.click(function(){
        $('.drawer').removeClass('on');
    })
    
});