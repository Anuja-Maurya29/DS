// Q:
// Count how many times each character appears in a string.

// countChars("javascript");
// Output: 
// {
//   j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1
// }

let word ="javascript"
let array =word.split('');
console.log(array);

function countChars(word){
let count=0;
let obj ={};
for(let i=0;i<word.length;i++){
    obj[word[i]]= (obj[word[i]] || 0) + 1;
}
return obj

}

// console.log(countChars(array));



// countChars("javascript");

const givenWord = "javascript"
const charArray = givenWord.split('')
console.log(charArray);

const counter ={}
 const result =charArray.map((char)=>{
 return  counter[char]=(counter[char]||0)+1

})
console.log(result,"result");