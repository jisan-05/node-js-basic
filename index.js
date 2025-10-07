// const path = require('path');

// const myPath = 'D:/web-dev/node-js/node-js-basic/index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));

// const os = require('os');

// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.cpus());

const fs = require('fs');

fs.writeFile('myfile.txt', 'hello programmers');
fs.appendFile('myfile.txt', 'how are you');
fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
});

console.log('hello');
