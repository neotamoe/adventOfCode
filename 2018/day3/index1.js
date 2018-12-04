// let fs = require('fs');

// let input = fs.readFileSync('./input.txt','utf8');

// let claims = input.split('\n');

// for(let i=0; i<5; i++){
//     claims[i] = claims[i].split(' ');

//     claims[i][2] = claims[i][2].split(',');
//     claims[i][3] = claims[i][3].split('x');
//     claims[i][2][1] = claims[i][2][1].slice(0, -1);
//     claims[i].splice(0,2);

//     claims[i] = claims[i][0].concat(claims[i][1])
//     for(let j=0; j<claims[i].length; j++){
//         claims[i][j] = parseInt(claims[i][j])
//     }
// }
// above is ready for once test of smaller 10x10 array is okay

let claims = [[1,3,4,5],[3,1,4,2],[5,5,2,2]];

var fabric = new Array(10);

for (var i = 0; i < fabric.length; i++) {
  fabric[i] = new Array(10);
}

console.log(fabric);

// function createArray(length) {
//     var arr = new Array(length || 0),
//         i = length;

//     if (arguments.length > 1) {
//         var args = Array.prototype.slice.call(arguments, 1);
//         while(i--) arr[length-1 - i] = createArray.apply(this, args);
//     }

//     return arr;
// }
// // https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript/966938#966938

// let fabric = createArray(10,10);
for(let k=0; k<10; k++){
    for(let m=0; m<10; m++){
        fabric[k][m] = 0;
    }
}

for(let a=0; a<10; a++){
    console.log(fabric[a]);
}

console.log('setup okay' + '\n');

for(let n=0; n<claims.length; n++) {

    // for claims[3]- claims[1] times
    // start at x=claims[0], go to xMAX=claims[2]
    let plusY = claims[n][3];
    let plusX = claims[n][2];
    while(plusY>0){
        for(let b=claims[n][0]; b<plusX + 1; b++){
            fabric[claims[n][1]][b]++
        }
        plusY--;
    }
}

for(let c=0; c<10; c++){
    console.log(fabric[c]);
}