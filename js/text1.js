$(function(){
    $('#header').load('../html/header.html');
    $('#footer').load('../html/footer.html') 


    ///*------- ajax------- */
// global 用来存储全局变量
var global=global||{};
global.loadStart=0;
loadArticleList()
function loadArticleList(){
    // 1判断是否第一次
    if(global.loadStart==0){
       $('#articleList') .html('')
    }
    // 2请求数据
    var result=listData['listData0'+global.loadStart]
    var list=result.data.list;
    //判断数据不存在
    if(!list||!list.length){
        //不存在的话
        $("#articleList").html('数据不存在')
    }else{
        // 存在数据
        // 1获取模板
        // console.log(1)
        for(var i=0;i<list.length;i++){
            // console.log(list.length)
            var htmlModel=$('#itemHtml').html();
            // console.log($('#itemHtml').html())

            htmlModel=htmlModel.replace('$articleId$',list[i].sysId)
            htmlModel=htmlModel.replace('images/list_img02.jpg',list[i].coverImg)
            htmlModel=htmlModel.replace('$ssss$',list[i].title)
            htmlModel=htmlModel.replace('$qqqq$',list[i].creatAt)
            htmlModel=htmlModel.replace('$aaaa$',list[i].describe)
            // 进行替换
            //添加到页面中  DOM append
            $('#articleList').append(htmlModel)
        }
    }
    global.loadStart++;
    global.loadCount=Math.ceil(result.data.count/result.data.pageSize);
    if(global.loadStart>=global.loadCount){
        $('.list-more').fadeTo(200,0)
        $('.scrollon').attr('src','../images/list_gomore_bg_nomore.jpg')
    };

}
$('.list-more').click(function(){
    loadArticleList()
})
// 跳转

 $('.list-con').delegate('.one','click',function(){
    var idd=$(this).attr('articleid')
    console.log(idd)
    window.open('../html/text2.html?new=xiaoniaoNews'+idd)
    // location='../html/text2.html?iner+attr'
 })

 
     
    

 }) 


