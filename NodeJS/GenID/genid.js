const shortid = require('shortid');
const uuid = require('uuid/v1');
const uuid4 = require('uuid/v4');

let id;

// 普通的短id
for (let i = 0; i < 10; i++) {
    id = shortid.generate();
    console.log(id, id.length);
}

// uuid v1是主要基于时间生成的，可以看出连续生成的id非常接近
console.log('\n\nuuid v1');


for (let i = 0; i < 10; i++) {
    id = uuid();
    console.log(id, id.length);
}

// uuid v4随机性比较大，相邻的两个id相差非常大
console.log('\n\nuuid v4');

for (let i = 0; i < 10; i++) {
    id = uuid4();
    console.log(id, id.length);
}
