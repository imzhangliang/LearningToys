const async = require('async');

var task1 = function(cb) {
    console.log('Task1');
    setTimeout(function(){
        cb("err1", 'Task1Result');
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

console.log("------------ 并行 ----------------");

//并行执行，如果有一个任务出错，任务全部停止，已经得出结果的保留，其他的结果为空
async.parallel([task1, task2, task3], function(err, results){
    if(err) {
        console.log('err:', err);
    }

    console.log('任务1结果：', results[0]);
    console.log(results);
});

