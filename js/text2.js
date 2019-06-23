$(function(){
    $('#header').load('../html/header.html')
    $('#footer').load('../html/footer.html') 
    $('.like').mouseover(function(){
        $('.like-moree').show()
        $(this).removeClass('animated bounce').addClass('animated bounce')
    })
    $('.like').mouseout(function(){
        $('.like-moree').hide()
        $(this).removeClass('animated bounce')
    })
// 跳转

var name=getUrlParams('new')
console.log(name)
var data=articleData[name].data
    $('#imgg').attr('src',data.coverImg)
    
    // $('.neir').html(data.content)


function getUrlParams(name){
    var re=new RegExp('(^|&)'+name+'=([^&]*)(&|$)');
    var r=window.location.search.substr(1).match(re);
    if(r==null){
        return ;
    }else{
        return r[2];
    }
}










})