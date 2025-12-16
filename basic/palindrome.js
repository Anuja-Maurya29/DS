// Question 4: Check if a number is palindrome

let number =242;
let num= number;
let reverse=0;

function palindrome(number){

    while(number!==0){
   let lastDigit = number%10;
reverse =reverse*10+lastDigit;
number=Math.trunc(number/10);
    }

    if(num===reverse){
        return true;
    }
    else{
        return false;
    }

}
console.log((palindrome(num))?`Yes ${num} is palindrome`:`  No ${num} is not palindrome`);