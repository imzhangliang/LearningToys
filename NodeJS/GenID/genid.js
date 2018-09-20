const shortid = require('shortid');
const uuid = require('uuid/v4');

let id;

for (let i = 0; i < 10; i++) {
    id = shortid.generate();
    console.log(id, id.length);
}

for (let i = 0; i < 10; i++) {
    id = uuid();
    console.log(id, id.length);
}

