// How do you check if an element exists in an array?


let arr = [4,34,24,66,80]

// using includes
console.log(arr.includes(90));
console.log(arr.includes(66));

// without includes
console.log("without includes");
const target = 66;
let result;
for(let i=0;i<arr.length;i++){
    if(target=== arr[i])
    {
      result= true
      break;
    }
    else{
    result = false;
    }

}
console.log("result:",result);