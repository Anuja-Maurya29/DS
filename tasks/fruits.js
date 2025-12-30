let fruits=["apple","guava","grapes","banana","apple","guava"]
 function countFruits(fruits){
    let obj={}
    for(let i=0;i<fruits.length;i++){
        obj[fruits[i]]=(obj[fruits[i]]||0)+1
    }
    return obj;
 }

 console.log(countFruits(fruits));