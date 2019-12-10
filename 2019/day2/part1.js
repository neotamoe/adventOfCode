let fs = require('fs');

let input = fs.readFileSync('./input.txt','utf8');

let array = input.split(',');

// replace position 1 with the value 12 and replace position 2 with the value 2
array[1] = 12;
array[2] = 2;

for(let i=0; i<array.length; i+=4) {
  if (array[i]==1){
    console.log(array.toString())
    console.log('it is a 1')
    // add value of position[i+1] + value of position[i+2], place value in position[i+3]
    const firstPosition = array[i+1]
    console.log(`firstPosition: ${firstPosition}`)
    const firstValue = array[parseInt(firstPosition)]
    console.log(`firstValue: ${firstValue}`)

    const secondPosition = array[i+2]
    console.log(`secondPosition: ${secondPosition}`)
    const secondValue = array[parseInt(secondPosition)]
    console.log(`secondValue: ${secondValue}`)

    const replacePosition = array[i+3]
    const replacePositionValue = parseInt(firstValue) + parseInt(secondValue);
    array[parseInt(replacePosition)] = replacePositionValue;


  } else if (array[i]==2) {
    console.log('it is a 2')
    console.log(array.toString())

    // multiply value of position[i+1] + value of position[i+2], place value in position[i+3]

    const firstPosition = array[parseInt(i+1)]
    console.log(`firstPosition: ${firstPosition}`)
    const firstValue = array[parseInt(firstPosition)]
    console.log(`firstValue: ${firstValue}`)

    const secondPosition = array[parseInt(i+2)]
    console.log(`secondPosition: ${secondPosition}`)
    const secondValue = array[parseInt(secondPosition)]
    console.log(`secondValue: ${secondValue}`)

    const replacePosition = array[i+3]
    const replacePositionValue = parseInt(firstValue) * parseInt(secondValue);
    array[parseInt(replacePosition)] = replacePositionValue;

    // array[parseInt(array[i+3])] = parseInt(array[array[i+1]]) * parseInt(array[array[i+2]])
  } else if (array[i]==99) {
    console.log('it is a 99')
    console.log(array.toString())
    console.log('final total', array[0]);
    return;
  }
}

