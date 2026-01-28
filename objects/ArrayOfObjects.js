let lang=[
    { language: 'JavaScript' }, { language: 'JavaScript' }, { language: 'TypeScript' }, { language: 'C++' }
]

// Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it's occurrence (count).

//output

// [
// { language: 'JavaScript', count: 2 },
// { language: 'C++', count: 1 },
// { language: 'TypeScript', count: 1 }
// ]


let count={};
let result=[];
for(let i=0 ;i<lang.length;i++){
    count[lang[i].language]=(count[lang[i].language]||0)+1
}
console.log(count,"count");
for (prop in count){
    const data ={
        language:prop,
        count:count[prop]
    }
  
    result.push(data)

}
console.log(result,"res");




