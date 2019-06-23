$(function () {
   //启动动画
   $(".head_logo").click(function () {
    location.reload()
})
$(".welcome").dblclick(function () {
    $(".welcome").slideUp(600);
})
animate()

function animate() {
    var xiaoniaotimer = setTimeout(function () {
        $(".welcome_content").animate({
            "top": "40%"
        }, 600)
        $(".welcome_box").show().addClass("animated  fadeInUp");
        setTimeout(function () {
            $(".welcome_box2").show().addClass("animated  fadeInUp");
        }, 500)
        setTimeout(function () {
            $(".welcome_p").show().addClass("animated  fadeInUp");
        }, 1000)
        setTimeout(function () {
            $(".welcome").slideUp(600);
        }, 2500);
    }, 3000)
}


    // 全屏滚动
    var inn = 0;
    var kai = true;
    var height = $('.mvv').height()
    $(window).resize(function () {
        height = $('.mvv').height()
    })
    $(document).on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
        if (kai == true) {
            /*滚轮向上滑  */

            kai = false
            if (delta == 1) {
                console.log(1)
                inn--;       //-1
                console.log(inn)
                if (inn < 0) {
                    inn = 0;
                } else {
                    console.log(inn)
                    $('.main_wrap').animate({ "top": -height * inn }, 2000)
                }
            }
            /* 滚轮向下 */
            else {
                console.log(2)
                inn++
                if (inn < 5) {
                    $('.main_wrap').animate({ "top": -height * inn }, 2000)
                    console.log("下")
                } else {
                    inn = 4
                }
            }
            setTimeout(function () {
                kai = true
            }, 1000)
        }

    });



    // 二快滚动
    var i = 0;
    $('.gaishu_goright').click(function () {
        i++;
        if (i > 2) {
            i = 2
        } else {
            $('.gaishu').animate({ "left": -1920 * i }, 500)
        }

    })

    $('.gaishu_goleft').click(function () {

        i--
        if (i < 0) {
            i = 0
        } else {
            $('.gaishu').animate({ "left": -1920 * i }, 500)
        }

    })
// 三快点击
$('.yunmove_btn_left').click(function(){
    $('.yun_slider').animate({'left':'0px'},1000)
    $('.yunmove_btn_left .yunmove_btn').animate({'left':'0px'})
    $('.yunmove_btn_left .yunmove_btn').addClass('now');
    $('.yunmove_btn_right .yunmove_btn').animate({'left':'-78px'})
})
$('.yunmove_btn_right').click(function(){
    $('.yun_slider').animate({'left':'-910px'},1000)
    $('.yunmove_btn_left .yunmove_btn').animate({'left':'78px'})
    $('.yunmove_btn_right .yunmove_btn').addClass('now');
    $('.yunmove_btn_right .yunmove_btn').animate({'left':'0px'})
})

// 跳转
$('.fh').click(function(){
    location="../html/index.html"
})
// 导航跳
var taioo=0
$('.taio').click(function(){
  inn=$(this).index()+1
  if( inn>4){
    inn=4
  }
  $('.main_wrap').animate({ "top": -height * inn }, 100)


})










// 相应部位
// -------------------跳转页面方式1------------------------
var name=getUrlParams('new')
// console.log(name)
inn=name;
$('.welcome').css('display','none')
$('.main_wrap').animate({ "top": -height * inn }, 500)
function getUrlParams(name){
    var re=new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
    var r=window.location.hash.substr(1).match(re);
    if(r==null){
        return ;
    }else{
        return r[2];
    }
}

// -------------------跳转页面方式2----------------------

// 行内加onclick="window.open("........html#id")"



















})