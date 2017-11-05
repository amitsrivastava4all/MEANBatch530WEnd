const CalcClass = require("./moduledemo"); 
var obj = new CalcClass(100,200);
console.log(obj.add());
console.log(obj.subtract());
CalcClass.t();
CalcClass.ob.print();

const PersonClass = require("./mymodules");
var ram = new PersonClass(1001,"Ram Kumar",21);
ram.print();