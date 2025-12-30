let data = [{ x: 1 }, { x: 2 }];
let copy = data.map(item => ({ ...item }));

copy[0].x = 999;

console.log(data);
console.log(copy);