const Sequelize = require('sequelize');

//test2为数据库名称
var sequelize = new Sequelize('test2', 'root', '123456', {host: '127.0.0.1', dialect: 'mysql'});

//定义实体类
const Student = sequelize.define('student', {
    name: Sequelize.STRING      //简单语法模式
});

//定义实体类2
const User = sequelize.define('user', {
    name: { //复杂语法模式
        type: Sequelize.STRING,
        allowNull: false
    }
})

// force: true为强行创建表选项，即使表存在
// 使用sequelize而不使用实体类，表示对所有的表进行sync操作
sequelize.sync({force: true}).then(function(){
    console.log("数据表创建成功！");
})