let fs = require('fs');
let input = fs.readFileSync('./input.txt','utf8');

let array = input.split(',').map(Number);
// console.log(`array.length: ${array.length}`)

let i=0;
while(i<array.length){

  let opCode, param1Mode, param2Mode, param3Mode, iInc
  const testInput = 1;
  if(array[i] == 3) {
    opCode = array[i];
    iInc = 2
  } else if (array[i]==99) {
    opCode = 99
    console.log('FINAL----------------------> : ' + array[0]);
  } else {
    let current = array[i];
    opCode = current % 100
    current = Math.floor(current/100);
    param1Mode = current % 10
    current = Math.floor(current/10);
    param2Mode = current % 10
    current = Math.floor(current/10);
    param3Mode = current % 10
    if(opCode == 1 || opCode == 2){
      iInc = 4
    } else if (opCode == 4) {
      iInc = 2
    }
  } 
  

  // console.log(`opCode: ${opCode} :::: parammode1: ${param1Mode} :::: parammode2: ${param2Mode} :::: parammode3: ${param3Mode}`)

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
    // console.log(`opCode: ${opCode} :::: firstPosition: ${firstPosition} :::: firstValue: ${firstValue} :::: secondPosition: ${secondPosition} :::: secondValue ${secondValue} :::: replacePosition: ${replacePosition} :::: replacePositionValue: ${replacePositionValue}`)

  } else if (opCode==3) {
    // Opcode 3 takes a single integer as input and saves it to the position given by its only parameter. For example, the instruction 3,50 would take an input value and store it at address 50.
    let position = array[parseInt(i+1)]
    array[position] = testInput
    // console.log('opCode 3: puts 1 at array[position]' + position)
  } else if (opCode==4) {
    // Opcode 4 outputs the value of its only parameter. For example, the instruction 4,50 would output the value at address 50.
    const outputValue = param1Mode == 0 ? array[array[parseInt(i+1)]] : array[i+1]
    console.log(`output: ${outputValue} at index: ${i}`)
  } else if (opCode==99) {
    console.log('final total', array[0]);
  }
  // console.log(`increase i by ${iInc}`)
  i += iInc;
  // console.log(`i is now: ${i}`)
}

// 7259358 
// assist from https://codepen.io/gyzkard/pen/ExaVvEb?editors=0011 in figuring out better way to get opCode