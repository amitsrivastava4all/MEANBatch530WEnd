const express = require("express");
var router = express.Router();
const User = require("../models/users/user");
const userOperation = require("../db/crud/user/usercrud");
router.post('/login',(request,response)=>{

    var userid = request.body.userid;
var password = request.body.password;
var userObject = new User(userid, password);
userOperation.login(userObject,response);
console.log("Login ",userObject);
});
router.post('/register',(request,response)=>{
console.log("Register Call");
    var userid = request.body.userid;
var password = request.body.password;
var name = request.body.username;
var address = request.body.address;
var userObject = new User(userid,password, name, address);
userOperation.register(userObject,response);
console.log("Register ",userObject);

});
module.exports = router;