let fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');

let array = input.split(',').map(Number);

var permArr = [],
  usedChars = [],
  permArrIndex = 0,
  bestOutput = 0,
  bestOutputArr;

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

permute([0,1,2,3,4])

// function from: https://stackoverflow.com/questions/9960908/permutations-in-javascript

// const testInput = 5;
// console.log('TEST INPUT -----------------> :' + testInput)

const intCodeComputer = (array, testInput, testInput2) => {
  let inputCount = 0
  let i=0;
  while(i<array.length){
  
    let opCode, param1Mode, param2Mode, param3Mode
    if(array[i] == 3) {
      opCode = array[i];
      iInc = 2
    } else if (array[i]==99) {
      opCode = 99
      // console.log('FINAL----------------------> : ' + array[0]);
    } else {
      let current = array[i];
      opCode = current % 100
      current = Math.floor(current/100);
      param1Mode = current % 10
      current = Math.floor(current/10);
      param2Mode = current % 10
      current = Math.floor(current/10);
      param3Mode = current % 10
    } 
    
  
    // console.log(`opCode: ${opCode} :::: parammode1: ${param1Mode} :::: parammode2: ${param2Mode} :::: parammode3: ${param3Mode}`)
    // console.log(array.toString())
    if (opCode==1){
      // add value of position[i+1] + value of position[i+2], place value in position[i+3]
      const firstPosition = array[parseInt(i+1)]
      let firstValue
      if(param1Mode == 0){
        firstValue = array[firstPosition]  
      } else {
        firstValue = firstPosition
      }
  
      const secondPosition = array[parseInt(i+2)]
      let secondValue
      if(param2Mode == 0) {
        secondValue = array[secondPosition]
      } else {
        secondValue = secondPosition
      }
  
      const replacePosition = array[parseInt(i+3)]
      const replacePositionValue = parseInt(firstValue) + parseInt(secondValue);
      array[parseInt(replacePosition)] = replacePositionValue;
      i+=4
      // console.log(`opCode: ${opCode} :::: firstPosition: ${firstPosition} :::: firstValue: ${firstValue} :::: secondPosition: ${secondPosition} :::: secondValue ${secondValue} :::: replacePosition: ${replacePosition} :::: replacePositionValue: ${replacePositionValue}`)
    } else if (opCode==2) {
      // multiply value of position[i+1] + value of position[i+2], place value in position[i+3]
      
      const firstPosition = array[parseInt(i+1)]
      let firstValue
      if(param1Mode == 0) {
        firstValue = array[firstPosition]
      } else {
        firstValue = firstPosition
      }
  
      const secondPosition = array[parseInt(i+2)]
      let secondValue
      if(param2Mode == 0) {
        secondValue = array[secondPosition]
      } else {
        secondValue = secondPosition;
      }
  
      const replacePosition = array[parseInt(i+3)]
      const replacePositionValue = parseInt(firstValue) * parseInt(secondValue);
      array[parseInt(replacePosition)] = replacePositionValue;
      i+=4
      // console.log(`opCode: ${opCode} :::: firstPosition: ${firstPosition} :::: firstValue: ${firstValue} :::: secondPosition: ${secondPosition} :::: secondValue ${secondValue} :::: replacePosition: ${replacePosition} :::: replacePositionValue: ${replacePositionValue}`)
  
    } else if (opCode==3) {
      // Opcode 3 takes a single integer as input and saves it to the position given by its only parameter. For example, the instruction 3,50 would take an input value and store it at address 50.
      
      let position = array[parseInt(i+1)]
      if(inputCount == 0){
        array[position] = testInput 
        inputCount++;
      } else {
        array[position] = testInput2
      }
      // console.log('opCode 3: puts 1 at array[position]' + position)
      i+=2
    } else if (opCode==4) {
      // Opcode 4 outputs the value of its only parameter. For example, the instruction 4,50 would output the value at address 50.
      const outputValue = param1Mode == 0 ? array[array[parseInt(i+1)]] : array[i+1]
      console.log(`OUTPUT-------------> ${outputValue} at index: ${i}`)
      i+=2
      return outputValue;
    } else if (opCode == 5) {
      // if the first parameter is non-zero, it sets the instruction pointer to the value from the second parameter. 
      // Otherwise, it does nothing.  
      const firstParam = param1Mode == 0 ? array[array[i+1]] : array[i+1]
      if(firstParam != 0) {
        i = param2Mode == 0 ? array[array[i+2]] : array[i+2]
      } else {
        i+=3
      }
    } else if (opCode == 6) {
      const firstParam = param1Mode == 0 ? array[array[i+1]] : array[i+1]
      if(firstParam == 0) {
        i = (param2Mode == 0 ? array[array[i+2]] : array[i+2])
      } else {
        i+=3
      }
    } else if (opCode == 7) {
      // if the first parameter is less than the second parameter, it stores 1 in the position given by the third parameter. 
      // Otherwise, it stores 0.
      const first = param1Mode == 0 ? array[array[i+1]] : array[i+1]
      const second = param2Mode == 0 ? array[array[i+2]] : array[i+2]
      if(first<second){
        param3Mode == 0 ? array[array[i+3]] = 1 : array[i+3] = 1
      } else {
        param3Mode == 0 ? array[array[i+3]] = 0 : array[i+3] = 0
      }
      i+=4
    } else if (opCode == 8) {
      // if the first parameter is equal to the second parameter, it stores 1 in the position given by the third parameter. 
      // Otherwise, it stores 0.
      const first = param1Mode == 0 ? array[array[i+1]] : array[i+1]
      const second = param2Mode == 0 ? array[array[i+2]] : array[i+2]
      // console.log(`first: ${first} and second ${second}`)
      if(first==second){
        param3Mode == 0 ? array[array[i+3]] = 1 : array[i+3] = 1
      } else {
        param3Mode == 0 ? array[array[i+3]] = 0 : array[i+3] = 0
      }
      i+=4
    } else if (opCode==99) {
      // console.log('final total', array[0]);
      i=array.length+1;
    }
    // console.log(`i is now: ${i}`)
  }
  
}

console.log(`permArr.length: ${permArr.length}`)

while(permArrIndex < permArr.length){
  console.log(`permArrIndex: ${permArrIndex}`)
  let amplifier = 0;
  let first = intCodeComputer(array, permArr[permArrIndex][amplifier], 0)
  // console.log(first)
  amplifier++;
  let second = intCodeComputer(array, permArr[permArrIndex][amplifier], first)
  amplifier++;
  let third = intCodeComputer(array, permArr[permArrIndex][amplifier], second)
  amplifier++;
  let fourth = intCodeComputer(array, permArr[permArrIndex][amplifier], third)
  amplifier++;
  let fifth = intCodeComputer(array, permArr[permArrIndex][amplifier], fourth)
  if(fifth > bestOutput){
    bestOutputArr = permArr[permArrIndex]
    bestOutput = fifth
    console.log(`bestOutput: ${bestOutput} with thrusterTotal: ${fifth}`)
  }
  console.log(`end...........\n`)
  permArrIndex++;
}

console.log(bestOutput, bestOutputArr)

// answer: 567045