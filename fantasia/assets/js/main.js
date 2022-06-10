$(function(){
    
    // 메인 비주얼 슬라이드 
    var mainSwiper = new Swiper('#mainSlide .swiper-container', {
        loop: true,
        pagination: { 
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        }
    });
    
    // 배너 슬라이드
    var bannerSwiper = new Swiper('#section-banner .swiper-container', {
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
        
    
    // 어트랙션 tab
    var tabMenu = $('#section-attraction .taps li') ,
        tabPanel = $('.attraction-wrap .attraction');
    tabPanel.hide();
    tabPanel.first().show();
    
    tabMenu.click( function(e){
        e.preventDefault();
        var _href = $(this).children('a').attr('href');
        
        tabPanel.hide();                                
        $(_href).show();
        
        tabMenu.removeClass('selected');
        $(this).addClass('selected');
    });
        
    
    // 제이쿼리 반복문 each()
    $('#section-attraction .swiper-container').each(function( index, element ){
        $(this).addClass('attraction-'+ index); // 0..1..2
        
        var panelSwiper = new Swiper('.attraction-' + index , {
            observer : true,
            observeParents : true,  
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            watchOverflow: true
        });
    });
    
    
});