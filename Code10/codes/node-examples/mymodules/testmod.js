class Person
{
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    print(){
        const fn = require("./second");
        fn();
        console.log(`Id is ${this.id} and Name is ${this.name} and Age is ${this.age}`);
    }
}
module.exports = Person;