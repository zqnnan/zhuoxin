$('#header').load('../html/header.html');
$('#footer').load('../html/footer.html');
$(function () {
    // 轮播1

  var ee=0;  
$('.next').click(function () {
    ee++
    if(ee>2){
        ee=0
    }
    $(".zhong li").eq(ee).addClass('activeq').siblings().removeClass('activeq')
    $('.banner-one').eq(ee).show().siblings().hide();
 
})
$('.qian1').click(function () {
    ee--
    if(ee<0){
        ee=2
    }
    $(".zhong li").eq(ee).addClass('activeq').siblings().removeClass('activeq')
    $('.banner-one').eq(ee).show().siblings().hide();
 
})

$('.en').hover(function(){
    $(this).toggleClass('animated rubberBand')
})

    // --------------------产品模块-------------------------------------------

    // 侧面导航
    var num = 0;
    $('.line .quan').click(function () {
        if ($(this).index() >= num) {
            $('.line .quan').find('li').removeClass('.line active2')
            $(this).find('li').eq(0).addClass('.line active2')
            num = $(this).index()
            $('.content1').eq(num).show().siblings().hide();
            $('.content1').removeClass('animated fadeInLeft fadeInRight').eq(num).addClass('animated fadeInLeft')
        } else {
            $('.line .quan').find('li').removeClass('.line active2')
            $(this).find('li').eq(0).addClass('.line active2')
            num = $(this).index()
            $('.content1').eq(num).show().siblings().hide();
            $('.content1').removeClass('animated fadeInLeft fadeInRight').eq(num).addClass('animated fadeInRight')
        }
    })
    // 左右箭头
    var inn = 0;
    $('.you').mouseover(function () {
        $(this).addClass('animated jello')
    })
    $('.you').mouseout(function () {
        $(this).removeClass('animated jello')
    })
    $('.you').click(function () {
        if (inn < $('.content1').length) {
            inn++
            $('.content1').eq(inn).show().siblings().hide();
            $('.content1').removeClass('animated fadeInLeft fadeInRight').eq(inn).addClass('animated fadeInRight')

        } else {
            inn = 0
            $('.content1').eq(inn).show().siblings().hide();
            $('.content1').removeClass('animated fadeInLeft fadeInRight').eq(inn).addClass('animated fadeInRight')

        }

    })
    $('.zuo').mouseover(function () {
        $(this).addClass('animated jello')
    })
    $('.zuo').mouseout(function () {
        $(this).removeClass('animated jello')
    })
    $('.zuo').click(function () {
        if (inn < $('.content1').length) {
            inn--
            $('.content1').eq(inn).show().siblings().hide();
            $('.content1').removeClass('animated fadeInLeft fadeInRight').eq(inn).addClass('animated fadeInLeft')

        } if (inn < 0) {
            inn = $('.content1').length - 1
            $('.content1').eq(inn).show().siblings().hide();
            $('.content1').removeClass('animated fadeInLeft fadeInRight').eq(inn).addClass('animated fadeInLeft')

        }

    })

    /*----------------- 业务范围------------- */
    var text = 0
    $('.dou').click(function () {
        text++
        if (text % 2 == 1) {
            $(this).addClass('zhankai')
            // console.log($(this).index('.dou')) // 下标
            var shu = $(this).index('.dou')
            // console.log($('.center1').eq(shu))
            $('.center1').hide();
            $('.center1').eq(shu).show();
            $('.center1').css('height', "130")
        } else {
            $(this).removeClass('zhankai')
            var shu = $(this).index('.dou')
            $('.center1').eq(shu).hide();
        }
    })

    $('.logo').mouseover(function () {
        $('.logo').removeClass('animated rubberBand')
        $(this).addClass('animated rubberBand')

    })
    /* -----------------------团队介绍------------------------ */

    var indexx=0;
    var aa=setInterval(function(){
      
            indexx++
            if(indexx>2){
                indexx=0;
            }
                $(".gensui p").eq(indexx).addClass('activeq').siblings().removeClass('activeq')
           
            $('.move').animate({ left: 200 }, 500, function () {
                $('.move').animate({ left: -1150 }, 500, function () {
                    $(".one").first().appendTo($('.move'))
                    $('.move').css({ "left": 0 })
                })
            })
       
    
    },3000)
    $('.next').click(function () {
        indexx++
        if(indexx>2){
            indexx=0;
        }
            $(".gensui p").eq(indexx).addClass('activeq').siblings().removeClass('activeq')
       
        $('.move').animate({ left: 200 }, 500, function () {
            $('.move').animate({ left: -1150 }, 500, function () {
                $(".one").first().appendTo($('.move'))
                $('.move').css({ "left": 0 })
            })
        })
    })


    $('.qian').click(function () {
        indexx--
        if(indexx<0){
            indexx=2;
        }
        $(".gensui p").eq(indexx).addClass('activeq').siblings().removeClass('activeq')
        console.log(1)
        $(".one").last().prependTo($('.move'))
                $('.move').css({ "left": -1130 })
        $('.move').animate({ left: 500}, 500, function () {
            $('.move').animate({ left: 0 },500 )
       
    })
    })

$('.lyf').hover(function(){
    $(this).toggleClass('animated rubberBand')
})











})


