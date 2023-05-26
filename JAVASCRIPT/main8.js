const d = new Date();
console.log(d);
const t = new Date("15 jan 2015");
console.log(t);
const g = new Date(24*60*60*100);
console.log(g);
const f = new Date(24*60*60*1000);
console.log(f);
console.log(f.toString());
// toDate String method convert it in more readable form
console.log(f.toDateString());
console.log(f.toUTCString());
console.log(Date.parse("16 May 2023"));
console.log(Math.PI);
console.log(Math.E)
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log(new Date().getDay());
switch("tuesday"){
    case 1:
    text = "today is sunday"
    console.log(text);
    break;
    case 2:
    text="today is tuesday"
    console.log(text);
    break;
    case 3:
    text="today is monady";
    console.log(text);s
    break;
    deafault:
    text="no case match";
    console.log(text);
}
for(let i=0;i<5;i++){
    console.log(i);
}
const string ="Shailendra Rajak";
let text = "";
for(const x of string){
    text+=x+" ";
}
console.log(text);
// creating set
const letters = new Set([1,2,3,5,6,7,8]);
console.log(letters.size);
// for of loop to iterate over the set
for(const x of letters){
    console.log(x);
}
const person = {
    fullName:function(){
        return this.firstName+" "+ this.lastName;
    }
}
const person1 = {
    firstName:"Shailendra",
    lastName:"Rajak",

}
const person2 = {
    firstName:"Inspector",
    lastName:"Chaudhary",

}
console.log(person.fullName.call(person2));
// js class
class car{
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
}
// create an object
const car1 = new car("Maruti",2001);
const car2 = new car("BMW",2005);
console.log(car1);
console.log(car2);
// js constructor and method
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  const myCar = new Car("Ford", 2014);
  console.log(myCar.age());
  
