class User{
    constructor(userid, password, name="", address=""){
           this.userid = userid;
           this.password = password;
           this.name = name;
           this.address = address; 
    }
}
module.exports = User;