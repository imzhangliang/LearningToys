
function getPromise() {
    return new Promise(function(resolve, reject){
        console.log("executing");
        resolve('OK');
    })
}



p = getPromise();      // 在初始化的时候就开始执行了，即执行new Promise的时候

// 之后再捕获结果也没有问题
// p.then(function(data){
//     console.log('reulst:', data);
// });

// p.then(function(data){
//     console.log('reulst:', data);
// });