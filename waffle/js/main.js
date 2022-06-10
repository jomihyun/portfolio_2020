
$(function(){
    // 마우스 휠 스크롤 
    $(window).scroll( function(){
        if( $(window).scrollTop() > 50 ){
            $('.mouse-wrapper').css({'display':'none'}).animate({'opcity':'0'}, 500)
        }else{
            $('.mouse-wrapper').css({'display':'block'}).animate({'opcity':'1'}, 500)
        }
    })
    
    // 슬라이드
    $('.main-slider-wrap').bxSlider({
        mode : 'fade',
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1920,
        auto : true,
        autoStart : true,
        pause : 3000,
        speed : 500,
        infiniteLoop : true,
        autoStart: true
    });
    
    $('.menu-slider-wrap').bxSlider({
        mode : 'horizontal',
        slideWidth: 1280,
        slideMargin: 20,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        controls : false,
        auto : true,
        autoStart : true,
        pause : 3000,
        speed : 300,
        pager: false,
        infiniteLoop : true
    });
    
    $('.con-slider-wrap').bxSlider({
        mode: 'fade',
        slideWidth: 1920,
        nextText : '다음',
        prevText : '이전',
        nextSelector : '#next',
        prevSelector : '#prev',
        pager : true,
        infiniteLoop : true
    });
    
    // 메인 슬라이드 텍스트
    $('.txt-wrap .tit').delay(300).animate({'top':'0','opacity':'1'}, 700,'easeOutCubic');
    $('.txt-wrap .txt').delay(500).animate({'bottom':'0','opacity':'1'}, 700,'easeOutCubic');
    
    
    
    
    // 메뉴 슬라이드 써클박스
    $('.slides').on('mouseenter',function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
    });
    
    // 프렌차이즈,공지사항 영역
    $('#sec-3 .box-wrap li').mouseenter( function(){
        $(this).addClass('on')
        $(this).siblings().removeClass('on');
    });
    
    // 스크롤모션
    $(window).scroll(function(){
        var winScrollT = $(window).scrollTop(),
        windowH = $(window).height()/2,
        wScroll = winScrollT + windowH-500,
        mainV = $('#main-visual').offset().top,
        sec_1 = $('#sec-1').offset().top,
        sec_2 = $('#sec-2').offset().top,
        sec_3 = $('#sec-3').offset().top,
        sec_4 = $('#sec-4').offset().top,
        sec_5 = $('#sec-5').offset().top,
        sec_6 = $('#sec-6').offset().top,
        ftTop = $('#footer').offset().top;
        
        if( wScroll >= mainV && wScroll <= sec_1 ){
            $('#sec-1').animate({'top':'0','opacity':'1'}, 700,'easeOutCubic');
            $('#sec-1 .text-wrap').delay(300).animate({'top':'0','opacity':'1'}, 700,'easeOutCubic');
            $('#sec-1 .menu-slide').delay(500).animate({'top':'0','opacity':'1'}, 700,'easeOutCubic');
        }else if( wScroll >= sec_1 && wScroll <= sec_2 ){
            $('#sec-2').delay(300).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
        }else if( wScroll >= sec_2 && wScroll <= sec_3 ){
            $('#sec-3 .text-wrap').delay(300).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
            $('#sec-3 .box-wrap').delay(500).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
        }else if( wScroll >= sec_3 && wScroll <= sec_4 ){
            $('#sec-4').animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
            $('#sec-4 .banner-wrap').delay(500).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
        }else if( wScroll >= sec_4 && wScroll <= sec_5 ){
            $('#sec-5 .news').delay(300).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
            $('#sec-5 .event').delay(500).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
        }else if( wScroll >= sec_5  && wScroll <= sec_6 ){
            $('#sec-6').delay(300).animate({'top':'0','opacity':'1'}, 1000, 'easeOutCubic');
        }
        
    });
    
    // top버튼 클릭
    $('.topBtn').click(function(){
        $('html, body').animate({'scrollTop':'0'}, 600, 'easeOutCubic');
    })
    
});