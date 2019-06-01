function ShowPager(count,curr) {
    layui.use(['laypage'], function () {
        laypage = layui.laypage;
        laypage.render({
            elem: 'layui-pager'
            , count: count
            , layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip']
            , limit: 10
            , curr: curr
            , limits: [10, 30, 50]
            , jump: function (obj,first) {
                if (!first) {
                    console.log("跳转了");
                    InitTable(obj.curr,obj.limit);
                }                
            }
        });

    });

    $("#layui-pager").css("display", "block");
}