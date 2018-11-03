$(function(){
    let tableData = []
    for (let i = 1; i <= 78; i++) {
        tableData.push({
            id: i,
            name: 'Item ' + (i+7),
            price: '$' + (i+9)
        })
    }

    $("#refresh").click(function(){
        console.log("Refreshing ..")
        $("#table").bootstrapTable('refresh');
    })

    $('#table').bootstrapTable({
        pagination: true,
        search: true,
        height: 511,
        sortName: 'name',
        columns: [{
            field: 'id',
            title: 'Item ID'
        }, {
            field: 'name',
            title: 'Item Name'
        }, {
            field: 'price',
            title: 'Item Price'
        }],
        data: tableData
    });
})