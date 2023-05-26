const point = [1,20,23,12,54,67,80,20]
point.sort(function(a,b){return a-b});
let max = -Infinity;
for(let i=0;i<point.length;i++){
    if(point[i]>-Infinity){
        max=point[i];
    }
}
console.log(point);
console.log(max);
// forEach() method
let text="";
point.forEach(myfunction);
console.log(text+"\s");

function myfunction(value,index,array){
    text+=value
}