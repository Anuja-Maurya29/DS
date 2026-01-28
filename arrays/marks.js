const arr =[
    {
        name:"vaibhavi",
        marks:[
            {
                math:30,
                eng:40

            }
        ]
    },

    {
        name:"pragya", 
        marks:[
            {
                math:40,
                eng:50
            }
        ]
    },

    {
        name:"Anuja",
        marks:[
            {
                math:30,
                eng:50
            }
        ]
    }
]





for(let i=0;i<arr.length;i++){
   arr[i].marks.forEach((i)=>{
    i.math+=5
    i.eng+=5
    i.phy=40
   })

}

for( item of arr){
console.log(item.name ,item.marks);
}
