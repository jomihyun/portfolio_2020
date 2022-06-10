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
    
        
    
    // 프로젝트페이지 닷메뉴 변수 담기
    var dotMenu = $('.dot-menu-wrap li');
    
    // 프로젝트페이지 스크롤시 닷메뉴 생성
    $(window).scroll(function(){
        
        var winScrollTop = $(window).scrollTop()+100;
        if( winScrollTop >= 100 ){
            $('body').addClass('didScroll');
        }else{
            $('body').removeClass('didScroll');
        }
        
        
        $('.box-wrap .box').each(function( idx, item){
            // .box마다 따로따로 실행
            // item = .box
            var itemOffsetTop = $(item).offset().top;
            
            // 윈도우 스크롤 값이 박스 즉 item의 위치 값 보다 크면
            // winScrollTop
            // itemT
            if( winScrollTop >= itemOffsetTop){
                dotMenu.removeClass('on');
                dotMenu.eq(idx).addClass('on');
            }
        });
    });
    
    
    // 프로젝트페이지 닷 메뉴
    dotMenu.click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        
        var dotIndex = $(this).index();
        var boxOffsetTop = $('.box-wrap > div').eq( dotIndex ).offset().top
        console.log( boxOffsetTop );
        
        $('html, body').animate({ 'scrollTop' : boxOffsetTop }, 800, 'easeInCubic');
    })
    
    
    // 닷메뉴 클릭시 해당 div로 이동
    $('.box-wrap > div').click(function(){
        var boxIndex = $(this).index();
        console.log( boxIndex );
    })
    
    
    // 어바웃페이지 스킬트리
     $('.skill-wrap .skill-container .bar .percent').each( function( idx , item){
       var _percent = $(this).attr('data-percent');
       $(item).delay( idx * 1000 ).animate({'width': _percent }, 1500, 'easeInBack', function(){
           $(item).children('span').text( _percent ).animate({'opacity':'1'}, 500);
       });
    });
    
    
    
    
    
    
    
});