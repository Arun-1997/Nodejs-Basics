var fs=require('fs');
var path=require('path');
//fs.writeFileSync('hello.txt',"Hi. This is some text written from nodejs!");
fs.appendFile('hello.txt',"Hi. This is some text written from nodejs!\n");
console.log(fs.readFileSync('hello.txt').toString());
var pathname="C/first name///hiedif//djga//text.html";
console.log(path.normalize(pathname));
console.log(path.basename(pathname));

console.log(path.extname(pathname));
