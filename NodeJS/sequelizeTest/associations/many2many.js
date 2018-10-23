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

User.belongsToMany(Role, {through: 'userRole'});    //必须添加through,表示中间表的名称
Role.belongsToMany(User, {through: 'userRole'});

sequelize.sync({force: true}).then(function(){  //创建所有表
    console.log("创建所有表成功！");
}).then(function(){
    return User.create({name:'zhang'}); //创建用户
}).then(function(user){
    return Role.create({name:'admin'}).then(function(role1){    //创建角色1
        return [user, role1];
    }); 
}).then(function([user, role1]){
    return Role.create({name:'tourist'}).then(function(role2){  //创建角色2
        return [user, role1, role2];
    });   
}).then(function([user, role1, role2]){
    user.addRoles([role1, role2]);    //用户添加角色1和角色2
    //分别添加角色
    //user.addRole(role1);    //用户添加角色1
    //user.addRole(role2);    //用户添加角色2
})




