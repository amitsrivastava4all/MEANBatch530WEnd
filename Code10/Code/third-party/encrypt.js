function doEncryption(){
var bcrypt = require('bcrypt');
const saltRounds = 10;
var password = "amit";
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, encryptedPassword) {
        // Store hash in your password DB.
        console.log("Password is "+encryptedPassword);

    });
});
}
module.exports = doEncryption;