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
        sidePagination: 'server',   //服务端分页
        search: true,
        height: 570,        //列表高度
        pageList: [10, 20, 30],     //分页中每页大小的选项
        striped: true,  //条纹格子
        clickToSelect: true,    //点击行的时候自动选择radio或checkbox
        queryParams: function (params) { //请求服务器数据时，你可以通过重写参数的方式添加一些额外的参数
            var unionParams = {};
            $.extend(unionParams, params);
            return unionParams;
        },
        responseHandler: function (res) {   //将返回的数据做一些处理
            var data = {}           //服务端分页的话，需要在数据对象中有total和rows属性。total是总数目，rows是实际的数据数组
            data.total = 100;
            data.rows = res.slice(10,20);
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
            //sortable: true      //服务端分页，排序功能无效。只能在服务端排序了
        }, {
            field: 'name',
            title: 'Item Name',
            formatter: function (value, row, index) {   //自定义表格格式
                return "名字：" + value;
                //return "名字：" + row.name;
            },
            //sortable: true
        }, {
            field: 'price',
            title: 'Item Price',
        }],
    });
})