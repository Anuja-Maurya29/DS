// Q: 
// isPalindrome("Race Car");
// // Output: true

let str ="Race Car";
let str2 ="Anuja Maurya";


function isPalindrome(str){
    let transformedString=str.trim().toLowerCase().split('').join(' ').replaceAll(" ","")
    console.log(transformedString,"transform");
    let reverseString = transformedString.split('').reverse().join('')
    console.log(reverseString,"reverse");
    if(transformedString===reverseString){
        return true;
    }
    else{
        return false;
    }

}
console.log(isPalindrome(str2));