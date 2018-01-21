const express = require("express");
const app = express();
var bodyParser = require('body-parser');
app.use(express.static("public"));
const userRoutes = require("./routes/userroutes");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',userRoutes);
app.listen(1234,()=>{
    console.log("Server Start...");
});