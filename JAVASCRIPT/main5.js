// using Array leterals.
const car = ["BMW","MARCEDEZE-Benz","MARUTI","FORD"];
document.writeln(car);
// using the new Keywords.
const newCar = new Array("BMW","MARCEDEZE-Benz","MARUTI","FORD","Jagaur");
console.log(newCar);
console.log(car[0]);
console.log(car[1]);
car[0]="Ashok LeyLand";
console.log(car[0]);
const person = {Name:"Shailendra",
                Age: 25,
                class:"Geekfs-09",
                cource:"JavaScript",
};
console.log(person.Age);
console.log(person);
// looping the Arrays.
for(let idx=0;idx<car.length;idx++){
    console.log(car[idx]);
}
const fruits = ["Apple","Banana","Grapes","WaterMelon","PineApple"];
//Adding the element in an Array.
fruits.push("Lemon");

console.log(fruits);
// Methods of Arrays.
//length method.
console.log(car.length);
//toString Method.
console.log(car.toString());
// join method.
console.log(car.join("+"));
//push method.
car.push("Audi");
console.log(car);
// pop method.
car.pop();
console.log(car);
//shift method.
console.log(car.shift());
const num = [1,5,3,2,9,6,8,12,4];
console.log(num.sort());
num.sort(function(a,b){return a-b})
console.log(num);