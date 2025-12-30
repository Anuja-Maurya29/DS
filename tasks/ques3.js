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