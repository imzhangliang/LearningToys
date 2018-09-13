var config = {
    'aaa': {start: 1, end:2},
    'bbb': {start: 3, end:2}
}

function initConfig(config) {
    console.log("I am initing...")
    let result = {}
    for (key in config) {
        value = config[key];
        
        if (!result[value.start]) {
            result[value.start] = [];
        }
        result[value.start].push([key, 'start'])

        if (!result[value.end]) {
            result[value.end] = [];
        }
        result[value.end].push([key, 'end'])
    }

    return result;
}


var res = initConfig(config);   // 在模块文件中执行的函数只执行一次

module.exports = res;