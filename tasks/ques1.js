// Task : 
// var x = [
//   {name: 'ade'},
//   {age: 45}
// ];

// Write a function tranform to get below output
// Output- 
// console.log(transform(x)); // {name: 'ade', age: 45}

var x = [
  {name: 'ade'},
  {age: 45},
  {city:"indore"},
  {company:"Bestpeers"}
];

// function transform(x){
//     console.log(x);
//     let obj={}
    
// for(let i=0;i<x.length;i++){
//    return Object.keys(x[i])=Object.values(x[i])
// }
  



// console.log(transform(x))

const result =x.reduce((acc,cv)=>{
  acc[Object.keys(cv)]=Object.values(cv).toString()
return acc

},{})

console.log(result);