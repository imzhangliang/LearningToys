const Sequelize = require('sequelize');

var sequelize = new Sequelize('test2', 'root', '123456', {host: '127.0.0.1', dialect: 'mysql'});

sequelize.authenticate().then(function(){
    console.log("OK");
})

