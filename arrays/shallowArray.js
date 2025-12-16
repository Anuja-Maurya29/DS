// Shallow Copy of Array
/*
spread operator -> ....
concat 
Array.from
Slice

*/

let arr1 = [4,34,[11,22,33],24,66,80]
let arr2 = [...arr1];
let arr3= arr1.slice()
let arr4 = Array.from(arr1)

console.log(arr1,"orignal array");
console.log(arr2,"copied array");
console.log(" after mutation changes in nested objects reflect in orignal arrays too");
arr2[2].push(44);``

console.log(arr1,"orignal array");
console.log(arr2,"copied array");

console.log("comparisons");
console.log(arr3===arr1); //false
console.log(arr3[2]===arr1[2]);//true same refrence
