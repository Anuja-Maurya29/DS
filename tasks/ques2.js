// var x = [1,2,3,4,5,6,7,8,9]; 

// console.log(x.gourav());

// need to print array of even num when gaurav method is called.


var x = [1,2,3,4,5,6,7,8,9];

function gourav(){
    return "hello";
}
Array.prototype.push.call(x,gourav)

// x.prototype.push(gourav)
console.log(x.flat());
// x.gourav();

console.log(typeof(gourav));
console.log(x.gourav());
