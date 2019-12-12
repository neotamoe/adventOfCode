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
console.log(`ones: ${ones}`)
console.log(`twos: ${twos}`)
console.log('ones * twos -->')
console.log(ones * twos)

//2300 too high -- oops read it wrong of which layer to get
// 1677