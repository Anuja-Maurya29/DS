const students = [
  {
    name: "Vaibhavi",
    marks: [
      { math: 30, eng: 40 }
    ]
  },
  {
    name: "Pragya",
    marks: [
      { math: 40, eng: 50 }
    ]
  },
  {
    name: "Anuja",
    marks: [
      { math: 30, eng: 50 }
    ]
  }
];

// Print all student names.

// Print only the English marks of each student.

// Print the total marks (math + eng) for each student.

// Find the student whose math marks are exactly 40.

// Count how many students scored more than 45 in English.

// students.map((item)=>{
//     console.log(item.name);
// })

// students.map((student)=>{
//     student.marks.map((mark)=>console.log(`${student.name} english marks is:${mark.eng}`))
// })

// students.map((student)=>{
//     student.marks.map((mark)=>console.log(`${student.name} total marks is :${(mark.eng+mark.math)}`))
// })
let count=0;
 students.map((student)=>{
    student.marks.map((mark)=>{  
   
        if(mark.eng===40){
            console.log(`${student.name} eng marks are :${mark.eng}`);
        }
        else if(mark.eng>=45){
            count++
            console.log(`${student.name} eng marks are :${mark.eng}`);
        }
       
       console.log(`total marks of ${student.name} are ${(mark.eng+mark.math)}`);
       
    })
})
console.log("sutend with eng marks greater than 45 is ",count);












// let data = [{ x: 1 }, { x: 2 }];
// let copy = data.map(item => ({ ...item }));

// copy[0].x = 999;

// console.log(data);
// console.log(copy);