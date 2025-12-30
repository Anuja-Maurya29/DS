// How to concatenate two arrays in JavaScript?

//1 using concat();

let arr1=[1,2,3,4,5];
let arr2=[10,20,30,40,50];
let arr3 =arr1.concat(arr2);

console.log(arr3,"merged array using concat");

//using spread operator 
arr4 = [...arr1,...arr2];
console.log(arr4,"merged array  using spread operator ");