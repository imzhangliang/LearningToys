const async = require('async');

var task1 = function(cb) {
    console.log('Task1');
    setTimeout(function(){
        cb(null, 'Task1Result');
    }, 2000);
}

var task2 = function(q, cb) {
    console.log('Task2');
    console.log('收到Task1的参数', q);
    setTimeout(function(){
        cb(null, 'Task2Result');
    }, 1000);
}

var task3 = function(q, cb) {
    console.log('Task3');
    console.log('收到Task2的参数', q);
    cb(null, 'Task3Result');
}


// 瀑布执行，上一个任务的结果作为下一个任务的参数
// task1完成，才能开始执行task2; task2完成才能开始执行task3；其中任何一个任务出错，所有任务中断。
console.log("------------ 瀑布行 ----------------");
async.waterfall([task1, task2, task3], function(err, results){
    if (err) {
        console.log('err:', err);
    }

    console.log('最终结果：', results);
});