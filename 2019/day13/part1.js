let fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');

let array = input.split(',').map(Number);

// const findBlocks = (array) => {
//   let blocks = 0;
//   for(let x=0; x<array.length; x+=3){
//     if(array[x+2]==2){
//       blocks++
//     }
//   }
//   console.log('blocks in array is: ', blocks)
//   return blocks;
// }

// findBlocks(array)


// 0 is an empty tile. No game object appears in this tile.
// 1 is a wall tile. Walls are indestructible barriers.
// 2 is a block tile. Blocks can be broken by the ball.
// 3 is a horizontal paddle tile. The paddle is indestructible.
// 4 is a ball tile. The ball moves diagonally and bounces off objects.
const tileType = (tile) => {
  let tileType = ''
  switch(tile){
    case 0: tileType = 'empty';
      break;
    case 1: tileType = 'wall';
      break;
    case 2: tileType = 'block';
      break;
    case 3: tileType = 'paddle';
      break;
    case 4: tileType = 'ball';
      break;
    default: tileType = 'error'
      break;
  }
  return tileType;
}

const findMaxXandY = (array) => {
  let maxX = 0;
  let maxY = 0;
  let negativeX = 0;
  let negativeY = 0;
  for(let i=0; i<array.length; i+=3){
    if(array[i] > maxX){
      maxX = array[i]
    }
    if(array[i] < negativeX){
      negativeX = array[i]
    }
    if(array[i+1] > maxY){
      maxY = array[i+1]
    }
    if(array[i] < negativeY){
      negativeY = array[i]
    }
  }
  console.log(`maxX ${maxX + 1} and maxY: ${maxY + 1}`)
  console.log(`negativeX ${negativeX} and negativeY ${negativeY}`)
  return {maxX: maxX + 1 + Math.abs(negativeX), maxY: maxY + 1 + Math.abs(negativeY)}
}

const xy = findMaxXandY(array)

// Array(2).fill().map(() => Array(3).fill(42));// creates 2 rows and 3 columns initialized with 42

// const grid = Array(xy.maxX).fill().map(() => Array(xy.maxY).fill(0));  // creates 2 rows and 3 columns

// console.log(grid)
// grid[0][0] = 444;

const grid = [];

console.log('grid created')

for(let i=0; i<array.length; i++){
  grid.push({x: array[i], y: array[i+1], tile: array[i+2]})
}
console.log(grid)

/*
for(let j=0; j<array.length; j+=3) {
  let current = grid[array[j]+7][array[j+1]+7]; 
  let tile = array[j+2]
  console.log(`in loop: itertation i=${i}`)
  if(current == 0){
    current = array[j+2]
  } else if (current == 2 && tile == 4){
    // block can be broken by ball
    current = 4;
  } else if (current == 2) {
    // block is already there, but will remain if tile isn't a ball so do nothing
  } else if (current == 1){
    // do nothing; walls are indestructible
  } else if (current == 3){
    // do nothing; paddle is indestructible
  } else {
    current = tile;
  }
  // grid[array[j]+7][array[j+1]+7] = array[j+2]
  // console.log(grid)
}

const findNumberOfBlocks = (grid) => {
  let blockCount = 0;
  for(var i = 0; i < grid.length; i++) {
    var cube = grid[i];
    for(var j = 0; j < cube.length; j++) {
        if(cube[j]==2){
          blockCount++;
        }
    }
  }
  console.log('blockCount is: ', blockCount)
  return blockCount
}

findNumberOfBlocks(grid)
*/

// 96 not right (guessed by only getting # of blocks from array)