const fs = require("fs");
//console.log(fs);
//console.log(typeof fs);
function done(error, content){
    if(error){
        console.log("can't read this file");
    }
    else{
        console.log("Content is "+content);
    }
}
fs.readFile("fsdemo.js",done);
var path = require("path");
console.log("Current Path ",__dirname);
console.log("Current File ",__filename);
var newpath = path.normalize(__dirname+"/..");
path = path.join(newpath,"/mymodules/execute.js");
console.log("New Path is ",path);
fs.readFile(path,(err,content)=>{
console.log("Execute content is "+content);
});

var a= 100;
var b = 200;
var c = a + b;
console.log(`Sum is ${c}`);