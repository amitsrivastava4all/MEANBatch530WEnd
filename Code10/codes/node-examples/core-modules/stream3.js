var fs = require('fs');
var stream = fs.createReadStream('stream.js',{ highWaterMark: 2 });
var stream2 = fs.createWriteStream('stream3.js');
stream.pipe(stream2);
// stream.on('data',function(chunk){
//     stream2.write(chunk);
//     //console.log("Data is "+chunk);
// });
// stream.on("end",function(){
//     console.log("read End");
// });