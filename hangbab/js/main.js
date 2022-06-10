$(function(){
    
    $('.main-slider-wrap').bxSlider({
        mode : 'horizontal',
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
    
    $('.brand-slider-wrap').bxSlider({
        mode : 'fade',
        stopAutoOnClick: true,
        pager: false,
        slideWidth: 1180,
        auto : true,
        autoStart : true,
        pause : 4000,
        speed : 500,
        infiniteLoop : true
    });
    
    $('.menu-slider-wrap').bxSlider({
        mode : 'horizontal',
        slideWidth: 380,
        slideMargin: 20,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 1,
        nextText : '다음',
        prevText : '이전',
        nextSelector : '#menu-next',
        prevSelector : '#menu-prev',
        pager: false,
        infiniteLoop : true
    });
    
    $('.story-box').bxSlider({
        controls : false,
        slideWidth: 600,
        pagerCustom : '#story-pager',
        infiniteLoop : true
    });
    
});