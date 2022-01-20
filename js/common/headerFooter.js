$(document).ready(function () {
    //解決點擊延遲
    FastClick.attach(document.body);

  //選單滾動
    var lastScrollTop;
    navbar = document.getElementById('header'); 
    window.addEventListener('scroll',function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop <= 0){ 
            navbar.style.top='0';
       
        }else if(scrollTop > lastScrollTop){ 
            navbar.style.top='-70px';
        }else{
            navbar.style.top='0';
        }
        lastScrollTop = scrollTop; 
    });
   

    //gotop        
    var float_btn = $('.float_btn');
    var gotop = $('#gotop');
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
           float_btn.fadeIn();
        } else {
           float_btn.stop().fadeOut();
        }
    });
    if ($(window).width() < 769) {
       
        $(window).scroll(function(){
             //最後一頁scrollTop=body-window，50是預留空間
     last=$("body").height()-$(window).height()-200
     if($(window).scrollTop()>=last){
        $(".float_action_group").hide()
     }
     else{
        $(".float_action_group").show()
     }
         
        })
    }

    //數位服務選單
    $('.function_ham').click(function () {
        $('.function_nav').toggleClass('function_nav_close')
    });
    if ($(window).width() > 800) {
        var function_nav = $('.function_nav');
        var nav_wrap = $('.nav_wrap');
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                function_nav.addClass('function_nav_close')
                nav_wrap.addClass('nav_wrap_close')
            } else {
                function_nav.removeClass('function_nav_close')
                nav_wrap.removeClass('nav_wrap_close')
          
            }
        });
    }

    //m版漢堡選單
    $('#toggle').click(function (e) {
        // if($("#toggle").hasClass('on')) {
        //     console.log('2')
        //     $('header').css({
        //         'top': 0
        //     });
        //     }
        $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
        e.preventDefault();
    });
   
    $('.main-nav ul.anchor li a').click(function () {
        $('#header,#toggle, .main-nav').removeClass('on')
    })
})