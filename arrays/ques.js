const arr =[2,5,7,9,12,34,66]



let format ={
    even:{
        num:[],
        sum:0
    },
    odd:{
        num:[],
        sum:0
    },
    totalSum:0

}

let result = arr.reduce((acc,cv)=>{
    if(cv%2==0){
       acc.even.num.push(cv)
       acc.even.sum+=cv

    }
if(cv%2!=0){
       acc.odd.num.push(cv)
       acc.odd.sum+=cv

    }

    acc.totalSum+=cv
    return acc

},format)

console.log(result);