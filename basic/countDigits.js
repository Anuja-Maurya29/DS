// Question 3: Count the number of digits of a number
let count=0;
function countDigits(number){

    while(number!==0){
    let lastDigit = number%10;
    count++;
    number =Math.trunc(number/10);
    }
    return count;

    }

    
    console.log("Total Count :",countDigits(56));
