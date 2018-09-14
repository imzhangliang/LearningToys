const co = require('co');

function fun1() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('fun1');
            resolve('fun1 end')
        }, 2000);
    })

}

function fun2() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('fun2');
            resolve('fun2 end')
        }, 0);
    })
}

//定义几个普通函数
function normalFun1() {
    console.log('normal fun1')
}

function normalFun2() {
    console.log('normal fun2')
}

co(function *(){
    yield Promise.resolve().then(fun1);
    yield Promise.resolve().then(fun2);
    yield normalFun1;
    yield normalFun2;
    
})

