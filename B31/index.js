
console.log("hi,😂")
var a=3;
var b="5"
console.log(a+b);
console.log(a-b);



//20-12-21 MON

function sum(num1,num2) {
    return num1+num2;
}

console.log(sum(4,10));      // func call
console.log(sum(50,100));
console.log(sum(70,40));

var f1 = sum(4,10);
console.log(f1);
...........


var marks =[40,9,80,0,30];
var max = -Infinity          //least number in js
for (var mark of marks){
    if(mark>max) {
        max=mark;

    }
}
 console.log(max);
                            

console.log("max,"Math.max(9,20));   //math.max()

console.log(9,20,50,30);






var price = 400;
function getprice(){
    console.log("old price",price);
    var price = 800;
    console.log("new price",price);
}
getprice();

