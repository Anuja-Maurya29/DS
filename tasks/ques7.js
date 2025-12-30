// Problem: Remove Consecutive Duplicate Characters Iteratively
// Description:

// Write a function that takes a string as input and removes all consecutive duplicate characters iteratively until no consecutive duplicates remain.


// do not use regular expressions.


// The process should continue after each removal, checking again for new consecutive duplicates created by the previous removal.



// Input:
// A single string containing lowercase and/or uppercase letters.
// Example:
// "abcdeeedcbazkz"


// Output:
// A string with all consecutive duplicates removed after iterative processing.
// Example:
// "zkz"


// Explanation:

// Original string: "abcdeeedcbazkz"


// Remove consecutive "eee" → "abcddcbazkz"


// Remove consecutive "dd" → "abccbazkz"


// Remove consecutive "cc" → "abbazkz"


// Remove consecutive "bb" → "aazkz"


// Remove consecutive "aa" → "zkz"


// No more consecutive duplicates → final result: "zkz"

 let Originalstring= "abcdeeedcbazkz";

 function removeDuplicate(str){

    let array = str.split('');
    let obj={}
    let count=0;
    for(let i=0;i<array.length;i++){
    //  obj[array[i]]=(obj[array[i]]||0)+1
if(array[i]===array[i+1]){
    count++;
}
    }




    return obj;

 }
console.log(removeDuplicate(Originalstring));