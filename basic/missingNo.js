// Question 6: Missing Number in an  sequence of Array

const arr = [1,2,3,5,6,7,8,9]
let sum = 0;
let arrSum=0;
let i=1
while( i<=9){
    sum +=i;
    i++
}

arr.forEach((num)=>{
    arrSum+=num;

})
const difference = sum-arrSum;
console.log("Missing no is",difference);
