console.log("Starting app");
const m = require('fs');
const os=require('os');
var user = os.userInfo();
console.log(user);
m.appendFile('document.txt',"Hey "+user.username+" !");
