let word ="Anuja23";
const str=[];
const num=[];
let newArray = word.split('');
console.log(newArray,"newarray");

newArray.forEach((item)=>{
    if(isNaN(item))
    {
        num.push(item)
    }
    else{
        str.push(item)
    }
})
console.log(str.join(''));
console.log(num.join(''));

