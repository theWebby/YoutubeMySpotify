// https://medium.com/jeremy-keeshin/hello-world-for-javascript-with-npm-modules-in-the-browser-6020f82d1072 
//
// To update whats loaded into the browser
// run this: browserify libs.js -o libsbundle.js

// var buffer = require('buffer')
// var Buffer = buffer.Buffer

function hello(){
    console.log('hello')
}

module.exports = {
    // buffer: buffer,
    hello: hello,
}
// console.log(new Buffer('7d6e6d5684a3404e834793cca7f8382d:18cdd7e2215e40289d5475f71b53eb5e').toString('base64'));