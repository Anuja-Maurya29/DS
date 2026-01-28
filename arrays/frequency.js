let arr =[2,4,5,7,3,2,5,9]

let obj={}

 arr.forEach((value)=>{
     obj[value]=((obj[value]||0)+1)
})

// console.log(obj);

let fruits=["apple","banana","orange","grapes","apple","orange"]
let count ={}

fruits.forEach((value)=>{
    count[value]=(count[value]||0)+1
})
// console.log(count,"count");

//using reduce 
let freq=fruits.reduce((acc,cv,)=>{
acc[cv]=(acc[cv]||0)+1
return acc
},{})
console.log(freq,"freq");