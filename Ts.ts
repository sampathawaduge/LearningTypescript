type silva = {money:number,deposit:(value:number)=>void};
type sameera = {name:string,bankAccount:silva,hobbies:string[]};

let bankAccount:silva= {
  money:2000,
  deposit(value:number):void{
    this.money += value;
  }
};

let myself:sameera= {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports","Cooking"]
};

myself.bankAccount.deposit(3000);
//console.log(myself);

//Es6
var f=(name:string="silva"):string=>{ //Fat arrow function
  return name;
}

let arr:number[]=[1,2,3];
const [a,b,c]=arr; //destructuring array

const obj={name:"sameera",age:4};
const {name:my,age:g}=obj;
//console.log(my,g); //destructuring object with alias

let myname:string="sameera sevindu de silva";
let sf:string=`My name is
${myname}
`; //use of string template with backtit


//ES6 exercise for leaning purposes
let double=(value:number):number=>value*2;//Exercise 01

let greet=(name:string="Max"):void=>console.log(`Hello, ${name}`);//Exercise 02

let numbers:number[]=[-3,33,38,5];//Exercise 03
//console.log(Math.min(...numbers));

let newArray:number[]=[55,20]; //Exercise 04
newArray.push(...numbers);
//console.log(newArray);

let testResults:number[]=[2,4];
const [home,life]=testResults;//Exercise 05

let objects:{fname:string,exp:number}={fname:"sameera",exp:5};//Exercise 06
const {fname,exp}=objects;
//console.log(fname,exp);

class myhome{
  constructor(public fname:string,public lname:string){}
  showfname():string{
    this.printh();
    return fname;
  }
  printh(){
    alert("ok");
  }
}

class child extends myhome{

}

const result=new myhome("sameera","silva");
alert(result.showfname());
