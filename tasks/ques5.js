// Q: Reverse each word in a sentence but keep word order.
// reverseWords("Hello World");
// // Output: "olleH dlroW"

let Word ="Hello world"


let splitWords = Word.split(' ')
console.log(splitWords,"111");

function reverseWords(splitWords){
    return splitWords.map((word)=>word.split('').reverse().join('')).join(' ')
}

console.log(reverseWords(splitWords));