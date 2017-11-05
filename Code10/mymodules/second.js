function secondCall(){
    require("./third")();
    console.log('this is just a second call');
}
module.exports = secondCall;