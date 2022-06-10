$(function(){
    //a 링크 동작 막기
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
    
    
    // 스크롤시 헤더 컬러 변경
    $(window).scroll(function(){
        var winScrollTop = $(window).scrollTop();
        if( winScrollTop >= 100 ){
            $('body').addClass('didScroll');
        }else{
            $('body').removeClass('didScroll');
        }
    });
    
    // menu-bg 열기
    $('#gnb').hover(function(){
        $(this).addClass('on');
        $('.sub-menu-bg').stop().slideDown();
    } , function(){
        $(this).removeClass('on');
        $('.sub-menu-bg').stop().slideUp();
    });
    
    // gnb 아래 선 
    $('#gnb > li').hover(function(){
        $(this).addClass('on');
    } , function(){
        $(this).removeClass('on');
    });
    
})