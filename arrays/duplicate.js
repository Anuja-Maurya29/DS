let arr =[2,4,5,7,3,2,5,9]
console.log(arr);

let unique = new Set([...arr])
// console.log(Array.from(unique));

let unique2= [...new Set(arr)]
// console.log(unique2,"2");

let unique3= arr.filter((value,index,arr)=>{
return  arr.indexOf(value)===index
})

// console.log(unique3);

// using reduce and include

let unique4= arr.reduce((acc,cv,ci)=>{
    if(!acc.includes(cv))acc.push(cv)
        return acc

},[])

console.log(unique4);