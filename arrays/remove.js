let str ="a1b2c3"
//abc
let strArray = str.split('')
let newArray=[]
console.log(strArray)
 for(let i=0;i<strArray.length;i++){
    
if(isNaN(strArray[i])){
   
    newArray.push(strArray[i])
}


}
console.log(newArray.join(''))
