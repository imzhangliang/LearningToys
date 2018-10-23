const Sequelize = require('sequelize');

//test2为数据库名称
var sequelize = new Sequelize('test2', 'root', '123456', {host: '127.0.0.1', dialect: 'mysql'});

//定义实体类
const User = sequelize.define('user', {
    name: Sequelize.STRING  
});

//定义实体类2
const Role = sequelize.define('role', {
    name: Sequelize.STRING
});

User.belongsToMany(Role, {through: 'userRole'});

sequelize.sync({force: true}).then(function(){
    console.log("创建所有表成功！");
}).then(function(){
    
})


// sequelize.drop().then(function(){   //删除所有表
//     console.log("删除所有表成功！");
// }).then(function(){
//     return sequelize.sync({force:true}).then(function(){  //创建所有表
//         console.log("创建数据表成功！");
//     });
// }).then(function(){
//     return Class.create({name:'No.1'}); //创建一条班级数据
// }).then(function(){
//     return Student.create({name:'zhang'})   //创建一条学生数据
// }).then(function(stu){
//     return stu.setClass(1); //设置学生外键
// }).then(function(stu){
//     console.log(JSON.stringify(stu));   //输出最终学生的数据
// });




