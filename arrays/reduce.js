let arr =[1,2,3,4,5]
let sum = arr.reduce((acc,cv)=>{
    console.log(acc,"acc");
    console.log(cv,"cv");
return acc+cv
},0)
console.log(sum);