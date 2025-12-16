/* create an independent copy of an object/array along with nested properties
mutation doesn't affect other

*/


let arr1 = [4,34,[11,22,33],24,66,80];
let arr2 = JSON.parse(JSON.stringify(arr1))
console.log("before modification");
console.log(arr1,"orignal array");
console.log(arr2,"copied array");

console.log("after modification");
arr2[2].push(44);
console.log(arr1,"orignal array");
console.log(arr2,"copied array");

let arr3= structuredClone(arr1);

arr3[2].pop();
console.log(arr3,"arr3");
console.log(arr1);