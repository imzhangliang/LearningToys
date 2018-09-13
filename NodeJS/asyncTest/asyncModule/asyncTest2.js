const async = require('async');

var task1 = function(cb) {
    console.log('Task1');
    setTimeout(function(){
        cb(null, 'Task1Result');
    }, 2000);
}

var task2 = function(cb) {
    console.log('Task2');
    setTimeout(function(){
        cb("err2", 'Task2Result');
    }, 1000);
}

var task3 = function(cb) {
    console.log('Task3');
    cb(null, 'Task3Result');
}


// 串行执行
// task1完成，才能开始执行task2; task2完成才能开始执行task3；其中任何一个任务出错，所有任务中断。
console.log("------------ 串行 ----------------");
async.series([task1, task2, task3], function(err, results){
    if (err) {
        console.log('err:', err);
    }

    console.log('最终结果：', results);
});