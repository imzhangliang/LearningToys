const Sequelize = require('sequelize');

//test2为数据库名称
var sequelize = new Sequelize('test2', 'root', '123456', {host: '127.0.0.1', dialect: 'mysql'});

//定义实体类
const Student = sequelize.define('student', {
    name: Sequelize.STRING      //简单语法模式
});

//force: true为强行创建表选项，即使表存在
Student.sync({force:true}).then(function(){
    Student.create({name:'刘'}).then(function(){ //插入表
        Student.findOne({where: {name: '刘'}}).then(function(stu){   //查询表
            console.log('----------- result -------------\n' + JSON.stringify(stu));
        })
    })
})


