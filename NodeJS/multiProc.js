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
}


//process.exit();


