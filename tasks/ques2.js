// var x = [1,2,3,4,5,6,7,8,9]; 

// console.log(x.gourav());

// need to print array of even num when gaurav method is called.


var x = [1,2,3,4,5,6,7,8,9];

function gourav(){
    return "hello";
}
Array.prototype.gourav =function(){

    return this.filter((num)=>num%2==0)
}


console.log(typeof(gourav));
console.log(x.gourav());
