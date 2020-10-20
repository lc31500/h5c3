$(function () {
    /*初始化fullpage组件*/
    /*1.设置每一个屏幕的背景颜色*/
    /*2.设置屏幕内容的对齐方式 默认是垂直居中的 底部对齐*/
    /*3.设置导航 设置治时期 点容器*/
    /*4.监听进入某一瓶的时候*/
    $('.container').fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            /*index 序号 1开始 当前屏的序号*/
            $('.section').eq(index-1).addClass('now')
        },
        /*离开某一个页面的时候触发*/
        onLeave:function(index,nextIndex,direction){
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                $('.section').eq(index-1).addClass('leaved');
            }
        },
        /*点击更多切换下一页*/
        /*最好在组件初始化完毕或者插件内容渲染完毕*/
        afterRender:function () {
            /*jquery插件初始化的时候没有封装这个方法*/
            /*1.回想jquery插件的封装 $.fn.fullpage = function(){} */
            /*2.jquery本身没有的方法通过$.fn的方式追加方法 认为是插件方法*/

            /*点击更多切换下一页*/
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            })
        }
    });
});