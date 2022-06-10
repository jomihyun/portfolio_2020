$(function(){
    
    var swiper = new Swiper('.swiper-container', {
        centeredSlides: true,
        speed: 700,
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }
        
    });
    
    // Swiper 버튼 생성
    $('.mainVisualArea .swiper-pagination').append('<a href="#" class="playBtn"></a>');
    
    // Swiper 버튼 동작
    $('.mainVisualArea .playBtn').click(function(){
        if( !$(this).hasClass("on") ){
			$(this).addClass("on");
			swiper.autoplay.stop();
		}else {
			$(this).removeClass("on");
			swiper.autoplay.start();
		}
    });
    
    //전시 배경이미지 교체
    $('.mainCon1List li').each(function( idx ){
        $(this).hover( function(){
            $('.mainCon1Bg div').eq(idx).stop().fadeIn(500);
        }, function(){
            $('.mainCon1Bg div').eq(idx).stop().fadeOut(500);
        })
    });
    
    // 스크롤 모션
    $(window).scroll(function(){
        var winScrollT = $(window).scrollTop(),
            winH = $(window).height()/2,
            mainScrollT = winScrollT + winH,
            mConArea =  $('.mainTodayArea').offset().top,    
            mCon1Top =  $('.mainCon1').offset().top,    
            mCon2Top =  $('.mainCon2').offset().top,     
            mCon3Top =  $('.mainCon3').offset().top,     
            ftTop =  $('#footer').offset().top;
        
        if( winScrollT >= mCon3Top ){
            $('.topBtn').addClass('on');
        }else if( winScrollT <= mCon3Top ){
            $('.topBtn').removeClass('on');
        }
        
        if( mainScrollT >= 0 && mainScrollT <= mCon1Top ){
            $('.mainTodayArea').animate({'top':'0','opacity':'1'}, 500);
        }else if( mainScrollT >= mCon1Top && mainScrollT <= mCon2Top ){
            $('.mainCon1 .mainTit').animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
            $('.mainCon1 .mainTxt').delay(200).animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
            $('.mainCon1 .mainCon1List').delay(300).animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
        }else if( mainScrollT >= mCon2Top && mainScrollT <= mCon3Top ){
            $('.mainCon2 .mainTit').animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
            $('.mainCon2 .mainTxt').delay(200).animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
            $('.mainCon2 .mainCon2List').delay(300).animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
        }else if( mainScrollT >= mCon3Top && mainScrollT <= ftTop){
            $('.mainCon3 .mainTit').animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
            $('.mainCon3 .mainTxt').delay(200).animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
            $('.mainCon3 .mainNews').delay(300).animate({'top':'0','opacity':'1'}, 500, 'easeOutCubic');
        }
    });
    
    // top버튼 클릭
    $('.topBtn').click(function(){
        $('html, body').animate({'scrollTop':'0'}, 600, 'easeOutCubic');
    })
});