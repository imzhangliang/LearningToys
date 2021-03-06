$(function(){

    //刷新
    $("#refresh").click(function(){
        console.log("Refreshing ..")
        $("#table").bootstrapTable('refresh');
    })

    $('#table').bootstrapTable({
        url: '/data/price.json',        //ajax数据url
        pagination: true,       //是否分页
        paginationLoop: false,      //分页是否循环，即:最后1页下一页是第1页；第一页上一页是最后1页。
        search: true,
        height: 570,        //列表高度
        sortName: 'name',   //排序列
        sortOrder: 'desc',  //排序顺序
        striped: true,  //条纹格子
        clickToSelect: true,    //点击行的时候自动选择radio或checkbox
        queryParams: function (params) { //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数
            var unionParams = {};
            $.extend(unionParams, params);
            return unionParams;
        },
        responseHandler: function (res) {   //将返回的数据做一些处理
            var data = res;
            return data;
        },
        columns: [
        {
            title: '',
            radio: true     //显示radio表单
        },
        {
            field: 'id',
            title: 'Item ID',
            sortable: true      //添加列排序功能
        }, {
            field: 'name',
            title: 'Item Name',
            formatter: function (value, row, index) {   //自定义表格格式
                return "名字：" + value;
                //return "名字：" + row.name;
            },
            sortable: true
        }, {
            field: 'price',
            title: 'Item Price',
        }],
    });
})