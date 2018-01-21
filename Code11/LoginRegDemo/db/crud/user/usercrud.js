var User = require("../../schema/user/userschema");
const userOperation={
    login(userObject,response){
        User.find(function(err, docs){
            if(err){
                response.send('Error in Login');
            }
            if(docs){
                if(docs.length>0){
                    response.send('Login Done');
                }
                else{
                    response.send('Invalid Userid or Password');
                }
            }
        });
    },
    register(userObject,response){
        console.log("Inside Register.....",userObject);
        User.create(userObject,function(err){
            if(err){
                response.send("Can't Register Error");
                console.log("Error is ",err);
            }
            else{
                console.log("Register ",userObject);
                response.send("Register Done");
            }
        });
    }
}
module.exports = userOperation;