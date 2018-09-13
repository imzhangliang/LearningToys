const moment = require('moment');

let d = moment('2018-04-03 11:30:03');     //月，日，时，分，秒都必须是2位整数，如果为1位，会出现警告

console.log(d);
console.log(new Date());    // node.js默认输出时间是iso格式的GMT时间

d.subtract(3, "days");      // 使用subtract后，对象本身改变
console.log(d);
let f = moment('2018-11-11 11:32:33');
console.log(f.subtract(3, "days")); // 用subtract后，返回的也是减去后的值


console.log(f.format('YYYY-MM-DD HH:mm:ss'));   //最常用的时间转化格式