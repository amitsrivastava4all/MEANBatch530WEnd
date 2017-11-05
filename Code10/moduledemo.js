class Calc{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    add(){
        return this.x + this.y;
    }
    subtract(){
        return this.x - this.y;
    }
}

function test(){
    console.log("this is test");
}

const object = {
    print(){
        console.log("this is print");
    }
}

module.exports=Calc;
module.exports.t = test;
module.exports.ob = object;

