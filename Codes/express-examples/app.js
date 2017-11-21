const express = require("express");
const bodyParser = require("body-parser");
const app= express();
const User = require("./models/User");
const CRUD = require("./db/crud");
const crudObject= new CRUD();

//app.use(middleware)
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
var counter = 0;
app.get('/welcome',(request,response)=>{
        counter++;
        var d = new Date();
        response.send(`<h2>M.S DHONI FAN COUNT VISIT ${counter} times </h2><br> ::::  ${d}`);
});
app.post('/register',(req,res)=>{
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    var userObject= new User(userid, pwd);
    console.log("Inside Register ",userObject);
    crudObject.addUser(userObject,res);

});
app.post('/login',(req,res)=>{
    console.log("Request ",req.body);
    //var userid  = req.query.userid;
    //var pwd = req.query.pwd;
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    var userObject= new User(userid, pwd);
    crudObject.fetchUser(userObject,res);
    /*if(userid == pwd){
        const path = require("path");
        //var fullPath = path.join(__dirname,"/public/dashboard.html");
        //res.sendFile(fullPath);
        res.render('dashboard',{'uid':userid});
        //res.send('Welcome '+userid);
    }
    else{
        res.send('Invalid Userid or Password !');
    }*/
    //console.log("Login ",req.query.userid);
});

app.listen(1234,()=>{
    console.log("Server Start....");
})
