// 连接redis实验

const redis = require('redis');

var client = redis.createClient(6379, '127.0.0.1');

client.set('name', 'Leon Node');

client.expire('name', 30);

//client.del('name');

setInterval(function(){
    client.get('name', function(err, reply){
        console.log(reply);
    });
}, 5000);
