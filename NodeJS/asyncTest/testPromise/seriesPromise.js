// Promise的串行执行效果


function getPromise(name) {
    return new Promise(function(resolve, reject){
        console.log("executing " + name);
        resolve('OK');
    })
}


getPromise(1).then(function(){
    return getPromise(2);
}).then(function(){
    return getPromise(3);
})
