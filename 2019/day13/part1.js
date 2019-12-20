let fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');

let array = input.split(',').map(Number);

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
    default: tileType = 'empty'
      break;
  }
  return tileType;
}

const findMaxXandY = (array) => {
  let maxX = 0;
  let maxY = 0;
  for(let i=0; i<array.length; i+=3){
    if(array[i] > maxX){
      maxX = array[i]
    }
    if(array[i+1] > maxY){
      maxY = array[i+1]
    }
  }
  console.log(`maxX ${maxX} and maxY: ${maxY}`)
  return {maxX: maxX, maxY: maxY}
}

const xy = findMaxXandY(array)

// Array(2).fill().map(() => Array(3).fill(42));// creates 2 rows and 3 columns initialized with 42

const grid = Array(xy.maxY).fill().map(() => Array(xy.maxX).fill(0));  // creates 2 rows and 3 columns
console.log(grid)
grid[0][0] = 444;

console.log(grid)