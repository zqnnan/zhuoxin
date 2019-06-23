// 封装box移动

// obj:要执行的动画的对象；
// attr:要操作的属性 。左右上下。  调用时候加''
// target：执行动画的目标位置；
// speed:移动的速度，正数右面移动，负数左移动

// callback：接收回调函数。


function move(obj,attr,target,speed,callback){
    // 关闭上一个定时器
    clearInterval(obj.timer)

    // 获取元素目前位置
    var current=parseInt(getStyle(obj,attr))
    // 判断目标位置大于目标位置 则为反向 向左动
    if(current>target){
        // 此时速度为负值
        speed=-speed
    }
    // 开启定时器 用来执行动画
    outer.classList.remove("active")
    // outer.classList.remove("active1");
    obj.timer=setInterval(function(){
        // 获取原来的位置
        var oldValue=parseInt(getStyle(obj,attr))
        // 在旧值基础上增加
        var newValue=oldValue+speed;

         // 判断value是否大于target
         if(speed<0 && newValue<target||speed>0 && newValue>target){
            newValue=target;
        }
        // 将新值给div1
        obj.style[attr]=newValue+"px";
        // 当元素移动到target后
        if(newValue==target){
            clearInterval(obj.timer)
            outer.classList.add("active")
            document.body.onmousewheel=function(){
                    // if(outer.style.transform !="scale(1)"){
                        outer.classList.remove("active")
                         outer.classList.add("active1");
                    // }
            }
            callback&&callback();
           
        }


    },30)
}

/* 
// 举例调用
btn1.onclick=function(){
     move(box,'top',700,9)
} */