const express = require("express");
const app = express();
app.use(express.static("public"));
app.get('/sendmail',(request,response)=>{
    var userName = request.query.username;
    var message = request.query.message;
    console.log(`UserName is ${userName} and Message is ${message}`);
    response.send(`UserName is ${userName} and Message is ${message}`);
    const sendEmail = require("./mail");
    sendEmail(userName,message,response);
    const doEncryption = require("./encrypt");
    doEncryption();
});
app.listen("1234",()=>{
    console.log("Server Start...");
})