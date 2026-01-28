const list =["apple","banana","grapes","orange"];

list.map((item)=>(
    console.log(item)
))

let count={}
list.map((item)=>{
    count[item]
    return count[item]=(count[item||0])+1;
    
})
console.log(list,"listttt");