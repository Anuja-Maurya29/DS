// Question 3: Count the number of digits of a number
let count=0;
function countDigits(number){

    while(number!==0){
    let lastDigit = number%10;
    count++;
    number =Math.floor(number/10);
    }
    return count;

    }

    
    console.log("Total Count :",countDigits(56));
// let num = 12345
// console.log(Math.floor(Math.log10(num) + 1 ))