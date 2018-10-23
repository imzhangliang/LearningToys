const Sequelize = require('sequelize');

//test2为数据库名称
var sequelize = new Sequelize('test2', 'root', '123456', {host: '127.0.0.1', dialect: 'mysql'});

//测试是否连接成功
sequelize.authenticate().then(function(){   
    console.log("OK");
})

