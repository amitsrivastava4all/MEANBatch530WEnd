const userSchema = require("./schema");
class UserOperations{
    addUser(userObject,response){
        console.log("Inside Add User ",userObject);
        //console.log("Schema ",userSchema.create);
        userSchema.create(userObject,function(error){
            console.log("Inside Add ",userObject);
            if(error){
                console.log("Error .... ",error);   
                response.send("User Can't Be Created...."); 
                   
            }
            else{
                console.log("Registered....");
                response.send("User Registered....");
            }

        });
    }
    fetchUser(userObject,response){
          userSchema.find({"userid":userObject.userid,"password":userObject.password},(error,docs)=>{
                  if(error){
                      response.send('SOME DB PROBLEM OCCUR');
                  }
                  else
                  if(docs.length==0){
                      response.send('Userid or Password is Invalid');
                  }
                  else
                  if(docs.length>=1){
                      response.send('Welcome '+docs[0].userid);
                  }  
          })  
    }
}
module.exports = UserOperations;