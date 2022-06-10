$( function(){
    
    // gnb 
    $('#gnb > li').mouseenter(function(){
        $('#header').addClass('on');
//        $('.sub-menu-wrap').show();
//        $('.sub-menu-bg').show();

    });
    
    $('#gnb > li').mouseleave(function(){
        $('#header').removeClass('on');
//        $('.sub-menu-wrap').hide();
//        $('.sub-menu-bg').hide();
         
    });
    
    //로그인 화면
    // label 글자 가리기
    $('.int-box input').focus(function(){
        console.log('포커스획득')
        $(this).parent('span.int-box').prev('label').hide();
    })

    
    
    // 로그인 form 양식이 전송될때
    $('#loginForm').submit(function(){  
        
        if( $('#userEmail').val() == '' ){
            $('#email-msg').text('이메일을 입력해주세요').css('display','block');
        }else{
            $('#email-msg').text('').css('display','none');
        }
            
        if( $('#userPwd').val()=='' ){
            $('#pw-msg').text('비밀번호를 입력해주세요').show();
        }else if( 4 <= $('#userPwd').val().length ){
            $('#pw-msg').text('').hide();
        }else{
             $('#pw-msg').text('비밀번호 4자 이상 작성해주세요').show();
        }
        
        
        return false;
    })
    
    
    
    
    
    ////////// 약관동의 화면
    $('#agreeAll').click(function(){
        // 함수호출
        chkAll();
    })
    
    function chkAll(){
       var chk = $('#agreeAll').is(':checked');
        console.log(chk)
       
       if( chk ){
           $('input[type=checkbox]').prop('checked',true)
       }else{
           $('input[type=checkbox]').prop('checked',false)
       }
    }
    
    /////// 약관 동의 내용보기
    var viewBtn = $('.agree-wrap .view')
    
    viewBtn.click( function(e){
            
        // <a href="#"> 링크 실행 방지
        e.preventDefault()
        
        var open = $(this).parent().parent().hasClass('open');
        
        if( open ){
            $(this).parent().parent().removeClass('open')
            $(this).parent().next().animate({'opacity':'0','display':'none'},500)
        }else{
            $(this).parent().parent().addClass('open')
            $(this).parent().next().animate({'opacity':'1','display':'block'},500)
            
        }
    })
    
    
    
    
    ////// 정보입력화면
    // 회원가입 form이 전송이 되면 
    $('#join-form').submit( function(){
        
        // 이메일 입력
        if( $('#userEmail').val()==''){
            $('#email-msg').text('이메일을 입력해주세요').show();
        }else{
            $('#email-msg').text('').hide();
        }
        
        
        //비밀번호 입력
        if( $('#userPwd').val()==''){
            $('#pw-msg').text('비밀번호를 입력해주세요').show();
        }else if( 8 > $('#userPwd').val().length ){
            $('#pw-msg').text('영문/숫자/특수문자 조합 8자 이상 입력해주세요').show();
        }else{
            $('#pw-msg').text('').hide();
        }
        
        
        // 비밀번호 재입력
        if( $('#userPwdConfirm').val()=='' ){
            $('#pw2-msg').text('비밀번호를 재입력해주세요').show();
            
        }else if($('#userPwdConfirm').val() != $('#userPwd').val()){
            $('#pw2-msg').text('비밀번호가 일치하지않습니다').show();
        }
        else{
            $('#pw2-msg').text('').hide();
        }
        
        
        // 휴대폰번호 입력
        if( $('#phoneNumber').val()==''){
            $('#pnum-msg').text('휴대폰번호를 입력해주세요').show();
        }else{
            $('#pnum-msg').text('').hide();
        }
        
        
        // 이메일 수신 체크 
        if( $('.email-rcv:checked').length == 0){
            $('#email-rcv-msg').text('이메일을 체크해주세요').show();
        }else{
            $('#email-rcv-msg').text('').hide();
        }
        
        return false;
    });
    
    
    
});