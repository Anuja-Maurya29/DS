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
  {city:"indore"}
];

function transform(x){
    console.log(x);
  
    return {...x[0],...x[1]};

}
console.log(transform(x))
