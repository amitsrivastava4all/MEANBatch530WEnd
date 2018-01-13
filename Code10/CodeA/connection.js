var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myappdb");
module.exports=mongoose;