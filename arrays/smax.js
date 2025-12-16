let arr= [54,53,88,7,3,2,7,]
let max=arr[0],smax=arr[0];

for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        smax=max;
        max=arr[i];
        
    }
}
console.log(arr);
console.log("max",max);
console.log("smax",smax);