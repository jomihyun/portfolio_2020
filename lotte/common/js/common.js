$(function(){
    //a 링크 동작 막기
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
    
    // scroll header fix
    $(window).scroll( function(){
        var scrollT = $(window).scrollTop();
        if ( scrollT >= 50 ){
            $('#header').addClass('fixed');
        }else{
            $('#header').removeClass('fixed');
        }
    });
    
    
    // 데스크탑 gnb, gnbBg 
    $('#header .menuWrap .gnbArea, #header .gnbBg').on('mouseenter',function(){
		$('.twoD').stop().fadeIn(500);
        $('.gnbBg').stop().slideDown(300);
    });
    
    $('#header .menuWrap .gnbArea, #header .gnbBg').on('mouseleave',function(){
		$('.twoD').stop().fadeOut(500);
        $('.gnbBg').stop().slideUp(300);
    });

    // 데스크탑 gnb icon
    $('#header .gnb > li').each(function( idx , item ){
        $(item).on('mouseenter',function(){
            $('.gnb > li').eq(idx).addClass('on');
        });
        
        $(item).on('mouseleave',function(){
            $('.gnb > li').eq(idx).removeClass('on');
        });
    });
    
    // 모바일 gnb 열기 
    var isMgnb = false; 
    $('.openBt').click(function(){
        if( isMgnb == false ){
            $('#headerM .menuWrapM').animate({'left':'0'}, 300, 'easeInQuad');
            isMgnb = true; // 변수값을 true로 변경
        };
    })
    
    // 모바일 gnb 닫기
    $('.closeBt').click(function(){
        if ( isMgnb == true ){
            $('#headerM .menuWrapM').animate({'left':'-100%'}, 300, 'easeInQuad');
            isMgnb = false;
        };
    });
    
    // 모바일 gnb 서브메뉴 열기
    var oneDepth = $('#headerM .menuWrapM .gnbArea .gnb > li > .oneD'),
        twoDepth = $('#headerM .menuWrapM .gnbArea .gnb > li > .twoD'),
        thrBtn = $('#headerM .menuWrapM .gnbArea .gnb > li > .twoD > li > .thrBt'),
        thrDepth = $('#headerM .menuWrapM .gnbArea .gnb > li > .twoD > li > .thrD');
        
    oneDepth.click(function(){
        $(this).parent('li').addClass('on');
        $(this).parent('li').siblings('li').removeClass('on');
        
        if( !$(this).siblings('.twoD').is(':visible') ){
            $(this).siblings('.twoD').slideDown();
            $(this).addClass('on');
        }else{
            $(this).removeClass('on');
            $(this).siblings('.twoD').slideUp();
        }
    });
    
    thrBtn.click(function(){
        if( !$(this).hasClass('on') ){
            $(this).addClass('on');
            $(this).siblings('.thrD').slideDown();
        }else{
            $(this).removeClass('on');
            $(this).siblings('.thrD').slideUp();
        }
       
    });
    

});