const co = require('co');


//模拟异步函数
function asyncFun(label) {
    setTimeout(function(){
        console.log(`async函数${label}结束`);
    }, 1000 + Math.random()* 9000);
}

//模拟异步Promise
function asyncPromise(label) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            console.log(`async函数${label}结束`);
            if (Math.random() > 0.4) {      // 一部分概率成功
                resolve(label);
            }
            else {
                reject("err:" + label)
            }
        }, 1000 + Math.random()* 2000);
    });
}


// for (let i = 0; i < 10; i++) {
//     asyncFun(i);
// }


co(function *(){
    for (let i = 0; i < 10; i++) {
        yield asyncPromise(i);          //只要Promise函数写的够好，里面没有在resolve，reject之外的异步操作，这种方法可以保证同步执行
        //console.log(result);
    }

}).then(function(data){                     //co返回的也是一个Promise对象，在co的generator函数里面return 的值，就是resolve的值； 
                                            // 如果出现异常，co内部的流程停止，将会被co外面的catch捕捉
    console.log("co外面的then:" + data);
})
.catch(function(err){
    console.log("co外面的catch:" + err);
})

// for (let i = 0; i < 10; i++) {
//     asyncPromise(i).then(function(data){
//         console.log(data);
//     })
// }

