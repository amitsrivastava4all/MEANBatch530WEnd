const mongoose = require("./connection");
var Schema = mongoose.Schema;
var userSchema = new Schema({userid:String,password:String});
var UserSchema = mongoose.model("usermasters",userSchema);
console.log("Schema is Created ",UserSchema);
module.exports = UserSchema;