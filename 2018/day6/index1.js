let fs = require('fs');

// let input = fs.readFileSync('./input.txt','utf8');
let input = fs.readFileSync('./testinput.txt', 'utf8');

let coordinates = input.split('\n');
coordinates.forEach(element => {
    element = element.split(', ')
});

for(let i=0; i<coordinates.length; i++){
    coordinates[i] = coordinates[i].split(', ').map(Number);
    console.log(coordinates[i]);
}

let X = coordinates.sort(function(a, b) {
    return a[0] - b[0];
});
let x = X[coordinates.length-1];

let Y = coordinates.sort(function(a, b) {
    return a[1] - b[1];
});
let y = Y[coordinates.length-1];
console.log('x',x)
console.log('y',y);


// let x = [359, 184];
// let y = [156,359];
// console.log('manually found: x: ' + x + ' and y: ' + y);


let manhattan = (Math.abs(x[0] - y[0]) + (Math.abs(x[1]-y[1])));
console.log(manhattan)


