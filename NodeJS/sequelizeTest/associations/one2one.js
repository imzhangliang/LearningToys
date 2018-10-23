const Sequelize = require('sequelize');

//test2为数据库名称
var sequelize = new Sequelize('test2', 'root', '123456', {host: '127.0.0.1', dialect: 'mysql'});

//定义实体类
const Student = sequelize.define('student', {
    name: Sequelize.STRING  
});

//定义实体类2
const Class = sequelize.define('class', {
    name: Sequelize.STRING
})

Student.belongsTo(Class);     //在student表上建立classId外键
//Student.belongsTo(Class, {foreignKey:'customId'});     //在student表上建立classId外键, 自定义外键名称
//Student.hasOne(Class);  //在class上建立studentId外键


sequelize.drop().then(function(){   //删除所有表
    console.log("删除所有表成功！")
    sequelize.sync({force:true}).then(function(){  //创建所有表
        console.log("创建数据表成功！")
    })
})




