// Adder(1) (2) (3) 
// Output :6 

// Write the function to get desired output

function Adder(a,b,c){

return function(b){

    return function(c){

        return a+b+c;
    }
}

}

console.log(Adder(4)(5)(6));

// function num1(a){

//     return function num2(b){
//         return function num3(){

//         }
//     }
//     return num2()
// }

const func1=(num1)=>{

    const func2 =(num2)=>{
        const func3=(num3)=>{

            return num1*num2*num3
        }
        return func3
    }
    return func2
}

const result = func1(2)(3)(2)
console.log(result);