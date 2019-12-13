let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

console.log(input.length) //15000

let numbers = input.split('');

let total = 0;

let bossArray = []

// 25w x 6h = 150
let i,j,temparray,chunk = 150;
for (i=0,j=numbers.length; i<j; i+=chunk) {
    temparray = numbers.slice(i,i+chunk);
    bossArray.push(temparray)
}

console.log(bossArray.length)
let countArray = [];

bossArray.forEach((element, index) => {
  // element.sort((a,b) => a-b)
  let zeroCount = 0
  for(let i=0; i<element.length; i++){
    if(element[i]==0){
      zeroCount++;
    }
  }
  countArray.push({index: index, zeroCount: zeroCount}) 
})

console.log(countArray)

let minZeroCount = 150;
let minZeroCountIndex = 0;
countArray.forEach(count => {
  if(count.zeroCount < minZeroCount){
    minZeroCount = count.zeroCount;
    minZeroCountIndex = count.index;
  }
})

console.log(`maxZeroCount: ${minZeroCount}`) // 54
console.log(`maxZeroCountIndex: ${minZeroCountIndex}`) // 99

// On that layer, what is the number of 1 digits multiplied by the number of 2 digits?
let layer = bossArray[minZeroCountIndex];
let zeroes = 0;
let ones = 0;
let twos = 0;

layer.forEach(number => {
  if(number==0){
    zeroes++;
  } else if (number==1){
    ones++;
  } else if (number==2){
    twos++;
  } else {
    console.log('not a 0, 1 or 2')
  }
})

console.log(`ones * twos --> ${ones * twos}`)

/*
  part 2
*/
let finalImage = new Array(150).fill('');

bossArray.forEach(layer => {
  for(let x=0; x<layer.length; x++){
    if(layer[x]==0 && finalImage[x]===''){
      finalImage[x] = layer[x];
    } else if (layer[x]==1 && finalImage[x]===''){
      finalImage[x] = layer[x]
    }
  }
})

let y=0;
let line = ''
while(y<150){
  if(y%25===0){
    console.log(line)
    line = ''
  }
  line += finalImage[y]
  y++
}
console.log(line)
console.log('')

//ubufp

// 1001011100100101111011100
// 1001010010100101000010010
// 1001011100100101110010010
// 1001010010100101000011100
// 1001010010100101000010000
// 0110011100011001000010000