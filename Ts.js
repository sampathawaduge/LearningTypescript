"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
//console.log(myself);
//Es6
var f = function (name) {
    if (name === void 0) { name = "silva"; }
    return name;
};
var arr = [1, 2, 3];
var a = arr[0], b = arr[1], c = arr[2]; //destructuring array
var obj = { name: "sameera", age: 4 };
var my = obj.name, g = obj.age;
//console.log(my,g); //destructuring object with alias
var myname = "sameera sevindu de silva";
var sf = "My name is\n" + myname + "\n"; //use of string template with backtit
//ES6 exercise for leaning purposes
var double = function (value) { return value * 2; }; //Exercise 01
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
}; //Exercise 02
var numbers = [-3, 33, 38, 5]; //Exercise 03
//console.log(Math.min(...numbers));
var newArray = [55, 20]; //Exercise 04
newArray.push.apply(//Exercise 04
newArray, numbers);
//console.log(newArray);
var testResults = [2, 4];
var home = testResults[0], life = testResults[1]; //Exercise 05
var objects = { fname: "sameera", exp: 5 }; //Exercise 06
var fname = objects.fname, exp = objects.exp;
//console.log(fname,exp);
var myhome = /** @class */ (function () {
    function myhome(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    myhome.prototype.showfname = function () {
        this.printh();
        return fname;
    };
    myhome.prototype.printh = function () {
        alert("ok");
    };
    return myhome;
}());
var result = new myhome("sameera", "silva");
alert(result.showfname());
//# sourceMappingURL=Ts.js.map