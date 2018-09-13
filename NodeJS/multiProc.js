const os = require('os');
const cluster = require('cluster');

const numCores = os.cpus().length;  //CPU核心数


console.log(`start of the process`);



if (cluster.isMaster) {

    for (let i = 0; i < numCores; i++) {
        worker = cluster.fork();
        console.log(`worker: ${worker.process.pid}`);
    }


} else {
    console.log(`I'm a worker ${process.pid}, I am working`)
    process.exit(123);
}


// 监听退出事件
cluster.on('exit', (worker, code, signal) => {
    if (code !== 0) {
        console.error(`worker：${worker.process.pid} 异常退出（${signal || code}），5s后尝试重启...`);
        setTimeout(() => {
            const new_worker = cluster.fork();
            console.log(`worker：${new_worker.process.pid} 正在运行...`);
        }, 5000);
    } else {
        console.log(`worker：${worker.process.pid} 正常退出！`);
    }
});