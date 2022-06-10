$(function(){
    /* gnb */
    $('#gnb > li').on('mouseenter focusin',function(){
        $(this).addClass('on').siblings('li').removeClass('on');
    });
    
    $('#gnb > li').on('mouseleave focusout',function(){
        $(this).removeClass('on');
    });
    
    /* 언어선택 */
    $('.lang-btn').click(function(){
        if( $('.lang-list').is(':hidden') ){
            $(this).next().show(); 
            $(this).addClass('active');
        }else{
            $(this).next().hide();
            $(this).removeClass('active');
        }
    });
    
    // 검색창 영역
    $('.srchBtn').click(function(){
        if( $('.srch-area').is(':hidden') ){
            $(this).addClass('active');
            $('.srch-area').slideDown();
        }else{
            $(this).removeClass('active');
            $('.srch-area').slideUp();
        }
    });
    
    // 검색창 닫힘
    $('.colse_btn').click( function(){
        if( $('.srch-area').is(':visible') ){
            $('.srch-area').slideUp();
        }else{
            $('.srch-area').slideDown();
        }
    })
    
    // 푸터 패밀리 사이트
    $('.familyBtn').click(function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $('.family-list').animate({'opacity':'0'},300, function(){
                $(this).css('visibilty','hidden'); 
            });
        }else{
            $(this).addClass('on');
            $('.family-list').animate({'opacity':'1'},600).css('visibility','visible');
        }
    });
    
});