const os = require("node:os");
const path = require("node:path");
const moment = require("moment");

console.log(os.platform());
console.log(os.release());
console.log(os.totalmem()/1024/1024/1024);
console.log(os.freemem()/1024/1024);
console.log(path.parse("C:\Users\hp\Downloads\window.jpeg"))

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

