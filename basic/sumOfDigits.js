// Question 2: Sum of digits of a number

let sum=0;
function count(number){

    while(number!==0){
        let lastDigit =number%10;
        console.log(lastDigit);
        sum+=lastDigit;
        number=number/10;
    }
    return Math.trunc(sum);

}

console.log(count(49));

