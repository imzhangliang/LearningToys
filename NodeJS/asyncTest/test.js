
function asyncFun() {
    setTimeout(function(){
        console.log('async函数结束');
    }, 0);
}

function aaa() {
    asyncFun();
}


aaa();
console.log("OK")
for (let i =0; i< 10000000000; i++) {
    let a = 2;
    a = a*a;
}



console.log("ABC")